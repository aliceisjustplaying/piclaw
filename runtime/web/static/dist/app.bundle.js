var AN=Object.defineProperty;var kN=(_)=>_;function MN(_,$){this[_]=kN.bind(null,$)}var Z1=(_,$)=>{for(var j in $)AN(_,j,{get:$[j],enumerable:!0,configurable:!0,set:MN.bind($,j)})};var A_=(_,$)=>()=>(_&&($=_(_=0)),$);var dj={};Z1(dj,{useState:()=>C,useRef:()=>g,useReducer:()=>pj,useMemo:()=>Y0,useLayoutEffect:()=>S4,useImperativeHandle:()=>fN,useErrorBoundary:()=>gN,useEffect:()=>u,useDebugValue:()=>uN,useContext:()=>SN,useCallback:()=>P,render:()=>G$,html:()=>B,h:()=>t8,createContext:()=>RN,Component:()=>x5});function j$(_,$){for(var j in $)_[j]=$[j];return _}function a8(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function t8(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?b6.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return R6(_,Y,G,Z,null)}function R6(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++Pj:Z,__i:-1,__u:0};return Z==null&&x_.vnode!=null&&x_.vnode(X),X}function m6(_){return _.children}function x5(_,$){this.props=_,this.context=$}function P4(_,$){if($==null)return _.__?P4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?P4(_):null}function wN(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=j$({},$);X.__v=$.__v+1,x_.vnode&&x_.vnode(X),e8(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?P4($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,mj(G,X,Z),$.__e=$.__=null,X.__e!=j&&gj(X)}}function gj(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),gj(_)}function d8(_){(!_.__d&&(_.__d=!0)&&k$.push(_)&&!g6.__r++||Oj!=x_.debounceRendering)&&((Oj=x_.debounceRendering)||Rj)(g6)}function g6(){try{for(var _,$=1;k$.length;)k$.length>$&&k$.sort(fj),_=k$.shift(),$=k$.length,wN(_)}finally{k$.length=g6.__r=0}}function bj(_,$,j,G,Z,X,Y,q,K,L,Q){var V,F,N,H,z,E,U,k=G&&G.__k||u6,A=$.length;for(K=xN(j,$,k,K,A),V=0;V<A;V++)(N=j.__k[V])!=null&&(F=N.__i!=-1&&k[N.__i]||S6,N.__i=V,E=e8(_,N,F,Z,X,Y,q,K,L,Q),H=N.__e,N.ref&&F.ref!=N.ref&&(F.ref&&_3(F.ref,null,N),Q.push(N.ref,N.__c||H,N)),z==null&&H!=null&&(z=H),(U=!!(4&N.__u))||F.__k===N.__k?(K=vj(N,K,_,U),U&&F.__e&&(F.__e=null)):typeof N.type=="function"&&E!==void 0?K=E:H&&(K=H.nextSibling),N.__u&=-7);return j.__e=z,K}function xN(_,$,j,G,Z){var X,Y,q,K,L,Q=j.length,V=Q,F=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=R6(null,Y,null,null,null):v6(Y)?Y=_.__k[X]=R6(m6,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=R6(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,K=X+F,Y.__=_,Y.__b=_.__b+1,q=null,(L=Y.__i=IN(Y,j,K,V))!=-1&&(V--,(q=j[L])&&(q.__u|=2)),q==null||q.__v==null?(L==-1&&(Z>Q?F--:Z<Q&&F++),typeof Y.type!="function"&&(Y.__u|=4)):L!=K&&(L==K-1?F--:L==K+1?F++:(L>K?F--:F++,Y.__u|=4))):_.__k[X]=null;if(V)for(X=0;X<Q;X++)(q=j[X])!=null&&(2&q.__u)==0&&(q.__e==G&&(G=P4(q)),lj(q,q));return G}function vj(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=vj(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=P4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function IN(_,$,j,G){var Z,X,Y,q=_.key,K=_.type,L=$[j],Q=L!=null&&(2&L.__u)==0;if(L===null&&q==null||Q&&q==L.key&&K==L.type)return j;if(G>(Q?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((L=$[Y=Z>=0?Z--:X++])!=null&&(2&L.__u)==0&&q==L.key&&K==L.type)return Y}return-1}function Wj(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||TN.test($)?j:j+"px"}function C6(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||Wj(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||Wj(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(Sj,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[w5]=G[w5]:(j[w5]=s8,_.addEventListener($,X?r8:n8,X)):_.removeEventListener($,X?r8:n8,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function Jj(_){return function($){if(this.l){var j=this.l[$.type+_];if($[P6]==null)$[P6]=s8++;else if($[P6]<j[w5])return;return j(x_.event?x_.event($):$)}}}function e8(_,$,j,G,Z,X,Y,q,K,L){var Q,V,F,N,H,z,E,U,k,A,O,T,x,W,J,M=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),X=[q=$.__e=j.__e]),(Q=x_.__b)&&Q($);_:if(typeof M=="function")try{if(U=$.props,k=M.prototype&&M.prototype.render,A=(Q=M.contextType)&&G[Q.__c],O=Q?A?A.props.value:Q.__:G,j.__c?E=(V=$.__c=j.__c).__=V.__E:(k?$.__c=V=new M(U,O):($.__c=V=new x5(U,O),V.constructor=M,V.render=PN),A&&A.sub(V),V.state||(V.state={}),V.__n=G,F=V.__d=!0,V.__h=[],V._sb=[]),k&&V.__s==null&&(V.__s=V.state),k&&M.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=j$({},V.__s)),j$(V.__s,M.getDerivedStateFromProps(U,V.__s))),N=V.props,H=V.state,V.__v=$,F)k&&M.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),k&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(k&&M.getDerivedStateFromProps==null&&U!==N&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(U,O),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(U,V.__s,O)===!1){$.__v!=j.__v&&(V.props=U,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(D){D&&(D.__=$)}),u6.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Y.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(U,V.__s,O),k&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(N,H,z)})}if(V.context=O,V.props=U,V.__P=_,V.__e=!1,T=x_.__r,x=0,k)V.state=V.__s,V.__d=!1,T&&T($),Q=V.render(V.props,V.state,V.context),u6.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,T&&T($),Q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++x<25);V.state=V.__s,V.getChildContext!=null&&(G=j$(j$({},G),V.getChildContext())),k&&!F&&V.getSnapshotBeforeUpdate!=null&&(z=V.getSnapshotBeforeUpdate(N,H)),W=Q!=null&&Q.type===m6&&Q.key==null?cj(Q.props.children):Q,q=bj(_,v6(W)?W:[W],$,j,G,Z,X,Y,q,K,L),V.base=$.__e,$.__u&=-161,V.__h.length&&Y.push(V),E&&(V.__E=V.__=null)}catch(D){if($.__v=null,K||X!=null)if(D.then){for($.__u|=K?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;X[X.indexOf(q)]=null,$.__e=q}else{for(J=X.length;J--;)a8(X[J]);o8($)}else $.__e=j.__e,$.__k=j.__k,D.then||o8($);x_.__e(D,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=CN(j.__e,$,j,G,Z,X,Y,K,L);return(Q=x_.diffed)&&Q($),128&$.__u?void 0:q}function o8(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(o8))}function mj(_,$,j){for(var G=0;G<j.length;G++)_3(j[G],j[++G],j[++G]);x_.__c&&x_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){x_.__e(X,Z.__v)}})}function cj(_){return typeof _!="object"||_==null||_.__b>0?_:v6(_)?_.map(cj):j$({},_)}function CN(_,$,j,G,Z,X,Y,q,K){var L,Q,V,F,N,H,z,E=j.props||S6,U=$.props,k=$.type;if(k=="svg"?Z="http://www.w3.org/2000/svg":k=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(L=0;L<X.length;L++)if((N=X[L])&&"setAttribute"in N==!!k&&(k?N.localName==k:N.nodeType==3)){_=N,X[L]=null;break}}if(_==null){if(k==null)return document.createTextNode(U);_=document.createElementNS(Z,k,U.is&&U),q&&(x_.__m&&x_.__m($,X),q=!1),X=null}if(k==null)E===U||q&&_.data==U||(_.data=U);else{if(X=X&&b6.call(_.childNodes),!q&&X!=null)for(E={},L=0;L<_.attributes.length;L++)E[(N=_.attributes[L]).name]=N.value;for(L in E)N=E[L],L=="dangerouslySetInnerHTML"?V=N:L=="children"||(L in U)||L=="value"&&("defaultValue"in U)||L=="checked"&&("defaultChecked"in U)||C6(_,L,null,N,Z);for(L in U)N=U[L],L=="children"?F=N:L=="dangerouslySetInnerHTML"?Q=N:L=="value"?H=N:L=="checked"?z=N:q&&typeof N!="function"||E[L]===N||C6(_,L,N,E[L],Z);if(Q)q||V&&(Q.__html==V.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(V&&(_.innerHTML=""),bj($.type=="template"?_.content:_,v6(F)?F:[F],$,j,G,k=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&P4(j,0),q,K),X!=null)for(L=X.length;L--;)a8(X[L]);q||(L="value",k=="progress"&&H==null?_.removeAttribute("value"):H!=null&&(H!==_[L]||k=="progress"&&!H||k=="option"&&H!=E[L])&&C6(_,L,H,E[L],Z),L="checked",z!=null&&z!=_[L]&&C6(_,L,z,E[L],Z))}return _}function _3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){x_.__e(Z,j)}}function lj(_,$,j){var G,Z;if(x_.unmount&&x_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||_3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){x_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&lj(G[Z],$,j||typeof _.type!="function");j||a8(_.__e),_.__c=_.__=_.__e=void 0}function PN(_,$,j){return this.constructor(_,j)}function G$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),x_.__&&x_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],e8($,_=(!G&&j||$).__k=t8(m6,null,[_]),Z||S6,S6,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?b6.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),mj(X,_,Y)}function RN(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,d8(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+uj++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function f4(_,$){R_.__h&&R_.__h(w_,_,R4||$),R4=0;var j=w_.__H||(w_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return R4=1,pj(nj,_)}function pj(_,$,j){var G=f4(M$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):nj(void 0,$),function(q){var K=G.__N?G.__N[0]:G.__[0],L=G.t(K,q);K!==L&&(G.__N=[L,G.__[1]],G.__c.setState({}))}],G.__c=w_,!w_.__f)){var Z=function(q,K,L){if(!G.__c.__H)return!0;var Q=G.__c.__H.__.filter(function(F){return F.__c});if(Q.every(function(F){return!F.__N}))return!X||X.call(this,q,K,L);var V=G.__c.props!==q;return Q.some(function(F){if(F.__N){var N=F.__[0];F.__=F.__N,F.__N=void 0,N!==F.__[0]&&(V=!0)}}),X&&X.call(this,q,K,L)||V};w_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=w_;w_.componentWillUpdate=function(q,K,L){if(this.__e){var Q=X;X=void 0,Z(q,K,L),X=Q}Y&&Y.call(this,q,K,L)},w_.shouldComponentUpdate=Z}return G.__N||G.__}function u(_,$){var j=f4(M$++,3);!R_.__s&&$3(j.__H,$)&&(j.__=_,j.u=$,w_.__H.__h.push(j))}function S4(_,$){var j=f4(M$++,4);!R_.__s&&$3(j.__H,$)&&(j.__=_,j.u=$,w_.__h.push(j))}function g(_){return R4=5,Y0(function(){return{current:_}},[])}function fN(_,$,j){R4=6,S4(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function Y0(_,$){var j=f4(M$++,7);return $3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return R4=8,Y0(function(){return _},$)}function SN(_){var $=w_.context[_.__c],j=f4(M$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(w_)),$.props.value):_.__}function uN(_,$){R_.useDebugValue&&R_.useDebugValue($?$(_):_)}function gN(_){var $=f4(M$++,10),j=C();return $.__=_,w_.componentDidCatch||(w_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function bN(){for(var _;_=hj.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(f6),$.__h.some(i8),$.__h=[]}catch(j){$.__h=[],R_.__e(j,_.__v)}}}function vN(_){var $,j=function(){clearTimeout(G),Ij&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);Ij&&($=requestAnimationFrame(j))}function f6(_){var $=w_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),w_=$}function i8(_){var $=w_;_.__c=_.__(),w_=$}function $3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function nj(_,$){return typeof $=="function"?$(_):$}function mN(_){var $=Cj.get(this);return $||($=new Map,Cj.set(this,$)),($=rj(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",q="",K=[0],L=function(F){X===1&&(F||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,F,Y):X===3&&(F||Y)?(K.push(3,F,Y),X=2):X===2&&Y==="..."&&F?K.push(4,F,0):X===2&&Y&&!F?K.push(5,0,!0,Y):X>=5&&((Y||!F&&X===5)&&(K.push(X,0,Y,Z),X=6),F&&(K.push(X,F,0,Z),X=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(X===1&&L(),L(Q));for(var V=0;V<j[Q].length;V++)G=j[Q][V],X===1?G==="<"?(L(),K=[K],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:q?G===q?q="":Y+=G:G==='"'||G==="'"?q=G:G===">"?(L(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[Q][V+1]===">")?(L(),X===3&&(K=K[0]),X=K,(K=K[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(L(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,K=K[0])}return L(),K}(_)),$),arguments,[])).length>1?$:$[0]}var b6,x_,Pj,yN,k$,Oj,Rj,fj,h8,P6,w5,Sj,s8,n8,r8,uj,S6,u6,TN,v6,M$,w_,p8,Aj,R4=0,hj,R_,kj,Mj,yj,Tj,wj,xj,Ij,rj=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],q=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=q:Y===4?G[1]=Object.assign(G[1]||{},q):Y===5?(G[1]=G[1]||{})[$[++X]]=q:Y===6?G[1][$[++X]]+=q+"":Y?(Z=_.apply(q,rj(_,q,j,["",null])),G.push(Z),q[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(q)}return G},Cj,B;var T0=A_(()=>{S6={},u6=[],TN=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v6=Array.isArray;b6=u6.slice,x_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(q){_=q}throw _}},Pj=0,yN=function(_){return _!=null&&_.constructor===void 0},x5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=j$({},this.state),typeof _=="function"&&(_=_(j$({},j),this.props)),_&&j$(j,_),_!=null&&this.__v&&($&&this._sb.push($),d8(this))},x5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),d8(this))},x5.prototype.render=m6,k$=[],Rj=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,fj=function(_,$){return _.__v.__b-$.__v.__b},g6.__r=0,h8=Math.random().toString(8),P6="__d"+h8,w5="__a"+h8,Sj=/(PointerCapture)$|Capture$/i,s8=0,n8=Jj(!1),r8=Jj(!0),uj=0;hj=[],R_=x_,kj=R_.__b,Mj=R_.__r,yj=R_.diffed,Tj=R_.__c,wj=R_.unmount,xj=R_.__;R_.__b=function(_){w_=null,kj&&kj(_)},R_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),xj&&xj(_,$)},R_.__r=function(_){Mj&&Mj(_),M$=0;var $=(w_=_.__c).__H;$&&(p8===w_?($.__h=[],w_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(f6),$.__h.some(i8),$.__h=[],M$=0)),p8=w_},R_.diffed=function(_){yj&&yj(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(hj.push($)!==1&&Aj===R_.requestAnimationFrame||((Aj=R_.requestAnimationFrame)||vN)(bN)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),p8=w_=null},R_.__c=function(_,$){$.some(function(j){try{j.__h.some(f6),j.__h=j.__h.filter(function(G){return!G.__||i8(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],R_.__e(G,j.__v)}}),Tj&&Tj(_,$)},R_.unmount=function(_){wj&&wj(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{f6(G)}catch(Z){$=Z}}),j.__H=void 0,$&&R_.__e($,j.__v))};Ij=typeof requestAnimationFrame=="function";Cj=new Map;B=mN.bind(t8)});function V1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function L_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function Y$(_,$=!1){let j=V1(_);if(j===null)return $;return j==="true"}function j4(_,$=null){let j=V1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function g3(_){let $=V1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function m3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function NZ(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function aU(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function tU(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=aU(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),q=parseInt(Z[3],10);if(![X,Y,q].every((L)=>Number.isFinite(L)))return null;let K=`#${[X,Y,q].map((L)=>L.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:q,hex:K}}function G4(_){return NZ(_)||tU(_)}function c3(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function _2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function eU(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function _H(_){return eU(_)>0.4?"#000000":"#ffffff"}function BZ(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function l3(_){return VZ[_]||VZ.default}function $H(_){return _.mode==="auto"?BZ():_.mode}function UZ(_,$){let j=l3(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||K$}function q$(_,$,j){let G=G4(_);if(!G)return _;return c3(G,$,j)}function HZ(_,$,j){let G=G4($);if(!G)return _;let X=NZ(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:q$(_.bgPrimary,G,0.08),bgSecondary:q$(_.bgSecondary,G,0.12),bgHover:q$(_.bgHover,G,0.16),textPrimary:q$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:q$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:q$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?c3(G,X,0.18):G.hex,warning:q$(_.warning||K$.warning,G,0.14),danger:q$(_.danger,G,0.16),success:q$(_.success,G,0.16)}}function jH(_,$){let j=G4(_?.warning);if(j)return j.hex;let G=G4($==="dark"?G2.warning:K$.warning)||G4(K$.warning),Z=G4(_?.accent);if(G&&Z)return c3(G,Z,$==="dark"?0.18:0.14);return $==="dark"?G2.warning:K$.warning}function GH(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=G4(G),X=Z?_2(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?_2(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=Z?_2(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Z?_H(Z):$==="dark"?"#000000":"#ffffff",L=Z?_2(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",Q=jH(_,$),V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":L,"--accent-soft":Y,"--accent-soft-strong":q,"--accent-contrast-text":K,"--warning-color":Q,"--danger-color":_.danger||K$.danger,"--success-color":_.success||K$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([F,N])=>{if(N)j.style.setProperty(F,N)})}function ZH(){if(typeof document>"u")return;let _=document.documentElement;sU.forEach(($)=>_.style.removeProperty($))}function d4(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function QZ(_){let $=m3(Z4?.theme||"default"),j=Z4?.tint?String(Z4.tint).trim():null,G=UZ($,_);if($==="default"&&j)G=HZ(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?G2.bgPrimary:K$.bgPrimary}function XH(_,$){if(typeof document>"u")return;let j=d4("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=d4("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",QZ("light"));let Z=d4("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",QZ("dark"));let X=d4("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=d4("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let q=d4("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function YH(){if(typeof window>"u")return;let _={...Z4,mode:FZ};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function qH(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function h3(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=m3(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=l3(j),X=$H(Z),Y=UZ(j,X);Z4={theme:j,tint:G},FZ=X;let q=document.documentElement;q.dataset.theme=X,q.dataset.colorTheme=j,q.dataset.tint=G?String(G):"",q.style.colorScheme=X;let K=Y;if(j==="default"&&G)K=HZ(Y,G,X);if(j==="default"&&!G)ZH();else GH(K,X);if(XH(K.bgPrimary,X),YH(),$.persist!==!1)if(L_(v3,j),G)L_(j2,G);else L_(j2,"")}function $2(){if(l3(Z4.theme).mode!=="auto")return;h3(Z4,{persist:!1})}function EZ(){if(typeof window>"u")return()=>{};let _=m3(V1(v3)||"default"),$=(()=>{let j=V1(j2);return j?j.trim():null})();if(h3({theme:_,tint:$},{persist:!1}),window.matchMedia&&!b3){let j=window.matchMedia("(prefers-color-scheme: dark)");if(j.addEventListener)j.addEventListener("change",$2);else if(j.addListener)j.addListener($2);return b3=!0,()=>{if(j.removeEventListener)j.removeEventListener("change",$2);else if(j.removeListener)j.removeListener($2);b3=!1}}return()=>{}}function o4(_){if(!_||typeof _!=="object")return;let $=qH(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)h3({theme:G||"default",tint:Z},{persist:!1});L_(v3,G||"default"),L_(j2,Z||"")}function DZ(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return BZ()}var v3="piclaw_theme",j2="piclaw_tint",K$,G2,VZ,sU,Z4,FZ="light",b3=!1;var g5=A_(()=>{K$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},G2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},VZ={default:{label:"Default",mode:"auto",light:K$,dark:G2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},sU=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],Z4={theme:"default",tint:null}});function wZ(_=typeof window<"u"?window:null){return _||null}function X2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function l5(_,$){return`${_}:${$}`}function xZ(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function IZ(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function Y4(_){if(!_||typeof _!=="object")return null;return{..._}}function L4(_){if(!_)return null;return q4.find(($)=>$.id===_)||null}function n3(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function CZ(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=L4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function TZ(_,$,j){let G=K4.get(l5(_,$));if(G&&L4(G)?.status==="active")c5(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=xZ(_),X={id:Z,type:_,chatJid:$,startedAt:X2(),detail:Y4(j),phases:[],status:"active"};return q4.push(X),IZ(q4,100),K4.set(l5(_,$),Z),n3(Z,"start"),Z}function c5(_,$,j,G,Z){let X=L4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:X2(),detail:Y4(G)}),n3(X.id,j);if(X.status=$,X.completedAt=X2(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=l5(X.type,X.chatJid);if(K4.get(Y)===X.id)K4.delete(Y);CZ(X.id)}function wH(_=wZ()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=Y2;return Y2}function i4(_=wZ()){return wH(_)}function PZ(_,$,j){return i4().ensureTrace(_,$,j)}function q2(_,$){return i4().getActiveTraceId(_,$)}function e_(_,$,j){i4().markTrace(_,$,j)}function K2(_,$,j="settled",G){let Z=L4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return c5(_,"completed",j,G),!0}function RZ(_,$,j="failed",G){i4().failTrace(_,$,j,G)}function fZ(_,$="cancelled",j){i4().cancelTrace(_,$,j)}function r3(_){return i4().recordRequest(_)}var q4,m5,K4,Y2;var h5=A_(()=>{q4=[],m5=[],K4=new Map;Y2={startTrace(_,$,j){return TZ(_,$,j)},ensureTrace(_,$,j){let G=K4.get(l5(_,$));if(G&&L4(G)?.status==="active")return G;return TZ(_,$,j)},getActiveTraceId(_,$){let j=K4.get(l5(_,$));return j&&L4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=L4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:X2(),detail:Y4(j)}),n3(G.id,$)},completeTrace(_,$="settled",j){c5(_,"completed",$,j)},failTrace(_,$,j="failed",G){c5(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){c5(_,"cancelled",$,j)},recordRequest(_){let $=xZ("req");return m5.push({..._,id:$,detail:Y4(_.detail)}),IZ(m5,300),$},getTraces(){return q4.map((_)=>({..._,detail:Y4(_.detail),phases:_.phases.map(($)=>({...$,detail:Y4($.detail)}))}))},getRequests(){return m5.map((_)=>({..._,detail:Y4(_.detail)}))},clear(){q4.forEach((_)=>CZ(_.id)),q4.splice(0,q4.length),m5.splice(0,m5.length),K4.clear()},printSummary(){let _={traces:Y2.getTraces(),requests:Y2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});var i5={};Z1(i5,{uploadWorkspaceFile:()=>Q2,uploadMedia:()=>G7,updateWorkspaceFile:()=>XE,submitAdaptiveCardAction:()=>Z7,streamSidePrompt:()=>$E,stopAutoresearch:()=>oH,steerAgentQueueItem:()=>tH,setWorkspaceVisibility:()=>d5,setAgentThoughtVisibility:()=>GE,sendWebPushTestNotification:()=>j7,sendPeerAgentMessage:()=>hH,sendAgentMessage:()=>k1,searchPosts:()=>IH,saveWorkspaceSettings:()=>a3,saveWebPushSubscription:()=>_7,saveQuickActionsSettings:()=>s3,saveEnvironmentOverride:()=>L2,restoreChatBranch:()=>lH,respondToAgentRequest:()=>s4,reorderAgentQueueItem:()=>eH,renameWorkspaceFile:()=>B7,renameChatJid:()=>cH,renameChatBranch:()=>bH,removeAgentQueueItem:()=>aH,reindexWorkspace:()=>V7,purgeChatBranch:()=>mH,pruneChatBranch:()=>vH,moveWorkspaceEntry:()=>U7,getWorkspaceTree:()=>r5,getWorkspaceRawUrl:()=>o5,getWorkspaceIndexStatus:()=>L7,getWorkspaceFileStat:()=>F7,getWorkspaceFileDownloadUrl:()=>F2,getWorkspaceFile:()=>Q7,getWorkspaceDownloadUrl:()=>N2,getWorkspaceBranch:()=>K7,getWebPushPublicKey:()=>e3,getTimeline:()=>x$,getThumbnailUrl:()=>Y7,getThread:()=>CH,getSystemMetrics:()=>i3,getQuickActionsSettings:()=>n5,getPostsByHashtag:()=>o3,getMediaUrl:()=>P1,getMediaText:()=>ZE,getMediaInfo:()=>V2,getMediaBlob:()=>q7,getEnvironmentSettings:()=>t3,getChatBranches:()=>uH,getAutoresearchStatus:()=>dH,getAgents:()=>pH,getAgentThought:()=>jE,getAgentStatus:()=>nH,getAgentQueueState:()=>sH,getAgentModels:()=>V4,getAgentContext:()=>rH,getAgentCommands:()=>p5,getActiveChatAgents:()=>SH,forkChatBranch:()=>gH,dismissAutoresearch:()=>iH,deleteWorkspaceFile:()=>H7,deleteWebPushSubscription:()=>$7,deletePost:()=>fH,createWorkspaceFile:()=>N7,createReply:()=>RH,createPost:()=>PH,completeInstanceOobe:()=>_E,attachWorkspaceFile:()=>YE,addToWhitelist:()=>X7,SSEClient:()=>B2});async function r0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(v_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw r3({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(r3({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function SZ(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function xH(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:q}=await j.read();if(q)break;Z+=G.decode(Y,{stream:!0});let K=Z.split(`

`);Z=K.pop()||"";for(let L of K){let Q=SZ(L);if(Q)$(Q.event,Q.data)}}Z+=G.decode();let X=SZ(Z);if(X)$(X.event,X.data)}async function x$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return r0(G)}async function o3(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return r0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function IH(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let q=G?`&chat_jid=${encodeURIComponent(G)}`:"",K=Z?`&scope=${encodeURIComponent(Z)}`:"",L=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",Q=Y?.images?"&images=1":"",V=Y?.attachments?"&attachments=1":"";return r0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${K}${L}${Q}${V}`)}async function CH(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return r0(`/thread/${_}${j}`)}async function i3(){return r0("/agent/system-metrics")}async function PH(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return r0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function RH(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return r0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function fH(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return r0(Z,{method:"DELETE"})}async function k1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",q={content:$,thread_id:j,media_ids:G};if(Z==="auto"||Z==="queue"||Z==="steer")q.mode=Z;return r0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(q)})}async function p5(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return r0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function n5(){return r0("/agent/settings/quick-actions")}async function s3(_){return r0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function a3(_){return r0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function t3(){return r0("/agent/settings/environment")}async function L2(_){return r0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function SH(){return r0("/agent/active-chats")}async function uH(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");if($?.prewarmRecent)j.set("prewarm_recent","1");if(Number.isFinite($?.prewarmLimit))j.set("prewarm_limit",String($.prewarmLimit));if($?.excludeChatJid)j.set("exclude_chat_jid",String($.excludeChatJid));if($?.prewarmChatJid)j.set("prewarm_chat_jid",String($.prewarmChatJid));let G=j.toString()?`?${j.toString()}`:"";return r0(`/agent/branches${G}`)}async function gH(_,$={}){return r0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function bH(_,$={}){return r0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function vH(_){return r0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function mH(_){return r0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function cH(_,$){return r0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function lH(_,$={}){return r0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function hH(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return r0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function e3(){return r0("/agent/push/vapid-public-key")}async function _7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return r0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function $7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return r0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function j7(_={}){return r0("/agent/push/test",{method:"POST",body:JSON.stringify(_||{})})}async function pH(){return r0("/agent/roster")}async function nH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/status${$}`)}async function rH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/context${$}`)}async function dH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/autoresearch/status${$}`)}async function oH(_=null,$={}){return r0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function iH(_=null){return r0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function sH(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/queue-state${$}`)}async function aH(_,$=null){let j=await fetch(v_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function tH(_,$=null){let j=await fetch(v_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function eH(_,$,j=null){let G=await fetch(v_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function V4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/models${$}`)}async function _E(_="provider-ready"){return r0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function G7(_){let $=new FormData;$.append("file",_);let j=await fetch(v_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function s4(_,$,j=null){let G=await fetch(v_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function Z7(_){let $=await fetch(v_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function $E(_,$={}){let j=await fetch(v_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await xH(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function X7(_,$){let j=await fetch(v_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function jE(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return r0(j)}async function GE(_,$,j){return r0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function P1(_){return`${v_}/media/${_}`}function Y7(_){return`${v_}/media/${_}/thumbnail`}async function V2(_){let $=await fetch(`${v_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function ZE(_){let $=await fetch(`${v_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function q7(_){let $=await fetch(`${v_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function r5(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return r0(G)}async function K7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return r0($)}async function L7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return r0($)}async function V7(_="all"){return r0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function Q7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return r0(Z)}async function F7(_){return r0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function XE(_,$){return r0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function YE(_){return r0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function KE(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function LE(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function VE(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",v_+$);for(let[q,K]of Object.entries(j||{}))if(K!==void 0&&K!==null)Y.setRequestHeader(q,String(K));Y.upload.onprogress=(q)=>{if(typeof G==="function")G({loaded:q.lengthComputable?q.loaded:0,total:q.lengthComputable?q.total:_.size,lengthComputable:q.lengthComputable})},Y.onload=()=>{try{let q=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(q);else{let K=Error(q.error||`HTTP ${Y.status}`);K.status=Y.status,K.code=q.code,X(K)}}catch{let q=Error(`HTTP ${Y.status}`);q.status=Y.status,X(q)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function QE(_,$="",j={}){let G=LE(),Z=KE("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(d3,Number(j.chunkSize)||qE)),Y=Math.max(0,Number(_?.size)||0),q=Math.max(1,Math.ceil(Y/X)),K=0,L=null;for(let Q=0;Q<q;Q+=1){let V=Q*X,F=Math.min(Y,V+X),N=_.slice(V,F),H=N.size;if(L=await VE(N,Z,{"X-Upload-Id":G,"X-Chunk-Index":Q,"X-Chunk-Total":q,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(z)=>{if(typeof j.onProgress!=="function")return;let E=Math.min(Y,K+(z?.loaded||0)),U=Y||1;j.onProgress({loaded:E,total:U,percent:Math.round(E/U*100),chunkIndex:Q,chunkTotal:q})}),K+=H,typeof j.onProgress==="function"){let z=Y||1,E=Y?K:z;j.onProgress({loaded:E,total:z,percent:Math.round(E/z*100),chunkIndex:Q+1,chunkTotal:q})}}return L}async function Q2(_,$="",j={}){if(_?.size>d3){let G=(_.size/1048576).toFixed(0),Z=(d3/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await QE(_,$,j)}async function N7(_,$,j=""){let G=await fetch(v_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function B7(_,$){let j=await fetch(v_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function U7(_,$){let j=await fetch(v_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function H7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return r0($,{method:"DELETE"})}async function d5(_,$=!1){return r0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function o5(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${v_}/workspace/raw?${j.toString()}`}function F2(_){return o5(_,{download:!0})}function N2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${v_}/workspace/download?${j}`}class B2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(v_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var v_="",d3=1073741824,qE=8388608;var g_=A_(()=>{h5()});function t4(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function h1(_={}){if(typeof window>"u")return;let $=t4(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function I7(){if(typeof window>"u")return null;return t4(window.__piclawSettingsRequestedSection)}function D2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=I7();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function P$({children:_,className:$=""}){let[j,G]=C(null);return u(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return document.body.appendChild(Z),G(Z),()=>{try{G$(null,Z)}finally{Z.remove()}}},[]),u(()=>{if(!j)return;j.className=$||"";return},[$,j]),S4(()=>{if(!j)return;G$(_,j);return},[_,j]),null}var z2=A_(()=>{T0()});function R$(_){let $=F4.findIndex((j)=>j.id===_.id);if($>=0)F4[$]=_;else F4.push(_);F4.sort((j,G)=>(j.order??500)-(G.order??500))}function JX(_){let $=F4.findIndex((j)=>j.id===_);if($>=0)F4.splice($,1)}function AX(){return[...F4]}function C7(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var F4;var e4=A_(()=>{F4=[]});function fE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(N4,{detail:{enabled:Boolean(_)}}))}function SE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(O2,{detail:{collapsed:Boolean(_)}}))}function j6(_=!1){return Y$(kX,_)}function P7(_=!1){return Y$(MX,_)}function W2(_,$={}){let j=$.persist!==!1,G=Boolean(_);if(j)L_(kX,G?"true":"false");return fE(G),G}function uE(){let _=!j6(!1);return W2(_)}function gE(_,$={}){let j=$.persist!==!1,G=Boolean(_);if(j)L_(MX,G?"true":"false");return SE(G),G}function yX(){let _=!P7(!1);return gE(_)}function TX(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if($==="toggle"){uE();return}if($==="set"||typeof _?.enabled==="boolean")W2(Boolean(_?.enabled))}var kX="piclaw_system_meters_enabled",MX="piclaw_system_meters_collapsed",N4="piclaw-meters-change",O2="piclaw-meters-collapsed-change";var J2=()=>{};function wX(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function xX(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function F$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=wX(_,$);return xX(Z,{min:j,max:G})}function bE(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=F$(_,{fallback:G,min:Z,max:X}),q=Math.abs(wX(j,1))||1,K=Number($)<0?-1:1;return xX(Y+K*q,{min:Z,max:X})}function b_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:q,onChange:K}){let L=Number.isFinite(Number(Z))?Number(Z):F$(_,{fallback:0,min:$,max:j}),[Q,V]=C(String(_??L)),F=g(!1);u(()=>{if(!F.current)V(String(_??L))},[_,L]);let N=P((z)=>{F.current=!1;let E=F$(z,{fallback:L,min:$,max:j});V(String(E)),K?.(E)},[L,$,j,K]),H=P((z)=>{F.current=!1;let E=bE(_,{direction:z,step:G,fallback:L,min:$,max:j});V(String(E)),K?.(E)},[L,j,$,K,G,_]);return B`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${q||"value"}`}
                title=${`Decrease ${q||"value"}`}
                disabled=${Y}
                onClick=${()=>H(-1)}
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
                onClick=${()=>H(1)}
            >+</button>
        </span>
    `}var B4=A_(()=>{T0()});function IX(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function CX({value:_,onChange:$}){let j=g(null),[G,Z]=C(IX(_));u(()=>{Z(IX(_))},[_]);let X=P((Y)=>{let q=Y.target.files?.[0];if(!q)return;let K=new FileReader;K.onload=()=>{let L=K.result;Z(L),$?.(L)},K.readAsDataURL(q)},[$]);return B`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?B`<img src=${G} alt="avatar" />`:B`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function PX(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}function R7({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(""),[X,Y]=C(""),[q,K]=C(""),[L,Q]=C(""),[V,F]=C(32),[N,H]=C(256),[z,E]=C(()=>j6(!1)),[U,k]=C(!1),A=g(""),O=g(null),T=g(!0);u(()=>{return T.current=!0,()=>{T.current=!1}},[]);let x=P((D)=>{let y=PX(D);Z(y.userName),Y(y.userAvatar),K(y.assistantName),Q(y.assistantAvatar),F(y.composeUploadLimitMb),H(y.workspaceUploadLimitMb),A.current=JSON.stringify(y)},[]);u(()=>{x(_||{})},[_,x]),u(()=>{let D=(y)=>{E(Boolean(y?.detail?.enabled))};return window.addEventListener(N4,D),()=>window.removeEventListener(N4,D)},[]);let W=Y0(()=>JSON.stringify(PX({userName:G,userAvatar:X,assistantName:q,assistantAvatar:L,composeUploadLimitMb:V,workspaceUploadLimitMb:N})),[G,X,q,L,V,N]);u(()=>{if(W===A.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!T.current)return;let D=document.activeElement;if(D&&D.closest?.(".settings-number-stepper"))return;try{let y=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:W}),I=await y.json().catch(()=>({}));if(!T.current)return;if(!y.ok||!I?.ok||!I?.settings)return;A.current=W,j?.(I.settings),k(!0),setTimeout(()=>{if(T.current)k(!1)},4000)}catch(y){console.warn("[settings/general] Failed to persist general settings snapshot.",y)}},800),()=>{if(O.current)clearTimeout(O.current)}},[W,j]);let J=_?.instanceTotp||{configured:!1,issuer:q||"Piclaw",label:G?`${q||"Piclaw"}:${G}`:q||"Piclaw",secret:"",otpauth:"",qrSvg:""},M=typeof window<"u"&&window.isSecureContext;return B`
        <div class="settings-section">
            ${U&&B`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${CX} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(D)=>Z(D.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${CX} value=${L} onChange=${Q} />
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
                        onChange=${()=>{let D=W2(!z);E(D)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${b_}
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
                <${b_}
                    label="workspace upload limit"
                    value=${N}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${H}
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
    `}var RX=A_(()=>{T0();J2();B4()});var SX={};Z1(SX,{SessionsSection:()=>vE});function fX(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function vE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(16),[q,K]=C(4000),[L,Q]=C(3),[V,F]=C(64),[N,H]=C("none"),[z,E]=C(!1),U=g(""),k=g(null),A=g(!0);u(()=>{return A.current=!0,()=>{A.current=!1}},[]);let O=P((x)=>{let W=fX(x);Z(W.sessionAutoRotate),Y(W.sessionMaxSizeMb),K(W.sessionMaxLines),Q(W.sessionMaxCompactions),F(W.toolUseBudget),H(W.sessionIsolation),U.current=JSON.stringify(W)},[]);u(()=>{O(_||{})},[_,O]);let T=Y0(()=>JSON.stringify(fX({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:q,sessionMaxCompactions:L,toolUseBudget:V,sessionIsolation:N})),[G,X,q,L,V,N]);return u(()=>{if(T===U.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!A.current)return;let x=document.activeElement;if(x&&x.closest?.(".settings-number-stepper"))return;try{let W=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:T}),J=await W.json().catch(()=>({}));if(!A.current)return;if(!W.ok||!J?.ok||!J?.settings)return;U.current=T,j?.(J.settings),E(!0),setTimeout(()=>{if(A.current)E(!1)},4000)}catch(W){console.warn("[settings/sessions] Failed to persist session settings.",W)}},800),()=>{if(k.current)clearTimeout(k.current)}},[T,j]),B`
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
                <${b_}
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
                <${b_}
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
                <select value=${N} onChange=${(x)=>H(x.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var uX=A_(()=>{T0();B4()});var gX={};Z1(gX,{CompactionSection:()=>cE});function mE(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??50,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function f7(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function cE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(180),[X,Y]=C(15),[q,K]=C(360),[L,Q]=C(50),[V,F]=C(0.5),[N,H]=C(!1),[z,E]=C(120),[U,k]=C([]),[A,O]=C([]),[T,x]=C(!1),W=g(""),J=g(null),M=g(!0);u(()=>{return M.current=!0,()=>{M.current=!1}},[]);let D=P((R)=>{let S=mE(R);Z(S.compactionTimeoutSec),Y(S.compactionBackoffBaseMin),K(S.compactionBackoffMaxMin),Q(S.compactionThresholdPercent),F(S.compactionBackoffDecayFactor),H(S.progressWatchdogEnabled),E(S.progressWatchdogTimeoutSec),k(S.compactionBackoffs),O(S.progressWatchdogPhases),W.current=JSON.stringify({compactionTimeoutSec:S.compactionTimeoutSec,compactionBackoffBaseMin:S.compactionBackoffBaseMin,compactionBackoffMaxMin:S.compactionBackoffMaxMin,compactionThresholdPercent:S.compactionThresholdPercent,compactionBackoffDecayFactor:S.compactionBackoffDecayFactor,progressWatchdogEnabled:S.progressWatchdogEnabled,progressWatchdogTimeoutSec:S.progressWatchdogTimeoutSec})},[]);u(()=>{D(_||{})},[_,D]);let y=Y0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:q,compactionThresholdPercent:L,compactionBackoffDecayFactor:V,progressWatchdogEnabled:N,progressWatchdogTimeoutSec:z}),[G,X,q,L,V,N,z]);u(()=>{if(y===W.current)return;if(J.current)clearTimeout(J.current);return J.current=setTimeout(async()=>{if(!M.current)return;let R=document.activeElement;if(R&&R.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let S=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),v=await S.json().catch(()=>({}));if(!M.current)return;if(!S.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to save compaction settings.","error");return}W.current=y,j?.(v.settings),D({..._||{},...v.settings||{}}),$?.("Compaction settings saved.","success"),x(!0),setTimeout(()=>{if(M.current)x(!1),$?.(null)},4000)}catch(S){if(console.warn("[settings/compaction] Failed to persist compaction settings.",S),M.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(J.current)clearTimeout(J.current)}},[y,j,$,D,_]);let I=P(async(R)=>{try{$?.(`Clearing compaction suppression for ${R}…`,"info");let S=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:R})}),v=await S.json().catch(()=>({}));if(!S.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to clear compaction suppression.","error");return}j?.(v.settings),D({..._||{},...v.settings||{}}),$?.(`Cleared compaction suppression for ${R}.`,"success")}catch(S){console.warn("[settings/compaction] Failed to clear compaction suppression.",S),$?.("Failed to clear compaction suppression.","error")}},[D,j,$,_]);return B`
        <div class="settings-section">
            ${T&&B`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${b_}
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
                <${b_}
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
                <${b_}
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
                <${b_}
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
                <${b_}
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
                    <input type="checkbox" checked=${N} onChange=${(R)=>H(Boolean(R.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${b_}
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
            ${U.length===0?B`
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
                            ${U.map((R)=>B`
                                <tr>
                                    <td><code>${R.chatJid}</code></td>
                                    <td>${R.failureCount}</td>
                                    <td>${f7(R.backoffUntil)}</td>
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
                                    <td>${f7(R.startedAt)}</td>
                                    <td>${f7(R.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var bX=A_(()=>{T0();B4()});function mX(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=pE[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(nE.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function _5(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),q=hE[Y];if(q){G[q]=!0;continue}if(G.key)return null;let K=mX(X);if(!K||K==="escape")return null;G.key=K}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function cX(_){return String(_||"").split(/[\n,]/).map(($)=>_5($)).filter(($)=>Boolean($))}function S$(_){return _.join(", ")}function u7(){let _=g3(vX);if(!_||typeof _!=="object")return{};let $={};for(let j of f$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>_5(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function S7(_){if(L_(vX,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function lX(_){return lE.get(_)}function G6(_){let $=u7()[_];if(Array.isArray($))return $;return[...lX(_).defaultBindings]}function hX(_,$){let j=u7(),G=lX(_).defaultBindings,Z=[...new Set($.map((X)=>_5(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;S7(j)}function g7(_){if(!_){S7({});return}let $=u7();delete $[_],S7($)}function A2(){let _={};for(let $ of f$)_[$.id]=G6($.id);return _}function rE(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return mX($)||$.toLowerCase()}function dE(_){let $=_5(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function oE(_,$){let j=dE($);if(!j)return!1;if(rE(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function N$(_,$){return G6($).some((j)=>oE(_,j))}var vX="piclaw_keyboard_shortcuts_v1",f$,lE,hE,pE,nE;var k2=A_(()=>{f$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],lE=new Map(f$.map((_)=>[_.id,_])),hE={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},pE={esc:"escape",return:"enter",spacebar:"space"},nE=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var pX={};Z1(pX,{KeyboardSection:()=>sE});function iE(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function sE({filter:_="",setStatus:$}){let[j,G]=C(()=>{let K=A2();return Object.fromEntries(Object.entries(K).map(([L,Q])=>[L,S$(Q)]))});u(()=>{let K=()=>{let L=A2();G(Object.fromEntries(Object.entries(L).map(([Q,V])=>[Q,S$(V)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",K),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",K)},[]);let Z=Y0(()=>f$.filter((K)=>{let L=String(j[K.id]||"");return iE(_,K,L)}),[j,_]),X=(K)=>{let L=String(j[K]||"").trim(),V=(L?L.split(/[\n,]/).map((N)=>N.trim()).filter(Boolean):[]).filter((N)=>!_5(N));if(V.length>0){$?.(`Invalid shortcut: ${V[0]}. Escape is reserved and cannot be rebound.`,"error");return}let F=cX(L);hX(K,F),G((N)=>({...N,[K]:S$(G6(K))})),$?.("Keyboard shortcuts saved.","success")},Y=(K)=>{g7(K),G((L)=>({...L,[K]:S$(G6(K))})),$?.("Keyboard shortcut reset to default.","success")};return B`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{g7();let K=A2();G(Object.fromEntries(Object.entries(K).map(([L,Q])=>[L,S$(Q)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((K)=>B`
                    <div class="settings-shortcut-card" key=${K.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${K.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${K.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${S$(K.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[K.id]||""}
                                placeholder=${S$(K.defaultBindings)}
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
    `}var nX=A_(()=>{T0();k2()});function rX(_,$=b7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function dX(_,$=v7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function $5(){return{refreshIntervalSec:rX(j4(y2,b7),b7),folderPreviewDepth:dX(j4(T2,v7),v7)}}function oX(_={}){let $=$5(),j={refreshIntervalSec:rX(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:dX(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(L_(y2,String(j.refreshIntervalSec)),L_(T2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(M2,{detail:{settings:j}}));return j}var M2="piclaw:workspace-client-settings-updated",y2="workspaceRefreshIntervalSec",T2="workspaceFolderPreviewDepth",b7=60,v7=3;var m7=()=>{};var sX={};Z1(sX,{WorkspaceSection:()=>aE});function iX(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function aE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(!0),[q,K]=C(4),[L,Q]=C(5000),[V,F]=C(60),[N,H]=C(3),[z,E]=C(!1),[U,k]=C(!1),A=g(""),O=g(null),T=g(null),x=g(null),W=g(!0);u(()=>{return W.current=!0,()=>{if(W.current=!1,O.current)clearTimeout(O.current);if(T.current)clearTimeout(T.current);if(x.current)clearTimeout(x.current)}},[]);let J=P((y)=>{let I=iX(y),R=$5();Z(I.webTerminalEnabled),Y(I.vncAllowDirect),K(I.treeMaxDepth),Q(I.treeMaxEntries),F(R.refreshIntervalSec),H(R.folderPreviewDepth),A.current=JSON.stringify(I)},[]);u(()=>{J(_||{})},[_,J]);let M=Y0(()=>JSON.stringify(iX({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:q,treeMaxEntries:L}})),[G,X,q,L]);u(()=>{if(M===A.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!W.current)return;let y=document.activeElement;if(y&&y.closest?.(".settings-number-stepper"))return;try{let I=await a3(JSON.parse(M));if(!W.current||!I?.ok||!I?.settings)return;if(A.current=M,j?.({workspaceSettings:I.settings}),$?.(null),E(!0),T.current)clearTimeout(T.current);T.current=setTimeout(()=>{if(W.current)E(!1)},4000)}catch(I){$?.(String(I?.message||I),"error")}},800),()=>{if(O.current)clearTimeout(O.current)}},[M,j,$]);let D=P((y)=>{let I=oX(y);if(F(I.refreshIntervalSec),H(I.folderPreviewDepth),k(!0),x.current)clearTimeout(x.current);x.current=setTimeout(()=>{if(W.current)k(!1)},3000)},[]);return B`
        <div class="settings-section">
            ${z&&B`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${U&&B`
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
                <${b_}
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
                <${b_}
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
                <${b_}
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
                <${b_}
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
    `}var aX=A_(()=>{T0();g_();m7();B4()});var tX={};Z1(tX,{EnvironmentSection:()=>tE});function c7(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function tE({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=C(()=>c7(_||{})),[Y,q]=C({}),[K,L]=C(""),[Q,V]=C(""),[F,N]=C(null);u(()=>{X(c7(_||{})),q({})},[_]);let H=P((O)=>{let T=c7({environmentSettings:O?.settings||O});return X(T),G?.({environmentSettings:T}),q({}),T},[G]),z=P(async()=>{try{let O=await t3();if(O?.ok)H(O.settings);j?.("Environment refreshed.","info")}catch(O){j?.(String(O?.message||O),"error")}},[H,j]),E=P(async(O,T)=>{let x=String(O||"").trim();if(!x)return;N(x);try{let W=await L2({action:"set",name:x,value:String(T??"")});if(W?.ok)H(W.settings);if(j?.(`Saved environment override for ${x}.`,"info"),x===K.trim())L(""),V("")}catch(W){j?.(String(W?.message||W),"error")}finally{N(null)}},[H,K,j]),U=P(async(O)=>{let T=String(O||"").trim();if(!T)return;N(T);try{let x=await L2({action:"clear",name:T});if(x?.ok)H(x.settings);j?.(`Cleared environment override for ${T}.`,"info")}catch(x){j?.(String(x?.message||x),"error")}finally{N(null)}},[H,j]),k=Y0(()=>{let O=String($||"").trim().toLowerCase(),T=Array.isArray(Z.variables)?Z.variables:[];if(!O)return T;return T.filter((x)=>{return`${x?.name||""} ${x?.value||""} ${x?.source||""}`.toLowerCase().includes(O)})},[Z.variables,$]),A=P((O,T)=>{q((x)=>({...x||{},[O]:T}))},[]);return B`
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
                ${k.map((O)=>{let T=String(O?.name||""),x=Object.prototype.hasOwnProperty.call(Y,T)?Y[T]:O.value,W=x!==O.value,J=F===T;return B`
                        <div class="settings-tool-row" key=${T} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${T}>${T}</span>
                            <input
                                type="text"
                                value=${x}
                                spellcheck="false"
                                onInput=${(M)=>A(T,M.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${O.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${O.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${J||!W} onClick=${()=>E(T,x)}>Save</button>
                                <button type="button" disabled=${J||!O.overridden} onClick=${()=>U(T)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${k.length===0&&B`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var eX=A_(()=>{T0();g_()});var _Y={};Z1(_Y,{ProvidersSection:()=>_D});function eE(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function _D({providers:_,setStatus:$}){let[j,G]=C(null),[Z,X]=C(null),[Y,q]=C({}),K=P((E,U)=>{q((k)=>({...k,[E]:U}))},[]),L=P(async(E)=>{let U=(Y.apiKey||"").trim();if(!U){$?.("API key cannot be empty.","error");return}G(E),$?.(`Configuring ${E}…`,"info");try{let k=JSON.stringify({provider:E,method:"api_key",api_key:U}),A=await k1("default",`/login __step2 ${k}`,null,[]);if(A?.command?.status==="error"){$?.(A.command.message,"error");return}$?.(A?.command?.message||`${E} configured.`,"success"),X(null),q({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),Q=P(async(E,U)=>{G(E),$?.(`Configuring ${E}…`,"info");try{let k={provider:E,method:"custom"};for(let T of U.customFields||[])k[T.key]=(Y[T.key]||"").trim();let A=JSON.stringify(k),O=await k1("default",`/login __step2 ${A}`,null,[]);if(O?.command?.status==="error"){$?.(O.command.message,"error");return}$?.(O?.command?.message||`${E} configured.`,"success"),X(null),q({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),V=P(async(E)=>{G(E),$?.(`Starting OAuth for ${E}…`,"info");try{let U=JSON.stringify({provider:E}),A=(await k1("default",`/login __step1 ${U}`,null,[]))?.command?.message||"";if(A.includes("http")){let O=A.match(/(https?:\/\/[^\s)]+)/);if(O)window.open(O[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(A,"success")}else $?.(A||`OAuth flow started for ${E}. Check the chat.`,"success")}catch(U){$?.(String(U.message||U),"error")}finally{G(null)}},[$]),F=P(async(E)=>{if(j)return;G(E),$?.(`Logging out ${E}…`,"info");try{await k1("default",`/logout ${E}`,null,[]),$?.(`Logged out ${E}. Restart may be needed.`,"success")}catch(U){$?.(String(U.message||U),"error")}finally{G(null)}},[j,$]),N=_||[],H=(E)=>Z===E,z=(E)=>{X((U)=>U===E?null:E),q({})};return B`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${N.map((E)=>B`
                    <div class=${`settings-provider-card${E.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!E.configured&&z(E.id)}>
                            <strong>${E.name}</strong>
                            <span class="settings-provider-id">${E.id}</span>
                            ${E.configured&&B`<span class="settings-tag settings-tag-skill">${eE(E.authType)}</span>`}
                            <div class="settings-provider-card-meta">
                                ${E.hasOAuth&&B`<span class="settings-tag">OAuth</span>`}
                                ${E.hasApiKey&&B`<span class="settings-tag">API Key</span>`}
                                ${E.isCustom&&B`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${E.configured?B`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===E.id} onClick=${(U)=>{U.stopPropagation(),F(E.id)}}
                                    >${j===E.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===E.id} onClick=${(U)=>{U.stopPropagation(),z(E.id)}}
                                    >Reconfigure</button>
                                `:B`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===E.id} onClick=${(U)=>{U.stopPropagation(),z(E.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${H(E.id)&&B`
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
                                                onInput=${(U)=>K("apiKey",U.target.value)}
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
                                        ${(E.customFields||[]).map((U)=>B`
                                            <div class="settings-row settings-provider-inline-row" style="margin-bottom:6px">
                                                <label>${U.label}${U.required?" *":""}</label>
                                                <input type="text" value=${Y[U.key]||""}
                                                    onInput=${(k)=>K(U.key,k.target.value)}
                                                    placeholder=${U.placeholder||""} />
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
    `}var $Y=A_(()=>{T0();g_()});var jY={};Z1(jY,{ModelsSection:()=>XD});function GD(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function ZD({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=GD(j)?$D:jD,q=G&&G.length>1?G:["off","minimal","low","medium","high"],K=Math.max(0,q.indexOf(_??"off"));if(!$)return B`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return B`
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
    `}function XD({filter:_=""}){let[$,j]=C(null),[G,Z]=C(!1),[X,Y]=C("off"),[q,K]=C(!1),[L,Q]=C(["off"]),[V,F]=C(!1),N=P(async()=>{let x=await V4();if(j(x),x.thinking_level)Y(x.thinking_level);if(K(Boolean(x.supports_thinking)),Array.isArray(x.available_thinking_levels)&&x.available_thinking_levels.length>0)Q(x.available_thinking_levels);return x},[]);u(()=>{N().catch(()=>j({models:[],model_options:[]}))},[]);let H=P(async(x)=>{if(G)return;Z(!0);try{await k1("default",`/model ${x}`,null,[]),await N()}catch(W){console.error("Failed to switch model:",W)}finally{Z(!1)}},[G,N]),z=P(async(x)=>{if(V)return;F(!0),Y(x);try{let W=await k1("default",`/thinking ${x}`,null,[]);if(W?.command?.thinking_level)Y(W.command.thinking_level);K(W?.command?.supports_thinking!==!1),await N()}catch(W){console.error("Failed to set thinking:",W),await N().catch((J)=>{})}finally{F(!1)}},[V,N]);if(!$)return B`<div class="settings-loading">Loading models\u2026</div>`;let E=$.model_options||[],U=$.current,A=E.find((x)=>x.label===U)?.provider||"",O=_.toLowerCase(),T=O?E.filter((x)=>x.label.toLowerCase().includes(O)||(x.provider||"").toLowerCase().includes(O)):E;return B`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${T.map((x)=>B`
                            <tr class=${x.label===U?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${x.label===U} disabled=${G} onChange=${()=>H(x.label)} /></td>
                                <td>${x.name||x.label}</td><td>${x.provider}</td>
                                <td>${x.context_window?(x.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${x.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${T.length===0&&B`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${ZD}
                    thinkingLevel=${X}
                    supportsThinking=${q}
                    provider=${A}
                    availableLevels=${L}
                    onSetLevel=${z}
                    disabled=${V||G} />
            </div>
        </div>
    `}var $D,jD;var GY=A_(()=>{T0();g_();$D={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},jD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var XY={};Z1(XY,{ThemeSection:()=>YD});function ZY(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function YD({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=C("default"),[q,K]=C(""),[L,Q]=C(!1),V=g(""),F=g(null),N=g(!0);u(()=>{return N.current=!0,()=>{N.current=!1}},[]);let H=P((A)=>{let O=ZY(A);Y(O.uiTheme),K(O.uiTint),V.current=JSON.stringify(O)},[]);u(()=>{if(j){H(j);return}H({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,H]);let z=P((A,O)=>{o4({theme:A,tint:O||null}),Y(A||"default"),K(O||"")},[]),E=Y0(()=>JSON.stringify(ZY({uiTheme:X,uiTint:q})),[X,q]);u(()=>{if(E===V.current)return;if(F.current)clearTimeout(F.current);return F.current=setTimeout(async()=>{if(!N.current)return;Q(!0);try{let A=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:E}),O=await A.json().catch(()=>({}));if(!N.current)return;if(!A.ok||!O?.ok||!O?.settings){G?.(O?.error||"Failed to save appearance settings.","error");return}V.current=E,Z?.(O.settings),G?.("Appearance synced across clients.","success")}catch(A){if(!N.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",A),G?.("Failed to save appearance settings.","error")}finally{if(N.current)Q(!1)}},250),()=>{if(F.current)clearTimeout(F.current)}},[E,Z,G]);let U=$||[],k=_||[];return B`
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
                        onInput=${(A)=>{let O=A.target.value;if(K(O),X==="default")o4({theme:"default",tint:O})}} />
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
                        ${U.map((A)=>B`<th class="settings-swatch-header">${A.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${k.filter((A)=>A.name!=="default").map((A)=>B`
                        <tr class=${A.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>z(A.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${A.name===X} onChange=${()=>z(A.name,"")} /></td>
                            <td><strong>${A.label}</strong></td>
                            <td>${A.mode}</td>
                            ${U.map((O)=>{let T=A.colors?.[O];return B`<td class="settings-swatch-cell">
                                    ${T?B`<span class="settings-color-swatch" style=${"background:"+T} title=${T}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var YY=A_(()=>{T0();g5()});function qY(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function j5(_){return typeof _==="string"&&_.trim().length>0}function l7(_,...$){let j=qY(_);if(!j)return!0;let G=$.map((Z)=>qY(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function KY(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function g$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:KY($.workspaceCommands),slashCommands:KY($.slashCommands)}}function LY(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function qD(_){let $=Array.isArray(_?.commands)?_.commands:[],j=g$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>LY(j.workspaceCommands,Z.id)).filter((Z)=>l7(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function KD(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=j5(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>l7(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=j5(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=j5(Z?.session_name)?Z.session_name.trim():"",q=String(Z?.chat_jid||"").trim();return{key:`agent:${q}`,kind:"agent",title:`@${X}`,subtitle:Y||q,searchText:`@${X} ${Y} ${q}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:q}})}function LD(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=g$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=j5(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),LY(j.slashCommands,Y)}).filter((X)=>l7(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),q=j5(X?.description)?X.description.trim():"slash command",K=j5(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:q,searchText:`${Y} ${q} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:K||"Slash",actionHint:"Insert",commandName:Y}})}function VY(_){return[...KD({agents:_?.agents,query:_?.query}),...qD({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...LD({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var u$;var h7=A_(()=>{u$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var NY={};Z1(NY,{QuickActionsSection:()=>VD});function QY(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function FY(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function VD({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=C(()=>u$.map((x)=>x.id)),[X,Y]=C([]),[q,K]=C([]),[L,Q]=C(!0),[V,F]=C(!1),N=P(async()=>{Q(!0);try{let[x,W]=await Promise.all([n5(),p5("web:default").catch(()=>({commands:[]}))]),J=g$(x?.settings),M=Array.isArray(W?.commands)?W.commands:[];K(M),Z(Array.isArray(J.workspaceCommands)?J.workspaceCommands:u$.map((D)=>D.id)),Y(Array.isArray(J.slashCommands)?J.slashCommands:M.map((D)=>String(D?.name||"").trim()).filter(Boolean))}catch(x){$?.(String(x?.message||x),"error")}finally{Q(!1)}},[$]);u(()=>{N()},[N]);let H=Y0(()=>FY(G),[G]),z=Y0(()=>FY(X),[X]),E=Y0(()=>u$.filter((x)=>QY(_,x.label,x.description,...x.keywords||[])),[_]),U=Y0(()=>q.filter((x)=>QY(_,x?.name,x?.description,x?.source)),[q,_]),k=P((x)=>{Z((W)=>{let J=new Set((Array.isArray(W)?W:[]).map((M)=>String(M||"").trim()).filter(Boolean));if(J.has(x))J.delete(x);else J.add(x);return u$.map((M)=>M.id).filter((M)=>J.has(M))})},[]),A=P((x)=>{Y((W)=>{let J=new Set((Array.isArray(W)?W:[]).map((M)=>String(M||"").trim()).filter(Boolean));if(J.has(x))J.delete(x);else J.add(x);return q.map((M)=>String(M?.name||"").trim()).filter((M)=>M&&J.has(M))})},[q]),O=P(()=>{Z(u$.map((x)=>x.id)),Y(q.map((x)=>String(x?.name||"").trim()).filter(Boolean))},[q]),T=P(async()=>{if(V)return;F(!0),$?.("Saving quick actions…","info");try{let x=await s3({workspaceCommands:G,slashCommands:X}),W=g$(x?.settings);j?.({quickActions:W}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:W}})),$?.("Quick Actions saved.","success")}catch(x){$?.(String(x?.message||x),"error")}finally{F(!1)}},[j,V,$,X,G]);if(L)return B`<div class="settings-loading">Loading…</div>`;return B`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${O} disabled=${V}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${T} disabled=${V}>
                    ${V?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${E.map((x)=>{let W=H?H.has(x.id.toLowerCase()):!0;return B`
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
                ${U.map((x)=>{let W=String(x?.name||"").trim(),J=z?z.has(W.toLowerCase()):!0;return B`
                        <label class="settings-checkbox-row" key=${W}>
                            <input type="checkbox" checked=${J} onChange=${()=>A(W)} />
                            <div>
                                <div><code>${W}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${U.length===0&&B`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var BY=A_(()=>{T0();g_();h7()});var UY={};Z1(UY,{KeychainSection:()=>ND});function QD(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function ND({filter:_=""}){let[$,j]=C([]),[G,Z]=C(!0),[X,Y]=C(null),[q,K]=C(!1),[L,Q]=C(""),[V,F]=C(""),[N,H]=C(""),[z,E]=C(""),[U,k]=C(""),[A,O]=C("secret"),[T,x]=C(!1),[W,J]=C({}),[M,D]=C(null),[y,I]=C(null),[R,S]=C(null),v=g(null),c=g(null),h=g(null),$0=P(async()=>{Z(!0),Y(null);try{let G0=await(await fetch("/agent/keychain")).json();if(G0?.ok)j(G0.entries||[]);else Y(G0?.error||"Failed to load keychain.")}catch(d){Y("Failed to load keychain.")}finally{Z(!1)}},[]);u(()=>{$0()},[$0]);let b=P(async()=>{let d=L.trim(),G0=V;if(!d||!G0)return;x(!0);try{let y0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d,secret:G0,type:A,username:N.trim()||void 0,userNote:z,agentNote:U})})).json();if(y0?.ok)Q(""),F(""),H(""),E(""),k(""),O("secret"),K(!1),await $0();else Y(y0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{x(!1)}},[L,V,N,z,U,A,$0]),t=P(async(d)=>{try{let x0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})})).json();if(x0?.ok)I(null),S((y0)=>y0?.name===d?null:y0),await $0();else Y(x0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[$0]),s=P(async(d)=>{let G0=d?.name;if(!G0)return;let x0=W[G0]||{},y0=Object.prototype.hasOwnProperty.call(x0,"userNote")?x0.userNote:d.userNote||"",C0=Object.prototype.hasOwnProperty.call(x0,"agentNote")?x0.agentNote:d.agentNote||"";D(G0);try{let j_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:G0,userNote:y0,agentNote:C0})})).json();if(j_?.ok)J((P0)=>{let d0={...P0||{}};return delete d0[G0],d0}),await $0();else Y(j_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{D(null)}},[W,$0]),q0=P((d,G0,x0)=>{J((y0)=>({...y0||{},[d]:{...(y0||{})[d]||{},[G0]:x0}}))},[]),X0=P(async(d,G0,x0)=>{try{let C0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d,master_password:G0||void 0,totp_code:x0||void 0})})).json();if(C0?.ok)S({name:d,phase:"revealed",secret:C0.secret,username:C0.username,masterPassword:G0});else if(C0?.needs_master_password)S((n0)=>({name:d,phase:"password",masterPassword:"",error:n0?.name===d&&n0?.masterPassword?C0.error:null})),requestAnimationFrame(()=>c.current?.focus());else if(C0?.needs_totp)S((n0)=>({name:d,phase:"totp",masterPassword:G0,totpCode:"",error:n0?.name===d&&n0?.phase==="totp"&&n0?.totpCode?C0.error:null})),requestAnimationFrame(()=>h.current?.focus());else S({name:d,phase:"error",error:C0?.error||"Failed to reveal."})}catch{S({name:d,phase:"error",error:"Failed to reveal."})}},[]),H0=P((d)=>{if(R?.name===d&&R?.phase==="revealed"){S(null);return}X0(d,null,null)},[R,X0]),B0=P((d)=>{let G0=R?.masterPassword||"";if(!G0)return;X0(d,G0,null)},[R,X0]),K0=P((d)=>{let G0=R?.totpCode||"";if(G0.length<6)return;X0(d,R?.masterPassword,G0)},[R,X0]),D0=P(async(d)=>{try{await navigator.clipboard.writeText(d)}catch{let G0=document.createElement("textarea");G0.value=d,G0.style.position="fixed",G0.style.opacity="0",document.body.appendChild(G0),G0.select(),document.execCommand("copy"),document.body.removeChild(G0)}},[]);u(()=>{if(q)requestAnimationFrame(()=>v.current?.focus())},[q]);let Q0=_.toLowerCase(),k0=Y0(()=>{if(!Q0)return $;return $.filter((d)=>d.name.toLowerCase().includes(Q0)||(d.type||"").toLowerCase().includes(Q0)||(d.envVar||"").toLowerCase().includes(Q0)||(d.userNote||"").toLowerCase().includes(Q0)||(d.agentNote||"").toLowerCase().includes(Q0))},[$,Q0]);if(G)return B`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return B`
        <div class="settings-section">
            ${X&&B`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Y(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${k0.length} entr${k0.length===1?"y":"ies"}${Q0?` matching "${_}"`:""}, encrypted at rest.</span>
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
                            value=${L} onInput=${(d)=>Q(d.target.value)}
                            class="settings-keychain-input" />
                        <select value=${A} onChange=${(d)=>O(d.target.value)}
                            class="settings-keychain-select">
                            ${FD.map((d)=>B`<option value=${d}>${d}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${V} onInput=${(d)=>F(d.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${N} onInput=${(d)=>H(d.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${b}
                            disabled=${T||!L.trim()||!V}>
                            ${T?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${z} onInput=${(d)=>E(d.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${U} onInput=${(d)=>k(d.target.value)}
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
                        ${k0.length===0&&B`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${Q0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${k0.map((d)=>{let G0=R?.name===d.name?R:null,x0=G0?.phase==="revealed",y0=G0?.phase==="password",C0=G0?.phase==="totp",n0=G0?.phase==="error",j_=W[d.name]||{},P0=Object.prototype.hasOwnProperty.call(j_,"userNote")?j_.userNote:d.userNote||"",d0=Object.prototype.hasOwnProperty.call(j_,"agentNote")?j_.agentNote:d.agentNote||"",w0=P0!==(d.userNote||"")||d0!==(d.agentNote||""),s0=M===d.name;return B`
                            <tr class="settings-keychain-row" key=${d.name}>
                                <td class="settings-keychain-name">${d.name}</td>
                                <td><span class="settings-keychain-type-badge">${d.type}</span></td>
                                <td class="settings-keychain-env">${d.envVar?B`<code>$${d.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${QD(d.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${x0?" active":""}`}
                                        onClick=${()=>H0(d.name)}
                                        title=${x0?"Hide secret":"Reveal secret"}>
                                        ${x0?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${y===d.name?B`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>t(d.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>I(null)}>No</button>
                                            </span>
                                        `:B`<button class="settings-keychain-delete-btn" onClick=${()=>I(d.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${d.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${P0}
                                                onInput=${(S0)=>q0(d.name,"userNote",S0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${d0}
                                                onInput=${(S0)=>q0(d.name,"agentNote",S0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!w0||s0} onClick=${()=>s(d)}>
                                            ${s0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${y0&&B`
                                <tr class="settings-keychain-prompt-row" key=${d.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${c} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${G0?.masterPassword||""}
                                                onInput=${(S0)=>S((t0)=>({...t0,masterPassword:S0.target.value}))}
                                                onKeyDown=${(S0)=>{if(S0.key==="Enter")B0(d.name);if(S0.key==="Escape")S(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>B0(d.name)}
                                                disabled=${!G0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>S(null)}>Cancel</button>
                                            ${G0?.error&&B`<span class="settings-keychain-prompt-error">${G0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${C0&&B`
                                <tr class="settings-keychain-prompt-row" key=${d.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${h} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${G0?.totpCode||""}
                                                onInput=${(S0)=>S((t0)=>({...t0,totpCode:S0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(S0)=>{if(S0.key==="Enter")K0(d.name);if(S0.key==="Escape")S(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>K0(d.name)}
                                                disabled=${(G0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>S(null)}>Cancel</button>
                                            ${G0?.error&&B`<span class="settings-keychain-prompt-error">${G0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${x0&&B`
                                <tr class="settings-keychain-reveal-row" key=${d.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${G0.username&&B`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${G0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>D0(G0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${G0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>D0(G0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${n0&&B`
                                <tr class="settings-keychain-reveal-row" key=${d.name+"-error"}>
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
    `}var FD;var HY=A_(()=>{T0();FD=["secret","token","password","basic"]});var EY={};Z1(EY,{ToolsSection:()=>DD});function DD({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=C(()=>{let F={};for(let N of Z)F[N.name]=!0;return F}),q=P((F)=>{Y((N)=>({...N,[F]:!N[F]}))},[]),K=j?.searchMatchMode||"or",L=P(async()=>{let F=K==="or"?"and":"or";try{let H=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:F})})).json().catch(()=>({}));if(H?.ok&&H?.settings)G?.(H.settings)}catch(N){console.warn("[settings/tools] Failed to save search match mode.",N)}},[K,G]),Q=$.toLowerCase(),V=Y0(()=>{if(!Q)return Z;return Z.map((F)=>{let N=F.tools.filter((H)=>H.name.toLowerCase().includes(Q)||F.name.toLowerCase().includes(Q)||(H.summary||"").toLowerCase().includes(Q));return N.length>0?{...F,tools:N}:null}).filter(Boolean)},[Z,Q]);if(Z.length===0)return B`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return B`
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
                            <span class="settings-toolset-icon">${BD[F.name]||ED}</span>
                            <strong>${F.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${F.description}</span>
                    </div>
                    ${N&&B`<div class="settings-tool-list">${F.tools.map((H)=>B`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${H.name}</span>
                            <span class="settings-tool-kind" title=${H.kind}>${HD[H.kind]||"?"}</span>
                            ${H.summary&&B`<span class="settings-tool-summary">${H.summary}</span>`}
                            <span class="settings-tool-source">${UD[H.name]||F.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${V.length===0&&B`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var BD,UD,HD,ED;var DY=A_(()=>{T0();BD={core:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},UD={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",list_internal_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},HD={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},ED=B`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var zY={};Z1(zY,{AddonsSection:()=>zD});function zD({setStatus:_,filter:$=""}){let[j,G]=C(null),[Z,X]=C(!0),[Y,q]=C(null),[K,L]=C(!1),[Q,V]=C({runtime:"",windowsNative:!1}),[F,N]=C([]),[H,z]=C([]);function E(){let M=new URLSearchParams;try{let y=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),I=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((S)=>S.trim()).filter(Boolean),R=localStorage.getItem("piclaw_addons_repo_url");if(y)M.append("catalog_url",y);for(let S of I)M.append("catalog_url",S);if(R)M.set("repo_url",R)}catch(y){}let D=M.toString();return D?`?${D}`:""}let U=P(async()=>{try{let[M,D]=await Promise.all([fetch(`/agent/addons${E()}`),fetch("/agent/settings-data")]),y=await M.json();if(y.error)throw Error(y.error);G(y.addons||[]),N(y.sources||[]),z(y.failed_sources||[]);let I=await D.json().catch(()=>({})),R=typeof I?.runtimePlatform==="string"?I.runtimePlatform:"";V({runtime:R,windowsNative:R==="win32"})}catch(M){G(null),_?.(String(M.message||M),"error")}finally{X(!1)}},[_]);u(()=>{U()},[]);let k=P(async(M)=>{if(Y)return;q({slug:M,action:"install"}),_?.(`Installing ${M}…`,"info");try{let y=await(await fetch(`/agent/addons/install${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:M})})).json();if(y.error){_?.(y.error,"error");return}L(!0);let I=[y.message,y.warning].filter(Boolean).join(" ");_?.(I||"Add-on installed.","success"),await U()}catch(D){_?.(String(D.message||D),"error")}finally{q(null)}},[Y,U,_]),A=P(async(M)=>{if(Y)return;q({slug:M,action:"remove"}),_?.(`Removing ${M}…`,"info");try{let y=await(await fetch(`/agent/addons/uninstall${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:M})})).json();if(y.error){_?.(y.error,"error");return}L(!0);let I=[y.message,y.warning].filter(Boolean).join(" ");_?.(I||"Add-on removed.","success"),await U()}catch(D){_?.(String(D.message||D),"error")}finally{q(null)}},[Y,U,_]),O=P(async()=>{if(Y)return;q({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let D=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(D.error){_?.(D.error,"error"),q(null);return}_?.(D.message||"Restarting piclaw…","success"),L(!1),(async(I=30,R=2000)=>{for(let S=0;S<I;S++){await new Promise((v)=>setTimeout(v,R));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await U(),q(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(v){}}q(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(M){_?.(String(M.message||M),"error"),q(null)}},[Y,_,U]);if(Z)return B`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return B`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let T=$.toLowerCase(),x=T?j.filter((M)=>M.slug.toLowerCase().includes(T)||(M.description||"").toLowerCase().includes(T)||(M.tags||[]).some((D)=>D.toLowerCase().includes(T))):j,W=Y?.slug||null,J=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return B`
        <div class=${`settings-section settings-addon-panel${Y?" busy":""}`} aria-busy=${Y?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${F.length<=1?B`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:B`${F.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${H.length>0&&B`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${H.length} catalog source${H.length>1?"s":""}:
                            ${H.map((M)=>B` <code style="font-size:0.82em;word-break:break-all">${M}</code>`)}
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
    `}var OY=A_(()=>{T0()});var yD={};function p7(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function w2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function OD(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function WD(_,$){try{localStorage.setItem(_,$)}catch(j){}}function JD(_,$,j,G){try{return F$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return F$($,{fallback:$,min:j,max:G})}}function AD(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function kD(){let[_,$]=C(()=>p7("piclaw_vim_mode",!1)),[j,G]=C(()=>p7("piclaw_show_whitespace",!0)),[Z,X]=C(()=>p7("piclaw_md_live_preview",!0)),[Y,q]=C(()=>JD("piclaw_editor_font_size",13,10,24)),[K,L]=C(()=>OD("piclaw_editor_font_family","")),Q=P((V,F,N)=>{let H=!F;N(H),w2(V,H)},[]);return B`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let V=!_;$(V),w2("piclaw_vim_mode",V)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let V=!j;G(V),w2("piclaw_show_whitespace",V)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let V=!Z;X(V),w2("piclaw_md_live_preview",V)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${b_}
                    label="editor font size"
                    value=${Y}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(V)=>{q(V),AD("piclaw_editor_font_size",V)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${K}
                    onInput=${(V)=>{let F=V.target.value;L(F),WD("piclaw_editor_font_family",F)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var MD;var WY=A_(()=>{T0();e4();B4();MD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;R$({id:"editor",label:"Editor",icon:MD,component:kD,order:150})});var CD={};function JY(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function AY(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function TD(_,$,j,G){try{return F$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return F$($,{fallback:$,min:j,max:G})}}function wD(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function xD(){let[_,$]=C(()=>JY("piclaw_mindmap_auto_expand",!0)),[j,G]=C(()=>TD("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=C(()=>JY("piclaw_mindmap_animate",!0));return B`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),AY("piclaw_mindmap_auto_expand",Y)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${b_}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(Y)=>{G(Y),wD("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),AY("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var ID;var kY=A_(()=>{T0();e4();B4();ID=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;R$({id:"mindmap",label:"Mind Map",icon:ID,component:xD,order:170})});var fD={};function n7(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function r7(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function d7(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function o7(_,$){try{localStorage.setItem(_,$)}catch(j){}}function PD(){let[_,$]=C(()=>n7("piclaw_dev_mode",!1)),[j,G]=C(()=>d7("piclaw_addons_catalog_url","")),[Z,X]=C(()=>d7("piclaw_addons_catalog_urls","")),[Y,q]=C(()=>d7("piclaw_addons_repo_url","")),[K,L]=C(()=>n7("piclaw_debug_sse",!1)),[Q,V]=C(()=>n7("piclaw_debug_tool_calls",!1)),F=P(()=>{let N=!_;$(N),r7("piclaw_dev_mode",N)},[_]);return B`
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
                        onInput=${(N)=>{let H=N.target.value;G(H),o7("piclaw_addons_catalog_url",H)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(N)=>{let H=N.target.value;X(H),o7("piclaw_addons_catalog_urls",H)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(N)=>{let H=N.target.value;q(H),o7("piclaw_addons_repo_url",H)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${K}
                        onChange=${()=>{let N=!K;L(N),r7("piclaw_debug_sse",N)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${Q}
                        onChange=${()=>{let N=!Q;V(N),r7("piclaw_debug_tool_calls",N)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var RD;var MY=A_(()=>{T0();e4();RD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;R$({id:"developer",label:"Developer",icon:RD,component:PD,order:900})});var IY={};Z1(IY,{openSettingsDialog:()=>eD,SettingsDialogContent:()=>xY,SettingsDialog:()=>tD});function X6(_){Z6.push({ts:performance.now(),label:_})}function SD(){if(!Z6.length)return;let _=Z6[0].ts,$=Z6.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}Z6.length=0}function bD(_){let $=C2.get(_);if($)return Promise.resolve($);let j=x2.get(_);if(j)return j;let G=uD[_]().then((Z)=>{return C2.set(_,Z),x2.delete(_),Z}).catch((Z)=>{throw x2.delete(_),Z});return x2.set(_,G),G}function I2(_="Loading…"){return B`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function xY({onClose:_}){X6("SettingsDialogContent-render-start");let[$,j]=C(()=>I7()||"general"),[G,Z]=C(yY),[X,Y]=C(null),[q,K]=C(""),[,L]=C(0),[Q,V]=C(()=>Object.fromEntries(C2.entries())),[F,N]=C(null),[H,z]=C({compact:!1,narrow:!1}),E=g(null),U=g(null);u(()=>{X6("SettingsDialogContent-mounted"),SD()},[]),u(()=>{let D=(y)=>{if(y.key==="Escape")_()};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[_]),u(()=>{let D=(y)=>{let I=typeof y?.detail?.section==="string"?y.detail.section.trim():"";if(I)j(I),K("")};return window.addEventListener("piclaw:open-settings",D),()=>window.removeEventListener("piclaw:open-settings",D)},[]),u(()=>{let D=()=>L((y)=>y+1);return window.addEventListener("piclaw:settings-panes-changed",D),()=>window.removeEventListener("piclaw:settings-panes-changed",D)},[]),u(()=>{fetch("/agent/settings-data").then((D)=>D.json()).then((D)=>{yY=D,Z(D)}).catch(()=>Z({}))},[]),u(()=>{let D=U.current;if(!D)return;let y=()=>{let I=D.clientWidth||0;z((R)=>{let S={compact:I>0&&I<=860,narrow:I>0&&I<=720};return R.compact===S.compact&&R.narrow===S.narrow?R:S})};if(y(),typeof ResizeObserver==="function"){let I=new ResizeObserver(()=>y());return I.observe(D),()=>I.disconnect()}return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]);let k=AX(),A=[...wY,...k.map((D)=>({id:D.id,label:D.label,icon:D.icon,searchable:D.searchable||!1,placeholder:D.searchPlaceholder,order:D.order??500,isExtension:!0,component:D.component}))].sort((D,y)=>(D.order??500)-(y.order??500)),O=A.find((D)=>D.id===$)||wY.find((D)=>D.id===$);u(()=>{if(O?.searchable)requestAnimationFrame(()=>E.current?.focus())},[$]),u(()=>{if(O?.isExtension){N(null);return}let D=!1;if(Q[$]){N(null);return}return N($),bD($).then((y)=>{if(D)return;V((I)=>I?.[$]?I:{...I||{},[$]:y})}).catch((y)=>{if(D)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,y)}).finally(()=>{if(!D)N((y)=>y===$?null:y)}),()=>{D=!0}},[$,O?.isExtension,Q]);let T=P((D,y="info")=>{Y(D?{text:D,type:y}:null)},[]),x=P((D)=>{j(D),K("");let y=gD[D];if(y&&!TY.has(D))TY.add(D),y().then(()=>L((I)=>I+1)).catch((I)=>{})},[]),W=P((D)=>{Z((y)=>({...y||{},...D||{}}))},[]),J=()=>{if(O?.isExtension){if(!O.component)return I2("Loading pane…");let y=O.component;return B`<${y} filter=${q} />`}let D=Q[$];if(!D||F===$)return I2(`Loading ${O?.label||"settings"}…`);switch($){case"general":return B`<${D} settingsData=${G} setStatus=${T} mergeSettingsData=${W} />`;case"sessions":return B`<${D} settingsData=${G} setStatus=${T} mergeSettingsData=${W} />`;case"compaction":return B`<${D} settingsData=${G} setStatus=${T} mergeSettingsData=${W} />`;case"keyboard":return B`<${D} filter=${q} setStatus=${T} />`;case"workspace":return B`<${D} settingsData=${G} setStatus=${T} mergeSettingsData=${W} />`;case"environment":return B`<${D} settingsData=${G} filter=${q} setStatus=${T} mergeSettingsData=${W} />`;case"providers":return B`<${D} providers=${G?.providers} setStatus=${T} />`;case"models":return B`<${D} filter=${q} />`;case"theme":return B`<${D} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${T} mergeSettingsData=${W} />`;case"quick-actions":return B`<${D} filter=${q} setStatus=${T} mergeSettingsData=${W} />`;case"keychain":return B`<${D} filter=${q} />`;case"tools":return B`<${D} toolsets=${G?.toolsets} filter=${q} settingsData=${G} mergeSettingsData=${W} />`;case"addons":return B`<${D} setStatus=${T} filter=${q} />`;default:return I2("Loading settings…")}},M=!O;return X6("SettingsDialogContent-render-end"),B`
        <div class="settings-dialog-backdrop" onClick=${(D)=>{if(D.target===D.currentTarget)_()}}>
            <div ref=${U} class=${`settings-dialog${H.compact?" settings-dialog-compact":""}${H.narrow?" settings-dialog-narrow":""}`}>
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
                        ${M?I2("Loading settings…"):J()}
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
    `}function tD(){let[_,$]=C(!1);if(u(()=>{let j=(Z)=>{let X=t4(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=D2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return B`<${P$} className="settings-portal"><${xY} onClose=${()=>$(!1)} /><//>`}function eD(_={}){h1(_)}var Z6,yY=null,C2,x2,uD,gD,TY,vD,mD,cD,lD,hD,pD,nD,rD,dD,oD,iD,sD,aD,wY;var CY=A_(()=>{T0();z2();e4();RX();Z6=[];X6("module-eval-start");X6("imports-done");C2=new Map,x2=new Map;C2.set("general",R7);uD={general:()=>Promise.resolve(R7),sessions:()=>Promise.resolve().then(() => (uX(),SX)).then((_)=>_.SessionsSection),compaction:()=>Promise.resolve().then(() => (bX(),gX)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (nX(),pX)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (aX(),sX)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (eX(),tX)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => ($Y(),_Y)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (GY(),jY)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (YY(),XY)).then((_)=>_.ThemeSection),"quick-actions":()=>Promise.resolve().then(() => (BY(),NY)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (HY(),UY)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (DY(),EY)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (OY(),zY)).then((_)=>_.AddonsSection)},gD={"editor-settings":()=>Promise.resolve().then(() => (WY(),yD)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (kY(),CD)).then(()=>{}),developer:()=>Promise.resolve().then(() => (MY(),fD)).then(()=>{})},TY=new Set;vD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,mD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,cD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,lD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,hD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,pD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,nD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,rD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,dD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,oD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,iD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,sD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,aD=B`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,wY=[{id:"general",label:"General",icon:vD,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:mD,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:cD,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:pD,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:lD,searchable:!1,order:15},{id:"environment",label:"Environment",icon:hD,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:nD,searchable:!1,order:20},{id:"models",label:"Models",icon:rD,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:dD,searchable:!1,order:40},{id:"quick-actions",label:"Quick Actions",icon:iD,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:sD,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:oD,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:aD,searchable:!0,placeholder:"Filter add-ons…",order:90}]});T0();class oj{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var X_=new oj;var c6=null,j3=null;function cN(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function ij(){if(j3)return Promise.resolve(j3);if(!c6)c6=import(cN()).then((_)=>{return j3=_,_}).catch((_)=>{throw c6=null,_});return c6}class sj{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await ij();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var G3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new sj(_,$)}};function Z3(){ij().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function aj(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function l6(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var tj="piclaw:editor-popout:",lN=300000;function ej(_){try{return _?.localStorage??null}catch{return null}}function hN(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function _G(_){return typeof _==="string"?_.trim():""}function $G(_){return(typeof _==="string"?_.trim():"")||null}function jG(_){return typeof _==="string"?_:void 0}function GG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function ZG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function u4(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function pN(_,$=globalThis,j=Date.now()){let G=ej($),Z=_G(_?.path);if(!G||!Z)return null;let X={path:Z,content:jG(_?.content),mtime:GG(_?.mtime),paneOverrideId:$G(_?.paneOverrideId),viewState:ZG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let q=hN(j);try{return G.setItem(`${tj}${q}`,JSON.stringify(X)),q}catch{return null}}function X3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=ej($);if(!G||!Z)return null;let X=`${tj}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;l6(Z,X);try{let q=JSON.parse(Y),K=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(K+lN<j)return null;let L=_G(q?.path);if(!L)return null;return{path:L,content:jG(q?.content),mtime:GG(q?.mtime),paneOverrideId:$G(q?.paneOverrideId),viewState:ZG(q?.viewState),capturedAt:K}}catch{return null}}function h6(_,$=globalThis,j=Date.now()){let G=pN(_,$,j);return G?{editor_popout:G}:null}function J1(_){try{return _(),!0}catch($){return!1}}function XG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:q,resizeObserver:K}=_;J1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),J1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),J1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),J1(()=>{q?.disconnect?.()}),J1(()=>{K?.disconnect?.()})}function YG(_){_.syncHostLayout(),J1(()=>{_.terminal?.renderer?.remeasureFont?.()}),J1(()=>{_.fitAddon?.fit?.()}),J1(()=>{_.terminal?.refresh?.()}),_.syncHostLayout(),_.sendResize()}function qG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)J1(()=>{j($)});return J1(()=>{G?.close?.()}),J1(()=>{Z?.dispose?.()}),J1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function g1(_){try{return _(),!0}catch($){return!1}}function KG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:q}=_;if(g1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let K=j?.querySelector?.(".terminal-live-host");if(K&&typeof K==="object"&&"style"in K)K.style.backgroundColor=Z.background,K.style.color=Z.foreground;let L=j?.querySelector?.("canvas");if(L&&typeof L==="object"&&"style"in L)L.style.backgroundColor=Z.background,L.style.color=Z.foreground}),g1(()=>{if(G?.options)G.options.theme=Z}),X)g1(()=>{G?.reset?.()});g1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),g1(()=>{G?.loadFonts?.()}),g1(()=>{G?.renderer?.remeasureFont?.()}),g1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),g1(()=>{q?.()}),g1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),g1(()=>{G?.refresh?.()})}var nN="/static/js/vendor/ghostty-web.js",rN="/static/js/vendor/ghostty-vt.wasm",b4="piclaw://terminal",dN='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',oN='400 13px "FiraCode Nerd Font Mono"',iN='700 13px "FiraCode Nerd Font Mono"',BG="x-piclaw-terminal-client",LG="piclaw_terminal_client",sN={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},aN={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},p6=null,Y3=null;function tN(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function eN(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(rN,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!tN(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function _B(){let $=await import(new URL(nN,window.location.origin).href);if(!p6)p6=eN(()=>Promise.resolve($.init?.())).catch((j)=>{throw p6=null,j});return await p6,$}async function $B(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!Y3)Y3=Promise.allSettled([document.fonts.load(oN),document.fonts.load(iN),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await Y3}function VG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function q3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(LG)||"").trim():"";if(j)return j;let G=VG(_);return $?.setItem?.(LG,G),G}catch($){return VG(_)}}async function jB(_=q3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[BG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function GB(_=q3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[BG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function ZB(_,$=null,j=q3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function XB(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function t$(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function g4(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function QG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function I5(_,$){let j=QG(_),G=QG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function UG(_){let $=g4(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return I5($,j)>=I5($,G)?"#ffffff":"#000000"}function n6(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function FG(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function a_(_,$,j=4.5){let G=g4(_),Z=g4($);if(!G||!Z)return $;if(I5(G,Z)>=j)return n6(Z);let X=g4(UG(_));if(!X)return n6(Z);let Y=X,q=1,K=0,L=1;for(let F=0;F<14;F+=1){let N=(K+L)/2,H=FG(Z,X,N);if(I5(G,H)>=j)Y=H,q=N,L=N;else K=N}let Q=n6(Y),V=g4(Q);while(V&&I5(G,V)<j&&q<1)q=Math.min(1,q+0.01),Q=n6(FG(Z,X,q)),V=g4(Q);return Q}function YB(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function NG(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=XB(_,$),G=j?aN:sN,Z=t$("--bg-primary",j?"#000000":"#ffffff",$),X=t$("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=a_(Z,X||UG(Z),7),q=t$("--accent-color","#1d9bf0",$),K=t$("--danger-color",j?"#ff7b72":"#cf222e",$),L=t$("--success-color",j?"#7ee787":"#1a7f37",$),Q=t$("--bg-hover",j?"#1d1f23":"#e8ebed",$),V=t$("--accent-soft-strong",YB(q,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:a_(Z,q,3),cursorAccent:Z,selectionBackground:V,selectionForeground:Y,black:a_(Z,Q,3),red:a_(Z,K,4.5),green:a_(Z,L,4.5),yellow:a_(Z,G.yellow,4.5),blue:a_(Z,q,4.5),magenta:a_(Z,G.magenta,4.5),cyan:a_(Z,G.cyan,4.5),white:Y,brightBlack:a_(Z,G.brightBlack,3),brightRed:a_(Z,G.brightRed,4.5),brightGreen:a_(Z,G.brightGreen,4.5),brightYellow:a_(Z,G.brightYellow,4.5),brightBlue:a_(Z,G.brightBlue,4.5),brightMagenta:a_(Z,G.brightMagenta,4.5),brightCyan:a_(Z,G.brightCyan,4.5),brightWhite:Y}}class K3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=u4("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.minHeight="0",$.style.flex="1 1 auto",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none",j.style.maxHeight="none"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await _B();if(await $B(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:dN,fontSize:13,theme:NG(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);await j.open($),$.__terminal=j,this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=NG(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;KG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=GB().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await jB();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(ZB($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){XG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){YG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=qG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var L3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new K3(_,$)}},V3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===b4?1e4:!1},mount(_,$){return new K3(_,$)}};function x1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function r6(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function HG(_,$={}){if(x1($))return null;if(r6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:qB(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function Q3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function F3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let q=_.document.createElement("p");if(q.setAttribute("style","margin: 0; line-height: 1.5;"),q.textContent=G,X.appendChild(Y),X.appendChild(q),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function N3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function B3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function A1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function U3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function EG(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,q]of Object.entries(X)){let K=String(Y||"").trim();if(!K)continue;if(q===null||q===void 0||q==="")G.searchParams.delete(K);else G.searchParams.set(K,String(q))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function qB(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function KB(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function DG(_,$={}){if(x1($))return null;if(r6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:KB(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function v4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function LB(_){try{return JSON.parse(_)}catch{return null}}function VB(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function QB(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function zG(_){try{return _?.close?.(),!0}catch($){return!1}}class H3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;zG(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=QB($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||LB;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,zG(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=VB($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var C5=()=>{throw Error("Operation requires compiling with --exportRuntime")},FB=typeof BigUint64Array<"u",P5=Symbol();var NB=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function OG(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return NB.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function WG(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return OG(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,q,K){let L=$.memory||G.memory;throw Error(`abort: ${j(L,X)} at ${j(L,Y)}:${q}:${K}`)},G.trace=G.trace||function(X,Y,...q){let K=$.memory||G.memory;console.log(`trace: ${j(K,X)}${Y?" ":""}${q.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function JG(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||C5,Y=j.__pin||C5,q=j.__unpin||C5,K=j.__collect||C5,L=j.__rtti_base,Q=L?(D)=>D[L>>>2]:C5;_.__new=X,_.__pin=Y,_.__unpin=q,_.__collect=K;function V(D){let y=new Uint32Array(G.buffer);if((D>>>=0)>=Q(y))throw Error(`invalid id: ${D}`);return y[(L+4>>>2)+D]}function F(D){let y=V(D);if(!(y&7))throw Error(`not an array: ${D}, flags=${y}`);return y}function N(D){return 31-Math.clz32(D>>>6&31)}function H(D){if(D==null)return 0;let y=D.length,I=X(y<<1,2),R=new Uint16Array(G.buffer);for(let S=0,v=I>>>1;S<y;++S)R[v+S]=D.charCodeAt(S);return I}_.__newString=H;function z(D){if(D==null)return 0;let y=new Uint8Array(D),I=X(y.length,1);return new Uint8Array(G.buffer).set(y,I),I}_.__newArrayBuffer=z;function E(D){if(!D)return null;let y=G.buffer;if(new Uint32Array(y)[D+-8>>>2]!==2)throw Error(`not a string: ${D}`);return OG(y,D)}_.__getString=E;function U(D,y,I){let R=G.buffer;if(I)switch(D){case 2:return new Float32Array(R);case 3:return new Float64Array(R)}else switch(D){case 0:return new(y?Int8Array:Uint8Array)(R);case 1:return new(y?Int16Array:Uint16Array)(R);case 2:return new(y?Int32Array:Uint32Array)(R);case 3:return new(y?BigInt64Array:BigUint64Array)(R)}throw Error(`unsupported align: ${D}`)}function k(D,y=0){let I=y,R=F(D),S=N(R),v=typeof I!=="number",c=v?I.length:I,h=X(c<<S,R&4?D:1),$0;if(R&4)$0=h;else{Y(h);let b=X(R&2?16:12,D);q(h);let t=new Uint32Array(G.buffer);if(t[b+0>>>2]=h,t[b+4>>>2]=h,t[b+8>>>2]=c<<S,R&2)t[b+12>>>2]=c;$0=b}if(v){let b=U(S,R&2048,R&4096),t=h>>>S;if(R&16384)for(let s=0;s<c;++s)b[t+s]=I[s];else b.set(I,t)}return $0}_.__newArray=k;function A(D){let y=new Uint32Array(G.buffer),I=y[D+-8>>>2],R=F(I),S=N(R),v=R&4?D:y[D+4>>>2],c=R&2?y[D+12>>>2]:y[v+-4>>>2]>>>S;return U(S,R&2048,R&4096).subarray(v>>>=S,v+c)}_.__getArrayView=A;function O(D){let y=A(D),I=y.length,R=Array(I);for(let S=0;S<I;S++)R[S]=y[S];return R}_.__getArray=O;function T(D){let y=G.buffer,I=new Uint32Array(y)[D+-4>>>2];return y.slice(D,D+I)}_.__getArrayBuffer=T;function x(D){if(!Z)throw Error("Operation requires compiling with --exportTable");let y=new Uint32Array(G.buffer)[D>>>2];return Z.get(y)}_.__getFunction=x;function W(D,y,I){return new D(J(D,y,I))}function J(D,y,I){let R=G.buffer,S=new Uint32Array(R);return new D(R,S[I+4>>>2],S[I+8>>>2]>>>y)}function M(D,y,I){_[`__get${y}`]=W.bind(null,D,I),_[`__get${y}View`]=J.bind(null,D,I)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((D)=>{M(D,D.name,31-Math.clz32(D.BYTES_PER_ELEMENT))}),FB)[BigUint64Array,BigInt64Array].forEach((D)=>{M(D,D.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,UB(j,_)}function AG(_){return typeof Response<"u"&&_ instanceof Response}function BB(_){return _ instanceof WebAssembly.Module}async function E3(_,$={}){if(AG(_=await _))return d6(_,$);let j=BB(_)?_:await WebAssembly.compile(_),G=WG($),Z=await WebAssembly.instantiate(j,$),X=JG(G,Z);return{module:j,instance:Z,exports:X}}async function d6(_,$={}){if(!WebAssembly.instantiateStreaming)return E3(AG(_=await _)?_.arrayBuffer():_,$);let j=WG($),G=await WebAssembly.instantiateStreaming(_,$),Z=JG(j,G.instance);return{...G,exports:Z}}function UB(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let L=X.shift();if(!Object.hasOwn(Y,L))Y[L]={};Y=Y[L]}let q=X[0],K=q.indexOf("#");if(K>=0){let L=q.substring(0,K),Q=Y[L];if(typeof Q>"u"||!Q.prototype){let V=function(...F){return V.wrap(V.prototype.constructor(0,...F))};if(V.prototype={valueOf(){return this[P5]}},V.wrap=function(F){return Object.create(V.prototype,{[P5]:{value:F,writable:!1}})},Q)Object.getOwnPropertyNames(Q).forEach((F)=>Object.defineProperty(V,F,Object.getOwnPropertyDescriptor(Q,F)));Y[L]=V}if(q=q.substring(K+1),Y=Y[L].prototype,/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4))){let V=_[G.replace("set:","get:")],F=_[G.replace("get:","set:")];Object.defineProperty(Y,q,{get(){return V(this[P5])},set(N){F(this[P5],N)},enumerable:!0})}}else if(q==="constructor")(Y[q]=function(...V){return j(V.length),Z(...V)}).original=Z;else(Y[q]=function(...V){return j(V.length),Z(this[P5],...V)}).original=Z}else if(/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4)))Object.defineProperty(Y,q,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[q]=(...L)=>{return j(L.length),Z(...L)}).original=Z;else Y[q]=Z}return $}function D3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var EB="/static/js/vendor/remote-display-decoder.wasm",o6=null;function kG(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function MG(){if(o6)return o6;return o6=(async()=>{try{let G=function(Z,X,Y,q,K,L,Q){let V=kG(X),F=j.__pin(j.__newArrayBuffer(V));try{return j[Z](F,Y,q,K,L,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift)}finally{j.__unpin(F),D3(j)}},_=await fetch(EB,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof d6==="function"?await d6(_,{}):await E3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,q,K,L){return G("processRawRect",Z,X,Y,q,K,L)},processCopyRect(Z,X,Y,q,K,L){return j.processCopyRect(Z,X,Y,q,K,L)},processRreRect(Z,X,Y,q,K,L){return G("processRreRect",Z,X,Y,q,K,L)},processHextileRect(Z,X,Y,q,K,L){return G("processHextileRect",Z,X,Y,q,K,L)},processZrleTileData(Z,X,Y,q,K,L){return G("processZrleTileData",Z,X,Y,q,K,L)},decodeRawRectToRgba(Z,X,Y,q){let K=kG(Z),L=j.__pin(j.__newArrayBuffer(K));try{let Q=j.__pin(j.decodeRawRectToRgba(L,X,Y,q.bitsPerPixel,q.bigEndian?1:0,q.trueColor?1:0,q.redMax,q.greenMax,q.blueMax,q.redShift,q.greenShift,q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(Q))}finally{j.__unpin(Q)}}finally{j.__unpin(L),D3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),o6}function m4(_,$,j){return Math.max($,Math.min(j,_))}function i6(_,$,j){let G=new Uint8Array(6),Z=m4(Math.floor(Number($||0)),0,65535),X=m4(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=m4(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function y$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function O3(_){let $=y$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return y$(0);let G=Number(_?.buttons||0);if(G&1)return y$(0);if(G&4)return y$(1);if(G&2)return y$(2);return 0}function e$(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if(($==="pointerleave"||$==="pointerout")&&$!=="pointerdown")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function yG(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function b1(_){return String(_||"").toLowerCase()==="touch"}function DB(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function W3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return DB(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function TG(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!W3(_)}function wG(_){return String(_||"").toLowerCase()!=="mouse"}function J3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),L=(Number(_||0)-Number(j?.left||0))/q,Q=(Number($||0)-Number(j?.top||0))/K;return{x:m4(Math.floor(L*X),0,Math.max(0,X-1)),y:m4(Math.floor(Q*Y),0,Math.max(0,Y-1))}}function xG(_,$,j,G=0){let Z=Number(_)<0?8:16,X=m4(Number(G||0)|Z,0,255);return[i6(X,$,j),i6(Number(G||0),$,j)]}function IG(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function CG(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function _4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function PG(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),q=Math.max(1,Math.floor(Number(G||0))),K=Math.min(Z/Y,X/q);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var z3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)z3[`F${_}`]=65470+(_-1);function A3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(z3,X))return z3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var h_=Uint8Array,U1=Uint16Array,P3=Int32Array,s6=new h_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),a6=new h_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),w3=new h_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),uG=function(_,$){var j=new U1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new P3(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},gG=uG(s6,2),bG=gG.b,x3=gG.r;bG[28]=258,x3[258]=28;var vG=uG(a6,0),zB=vG.b,RG=vG.r,I3=new U1(32768);for(Q_=0;Q_<32768;++Q_)v1=(Q_&43690)>>1|(Q_&21845)<<1,v1=(v1&52428)>>2|(v1&13107)<<2,v1=(v1&61680)>>4|(v1&3855)<<4,I3[Q_]=((v1&65280)>>8|(v1&255)<<8)>>1;var v1,Q_,m1=function(_,$,j){var G=_.length,Z=0,X=new U1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new U1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var q;if(j){q=new U1(1<<$);var K=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var L=Z<<4|_[Z],Q=$-_[Z],V=Y[_[Z]-1]++<<Q;for(var F=V|(1<<Q)-1;V<=F;++V)q[I3[V]>>K]=L}}else{q=new U1(G);for(Z=0;Z<G;++Z)if(_[Z])q[Z]=I3[Y[_[Z]-1]++]>>15-_[Z]}return q},T$=new h_(288);for(Q_=0;Q_<144;++Q_)T$[Q_]=8;var Q_;for(Q_=144;Q_<256;++Q_)T$[Q_]=9;var Q_;for(Q_=256;Q_<280;++Q_)T$[Q_]=7;var Q_;for(Q_=280;Q_<288;++Q_)T$[Q_]=8;var Q_,u5=new h_(32);for(Q_=0;Q_<32;++Q_)u5[Q_]=5;var Q_,OB=m1(T$,9,0),WB=m1(T$,9,1),JB=m1(u5,5,0),AB=m1(u5,5,1),k3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},I1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},M3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},R3=function(_){return(_+7)/8|0},S5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new h_(_.subarray($,j))};var kB=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],L1=function(_,$,j){var G=Error($||kB[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,L1);if(!j)throw G;return G},MB=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new h_(0);var Y=!j,q=Y||$.i!=2,K=$.i;if(Y)j=new h_(Z*3);var L=function(G0){var x0=j.length;if(G0>x0){var y0=new h_(Math.max(x0*2,G0));y0.set(j),j=y0}},Q=$.f||0,V=$.p||0,F=$.b||0,N=$.l,H=$.d,z=$.m,E=$.n,U=Z*8;do{if(!N){Q=I1(_,V,1);var k=I1(_,V+1,3);if(V+=3,!k){var A=R3(V)+4,O=_[A-4]|_[A-3]<<8,T=A+O;if(T>Z){if(K)L1(0);break}if(q)L(F+O);j.set(_.subarray(A,T),F),$.b=F+=O,$.p=V=T*8,$.f=Q;continue}else if(k==1)N=WB,H=AB,z=9,E=5;else if(k==2){var x=I1(_,V,31)+257,W=I1(_,V+10,15)+4,J=x+I1(_,V+5,31)+1;V+=14;var M=new h_(J),D=new h_(19);for(var y=0;y<W;++y)D[w3[y]]=I1(_,V+y*3,7);V+=W*3;var I=k3(D),R=(1<<I)-1,S=m1(D,I,1);for(var y=0;y<J;){var v=S[I1(_,V,R)];V+=v&15;var A=v>>4;if(A<16)M[y++]=A;else{var c=0,h=0;if(A==16)h=3+I1(_,V,3),V+=2,c=M[y-1];else if(A==17)h=3+I1(_,V,7),V+=3;else if(A==18)h=11+I1(_,V,127),V+=7;while(h--)M[y++]=c}}var $0=M.subarray(0,x),b=M.subarray(x);z=k3($0),E=k3(b),N=m1($0,z,1),H=m1(b,E,1)}else L1(1);if(V>U){if(K)L1(0);break}}if(q)L(F+131072);var t=(1<<z)-1,s=(1<<E)-1,q0=V;for(;;q0=V){var c=N[M3(_,V)&t],X0=c>>4;if(V+=c&15,V>U){if(K)L1(0);break}if(!c)L1(2);if(X0<256)j[F++]=X0;else if(X0==256){q0=V,N=null;break}else{var H0=X0-254;if(X0>264){var y=X0-257,B0=s6[y];H0=I1(_,V,(1<<B0)-1)+bG[y],V+=B0}var K0=H[M3(_,V)&s],D0=K0>>4;if(!K0)L1(3);V+=K0&15;var b=zB[D0];if(D0>3){var B0=a6[D0];b+=M3(_,V)&(1<<B0)-1,V+=B0}if(V>U){if(K)L1(0);break}if(q)L(F+131072);var Q0=F+H0;if(F<b){var k0=X-b,d=Math.min(b,Q0);if(k0+F<0)L1(3);for(;F<d;++F)j[F]=G[k0+F]}for(;F<Q0;++F)j[F]=j[F-b]}}if($.l=N,$.p=q0,$.b=F,$.f=Q,N)Q=1,$.m=z,$.d=H,$.n=E}while(!Q);return F!=j.length&&Y?S5(j,0,F):j.subarray(0,F)},Z$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},R5=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},y3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:cG,l:0};if(Z==1){var Y=new h_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(T,x){return T.f-x.f}),j.push({s:-1,f:25001});var q=j[0],K=j[1],L=0,Q=1,V=2;j[0]={s:-1,f:q.f+K.f,l:q,r:K};while(Q!=Z-1)q=j[j[L].f<j[V].f?L++:V++],K=j[L!=Q&&j[L].f<j[V].f?L++:V++],j[Q++]={s:-1,f:q.f+K.f,l:q,r:K};var F=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>F)F=X[G].s;var N=new U1(F+1),H=C3(j[Q-1],N,0);if(H>$){var G=0,z=0,E=H-$,U=1<<E;X.sort(function(x,W){return N[W.s]-N[x.s]||x.f-W.f});for(;G<Z;++G){var k=X[G].s;if(N[k]>$)z+=U-(1<<H-N[k]),N[k]=$;else break}z>>=E;while(z>0){var A=X[G].s;if(N[A]<$)z-=1<<$-N[A]++-1;else++G}for(;G>=0&&z;--G){var O=X[G].s;if(N[O]==$)--N[O],++z}H=$}return{t:new h_(N),l:H}},C3=function(_,$,j){return _.s==-1?Math.max(C3(_.l,$,j+1),C3(_.r,$,j+1)):$[_.s]=j},fG=function(_){var $=_.length;while($&&!_[--$]);var j=new U1(++$),G=0,Z=_[0],X=1,Y=function(K){j[G++]=K};for(var q=1;q<=$;++q)if(_[q]==Z&&q!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[q]}return{c:j.subarray(0,G),n:$}},f5=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},mG=function(_,$,j){var G=j.length,Z=R3($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},SG=function(_,$,j,G,Z,X,Y,q,K,L,Q){Z$($,Q++,j),++Z[256];var V=y3(Z,15),F=V.t,N=V.l,H=y3(X,15),z=H.t,E=H.l,U=fG(F),k=U.c,A=U.n,O=fG(z),T=O.c,x=O.n,W=new U1(19);for(var J=0;J<k.length;++J)++W[k[J]&31];for(var J=0;J<T.length;++J)++W[T[J]&31];var M=y3(W,7),D=M.t,y=M.l,I=19;for(;I>4&&!D[w3[I-1]];--I);var R=L+5<<3,S=f5(Z,T$)+f5(X,u5)+Y,v=f5(Z,F)+f5(X,z)+Y+14+3*I+f5(W,D)+2*W[16]+3*W[17]+7*W[18];if(K>=0&&R<=S&&R<=v)return mG($,Q,_.subarray(K,K+L));var c,h,$0,b;if(Z$($,Q,1+(v<S)),Q+=2,v<S){c=m1(F,N,0),h=F,$0=m1(z,E,0),b=z;var t=m1(D,y,0);Z$($,Q,A-257),Z$($,Q+5,x-1),Z$($,Q+10,I-4),Q+=14;for(var J=0;J<I;++J)Z$($,Q+3*J,D[w3[J]]);Q+=3*I;var s=[k,T];for(var q0=0;q0<2;++q0){var X0=s[q0];for(var J=0;J<X0.length;++J){var H0=X0[J]&31;if(Z$($,Q,t[H0]),Q+=D[H0],H0>15)Z$($,Q,X0[J]>>5&127),Q+=X0[J]>>12}}}else c=OB,h=T$,$0=JB,b=u5;for(var J=0;J<q;++J){var B0=G[J];if(B0>255){var H0=B0>>18&31;if(R5($,Q,c[H0+257]),Q+=h[H0+257],H0>7)Z$($,Q,B0>>23&31),Q+=s6[H0];var K0=B0&31;if(R5($,Q,$0[K0]),Q+=b[K0],K0>3)R5($,Q,B0>>5&8191),Q+=a6[K0]}else R5($,Q,c[B0]),Q+=h[B0]}return R5($,Q,c[256]),Q+h[256]},yB=new P3([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),cG=new h_(0),TB=function(_,$,j,G,Z,X){var Y=X.z||_.length,q=new h_(G+Y+5*(1+Math.ceil(Y/7000))+Z),K=q.subarray(G,q.length-Z),L=X.l,Q=(X.r||0)&7;if($){if(Q)K[0]=X.r>>3;var V=yB[$-1],F=V>>13,N=V&8191,H=(1<<j)-1,z=X.p||new U1(32768),E=X.h||new U1(H+1),U=Math.ceil(j/3),k=2*U,A=function(C0){return(_[C0]^_[C0+1]<<U^_[C0+2]<<k)&H},O=new P3(25000),T=new U1(288),x=new U1(32),W=0,J=0,M=X.i||0,D=0,y=X.w||0,I=0;for(;M+2<Y;++M){var R=A(M),S=M&32767,v=E[R];if(z[S]=v,E[R]=S,y<=M){var c=Y-M;if((W>7000||D>24576)&&(c>423||!L)){Q=SG(_,K,0,O,T,x,J,D,I,M-I,Q),D=W=J=0,I=M;for(var h=0;h<286;++h)T[h]=0;for(var h=0;h<30;++h)x[h]=0}var $0=2,b=0,t=N,s=S-v&32767;if(c>2&&R==A(M-s)){var q0=Math.min(F,c)-1,X0=Math.min(32767,M),H0=Math.min(258,c);while(s<=X0&&--t&&S!=v){if(_[M+$0]==_[M+$0-s]){var B0=0;for(;B0<H0&&_[M+B0]==_[M+B0-s];++B0);if(B0>$0){if($0=B0,b=s,B0>q0)break;var K0=Math.min(s,B0-2),D0=0;for(var h=0;h<K0;++h){var Q0=M-s+h&32767,k0=z[Q0],d=Q0-k0&32767;if(d>D0)D0=d,v=Q0}}}S=v,v=z[S],s+=S-v&32767}}if(b){O[D++]=268435456|x3[$0]<<18|RG[b];var G0=x3[$0]&31,x0=RG[b]&31;J+=s6[G0]+a6[x0],++T[257+G0],++x[x0],y=M+$0,++W}else O[D++]=_[M],++T[_[M]]}}for(M=Math.max(M,y);M<Y;++M)O[D++]=_[M],++T[_[M]];if(Q=SG(_,K,L,O,T,x,J,D,I,M-I,Q),!L)X.r=Q&7|K[Q/8|0]<<3,Q-=7,X.h=E,X.p=z,X.i=M,X.w=y}else{for(var M=X.w||0;M<Y+L;M+=65535){var y0=M+65535;if(y0>=Y)K[Q/8|0]=L,y0=Y;Q=mG(K,Q+1,_.subarray(M,y0))}X.i=Y}return S5(q,0,G+R3(Q)+Z)};var lG=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var q=Math.min(Y+2655,X);for(;Y<q;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},wB=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new h_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return TB(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var hG=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var xB=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=lG();Z.p($.dictionary),hG(_,2,Z.d())}},IB=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)L1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)L1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var T3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new h_(32768),this.p=new h_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)L1(5);if(this.d)L1(4);if(!this.p.length)this.p=$;else if($.length){var j=new h_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=MB(this.p,this.s,this.o);this.ondata(S5(G,j,this.s.b),this.d),this.o=S5(G,this.s.b-32768),this.s.b=this.o.length,this.p=S5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function pG(_,$){if(!$)$={};var j=lG();j.p(_);var G=wB(_,$,$.dictionary?6:2,4);return xB(G,$),hG(G,G.length-4,j.d()),G}var nG=function(){function _($,j){T3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(T3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(IB(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)L1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}T3.prototype.c.call(this,j)},_}();var CB=typeof TextDecoder<"u"&&new TextDecoder,PB=0;try{CB.decode(cG,{stream:!0}),PB=1}catch(_){}var RB=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],fB=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],SB=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],uB=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],gB=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],bB=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],vB=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],mB=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],oG=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;oG[_]=$}function iG(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function sG(_){let $=0n,j=iG(_);for(let G of j)$=$<<8n|BigInt(G);return $}function cB(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function c4(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function rG(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function lB(_){let $=c4(sG(_),gB,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of vB){j=rG(j,X),G=rG(G,X);let Y=j<<28n|G;Z.push(c4(Y,bB,56))}return Z}function hB(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(mB[j][X][Y])}return $}function pB(_,$){let j=c4(_,SB,32)^BigInt($),G=hB(j);return c4(G,uB,32)}function dG(_,$){let j=lB($),G=c4(sG(_),RB,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let q of j){let K=X,L=(Z^pB(X,q))&0xffffffffn;Z=K,X=L}let Y=X<<32n|Z;return cB(c4(Y,fB,64),8)}function nB(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=oG[Z]}return j}function aG(_,$){let j=iG($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=nB(_),Z=new Uint8Array(16);return Z.set(dG(j.slice(0,8),G),0),Z.set(dG(j.slice(8,16),G),8),Z}var C1="vnc";function rB(_){return Number(_)}function dB(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=rB(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function p4(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function oB(_,$){let j=p4(_),G=p4($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function iB(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=p4(Z);j.set(X,G),G+=X.byteLength}return j}function sB(){return(_)=>{let $=p4(_);try{let j=[],G=new nG((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return iB(j)}catch(j){try{let G=pG($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function aB(_){return new TextEncoder().encode(String(_||""))}function l4(_){return new TextDecoder().decode(p4(_))}function tB(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function eB(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function tG(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function _U(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function $U(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function eG(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function h4(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function $Z(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function jU(_,$,j,G){let Z=G||n4,X=p4(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),q=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<q)throw Error(`Incomplete raw rectangle payload: expected ${q} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),L=0,Q=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let F=$Z(X,L,Y,Z.bigEndian),N=h4(F>>>Z.redShift&Z.redMax,Z.redMax),H=h4(F>>>Z.greenShift&Z.greenMax,Z.greenMax),z=h4(F>>>Z.blueShift&Z.blueMax,Z.blueMax);K[Q]=N,K[Q+1]=H,K[Q+2]=z,K[Q+3]=255,L+=Y,Q+=4}return K}function X$(_,$,j){let G=j||n4,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=$Z(_,$,Z,G.bigEndian);return{rgba:[h4(X>>>G.redShift&G.redMax,G.redMax),h4(X>>>G.greenShift&G.greenMax,G.greenMax),h4(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function w$(_,$,j,G,Z,X,Y){if(!Y)return;for(let q=0;q<X;q+=1)for(let K=0;K<Z;K+=1){let L=((G+q)*$+(j+K))*4;_[L]=Y[0],_[L+1]=Y[1],_[L+2]=Y[2],_[L+3]=Y[3]}}function jZ(_,$,j,G,Z,X,Y){for(let q=0;q<X;q+=1){let K=q*Z*4,L=((G+q)*$+j)*4;_.set(Y.subarray(K,K+Z*4),L)}}function _Z(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function GU(_,$,j,G,Z,X,Y){let q=Z||n4,K=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let L=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+L)return null;let Q=_.slice($+4,$+4+L),V;try{V=Y(Q)}catch{return{consumed:4+L,skipped:!0}}let F=0,N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let H=0;H<G;H+=64){let z=Math.min(64,G-H);for(let E=0;E<j;E+=64){let U=Math.min(64,j-E);if(V.byteLength<F+1)return null;let k=V[F++],A=k&127,O=(k&128)!==0;if(!O&&A===0){let T=U*z*K;if(V.byteLength<F+T)return null;let x=X(V.slice(F,F+T),U,z,q);F+=T,jZ(N,j,E,H,U,z,x);continue}if(!O&&A===1){let T=X$(V,F,q);if(!T)return null;F+=T.bytesPerPixel,w$(N,j,E,H,U,z,T.rgba);continue}if(!O&&A>1&&A<=16){let T=[];for(let M=0;M<A;M+=1){let D=X$(V,F,q);if(!D)return null;F+=D.bytesPerPixel,T.push(D.rgba)}let x=A<=2?1:A<=4?2:4,W=Math.ceil(U*x/8),J=W*z;if(V.byteLength<F+J)return null;for(let M=0;M<z;M+=1){let D=F+M*W;for(let y=0;y<U;y+=1){let I=y*x,R=D+(I>>3),S=8-x-(I&7),v=V[R]>>S&(1<<x)-1;w$(N,j,E+y,H+M,1,1,T[v])}}F+=J;continue}if(O&&A===0){let T=0,x=0;while(x<z){let W=X$(V,F,q);if(!W)return null;F+=W.bytesPerPixel;let J=_Z(V,F);if(!J)return null;F+=J.consumed;for(let M=0;M<J.runLength;M+=1)if(w$(N,j,E+T,H+x,1,1,W.rgba),T+=1,T>=U){if(T=0,x+=1,x>=z)break}}continue}if(O&&A>0){let T=[];for(let J=0;J<A;J+=1){let M=X$(V,F,q);if(!M)return null;F+=M.bytesPerPixel,T.push(M.rgba)}let x=0,W=0;while(W<z){if(V.byteLength<F+1)return null;let J=V[F++],M=J,D=1;if(J&128){M=J&127;let I=_Z(V,F);if(!I)return null;F+=I.consumed,D=I.runLength}let y=T[M];if(!y)return null;for(let I=0;I<D;I+=1)if(w$(N,j,E+x,H+W,1,1,y),x+=1,x>=U){if(x=0,W+=1,W>=z)break}}continue}return{consumed:4+L,skipped:!0}}}return{consumed:4+L,rgba:N,decompressed:V}}function ZU(_,$,j,G,Z){let X=Z||n4,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),L=4+Y+K*(Y+8);if(_.byteLength<$+L)return null;let Q=$+4,V=X$(_,Q,X);if(!V)return null;Q+=V.bytesPerPixel;let F=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);w$(F,j,0,0,j,G,V.rgba);for(let N=0;N<K;N+=1){let H=X$(_,Q,X);if(!H)return null;if(Q+=H.bytesPerPixel,_.byteLength<Q+8)return null;let z=new DataView(_.buffer,_.byteOffset+Q,8),E=z.getUint16(0,!1),U=z.getUint16(2,!1),k=z.getUint16(4,!1),A=z.getUint16(6,!1);Q+=8,w$(F,j,E,U,k,A,H.rgba)}return{consumed:Q-$,rgba:F}}function XU(_,$,j,G,Z,X){let Y=Z||n4,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),L=$,Q=[0,0,0,255],V=[255,255,255,255];for(let F=0;F<G;F+=16){let N=Math.min(16,G-F);for(let H=0;H<j;H+=16){let z=Math.min(16,j-H);if(_.byteLength<L+1)return null;let E=_[L++];if(E&1){let U=z*N*q;if(_.byteLength<L+U)return null;let k=X(_.slice(L,L+U),z,N,Y);L+=U,jZ(K,j,H,F,z,N,k);continue}if(E&2){let U=X$(_,L,Y);if(!U)return null;Q=U.rgba,L+=U.bytesPerPixel}if(w$(K,j,H,F,z,N,Q),E&4){let U=X$(_,L,Y);if(!U)return null;V=U.rgba,L+=U.bytesPerPixel}if(E&8){if(_.byteLength<L+1)return null;let U=_[L++];for(let k=0;k<U;k+=1){let A=V;if(E&16){let D=X$(_,L,Y);if(!D)return null;A=D.rgba,L+=D.bytesPerPixel}if(_.byteLength<L+2)return null;let O=_[L++],T=_[L++],x=O>>4,W=O&15,J=(T>>4)+1,M=(T&15)+1;w$(K,j,H+x,F+W,J,M,A)}}}}return{consumed:L-$,rgba:K}}var n4={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class t6{protocol=C1;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:jU,this.pipeline=_.pipeline||null,this.encodings=dB(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...n4},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:sB()}receive(_){if(_)this.buffer=oB(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=l4(Z),Y=tB(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=eB(Y),j.push(aB(this.clientVersionText)),$.push({type:"protocol-version",protocol:C1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let L=l4(this.consume(4+K).slice(4));throw Error(L||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:C1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:C1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+q)break;let K=l4(this.consume(4+q).slice(4));throw Error(K||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:C1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:C1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(aG(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let q=l4(this.consume(4+Y).slice(4));throw Error(q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:C1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),q=tG(Z,4),K=Z.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let L=this.consume(24),Q=new DataView(L.buffer,L.byteOffset,L.byteLength);if(this.framebufferWidth=Q.getUint16(0,!1),this.framebufferHeight=Q.getUint16(2,!1),this.serverPixelFormat=tG(Q,4),this.serverName=l4(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(_U(this.clientPixelFormat)),j.push($U(this.encodings)),j.push(eG(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:C1,width:X,height:Y,name:this.serverName,pixelFormat:q}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),q=4,K=[],L=!1,Q=!!this.pipeline;for(let F=0;F<Y;F+=1){if(this.buffer.byteLength<q+12){L=!0;break}let N=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,12),H=N.getUint16(0,!1),z=N.getUint16(2,!1),E=N.getUint16(4,!1),U=N.getUint16(6,!1),k=N.getInt32(8,!1);if(q+=12,k===0){let A=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),O=E*U*A;if(this.buffer.byteLength<q+O){L=!0;break}let T=this.buffer.slice(q,q+O);if(q+=O,Q)this.pipeline.processRawRect(T,H,z,E,U,this.clientPixelFormat),K.push({kind:"pipeline",x:H,y:z,width:E,height:U});else K.push({kind:"rgba",x:H,y:z,width:E,height:U,rgba:this.decodeRawRect(T,E,U,this.clientPixelFormat)});continue}if(k===2){let A=ZU(this.buffer,q,E,U,this.clientPixelFormat);if(!A){L=!0;break}if(Q){let O=this.buffer.slice(q,q+A.consumed);this.pipeline.processRreRect(O,H,z,E,U,this.clientPixelFormat),K.push({kind:"pipeline",x:H,y:z,width:E,height:U})}else K.push({kind:"rgba",x:H,y:z,width:E,height:U,rgba:A.rgba});q+=A.consumed;continue}if(k===1){if(this.buffer.byteLength<q+4){L=!0;break}let A=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,4),O=A.getUint16(0,!1),T=A.getUint16(2,!1);if(q+=4,Q)this.pipeline.processCopyRect(H,z,E,U,O,T),K.push({kind:"pipeline",x:H,y:z,width:E,height:U});else K.push({kind:"copy",x:H,y:z,width:E,height:U,srcX:O,srcY:T});continue}if(k===16){let A=GU(this.buffer,q,E,U,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!A){L=!0;break}if(q+=A.consumed,A.skipped)continue;if(Q&&A.decompressed)this.pipeline.processZrleTileData(A.decompressed,H,z,E,U,this.clientPixelFormat),K.push({kind:"pipeline",x:H,y:z,width:E,height:U});else K.push({kind:"rgba",x:H,y:z,width:E,height:U,rgba:A.rgba});continue}if(k===5){let A=XU(this.buffer,q,E,U,this.clientPixelFormat,this.decodeRawRect);if(!A){L=!0;break}if(Q){let O=this.buffer.slice(q,q+A.consumed);this.pipeline.processHextileRect(O,H,z,E,U,this.clientPixelFormat),K.push({kind:"pipeline",x:H,y:z,width:E,height:U})}else K.push({kind:"rgba",x:H,y:z,width:E,height:U,rgba:A.rgba});q+=A.consumed;continue}if(k===-223){if(this.framebufferWidth=E,this.framebufferHeight=U,Q)this.pipeline.initFramebuffer(E,U);K.push({kind:"resize",x:H,y:z,width:E,height:U});continue}throw Error(`Unsupported VNC rectangle encoding ${k}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(L)break;this.consume(q);let V={type:"framebuffer-update",protocol:C1,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(Q)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(eG(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:C1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let q=l4(this.consume(Y));$.push({type:"clipboard",protocol:C1,text:q}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var l1="piclaw://vnc";function XZ(_){let $=String(_||"").trim();return $?`${l1}/${encodeURIComponent($)}`:l1}var f3="piclaw:vnc-popout:",YU=60000;function YZ(_=globalThis){try{return _?.localStorage??null}catch{return null}}function qU(_=globalThis){let $=aj(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function qZ(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith(f3))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{l6(_,G)}}function KU(_,$=globalThis,j=Date.now()){let G=_4(_);if(G===null)return null;let Z=YZ($);if(!Z)return null;qZ(Z,j);let X=qU($);try{return Z.setItem(`${f3}${X}`,JSON.stringify({password:G,expiresAt:j+YU})),X}catch{return null}}function LU(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=YZ($);if(!Z)return null;qZ(Z,j);let X=`${f3}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let q=JSON.parse(Y),K=Number(q?.expiresAt||0);if(!Number.isFinite(K)||K<=j)return null;return _4(q?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function VU(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:XZ(G)},X=KU($,j);if(X)Z.vnc_secret=X;return Z}function QU(_){let $=String(_||"");if($===l1)return null;if(!$.startsWith(`${l1}/`))return null;let j=$.slice(`${l1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function c1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function FU(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function NU(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function BU(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function UU(_){return String(_||"").trim()||"localhost"}function HU(_,$){let j=UU(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function EU(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function GZ(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function ZZ(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function DU(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class KZ{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=QU($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=GZ("vnc_handoff");let j=GZ("vnc_secret"),G=LU(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=EU({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
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
                                    <div style="font-weight:600;margin-bottom:6px;">${c1(X.label||X.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${c1(X.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${X.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${c1(X.id)}" data-target-label="${c1(X.label||X.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:24px 20px;border:1px dashed var(--border-color);border-radius:10px;background:transparent;font-size:13px;color:var(--text-secondary);line-height:1.5;display:grid;gap:6px;">
                            <div style="font-weight:600;color:var(--text-primary);">${c1(G.title)}</div>
                            <div>${c1(G.body)}</div>
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=HU(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=_4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),q=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=NU();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:6px;">
                    <div data-vnc-session-chrome style="padding:6px 8px;border:1px solid var(--border-color);border-radius:8px;background:transparent;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                        <div data-display-info style="min-width:0;flex:1 1 240px;font-size:12px;color:var(--text-secondary);line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <input type="password" data-vnc-password placeholder="Password" autocomplete="current-password" style="width:150px;max-width:100%;padding:6px 8px;border:1px solid var(--border-color);border-radius:6px;background:transparent;color:inherit;" />
                        <button type="button" data-vnc-reconnect="1" style="padding:6px 10px;border:1px solid var(--border-color);border-radius:6px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:8px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:4px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:2px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.5;">
                            <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${c1(j)}</div>
                            <div style="font-size:12px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `:`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                    <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:10px;">
                        <div style="display:grid;gap:4px;min-width:0;">
                            <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c1($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
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
                            <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${c1(j)}</div>
                            <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=_4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=_4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=PG($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return J3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(i6(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,q=new Map,K=new Set,L=!1,Q=(W)=>this.getFramebufferPointFromEvent(W)||X.get(W?.pointerId)||{x:0,y:0},V=(W)=>{if(!W||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let J=this.canvas.getBoundingClientRect?.();if(!J||!J.width||!J.height)return null;return J3(W.clientX,W.clientY,J,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},F=(W)=>{let J=Y.get(W);if(J)G.clearTimeout(J),Y.delete(W)},N=(W)=>{let J=q.get(W);if(J?.holdTimer)G.clearTimeout(J.holdTimer);q.delete(W)},H=()=>{for(let W of q.keys())N(W)},z=()=>{if(!K.size)L=!1},E=(W,J=80)=>{let M=String(W?.pointerType||"").toLowerCase();if(!wG(M))return;let D=Number(W?.pointerId);if(!Number.isFinite(D))return;F(D);let y=G.setTimeout(()=>{if(Y.delete(D),!Z.has(D)&&!this.pointerButtonMask)return;k({pointerId:D,pointerType:M,type:"pointercancel",clientX:W?.clientX,clientY:W?.clientY},{resetAll:!0})},J);Y.set(D,y)},U=(W=null)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;for(let M of Y.keys())F(M);H(),K.clear(),L=!1;let J=W||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,J.x,J.y)},k=(W,J={})=>{if(J.resetAll){let R=Number(W?.pointerId);F(R),U(Q(W));try{this.canvas?.releasePointerCapture?.(R)}catch{}return}let M=Q(W),D=Number(W?.pointerId);F(D),N(D),K.delete(D),z();let y=Z.has(D),I=Z.get(D)??O3(W);if(!y&&!I&&!this.pointerButtonMask)return;if(Z.delete(D),X.delete(D),I)this.pointerButtonMask&=~I;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,M.x,M.y);try{this.canvas?.releasePointerCapture?.(D)}catch{}},A=(W)=>{if(L)return;let J=q.get(W);if(!J||J.dragActivated)return;J.dragActivated=!0,J.holdTimer=null;let M=y$(0);if(!M)return;Z.set(W,(Z.get(W)??0)|M),this.pointerButtonMask|=M,E({pointerId:W,pointerType:"touch",clientX:J.lastClientX,clientY:J.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,J.lastPoint.x,J.lastPoint.y)},O=(W,J,M={})=>{let D=q.get(W);if(!D)return!1;let y=J||D.lastPoint||{x:0,y:0},I=Number.isFinite(M.clientX)?Number(M.clientX):D.lastClientX,R=Number.isFinite(M.clientY)?Number(M.clientY):D.lastClientY;if(K.delete(W),M.cancelled||L){if(N(W),z(),Z.has(W)||this.pointerButtonMask)U(y);return!0}if(D.dragActivated||Z.has(W))return k({pointerId:W,pointerType:"touch",type:"pointerup",clientX:I,clientY:R}),z(),!0;let S=Date.now()-D.startedAt,v=TG({startX:D.startClientX,startY:D.startClientY,clientX:I,clientY:R,elapsedMs:S});if(F(W),N(W),X.delete(W),z(),v){let c=y$(0);this.sendPointerEvent(c,y.x,y.y),this.sendPointerEvent(0,y.x,y.y)}else this.sendPointerEvent(this.pointerButtonMask,y.x,y.y);return!0};this.canvas.addEventListener("contextmenu",(W)=>{W.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(W)=>{let J=this.getFramebufferPointFromEvent(W);if(!J)return;let M=String(W?.pointerType||"").toLowerCase(),D=b1(M);if(X.set(W.pointerId,J),D){let y=q.get(W.pointerId);if(y){if(y.lastClientX=Number(W?.clientX||0),y.lastClientY=Number(W?.clientY||0),y.lastPoint=J,!y.dragActivated&&W3({startX:y.startClientX,startY:y.startClientY,clientX:y.lastClientX,clientY:y.lastClientY}))N(W.pointerId),q.set(W.pointerId,{...y,holdTimer:null,dragActivated:!1});if(!y.dragActivated){this.sendPointerEvent(this.pointerButtonMask,J.x,J.y);return}}if(L)return}if(Z.has(W.pointerId)&&e$(W)){k(W,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(W.pointerId)&&e$(W)){U(J);return}if(Z.has(W.pointerId))E(W);this.sendPointerEvent(this.pointerButtonMask,J.x,J.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(W)=>{let J=this.getFramebufferPointFromEvent(W);if(!J)return;let M=String(W?.pointerType||"").toLowerCase(),D=b1(M);if(W.preventDefault(),this.canvas?.focus?.(),X.set(W.pointerId,J),D){if(K.add(W.pointerId),K.size>1){let R=[...K];L=!0,U(J);for(let S of R)K.add(S);L=!0;return}N(W.pointerId);let I={startClientX:Number(W?.clientX||0),startClientY:Number(W?.clientY||0),lastClientX:Number(W?.clientX||0),lastClientY:Number(W?.clientY||0),startedAt:Date.now(),lastPoint:J,holdTimer:null,dragActivated:!1};I.holdTimer=G.setTimeout(()=>{A(W.pointerId)},260),q.set(W.pointerId,I),this.sendPointerEvent(this.pointerButtonMask,J.x,J.y);return}if(M==="mouse")try{this.canvas?.setPointerCapture?.(W.pointerId)}catch{}let y=O3(W);if(!y)return;Z.set(W.pointerId,(Z.get(W.pointerId)??0)|y),this.pointerButtonMask|=y,E(W),this.sendPointerEvent(this.pointerButtonMask,J.x,J.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(W)=>{if(W.preventDefault(),b1(W?.pointerType)){let J=Q(W);if(O(W.pointerId,J,{clientX:W?.clientX,clientY:W?.clientY}))return}k(W)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(W)=>{if(W.preventDefault(),b1(W?.pointerType)){let J=Q(W);if(O(W.pointerId,J,{clientX:W?.clientX,clientY:W?.clientY,cancelled:!0}))return}k(W,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(W)=>{if(q.has(W.pointerId)&&b1(W?.pointerType)){O(W.pointerId,Q(W),{clientX:W?.clientX,clientY:W?.clientY,cancelled:!0});return}if(!Z.has(W.pointerId))return;if(!e$(W))return;k(W,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(W)=>{if(q.has(W.pointerId)&&b1(W?.pointerType)){O(W.pointerId,Q(W),{clientX:W?.clientX,clientY:W?.clientY,cancelled:!0});return}if(!Z.has(W.pointerId))return;if(!e$(W))return;k(W,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(W)=>{k(W,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(W)=>{if(!Z.size&&!this.pointerButtonMask||!e$(W))return;if(!Z.has(W.pointerId)&&!this.pointerButtonMask)return;k(W,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(W)=>{if(!Z.has(W.pointerId)&&!this.pointerButtonMask&&!q.has(W.pointerId))return;if(W.preventDefault?.(),b1(W?.pointerType)){let J=Q(W);if(O(W.pointerId,J,{clientX:W?.clientX,clientY:W?.clientY}))return}k(W,{resetAll:!Z.has(W.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(W)=>{if(!Z.has(W.pointerId)&&!this.pointerButtonMask&&!q.has(W.pointerId))return;if(W.preventDefault?.(),b1(W?.pointerType)){let J=Q(W);if(O(W.pointerId,J,{clientX:W?.clientX,clientY:W?.clientY,cancelled:!0}))return}k(W,{resetAll:!0})},{signal:$,passive:!1});let T=(W)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;if(!yG(W))return;let J=W?.changedTouches?.[0]||W?.touches?.[0]||null,M=V(J)||X.values().next().value||q.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&q.size===1){let[D]=q.entries().next().value||[];if(Number.isFinite(D)){O(D,M,{clientX:J?.clientX,clientY:J?.clientY,cancelled:W?.type==="touchcancel"});return}}U(M)},x=(W,J={})=>{if(!Z.size&&!this.pointerButtonMask&&!q.has(W?.pointerId))return;if(!e$(W))return;if(W?.preventDefault?.(),b1(W?.pointerType)){let M=Q(W);if(O(W.pointerId,M,{clientX:W?.clientX,clientY:W?.clientY,cancelled:J.resetAll===!0}))return}k(W,{resetAll:J.resetAll===!0||!Z.has(W?.pointerId)})};this.canvas.addEventListener("touchend",T,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",T,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",T,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",T,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",T,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",T,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(W)=>{x(W)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(W)=>{x(W,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;U()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;U()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")U()},{signal:$}),this.canvas.addEventListener("wheel",(W)=>{let J=this.getFramebufferPointFromEvent(W);if(!J)return;W.preventDefault();for(let M of xG(W.deltaY,J.x,J.y,this.pointerButtonMask))this.socketBoundary?.send?.(M)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(IG(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=A3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(CG(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??A3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new t6);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await MG(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(q,K,L,Q)=>G.decodeRawRectToRgba(q,K,L,Q);let X=_4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new t6(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new H3({url:BU(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(q)=>{this.applyMetrics(q)},onMessage:(q)=>{this.handleSocketMessage(q)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(ZZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),ZZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await FU(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${c1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!DU(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return VU(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var S3={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===l1||$.startsWith(`${l1}/`)?9000:!1},mount(_,$){return new KZ(_,$)}};import{classHighlighter as zU,highlightTree as OU,StreamLanguage as r4,cssLanguage as WU,cppLanguage as JU,goLanguage as AU,htmlLanguage as kU,javascriptLanguage as MU,jsxLanguage as yU,tsxLanguage as TU,typescriptLanguage as wU,jsonLanguage as xU,markdownLanguage as IU,pythonLanguage as CU,rustLanguage as PU,StandardSQL as RU,xmlLanguage as fU,yamlLanguage as SU,dockerFile as uU,powerShell as gU,ruby as bU,shell as vU,swift as mU,toml as cU}from"#editor-vendor/codemirror";function $4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var lU={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},hU=r4.define(vU).parser,pU=r4.define(gU).parser,nU=r4.define(uU).parser,rU=r4.define(bU).parser,dU=r4.define(mU).parser,oU=r4.define(cU).parser;function LZ(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return lU[$]||String(_||"").trim()}function iU(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return MU.parser;case"ts":case"typescript":return wU.parser;case"jsx":return yU.parser;case"tsx":return TU.parser;case"py":case"python":return CU.parser;case"json":return xU.parser;case"css":return WU.parser;case"html":return kU.parser;case"xml":return fU.parser;case"yaml":case"yml":return SU.parser;case"md":case"markdown":return IU.parser;case"sql":return RU.language.parser;case"go":return AU.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return JU.parser;case"sh":case"bash":case"shell":case"zsh":return hU;case"ps1":case"powershell":return pU;case"dockerfile":return nU;case"rb":case"ruby":return rU;case"rs":case"rust":return PU.parser;case"swift":return dU;case"toml":return oU;default:return null}}function e6(_,$){let j=iU($);if(!j)return $4(_);let G=[];try{let Y=j.parse(_);OU(Y,zU,(q,K,L)=>{if(!L||q>=K)return;G.push({from:q,to:K,cls:L})})}catch{return $4(_)}if(!G.length)return $4(_);G.sort((Y,q)=>Y.from-q.from||Y.to-q.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=$4(_.slice(Z,Y.from));X+=`<span class="${$4(Y.cls)}">${$4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=$4(_.slice(Z));return X}g5();var Z2=/#(\w+)/g,KH=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),LH=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),VH=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),zZ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},QH=new Set(["http:","https:","mailto:",""]);function FH(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(zZ[j]||new Set).has(G)||VH.has(G)}function p3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function X4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!QH.has(G.protocol))return null;return G.href}catch{return null}}function OZ(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let q=Y.tagName.toLowerCase();if(!LH.has(q)){let L=Y.parentNode;if(!L)continue;while(Y.firstChild)L.insertBefore(Y.firstChild,Y);L.removeChild(Y);continue}let K=zZ[q]||new Set;for(let L of Array.from(Y.attributes)){let Q=L.name.toLowerCase(),V=L.value;if(Q.startsWith("on")){Y.removeAttribute(L.name);continue}if(FH(q,Q)){if(Q==="href"){let F=X4(V);if(!F)Y.removeAttribute(L.name);else if(Y.setAttribute(L.name,F),q==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(F))Y.setAttribute("target","_blank")}}else if(Q==="src"){let F=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,N=X4(F,{allowDataImage:q==="img"});if(!N)Y.removeAttribute(L.name);else Y.setAttribute(L.name,N)}continue}Y.removeAttribute(L.name)}}return j.body.innerHTML}function WZ(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function b5(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=WZ(j);if(Z===j)break;j=Z}return j}function NH(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function BH(_){let{text:$,frontmatter:j}=NH(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function UH(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let q of j){if(!X&&q.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&q.trim().match(/^```\s*$/)){let K=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${K}@@`),X=!1,Y=[];continue}if(X)Y.push(q);else Z.push(q)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function HH(_){if(!_)return _;return b5(_,5)}function EH(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function DH(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function zH(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=HH(X);return`<div class="mermaid-container" data-mermaid="${EH(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function JZ(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function OH(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=b5(Z,2),q=X||"plaintext",K=e6(Y,X);return`<pre><code class="hljs language-${p3(q)}">${K}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var WH={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function JH(_,$){let j=WH[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let q=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${p3(q)}"`)}return G.join("")}function AZ(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,q=X.endsWith("/")?X.slice(0,-1).trim():X,[K=""]=q.split(/\s+/,1),L=K.toLowerCase();if(!L||!KH.has(L))return $;if(L==="br")return Z?"":"<br>";if(Z)return`</${L}>`;let Q=q.slice(K.length).trim(),V=JH(L,Q);return`<${L}${V}>`})}function kZ(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function MZ(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function AH(_){if(!window.katex)return _;let $=(Y)=>WZ(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let q=[],K=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(L)=>{let Q=q.length;return q.push(L),`@@CODE_BLOCK_${Q}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(L)=>{let Q=q.length;return q.push(L),`@@CODE_INLINE_${Q}@@`}),{html:K,blocks:q}},G=(Y,q)=>{if(!q.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,L)=>{let Q=Number(L);return q[Q]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,q,K)=>{try{let L=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${q}${L}`}catch(L){return`<span class="math-error" title="${p3(L.message)}">${Y}</span>`}}),G(X,Z.blocks)}function kH(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(Z2.lastIndex=0,!Z2.test(Y))continue;Z2.lastIndex=0;let q=X.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let K=Y.split(Z2);if(K.length<=1)continue;let L=$.createDocumentFragment();K.forEach((Q,V)=>{if(V%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",Q),F.textContent=`#${Q}`,L.appendChild(F)}else L.appendChild($.createTextNode(Q))}),X.parentNode?.replaceChild(L,X)}return $.body.innerHTML}function MH(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function yH(_){let $=BH(_||""),j=MH($),{text:G,blocks:Z}=UH(j),X=b5(G,2),q=JZ(X).replace(/</g,"&lt;");return{safeHtml:AZ(q),mermaidBlocks:Z}}function t_(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=yH(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=kZ(X),X=MZ(X),X=OH(X),X=AH(X),X=kH(X),X=zH(X,Z),X=OZ(X,j),X}function v5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=b5($,2),Z=JZ(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=AZ(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=kZ(Y),Y=MZ(Y),Y=OZ(Y),Y}function yZ(_){if(!_)return"";return String(_).replace(/\r\n/g,`
`).replace(/\r/g,`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\n/g,"<br>")}function TH(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((K)=>{let[L,Q]=K.split(",").map(Number);return{x:L,y:Q}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let q=[`M ${Y[0].x},${Y[0].y}`];for(let K=1;K<Y.length-1;K++){let L=Y[K-1],Q=Y[K],V=Y[K+1],F=Q.x-L.x,N=Q.y-L.y,H=V.x-Q.x,z=V.y-Q.y,E=Math.sqrt(F*F+N*N),U=Math.sqrt(H*H+z*z),k=Math.min($,E/2,U/2);if(k<0.5){q.push(`L ${Q.x},${Q.y}`);continue}let A=Q.x-F/E*k,O=Q.y-N/E*k,T=Q.x+H/U*k,x=Q.y+z/U*k,J=F*z-N*H>0?1:0;q.push(`L ${A},${O}`),q.push(`A ${k},${k} 0 0 ${J} ${T},${x}`)}return q.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${q.join(" ")}"${X}/>`})}async function L$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=DZ()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let q=Y.dataset.mermaid,K=DH(q||""),L=b5(K,2),Q=await $(L,{...Z,transparent:!0});Q=TH(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${q.message}`,Y.innerHTML="",Y.appendChild(K),Y.removeAttribute("data-mermaid")}}g_();function uZ(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date-$,Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let K=$.toLocaleDateString(void 0,{weekday:"short"}),L=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${L}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${q}`}function s5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function i_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function Q4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function I$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function FE(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),L=Z.startsWith("/")?Z:`${q?`${q}/`:""}${Z}`,Q=[];for(let F of L.split("/")){if(!F||F===".")continue;if(F===".."){if(Q.length>0)Q.pop();continue}Q.push(F)}let V=Q.join("/");return`${o5(V)}${X}${Y}`}function a5(_){return _?.preview||null}function NE(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function BE(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function UE(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${I$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${I$(i_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${I$(Q4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${I$(BE($))}</span>`),G.push(`<span><strong>extension:</strong> ${I$(NE(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${I$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function HE(_){let $=a5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=UE(_,$);if($.kind==="image"){let G=$.url||($.path?o5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${I$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=t_($.text||"",null,{rewriteImageSrc:(Z)=>FE(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${I$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class E7{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=HE(this.context)}getContent(){let _=a5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=a5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var D7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=a5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new E7(_,$)}},z7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return a5(_)||_?.path?1:!1},mount(_,$){return new E7(_,$)}};var EE=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),DE={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},zE={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function bZ(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function gZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class vZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=bZ(j),X=zE[Z]||"\uD83D\uDCC4",Y=DE[Z]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${gZ(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${gZ(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let K=q.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let L=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class mZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var O7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=bZ(_?.path);if(!$||!EE.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new vZ(_,$);return new mZ(_,$)}};var OE=/\.(csv|tsv)$/i;function cZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class lZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
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
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class hZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var W7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!OE.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new lZ(_,$);return new hZ(_,$)}};var WE=/\.pdf$/i;function JE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class pZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${JE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class nZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var J7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!WE.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new pZ(_,$);return new nZ(_,$)}};var AE=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function A7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class rZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${A7(Z)}" alt="${A7(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${A7(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class dZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k7={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!AE.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new rZ(_,$);return new dZ(_,$)}};var kE=/\.(html|htm)$/i;function oZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class iZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${oZ(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${oZ(j)}</div>
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
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class sZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var M7={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!kE.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new iZ(_,$);return new sZ(_,$)}};var ME=/\.(mp4|m4v|mov|webm|ogv)$/i;function yE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class aZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${yE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class tZ{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y7={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ME.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new aZ(_,$);return new tZ(_,$)}};g_();function TE(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function eZ(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:q,pollMs:K=3000,ownerDocument:L=document}=_,Q=null,V=null,F=!1,N=!1,H=!1;async function z(){if(N||H||F)return;let O=j();if(!O)return;try{let T=await F7($);if(N||H||!T?.mtime)return;if(T.mtime!==O)F=!0,U(),k()}catch(T){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",T)}}function E(){if(U(),N)return;Q=setInterval(z,K)}function U(){if(Q)clearInterval(Q),Q=null}function k(){if(V||N)return;let O=L.createElement("div");O.className="editor-conflict-bar",O.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,O.addEventListener("click",(T)=>{let x=T.target.closest("[data-action]");if(!x)return;let W=x.getAttribute("data-action");if(W==="reload")A(),X();else if(W==="save-copy"){let J=TE($);Y(J)}else if(W==="overwrite")A(),q();else if(W==="dismiss")A()}),V=O,G.insertBefore(O,Z)}function A(){if(V)V.remove(),V=null;F=!1,E()}return{start(){E()},stop(){U()},onSaved(O){F=!1,H=!1,E()},dispose(){if(N=!0,U(),V)V.remove(),V=null}}}var wE=/\.mindmap\.ya?ml$/i,U2=String(Date.now());function xE(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function _X(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function T7(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function IE(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function CE(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${xE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class jX{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(_X())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,IE("/static/css/mindmap.css?v="+U2),await Promise.all([T7("/static/js/vendor/d3-mindmap.min.js?v="+U2),T7("/static/js/vendor/js-yaml.min.js?v="+U2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),CE(this.mindmapEl);let j=_X(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await T7("/static/js/vendor/mindmap-editor.js?v="+U2),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=eZ({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var w7={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!wE.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new $X(_,$);return new jX(_,$)}};class GX{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var __=new GX;var a4=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};T0();function ZX(){let[_,$]=C(null),[j,G]=C({text:"",totalLines:0}),[Z,X]=C(""),[Y,q]=C({text:"",totalLines:0}),[K,L]=C(null),[Q,V]=C(null),[F,N]=C(null),H=g(null),z=g(0),E=g(!1),U=g(""),k=g(""),A=g(!1),O=g(0),T=g(null),x=g(null),W=g(null),J=g(null),M=g(!1),D=g(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:q,pendingRequest:K,setPendingRequest:L,currentTurnId:Q,setCurrentTurnId:V,steerQueuedTurnId:F,setSteerQueuedTurnId:N,lastAgentEventRef:H,lastSilenceNoticeRef:z,isAgentRunningRef:E,draftBufferRef:U,thoughtBufferRef:k,previewResyncPendingRef:A,previewResyncGenerationRef:O,pendingRequestRef:T,stalledPostIdRef:x,currentTurnIdRef:W,steerQueuedTurnIdRef:J,thoughtExpandedRef:M,draftExpandedRef:D}}T0();var PE=0.1,LX=4,VX=4,XX=160,YX=1600,qX=200,KX=1600;function V$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function QX(_=V$()){return _>0?Math.floor(_*PE):0}function t5(_,$=V$(),j=0){let G=QX($)+LX+(j>0?VX+Math.max(0,j):0),Z=$>0?Math.floor($-G):YX;return Math.min(Math.max(Number(_)||0,XX),Math.max(XX,Math.min(YX,Z)))}function e5(_,$=V$(),j=0){let G=QX($)+VX+(j>0?LX+Math.max(0,j):0),Z=$>0?Math.floor($-G):KX;return Math.min(Math.max(Number(_)||0,qX),Math.max(qX,Math.min(KX,Z)))}function FX({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.clientX,N=$.current||280,H=Q.currentTarget;H.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let z=F,E=(k)=>{z=k.clientX;let A=t5(N+(k.clientX-F),V$(),j?.current||0);V.style.setProperty("--sidebar-width",`${A}px`),$.current=A},U=()=>{let k=t5(N+(z-F),V$(),j?.current||0);$.current=k,H.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",L_("sidebarWidth",String(Math.round(k))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",U)}).current,X=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.touches[0];if(!F)return;let N=F.clientX,H=$.current||280,z=Q.currentTarget;z.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(k)=>{let A=k.touches[0];if(!A)return;k.preventDefault();let O=t5(H+(A.clientX-N),V$(),j?.current||0);V.style.setProperty("--sidebar-width",`${O}px`),$.current=O},U=()=>{z.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",L_("sidebarWidth",String(Math.round($.current||H))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current,Y=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.clientX,N=j.current||$.current||280,H=Q.currentTarget;H.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let z=F,E=(k)=>{z=k.clientX;let A=e5(N+(k.clientX-F),V$(),$?.current||0);V.style.setProperty("--editor-width",`${A}px`),j.current=A},U=()=>{let k=e5(N+(z-F),V$(),$?.current||0);j.current=k,H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",L_("editorWidth",String(Math.round(k))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",U)}).current,q=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.touches[0];if(!F)return;let N=F.clientX,H=j.current||$.current||280,z=Q.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let E=(k)=>{let A=k.touches[0];if(!A)return;k.preventDefault();let O=e5(H+(A.clientX-N),V$(),$?.current||0);V.style.setProperty("--editor-width",`${O}px`),j.current=O},U=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",L_("editorWidth",String(Math.round(j.current||H))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current,K=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.clientY,N=G?.current||200,H=Q.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let z=F,E=(k)=>{z=k.clientY;let A=Math.min(Math.max(N-(k.clientY-F),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${A}px`),G)G.current=A;window.dispatchEvent(new CustomEvent("dock-resize"))},U=()=>{let k=Math.min(Math.max(N-(z-F),100),window.innerHeight*0.5);if(G)G.current=k;H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",L_("dockHeight",String(Math.round(k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",U)}).current,L=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let F=Q.touches[0];if(!F)return;let N=F.clientY,H=G?.current||200,z=Q.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let E=(k)=>{let A=k.touches[0];if(!A)return;k.preventDefault();let O=Math.min(Math.max(H-(A.clientY-N),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${O}px`),G)G.current=O;window.dispatchEvent(new CustomEvent("dock-resize"))},U=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",L_("dockHeight",String(Math.round(G?.current||H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:L}}T0();function x7(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var NX=x7("warning",30000),BX=x7("finalize",120000),UX=x7("refresh",30000),HX=30000;function EX(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function _6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function DX(_=30000){let[,$]=C(0);u(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function zX(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function H2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function RE(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function C$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function Q$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function E2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return Q$(_)?"Compacting context":"Working..."}function OX(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function $6(_,$=Date.now()){let j=H2(_);if(j===null)return null;return OX(Math.max(0,$-j))}function WX(_,$=Date.now()){let j=RE(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${OX(G)}`}T0();function PY(_={}){h1(_)}function RY(){let[_,$]=C(!1);if(u(()=>{let Z=(Y)=>{let q=t4(Y?.detail?.section);if(q)try{window.__piclawSettingsRequestedSection=q}catch(K){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=D2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=C(null);if(u(()=>{Promise.resolve().then(() => (CY(),IY)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return B`
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
    `}T0();function _z(_,$){return new URL(String(_||""),$).toString()}function fY(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);u(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=P((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},q=_z(Z,window.location.href);if(Y)window.history.replaceState(null,"",q);else window.history.pushState(null,"",q);$(window.location.href)},[]);return{locationParams:Y0(()=>new URL(_).searchParams,[_]),navigate:j}}T0();T0();function SY(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function i7(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var $z=400,s7=60,jz=220,a7="mdPreviewHeight";function Gz(){return SY(localStorage,a7,s7,jz)}function P2({getContent:_,path:$,onClose:j}){let[G,Z]=C(""),[X,Y]=C(Gz),q=g(null),K=g(null),L=g(""),Q=g(_);return Q.current=_,u(()=>{let N=()=>{let z=Q.current?.()||"";if(z===L.current)return;L.current=z;try{let E=t_(z,null);Z(E)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};N();let H=setInterval(N,$z);return()=>clearInterval(H)},[]),u(()=>{if(q.current&&G)L$(q.current).catch((N)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",N,{path:$})})},[G]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(N)=>{N.preventDefault();let H=N.clientY,z=K.current?.offsetHeight||X,E=K.current?.parentElement,U=E?E.offsetHeight*0.7:500,k=N.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=(T)=>{let x=Math.min(Math.max(z-(T.clientY-H),s7),U);Y(x)},O=()=>{k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",i7(localStorage,a7,K.current?.offsetHeight||X),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",O)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",O)}}
            onTouchStart=${(N)=>{N.preventDefault();let H=N.touches[0];if(!H)return;let z=H.clientY,E=K.current?.offsetHeight||X,U=K.current?.parentElement,k=U?U.offsetHeight*0.7:500,A=N.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let O=(x)=>{let W=x.touches[0];if(!W)return;x.preventDefault();let J=Math.min(Math.max(E-(W.clientY-z),s7),k);Y(J)},T=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",i7(localStorage,a7,K.current?.offsetHeight||X),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",T),document.removeEventListener("touchcancel",T)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",T),document.addEventListener("touchcancel",T)}}
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
    `}function uY(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function Zz(_){return _==="error"?"Could not open branch window":"Opening branch…"}function gY(_){return B`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${Zz(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function bY(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:q,handleTabActivate:K,previewTabs:L,diffTabs:Q,handleTabTogglePreview:V,handleTabToggleDiff:F,editorContainerRef:N,getPaneContent:H,panePopoutPath:z}=_,E=j&&!G&&Z,U=X?`Pane window controls for ${X}`:"Pane window controls";return B`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${E&&B`
          <div class="pane-popout-hover-zone" aria-hidden="true"></div>
          <div class="pane-popout-controls" role="toolbar" aria-label=${U}>
            <details class="pane-popout-controls-menu">
              <summary
                class="pane-popout-controls-trigger pane-popout-controls-icon-button"
                aria-label=${U}
                title=${U}
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
          <${P2}
            getContent=${H}
            path=${q}
            onClose=${()=>V(q)}
          />
        `}
      </div>
    </div>
  `}T0();T0();function R2(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function Xz(_,$){let j=R2(_),G=R2($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function Y6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function t7(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function Yz(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function qz(_,$,j=0,G=(Z)=>Z){let Z=R2($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=Yz(X.length,j),q=X.map((K)=>R2(G(K)));for(let K of Y)if(q[K].startsWith(Z))return K;for(let K of Y)if(q[K].includes(Z))return K;return-1}function e7(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if(Xz(X,$))return j}return qz(Z,$,0,G)}g_();function f2(_){return String(_||"").trim().toLowerCase()}function _9(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return f2($[1]||"")}function Kz(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=f2(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function vY(_,$,j={}){let G=_9($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return Kz(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return f2(X?.agent_name).startsWith(G)})}function $9(_){let $=f2(_);return $?`@${$} `:""}function mY(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function cY(_,$,j={}){if(!_||_.isComposing)return!1;if(!mY(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function j9(_,$={}){if(!mY($))return!1;return String(_||"")==="@"}function G9(_){let $=Z9(_);return $?`@${$}`:""}function Z9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function S2(_,$=""){let j=String(_||""),G=Z9(j),Z=Z9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function Lz(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function u2(_,$={}){let j=G9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=Lz(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function lY(_,$,j){let G=G9(_),Z=G9($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function g2({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function b2({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function v2(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";if(_?.type==="intent")return"dot";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function hY(_,$={}){return v2(_,$)==="dot"}T0();var pY=350;function Vz(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function Qz(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let q=Vz(j);return{show:!0,statusClass:j,label:q,title:`Connection: ${q}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):pY,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!0,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function X9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):pY,[G,Z]=C(null),[X,Y]=C(()=>Date.now());return u(()=>{if(_==="disconnected"){let q=Date.now();Z((K)=>K??q),Y(q);return}Z(null),Y(Date.now())},[_]),u(()=>{if(_!=="disconnected"||G===null)return;let q=j-(Date.now()-G);if(q<=0)return;let K=setTimeout(()=>{Y(Date.now())},q);return()=>clearTimeout(K)},[_,G,j]),Y0(()=>Qz(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}T0();function M1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let q=`${_}-file-pill`,K=`${_}-file-name`,L=`${_}-file-remove`,Q=Y==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  `}async function Y9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function Fz(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function Nz(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function q9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=x1(_),Z=Fz(_),X=Nz(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function nY(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let q=/[\s\n]$/.test(G)?"":" ";return`${G}${q}${Y}`}function rY(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let q=String(Y[0].transcript||"").trim();if(!q)continue;if(Y.isFinal)j=`${j} ${q}`.trim();else G=`${G} ${q}`.trim()}return{finalText:j,interimText:G}}function K9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var Bz=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/backend",description:"Show or switch backend (codex|claude|pi)"},{name:"/proactive",description:"Enable, disable, or show proactive Gmail/calendar checks"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"},{name:"/update",description:"Update PiClaw to latest git main"},{name:"/rebuild",description:"Rebuild the NixOS host"},{name:"/fast",description:"Show or set Codex Fast mode"}],dY="piclaw_compose_history";function Uz(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function Hz(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return dY;return`${dY}:${encodeURIComponent($)}`}function Ez(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),q=Boolean(X?.archived_at);if(Y!==q)return Y?1:-1;let K=String(Z?.agent_name||"").trim(),L=String(X?.agent_name||"").trim(),Q=K.localeCompare(L,void 0,{sensitivity:"base"});if(Q!==0)return Q;let V=String(Z?.chat_jid||"").trim(),F=String(X?.chat_jid||"").trim();return V.localeCompare(F,void 0,{sensitivity:"base"})}),G}function Dz(_){return Boolean(_?.is_active&&!_?.archived_at)}function zz(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function oY(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"",Y=Z.length>1;if(X==="/fast")return j;if(!Y&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function Oz(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function Wz(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function Jz(_){return _==="abort"||_==="compacting"}function Az(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!0}}function kz({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G="",compactDisabled:Z=!1,compactDisabledTitle:X=""}){let Y=Math.min(100,Math.max(0,_.percent||0)),q=_.tokens,K=_.contextWindow,L="Compact context",Q=q!=null?`Context: ${q6(q)} / ${q6(K)} tokens (${Y.toFixed(0)}%)`:`Context: ${Y.toFixed(0)}%`,V=typeof j==="string"?j.trim():"",F=typeof G==="string"?G.trim():"",N=V?`${Q} — ${F||"Smart compaction"} · ${V}`:Z?`${Q} — ${X||"Manual compaction unavailable"}`:`${Q} — ${"Compact context"}`,H=9,z=2*Math.PI*9,E=Y/100*z,U=Y>90?"var(--context-red, #ef4444)":Y>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <button
            class=${`compose-context-pie icon-btn${V?" is-compacting":""}`}
            type="button"
            title=${N}
            aria-label=${V?`Smart compaction ${V}`:Z?"Manual compaction unavailable":"Compact context"}
            disabled=${Z}
            onClick=${(k)=>{if(k.preventDefault(),k.stopPropagation(),Z)return;$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${U}
                    stroke-width="2.5"
                    stroke-dasharray=${`${E} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${V&&B`<span class="compose-context-pie-timer">${V}</span>`}
        </button>
    `}function q6(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function Mz(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function iY(_,$){let j=Number(_?.contextWindow??_?.context_window),G=Mz($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${q6(G)} tokens, but this model only fits ${q6(j)}. Compact first.`,tokens:G,contextWindow:j}}function L9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${q6($)} ctx`}function sY(_){let $=Number(_);if(!Number.isFinite($))return"";return`${Math.max(0,Math.min(100,Math.round($)))}%`}function yz(_){let $=sY(_?.primary?.remaining_percent),j=sY(_?.secondary?.remaining_percent),G=[$,j].filter(Boolean);if(G.length>0)return G.join(" - ");let Z=typeof _?.hint_short==="string"?_.hint_short.trim():"";if(!Z)return"";return Z.split("•").map((X)=>X.trim().split(/\s+/).slice(-1)[0]||"").filter(Boolean).join(" - ")}function aY(_){let $=typeof _==="string"?_.trim():"",j=$.toLowerCase();for(let G of["codex/","claude/","anthropic/"])if(j.startsWith(G))return $.slice(G.length);return $}function m2(_){let $=aY(_),j=$.toLowerCase(),G=j.match(/^claude-(?:opus|sonnet)-(\d+)[.-](\d+)/);if(G)return`${G[1]}.${G[2]}`;if(j.includes("gpt-5.4-mini"))return"5.4m";if(j.includes("gpt-5.3-codex-spark"))return"5.3cs";if(j.includes("gpt-5.3-codex"))return"5.3c";let Z=j.match(/^gpt-(\d+)\.(\d+)/);if(Z)return`${Z[1]}.${Z[2]}`;return $}function Tz(_){return/^\/model\s*$/i.test(String(_||"").trim())}function wz(_,$){let j=m2(_),G=L9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function xz(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function tY(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let V=X.trim();if(!V)continue;let F=V.indexOf("/"),N=F>0?V.slice(0,F).trim():"",H=F>0?V.slice(F+1).trim():V;Z.push({label:V,provider:N,id:H,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",q=typeof X.id==="string"?X.id.trim():"",K=xz(X.label,Y,q);if(!K)continue;let L=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,Q=Number(X.context_window??X.contextWindow);Z.push({label:K,provider:Y,id:q,name:L,contextWindow:Number.isFinite(Q)&&Q>0?Q:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function Iz(_){if(!_||typeof _!=="object")return"";return[m2(_.label),aY(_.label),_.label,_.provider,_.id,_.name,L9(_.contextWindow)].filter(Boolean).join(" ")}function Cz(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:m2(j),hasAvailableModels:!0};let G=tY($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function Pz(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let q=j[Z].trim();if(!q){Z+=1;continue}if(q==="Messages:"||q.startsWith("Channel:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(q)){X=!0,Z+=1;let K=[];while(Z<j.length){let L=j[Z],Q=L.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(Q))break;if(Q.startsWith("Channel:")||Q==="Messages:")break;K.push(L.startsWith("  ")?L.slice(2):L),Z+=1}if(K.length>0)G.push(K.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function Rz(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function fz(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Files:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=Rz(L.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function Sz(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Referenced messages:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=L.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Q)Z.push(Q[1])}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function uz(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Attachments:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=L.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(V)Z.push({id:V[1],label:(V[2]||"").trim()||`attachment:${V[1]}`,raw:Q})}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function eY(_){let $=Pz(_||""),j=fz($||""),G=Sz(j.content||""),Z=uz(G.content||"");return{text:Z.content||"",fileRefs:j.fileRefs,messageRefs:G.messageRefs,attachmentRefs:Z.attachmentRefs}}function gz(_){let $=eY(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function bz(_){let{queuedItem:$,buildDraft:j=gz,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:q,onSetMessageRefs:K,setContent:L,textareaRef:Q,resizeTextarea:V=()=>{},scheduleTimeout:F=(U,k=0)=>setTimeout(U,k),scheduleRaf:N=(U)=>requestAnimationFrame(U),logger:H=console}=_||{};if(!$)return!1;let z=j($?.content||""),E=z.content;return H?.info?.("[compose-box] Returning queued item to editor",{text:E?.slice(0,80),fileRefs:z.fileRefs?.length,messageRefs:z.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),q?.(z.fileRefs),K?.(z.messageRefs),L?.(E),N(()=>{let U=Q?.current;if(!U)return;U.value=E,V();let k=E.length;U.selectionStart=k,U.selectionEnd=k,U.focus()}),F(()=>{try{G?.($)}catch(U){H?.warn?.("[compose-box] Failed to remove returned queued follow-up.",U)}},0),!0}function V9({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return B`
        <div class="compose-queue-stack">
            ${_.map((Y,q)=>{let K=typeof Y?.content==="string"?Y.content:"",L=eY(K);if(!L.text.trim()&&L.fileRefs.length===0&&L.messageRefs.length===0&&L.attachmentRefs.length===0)return null;let Q=q>0,V=q<_.length-1,F=!0;return B`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${K}>
                            ${L.text.trim()&&B`<div class="compose-queue-stack-text">${L.text}</div>`}
                            ${(L.messageRefs.length>0||L.fileRefs.length>0||L.attachmentRefs.length>0)&&B`
                                <div class="compose-queue-stack-refs">
                                    ${L.messageRefs.map((N)=>B`
                                        <${M1}
                                            key=${"queue-msg-"+N}
                                            prefix="compose"
                                            label=${"msg:"+N}
                                            title=${"Message reference: "+N}
                                            icon="message"
                                        />
                                    `)}
                                    ${L.fileRefs.map((N)=>{let H=N.split("/").pop()||N;return B`
                                            <${M1}
                                                key=${"queue-file-"+N}
                                                prefix="compose"
                                                label=${H}
                                                title=${N}
                                                onClick=${()=>X?.(N)}
                                            />
                                        `})}
                                    ${L.attachmentRefs.map((N)=>B`
                                        <${M1}
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
    `}function _q({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:q,fileRefs:K=[],onRemoveFileRef:L,onClearFileRefs:Q,messageRefs:V=[],onRemoveMessageRef:F,onClearMessageRefs:N,activeModel:H=null,agentModelsPayload:z=null,modelUsage:E=null,thinkingLevel:U=null,supportsThinking:k=!1,contextUsage:A=null,onContextCompact:O,notificationsEnabled:T=!1,notificationPermission:x="default",onToggleNotifications:W,onModelChange:J,onModelStateChange:M,activeEditorPath:D=null,onAttachEditorFile:y,onOpenFilePill:I,followupQueueItems:R=[],onInjectQueuedFollowup:S,onRemoveQueuedFollowup:v,onMoveQueuedFollowup:c,onSubmitIntercept:h,onMessageResponse:$0,isAgentActive:b=!1,activeChatAgents:t=[],currentChatJid:s="web:default",connectionStatus:q0="connected",onSetFileRefs:X0,onSetMessageRefs:H0,onSubmitError:B0,onSwitchChat:K0,onRenameSession:D0,isRenameSessionInProgress:Q0=!1,onCreateSession:k0,onDeleteSession:d,onPurgeArchivedSession:G0,onRestoreSession:x0,showQueueStack:y0=!0,statusNotice:C0=null,extensionWorkingState:n0=null,prefillRequest:j_=null}){let[P0,d0]=C(""),[w0,s0]=C(""),[S0,t0]=C(!1),[V_,E_]=C(!1),[l0,u0]=C("or"),[f0,a0]=C([]),[F_,z_]=C(!1),[L0,W0]=C([]),[b0,N_]=C(0),[k_,e0]=C(!1),D_=g(null),[B_,O_]=C([]),[_0,O0]=C(0),[A0,I0]=C(!1),[c0,e]=C(!1),[p,a]=C(!1),[j0,Z0]=C(!1),[E0,v0]=C([]),[o0,J0]=C(0),[R0,q_]=C(0),[K_,G_]=C(!1),[U_,T_]=C(0),[Z_,r]=C(null),[z0,m0]=C(null),[h0,f_]=C(()=>q9()),[W_,p_]=C({kind:"idle",title:"",detail:""}),[d1,n_]=C(()=>Date.now()),[o1,Q1]=C(0),Y_=g(null),m_=g(null),$1=g(null),I_=g(null),c_=g(null),r_=g(null),F1=g(null),E1=g(null),d_=g({value:"",updatedAt:0}),l_=g(null),D1=g(""),X1=g(""),z1=g(""),i1=g(""),y1=g(!1),R1=g(0),Y1=g(!1),H5=200,N1=Hz(s),W4=(w)=>{let l=new Set,o=[];for(let F0 of w||[]){if(typeof F0!=="string")continue;let p0=F0.trim();if(!p0||l.has(p0))continue;l.add(p0),o.push(p0)}return o},J4=(w=N1)=>{let l=V1(w);if(!l)return[];try{let o=JSON.parse(l);if(!Array.isArray(o))return[];return W4(o)}catch{return[]}},W6=(w,l=N1)=>{L_(l,JSON.stringify(w))},M_=g(J4(N1)),j1=g(-1),s1=g(""),U$=g("");u(()=>{M_.current=J4(N1),j1.current=-1,s1.current=""},[N1]),u(()=>{if(!j)return;fetch("/agent/settings-data").then((w)=>w.json()).then((w)=>{if(w?.searchMatchMode)u0(w.searchMatchMode)}).catch(()=>{})},[j]),u(()=>{let w=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(s||"web:default")}`).then((o)=>o.ok?o.json():null).then((o)=>{if(w||!o?.commands)return;D_.current=o.commands.map((F0)=>({name:F0.name,description:F0.description||""}))}).catch((o)=>{console.debug("[compose] failed to fetch dynamic commands",o)}),()=>{w=!0}},[s]),u(()=>{let w=Uz(j_,U$.current,j);if(!w.shouldApply)return;U$.current=w.nextToken,r(null),d0(w.text),n(w.text),N0(w.text),requestAnimationFrame(()=>{m();let l=Y_.current;if(!l)return;try{l.focus({preventScroll:!0})}catch{l.focus()}let o=w.text.length;l.setSelectionRange?.(o,o)})},[j_,j]),u(()=>{f_(q9())},[]);let E5=P0.trim()||f0.length>0||K.length>0||V.length>0,D5=W_.kind!=="idle",z5=W_.kind==="requesting_permission"||W_.kind==="listening",H$=!j&&Boolean(h0?.showButton),A4=W_.kind==="requesting_permission"||W_.kind==="listening",k4=A4?"Stop voice input":h0?.title||"Voice input",p$=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),O5=typeof window<"u"&&typeof Notification<"u",q1=typeof window<"u"?Boolean(window.isSecureContext):!1,W5=O5&&q1&&x!=="denied",f1=x==="granted"&&T,O1=Q$(C0),M4=E2(C0),n$=typeof C0?.detail==="string"&&C0.detail.trim()?C0.detail.trim():"",r$=O1?$6(C0,d1):null,T1=Az(n0,o1),o_=n0?.indicator&&typeof n0.indicator==="object"?n0.indicator:null,y4=f1?"Disable notifications":"Enable notifications",J5=f0.length>0||K.length>0||V.length>0,a1=X9(q0),d$=a1.label,o$=a1.title,E$=Oz(b,E5,O1),u_=Wz(b,O1),T4=(Array.isArray(t)?t:[]).filter((w)=>!w?.archived_at),G1=(()=>{for(let w of Array.isArray(t)?t:[]){let l=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(l&&l===s)return w}return null})(),I8=Boolean(G1&&G1.chat_jid===(G1.root_chat_jid||G1.chat_jid)),J6=Boolean(I8&&(G1?.chat_jid||s)==="web:default"),D$=Y0(()=>Ez(t,s),[t,s]),t1=D$.length>0,z$=t1&&typeof K0==="function",O$=t1&&typeof x0==="function",w4=Boolean(Q0||Y1.current),W1=!j&&typeof D0==="function"&&!w4,e1=!j&&typeof k0==="function",_$=!j&&typeof d==="function"&&!J6,A6=!j&&typeof G0==="function",w1=!j&&(z$||O$||W1||e1||_$||A6),k6=Cz(H,z),A5=k6.showPicker,k5=k6.label,M6=typeof z?.fast_mode==="boolean"?z.fast_mode:null,M5=k&&U?` (${U})`:"",x4=M5.trim()?`${U}`:"",C8=M6===!0?"Fast on":null,I4=yz(E),P8=typeof E?.extra_usage?.reset_description==="string"?E.extra_usage.reset_description.trim():"",y5=M6===!0&&Boolean(x4),R8=Boolean((x4||y5)&&I4),f8=Boolean(x4||y5||I4),S8=[H?`Current model: ${k5}${M5}`:null,E?.plan?`Plan: ${E.plan}`:null,I4||null,C8,E?.primary?.reset_description||null,E?.secondary?.reset_description||null,P8||null].filter(Boolean),y6=c0?"Switching model…":S8.join(" • ")||(A5?"Select a model (tap to open model picker)":`Current model: ${k5}${M5} (tap to open model picker)`),u8=!j&&(A5||A&&A.percent!=null),f=(w)=>{if(!w||typeof w!=="object")return;let l=w.model??w.current;if(typeof M==="function")M({model:l??null,thinking_level:w.thinking_level??null,thinking_level_label:w.thinking_level_label??null,fast_mode:w.fast_mode??null,supports_thinking:w.supports_thinking,provider_usage:w.provider_usage??null});if(l&&typeof J==="function")J(l)},m=(w)=>{let l=w||Y_.current;if(!l)return;l.style.height="auto",l.style.height=`${l.scrollHeight}px`,l.style.overflowY="hidden"},n=(w)=>{if(!w.startsWith("/")||w.includes(`
`)){e0(!1),W0([]);return}let l=w.toLowerCase().split(" ")[0];if(l.length<1){e0(!1),W0([]);return}let F0=(D_.current||Bz).filter((p0)=>p0.name.startsWith(l)||p0.name.replace(/-/g,"").startsWith(l.replace(/-/g,"")));if(F0.length>0&&!(F0.length===1&&F0[0].name===l))I0(!1),O_([]),W0(F0),N_(0),e0(!0);else e0(!1),W0([])},i=(w)=>{let l=P0,o=l.indexOf(" "),F0=o>=0?l.slice(o):"",p0=w.name+F0;d0(p0),e0(!1),W0([]),requestAnimationFrame(()=>{let J_=Y_.current;if(!J_)return;let P_=p0.length;J_.selectionStart=P_,J_.selectionEnd=P_,J_.focus()})},N0=(w)=>{if(j9(w,{searchMode:j,showSessionSwitcherButton:w1})){I0(!1),O_([]);return}if(_9(w)==null){I0(!1),O_([]);return}let l=vY(T4,w,{currentChatJid:s});if(l.length>0&&!(l.length===1&&$9(l[0].agent_name).trim().toLowerCase()===String(w||"").trim().toLowerCase()))e0(!1),W0([]),O_(l),O0(0),I0(!0);else I0(!1),O_([])},V0=(w)=>{let l=$9(w?.agent_name);if(!l)return;d0(l),I0(!1),O_([]),requestAnimationFrame(()=>{let o=Y_.current;if(!o)return;let F0=l.length;o.selectionStart=F0,o.selectionEnd=F0,o.focus()})},M0=()=>{if(j||!z$&&!O$&&!W1&&!e1&&!_$)return!1;return d_.current={value:"",updatedAt:0},a(!1),e0(!1),W0([]),I0(!1),O_([]),Z0(!0),!0},g0=(w)=>{if(w?.preventDefault?.(),w?.stopPropagation?.(),j||!z$&&!O$&&!W1&&!e1&&!_$)return;if(j0){d_.current={value:"",updatedAt:0},Z0(!1);return}M0()},U0=(w)=>{let l=typeof w==="string"?w.trim():"";if(Z0(!1),!l||l===s){requestAnimationFrame(()=>Y_.current?.focus());return}K0?.(l)},i0=async(w)=>{let l=typeof w==="string"?w.trim():"";if(Z0(!1),!l||typeof x0!=="function"){requestAnimationFrame(()=>Y_.current?.focus());return}try{await x0(l)}catch(o){console.warn("Failed to restore session:",o),requestAnimationFrame(()=>Y_.current?.focus())}},H_=Y0(()=>{let w=[];for(let l of D$){let o=Boolean(l?.archived_at),F0=typeof l?.agent_name==="string"?l.agent_name.trim():"",p0=typeof l?.chat_jid==="string"?l.chat_jid.trim():"";if(!F0||!p0)continue;w.push({type:"session",key:`session:${p0}`,label:`@${F0} — ${p0}${l?.is_active?" active":""}${o?" archived":""}`,chat:l,disabled:o?!O$:!z$})}if(e1)w.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(W1)w.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:w4});if(_$)w.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return w},[D$,O$,z$,e1,W1,_$,w4]),s_=async(w)=>{if(w?.preventDefault)w.preventDefault();if(w?.stopPropagation)w.stopPropagation();if(typeof D0!=="function"||Q0||Y1.current)return;Y1.current=!0,Z0(!1);try{await D0()}catch(l){console.warn("Failed to rename session:",l)}finally{Y1.current=!1}requestAnimationFrame(()=>Y_.current?.focus())},W$=async()=>{if(typeof k0!=="function")return;Z0(!1);try{await k0()}catch(w){console.warn("Failed to create session:",w)}requestAnimationFrame(()=>Y_.current?.focus())},g8=async()=>{if(typeof d!=="function")return;Z0(!1);try{await d(s)}catch(w){console.warn("Failed to delete session:",w)}requestAnimationFrame(()=>Y_.current?.focus())},J$=(w)=>{if(j)s0(w);else d0(w),n(w),N0(w);requestAnimationFrame(()=>m())},aF=(w)=>{let l=j?w0:P0,o=l&&!l.endsWith(`
`)?`
`:"",F0=`${l}${o}${w}`.trimStart();J$(F0)},b8=P(()=>{requestAnimationFrame(()=>{let w=Y_.current;if(!w)return;try{w.focus({preventScroll:!0})}catch{w.focus()}})},[]),S1=P(()=>{p_({kind:"idle",title:"",detail:""})},[]),v8=P((w=X1.current,l=z1.current)=>{if(j)return;J$(nY(D1.current,w,l))},[j]),A$=P(()=>{y1.current=!0;let w=l_.current;if(!w){S1();return}try{w.stop()}catch{l_.current=null,S1()}},[S1]),tF=P(()=>{if(r(null),m0(null),l_.current){A$();return}if(!h0?.showButton)return;if(h0.mode==="fallback"){b8(),p_({kind:"guidance",title:h0.title||"Use keyboard dictation",detail:h0.detail||"Use your keyboard dictation mic for voice input here."});return}if(!h0?.canStart||!h0?.recognitionCtor){p_({kind:"error",title:h0?.title||"Voice input unavailable",detail:h0?.detail||"This browser does not expose native speech recognition in this context."});return}try{let w=new h0.recognitionCtor;if(l_.current=w,D1.current=String(P0||""),X1.current="",z1.current="",i1.current="",y1.current=!1,w.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",w.interimResults=!0,w.continuous=!1,"maxAlternatives"in w)w.maxAlternatives=1;w.onstart=()=>{p_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},w.onresult=(l)=>{let{finalText:o,interimText:F0}=rY(l?.results,l?.resultIndex||0);if(o)X1.current=`${X1.current} ${o}`.trim();z1.current=F0,v8(),p_({kind:"listening",title:"Listening…",detail:F0?`Heard: ${F0}`:"Speak now. Tap the mic again to stop."})},w.onerror=(l)=>{let o=String(l?.error||"").trim();if(i1.current=o,l_.current=null,z1.current="",o==="aborted"){S1();return}p_({kind:"error",title:"Voice input failed",detail:K9(o,h0)})},w.onend=()=>{let l=i1.current,o=y1.current,F0=Boolean(X1.current.trim()||z1.current.trim());if(l_.current=null,y1.current=!1,i1.current="",z1.current.trim())X1.current=`${X1.current} ${z1.current}`.trim(),z1.current="";if(F0)v8(X1.current,"");if(l&&l!=="aborted")return;if(!F0&&!o){p_({kind:"error",title:"No speech detected",detail:K9("no-speech",h0)});return}S1()},p_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),b8(),w.start()}catch(w){l_.current=null,p_({kind:"error",title:"Voice input failed",detail:w?.message||"Could not start native browser speech recognition."})}},[v8,S1,P0,b8,h0,A$]),eF=(w)=>{let l=w?.command?.model_label;if(l)return l;let o=w?.command?.message;if(typeof o==="string"){let F0=o.match(/•\s+([^\n]+?)\s+\(current\)/);if(F0?.[1])return F0[1].trim()}return null},Dj=async(w)=>{if(j||c0)return;r(null),m0(null),e(!0);try{let l=await k1("default",w,null,[],null,s),o=eF(l);return f({model:o??H??null,thinking_level:l?.command?.thinking_level,thinking_level_label:l?.command?.thinking_level_label,fast_mode:l?.command?.fast_mode,supports_thinking:l?.command?.supports_thinking}),await Y9(V4,s,f),m0(oY(w,l)),_?.(l),!0}catch(l){return console.error("Failed to switch model:",l),alert("Failed to switch model: "+l.message),!1}finally{e(!1)}},_N=async()=>{await Dj("/cycle-model")},m8=async(w)=>{let l=typeof w==="string"?w:typeof w?.label==="string"?w.label:"";if(!l||c0)return;let o=iY(w,A);if(o.blocked){r(null),m0(o.note);return}if(await Dj(`/model ${l}`))a(!1)},$N=(w)=>{if(!w||w.disabled)return;if(w.type==="session"){let l=w.chat;if(l?.archived_at)i0(l.chat_jid);else U0(l.chat_jid);return}if(w.type==="action"){if(w.action==="new"){W$();return}if(w.action==="rename"){s_();return}if(w.action==="delete")g8()}},jN=(w)=>{w.preventDefault(),w.stopPropagation(),d_.current={value:"",updatedAt:0},Z0(!1),a((l)=>!l)},GN=async()=>{if(j)return;O?.(),await C4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},ZN=(w)=>{if(w==="queue"||w==="steer"||w==="auto")return w;return b?"queue":void 0},C4=async(w,l,o={})=>{let F0=typeof w==="string"?w:P0;if(/^\/settings\s*$/i.test(F0.trim())){d0(""),requestAnimationFrame(()=>m()),h1();return}if(/^\/help\s*$/i.test(F0.trim())){d0(""),requestAnimationFrame(()=>m()),h1({section:"keyboard"});return}if(Tz(F0)){d0(""),requestAnimationFrame(()=>m()),d_.current={value:"",updatedAt:0},Z0(!1),e0(!1),W0([]),I0(!1),O_([]),r(null),m0(null),a(!0);return}let{includeMedia:p0=!0,includeFileRefs:J_=!0,includeMessageRefs:P_=!0,clearAfterSubmit:y_=!0,recordHistory:u1=!0}=o||{},B1=typeof w==="string"?w:w&&typeof w?.target?.value==="string"?w.target.value:P0,zj=typeof B1==="string"?B1:"";if(!zj.trim()&&(p0?f0.length===0:!0)&&(J_?K.length===0:!0)&&(P_?V.length===0:!0))return;if(l_.current)A$();S1(),e0(!1),W0([]),I0(!1),O_([]),Z0(!1),r(null),m0(null);let T6=p0?[...f0]:[],w6=J_?[...K]:[],x6=P_?[...V]:[],i$=zj.trim();if(u1&&i$){let s$=M_.current,K1=W4(s$.filter((l8)=>l8!==i$));if(K1.push(i$),K1.length>200)K1.splice(0,K1.length-200);M_.current=K1,W6(K1),j1.current=-1,s1.current=""}let DN=()=>{if(p0)a0([...T6]);if(J_)X0?.(w6);if(P_)H0?.(x6);d0(i$),requestAnimationFrame(()=>m())};if(y_)d0(""),a0([]),Q?.(),N?.();(async()=>{try{let s$=await h?.({content:i$,submitMode:l,fileRefs:w6,messageRefs:x6,mediaFiles:T6});if(s$){_?.(s$);return}let K1=[];for(let a$ of T6){let I6=await G7(a$);K1.push(I6.id)}let l8=w6.length?`Files:
${w6.map((a$)=>`- ${a$}`).join(`
`)}`:"",zN=x6.length?`Referenced messages:
${x6.map((a$)=>`- message:${a$}`).join(`
`)}`:"",ON=K1.length?`Attachments:
${K1.map((a$,I6)=>{let JN=T6[I6]?.name||`attachment-${I6+1}`;return`- attachment:${a$} (${JN})`}).join(`
`)}`:"",WN=[i$,l8,zN,ON].filter(Boolean).join(`

`),$$=await k1("default",WN,null,K1,ZN(l),s);if($0?.($$),$$?.command)f({model:$$.command.model_label??H??null,thinking_level:$$.command.thinking_level,thinking_level_label:$$.command.thinking_level_label,fast_mode:$$.command.fast_mode,supports_thinking:$$.command.supports_thinking}),await Y9(V4,s,f);m0(oY(i$,$$)),_?.($$)}catch(s$){if(y_)DN();let K1=s$?.message||"Failed to send message.";r(K1),B0?.(K1),console.error("Failed to post:",s$)}})()},XN=(w)=>{S?.(w)},YN=P((w)=>{bz({queuedItem:w,onRemoveQueuedFollowup:v,setSubmitError:r,setSubmitNotice:m0,setMediaFiles:a0,onSetFileRefs:X0,onSetMessageRefs:H0,setContent:d0,textareaRef:Y_,resizeTextarea:m})},[v,X0,H0,m]),T5=P((w)=>{if(j||!p&&!j0||w?.isComposing)return!1;let l=()=>{w.preventDefault?.(),w.stopPropagation?.()},o=()=>{d_.current={value:"",updatedAt:0}};if(w.key==="Escape"){if(l(),o(),p)a(!1);if(j0)Z0(!1);return!0}if(p){if(w.key==="ArrowDown"){if(l(),o(),E0.length>0)J0((F0)=>(F0+1)%E0.length);return!0}if(w.key==="ArrowUp"){if(l(),o(),E0.length>0)J0((F0)=>(F0-1+E0.length)%E0.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&E0.length>0)return l(),o(),m8(E0[Math.max(0,Math.min(o0,E0.length-1))]),!0;if(Y6(w)&&E0.length>0){l();let F0=t7(d_.current,w.key);d_.current=F0;let p0=e7(E0,F0.value,o0,(J_)=>Iz(J_));if(p0>=0)J0(p0);return!0}}if(j0){if(w.key==="ArrowDown"){if(l(),o(),H_.length>0)q_((F0)=>(F0+1)%H_.length);return!0}if(w.key==="ArrowUp"){if(l(),o(),H_.length>0)q_((F0)=>(F0-1+H_.length)%H_.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&H_.length>0)return l(),o(),$N(H_[Math.max(0,Math.min(R0,H_.length-1))]),!0;if(Y6(w)&&H_.length>0){l();let F0=t7(d_.current,w.key);d_.current=F0;let p0=e7(H_,F0.value,R0,(J_)=>J_.label);if(p0>=0)q_(p0);return!0}}return!1},[j,p,j0,E0,o0,H_,R0,m8]),qN=(w)=>{if(w.isComposing)return;if(j&&w.key==="Escape"){w.preventDefault(),s0(""),q?.();return}if(T5(w))return;let l=Y_.current?.value??(j?w0:P0);if(cY(w,l,{searchMode:j,showSessionSwitcherButton:w1})){w.preventDefault(),M0();return}if(A0&&B_.length>0){let o=Y_.current?.value??(j?w0:P0);if(!String(o||"").match(/^@([a-zA-Z0-9_-]*)$/))I0(!1),O_([]);else{if(w.key==="ArrowDown"){w.preventDefault(),O0((F0)=>(F0+1)%B_.length);return}if(w.key==="ArrowUp"){w.preventDefault(),O0((F0)=>(F0-1+B_.length)%B_.length);return}if(w.key==="Tab"||w.key==="Enter"){w.preventDefault(),V0(B_[_0]);return}if(w.key==="Escape"){w.preventDefault(),I0(!1),O_([]);return}}}if(k_&&L0.length>0){let o=Y_.current?.value??(j?w0:P0);if(!String(o||"").startsWith("/"))e0(!1),W0([]);else{if(w.key==="ArrowDown"){w.preventDefault(),N_((F0)=>(F0+1)%L0.length);return}if(w.key==="ArrowUp"){w.preventDefault(),N_((F0)=>(F0-1+L0.length)%L0.length);return}if(w.key==="Tab"){w.preventDefault(),i(L0[b0]);return}if(w.key==="Enter"&&!w.shiftKey){if(!l.includes(" ")){w.preventDefault();let p0=L0[b0];e0(!1),W0([]),C4(p0.name);return}}if(w.key==="Escape"){w.preventDefault(),e0(!1),W0([]);return}}}if(!j&&(w.key==="ArrowUp"||w.key==="ArrowDown")&&!w.metaKey&&!w.ctrlKey&&!w.altKey&&!w.shiftKey){let o=Y_.current;if(!o)return;let F0=o.value||"",p0=o.selectionStart===0&&o.selectionEnd===0,J_=o.selectionStart===F0.length&&o.selectionEnd===F0.length;if(w.key==="ArrowUp"&&p0||w.key==="ArrowDown"&&J_){let P_=M_.current;if(!P_.length)return;w.preventDefault();let y_=j1.current;if(w.key==="ArrowUp"){if(y_===-1)s1.current=F0,y_=P_.length-1;else if(y_>0)y_-=1;j1.current=y_,J$(P_[y_]||"")}else{if(y_===-1)return;if(y_<P_.length-1)y_+=1,j1.current=y_,J$(P_[y_]||"");else j1.current=-1,J$(s1.current||""),s1.current=""}requestAnimationFrame(()=>{let u1=Y_.current;if(!u1)return;let B1=u1.value.length;u1.selectionStart=B1,u1.selectionEnd=B1});return}}if(w.key==="Enter"&&!w.shiftKey&&(w.ctrlKey||w.metaKey)){if(w.preventDefault(),j){if(l.trim())Z?.(l.trim(),G,{images:S0,attachments:V_})}else C4(l,"steer");return}if(w.key==="Enter"&&!w.shiftKey){if(w.preventDefault(),j){if(l.trim())Z?.(l.trim(),G,{images:S0,attachments:V_})}else C4(l);return}if(w.key==="Escape"){if(p||j0||k_||A0)return;w.preventDefault(),Y_.current?.blur()}},c8=(w)=>{let l=Array.from(w||[]).filter((o)=>o instanceof File&&!String(o.name||"").startsWith(".DS_Store"));if(!l.length)return;a0((o)=>[...o,...l]),r(null)},KN=(w)=>{c8(w.target.files),w.target.value=""},LN=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),R1.current+=1,z_(!0)},VN=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),R1.current=Math.max(0,R1.current-1),R1.current===0)z_(!1)},QN=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),w.dataTransfer)w.dataTransfer.dropEffect="copy";z_(!0)},FN=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),R1.current=0,z_(!1),c8(w.dataTransfer?.files||[])},NN=(w)=>{if(j)return;let l=w.clipboardData?.items;if(!l||!l.length)return;let o=[];for(let F0 of l){if(F0.kind!=="file")continue;let p0=F0.getAsFile?.();if(p0)o.push(p0)}if(o.length>0)w.preventDefault(),c8(o)},BN=(w)=>{a0((l)=>l.filter((o,F0)=>F0!==w))},UN=()=>{r(null),a0([]),Q?.(),N?.()},HN=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((w)=>{let{latitude:l,longitude:o,accuracy:F0}=w.coords,p0=`${l.toFixed(5)}, ${o.toFixed(5)}`,J_=Number.isFinite(F0)?` ±${Math.round(F0)}m`:"",P_=`https://maps.google.com/?q=${l},${o}`,y_=`Location: ${p0}${J_} ${P_}`;aF(y_)},(w)=>{let l=w?.message||"Unable to retrieve location.";alert(`Location error: ${l}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!p)return;d_.current={value:"",updatedAt:0},G_(!0),V4(s).then((w)=>{v0(tY(w)),f(w)}).catch((w)=>{console.warn("Failed to load model list:",w),v0([])}).finally(()=>{G_(!1)})},[p,H]),u(()=>{if(j)a(!1),Z0(!1),e0(!1),W0([]),I0(!1),O_([])},[j]),u(()=>{if(j0&&!w1)Z0(!1)},[j0,w1]),u(()=>{if(!p)return;let w=E0.findIndex((l)=>l?.label===H);J0(w>=0?w:0)},[p,E0,H]),u(()=>{if(!j0)return;q_(zz(H_,s)),d_.current={value:"",updatedAt:0}},[j0,s,H_]),u(()=>{if(!p)return;let w=(l)=>{let o=I_.current,F0=c_.current,p0=l.target;if(o&&o.contains(p0))return;if(F0&&F0.contains(p0))return;a(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[p]),u(()=>{if(!j0)return;let w=(l)=>{let o=r_.current,F0=F1.current,p0=l.target;if(o&&o.contains(p0))return;if(F0&&F0.contains(p0))return;Z0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[j0]),u(()=>{if(j||!p&&!j0)return;let w=(l)=>{T5(l)};return document.addEventListener("keydown",w,!0),()=>document.removeEventListener("keydown",w,!0)},[j,p,j0,T5]),u(()=>{if(!p)return;let w=I_.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[p,o0,E0]),u(()=>{if(!j0)return;let w=r_.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[j0,R0,H_.length]),u(()=>{if(!A0||!$1.current)return;$1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[A0,_0,B_.length]),u(()=>{if(!k_||!m_.current)return;m_.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[k_,b0,L0.length]),u(()=>{let w=(o)=>{if(!o||typeof o!=="object")return!1;if(o.isContentEditable)return!0;if(typeof o.closest!=="function")return!1;return Boolean(o.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},l=(o)=>{if(o.ctrlKey||o.metaKey||o.altKey)return;let F0=Y_.current;if(!F0)return;let p0=document.activeElement===F0;if(o.key==="Escape"&&!p0&&!w(o.target)){o.preventDefault(),F0.focus();return}if(o.key==="/"&&!p0&&!w(o.target))o.preventDefault(),J$("/"),requestAnimationFrame(()=>{F0.focus(),F0.selectionStart=1,F0.selectionEnd=1,n("/")})};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),u(()=>{let w=()=>{let J_=E1.current?.clientWidth||0;T_((P_)=>P_===J_?P_:J_)};w();let l=E1.current,o=0,F0=()=>{if(o)cancelAnimationFrame(o);o=requestAnimationFrame(()=>{o=0,w()})},p0=null;if(l&&typeof ResizeObserver<"u")p0=new ResizeObserver(()=>F0()),p0.observe(l);if(typeof window<"u")window.addEventListener("resize",F0);return()=>{if(o)cancelAnimationFrame(o);if(p0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",F0)}},[j,H,G1?.agent_name,w1,A?.percent]);let EN=(w)=>{let l=w.target.value;if(l_.current&&w?.isTrusted)A$();if(r(null),m0(null),W_.kind==="guidance"||W_.kind==="error")S1();if(j0)Z0(!1);if(m(w.target),j9(l,{searchMode:j,showSessionSwitcherButton:w1})){J$(""),requestAnimationFrame(()=>{let o=Y_.current;if(!o)return;o.value="",o.selectionStart=0,o.selectionEnd=0,o.focus()}),M0();return}J$(l)};return u(()=>{requestAnimationFrame(()=>m())},[P0,w0,j]),u(()=>{if(!j)return;if(l_.current)A$();return},[j,A$]),u(()=>{if(l_.current)A$();S1()},[s,S1,A$]),u(()=>{return()=>{if(!l_.current)return;try{l_.current.stop()}catch(w){console.debug("[compose] failed to stop speech recognition during cleanup",w)}l_.current=null}},[]),u(()=>{if(!O1)return;n_(Date.now());let w=setInterval(()=>n_(Date.now()),1000);return()=>clearInterval(w)},[O1,C0?.started_at,C0?.startedAt]),u(()=>{if(Q1(0),o_?.mode!=="custom"||!Array.isArray(o_.frames)||o_.frames.length<=1)return;let w=typeof o_.intervalMs==="number"&&Number.isFinite(o_.intervalMs)&&o_.intervalMs>0?o_.intervalMs:120,l=setInterval(()=>{Q1((o)=>(o+1)%o_.frames.length)},w);return()=>clearInterval(l)},[o_]),u(()=>{if(j)return;N0(P0)},[T4,s,P0,j]),B`
        <div class="compose-box">
            ${D5&&B`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${W_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${b2({pulsing:z5})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${W_.title}</span>
                    </div>
                    ${W_.detail&&B`<div class="compose-inline-status-detail">${W_.detail}</div>`}
                </div>
            `}
            ${y0&&!j&&B`
                <${V9}
                    items=${R}
                    onInjectQueuedFollowup=${XN}
                    onRemoveQueuedFollowup=${v}
                    onMoveQueuedFollowup=${c}
                    onReturnQueuedFollowup=${YN}
                    onOpenFilePill=${I}
                />
            `}
            ${T1.visible&&B`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${T1.indicatorText?B`<span class="compose-inline-status-glyph" aria-hidden="true">${T1.indicatorText}</span>`:T1.animateDot?B`<span class=${b2({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${T1.title}</span>
                    </div>
                </div>
            `}
            ${C0&&!O1&&B`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${n$||""}
                >
                    <div class="compose-inline-status-row">
                        <span class=${b2({pulsing:!1})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${M4}</span>
                        ${r$&&B`<span class="compose-inline-status-elapsed">${r$}</span>`}
                    </div>
                    ${n$&&B`<div class="compose-inline-status-detail">${n$}</div>`}
                </div>
            `}
            ${z0&&B`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:t_(z0)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${F_?" drag-active":""}`}
                onDragEnter=${LN}
                onDragOver=${QN}
                onDragLeave=${VN}
                onDrop=${FN}
            >
                <div class="compose-input-main">
                    ${J5&&B`
                        <div class="compose-file-refs">
                            ${V.map((w)=>{return B`
                                    <${M1}
                                        key=${"msg-"+w}
                                        prefix="compose"
                                        label=${"msg:"+w}
                                        title=${"Message reference: "+w}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(w)}
                                    />
                                `})}
                            ${K.map((w)=>{let l=w.split("/").pop()||w;return B`
                                    <${M1}
                                        prefix="compose"
                                        label=${l}
                                        title=${w}
                                        onClick=${()=>I?.(w)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>L?.(w)}
                                    />
                                `})}
                            ${f0.map((w,l)=>{let o=w?.name||`attachment-${l+1}`;return B`
                                    <${M1}
                                        key=${o+l}
                                        prefix="compose"
                                        label=${o}
                                        title=${o}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>BN(l)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${UN}
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
                        value=${j?w0:P0}
                        onInput=${EN}
                        onKeyDown=${qN}
                        onPaste=${NN}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${A0&&B_.length>0&&B`
                        <div class="slash-autocomplete" ref=${$1}>
                            ${B_.map((w,l)=>B`
                                <div
                                    key=${w.chat_jid||w.agent_name}
                                    class=${`slash-item${l===_0?" active":""}`}
                                    onMouseDown=${(o)=>{o.preventDefault(),V0(w)}}
                                    onMouseEnter=${()=>O0(l)}
                                >
                                    <span class="slash-name">@${w.agent_name}</span>
                                    <span class="slash-desc">${w.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${k_&&L0.length>0&&B`
                        <div class="slash-autocomplete" ref=${m_}>
                            ${L0.map((w,l)=>B`
                                <div
                                    key=${w.name}
                                    class=${`slash-item${l===b0?" active":""}`}
                                    onMouseDown=${(o)=>{o.preventDefault(),i(w)}}
                                    onMouseEnter=${()=>N_(l)}
                                >
                                    <span class="slash-name">${w.name}</span>
                                    <span class="slash-desc">${w.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${p&&!j&&B`
                        <div class="compose-model-popup" ref=${I_} tabIndex="-1" onKeyDown=${T5}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${K_&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!K_&&E0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!K_&&E0.map((w,l)=>{let o=typeof w?.label==="string"?w.label:"",F0=m2(o),p0=L9(w?.contextWindow),J_=typeof w?.name==="string"?w.name.trim():"",P_=J_&&J_!==F0?J_:null,y_=iY(w,A);return B`
                                        <button
                                            key=${o}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${o0===l?" active":""}${H===o?" current-model":""}${y_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{m8(w)}}
                                            disabled=${c0||y_.blocked}
                                            title=${[F0,P_,p0,y_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${wz(o,w?.contextWindow)}${P_?B` <span class="compose-model-popup-model-subtitle">${P_}</span>`:""}</span>
                                                ${y_.blocked&&B`<span class="compose-model-popup-model-note">${y_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{_N()}}
                                    disabled=${c0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${j0&&!j&&B`
                        <div class="compose-model-popup" ref=${r_} tabIndex="-1" onKeyDown=${T5}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!t1&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${t1&&D$.map((w,l)=>{let o=Boolean(w.archived_at),F0=w.chat_jid===(w.root_chat_jid||w.chat_jid),p0=!F0&&!w.is_active&&!o&&typeof d==="function",J_=o&&A6,P_=u2(w,{currentChatJid:s});return B`
                                        <div key=${w.chat_jid} class=${`compose-model-popup-item-row${o?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${o?" archived":""}${R0===l?" active":""}`}
                                                onClick=${()=>{if(o){i0(w.chat_jid);return}U0(w.chat_jid)}}
                                                disabled=${o?!O$:!z$}
                                                title=${o?`Restore archived ${`@${w.agent_name}`}`:`Switch to ${`@${w.agent_name}`}`}
                                            >
                                                <span style=${Dz(w)?"font-weight:700":""}>${P_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${w.agent_name} in new window`}
                                                aria-label=${`Open @${w.agent_name} in new window`}
                                                onClick=${(y_)=>{y_.stopPropagation(),Z0(!1);let u1=new URL(window.location.href);u1.searchParams.set("chat_jid",w.chat_jid),u1.searchParams.set("chat_only","1");let B1=document.createElement("a");B1.href=u1.toString(),B1.target="_blank",B1.rel="noopener",B1.style.display="none",document.body.appendChild(B1),B1.click(),B1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(p0||J_)&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${J_?F0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${J_?F0?`Permanently delete archived session @${w.agent_name}`:`Permanently delete archived branch @${w.agent_name}`:`Delete @${w.agent_name}`}
                                                    onClick=${(y_)=>{if(y_.stopPropagation(),Z0(!1),J_){G0?.(w.chat_jid);return}d(w.chat_jid)}}
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
                            ${(e1||W1||_$)&&B`
                                <div class="compose-model-popup-actions">
                                    ${e1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${H_.findIndex((w)=>w.key==="action:new")===R0?" active":""}`}
                                            onClick=${()=>{W$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${W1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${H_.findIndex((w)=>w.key==="action:rename")===R0?" active":""}`}
                                            onClick=${(w)=>{s_(w)}}
                                            title="Rename the current branch handle"
                                            disabled=${w4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${_$&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${H_.findIndex((w)=>w.key==="action:delete")===R0?" active":""}`}
                                            onClick=${()=>{g8()}}
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
                <div class="compose-footer" ref=${E1}>
                    ${u8&&B`
                    <div class="compose-meta-row">
                        ${A5&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${c_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${y6}
                                    aria-label="Open model picker"
                                    onClick=${jN}
                                    disabled=${c0}
                                >
                                    ${c0?"Switching…":k5}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!c0&&f8&&B`
                                        <span class="compose-model-usage-hint" title=${y6}>
                                            ${x4}${y5&&B`<span class="compose-model-fast-glyph" aria-label="Fast mode on">↯</span>`}${R8?" - ":""}${I4}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&A&&A.percent!=null&&B`
                            <${kz}
                                usage=${A}
                                onCompact=${GN}
                                compactionLabel=${O1?r$||"0:00":""}
                                compactionTitle=${O1?M4||"Smart compaction":""}
                            />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${w1&&B`
                        <div
                            ref=${F1}
                            class="compose-session-trigger-group"
                        >
                            ${G1?.agent_name&&B`
                                <button
                                    type="button"
                                    class=${`compose-session-trigger compose-session-trigger-pill${j0?" active":""}`}
                                    onClick=${g0}
                                    title=${G1?.chat_jid||s}
                                    aria-label=${`Manage sessions for @${G1.agent_name}`}
                                    aria-expanded=${j0?"true":"false"}
                                >
                                    <span class="compose-current-agent-label active">@${G1.agent_name}</span>
                                </button>
                            `}
                            <button
                                type="button"
                                class=${`compose-session-trigger compose-session-trigger-icon-btn${j0?" active":""}`}
                                onClick=${g0}
                                title=${G1?.chat_jid||s}
                                aria-label=${G1?.agent_name?`Manage sessions for @${G1.agent_name}`:"Manage Sessions/Agents"}
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
                                onChange=${(w)=>X?.(w.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${S0} onChange=${()=>t0((w)=>!w)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${V_} onChange=${()=>E_((w)=>!w)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${l0==="and"?"active":""}`}
                            onClick=${()=>{let w=l0==="or"?"and":"or";u0(w),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:w})}).catch((l)=>{})}}
                            title=${l0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${l0==="or"?"OR":"AND"}
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
                    ${p$&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${HN}
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
                            class=${`icon-btn voice-input-btn${A4?" active":""}${h0.mode==="fallback"?" fallback":""}`}
                            onClick=${tF}
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
                    ${W5&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${f1?" active":""}`}
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
                            <input type="file" multiple hidden onChange=${KN} />
                        </label>
                    `}
                    ${(q0!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${q0!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${a1.statusClass}" title=${o$}>
                                    ${d$}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class=${E$.className}
                                    type="button"
                                    onClick=${()=>{C4()}}
                                    disabled=${E$.disabled}
                                    title=${E$.title}
                                    aria-label=${E$.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${u_&&B`
                                    <button 
                                        class=${u_.className}
                                        type="button"
                                        onClick=${()=>{if(Jz(u_.mode))C4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
                                        disabled=${u_.disabled}
                                        title=${u_.title}
                                        aria-label=${u_.ariaLabel}
                                    >
                                        ${u_.mode==="compacting"?B`
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
    `}T0();function $q({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return B`
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
  `}T0();function jq(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function Gq(_){return String(_||"").trim()||"web:default"}function Zq(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function Xq(_){if(!_)return!1;return _.status!=="running"}function Yq(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function qq({session:_,onClose:$,onInject:j,onRetry:G}){let Z=g(null),X=g(null),Y=_?.thinking?v5(_.thinking):"",q=_?.answer?t_(_.answer,null):"";if(u(()=>{if(Z.current&&Y)L$(Z.current).catch((z)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",z)})},[Y]),u(()=>{if(X.current&&q)L$(X.current).catch((z)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",z)})},[q]),!_)return null;let K=_.status==="running",L=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),V=Zq(_),F=Xq(_),N=!K&&L,H=K?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${H}</span>
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
    `}T0();function Q9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function F9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function vz(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function mz(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function b$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function $_(_){return typeof _==="string"&&_.trim()?_.trim():null}function Lq(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var Vq="__PICLAW_WIDGET_HOST__:";function Kq(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function N9(_,$){if(!_||_.type!=="generated_widget")return null;let j=vz(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:Lq(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function Qq(_){if(!_||typeof _!=="object")return null;let $=mz(_),j=$_(_?.widget_id)||$_(_?.widgetId)||$_(_?.tool_call_id)||$_(_?.toolCallId),G=$_(_?.tool_call_id)||$_(_?.toolCallId),Z=$_(_?.turn_id)||$_(_?.turnId),X=$_(_?.title)||$_(_?.name)||"Generated widget",Y=$_(_?.subtitle)||"",q=$_(_?.description)||Y,K=$_(_?.status),L=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:X,subtitle:Y,description:q,originPostId:b$(_?.origin_post_id)??b$(_?.originPostId),originChatJid:$_(_?.origin_chat_jid)||$_(_?.originChatJid)||$_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:Lq(_?.capabilities,!0),source:"live",status:L,turnId:Z,toolCallId:G,width:b$(_?.width),height:b$(_?.height),error:$_(_?.error)}}function Fq(_){return N9(_,null)!==null}function H1(_){let $=$_(_?.toolCallId)||$_(_?.tool_call_id);if($)return $;let j=$_(_?.widgetId)||$_(_?.widget_id);if(j)return j;let G=b$(_?.originPostId)??b$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function Nq(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function Bq(_){return Nq(_)?"allow-downloads allow-scripts allow-same-origin":"allow-downloads"}function c2(_){return{title:$_(_?.title)||"Generated widget",widgetId:$_(_?.widgetId)||$_(_?.widget_id),toolCallId:$_(_?.toolCallId)||$_(_?.tool_call_id),turnId:$_(_?.turnId)||$_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:$_(_?.status)||"final"}}function l2(_){return{...c2(_),subtitle:$_(_?.subtitle)||"",description:$_(_?.description)||"",error:$_(_?.error)||null,width:b$(_?.width),height:b$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function h2(_){return`${Vq}${JSON.stringify(l2(_))}`}function Uq(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=$_(_.text)||$_(_.content)||$_(_.message)||$_(_.prompt)||$_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=$_(j.text)||$_(j.content)||$_(j.message)||$_(j.prompt)||$_(j.value);if(G)return G}return null}function Hq(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function Eq(_){let $=$_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return $_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function cz(_){let $=c2(_);return`<script>
(function () {
  const meta = ${Kq($)};
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

  const windowNamePrefix = ${Kq(Vq)};
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
</script>`}function Dq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let q=Nq(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),L=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,Q=q?cz(_):"";return`<!doctype html>
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
</html>`}T0();function lz(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let q=$.get(Y.id);if(!q)continue;let K=Y.parentId?$.get(Y.parentId):null;if(K)K.children.push(q);else j.push(q)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let q=Y.children[0];if(q.role!=="toolResult")continue;Y.resultDetail=q.detail||null,Y.resultLength=q.contentLength||0,Y.resultId=q.id,Y.merged=!0,Y.children=q.children;for(let K of Y.children)K.parentId=Y.id;G.add(q.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),q=Y.children.length>1;for(let K=Y.children.length-1;K>=0;K--)Y.children[K].depth=q?Y.depth+1:Y.depth,X.push(Y.children[K])}return Z}function hz(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function zq(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function G5(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function pz(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function nz(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function Oq(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function rz(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(q)=>typeof q==="string"&&Z.some((K)=>K?.id===q);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((q)=>q?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function dz(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=Oq(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function Wq({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,q]=C(()=>({loading:!j,error:null,data:j})),[K,L]=C(()=>j?.leafId||null),[Q,V]=C(""),F=g(null),N=g(null),H=g(j?.leafId||null),z=g(null),E=g(""),U=async()=>{q((J)=>({...J,loading:!0,error:null}));try{let J=G?`?chat_jid=${encodeURIComponent(G)}`:"",M=await fetch(`/agent/session-tree${J}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),D=await M.json().catch(()=>({}));if(!M.ok)throw Error(D?.error||`HTTP ${M.status}`);q({loading:!1,error:null,data:D})}catch(J){q((M)=>({loading:!1,error:J?.message||"Failed to load tree.",data:M?.data||j||null}))}};z.current=U,u(()=>{U()},[G]);let k=Y0(()=>{let J=Y.data;if(!J||!Array.isArray(J.nodes)||J.nodes.length===0)return[];return hz(J.flat?lz(J.nodes):J.nodes)},[Y.data]);u(()=>{let J=rz(k,K,H.current,Y.data?.leafId||null);if(J!==K)L(J);if(H.current&&Y.data?.leafId===H.current)H.current=null},[k,K,Y.data?.leafId]);let A=Y0(()=>{let J=(Q||"").trim().toLowerCase();if(!J)return k;return k.filter((M)=>{return[M.preview,M.toolInput,M.toolInputFull,M.detail,M.toolName,M.role,M.id,M.resultDetail,M.type,M.label].some((y)=>typeof y==="string"&&y.toLowerCase().includes(J))})},[k,Q]),O=Y0(()=>A.find((J)=>J.id===K)||null,[A,K]),T=Y0(()=>dz(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);u(()=>{if(N.current)N.current.scrollIntoView({block:"center",behavior:"auto"})},[K,Y.data?.leafId,A.length]),u(()=>{let J=Oq(X?.preview);if(J?.targetId)H.current=J.targetId;let M=T?.refreshDelays||[];if(!M.length)return;let D=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(E.current===D)return;E.current=D;let y=M.map((I)=>setTimeout(()=>z.current?.(),I));return()=>y.forEach((I)=>clearTimeout(I))},[G,X?.type,X?.submittedAt,X?.preview,T?.refreshDelays]);let x=(J=!1)=>{let M=O?.id,D=nz(M,J);if(!D)return;H.current=D.navigateTargetId,$?.({kind:"widget.submit",payload:D},_)},W=T?.tone||"info";return B`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>U()} disabled=${Y.loading}>${Y.loading?"Loading…":"Refresh"}</button>
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
                    ${T?.text&&B`<span class=${`session-tree-host-update ${W}`}>${T.text}</span>`}
                    ${Y.data?.capped&&B`<span class="session-tree-meta">Showing ${Y.data?.nodes?.length||0} of ${Y.data?.total||0}</span>`}
                    ${G&&B`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Y.loading&&A.length===0&&!Q&&B`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&A.length===0&&!Q&&B`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&A.length===0&&Q&&B`<div class="session-tree-empty">No entries match \u201c${Q}\u201d</div>`}
                    ${A.map((J)=>{let M=K===J.id,D=`st-row${J.active?" active":""}${M?" selected":""}`,y=(J.children||[]).length>1,I=pz(J);return B`
                            <button key=${J.id} ref=${J.active||M?N:null}
                                class=${D} type="button" role="treeitem" aria-selected=${M}
                                onClick=${()=>L(J.id)}>
                                <span class="st-indent" style=${`width:${(J.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${J.active?" active":y?" branch":""}`}></span>
                                <span class=${`st-tag ${I.tagClass}`}>${I.tag}</span>
                                <span class="st-text">${I.text}</span>
                                ${J.merged&&J.resultLength>0&&B`<span class="st-size">${zq(J.resultLength)}</span>`}
                                ${!J.merged&&J.contentLength>3000&&B`<span class="st-size">${zq(J.contentLength)}</span>`}
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
                                <div class="st-side-label">Result${O.resultLength?` (${G5(O.resultLength)})`:""}</div>
                                <pre class="st-side-code">${O.resultDetail}</pre>
                            </div>
                        `}
                        ${O.detail&&!O.toolInput&&B`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.role==="toolResult"?"Output":"Content"}${O.contentLength?` (${G5(O.contentLength)})`:""}</div>
                                <pre class="st-side-code">${O.detail}</pre>
                            </div>
                        `}
                        ${O.rawDetail&&B`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${O.rawContentLength?` (${G5(O.rawContentLength)})`:""}</div>
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
                                    ${O.contentLength>0&&B`<span class="st-pill">${G5(O.contentLength)} content</span>`}
                                    ${O.hasThinking&&B`<span class="st-pill thinking">${G5(O.thinkingLength)} thinking</span>`}
                                    ${O.merged&&O.resultLength>0&&B`<span class="st-pill">${G5(O.resultLength)} result</span>`}
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
    `}function Jq({widget:_,onClose:$,onWidgetEvent:j}){let G=g(null),Z=g(!1),X=Y0(()=>Dq(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(u(()=>{if(!_)return;let U=(k)=>{if(k.key==="Escape")$?.()};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[_,$]),u(()=>{Z.current=!1},[X]),u(()=>{if(!_)return;let U=G.current;if(!U)return;let k=(W)=>{let J=h2(_),M=W==="widget.init"?c2(_):l2(_);Q9(U,J),F9(U,{__piclawGeneratedWidgetHost:!0,type:W,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M})},A=()=>{k("widget.init"),k("widget.update")},O=()=>{Z.current=!0,A()};U.addEventListener("load",O);let x=[0,40,120,300,800].map((W)=>setTimeout(A,W));return()=>{U.removeEventListener("load",O),x.forEach((W)=>clearTimeout(W))}},[X,_?.widgetId,_?.toolCallId,_?.turnId]),u(()=>{if(!_)return;let U=G.current;if(!U?.contentWindow)return;let k=h2(_),A=l2(_);Q9(U,k),F9(U,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:A});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),u(()=>{if(!_)return;let U=(k)=>{let A=k?.data;if(!A||A.__piclawGeneratedWidget!==!0)return;let O=G.current,T=H1(_),x=H1({widgetId:A.widgetId,toolCallId:A.toolCallId});if(x&&T&&x!==T)return;if(!x&&O?.contentWindow&&k.source!==O.contentWindow)return;j?.(A,_)};return window.addEventListener("message",U),()=>window.removeEventListener("message",U)},[_,j]),!_)return null;let q=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",L=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",Q=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",F=Q==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",N=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",H=!X,z=Eq(_),E=Bq(_);return B`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(U)=>U.stopPropagation()}
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
                    ${q==="session_tree"?B`<${Wq} widget=${_} onWidgetEvent=${j} />`:H?B`<div class="floating-widget-empty">${z}</div>`:B`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${K}
                                    name=${h2(_)}
                                    sandbox=${E}
                                    referrerpolicy="no-referrer"
                                    srcdoc=${X}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}T0();z2();g_();e4();var oz=new Set,Aq=new Set,B9=new Set,U4=new Map,kq=!1,p2=null;function iz(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function Mq(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return X_.register(_),oz.add(_.id),!0}function sz(_){return Mq(_)}function az(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return R$(_),Aq.add(_.id),C7(),()=>{JX(_.id),Aq.delete(_.id),C7()}}function tz(_){if(typeof _!=="function")return()=>{};return B9.add(_),()=>{B9.delete(_)}}function yq(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...B9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function ez(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return U4.set(_.id,_),()=>{if(U4.get(_.id)===_)U4.delete(_.id)}}function n2(_,$){for(let j of Array.from(U4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function Tq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return U4.get($)?.label||null}function wq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return U4.get($)?.note||null}function xq(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=U4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function _O(){return{registerPane:sz,registerWorkspacePane:Mq,registerSettingsPane:az,registerStandaloneTabUrlResolver:tz,registerAttachmentPreview:ez}}function U9(_=typeof window<"u"?window:null){let $=_O();if(!_||kq)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},kq=!0,$}async function Iq(_=typeof window<"u"?window:null){if(!_)return;if(p2)return p2;return p2=(async()=>{U9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=iz(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(q){console.warn("[addon-web] Failed to load installed addon web entry:",Y,q)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),p2}var $O=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),jO=new Set(["text/markdown"]),GO=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),ZO=new Set(["application/eml","message/rfc822"]);function v$(_){return typeof _==="string"?_.trim().toLowerCase():""}function XO(_){let $=v$(_);return!!$&&$.endsWith(".eml")}function YO(_){let $=v$(_);return!!$&&$.endsWith(".pdf")}function qO(_){let $=v$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var KO=new Set(["application/zip","application/x-zip-compressed"]);function LO(_){let $=v$(_);return!!$&&$.endsWith(".zip")}function VO(_){let $=v$(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function QO(_){let $=v$(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")}function K6(_,$){let j=n2(_,$);if(j?.id)return j.id;let G=v$(_);if(YO($)||G==="application/pdf")return"pdf";if(qO($)||GO.has(G))return"office";if(XO($)||ZO.has(G))return"eml";if(LO($)||KO.has(G))return"archive";if(VO($)||G==="text/html")return"html";if(QO($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if($O.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function Cq(_){let $=v$(_);return jO.has($)}function r2(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"archive":return"ZIP archive preview";default:return Tq(_)||"Preview unavailable"}}var FO=new TextDecoder("utf-8",{fatal:!1});function Z5(_,$){return _[$]|_[$+1]<<8}function H4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function Pq(_,$,j){return FO.decode(_.subarray($,$+j))}function NO(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(H4(_,j)===101010256)return j;return-1}function BO(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(H4(_,G)===117853008)return!0;return!1}function UO(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function HO(_){return String(_||"").replace(/\\/g,"/").trim()}function Rq(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function fq(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=NO($);if(j<0)throw Error("ZIP archive directory could not be found.");if(BO($,j))throw Error("ZIP64 archives are not previewable yet.");let G=Z5($,j+10),Z=H4($,j+12),X=H4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],q=X,K=X+Z;while(q<K){if(q+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(H4($,q)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let V=Z5($,q+8),F=Z5($,q+10),N=H4($,q+20),H=H4($,q+24),z=Z5($,q+28),E=Z5($,q+30),U=Z5($,q+32),k=q+46,A=k+z+E,O=A+U;if(O>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let T=(V&2048)===2048,x=HO(Pq($,k,z)),W=Pq($,A,U),J=x.endsWith("/");if(x)Y.push({path:x,isDirectory:J,compressedSize:N,uncompressedSize:H,compressionMethod:F,comment:T?W:W});q=O}Y.sort((V,F)=>{if(V.isDirectory!==F.isDirectory)return V.isDirectory?-1:1;return V.path.localeCompare(F.path)});let L=Y.filter((V)=>!V.isDirectory),Q=UO(Y);return{entries:Y,summary:{fileCount:L.length,directoryCount:Q.size,totalEntries:Y.length,compressedBytes:L.reduce((V,F)=>V+F.compressedSize,0),uncompressedBytes:L.reduce((V,F)=>V+F.uncompressedSize,0)}}}function Sq(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var EO="allow-scripts";function DO(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function zO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function OO(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function WO(_,$=null,j=null){let G=_?.metadata?.size,Z=_?.content_type||"application/octet-stream",X=j?.summary||null;return[{label:"Type",value:Z},{label:"Syntax",value:$},{label:"Entries",value:X?String(X.totalEntries):null},{label:"Files",value:X?String(X.fileCount):null},{label:"Folders",value:X?String(X.directoryCount):null},{label:"Compressed",value:X?i_(X.compressedBytes):null},{label:"Uncompressed",value:X?i_(X.uncompressedBytes):null},{label:"Savings",value:Sq(X)},{label:"Size",value:typeof G==="number"?i_(G):null},{label:"Added",value:_?.created_at?Q4(_.created_at):null}].filter((Y)=>Y.value)}function JO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function AO(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=P1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function uq({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=Y0(()=>n2($?.content_type,G),[$?.content_type,G]),X=Y0(()=>K6($?.content_type,G),[$?.content_type,G]),Y=Z?.label||r2(X),q=Y0(()=>Cq($?.content_type),[$?.content_type]),[K,L]=C(X==="text"||X==="html"||X==="archive"),[Q,V]=C(""),[F,N]=C(null),[H,z]=C(null),E=g(null),U=Y0(()=>JO($,G),[$,G]),k=Y0(()=>U?LZ(U):null,[U]),A=Y0(()=>WO($,!q?k:null,F),[$,q,k,F]),O=Y0(()=>Z?xq(Z.id,_,G):AO(_,G,X),[Z,_,G,X]),T=Y0(()=>wq(Z?.id||X),[Z?.id,X]),x=Y0(()=>{if(!q||!Q)return"";return t_(Q)},[q,Q]),W=Y0(()=>{if(q||!Q||!U)return"";return e6(Q,U)},[q,Q,U]);return u(()=>{let J=(M)=>{if(M.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),u(()=>{if(!E.current||!x)return;L$(E.current);return},[x]),u(()=>{let J=!1;async function M(){if(X!=="text"&&X!=="html"&&X!=="archive"){L(!1),z(null),V(""),N(null);return}L(!0),z(null),V(""),N(null);try{let D=await q7(_),y=new Uint8Array(await D.arrayBuffer());if(X==="text"||X==="html"){if(X==="text"&&zO($,G)&&!DO(y))throw Error("Attachment does not appear to contain text content.");let R=OO(y);if(!J)V(R);return}let I=fq(y);if(!J)N(I)}catch(D){if(!J){let y=D instanceof Error?D.message:String(D||"Unknown error");z(X==="archive"?`Failed to load ZIP preview. ${y}`:`Failed to load text preview. ${y}`)}}finally{if(!J)L(!1)}}return M(),()=>{J=!0}},[_,X]),B`
        <${P$} className="attachment-preview-portal-root">
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
                                href=${P1(_)}
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
                        ${!K&&H&&B`<div class="attachment-preview-state">${H}</div>`}
                        ${!K&&!H&&X==="image"&&B`
                            <img class="attachment-preview-image" src=${P1(_)} alt=${G} />
                        `}
                        ${!K&&!H&&X==="video"&&B`
                            <video class="attachment-preview-video" src=${P1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!K&&!H&&X==="html"&&B`
                            <iframe class="attachment-preview-frame" srcdoc=${Q||""} sandbox=${EO} title=${G}></iframe>
                        `}
                        ${!K&&!H&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&O&&B`
                            <iframe class="attachment-preview-frame" src=${O} title=${G}></iframe>
                        `}
                        ${!K&&!H&&T&&B`
                            <div class="attachment-preview-readonly-note">${T}</div>
                        `}
                        ${!K&&!H&&X==="archive"&&F&&B`
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
                                                    <td>${J.isDirectory?"—":Rq(J.compressionMethod)}</td>
                                                    <td>${J.isDirectory?"—":i_(J.compressedSize)}</td>
                                                    <td>${J.isDirectory?"—":i_(J.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!K&&!H&&X==="text"&&q&&B`
                            <div
                                ref=${E}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:x}}
                            />
                        `}
                        ${!K&&!H&&X==="text"&&!q&&W&&B`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:W}} /></pre>
                        `}
                        ${!K&&!H&&X==="text"&&!q&&!W&&B`
                            <pre class="attachment-preview-text">${Q}</pre>
                        `}
                        ${!K&&!H&&X==="unsupported"&&B`
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
        </${P$}>
    `}T0();g_();k2();h7();function kO(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function MO(_){if(!_||typeof _!=="object")return!0;if(kO(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function yO(_){if(!Y6(_))return!1;if(!MO(_?.target))return!1;return!f$.some((j)=>N$(_,j.id))}function gq(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function TO(_){let $=[],j=new Map(u$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function bq(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function wO(_){if(_?.imageUrl)return B`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return B`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function d2(_,$){return B`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function xO(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function vq({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:q,onOpenVncTab:K,onToggleTerminalDock:L,onPrefillCompose:Q}){let[V,F]=C(!1),[N,H]=C(""),[z,E]=C(0),[U,k]=C([]),[A,O]=C({workspaceCommands:null,slashCommands:null}),T=g(null),x=g(null),W=P(async()=>{try{let y=await n5();O(g$(y?.settings))}catch{O({workspaceCommands:null,slashCommands:null})}},[]);u(()=>{W()},[W]),u(()=>{let y=!1;return p5($).then((I)=>{if(y)return;k(Array.isArray(I?.commands)?I.commands:[])}).catch(()=>{if(y)return;k([])}),()=>{y=!0}},[$]);let J=Y0(()=>TO({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:q,onOpenVncTab:K,onToggleTerminalDock:L}),[G,q,K,L,Z,j]),M=Y0(()=>VY({agents:_,workspaceCommands:J,slashCommands:U,settings:A,query:N}),[_,N,A,U,J]);if(u(()=>{if(M.length===0){E(-1);return}if(!N.trim()){E(0);return}let y=N.toLowerCase().replace(/^[@/]+/,"").trim();if(!y){E(0);return}let I=0,R=0;for(let S=0;S<M.length;S++){let v=M[S],c=(v.title||"").toLowerCase().replace(/^[@/]+/,"");if(c===y){I=S;break}let h=0;if(c.startsWith(y))h=3;else if(c.includes(y))h=2;else if((v.subtitle||"").toLowerCase().includes(y))h=1;if(h>R)R=h,I=S}E(I)},[M,N]),u(()=>{if(!V)return;requestAnimationFrame(()=>x.current?.focus?.())},[V]),u(()=>{let y=(R)=>{if(!V){if(!yO(R))return;R.preventDefault(),H(String(R.key||"")),E(0),F(!0);return}if(R.key==="Escape"){R.preventDefault(),F(!1),H("");return}if(R.key==="ArrowDown"){R.preventDefault(),E((S)=>M.length>0?(S+1+M.length)%M.length:0);return}if(R.key==="ArrowUp"){R.preventDefault(),E((S)=>M.length>0?(S-1+M.length)%M.length:0);return}if(R.key==="Enter"&&M[z]){R.preventDefault();let S=M[z],v=R.altKey;if(S){if(S.kind==="agent"&&S.chatJid)if(v)xO(S.chatJid);else X?.(S.chatJid);else if(S.kind==="workspace"&&S.commandId){if(S.commandId==="toggle-workspace"||S.commandId==="open-explorer")Y?.();if(S.commandId==="toggle-chat-only")gq(G);if(S.commandId==="open-terminal-tab")q?.();if(S.commandId==="open-vnc-tab")K?.();if(S.commandId==="toggle-terminal-dock")L?.();if(S.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(S.kind==="slash"&&S.commandName)Q?.(S.commandName)}F(!1),H("")}},I=(R)=>{if(!V)return;if(T.current?.contains(R.target))return;F(!1),H("")};return window.addEventListener("keydown",y,!0),document.addEventListener("pointerdown",I,!0),()=>{window.removeEventListener("keydown",y,!0),document.removeEventListener("pointerdown",I,!0)}},[G,z,M,q,K,Q,X,L,Y,V]),u(()=>{let y=(I)=>{let R=g$(I?.detail?.settings);if(I?.detail?.settings){O(R);return}W()};return window.addEventListener("focus",y),window.addEventListener("piclaw:quick-actions-settings-updated",y),()=>{window.removeEventListener("focus",y),window.removeEventListener("piclaw:quick-actions-settings-updated",y)}},[W]),!V)return null;let D=null;return B`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${T}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${x}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${N}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(y)=>{H(y.currentTarget?.value||""),E(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${d2("Move","↑↓")}
                                ${d2("Select","↵")}
                                ${d2("Pop out","Alt+↵")}
                                ${d2("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${M.length===0&&B`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${M.map((y,I)=>{let R=y.kind!==D;return D=y.kind,B`
                                ${R&&B`<div class="timeline-quick-actions-section">${bq(y.kind)}</div>`}
                                <button
                                    key=${y.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${y.kind}${I===z?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(y.kind==="agent"&&y.chatJid)X?.(y.chatJid);if(y.kind==="workspace"&&y.commandId==="toggle-workspace")Y?.();if(y.kind==="workspace"&&y.commandId==="open-explorer")Y?.();if(y.kind==="workspace"&&y.commandId==="toggle-chat-only")gq(G);if(y.kind==="workspace"&&y.commandId==="open-terminal-tab")q?.();if(y.kind==="workspace"&&y.commandId==="open-vnc-tab")K?.();if(y.kind==="workspace"&&y.commandId==="toggle-terminal-dock")L?.();if(y.kind==="workspace"&&y.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(y.kind==="slash"&&y.commandName)Q?.(y.commandName);F(!1),H("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${wO(y)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${y.title}</span>
                                            ${y.actionHint?B`<span class="timeline-quick-actions-item-action-hint">${y.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${y.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${y.categoryLabel||bq(y.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}T0();function mq({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[q,K]=C(!1),[L,Q]=C({top:8,left:8}),V=g(null),F=g(null),N=g(null);u(()=>{if(typeof document>"u")return;let U=document.createElement("div");return U.className="timeline-menu-portal in-chat",document.body.appendChild(U),N.current=U,()=>{U.remove(),N.current=null}},[]),u(()=>{let U=()=>{if(_){let O=document.querySelector(".workspace-sidebar");if(O){let T=O.getBoundingClientRect();Q({top:T.top+8,left:T.left+8})}}else Q({top:8,left:8})};U();let k=new ResizeObserver(U),A=document.querySelector(".workspace-sidebar");if(A)k.observe(A);return window.addEventListener("resize",U),()=>{k.disconnect(),window.removeEventListener("resize",U)}},[_]),u(()=>{if(N.current)N.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),u(()=>{if(!N.current)return;let U=N.current.style;U.top=`${L.top}px`,U.left=`${L.left}px`,U.right="auto"},[L]),u(()=>{if(!q)return;let U=(k)=>{if(V.current?.contains(k.target))return;if(F.current?.contains(k.target))return;K(!1)};return document.addEventListener("mousedown",U,!0),()=>document.removeEventListener("mousedown",U,!0)},[q]),u(()=>{if(!q)return;let U=(k)=>{if(k.key==="Escape")K(!1)};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[q]),u(()=>{K(!1)},[_]);let H=P((U)=>{K(!1),U?.()},[]),z=P(()=>{let U=new URL(window.location.href);if(j)U.searchParams.delete("chat_only");else U.searchParams.set("chat_only","1");window.location.href=U.toString()},[j]),E=B`
        <button ref=${F} class=${`timeline-menu-btn${q?" active":""}`}
            onClick=${()=>K((U)=>!U)} title="Menu" aria-label="Menu"
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
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>H($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&B`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>H(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>H(z)}>
                    ${j?"Exit chat-only mode":"Chat-only mode"}
                </button>

                ${(G||Z||X)&&B`<div class="workspace-menu-separator"></div>`}
                ${G&&B`<button class="workspace-menu-item" role="menuitem" onClick=${()=>H(G)}>Open terminal in tab</button>`}
                ${Z&&B`<button class="workspace-menu-item" role="menuitem" onClick=${()=>H(Z)}>Open VNC in tab</button>`}
                ${X&&B`<button class="workspace-menu-item" role="menuitem" onClick=${()=>H(X)}>${Y?"Hide terminal dock":"Show terminal dock"}</button>`}

                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>H(()=>window.dispatchEvent(new CustomEvent("piclaw:open-settings")))}>Settings</button>
            </div>
        `}
    `;return S4(()=>{if(N.current)G$(E,N.current)}),null}T0();g_();var cq="PiClaw";function H9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,q=X[Y],K=G.trim().toLowerCase(),L=typeof $==="string"?$.trim():"",Q=L?L:null,V=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Z,color:q,image:Q||(V?"/static/icon-192.png":null)}}function lq(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function hq(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function pq(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",q=X?.dataset?.tint||"",K=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(K&&(q||Y&&Y!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function E9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function IO(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function nq(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return IO($[1].trim())||null}function rq(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=E9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=E9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=E9(j.command),Y=nq(X);if(Y)return Y;if(Array.isArray(j.commands))for(let q of j.commands){let K=nq(q);if(K)return K}return null}var CO=B`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,PO=B`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,RO=B`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,fO=1e4;function SO(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function uO(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function gO(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function bO(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function dq(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return C$(_)!==null}function oq(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&H2(_)!==null}function vO(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=fO}function mO(_,$=Date.now()){if(!dq(_))return null;let j=C$(_);if(j===null||!vO(j,$))return null;let G=iq(new Date(j).toISOString(),$);return G?`${G} ago`:null}function cO(_,$=Date.now()){if(!oq(_))return null;if(H2(_)===null)return null;return $6(_,$)}function lO(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=_?.title,Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function iq(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function D9({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:q=new Set,onExtensionPanelAction:K,turnId:L,steerQueued:Q,onPanelToggle:V,showCorePanels:F=!0,showExtensionPanels:N=!0}){let E=(_0)=>{if(!_0)return{text:"",totalLines:0,fullText:""};if(typeof _0==="string"){let c0=_0,e=c0?c0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:c0,totalLines:e,fullText:c0}}let O0=_0.text||"",A0=_0.fullText||_0.full_text||O0,I0=Number.isFinite(_0.totalLines)?_0.totalLines:A0?A0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:O0,totalLines:I0,fullText:A0}},U=160,k=(_0)=>String(_0||"").replace(/<\/?internal>/gi,""),A=(_0)=>{if(!_0)return 1;return Math.max(1,Math.ceil(_0.length/160))},O=(_0,O0,A0)=>{let I0=(_0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!I0)return{text:"",omitted:0,totalLines:Number.isFinite(A0)?A0:0,visibleLines:0};let c0=I0.split(`
`),e=c0.length>O0?c0.slice(0,O0).join(`
`):I0,p=Number.isFinite(A0)?A0:c0.reduce((Z0,E0)=>Z0+A(E0),0),a=e?e.split(`
`).reduce((Z0,E0)=>Z0+A(E0),0):0,j0=Math.max(p-a,0);return{text:e,omitted:j0,totalLines:p,visibleLines:a}},T=E(j),x=E(G),W=E($),J=Boolean(T.text)||T.totalLines>0,M=Boolean(x.text)||x.totalLines>0,D=Boolean(W.fullText?.trim()||W.text?.trim()),y=Boolean(_||D||J||M||Z||X),I=Array.isArray(Y)&&Y.length>0,[R,S]=C(new Set),[v,c]=C(null),[h,$0]=C(()=>Date.now()),b=(_0)=>S((O0)=>{let A0=new Set(O0),I0=!A0.has(_0);if(I0)A0.add(_0);else A0.delete(_0);if(typeof V==="function")V(_0,I0);return A0});u(()=>{S(new Set),c(null)},[L]),u(()=>{if(!(Array.isArray(Y)&&Y.some((A0)=>A0?.started_at||A0?.last_activity_at)))return;let O0=setInterval(()=>$0(Date.now()),1000);return()=>clearInterval(O0)},[Y]);let t=Y0(()=>uO(R),[R]);u(()=>{if(!t||typeof document>"u")return;let _0=(O0)=>{if(O0?.defaultPrevented)return;if(O0?.key!=="Escape")return;if(O0?.altKey||O0?.ctrlKey||O0?.metaKey||O0?.shiftKey)return;let A0=O0?.target;if(A0 instanceof Element){if(A0.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(A0.isContentEditable)return}if(S((I0)=>{if(!(I0 instanceof Set)||!I0.has(t))return I0;let c0=new Set(I0);return c0.delete(t),c0}),typeof V==="function")V(t,!1);O0.preventDefault?.(),O0.stopPropagation?.()};return document.addEventListener("keydown",_0),()=>document.removeEventListener("keydown",_0)},[t,V]);let s=Q$(_),q0=Boolean(_?.last_activity||_?.lastActivity),X0=Y0(()=>dq(_),[_]),H0=Y0(()=>oq(_),[_]),B0=Y0(()=>rq(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[K0,D0]=C(null);u(()=>{if(!Boolean(H0||_?.retry_at||_?.retryAt||X0))return;$0(Date.now());let O0=setInterval(()=>$0(Date.now()),1000);return()=>clearInterval(O0)},[X0,H0,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),u(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!B0){D0(null);return}let O0=!0;return K7(B0).then((A0)=>{if(!O0)return;if(A0?.branch)D0({branch:A0.branch,repoPath:A0.repo_path||null,path:B0});else D0(null)}).catch(()=>{if(O0)D0(null)}),()=>{O0=!1}},[_?.type,B0]);let Q0=_?.turn_id||L,k0=pq(Q0),d=g2({steerQueued:Q}),G0=(_0)=>_0,x0=hY(_,{isLastActivity:q0}),y0=v2(_,{isLastActivity:q0}),C0=v2(null,{pendingRequest:!0}),n0=(_0)=>_0==="warning"?"#f59e0b":_0==="error"?"var(--danger-color)":_0==="success"?"var(--success-color)":k0,j_=X?.kind||"info",P0=n0(j_),d0=n0(_?.kind||(s?"warning":"info")),w0=lO(_,{isLastActivity:q0}),s0=mO(_,h),S0=K0?.repoPath||"",t0=K0?.branch||"",V_=K0?bO(S0,t0):"",E_=SO(_?.status_hints||_?.statusHints),l0=Y0(()=>gO(E_),[E_]),u0=Y0(()=>l0.filter((_0)=>_0?.key==="ssh"),[l0]),f0=Y0(()=>l0.filter((_0)=>_0?.key!=="ssh"),[l0]);if((!F||!y)&&(!N||!I))return null;let a0=({panelTitle:_0,text:O0,fullText:A0,totalLines:I0,maxLines:c0,titleClass:e,panelKey:p})=>{let a=R.has(p),j0=A0||O0||"",Z0=p==="thought"||p==="draft"?k(j0):j0,E0=typeof c0==="number",v0=a&&E0,o0=E0?O(Z0,c0,I0):{text:Z0||"",omitted:0,totalLines:Number.isFinite(I0)?I0:0};if(!Z0&&!(Number.isFinite(o0.totalLines)&&o0.totalLines>0))return null;let J0=`agent-thinking-body${E0?" agent-thinking-body-collapsible":""}`,R0=E0?`--agent-thinking-collapsed-lines: ${c0};`:"",q_=p==="thought"||p==="draft"?yZ(Z0):v5(Z0);return B`
            <div
                class="agent-thinking"
                data-expanded=${a?"true":"false"}
                data-collapsible=${E0?"true":"false"}
                style=${k0?`--turn-color: ${k0};`:""}
            >
                <div class="agent-thinking-title ${e||""}">
                    ${k0&&B`<span class=${d} aria-hidden="true"></span>`}
                    ${_0}
                    ${v0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${_0} panel`}
                            onClick=${()=>b(p)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${J0}
                    style=${R0}
                    dangerouslySetInnerHTML=${{__html:q_}}
                />
                ${!a&&o0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>b(p)}>
                        ▸ ${o0.omitted} more lines
                    </button>
                `}
                ${a&&o0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>b(p)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},F_=Z?.tool_call?.title,z_=F_?`Awaiting approval: ${F_}`:"Awaiting approval",L0=cO(_,h),W0=(_0,O0,A0=null)=>{let I0=E2(_0),c0=WX(_0,h),e=[A0,c0].filter(Boolean).join(" · "),p=g2({steerQueued:Q,pulsing:Q$(_0)||Boolean(c0)});return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${O0?`--turn-color: ${O0};`:""}
                title=${_0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${O0&&B`<span class=${p} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${I0}</span>
                    ${e&&B`<span class="agent-status-elapsed">${e}</span>`}
                </div>
                ${_0.detail&&B`<div class="agent-thinking-body">${_0.detail}</div>`}
            </div>
        `},b0=(_0,O0,A0,I0,c0,e,p,a=8,j0=8)=>{let Z0=Math.max(c0-I0,0.000000001),E0=Math.max(O0-a*2,1),v0=Math.max(A0-j0*2,1),o0=Math.max(p-e,1),J0=p===e?O0/2:a+(_0.run-e)/o0*E0,R0=j0+(v0-(_0.value-I0)/Z0*v0);return{x:J0,y:R0}},N_=(_0,O0,A0,I0,c0,e,p,a=8,j0=8)=>{if(!Array.isArray(_0)||_0.length===0)return"";return _0.map((Z0,E0)=>{let{x:v0,y:o0}=b0(Z0,O0,A0,I0,c0,e,p,a,j0);return`${E0===0?"M":"L"} ${v0.toFixed(2)} ${o0.toFixed(2)}`}).join(" ")},k_=(_0,O0="")=>{if(!Number.isFinite(_0))return"—";return`${Math.abs(_0)>=100?_0.toFixed(0):_0.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${O0}`},e0=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],D_=(_0,O0)=>{let A0=e0;if(!Array.isArray(A0)||A0.length===0)return"var(--accent-color)";if(A0.length===1||!Number.isFinite(O0)||O0<=1)return A0[0];let c0=Math.max(0,Math.min(Number.isFinite(_0)?_0:0,O0-1))/Math.max(1,O0-1)*(A0.length-1),e=Math.floor(c0),p=Math.min(A0.length-1,e+1),a=c0-e,j0=A0[e],Z0=A0[p];if(!Z0||e===p||a<=0.001)return j0;if(a>=0.999)return Z0;let E0=Math.round((1-a)*1000)/10,v0=Math.round(a*1000)/10;return`color-mix(in oklab, ${j0} ${E0}%, ${Z0} ${v0}%)`},B_=(_0,O0="autoresearch")=>{let A0=Array.isArray(_0)?_0.map((J0)=>({...J0,points:Array.isArray(J0?.points)?J0.points.filter((R0)=>Number.isFinite(R0?.value)&&Number.isFinite(R0?.run)):[]})).filter((J0)=>J0.points.length>0):[],I0=A0.map((J0,R0)=>({...J0,color:D_(R0,A0.length)}));if(I0.length===0)return null;let c0=320,e=120,p=I0.flatMap((J0)=>J0.points),a=p.map((J0)=>J0.value),j0=p.map((J0)=>J0.run),Z0=Math.min(...a),E0=Math.max(...a),v0=Math.min(...j0),o0=Math.max(...j0);return B`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${I0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${c0} ${e}`} preserveAspectRatio="none" aria-hidden="true">
                        ${I0.map((J0)=>{let R0=J0?.key||J0?.label||"series",q_=v?.panelKey===O0&&v?.seriesKey===R0;return B`
                                <g key=${R0}>
                                    <path
                                        class=${`agent-series-chart-line${q_?" is-hovered":""}`}
                                        d=${N_(J0.points,c0,e,Z0,E0,v0,o0)}
                                        style=${`--agent-series-color: ${J0.color};`}
                                        onMouseEnter=${()=>c({panelKey:O0,seriesKey:R0})}
                                        onMouseLeave=${()=>c((K_)=>K_?.panelKey===O0&&K_?.seriesKey===R0?null:K_)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${I0.flatMap((J0)=>{let R0=typeof J0?.unit==="string"?J0.unit:"",q_=J0?.key||J0?.label||"series";return J0.points.map((K_,G_)=>{let U_=b0(K_,c0,e,Z0,E0,v0,o0);return B`
                                    <button
                                        key=${`${q_}-point-${G_}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${J0.color}; left:${U_.x/c0*100}%; top:${U_.y/e*100}%;`}
                                        onMouseEnter=${()=>c({panelKey:O0,seriesKey:q_,run:K_.run,value:K_.value,unit:R0})}
                                        onMouseLeave=${()=>c((T_)=>T_?.panelKey===O0?null:T_)}
                                        onFocus=${()=>c({panelKey:O0,seriesKey:q_,run:K_.run,value:K_.value,unit:R0})}
                                        onBlur=${()=>c((T_)=>T_?.panelKey===O0?null:T_)}
                                        aria-label=${`${J0?.label||"Series"} ${k_(K_.value,R0)} at run ${K_.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${I0.map((J0)=>{let R0=J0.points[J0.points.length-1]?.value,q_=typeof J0?.unit==="string"?J0.unit:"",K_=J0?.key||J0?.label||"series",G_=v?.panelKey===O0&&v?.seriesKey===K_?v:null,U_=G_&&Number.isFinite(G_.value)?G_.value:R0,T_=G_&&typeof G_.unit==="string"?G_.unit:q_,Z_=G_&&Number.isFinite(G_.run)?G_.run:null;return B`
                            <div key=${`${K_}-legend`} class=${`agent-series-legend-item${G_?" is-hovered":""}`} style=${`--agent-series-color: ${J0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${J0.color};`}></span>
                                <span class="agent-series-legend-label">${J0?.label||"Series"}</span>
                                ${Z_!==null&&B`<span class="agent-series-legend-run">run ${Z_}</span>`}
                                <span class="agent-series-legend-value">${k_(U_,T_)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},O_=(_0)=>{if(!_0)return null;let O0=typeof _0?.key==="string"?_0.key:`panel-${Math.random()}`,A0=R.has(O0),I0=_0?.title||"Extension status",c0=_0?.collapsed_text||"",e=String(_0?.state||"").replace(/[-_]+/g," ").replace(/^./,(U_)=>U_.toUpperCase()),p=n0(_0?.state==="completed"?"success":_0?.state==="failed"?"error":_0?.state==="stopped"?"warning":"info"),a=g2({steerQueued:Q,pulsing:_0?.state==="running"}),j0=typeof _0?.detail_markdown==="string"?_0.detail_markdown.trim():"",Z0=typeof _0?.last_run_text==="string"?_0.last_run_text.trim():"",E0=typeof _0?.tmux_command==="string"?_0.tmux_command.trim():"",v0=Array.isArray(_0?.series)?_0.series:[],o0=Array.isArray(_0?.actions)?_0.actions:[],J0=_0?.started_at?$6(_0,h):null,R0=c0,q_=Boolean(j0||E0||J0),K_=Boolean(j0||v0.length>0||E0),G_=[I0,R0].filter(Boolean).join(" — ");return B`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${A0?"true":"false"}
                style=${p?`--turn-color: ${p};`:""}
                title=${!A0?G_||I0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>K_?b(O0):null}
                    >
                        ${p&&B`<span class=${a} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${I0}</span>
                        ${R0&&B`<span class="agent-thinking-title-meta">${R0}</span>`}
                        ${J0&&B`<span class="agent-status-elapsed">${J0}</span>`}
                    </button>
                    ${(o0.length>0||K_)&&B`
                        <div class="agent-thinking-tools-inline">
                            ${o0.length>0&&B`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${o0.map((U_)=>{let T_=`${O0}:${U_?.key||""}`,Z_=q?.has?.(T_);return B`
                                            <button
                                                key=${T_}
                                                class=${`agent-thinking-action-btn${U_?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.(_0,U_)}
                                                disabled=${Boolean(Z_)}
                                            >
                                                ${Z_?"Working…":U_?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${K_&&B`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${A0?"Collapse":"Expand"} ${I0}`}
                                    title=${A0?"Collapse details":"Expand details"}
                                    onClick=${()=>b(O0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        ${A0?B`<polyline points="4 6 8 10 12 6"></polyline>`:B`<polyline points="4 10 8 6 12 10"></polyline>`}
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${A0&&B`
                    <div class=${`agent-thinking-autoresearch-layout${q_?"":" chart-only"}`}>
                        ${q_&&B`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${J0&&B`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${J0}</span>
                                        ${_0?.last_activity_at&&_0?.state==="running"&&B`<span title="Since last activity">⟳ ${iq(_0.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${j0&&B`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:v5(j0)}}
                                    />
                                `}
                                ${E0&&B`
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
                                                onClick=${()=>K?.(_0,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${CO}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${v0.length>0?B`
                                <div class="agent-series-chart-stack">
                                    ${B_(v0,O0)}
                                    ${Z0&&B`<div class="agent-series-chart-note">${Z0}</div>`}
                                </div>
                            `:B`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${F&&X&&W0(X,P0)}
            ${N&&Array.isArray(Y)&&Y.map((_0)=>O_(_0))}
            ${F&&_?.type==="intent"&&W0(_,d0,L0)}
            ${F&&Z&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${k0?`--turn-color: ${k0};`:""}>
                    ${C0==="dot"&&B`<span class=${d} aria-hidden="true"></span>`}
                    ${C0==="spinner"&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${z_}</span>
                </div>
            `}
            ${F&&J&&a0({panelTitle:G0("Planning"),text:T.text,fullText:T.fullText,totalLines:T.totalLines,panelKey:"plan"})}
            ${F&&D&&a0({panelTitle:G0("Draft"),text:W.text,fullText:W.fullText,totalLines:W.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${F&&M&&a0({panelTitle:G0("Thoughts"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${F&&_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${q0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${V_||E_.length>0||s0?" agent-status-multiline":""}`} aria-live="polite" style=${k0?`--turn-color: ${k0};`:""}>
                    ${k0&&x0&&B`<span class=${d} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:y0==="spinner"&&B`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${w0}</span>
                        ${(V_||l0.length>0||s0)&&B`
                            <span class="agent-status-meta-row">
                                ${u0.map((_0)=>B`
                                    <span key=${_0.key} class="agent-status-hint-row" title=${_0.title||_0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:_0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${_0.label}</span>
                                    </span>
                                `)}
                                ${V_&&B`
                                    <span class="agent-status-git-row" title=${B0||V_}>
                                        <span class="agent-status-git-icon">${PO}</span>
                                        <span class="agent-status-git-label">
                                            ${S0&&B`<span class="agent-status-git-part">${S0}</span>`}
                                            ${S0&&t0&&B`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${t0&&B`<span class="agent-status-git-part">${t0}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${f0.map((_0)=>B`
                                    <span key=${_0.key} class="agent-status-hint-row" title=${_0.title||_0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:_0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${_0.label}</span>
                                    </span>
                                `)}
                                ${s0&&B`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${q0?"Recent activity":"Last event"} ${s0}`}>
                                        <span class="agent-status-hint-icon">${RO}</span>
                                        <span class="agent-status-hint-label">${s0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function sq({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",q=G?.kind||"other",K=G?.rawInput||{},L=K.command||K.commands&&K.commands[0]||null,Q=K.diff||null,V=K.fileName||K.path||null,F=G?.description||K.description||K.explanation||null,H=(Array.isArray(G?.locations)?G.locations:[]).map((A)=>A?.path).filter((A)=>Boolean(A)),z=Array.from(new Set([V,...H].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let E=async(A)=>{try{await s4(j,A,X||null),$()}catch(O){console.error("Failed to respond to agent request:",O)}},U=async()=>{try{await X7(Y,`Auto-approved: ${Y}`),await s4(j,"approved",X||null),$()}catch(A){console.error("Failed to add to whitelist:",A)}},k=Z&&Z.length>0;return B`
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
                        <button class="agent-request-btn always-allow" onClick=${U}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}T0();T0();g_();function L6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>L6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${L6(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function aq(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:L6(j)})).filter(($)=>$.value)}function hO(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function z9(_){if(!Array.isArray(_))return[];return _.filter(hO)}function o2(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=L6(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=aq(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function tq(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=aq(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):L6(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function C_(_){return typeof _==="string"?_.trim():""}function eq(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function pO(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let q=C_(X.type);if(q==="text"){let K=C_(X.text)||C_(X.content);if(K)j.push(K);return}if(q==="resource_link"){let K=C_(X.uri),L=C_(X.title)||C_(X.name)||K;if(K&&L)j.push(L===K?K:`[${L}](${K})`);return}if(q==="resource"){let K=C_(X.title)||C_(X.name)||C_(X.uri)||"Embedded resource",L=C_(X.text);if(L)j.push(`### ${K}

\`\`\`
${L}
\`\`\``);else j.push(`### ${K}`);return}if(q==="generated_widget"){let K=C_(X.title)||C_(X.name)||"Generated widget",L=C_(X.description)||C_(X.subtitle);j.push(eq([`### ${K}`,L]));return}if(q==="adaptive_card"&&C_(X.fallback_text)){j.push(C_(X.fallback_text));return}if(q==="adaptive_card_submission"){let K=o2(X);if(C_(K))j.push(C_(K));return}if(q==="file"){let K=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${K}`);return}if(q==="image"||!q){let K=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${K}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return eq(j)}function i2(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return pO(G,Z)}function _K(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function $K(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function jK(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(_K(j,"aria-disabled","true"),_K(j,"tabindex","-1"),"disabled"in j)$K(j,"disabled");if("readOnly"in j)$K(j,"readOnly")}}function nO(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function rO(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function GK(_){return nO(_)||rO(_)}function s2(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function dO(_,$){let j=Math.max(s2(_),s2($)),G=Math.min(s2(_),s2($));return(j+0.05)/(G+0.05)}function oO(_,$,j="#ffffff"){let G=GK(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let q=GK(Y);if(!q)continue;let K=dO(G,q);if(K>X)Z=Y,X=K}return Z}function O9(){let _=getComputedStyle(document.documentElement),$=(H,z)=>{for(let E of H){let U=_.getPropertyValue(E).trim();if(U)return U}return z},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),L=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),N=oO(q,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:q,good:K,warning:L,attention:Q,border:V,fontFamily:F,buttonTextColor:N}}function ZK(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:q,border:K,fontFamily:L}=O9();return{fontFamily:L,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var iO=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),XK=!1,a2=null,YK=!1;function W9(_){_.querySelector(".adaptive-card-notice")?.remove()}function sO(_,$,j="error"){W9(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function aO(_,$=(j)=>t_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function tO(_=($)=>t_($,null)){return($,j)=>{try{let G=aO($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function eO(_){if(YK||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=tO(),YK=!0}async function _W(){if(XK)return;if(a2)return a2;return a2=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{XK=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),a2}function $W(){return globalThis.AdaptiveCards}function jW(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function GW(_){return iO.has(_)}function A9(_){if(!Array.isArray(_))return[];return _.filter(jW)}function ZW(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function J9(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>J9($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${J9(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function XW(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return J9($);return typeof $==="string"?$:String($)}function YW(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((q)=>G(q));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=XW(Y.type,j[Y.id],Y);for(let[q,K]of Object.entries(Y))if(Array.isArray(K)||K&&typeof K==="object")Y[q]=G(K);return Y};return G(_)}function qW(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function KW(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=qW(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function qK(_,$,j){if(!GW($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await _W()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=$W();eO(G);let Z=new G.AdaptiveCard,X=O9();Z.hostConfig=new G.HostConfig(ZK());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:YW($.payload,Y);Z.parse(q),Z.onExecuteAction=(Q)=>{let V=ZW(Q);if(j?.onAction)W9(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let N=F instanceof Error?F.message:String(F||"Action failed.");sO(_,N||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let K=Z.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let L=KW($);if(L){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=L.label,Q.appendChild(V),L.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=L.detail,Q.appendChild(F)}_.appendChild(Q)}if(W9(_),_.appendChild(K),L)jK(K);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}T0();z2();function KK({src:_,onClose:$}){return u(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <${P$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${P$}>
    `}var t2=0,k9=null,V6={activePostId:null,speaking:!1},M9=new Set;function T9(_={}){return _.window??(typeof window<"u"?window:null)}function LK(_={}){return T9(_)?.speechSynthesis||null}function y9(){let _={...V6};for(let $ of M9)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function w9(){return{...V6}}function VK(_){if(typeof _!=="function")return()=>{};return M9.add(_),_(w9()),()=>M9.delete(_)}function QK(_={}){let $=T9(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function FK(_){let $=i2(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function NK(_={}){let $=LK(_);if(t2+=1,k9=null,V6={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}y9()}function BK(_,$,j={}){let G=T9(j),Z=LK(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=t2+1;t2=Y;try{Z.cancel()}catch{}let q=new G.SpeechSynthesisUtterance(X);k9=q,V6={activePostId:_,speaking:!0},y9();let K=()=>{if(Y!==t2)return;k9=null,V6={activePostId:null,speaking:!1},y9()};q.onend=K,q.onerror=K;try{return Z.speak(q),!0}catch(L){return console.warn("[post-speech] speak failed:",L),K(),!1}}async function HK(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function x9(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(q)=>{let K=q?.clipboardData;if(!K||typeof K.setData!=="function")return;if(K.setData("text/plain",j),G)K.setData("text/html",G);if(typeof q.preventDefault==="function")q.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let q=_.execCommand("copy");return Boolean(X||q)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function UK(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function EK(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let K=Z.getRangeAt(0);if(K&&typeof K.intersectsNode==="function")X=Boolean(K.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let K=UK(Z.anchorNode),L=UK(Z.focusNode);X=Boolean(K&&G.contains(K)||L&&G.contains(L))}if(!X)return!1;let q=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!q)return!1;return j.setData("text/plain",q),_?.preventDefault?.(),!0}function DK(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function zK(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function OK(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function LW({mediaId:_,onPreview:$}){let[j,G]=C(null);if(u(()=>{V2(_).then(G).catch((L)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,L)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?i_(X):"",K=K6(j.content_type,j.filename)!=="unsupported";return B`
        <div class="file-attachment" onClick=${(L)=>L.stopPropagation()}>
            <a href=${P1(_)} download=${Z} class="file-attachment-main">
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
    `}function VW(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function QW(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function FW(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function NW(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function BW(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function WK(_){let $=NW(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():BW(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function UW(_,$){let j=WK($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var HW={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function EW(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=HW[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function DW(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function zW({marker:_}){let[$,j]=C(!1),G=P((V)=>{V.stopPropagation(),j((F)=>!F)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",q=_?.draft_recovered,K=String(_?.severity||"warning"),L=Y||Z||String(_?.label||_?.kind||"issue"),Q=Boolean(X||Z&&Y);return B`
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
    `}function OW({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=C(null);u(()=>{if(!Number.isFinite(j))return;V2(j).then(Z).catch((Q)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,Q)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?P1(j):null,q=K6(G?.content_type,G?.filename||_?.label),K=r2(q),L=q!=="unsupported";return B`
        <span class="attachment-pill" title=${X}>
            ${Y?B`
                    <a href=${Y} download=${X} class="attachment-pill-main" onClick=${(Q)=>Q.stopPropagation()}>
                        <${M1}
                            prefix="post"
                            label=${_.label}
                            title=${X}
                        />
                    </a>
                `:B`
                    <${M1}
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
    `}function e2({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?Q4(G):null;return B`
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
    `}function WW({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?i_(_.size):"",Z=_.mime_type||"",X=kW(Z),Y=X4(_.uri);return B`
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
    `}function JW({block:_}){let[$,j]=C(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return B`
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
    `}function AW({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=N9(_,$),Z=Fq(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",q=G?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",L=g(!1),Q=(V)=>{if(V)V.preventDefault(),V.stopPropagation();if(!G)return;j?.(G)};return u(()=>{if(!_?.auto_open||!G||!Z||L.current)return;let V=$?.timestamp?new Date($.timestamp).getTime():0;if(V&&Date.now()-V>1e4)return;let F=`widget_opened_${_.widget_id||$?.id||""}`;if(DK(sessionStorage,F))return;L.current=!0,zK(sessionStorage,F,"1"),j?.(G)},[_?.auto_open,G,Z]),B`
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
    `}function kW(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function MW(_){let $=X4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function yW({preview:_}){let $=X4(_.url),j=MW(_.image),G=OK(_.site_name,$);return B`
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
    `}function TW(_,$){return typeof _==="string"?_:""}var JK=1800,wW=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,xW=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,IW=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,CW=`
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
</style>`;async function AK(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(x9(document,{text:$}))return!0;if(await HK(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function PW(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=t_($,null),G=`<html><head>${CW}</head><body>${j}</body></html>`;if(x9(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return AK($)}function RW(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let q=window.getSelection?.();if(!q||q.isCollapsed)return;for(let K of $)if(EK(Y,{root:K,selection:q}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,q)=>{let K=q||"idle";if(Y.dataset.copyState=K,K==="success")Y.innerHTML=xW,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(K==="error")Y.innerHTML=IW,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=wW,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",X(K,"idle"),q.appendChild(K);let L=async(Q)=>{Q.preventDefault(),Q.stopPropagation();let F=Y.querySelector("code")?.textContent||"",N=await AK(F);X(K,N?"success":"error");let H=j.get(K);if(H)clearTimeout(H);let z=setTimeout(()=>{X(K,"idle"),j.delete(K)},JK);j.set(K,z)};K.addEventListener("click",L),G.push(()=>{K.removeEventListener("click",L);let Q=j.get(K);if(Q)clearTimeout(Q);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{G.forEach((Y)=>Y())}}function fW(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function SW(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Files:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=fW(L.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X),K=[...Y,...q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Z}}function uW(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Referenced messages:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let V=L.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X),K=[...Y,...q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Z}}function gW(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1){let Q=j[L].trim();if((Q==="Images:"||Q==="Attachments:")&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=L.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let F=V[1],N=(V[2]||"").trim()||F;Z.push({id:F,label:N,raw:Q})}else Z.push({id:null,label:Q,raw:Q})}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),q=j.slice(X),K=[...Y,...q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Z}}function bW(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function vW(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(bW).sort((Q,V)=>V.length-Q.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),q=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),K=[],L;while(L=q.nextNode())K.push(L);for(let Q of K){let V=Q.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let F=Q.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let N=V.split(Z).filter((z)=>z!=="");if(N.length===0)continue;let H=Y.createDocumentFragment();for(let z of N)if(X.test(z)){let E=Y.createElement("mark");E.className="search-highlight-term",E.textContent=z,H.appendChild(E)}else H.appendChild(Y.createTextNode(z));Q.parentNode.replaceChild(H,Q)}return Y.body.innerHTML}function kK({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:q,userAvatarUrl:K,userAvatarBackground:L,onDelete:Q,isThreadReply:V,isThreadPrev:F,isThreadNext:N,isRemoving:H,highlightQuery:z,onFileRef:E,onOpenWidget:U,onOpenAttachmentPreview:k}){let[A,O]=C(null),[T,x]=C("idle"),[W,J]=C(()=>w9()),M=g(null),D=g(null),y=_.data,I=y.type==="agent_response",R=q||"You",S=I?X||cq:R,v=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",c=Boolean(I&&z&&v&&v!==S),h=I?H9(X,Y,!0):H9(R,K),$0=typeof L==="string"?L.trim().toLowerCase():"",b=!I&&h.image&&($0==="clear"||$0==="transparent"),t=I&&Boolean(h.image),s=`background-color: ${b||t?"transparent":h.color}`,q0=y.content_meta,X0=Boolean(q0?.truncated),H0=Boolean(q0?.preview),B0=X0&&!H0,K0=X0?{originalLength:Number.isFinite(q0?.original_length)?q0.original_length:y.content?y.content.length:0,maxLength:Number.isFinite(q0?.max_length)?q0.max_length:0}:null,D0=y.content_blocks||[],Q0=y.media_ids||[],k0=WK(D0),d=Boolean(k0?.sourceAgentName),G0=TW(y.content,y.link_previews);G0=UW(G0,D0);let{content:x0,fileRefs:y0}=SW(G0),{content:C0,messageRefs:n0}=uW(x0),j_=(r)=>{r?.preventDefault?.(),r?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},P0=(r)=>{if(r.key==="Enter"||r.key===" ")j_(r)},{content:d0,attachments:w0}=gW(C0);G0=d0;let s0=A9(D0),S0=z9(D0),V_=VW(D0)[0]||null,l0=QW(D0)[0]||null,f0=FW(D0)[0]||null,a0=s0.length===1&&typeof s0[0]?.fallback_text==="string"?s0[0].fallback_text.trim():"",F_=S0.length===1?o2(S0[0]).trim():"",z_=Boolean(a0)&&G0?.trim()===a0||Boolean(F_)&&G0?.trim()===F_,L0=Boolean(G0)&&!B0&&!z_,W0=typeof z==="string"?z.trim():"",b0=Y0(()=>{if(!G0||z_)return"";let r=t_(G0,j);return W0?vW(r,W0):r},[G0,z_,W0]),N_=Y0(()=>i2(_),[_]),k_=Y0(()=>QK(),[]),e0=Y0(()=>FK(_),[_]),D_=Boolean(W.speaking&&W.activePostId===_.id),B_=(r,z0)=>{r.stopPropagation(),O(P1(z0))},O_=(r)=>{k?.(r)},_0=(r)=>{r.stopPropagation(),Q?.(_)},O0=async(r)=>{r.stopPropagation();let z0=await PW(N_);if(x(z0?"success":"error"),D.current)clearTimeout(D.current);D.current=setTimeout(()=>{D.current=null,x("idle")},JK)},A0=(r)=>{if(r.stopPropagation(),D_){NK();return}BK(_.id,e0)},I0=(r,z0)=>{let m0=new Set;if(!r||z0.length===0)return{content:r,usedIds:m0};return{content:r.replace(/attachment:([^\s)"']+)/g,(f_,W_,p_,d1)=>{let n_=W_.replace(/^\/+/,""),Q1=z0.find((m_)=>m_.name&&m_.name.toLowerCase()===n_.toLowerCase()&&!m0.has(m_.id))||z0.find((m_)=>!m0.has(m_.id));if(!Q1)return f_;if(m0.add(Q1.id),d1.slice(Math.max(0,p_-2),p_)==="](")return`/media/${Q1.id}`;return Q1.name||"attachment"}),usedIds:m0}},c0=[],e=[],p=[],a=[],j0=[],Z0=[],E0=[],v0=0;if(D0.length>0)D0.forEach((r)=>{if(r?.type==="text"&&r.annotations)E0.push(r.annotations);if(r?.type==="generated_widget")Z0.push(r);else if(r?.type==="resource_link")a.push(r);else if(r?.type==="resource")j0.push(r);else if(r?.type==="file"){let z0=Q0[v0++];if(z0)e.push(z0),p.push({id:z0,name:r?.name||r?.filename||r?.title})}else if(r?.type==="image"||!r?.type){let z0=Q0[v0++];if(z0){let m0=typeof r?.mime_type==="string"?r.mime_type:void 0;c0.push({id:z0,annotations:r?.annotations,mimeType:m0}),p.push({id:z0,name:r?.name||r?.filename||r?.title})}}});else if(Q0.length>0){let r=w0.length>0;Q0.forEach((z0,m0)=>{let h0=w0[m0]||null;if(p.push({id:z0,name:h0?.label||null}),r)e.push(z0);else c0.push({id:z0,annotations:null})})}if(w0.length>0)w0.forEach((r)=>{if(!r?.id)return;let z0=p.find((m0)=>String(m0.id)===String(r.id));if(z0&&!z0.name)z0.name=r.label});let{content:o0,usedIds:J0}=I0(G0,p);G0=o0;let R0=c0.filter(({id:r})=>!J0.has(r)),q_=e.filter((r)=>!J0.has(r)),K_=w0.length>0?w0.map((r,z0)=>({id:r.id||`attachment-${z0+1}`,label:r.label||`attachment-${z0+1}`})):p.map((r,z0)=>({id:r.id,label:r.name||`attachment-${z0+1}`})),G_=Y0(()=>A9(D0),[D0]),U_=Y0(()=>z9(D0),[D0]),T_=Y0(()=>{return G_.map((r)=>`${r.card_id}:${r.state}`).join("|")},[G_]);u(()=>{if(!M.current)return;return L$(M.current),RW(M.current)},[b0]),u(()=>{return VK((r)=>{J(r)})},[]),u(()=>()=>{if(D.current)clearTimeout(D.current)},[]);let Z_=g(null);return u(()=>{if(!Z_.current||G_.length===0)return;let r=Z_.current;r.innerHTML="";for(let z0 of G_){let m0=document.createElement("div");r.appendChild(m0),qK(m0,z0,{onAction:async(h0)=>{if(h0.type==="Action.OpenUrl"){let f_=X4(h0.url||"");if(!f_)throw Error("Invalid URL");window.open(f_,"_blank","noopener,noreferrer");return}if(h0.type==="Action.Submit"){await Z7({post_id:_.id,thread_id:y.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:z0.card_id,action:{type:h0.type,title:h0.title||"",data:h0.data}});return}console.warn("[post] unsupported adaptive card action:",h0.type,h0)}}).catch((h0)=>{console.error("[post] adaptive card render error:",h0),m0.textContent=z0.fallback_text||"Card failed to render."})}},[T_,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${I?"agent-post":""} ${V?"thread-reply":""} ${F?"thread-prev":""} ${N?"thread-next":""} ${H?"removing":""}" onClick=${$}>
            <div class="post-avatar ${I?"agent-avatar":""} ${h.image?"has-image":""}" style=${s}>
                ${h.image?B`<img src=${h.image} alt=${S} />`:h.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${I&&k_&&e0&&B`
                        <button
                            class=${`post-action-btn post-speak-btn${D_?" is-active":""}`}
                            type="button"
                            title=${D_?"Stop reading aloud":"Read aloud"}
                            aria-label=${D_?"Stop reading aloud":"Read aloud"}
                            onClick=${A0}
                        >
                            ${D_?B`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:B`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${T==="success"?" is-success":T==="error"?" is-error":""}`}
                        type="button"
                        title=${T==="success"?"Copied":T==="error"?"Copy failed":"Copy message"}
                        aria-label=${T==="success"?"Copied":T==="error"?"Copy failed":"Copy message"}
                        onClick=${O0}
                        disabled=${!N_}
                    >
                        ${T==="success"?B`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:T==="error"?B`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:B`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
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
                    ${d&&B`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${k0?.sourceChatJid||""}`.trim()}
                        >
                            @${k0?.sourceAgentName}
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
                            onKeyDown=${P0}
                        >
                            @${v}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${j_}>${uZ(_.timestamp)}</a>
                    ${V_&&B`
                        <span
                            class="post-recovery-chip"
                            title=${EW(V_)}
                        >
                            recovered
                        </span>
                    `}
                    ${l0&&B`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${DW(l0)}
                        >
                            timeout
                        </span>
                    `}
                    ${f0&&B`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(f0.severity||"warning")}${f0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(f0.label||f0.kind||"issue")}
                        >
                            ${String(f0.label||f0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${f0&&B`
                    <${zW} marker=${f0} />
                `}
                ${B0&&K0&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${s5(K0.originalLength)} chars
                            ${K0.maxLength?B` • Display limit: ${s5(K0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${H0&&K0&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${s5(K0.maxLength)} of ${s5(K0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(y0.length>0||n0.length>0||K_.length>0)&&B`
                    <div class="post-file-refs">
                        ${n0.map((r)=>{let z0=(m0)=>{if(m0.preventDefault(),m0.stopPropagation(),Z)Z(r,_.chat_jid||null);else{let h0=document.getElementById("post-"+r);if(h0)h0.scrollIntoView({behavior:"smooth",block:"center"}),h0.classList.add("post-highlight"),setTimeout(()=>h0.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${r}`} class="post-msg-pill-link" onClick=${z0}>
                                    <${M1}
                                        prefix="post"
                                        label=${"msg:"+r}
                                        title=${"Message "+r}
                                        icon="message"
                                        onClick=${z0}
                                    />
                                </a>
                            `})}
                        ${y0.map((r)=>{let z0=r.split("/").pop()||r;return B`
                                <${M1}
                                    prefix="post"
                                    label=${z0}
                                    title=${r}
                                    onClick=${()=>E?.(r)}
                                />
                            `})}
                        ${K_.map((r)=>B`
                            <${OW}
                                key=${r.id}
                                attachment=${r}
                                onPreview=${O_}
                            />
                        `)}
                    </div>
                `}
                ${L0&&B`
                    <div 
                        ref=${M}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:b0}}
                        onClick=${(r)=>{if(r.target.classList.contains("hashtag")){r.preventDefault(),r.stopPropagation();let z0=r.target.dataset.hashtag;if(z0)j?.(z0)}else if(r.target.tagName==="IMG")r.preventDefault(),r.stopPropagation(),O(r.target.src)}}
                    />
                `}
                ${G_.length>0&&B`
                    <div ref=${Z_} class="post-adaptive-cards" />
                `}
                ${U_.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${U_.map((r,z0)=>{let m0=tq(r),h0=`${r.card_id}-${z0}`;return B`
                                <div key=${h0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${m0.title}</span>
                                        </div>
                                    </div>
                                    ${m0.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${m0.fields.map((f_)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${f_.key}: ${f_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${f_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${f_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${Q4(m0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${Z0.length>0&&B`
                    <div class="generated-widget-launches">
                        ${Z0.map((r,z0)=>B`
                            <${AW}
                                key=${r.widget_id||r.id||`${_.id}-widget-${z0}`}
                                block=${r}
                                post=${_}
                                onOpenWidget=${U}
                            />
                        `)}
                    </div>
                `}
                ${E0.length>0&&B`
                    ${E0.map((r,z0)=>B`
                        <${e2} key=${z0} annotations=${r} />
                    `)}
                `}
                ${R0.length>0&&B`
                    <div class="media-preview">
                        ${R0.map(({id:r,mimeType:z0})=>{let h0=typeof z0==="string"&&z0.toLowerCase().startsWith("image/svg")?P1(r):Y7(r);return B`
                                <img 
                                    key=${r} 
                                    src=${h0} 
                                    alt="Media" 
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(f_)=>B_(f_,r)}
                                />
                            `})}
                    </div>
                `}
                ${R0.length>0&&B`
                    ${R0.map(({annotations:r},z0)=>B`
                        ${r&&B`<${e2} key=${z0} annotations=${r} />`}
                    `)}
                `}
                ${q_.length>0&&B`
                    <div class="file-attachments">
                        ${q_.map((r)=>B`
                            <${LW} key=${r} mediaId=${r} onPreview=${O_} />
                        `)}
                    </div>
                `}
                ${a.length>0&&B`
                    <div class="resource-links">
                        ${a.map((r,z0)=>B`
                            <div key=${z0}>
                                <${WW} block=${r} />
                                <${e2} annotations=${r.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${j0.length>0&&B`
                    <div class="resource-embeds">
                        ${j0.map((r,z0)=>B`
                            <div key=${z0}>
                                <${JW} block=${r} />
                                <${e2} annotations=${r.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${y.link_previews.map((r,z0)=>B`
                            <${yW} key=${z0} preview=${r} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${A&&B`<${KK} src=${A} onClose=${()=>O(null)} />`}

    `}function MK({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:q,onOpenWidget:K,onOpenAttachmentPreview:L,emptyMessage:Q,timelineRef:V,agents:F,user:N,onDeletePost:H,reverse:z=!0,removingPostIds:E,searchQuery:U}){let[k,A]=C(!1),O=g(null),T=typeof IntersectionObserver<"u",x=P(async()=>{if(!j||!$||k)return;A(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{A(!1)}},[$,k,j]),W=P((v)=>{let{scrollTop:c,scrollHeight:h,clientHeight:$0}=v.target,b=z?h-$0-c:c,t=Math.max(300,$0);if(b<t)x()},[z,x]);u(()=>{if(!T)return;let v=O.current,c=V?.current;if(!v||!c)return;let h=300,$0=new IntersectionObserver((b)=>{for(let t of b){if(!t.isIntersecting)continue;x()}},{root:c,rootMargin:`${h}px 0px ${h}px 0px`,threshold:0});return $0.observe(v),()=>$0.disconnect()},[T,$,j,V,x]);let J=g(x);if(J.current=x,u(()=>{if(T)return;if(!V?.current)return;let{scrollTop:v,scrollHeight:c,clientHeight:h}=V.current,$0=z?c-h-v:v,b=Math.max(300,h);if($0<b)J.current?.()},[T,_,$,z,V]),u(()=>{if(!V?.current)return;if(!$||k)return;let{scrollTop:v,scrollHeight:c,clientHeight:h}=V.current,$0=z?c-h-v:v,b=Math.max(300,h);if(c<=h+1||$0<b)J.current?.()},[_,$,k,z,V]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let M=_.slice().sort((v,c)=>v.id-c.id),D=(v)=>{let c=v?.data?.thread_id;if(c===null||c===void 0||c==="")return null;let h=Number(c);return Number.isFinite(h)?h:null},y=new Map;for(let v=0;v<M.length;v+=1){let c=M[v],h=Number(c?.id),$0=D(c);if($0!==null){let b=y.get($0)||{anchorIndex:-1,replyIndexes:[]};b.replyIndexes.push(v),y.set($0,b)}else if(Number.isFinite(h)){let b=y.get(h)||{anchorIndex:-1,replyIndexes:[]};b.anchorIndex=v,y.set(h,b)}}let I=new Map;for(let[v,c]of y.entries()){let h=new Set;if(c.anchorIndex>=0)h.add(c.anchorIndex);for(let $0 of c.replyIndexes)h.add($0);I.set(v,Array.from(h).sort(($0,b)=>$0-b))}let R=M.map((v,c)=>{let h=D(v);if(h===null)return{hasThreadPrev:!1,hasThreadNext:!1};let $0=I.get(h);if(!$0||$0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let b=$0.indexOf(c);if(b<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:b>0,hasThreadNext:b<$0.length-1}}),S=B`<div class="timeline-sentinel" ref=${O}></div>`;return B`
        <div class="timeline ${z?"reverse":"normal"}" ref=${V} onScroll=${W}>
            <div class="timeline-content">
                ${z?S:null}
                ${M.map((v,c)=>{let h=Boolean(v.data?.thread_id&&v.data.thread_id!==v.id),$0=E?.has?.(v.id),b=R[c]||{};return B`
                    <${kK}
                        key=${v.id}
                        post=${v}
                        isThreadReply=${h}
                        isThreadPrev=${b.hasThreadPrev}
                        isThreadNext=${b.hasThreadNext}
                        isRemoving=${$0}
                        highlightQuery=${U}
                        agentName=${lq(v.data?.agent_id,F||{})}
                        agentAvatarUrl=${hq(v.data?.agent_id,F||{})}
                        userName=${N?.name||N?.user_name}
                        userAvatarUrl=${N?.avatar_url||N?.avatarUrl||N?.avatar}
                        userAvatarBackground=${N?.avatar_background||N?.avatarBackground}
                        onClick=${()=>G?.(v)}
                        onHashtagClick=${Z}
                        onMessageRef=${X}
                        onScrollToMessage=${Y}
                        onFileRef=${q}
                        onOpenWidget=${K}
                        onDelete=${H}
                        onOpenAttachmentPreview=${L}
                    />
                `})}
                ${z?null:S}
            </div>
        </div>
    `}T0();g_();function yK(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var _8="workspaceExplorerScale",mW=["compact","default","comfortable"],cW=new Set(mW),lW={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function TK(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return cW.has(j)?j:$}function I9(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function hW(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function pW(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function C9(_={}){let $=hW(_),j=_.stored?TK(_.stored,$):$;return pW(j,_)}function wK(_){return lW[TK(_)]}m7();function nW(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function P9(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function xK(_,$,j={}){let G=j.resolvePane;if(P9(_,G))return!0;return nW($)}var fK=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function rW(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return P9($,(j)=>X_.resolve(j))}function SK(_,$,j,G=0,Z=[]){if(!j&&fK(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)SK(X,$,j,G+1,Z);return Z}function IK(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&fK(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function u9(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((q)=>[q?.path,q])):new Map,X=!j||j.length!==G.length,Y=G.map((q)=>{let K=u9(Z.get(q.path),q);if(K!==Z.get(q.path))X=!0;return K});return X?{...$,children:Y}:_}function f9(_,$,j){if(!_)return _;if(_.path===$)return u9(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=f9(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var uK=4,R9=14,dW=16;function gK(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=gK(G);return _.__bytes=j,j}function bK(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=uK)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let q of Z){let K=Math.max(0,Number(q?.__bytes??q?.size??0));if(K<=0)continue;if(q.type==="dir")X.push({kind:"dir",node:q,size:K});else X.push({kind:"file",name:q.name,path:q.path,size:K})}X.sort((q,K)=>K.size-q.size);let Y=X;if(X.length>R9){let q=X.slice(0,R9-1),K=X.slice(R9-1),L=K.reduce((Q,V)=>Q+V.size,0);q.push({kind:"other",name:`+${K.length} more`,path:`${G.path}/[other]`,size:L}),Y=q}return G.children=Y.map((q)=>{if(q.kind==="dir")return bK(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),G}function CK(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function vK(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function $8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function g9(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,q=X-Z>Y?Z+Y:X,K=$8(_,$,G,Z),L=$8(_,$,G,q),Q=$8(_,$,j,q),V=$8(_,$,j,Z),F=q-Z>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${G} ${G} 0 ${F} 1 ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var mK={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function cK(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(q,K,L,Q)=>{let V=Array.isArray(q?.children)?q.children:[];if(!V.length)return;let F=Math.max(0,Number(q.size)||0);if(F<=0)return;let N=L-K,H=K;V.forEach((z,E)=>{let U=Math.max(0,Number(z.size)||0);if(U<=0)return;let k=U/F,A=H,O=E===V.length-1?L:H+N*k;if(H=O,O-A<0.003)return;let T=mK[Q];if(T){let x=vK(A,Q,j);if(G.push({key:z.path,path:z.path,label:z.name,size:U,color:x,depth:Q,startAngle:A,endAngle:O,innerRadius:T[0],outerRadius:T[1],d:g9(120,120,T[0],T[1],A,O)}),Q===1)Z.push({key:z.path,name:z.name,size:U,pct:X>0?U/X*100:0,color:x})}if(Q<uK)Y(z,A,O,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function S9(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=S9(G,$);if(Z)return Z}return null}function lK(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=mK[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,q=vK(X,1,G),L=`${$||"."}/[files]`;return{segments:[{key:L,path:L,label:_,size:j,color:q,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:g9(120,120,Z[0],Z[1],X,Y)}],legend:[{key:L,name:_,size:j,pct:100,color:q}]}}function PK(_,$=!1,j=!1){if(!_)return null;let G=gK(_),Z=bK(_,0),X=Z.size||G,{segments:Y,legend:q}=cK(Z,X,j);if(!Y.length&&X>0){let K=lK("[files]",Z.path,X,j);Y=K.segments,q=K.legend}return{root:Z,totalSize:X,segments:Y,legend:q,truncated:$,isDarkTheme:j}}function oW({payload:_}){if(!_)return null;let[$,j]=C(null),[G,Z]=C(_?.root?.path||"."),[X,Y]=C(()=>[_?.root?.path||"."]),[q,K]=C(!1);u(()=>{let D=_?.root?.path||".";Z(D),Y([D]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!G)return;K(!0);let D=setTimeout(()=>K(!1),180);return()=>clearTimeout(D)},[G]);let L=Y0(()=>{return S9(_.root,G)||_.root},[_?.root,G]),Q=L?.size||_.totalSize||0,{segments:V,legend:F}=Y0(()=>{let D=cK(L,Q,_.isDarkTheme);if(D.segments.length>0)return D;if(Q<=0)return D;let y=L?.children?.length?"Total":"[files]";return lK(y,L?.path||_?.root?.path||".",Q,_.isDarkTheme)},[L,Q,_.isDarkTheme,_?.root?.path]),[N,H]=C(V),z=g(new Map),E=g(0);u(()=>{let D=z.current,y=new Map(V.map((v)=>[v.key,v])),I=performance.now(),R=220,S=(v)=>{let c=Math.min(1,(v-I)/220),h=c*(2-c),$0=V.map((b)=>{let s=D.get(b.key)||{startAngle:b.startAngle,endAngle:b.startAngle,innerRadius:b.innerRadius,outerRadius:b.innerRadius},q0=(D0,Q0)=>D0+(Q0-D0)*h,X0=q0(s.startAngle,b.startAngle),H0=q0(s.endAngle,b.endAngle),B0=q0(s.innerRadius,b.innerRadius),K0=q0(s.outerRadius,b.outerRadius);return{...b,d:g9(120,120,B0,K0,X0,H0)}});if(H($0),c<1)E.current=requestAnimationFrame(S)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(S),z.current=y,()=>{if(E.current)cancelAnimationFrame(E.current)}},[V]);let U=N.length?N:V,k=Q>0?i_(Q):"0 B",A=L?.name||"",T=(A&&A!=="."?A:"Total")||"Total",x=k,W=X.length>1,J=(D)=>{if(!D?.path)return;let y=S9(_.root,D.path);if(!y||!Array.isArray(y.children)||y.children.length===0)return;Y((I)=>[...I,y.path]),Z(y.path),j(null)},M=()=>{if(!W)return;Y((D)=>{let y=D.slice(0,-1);return Z(y[y.length-1]||_?.root?.path||"."),y}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${L?.path||_?.root?.path||"."}`}
                data-segments=${U.length}
                data-base-size=${Q}>
                ${U.map((D)=>B`
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${T}</text>
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
    `}function RK(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function hK(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function iW(_){if(!_)return"Workspace index status";let $=[hK(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function sW(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function aW(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function tW(_,$=null){let j=sW(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:aW(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function pK({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:G,onOpenTerminalTab:Z,onOpenVncTab:X,onToggleTerminal:Y,terminalVisible:q=!1}){let[K,L]=C(null),[Q,V]=C(new Set(["."])),[F,N]=C(null),[H,z]=C(null),[E,U]=C(""),[k,A]=C(null),[,O]=C(null),[T,x]=C(!0),[W,J]=C(!1),[M,D]=C(null),[y,I]=C(()=>Y$("workspaceShowHidden",!1)),[R,S]=C(!1),[v,c]=C(null),[h,$0]=C(null),[b,t]=C(null),[s,q0]=C(!1),[X0,H0]=C(null),[B0,K0]=C(null),[D0,Q0]=C(null),[k0,d]=C(!1),[G0,x0]=C(()=>$5()),[y0,C0]=C(()=>CK()),[n0,j_]=C(()=>C9({stored:V1(_8),...I9()})),[P0,d0]=C(!1),w0=Math.max(15000,(Number(G0?.refreshIntervalSec)||60)*1000),s0=Math.max(0,Number(G0?.folderPreviewDepth)||0),S0=g(Q),t0=g(""),V_=g(null),E_=g(0),l0=g(new Set),u0=g(null),f0=g(null),a0=g(new Map),F_=g(_),z_=g(G),L0=g(null),W0=g(null),b0=g(null),N_=g(null),k_=g(null),e0=g(null),D_=g("."),B_=g(0),O_=g({path:null,dragging:!1,startX:0,startY:0}),_0=g({path:null,dragging:!1,startX:0,startY:0}),O0=g({path:null,timer:0}),A0=g(!1),I0=g(0),c0=g(new Map),e=g(null),p=g(null),a=g(null),j0=g(null),Z0=g(null),E0=g(null),v0=g(y),o0=g($),J0=g(j??$),R0=g(0),q_=g(b),K_=g(R),G_=g(v),U_=g(null),T_=g({x:0,y:0}),Z_=g(0),r=g(null),z0=g(F),m0=g(H),h0=g(null),f_=g(k);F_.current=_,z_.current=G,u(()=>{S0.current=Q},[Q]),u(()=>{v0.current=y},[y]),u(()=>{o0.current=$},[$]),u(()=>{J0.current=j??$},[j,$]),u(()=>{q_.current=b},[b]);let W_=P(()=>{if(!B_.current)return;clearTimeout(B_.current),B_.current=0},[]);u(()=>()=>W_(),[W_]),u(()=>{if(typeof window>"u")return;let f=()=>{j_(C9({stored:V1(_8),...I9()}))};f();let m=()=>f(),n=()=>f(),i=(U0)=>{if(!U0||U0.key===null||U0.key===_8)f()};window.addEventListener("resize",m),window.addEventListener("focus",n),window.addEventListener("storage",i);let N0=window.matchMedia?.("(pointer: coarse)"),V0=window.matchMedia?.("(hover: none)"),M0=(U0,i0)=>{if(!U0)return;if(U0.addEventListener)U0.addEventListener("change",i0);else if(U0.addListener)U0.addListener(i0)},g0=(U0,i0)=>{if(!U0)return;if(U0.removeEventListener)U0.removeEventListener("change",i0);else if(U0.removeListener)U0.removeListener(i0)};return M0(N0,m),M0(V0,m),()=>{window.removeEventListener("resize",m),window.removeEventListener("focus",n),window.removeEventListener("storage",i),g0(N0,m),g0(V0,m)}},[]),u(()=>{if(typeof window>"u")return;let f=()=>{x0($5())},m=(N0)=>{if(!N0||N0.key===null||N0.key===y2||N0.key===T2)f()},n=()=>f(),i=(N0)=>{let V0=N0?.detail?.settings;if(V0&&typeof V0==="object"){x0({refreshIntervalSec:Number(V0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(V0.folderPreviewDepth)||0)});return}f()};return window.addEventListener("focus",n),window.addEventListener("storage",m),window.addEventListener(M2,i),()=>{window.removeEventListener("focus",n),window.removeEventListener("storage",m),window.removeEventListener(M2,i)}},[]),u(()=>{let f=(m)=>{let n=m?.detail?.path;if(!n)return;let i=n.split("/"),N0=[];for(let V0=1;V0<i.length;V0++)N0.push(i.slice(0,V0).join("/"));if(N0.length)V((V0)=>{let M0=new Set(V0);M0.add(".");for(let g0 of N0)M0.add(g0);return M0});N(n),requestAnimationFrame(()=>{let V0=document.querySelector(`[data-path="${CSS.escape(n)}"]`);if(V0)V0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",f),()=>window.removeEventListener("workspace-reveal-path",f)},[]),u(()=>{K_.current=R},[R]),u(()=>{G_.current=v},[v]),u(()=>{z0.current=F},[F]),u(()=>{m0.current=H},[H]),u(()=>{f_.current=k},[k]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let f=()=>C0(CK());f();let m=window.matchMedia?.("(prefers-color-scheme: dark)"),n=()=>f();if(m?.addEventListener)m.addEventListener("change",n);else if(m?.addListener)m.addListener(n);let i=typeof MutationObserver<"u"?new MutationObserver(()=>f()):null;if(i?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)i?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(m?.removeEventListener)m.removeEventListener("change",n);else if(m?.removeListener)m.removeListener(n);i?.disconnect()}},[]),u(()=>{if(!H)return;let f=k_.current;if(!f)return;let m=requestAnimationFrame(()=>{yK(f)});return()=>cancelAnimationFrame(m)},[H]),u(()=>{if(!P0)return;let f=(n)=>{let i=n?.target;if(!(i instanceof Element))return;if(Z0.current?.contains(i))return;if(E0.current?.contains(i))return;d0(!1)},m=(n)=>{if(n?.key==="Escape")d0(!1),E0.current?.focus?.()};return document.addEventListener("mousedown",f),document.addEventListener("touchstart",f,{passive:!0}),document.addEventListener("keydown",m),()=>{document.removeEventListener("mousedown",f),document.removeEventListener("touchstart",f),document.removeEventListener("keydown",m)}},[P0]);let p_=async(f,m={})=>{let n=Boolean(m?.autoOpen),i=String(f||"").trim();J(!0),A(null),O(null);try{let N0=await Q7(i,20000);if(n&&i&&xK(i,N0,{resolvePane:(V0)=>X_.resolve(V0)}))return z_.current?.(i,N0),N0;return A(N0),N0}catch(N0){let V0={error:N0.message||"Failed to load preview"};return A(V0),V0}finally{J(!1)}};L0.current=p_;let d1=P(async()=>{try{let f=await L7("all");return Q0(f),f}catch(f){return console.warn("[workspace-explorer] Failed to load workspace index status:",f),null}},[]);f0.current=d1;let n_=P(()=>{f0.current?.()},[]),o1=async()=>{if(!o0.current)return;try{let f=await r5("",1,v0.current),m=IK(f.root,S0.current,v0.current);if(m===t0.current){x(!1);return}if(t0.current=m,V_.current=f.root,!E_.current)E_.current=requestAnimationFrame(()=>{E_.current=0,L((n)=>u9(n,V_.current)),x(!1)})}catch(f){D(f.message||"Failed to load workspace"),x(!1)}},Q1=async(f)=>{if(!f)return;if(l0.current.has(f))return;l0.current.add(f);try{let m=await r5(f,1,v0.current);L((n)=>f9(n,f,m.root))}catch(m){D(m.message||"Failed to load workspace")}finally{l0.current.delete(f)}};W0.current=Q1;let Y_=P(()=>{let f=F;if(!f)return".";let m=a0.current?.get(f);if(m&&m.type==="dir")return m.path;if(f==="."||!f.includes("/"))return".";let n=f.split("/");return n.pop(),n.join("/")||"."},[F]),m_=P((f)=>{let m=f?.closest?.(".workspace-row");if(!m)return null;let n=m.dataset.path,i=m.dataset.type;if(!n)return null;if(i==="dir")return n;if(n.includes("/")){let N0=n.split("/");return N0.pop(),N0.join("/")||"."}return"."},[]),$1=P((f)=>{return m_(f?.target||null)},[m_]),I_=P((f)=>{q_.current=f,t(f)},[]),c_=P(()=>{let f=O0.current;if(f?.timer)clearTimeout(f.timer);O0.current={path:null,timer:0}},[]),r_=P((f)=>{if(!f||f==="."){c_();return}let m=a0.current?.get(f);if(!m||m.type!=="dir"){c_();return}if(S0.current?.has(f)){c_();return}if(O0.current?.path===f)return;c_();let n=setTimeout(()=>{O0.current={path:null,timer:0},W0.current?.(f),V((i)=>{let N0=new Set(i);return N0.add(f),N0})},600);O0.current={path:f,timer:n}},[c_]),F1=P((f,m)=>{if(T_.current={x:f,y:m},Z_.current)return;Z_.current=requestAnimationFrame(()=>{Z_.current=0;let n=U_.current;if(!n)return;let i=T_.current;n.style.transform=`translate(${i.x+12}px, ${i.y+12}px)`})},[]),E1=P((f)=>{if(!f)return;let n=(a0.current?.get(f)?.name||f.split("/").pop()||f).trim();if(!n)return;$0({path:f,label:n})},[]),d_=P(()=>{if($0(null),Z_.current)cancelAnimationFrame(Z_.current),Z_.current=0;if(U_.current)U_.current.style.transform="translate(-9999px, -9999px)"},[]),l_=P((f)=>{if(!f)return".";let m=a0.current?.get(f);if(m&&m.type==="dir")return m.path;if(f==="."||!f.includes("/"))return".";let n=f.split("/");return n.pop(),n.join("/")||"."},[]),D1=P(()=>{z(null),U("")},[]),X1=P((f)=>{if(!f)return;let n=(a0.current?.get(f)?.name||f.split("/").pop()||f).trim();if(!n||f===".")return;z(f),U(n)},[]),z1=P(async()=>{let f=m0.current;if(!f)return;let m=(E||"").trim();if(!m){D1();return}let n=a0.current?.get(f),i=(n?.name||f.split("/").pop()||f).trim();if(m===i){D1();return}try{let V0=(await B7(f,m))?.path||f,M0=f.includes("/")?f.split("/").slice(0,-1).join("/")||".":".";if(D1(),D(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:f,newPath:V0,type:n?.type||"file"}})),n?.type==="dir")V((g0)=>{let U0=new Set;for(let i0 of g0)if(i0===f)U0.add(V0);else if(i0.startsWith(`${f}/`))U0.add(`${V0}${i0.slice(f.length)}`);else U0.add(i0);return U0});if(N(V0),n?.type==="dir")A(null),J(!1),O(null);else L0.current?.(V0);W0.current?.(M0),n_()}catch(N0){D(N0?.message||"Failed to rename file")}},[D1,E,n_]),i1=P(async(f)=>{let i=f||".";for(let N0=0;N0<50;N0+=1){let M0=`untitled${N0===0?"":`-${N0}`}.md`;try{let U0=(await N7(i,M0,""))?.path||(i==="."?M0:`${i}/${M0}`);if(i&&i!==".")V((i0)=>new Set([...i0,i]));N(U0),D(null),W0.current?.(i),L0.current?.(U0),n_();return}catch(g0){if(g0?.status===409||g0?.code==="file_exists")continue;D(g0?.message||"Failed to create file");return}}D("Failed to create file (untitled name already in use).")},[]),y1=P((f)=>{if(f?.stopPropagation?.(),s)return;let m=l_(z0.current);i1(m)},[s,l_,i1]);u(()=>{if(typeof window>"u")return;let f=(m)=>{let n=m?.detail?.updates||[];if(!Array.isArray(n)||n.length===0)return;L((g0)=>{let U0=g0;for(let i0 of n){if(!i0?.root)continue;if(!U0||i0.path==="."||!i0.path)U0=i0.root;else U0=f9(U0,i0.path,i0.root)}if(U0)t0.current=IK(U0,S0.current,v0.current);return x(!1),U0});let i=z0.current;if(Boolean(i)&&n.some((g0)=>{let U0=g0?.path||"";if(!U0||U0===".")return!0;return i===U0||i.startsWith(`${U0}/`)||U0.startsWith(`${i}/`)}))c0.current.clear();if(n_(),!i||!f_.current)return;let V0=a0.current?.get(i);if(V0&&V0.type==="dir")return;if(n.some((g0)=>{let U0=g0?.path||"";if(!U0||U0===".")return!0;return i===U0||i.startsWith(`${U0}/`)}))L0.current?.(i)};return window.addEventListener("workspace-update",f),()=>window.removeEventListener("workspace-update",f)},[]),u0.current=o1;let R1=g(()=>{if(typeof window>"u")return;let f=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=J0.current??o0.current,n=document.visibilityState!=="hidden"&&(m||f.matches&&o0.current);d5(n,v0.current).catch((i)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",i,{visible:n,showHidden:v0.current})})}).current,Y1=g(0),H5=g(()=>{if(Y1.current)clearTimeout(Y1.current);Y1.current=setTimeout(()=>{Y1.current=0,R1()},250)}).current;u(()=>{if(o0.current)u0.current?.(),f0.current?.();H5()},[$,j]),u(()=>{u0.current(),f0.current?.();let f=setInterval(()=>{u0.current(),f0.current?.()},w0);return()=>clearInterval(f)},[w0]),u(()=>{R1();let f=j4("previewHeight",null),m=Number.isFinite(f)?Math.min(Math.max(f,80),600):280;if(I0.current=m,b0.current)b0.current.style.setProperty("--preview-height",`${m}px`);let n=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),i=()=>H5();if(n.addEventListener)n.addEventListener("change",i);else if(n.addListener)n.addListener(i);return document.addEventListener("visibilitychange",i),()=>{if(E_.current)cancelAnimationFrame(E_.current),E_.current=0;if(n.removeEventListener)n.removeEventListener("change",i);else if(n.removeListener)n.removeListener(i);if(document.removeEventListener("visibilitychange",i),Y1.current)clearTimeout(Y1.current),Y1.current=0;d5(!1,v0.current).catch((N0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",N0,{showHidden:v0.current})})}},[]);let N1=Y0(()=>SK(K,Q,y),[K,Q,y]),W4=Y0(()=>new Map(N1.map((f)=>[f.node.path,f.node])),[N1]),J4=Y0(()=>wK(n0),[n0]);a0.current=W4;let M_=(F?a0.current.get(F):null)?.type==="dir";u(()=>{if(!F||!M_){K0(null),e.current=null,p.current=null;return}if(s0<=0){K0({loading:!1,error:null,payload:null,disabled:!0}),e.current=null,p.current=null;return}let f=F,m=`${y?"hidden":"visible"}:${s0}:${F}`,n=c0.current,i=n.get(m);if(i?.root){n.delete(m),n.set(m,i);let M0=PK(i.root,Boolean(i.truncated),y0);if(M0)e.current=M0,p.current=F,K0({loading:!1,error:null,payload:M0,disabled:!1});return}let N0=e.current,V0=p.current;K0({loading:!0,error:null,payload:V0===F?N0:null,disabled:!1}),r5(F,s0,y).then((M0)=>{if(z0.current!==f)return;let g0={root:M0?.root,truncated:Boolean(M0?.truncated)};n.delete(m),n.set(m,g0);while(n.size>dW){let i0=n.keys().next().value;if(!i0)break;n.delete(i0)}let U0=PK(g0.root,g0.truncated,y0);e.current=U0,p.current=F,K0({loading:!1,error:null,payload:U0,disabled:!1})}).catch((M0)=>{if(z0.current!==f)return;K0({loading:!1,error:M0?.message||"Failed to load folder size chart",payload:V0===F?N0:null,disabled:!1})})},[F,M_,y,y0,s0]);let j1=Boolean(k&&k.kind==="text"&&!M_&&(!k.size||k.size<=262144)),s1=j1?"Open in editor":k?.size>262144?"File too large to edit":"File is not editable",U$=Boolean(F&&!M_&&rW(F)),E5=Boolean(F&&F!=="."),D5=Boolean(F&&!M_),z5=Boolean(F&&!M_),H$=F&&M_?N2(F,y):null,A4=hK(D0),k4=iW(D0),p$=D0?.state||"never_indexed",O5=p$!=="ready",q1=P(()=>d0(!1),[]),S_=P(async(f)=>{q1();try{await f?.()}catch(m){console.warn("[workspace-explorer] Header menu action failed:",m)}},[q1]),W5=P(async(f)=>{f?.stopPropagation?.(),d(!0),Q0((m)=>({scope:"all",last_indexed_at:m?.last_indexed_at||null,last_error:null,indexed_file_count:m?.indexed_file_count||0,roots:m?.roots||[],updated_at:m?.updated_at||null,state:"indexing"}));try{let m=await V7("all");Q0(m),D(null),t0.current="",u0.current?.()}catch(m){let n=m?.message||"Failed to reindex workspace";Q0((i)=>({scope:"all",last_indexed_at:i?.last_indexed_at||null,last_error:n,indexed_file_count:i?.indexed_file_count||0,roots:i?.roots||[],updated_at:i?.updated_at||null,state:"failed"})),D(n)}finally{d(!1)}},[]);u(()=>{let f=a.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!f)return;if(f.innerHTML="",!F||M_||!k||k.error)return;let m={path:F,content:typeof k.text==="string"?k.text:void 0,mtime:k.mtime,size:k.size,preview:k,mode:"view"},n=X_.resolve(m)||X_.get("workspace-preview-default");if(!n)return;let i=n.mount(f,m);return j0.current=i,()=>{if(j0.current===i)i.dispose(),j0.current=null;f.innerHTML=""}},[F,M_,k]);let f1=(f)=>{let m=f?.target;if(m instanceof Element)return m;return m?.parentElement||null},O1=(f)=>{return Boolean(f?.closest?.(".workspace-node-icon, .workspace-label-text"))},M4=(f)=>{if(!f)return!1;if(f.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(f.isContentEditable)},n$=g((f)=>{let m=f1(f),n=m?.closest?.("[data-path]");if(!n)return;let i=n.dataset.path;if(!i||i===".")return;let N0=Boolean(m?.closest?.("button"))||Boolean(m?.closest?.("a"))||Boolean(m?.closest?.("input")),V0=Boolean(m?.closest?.(".workspace-caret"));if(N0||V0)return;if(m0.current===i)return;X1(i)}).current,r$=g((f)=>{if(A0.current){A0.current=!1;return}let m=f1(f),n=m?.closest?.("[data-path]");if(N_.current?.focus?.(),!n)return;let i=n.dataset.path,N0=n.dataset.type,V0=Boolean(m?.closest?.(".workspace-caret")),M0=Boolean(m?.closest?.("button"))||Boolean(m?.closest?.("a"))||Boolean(m?.closest?.("input")),g0=z0.current===i,U0=m0.current;if(U0){if(U0===i)return;D1()}if(N0==="dir"){if(h0.current=null,N(i),A(null),O(null),J(!1),!S0.current.has(i))W0.current?.(i);if(g0&&!V0)return;V((H_)=>{let s_=new Set(H_);if(s_.has(i))s_.delete(i);else s_.add(i);return s_})}else{h0.current=null,N(i);let i0=a0.current.get(i);if(i0)F_.current?.(i0.path,i0);if(!M0&&!V0)L0.current?.(i)}}).current,T1=g(()=>{t0.current="",u0.current(),f0.current?.(),Array.from(S0.current||[]).filter((m)=>m&&m!==".").forEach((m)=>W0.current?.(m))}).current,o_=g(()=>{h0.current=null,N(null),A(null),O(null),J(!1)}).current,y4=g(()=>{I((f)=>{let m=!f;if(typeof window<"u")L_("workspaceShowHidden",String(m));return v0.current=m,d5(!0,m).catch((i)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",i,{showHidden:m})}),t0.current="",u0.current?.(),Array.from(S0.current||[]).filter((i)=>i&&i!==".").forEach((i)=>W0.current?.(i)),m})}).current,J5=g((f)=>{if(f1(f)?.closest?.("[data-path]"))return;o_()}).current,a1=P(async(f)=>{if(!f)return;let m=f.split("/").pop()||f;if(!window.confirm(`Delete "${m}"? This cannot be undone.`))return;try{await H7(f);let i=f.includes("/")?f.split("/").slice(0,-1).join("/")||".":".";if(z0.current===f)o_();W0.current?.(i),D(null),n_()}catch(i){A((N0)=>({...N0||{},error:i.message||"Failed to delete file"}))}},[o_]),d$=P((f)=>{let m=N_.current;if(!m||!f||typeof CSS>"u"||typeof CSS.escape!=="function")return;m.querySelector(`[data-path="${CSS.escape(f)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),o$=P((f)=>{let m=f1(f);if(m0.current||M4(m))return;let n=N1;if(!n||n.length===0)return;let i=F?n.findIndex((N0)=>N0.node.path===F):-1;if(f.key==="ArrowDown"){f.preventDefault();let N0=Math.min(i+1,n.length-1),V0=n[N0];if(!V0)return;if(N(V0.node.path),V0.node.type!=="dir")F_.current?.(V0.node.path,V0.node),L0.current?.(V0.node.path);else A(null),J(!1),O(null);d$(V0.node.path);return}if(f.key==="ArrowUp"){f.preventDefault();let N0=i<=0?0:i-1,V0=n[N0];if(!V0)return;if(N(V0.node.path),V0.node.type!=="dir")F_.current?.(V0.node.path,V0.node),L0.current?.(V0.node.path);else A(null),J(!1),O(null);d$(V0.node.path);return}if(f.key==="ArrowRight"&&i>=0){let N0=n[i];if(N0?.node?.type==="dir"&&!Q.has(N0.node.path))f.preventDefault(),W0.current?.(N0.node.path),V((V0)=>new Set([...V0,N0.node.path]));return}if(f.key==="ArrowLeft"&&i>=0){let N0=n[i];if(N0?.node?.type==="dir"&&Q.has(N0.node.path))f.preventDefault(),V((V0)=>{let M0=new Set(V0);return M0.delete(N0.node.path),M0});return}if(f.key==="Enter"&&i>=0){f.preventDefault();let N0=n[i];if(!N0)return;let V0=N0.node.path;if(N0.node.type==="dir"){if(!S0.current.has(V0))W0.current?.(V0);V((g0)=>{let U0=new Set(g0);if(U0.has(V0))U0.delete(V0);else U0.add(V0);return U0}),A(null),O(null),J(!1)}else F_.current?.(V0,N0.node),L0.current?.(V0);return}if((f.key==="Delete"||f.key==="Backspace")&&i>=0){let N0=n[i];if(!N0||N0.node.type==="dir")return;f.preventDefault(),a1(N0.node.path);return}if(f.key==="Escape")f.preventDefault(),o_()},[o_,a1,Q,N1,d$,F]),E$=P((f)=>{let m=tW(f,m0.current);if(!m)return;O_.current={path:m.dragPath,dragging:!1,startX:m.startX,startY:m.startY}},[]),u_=P(()=>{let f=O_.current;if(f?.dragging&&f.path){let m=q_.current||Y_(),n=r.current;if(typeof n==="function")n(f.path,m)}O_.current={path:null,dragging:!1,startX:0,startY:0},R0.current=0,S(!1),c(null),I_(null),c_(),d_()},[Y_,d_,I_,c_]),T4=P((f)=>{let m=O_.current,n=f?.touches?.[0];if(!n||!m?.path)return;let i=Math.abs(n.clientX-m.startX),N0=Math.abs(n.clientY-m.startY),V0=i>8||N0>8;if(!m.dragging&&V0)m.dragging=!0,S(!0),c("move"),E1(m.path);if(m.dragging){f.preventDefault(),F1(n.clientX,n.clientY);let M0=document.elementFromPoint(n.clientX,n.clientY),g0=m_(M0)||Y_();if(q_.current!==g0)I_(g0);r_(g0)}},[m_,Y_,E1,F1,I_,r_]),G1=g((f)=>{f.preventDefault();let m=b0.current;if(!m)return;let n=f.clientY,i=I0.current||280,N0=f.currentTarget;N0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let V0=n,M0=(U0)=>{V0=U0.clientY;let i0=m.clientHeight-80,H_=Math.min(Math.max(i-(U0.clientY-n),80),i0);m.style.setProperty("--preview-height",`${H_}px`),I0.current=H_},g0=()=>{let U0=m.clientHeight-80,i0=Math.min(Math.max(i-(V0-n),80),U0);I0.current=i0,N0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",L_("previewHeight",String(Math.round(i0))),document.removeEventListener("mousemove",M0),document.removeEventListener("mouseup",g0)};document.addEventListener("mousemove",M0),document.addEventListener("mouseup",g0)}).current,I8=g((f)=>{f.preventDefault();let m=b0.current;if(!m)return;let n=f.touches[0];if(!n)return;let i=n.clientY,N0=I0.current||280,V0=f.currentTarget;V0.classList.add("dragging"),document.body.style.userSelect="none";let M0=(U0)=>{let i0=U0.touches[0];if(!i0)return;U0.preventDefault();let H_=m.clientHeight-80,s_=Math.min(Math.max(N0-(i0.clientY-i),80),H_);m.style.setProperty("--preview-height",`${s_}px`),I0.current=s_},g0=()=>{V0.classList.remove("dragging"),document.body.style.userSelect="",L_("previewHeight",String(Math.round(I0.current||N0))),document.removeEventListener("touchmove",M0),document.removeEventListener("touchend",g0),document.removeEventListener("touchcancel",g0)};document.addEventListener("touchmove",M0,{passive:!1}),document.addEventListener("touchend",g0),document.addEventListener("touchcancel",g0)}).current,J6=P((f=F)=>{if(!f)return;RK(F2(f))},[F]),D$=async()=>{if(!F||M_)return;await a1(F)},t1=(f)=>{return Array.from(f?.dataTransfer?.types||[]).includes("Files")},z$=P((f)=>{if(!t1(f))return;if(f.preventDefault(),R0.current+=1,!K_.current)S(!0);c("upload");let m=$1(f)||Y_();I_(m),r_(m)},[Y_,$1,I_,r_]),O$=P((f)=>{if(!t1(f))return;if(f.preventDefault(),f.dataTransfer)f.dataTransfer.dropEffect="copy";if(!K_.current)S(!0);if(G_.current!=="upload")c("upload");let m=$1(f)||Y_();if(q_.current!==m)I_(m);r_(m)},[Y_,$1,I_,r_]),w4=P((f)=>{if(!t1(f))return;if(f.preventDefault(),R0.current=Math.max(0,R0.current-1),R0.current===0)S(!1),c(null),I_(null),c_()},[I_,c_]),W1=P(async(f,m=".")=>{let n=Array.from(f||[]);if(n.length===0)return;let i=m&&m!==""?m:".",N0=i!=="."?i:"workspace root";W_(),q0(!0),H0({current:0,total:n.length,name:"",percent:0,done:!1,error:null});try{let V0=null;for(let M0=0;M0<n.length;M0++){let g0=n[M0],U0=g0?.name||`file ${M0+1}`;H0((H_)=>({...H_,current:M0+1,name:U0,percent:0}));let i0=(H_)=>H0((s_)=>({...s_,percent:H_.percent}));try{V0=await Q2(g0,i,{onProgress:i0})}catch(H_){let s_=H_?.status,W$=H_?.code;if(s_===409||W$==="file_exists"){if(!window.confirm(`"${U0}" already exists in ${N0}. Overwrite?`))continue;V0=await Q2(g0,i,{overwrite:!0,onProgress:i0})}else throw H_}}if(V0?.path)h0.current=V0.path,N(V0.path),L0.current?.(V0.path);W0.current?.(i),n_(),H0((M0)=>({...M0,done:!0})),W_(),B_.current=window.setTimeout(()=>{B_.current=0,H0(null)},1500)}catch(V0){D(V0.message||"Failed to upload file"),H0((M0)=>M0?{...M0,error:V0.message||"Upload failed"}:null),W_(),B_.current=window.setTimeout(()=>{B_.current=0,H0(null)},4000)}finally{q0(!1)}},[W_]),e1=P(async(f,m)=>{if(!f)return;let n=a0.current?.get(f);if(!n)return;let i=m&&m!==""?m:".",N0=f.includes("/")?f.split("/").slice(0,-1).join("/")||".":".";if(i===N0)return;try{let M0=(await U7(f,i))?.path||f;if(n.type==="dir")V((g0)=>{let U0=new Set;for(let i0 of g0)if(i0===f)U0.add(M0);else if(i0.startsWith(`${f}/`))U0.add(`${M0}${i0.slice(f.length)}`);else U0.add(i0);return U0});if(N(M0),n.type==="dir")A(null),J(!1),O(null);else L0.current?.(M0);W0.current?.(N0),W0.current?.(i),n_()}catch(V0){D(V0?.message||"Failed to move entry")}},[]);r.current=e1;let _$=P(async(f)=>{if(!t1(f))return;f.preventDefault(),R0.current=0,S(!1),c(null),t(null),c_();let m=Array.from(f?.dataTransfer?.files||[]);if(m.length===0)return;let n=q_.current||$1(f)||Y_();await W1(m,n)},[Y_,$1,W1]),A6=P((f)=>{if(f?.stopPropagation?.(),s)return;let m=f?.currentTarget?.dataset?.uploadTarget||".";D_.current=m,e0.current?.click()},[s]),w1=P(()=>{if(s)return;let f=z0.current,m=f?a0.current?.get(f):null;D_.current=m?.type==="dir"?m.path:".",e0.current?.click()},[s]),k6=P(()=>{S_(()=>y1(null))},[S_,y1]),A5=P(()=>{S_(()=>w1())},[S_,w1]),k5=P(()=>{S_(()=>T1())},[S_,T1]),M6=P(()=>{S_(()=>y4())},[S_,y4]),M5=P(()=>{if(!F||!U$)return;S_(()=>z_.current?.(F,k))},[S_,F,U$,k]),x4=P(()=>{if(!F||!j1)return;S_(()=>z_.current?.(F,k))},[S_,F,j1,k]),C8=P(()=>{if(!F||F===".")return;S_(()=>X1(F))},[S_,F,X1]),I4=P(()=>{if(!F||M_)return;S_(()=>D$())},[S_,F,M_,D$]),P8=P(()=>{if(!F||M_)return;S_(()=>J6())},[S_,F,M_,J6]),y5=P(()=>{if(!H$)return;q1(),RK(H$)},[q1,H$]),R8=P(()=>{q1(),Z?.()},[q1,Z]),f8=P(()=>{q1(),X?.()},[q1,X]),S8=P(()=>{q1(),Y?.()},[q1,Y]),y6=P((f)=>{if(!f||f.button!==0)return;let m=f.currentTarget;if(!m||!m.dataset)return;let n=m.dataset.path;if(!n||n===".")return;if(m0.current===n)return;let i=f1(f);if(i?.closest?.("button, a, input, .workspace-caret"))return;if(!O1(i))return;f.preventDefault(),_0.current={path:n,dragging:!1,startX:f.clientX,startY:f.clientY};let N0=(M0)=>{let g0=_0.current;if(!g0?.path)return;let U0=Math.abs(M0.clientX-g0.startX),i0=Math.abs(M0.clientY-g0.startY),H_=U0>4||i0>4;if(!g0.dragging&&H_)g0.dragging=!0,A0.current=!0,S(!0),c("move"),E1(g0.path),F1(M0.clientX,M0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(g0.dragging){M0.preventDefault(),F1(M0.clientX,M0.clientY);let s_=document.elementFromPoint(M0.clientX,M0.clientY),W$=m_(s_)||Y_();if(q_.current!==W$)I_(W$);r_(W$)}},V0=()=>{document.removeEventListener("mousemove",N0),document.removeEventListener("mouseup",V0);let M0=_0.current;if(M0?.dragging&&M0.path){let g0=q_.current||Y_(),U0=r.current;if(typeof U0==="function")U0(M0.path,g0)}_0.current={path:null,dragging:!1,startX:0,startY:0},R0.current=0,S(!1),c(null),I_(null),c_(),d_(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{A0.current=!1},0)};document.addEventListener("mousemove",N0),document.addEventListener("mouseup",V0)},[m_,Y_,E1,F1,d_,I_,r_,c_]),u8=P(async(f)=>{let m=Array.from(f?.target?.files||[]);if(m.length===0)return;let n=D_.current||".";if(await W1(m,n),D_.current=".",f?.target)f.target.value=""},[W1]);return B`
        <aside
            class=${`workspace-sidebar${R?" workspace-drop-active":""}`}
            data-workspace-scale=${n0}
            ref=${b0}
            onDragEnter=${z$}
            onDragOver=${O$}
            onDragLeave=${w4}
            onDrop=${_$}
        >
            <input type="file" multiple style="display:none" ref=${e0} onChange=${u8} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${E0}
                            class=${`workspace-menu-button${P0?" active":""}`}
                            onClick=${(f)=>{f.stopPropagation(),d0((m)=>!m)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${P0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${P0&&B`
                            <div class="workspace-menu-dropdown" ref=${Z0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${k6} disabled=${s}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${A5} disabled=${s}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${k5}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>S_(()=>W5())} disabled=${k0}>
                                    ${k0?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${y?" active":""}`} role="menuitem" onClick=${M6}>
                                    ${y?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(Z||X||Y)&&B`<div class="workspace-menu-separator"></div>`}
                                ${Z&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${R8}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${X&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${f8}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${Y&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${S8}>
                                        ${q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${F&&B`<div class="workspace-menu-separator"></div>`}
                                ${U$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M5}>Open in tab</button>
                                `}
                                ${F&&!M_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x4} disabled=${!j1}>Open in editor</button>
                                `}
                                ${E5&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C8}>Rename selected</button>
                                `}
                                ${z5&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P8}>Download selected file</button>
                                `}
                                ${H$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${y5}>Download selected folder (zip)</button>
                                `}
                                ${D5&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${I4}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{d0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${y1} title="New file" disabled=${s}>
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
            ${O5&&B`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${p$}`} title=${k4}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${A4}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${J5}>
                ${X0&&B`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${X0.error?B`<span class="workspace-upload-strip-error">${X0.error}</span>`:X0.done?B`<span>Done</span>`:B`<span>${X0.total>1?`Uploading ${X0.current}/${X0.total}: ${X0.name}`:`Uploading ${X0.name}`}${X0.percent>0?` (${X0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!X0.done&&!X0.error&&B`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${X0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${T&&B`<div class="workspace-loading">Loading…</div>`}
                ${M&&B`<div class="workspace-error">${M}</div>`}
                ${K&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${N_}
                        tabIndex="0"
                        onClick=${r$}
                        onDblClick=${n$}
                        onKeyDown=${o$}
                        onTouchStart=${E$}
                        onTouchEnd=${u_}
                        onTouchMove=${T4}
                        onTouchCancel=${u_}
                    >
                        ${N1.map(({node:f,depth:m})=>{let n=f.type==="dir",i=f.path===F,N0=f.path===H,V0=n&&Q.has(f.path),M0=b&&f.path===b,g0=Array.isArray(f.children)&&f.children.length>0?f.children.length:Number(f.child_count)||0;return B`
                                <div
                                    key=${f.path}
                                    class=${`workspace-row${i?" selected":""}${M0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+m*J4.indentPx}px`}}
                                    data-path=${f.path}
                                    data-type=${f.type}
                                    onMouseDown=${y6}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${n?V0?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${n?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${n?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${N0?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${k_}
                                                value=${E}
                                                onInput=${(U0)=>U(U0?.target?.value||"")}
                                                onKeyDown=${(U0)=>{if(U0.stopPropagation(),U0.key==="Enter")U0.preventDefault(),z1();else if(U0.key==="Escape")U0.preventDefault(),D1()}}
                                                onBlur=${D1}
                                                onClick=${(U0)=>U0.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${f.name}</span></span>`}
                                    ${n&&!V0&&g0>0&&B`
                                        <span class="workspace-count">${g0}</span>
                                    `}
                                    ${n&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${f.path}
                                            title="Upload files to this folder"
                                            onClick=${A6}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${G1} onTouchStart=${I8}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${F}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${y1} title="New file" disabled=${s}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!M_&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>j1&&z_.current?.(F,k)}
                                    title=${s1}
                                    disabled=${!j1}
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
                            ${M_?B`
                                    <button class="workspace-download" onClick=${w1}
                                        title="Upload files to this folder" disabled=${s}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${N2(F,y)} download
                                        title="Download folder as zip" onClick=${(f)=>f.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<a class="workspace-download" href=${F2(F)} download
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
                    ${M_&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${B0?.disabled&&B`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${B0?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${B0?.error&&B`<div class="workspace-error">${B0.error}</div>`}
                        ${B0?.payload&&B0.payload.segments?.length>0&&B`
                            <${oW} payload=${B0.payload} />
                        `}
                        ${B0?.payload&&(!B0.payload.segments||B0.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${k&&!k.error&&!M_&&B`
                        <div class="workspace-preview-body" ref=${a}></div>
                    `}
                </div>
            `}
            ${h&&B`
                <div class="workspace-drag-ghost" ref=${U_}>${h.label}</div>
            `}
        </aside>
    `}T0();var eW=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function j8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function nK(_,$,j){let G=j8(_,$,j);return G!=null&&eW.has(G)}function rK(_,$,j){return j8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function dK(_,$,j){return j8(_,$,j)==="editor"}var _J=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,$J=/\.(csv|tsv)$/i,jJ=/\.pdf$/i,GJ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function ZJ(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=yq(j,{hasPopOutTab:$});if(G)return G;if(_J.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if($J.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(jJ.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(GJ.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function oK({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:q,onToggleDiff:K,onEditSource:L,previewTabs:Q,diffTabs:V,paneOverrides:F,detachedTabs:N,onReattachTab:H,onToggleDock:z,dockVisible:E,onToggleZen:U,zenMode:k,onPopOutTab:A}){let[O,T]=C(null),x=g(null);u(()=>{if(!O)return;let b=(t)=>{if(t.type==="keydown"&&t.key!=="Escape")return;T(null)};return document.addEventListener("click",b),document.addEventListener("keydown",b),()=>{document.removeEventListener("click",b),document.removeEventListener("keydown",b)}},[O]),u(()=>{let b=(t)=>{if(t.ctrlKey&&t.key==="Tab"){if(t.preventDefault(),!_.length)return;let s=_.findIndex((q0)=>q0.id===$);if(t.shiftKey){let q0=_[(s-1+_.length)%_.length];j?.(q0.id)}else{let q0=_[(s+1)%_.length];j?.(q0.id)}return}if((t.ctrlKey||t.metaKey)&&t.key==="w"){let s=document.querySelector(".editor-pane");if(s&&s.contains(document.activeElement)){if(t.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[_,$,j,G]);let W=P((b,t)=>{if(b.button===0){j?.(t);return}if(b.button===1)b.preventDefault(),G?.(t)},[j,G]),J=P((b,t)=>{if(b.defaultPrevented)return;if(b.button===0)j?.(t)},[j]),M=P((b,t)=>{b.preventDefault(),T({id:t,x:b.clientX,y:b.clientY})},[]),D=P((b)=>{b.stopPropagation()},[]),y=P((b,t)=>{b.preventDefault(),b.stopPropagation(),G?.(t)},[G]);u(()=>{if(!$||!x.current)return;let b=x.current.querySelector(".tab-item.active");if(b)b.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let I=P((b)=>{if(!(F instanceof Map))return null;return F.get(b)||null},[F]),R=Y0(()=>_.find((b)=>b.id===O?.id)||null,[O?.id,_]),S=Y0(()=>{let b=O?.id;if(!b)return!1;return nK(b,I(b),(t)=>X_.resolve(t))},[O?.id,I]),v=Y0(()=>{let b=O?.id;if(!b)return"Edit Source";return rK(b,I(b),(t)=>X_.resolve(t))},[O?.id,I]),c=Y0(()=>{let b=O?.id;if(!b||!(N instanceof Map))return!1;return N.has(b)},[O?.id,N]),h=Y0(()=>{let b=O?.id;if(!b||!(V instanceof Set))return!1;return V.has(b)},[O?.id,V]),$0=Y0(()=>{let b=O?.id;if(!b)return!1;let t=_.find((q0)=>q0.id===b)||null;if(!t)return!1;return dK(b,I(b),(q0)=>X_.resolve(q0))&&Boolean(t.dirty||h)},[O?.id,h,I,_]);if(!_.length)return null;return B`
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
            ${U&&B`
                <button
                    class=${`tab-strip-zen-toggle${k?" active":""}`}
                    onClick=${U}
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
                <button onClick=${()=>{G?.(O.id),T(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),T(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),T(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(O.id),T(null)}}>
                    ${R?.pinned?"Unpin":"Pin"}
                </button>
                ${S&&L&&B`
                    <button onClick=${()=>{L(O.id),T(null)}}>${v}</button>
                `}
                ${c&&H&&B`
                    <button onClick=${()=>{H(O.id),T(null)}}>Reattach</button>
                `}
                ${A&&!c&&B`
                    <button onClick=${()=>{let b=_.find((t)=>t.id===O.id);A(O.id,b?.label),T(null)}}>Open in Window</button>
                `}
                ${$0&&K&&B`
                    <hr />
                    <button onClick=${()=>{j?.(O.id),K(O.id),T(null)}}>${h?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${q&&/\.(md|mdx|markdown)$/i.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{q(O.id),T(null)}}>
                        ${Q?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let b=ZJ(O.id,{hasPopOutTab:typeof A==="function"});if(!b)return null;return B`
                        <hr />
                        <button onClick=${()=>{window.open(b,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}T0();g_();J2();function Z8(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function b9(_,$=30){return Z8(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function G8(_,$=56,j=16,G={}){let Z=Z8(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let q=(j/2).toFixed(2);return`M 0 ${q} L ${$} ${q}`}if(Z.length===1){let q=(Z[0]-X)/(Y-X),K=(j-q*j).toFixed(2);return`M 0 ${K} L ${$} ${K}`}return Z.map((q,K)=>{let L=K/(Z.length-1||1)*$,Q=(q-X)/(Y-X),V=j-Q*j;return`${K===0?"M":"L"} ${L.toFixed(2)} ${V.toFixed(2)}`}).join(" ")}function X5(_){return`${Math.round(Number(_)||0)}%`}function XJ(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function YJ(_){let $=[`CPU ${X5(_?.cpu_percent)}`,`RAM ${X5(_?.ram_percent)}`];if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${X5(_?.swap_percent)}`);return $.join(" • ")}function iK(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function qJ(_){return iK(_)>0&&Z8(_?.process_rss_series_bytes).length>0}function KJ(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function sK({mode:_="overlay"}){let[$,j]=C(()=>j6(!1)),[G,Z]=C(()=>P7(!1)),[X,Y]=C(()=>KJ()),[q,K]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[L,Q]=C(!1);u(()=>{let W=(M)=>{j(Boolean(M?.detail?.enabled))},J=(M)=>{Z(Boolean(M?.detail?.collapsed))};return window.addEventListener(N4,W),window.addEventListener(O2,J),()=>{window.removeEventListener(N4,W),window.removeEventListener(O2,J)}},[]),u(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let W=window.matchMedia("(max-width: 900px)"),J=()=>Y(Boolean(W.matches));if(J(),typeof W.addEventListener==="function")return W.addEventListener("change",J),()=>W.removeEventListener("change",J);return W.addListener(J),()=>W.removeListener(J)},[]);let F=_==="overlay";u(()=>{if(!$||!F)return;let W=!1,J=0,M=async()=>{Q((D)=>D||q.cpu_series.length>0?D:!0);try{let D=await i3();if(W)return;K({cpu_percent:Number(D?.cpu_percent)||0,ram_percent:Number(D?.ram_percent)||0,swap_percent:Number.isFinite(Number(D?.swap_percent))?Number(D?.swap_percent):null,cpu_series:b9(D?.cpu_series),ram_series:b9(D?.ram_series),swap_series:b9(D?.swap_series),process_rss_series_bytes:Z8(D?.process_rss_series_bytes),process_memory:{rss_bytes:Number(D?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(D?.process_memory?.vm_rss_bytes))?Number(D?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(D?.swap_total_bytes)||0,swap_used_bytes:Number(D?.swap_used_bytes)||0,sample_interval_ms:Number(D?.sample_interval_ms)||2000,platform:String(D?.platform||"")})}catch{if(W)return}finally{if(!W)Q(!1)}};return M(),J=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;M()},Math.max(1000,Number(q.sample_interval_ms)||2000)),()=>{if(W=!0,J)window.clearInterval(J)}},[$,F]);let N=Y0(()=>G8(q.cpu_series,56,16,{min:0,max:100}),[q.cpu_series]),H=Y0(()=>G8(q.ram_series,56,16,{min:0,max:100}),[q.ram_series]),z=Y0(()=>G8(q.swap_series,56,16,{min:0,max:100}),[q.swap_series]),E=Y0(()=>G8(q.process_rss_series_bytes),[q.process_rss_series_bytes]),U=Number.isFinite(Number(q.swap_percent))&&q.swap_total_bytes>0,k=iK(q),A=qJ(q),O=Y0(()=>YJ(q),[q]);if(!$||!F)return null;let T=G?"Show system meters":L?"Updating system meters… Click to collapse.":"System meters — click to collapse.",x=(W)=>{W?.stopPropagation?.(),yX()};return B`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${T}
                aria-label=${T}
                aria-expanded=${G?"false":"true"}
                onClick=${x}
            >
                ${G?B`<span class="system-meters-collapse-tab" aria-hidden="true">◂</span>`:X?B`<span class="system-meters-compact-summary">${O}</span>`:B`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${N}></path>
                                </svg>
                                <span class="system-meters-value">${X5(q.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${H}></path>
                                </svg>
                                <span class="system-meters-value">${X5(q.ram_percent)}</span>
                            </div>
                            ${A&&B`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${XJ(k)}</span>
                                </div>
                            `}
                            ${U&&B`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${z}></path>
                                    </svg>
                                    <span class="system-meters-value">${X5(q.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function LJ(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function VJ(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function QJ(_){let{id:$,scrollToBottom:j,getElementById:G=(L)=>document.getElementById(L),scheduleRaf:Z=(L)=>requestAnimationFrame(L),scheduleTimeout:X=(L,Q)=>{setTimeout(L,Q)},maxAttempts:Y=12}=_,q=(L)=>{L.scrollIntoView({behavior:"smooth",block:"center"}),L.classList.add("post-highlight"),X(()=>L.classList.remove("post-highlight"),2000)},K=(L)=>{let Q=G(`post-${$}`);if(Q){q(Q);return}if(L<=0){j?.();return}Z(()=>{X(()=>K(L-1),40)})};K(Y)}function FJ(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(K)=>QJ({id:K,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let q=VJ($);if(q){Z(q);return}G()}function aK(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:q,handleRenameCurrentBranch:K,renameBranchNameDraft:L,renameBranchNameInputRef:Q,setRenameBranchNameDraft:V,renameBranchDraftState:F,isRenamingBranch:N,addFileRef:H,openEditor:z,openTerminalTab:E,openVncTab:U,hasDockPanes:k,toggleDock:A,dockVisible:O,handleSplitterMouseDown:T,handleSplitterTouchStart:x,showEditorPaneContainer:W,tabStripTabs:J,tabStripActiveId:M,handleTabActivate:D,handleTabClose:y,handleTabCloseOthers:I,handleTabCloseAll:R,handleTabTogglePin:S,handleTabTogglePreview:v,handleTabToggleDiff:c,handleTabEditSource:h,handleReattachPane:$0,previewTabs:b,diffTabs:t,tabPaneOverrides:s,toggleZenMode:q0,handlePopOutPane:X0,isWebAppMode:H0,editorContainerRef:B0,editorInstanceRef:K0,detachedTabs:D0,activeDetachedTab:Q0,detachedDockPane:k0,handleDockSplitterMouseDown:d,handleDockSplitterTouchStart:G0,TERMINAL_TAB_PATH:x0,dockContainerRef:y0,handleEditorSplitterMouseDown:C0,handleEditorSplitterTouchStart:n0,searchQuery:j_,isIOSDevice:P0,currentBranchRecord:d0,currentChatJid:w0,currentChatBranches:s0,handleBranchPickerChange:S0,formatBranchPickerLabel:t0,openRenameCurrentBranchForm:V_,handlePruneCurrentBranch:E_,handlePurgeArchivedBranch:l0,currentHashtag:u0,handleBackToTimeline:f0,activeSearchScopeLabel:a0,oobePanelState:F_,composePrefillRequest:z_,requestComposePrefill:L0,handleOobeSetupProvider:W0,handleOobeShowModelPicker:b0,handleOobeOpenWorkspace:N_,handleDismissProviderMissingOobe:k_,handleCompleteProviderReadyOobe:e0,posts:D_,isMainTimelineView:B_,hasMore:O_,loadMore:_0,timelineRef:O0,handleHashtagClick:A0,addMessageRef:I0,scrollToMessage:c0,openFileFromPill:e,openTimelineFileFromPill:p,handleDeletePost:a,handleOpenFloatingWidget:j0,agents:Z0,userProfile:E0,removingPostIds:v0,agentStatus:o0,isCompactionStatus:J0,agentDraft:R0,agentPlan:q_,agentThought:K_,pendingRequest:G_,intentToast:U_,currentTurnId:T_,steerQueued:Z_,handlePanelToggle:r,btwSession:z0,closeBtwPanel:m0,handleBtwRetry:h0,handleBtwInject:f_,floatingWidget:W_,handleCloseFloatingWidget:p_,handleFloatingWidgetEvent:d1,attachmentPreview:n_,setAttachmentPreview:o1,extensionStatusPanels:Q1,pendingExtensionPanelActions:Y_,handleExtensionPanelAction:m_,searchOpen:$1,followupQueueItems:I_,handleInjectQueuedFollowup:c_,handleRemoveQueuedFollowup:r_,handleMoveQueuedFollowup:F1,viewStateRef:E1,loadPosts:d_,scrollToBottom:l_,searchScope:D1,handleSearch:X1,handleSearchScopeChange:z1,setSearchScope:i1,enterSearchMode:y1,exitSearchMode:R1,fileRefs:Y1,removeFileRef:H5,clearFileRefs:N1,setFileRefsFromCompose:W4,messageRefs:J4,removeMessageRef:W6,clearMessageRefs:M_,setMessageRefsFromCompose:j1,handleCreateSessionFromCompose:s1,handleRestoreBranch:U$,attachActiveEditorFile:E5,followupQueueCount:D5,handleBtwIntercept:z5,handleMessageResponse:H$,handleComposeSubmitError:A4,isComposeBoxAgentActive:k4,activeChatAgents:p$,connectionStatus:O5,activeModel:q1,agentModelsPayload:S_,activeModelUsage:W5,activeThinkingLevel:f1,supportsThinking:O1,contextUsage:M4,extensionWorkingState:n$,notificationsEnabled:r$,notificationPermission:T1,handleToggleNotifications:o_,setActiveModel:y4,applyModelState:J5,setPendingRequest:a1,pendingRequestRef:d$,toggleWorkspace:o$}=_,E$=()=>{if(P0())return;l_()};return B`
    <div class=${LJ({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${sK} mode="overlay" />
      ${Y&&B`
        <div class="rename-branch-overlay" onPointerDown=${(u_)=>{if(u_.target===u_.currentTarget)q()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(u_)=>{u_.preventDefault(),K(L)}}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${Q}
              value=${L}
              onInput=${(u_)=>{let T4=u_.currentTarget?.value??"";V(String(T4))}}
              onKeyDown=${(u_)=>{if(u_.key==="Escape")u_.preventDefault(),q()}}
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
        <${pK}
          onFileSelect=${H}
          visible=${j}
          active=${j||G}
          onOpenEditor=${z}
          onOpenTerminalTab=${E}
          onOpenVncTab=${U}
          onToggleTerminal=${k?A:void 0}
          terminalVisible=${Boolean(k&&O)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${o$}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${T} onTouchStart=${x}></div>
      `}
      ${W&&B`
        <div class="editor-pane-container">
          ${X&&B`<div class="zen-hover-zone"></div>`}
          ${G&&B`
            <${oK}
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
              detachedTabs=${D0}
              onReattachTab=${$0}
              onToggleDock=${k?A:void 0}
              dockVisible=${k&&O}
              onToggleZen=${q0}
              zenMode=${X}
              onPopOutTab=${H0?void 0:X0}
            />
          `}
          ${G&&Q0&&B`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${Q0.label||Q0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>$0(Q0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!Q0&&B`<div class="editor-pane-host" ref=${B0}></div>`}
          ${G&&!Q0&&M&&b.has(M)&&B`
            <${P2}
              getContent=${()=>K0.current?.getContent?.()}
              path=${M}
              onClose=${()=>v(M)}
            />
          `}
          ${k&&O&&B`<div class="dock-splitter" onMouseDown=${d} onTouchStart=${G0}></div>`}
          ${k&&B`<div class=${`dock-panel${O?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!H0&&!k0&&B`
                  <button class="dock-panel-action" onClick=${()=>X0(x0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${k0&&B`
                  <button class="dock-panel-action" onClick=${()=>$0(x0)} title="Reattach terminal" aria-label="Reattach terminal">
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
            ${k0?B`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>$0(x0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:B`<div class="dock-panel-body" ref=${y0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${C0} onTouchStart=${n0}></div>
      `}
      <${mq}
        workspaceOpen=${j}
        toggleWorkspace=${o$}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${E}
        onOpenVncTab=${U}
        onToggleTerminal=${k?A:void 0}
        terminalVisible=${Boolean(k&&O)}
      />
      <${vq}
        activeChatAgents=${p$}
        currentChatJid=${w0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(k&&O)}
        onSwitchChat=${S0}
        onToggleWorkspace=${o$}
        onOpenTerminalTab=${E}
        onOpenVncTab=${U}
        onToggleTerminalDock=${k?A:void 0}
        onPrefillCompose=${L0}
      />
      <div class="container">
        ${j_&&P0()&&B`<div class="search-results-spacer"></div>`}
        ${(u0||j_)&&B`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${f0}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${u0?`#${u0}`:`Search: ${j_} · ${a0}`}</span>
          </div>
        `}
        ${F_?.kind&&F_.kind!=="hidden"&&B`
          <${$q}
            kind=${F_.kind}
            onSetupProvider=${W0}
            onShowModelPicker=${b0}
            onOpenWorkspace=${N_}
            onDismiss=${F_.kind==="provider-missing"?k_:e0}
          />
        `}
        <${MK}
          posts=${D_}
          hasMore=${B_?O_:!1}
          onLoadMore=${B_?_0:void 0}
          timelineRef=${O0}
          onHashtagClick=${A0}
          onMessageRef=${I0}
          onScrollToMessage=${c0}
          onFileRef=${p||e}
          onPostClick=${void 0}
          onDeletePost=${a}
          onOpenWidget=${j0}
          onOpenAttachmentPreview=${o1}
          emptyMessage=${u0?`No posts with #${u0}`:j_?`No results for "${j_}"`:void 0}
          agents=${Z0}
          user=${E0}
          reverse=${B_}
          removingPostIds=${v0}
          searchQuery=${j_}
        />
        <${D9}
          status=${J0(o0)?null:o0}
          draft=${R0}
          plan=${q_}
          thought=${K_}
          pendingRequest=${G_}
          intent=${U_}
          turnId=${T_}
          steerQueued=${Z_}
          onPanelToggle=${r}
          showExtensionPanels=${!1}
        />
        <${qq}
          session=${z0}
          onClose=${m0}
          onRetry=${h0}
          onInject=${f_}
        />
        <${Jq}
          widget=${W_}
          onClose=${p_}
          onWidgetEvent=${d1}
        />
        ${n_&&B`
          <${uq}
            mediaId=${n_.mediaId}
            info=${n_.info}
            onClose=${()=>o1(null)}
          />
        `}
        <${RY} />
        <${D9}
          extensionPanels=${Array.from(Q1.values())}
          pendingPanelActions=${Y_}
          onExtensionPanelAction=${m_}
          turnId=${T_}
          steerQueued=${Z_}
          onPanelToggle=${r}
          showCorePanels=${!1}
        />
        <${V9}
          items=${$1?[]:I_}
          onInjectQueuedFollowup=${c_}
          onRemoveQueuedFollowup=${r_}
          onMoveQueuedFollowup=${F1}
          onOpenFilePill=${e}
        />
        <${_q}
          onPost=${(u_)=>{FJ({response:u_,viewStateRef:E1,scrollToBottom:l_})}}
          onFocus=${E$}
          searchMode=${$1}
          searchScope=${D1}
          onSearch=${X1}
          onSearchScopeChange=${z1||i1}
          onEnterSearch=${y1}
          onExitSearch=${R1}
          fileRefs=${Y1}
          onRemoveFileRef=${H5}
          onClearFileRefs=${N1}
          onSetFileRefs=${W4}
          messageRefs=${J4}
          onRemoveMessageRef=${W6}
          onClearMessageRefs=${M_}
          onSetMessageRefs=${j1}
          onSwitchChat=${S0}
          onRenameSession=${K}
          isRenameSessionInProgress=${N}
          onCreateSession=${s1}
          onDeleteSession=${E_}
          onPurgeArchivedSession=${l0}
          onRestoreSession=${U$}
          activeEditorPath=${Z?null:M}
          onAttachEditorFile=${Z?void 0:E5}
          onOpenFilePill=${e}
          followupQueueCount=${D5}
          followupQueueItems=${I_}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${c_}
          onRemoveQueuedFollowup=${r_}
          onMoveQueuedFollowup=${F1}
          onSubmitIntercept=${z5}
          onMessageResponse=${H$}
          onSubmitError=${A4}
          isAgentActive=${k4}
          activeChatAgents=${p$}
          currentChatJid=${w0}
          connectionStatus=${O5}
          activeModel=${q1}
          agentModelsPayload=${S_}
          modelUsage=${W5}
          thinkingLevel=${f1}
          supportsThinking=${O1}
          contextUsage=${M4}
          notificationsEnabled=${r$}
          notificationPermission=${T1}
          onToggleNotifications=${o_}
          onModelChange=${y4}
          onModelStateChange=${J5}
          statusNotice=${J0(o0)?o0:null}
          extensionWorkingState=${n$}
          prefillRequest=${z_}
        />
        <${sq}
          request=${G_}
          onRespond=${()=>{a1(null),d$.current=null}}
        />
      </div>
    </div>
  `}function tK(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,q=uY({branchLoaderMode:$,panePopoutMode:j}),K=Y?.renderBranchLoaderMode||gY,L=Y?.renderPanePopoutMode||bY,Q=Y?.renderMainShell||aK;if(q==="branch-loader")return K(G);if(q==="pane-popout")return L(Z);return Q(X)}var Y8="piclaw_btw_session",m9="piclaw_last_chat_jid",_L=900,eK="__piclawRenameBranchFormLock__";function NJ(){try{return import.meta.url}catch{return null}}function v9(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function BJ(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function X8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function UJ(_){let j=(typeof _.readItem==="function"?_.readItem:V1)(m9);return j&&j.trim()?j.trim():null}function $L(_={}){let $=_.importMetaUrl===void 0?NJ():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=BJ($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((L)=>String(L?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let K=new URL(Y,G).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function jL(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[eK];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[eK]=G,G}function GL(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function ZL(_={}){let $=typeof _.readItem==="function"?_.readItem:V1,j=_.storageKey||Y8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",q=typeof Z.thinking==="string"?Z.thinking:"",K=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,L=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:q,error:L==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:L}}catch{return null}}function XL(_,$={}){let j=$.defaultChatJid||"web:default",G=X8(_,"chat_jid",UJ($)||j),Z=v9(_?.get?.("chat_only")||_?.get?.("chat-only")),X=v9(_?.get?.("pane_popout")),Y=X8(_,"pane_path"),q=X8(_,"pane_label"),K=v9(_?.get?.("branch_loader")),L=X8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:K,branchLoaderSourceChatJid:L}}function YL(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function qL(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function c9(_,$,j){return _||$?.label||j||"Pane"}function KL(_,$,j){return`${c9(_,$,j)} · PiClaw`}function LL(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function VL(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function QL(_,$,j,G){return _===$&&!j||G}function FL(_,$,j,G,Z){return _||!$&&(j||G&&Z)}g_();function HJ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function _1(_,$,j){let G=_?.[$];return typeof G==="function"?G:HJ($,j)}var NL=!1,BL=!1,UL=!1;function EJ(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function DJ(_=typeof window<"u"?window:null){if(!_||BL)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),BL=!0}function zJ(){X_.register(G3),X_.register(z7),X_.register(D7),X_.register(O7),X_.register(W7),X_.register(J7),X_.register(k7),X_.register(M7),X_.register(y7),X_.register(w7),X_.register(S3),Z3(),X_.register(L3),X_.register(V3)}function OJ(_=typeof window<"u"?window:null){if(!_||UL)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;UL=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function HL(){if(NL)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(EJ($),DJ(_),U9(_),_)try{let j=await Promise.resolve().then(() => (T0(),dj));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}zJ(),await Iq(_),OJ(_),NL=!0}function WJ(_=i5){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:_1(_,"getAgentContext",null),getAutoresearchStatus:_1(_,"getAutoresearchStatus",null),stopAutoresearch:_1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:_1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:_1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:_1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:_1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:_1(_,"getChatBranches",{chats:[]}),renameChatBranch:_1(_,"renameChatBranch",null),pruneChatBranch:_1(_,"pruneChatBranch",null),restoreChatBranch:_1(_,"restoreChatBranch",null),getAgentQueueState:_1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:_1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:_1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:_1(_,"streamSidePrompt",null)}}var EL=WJ(i5);function DL(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:q,shellState:K,agentState:L,composeState:Q,modelState:V}=_,F={appShellRef:K.appShellRef,editorOpen:K.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:K.tabStripTabs,tabStripActiveId:K.tabStripActiveId,handleTabActivate:K.handleTabActivate,previewTabs:K.previewTabs,diffTabs:K.diffTabs,handleTabTogglePreview:K.handleTabTogglePreview,handleTabToggleDiff:K.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),panePopoutPath:K.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},N={appShellRef:K.appShellRef,workspaceOpen:K.workspaceOpen,editorOpen:K.editorOpen,chatOnlyMode:K.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:K.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:K.renameBranchNameDraft,renameBranchNameInputRef:K.renameBranchNameInputRef,setRenameBranchNameDraft:K.setRenameBranchNameDraft,renameBranchDraftState:K.renameBranchDraftState,isRenamingBranch:K.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:K.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:K.TERMINAL_TAB_PATH,isIOSDevice:K.isIOSDevice,currentBranchRecord:K.currentBranchRecord,currentChatJid:K.currentChatJid,currentChatBranches:K.currentChatBranches,formatBranchPickerLabel:K.formatBranchPickerLabel,activeSearchScopeLabel:K.activeSearchScopeLabel,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,oobePanelState:K.oobePanelState,composePrefillRequest:K.composePrefillRequest,requestComposePrefill:K.requestComposePrefill,handleOobeSetupProvider:K.handleOobeSetupProvider,handleOobeShowModelPicker:K.handleOobeShowModelPicker,handleOobeOpenWorkspace:K.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:K.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:K.handleCompleteProviderReadyOobe,posts:K.posts,hasMore:K.hasMore,loadMore:K.loadMore,timelineRef:K.timelineRef,agents:K.agents,userProfile:K.userProfile,removingPostIds:K.removingPostIds,extensionStatusPanels:K.extensionStatusPanels,pendingExtensionPanelActions:K.pendingExtensionPanelActions,searchOpen:K.searchOpen,followupQueueItems:K.followupQueueItems,viewStateRef:K.viewStateRef,loadPosts:K.loadPosts,scrollToBottom:K.scrollToBottom,searchScope:K.searchScope,tabStripTabs:K.tabStripTabs,tabStripActiveId:K.tabStripActiveId,handleTabActivate:K.handleTabActivate,previewTabs:K.previewTabs,diffTabs:K.diffTabs,handleTabTogglePreview:K.handleTabTogglePreview,handleTabToggleDiff:K.handleTabToggleDiff,panePopoutPath:K.panePopoutPath,tabPaneOverrides:K.tabPaneOverrides,handleTabClose:K.handleTabClose,handleTabCloseOthers:K.handleTabCloseOthers,handleTabCloseAll:K.handleTabCloseAll,handleTabTogglePin:K.handleTabTogglePin,handleTabEditSource:K.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:K.openEditor,openTerminalTab:K.openTerminalTab,openVncTab:K.openVncTab,fileRefs:Q.fileRefs,messageRefs:Q.messageRefs,followupQueueCount:Q.followupQueueCount,attachmentPreview:Q.attachmentPreview,setAttachmentPreview:Q.setAttachmentPreview,extensionWorkingState:Q.extensionWorkingState,activeChatAgents:V.activeChatAgents,connectionStatus:V.connectionStatus,activeModel:V.activeModel,activeModelUsage:V.activeModelUsage,activeThinkingLevel:V.activeThinkingLevel,supportsThinking:V.supportsThinking,contextUsage:V.contextUsage,notificationsEnabled:V.notificationsEnabled,notificationPermission:V.notificationPermission,handleToggleNotifications:V.handleToggleNotifications,setActiveModel:V.setActiveModel,applyModelState:V.applyModelState,setPendingRequest:L.setPendingRequest,pendingRequestRef:L.pendingRequestRef,...G,...Z,...X,...Y,...q,...L,...Q,...V};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:F,mainShellOptions:N}}function JJ(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function zL(_){let $=JJ({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return DL({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}T0();var WL="(min-width: 1024px) and (orientation: landscape)";function l9(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function OL(_,$){let j=l9(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function AJ(_,$,j){let G=l9(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function Q6(_=typeof window<"u"?window:null){let $=l9(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function JL(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function AL(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||Q6($),Y=JL(X),q=OL($,Y);if(typeof q==="boolean")return q;if(G&&X==="desktop"){let K=OL($,"workspaceOpen");if(typeof K==="boolean")return K}return Z}function kL(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||Q6(j);AJ(j,JL(Z),Boolean(_))}g5();var kJ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function ML(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(x1({window:j,navigator:G}))};Z();let Y=kJ.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",Z),()=>q.removeEventListener("change",Z);if(typeof q.addListener==="function")return q.addListener(Z),()=>q.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let q of Y)q();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function q8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function yL(_={}){return x1(_)&&r6(_)}function MJ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let G=Number($?.innerHeight||0);if(Number.isFinite(G)&&G>0)return Math.round(G);return null}function yJ(_={},$={}){if(!yL(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=MJ({window:j});if(Z&&Z>0)G.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(X){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",X)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(X){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",X)}}return Z}function TL(_={}){if(!yL(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},Y=()=>{G=0,yJ({window:$,document:j})},q=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},K=()=>{q();for(let V of[80,220,420]){let F=$.setTimeout?.(()=>{Z.delete(F),q()},V);if(F!=null)Z.add(F)}},L=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},Q=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",L),j.addEventListener("focusin",K,!0),Q?.addEventListener?.("resize",K),Q?.addEventListener?.("scroll",K),()=>{X(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",L),j.removeEventListener("focusin",K,!0),Q?.removeEventListener?.("resize",K),Q?.removeEventListener?.("scroll",K)}}var h9="resume-layout-settling",TJ=220,Y5=new WeakMap;function wJ(_){if(!_){L_(Y8,"");return}L_(Y8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function xJ(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function IJ(_,$={}){if(!_)return()=>{};let{durationMs:j=TJ,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=Y5.get(_);if(X)Z(X);_.classList.add(h9);let Y=G(()=>{if(Y5.get(_)===Y)_.classList.remove(h9),Y5.delete(_)},j);return Y5.set(_,Y),()=>{let q=Y5.get(_);if(q)Z(q),Y5.delete(_);_.classList.remove(h9)}}function CJ(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function wL(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:q,agents:K,agentsRef:L,currentChatJid:Q,activeChatJidRef:V,userProfile:F,userProfileRef:N,brandingRef:H,panePopoutMode:z=!1}=_;DX(30000),u(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),u(()=>EZ(),[]),u(()=>ML(Z),[Z]),u(()=>{let k=()=>{},A=q8(()=>{k(),k=IJ(G.current)});return()=>{A(),k()}},[G]);let E=g(Q6());return u(()=>{kL(X,{bucket:E.current})},[X]),u(()=>{if(typeof window>"u"||!window.matchMedia)return;let k=window.matchMedia(WL),A=()=>{let O=Q6(window);if(E.current===O)return;let T=E.current;if(E.current=O,T==="desktop"&&O==="narrow")Y(!1)};if(k.addEventListener)k.addEventListener("change",A);else if(k.addListener)k.addListener(A);return()=>{if(k.removeEventListener)k.removeEventListener("change",A);else if(k.removeListener)k.removeListener(A)}},[Y]),u(()=>TL(),[]),u(()=>{wJ(q)},[q]),u(()=>{L.current=K||{}},[K,L]),u(()=>{V.current=Q},[V,Q]),u(()=>{N.current=F||{name:"You",avatar_url:null,avatar_background:null}},[F,N]),{applyBranding:P((k,A,O=null)=>{if(typeof document>"u")return;let T=(k||"").trim()||"PiClaw";if(H.current.title!==T){if(xJ({panePopoutMode:z,search:typeof window<"u"?window.location.search:""})){document.title=T;let W=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(W&&W.getAttribute("content")!==T)W.setAttribute("content",T)}H.current.title=T}let x=A?`${A}|${O||""}`:"";if(H.current.avatarBase!==x){H.current.avatarBase=x;let W=O||Date.now();CJ(document,W)}},[H])}}T0();function xL(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function p9(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function n9(_,$){let j=Array.isArray(_)?_:[],G=p9($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function r9(_,$){let j=Array.isArray(_)?_:[],G=p9($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function d9(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=p9(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function IL(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function CL(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function o9(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:q,setCurrentHashtag:K,setPosts:L,setHasMore:Q}=_,V=typeof $==="string"?$.trim():"";if(!V)return;let F=j==="root"||j==="all"?j:"current";Y(F),q(V),K(null),L(null);try{let N=await X(V,50,0,G,F,Z,_.filters);L(Array.isArray(N?.results)?N.results:[]),Q(!1)}catch(N){console.error("Failed to search:",N),L([])}}async function PL(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:q,hasMoreRef:K,loadMoreRef:L,confirm:Q=(U)=>window.confirm(U),showAlert:V=(U)=>alert(U),scheduleTimeout:F=(U,k)=>{setTimeout(U,k)}}=_;if(!$)return;let N=$.id,H=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,z=j?.filter((U)=>U?.data?.thread_id===N&&U?.id!==N).length||0;if(z>0){if(!Q(`Delete this message and its ${z} replies?`))return}let E=(U)=>{if(!U.length)return;q((k)=>{let A=new Set(k);return U.forEach((O)=>A.add(O)),A}),F(()=>{if(X(()=>{Y((k)=>k?k.filter((A)=>!U.includes(A.id)):k)}),q((k)=>{let A=new Set(k);return U.forEach((O)=>A.delete(O)),A}),K.current)L.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let U=await Z(N,z>0,H);if(U?.ids?.length)E(U.ids)}catch(U){let k=U instanceof Error?U.message:String(U||"");if(z===0&&k.includes("Replies exist")){if(!Q("Delete this message and its replies?"))return;let O=await Z(N,!0,H);if(O?.ids?.length)E(O.ids);return}console.error("Failed to delete post:",U),V(`Failed to delete message: ${k}`)}}async function RL(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(V)=>document.getElementById(V),scheduleRaf:q=(V)=>requestAnimationFrame(V),scheduleTimeout:K=(V,F)=>{setTimeout(V,F)}}=_,L=(V)=>{V.scrollIntoView({behavior:"smooth",block:"center"}),V.classList.add("post-highlight"),K(()=>V.classList.remove("post-highlight"),2000)},Q=Y(`post-${$}`);if(Q){L(Q);return}try{let V=typeof j==="string"&&j.trim()?j.trim():G,N=(await Z($,V))?.thread?.[0];if(!N)return;X((H)=>{if(!H)return[N];if(H.some((z)=>z.id===N.id))return H;return[...H,N]}),q(()=>{K(()=>{let H=Y(`post-${$}`);if(H)L(H)},50)})}catch(V){console.error("[scrollToMessage] Failed to fetch message",$,V)}}function PJ(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function RJ(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:q,setSearchQuery:K,setSearchOpen:L,setMessageRefs:Q,navigate:V,chatOnlyMode:F,baseHref:N=typeof window<"u"?window.location.href:"http://localhost/"}=_,H=String($??"").trim();if(!H)return!1;let z=typeof j==="string"&&j.trim()?j.trim():G,E=z!==G,U=Boolean(Y||X||Z);if(!E&&!U)return Q((k)=>n9(k,H)),!0;if(Q([H]),q?.(null),K?.(null),L?.(!1),E&&typeof V==="function"){let k=A1(N,z,{chatOnly:F});V(k)}return!0}function fL(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:q,setMessageRefs:K,currentChatJid:L,currentHashtag:Q,searchQuery:V,searchOpen:F,setCurrentHashtag:N,setSearchQuery:H,setSearchOpen:z,navigate:E,chatOnlyMode:U,baseHref:k,getThread:A,setPosts:O}=_,T=P(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);u(()=>{return()=>{T()}},[T]);let x=P((s)=>{q((q0)=>n9(q0,s))},[q]),W=P((s)=>{q((q0)=>r9(q0,s))},[q]),J=P(()=>{q([])},[q]),M=P((s)=>{q(d9(s))},[q]),D=P((s,q0=null,X0="info",H0=3000)=>{T(),$({title:s,detail:q0||null,kind:X0||"info"}),j.current=setTimeout(()=>{$((B0)=>B0?.title===s?null:B0)},H0)},[T,j,$]),y=P((s,{autoOpenEditor:q0=!1}={})=>{let X0=xL(s,{editorOpen:G,autoOpenEditor:q0,resolvePane:X});if(X0.kind==="open"){Z(X0.path);return}if(X0.kind==="toast")D(X0.title,X0.detail,X0.level)},[G,Z,X,D]),I=P((s)=>{y(s,{autoOpenEditor:!1})},[y]),R=P((s)=>{y(s,{autoOpenEditor:!0})},[y]),S=P(()=>{let s=Y;if(s)x(s)},[x,Y]),v=P((s,q0=null)=>{RJ({id:s,targetChatJid:q0,currentChatJid:L,currentHashtag:Q,searchQuery:V,searchOpen:F,setCurrentHashtag:N,setSearchQuery:H,setSearchOpen:z,setMessageRefs:K,navigate:E,chatOnlyMode:U,baseHref:k})},[k,U,L,Q,E,F,V,N,K,z,H]),c=P(async(s,q0=null)=>{await RL({id:s,targetChatJid:q0,currentChatJid:L,getThread:A,setPosts:O})},[L,A,O]),h=P((s)=>{K((q0)=>r9(q0,s))},[K]),$0=P(()=>{K([])},[K]),b=P((s)=>{K(d9(s))},[K]),t=P((s)=>{D("Compose failed",PJ(s),"error",5000)},[D]);return{clearIntentToast:T,addFileRef:x,removeFileRef:W,clearFileRefs:J,setFileRefsFromCompose:M,showIntentToast:D,openFileFromPill:I,openTimelineFileFromPill:R,attachActiveEditorFile:S,addMessageRef:v,scrollToMessage:c,removeMessageRef:h,clearMessageRefs:$0,setMessageRefsFromCompose:b,handleComposeSubmitError:t}}T0();async function SL(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:q,thoughtBufferRef:K,draftBufferRef:L,setAgentThought:Q,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let F=G.current;if($==="thought"){if(Z.current=j,F)try{await Y(F,"thought",j)}catch(N){console.warn("Failed to update thought visibility:",N)}if(!j)return;try{let N=F?await q(F,"thought"):null;if(N?.text)K.current=N.text;Q((H)=>({...H||{text:"",totalLines:0},fullText:K.current||H?.fullText||"",totalLines:Number.isFinite(N?.total_lines)?N.total_lines:H?.totalLines||0}))}catch(N){console.warn("Failed to fetch full thought:",N)}return}if(X.current=j,F)try{await Y(F,"draft",j)}catch(N){console.warn("Failed to update draft visibility:",N)}if(!j)return;try{let N=F?await q(F,"draft"):null;if(N?.text)L.current=N.text;V((H)=>({...H||{text:"",totalLines:0},fullText:L.current||H?.fullText||"",totalLines:Number.isFinite(N?.total_lines)?N.total_lines:H?.totalLines||0}))}catch(N){console.warn("Failed to fetch full draft:",N)}}function fJ(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function SJ(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function uL(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:q,setAgentStatus:K,draftBufferRef:L,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:F,currentTurnIdRef:N,steerQueuedTurnIdRef:H,agentStatusRef:z,silentRecoveryRef:E,thoughtExpandedRef:U,draftExpandedRef:k,setCurrentTurnId:A,setSteerQueuedTurnId:O,currentTurnIdRefForPanel:T,setAgentThoughtVisibility:x,getAgentThought:W,setAgentThought:J,setAgentDraft:M}=_,D=P((c={})=>{let h=Number(c.atMs),$0=Number.isFinite(h)&&h>0?h:Date.now();if(Z.current=$0,c.running)Y.current=!0,q((b)=>b?b:!0);if(c.clearSilence)X.current=0},[Y,Z,X,q]),y=P(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);u(()=>()=>{y()},[y]);let I=P(()=>{y(),K((c)=>fJ(c))},[y,K]),R=P((c)=>{if(!c)return;y();let h=Date.now();G.current=h,K(SJ(c)),j.current=setTimeout(()=>{if(G.current!==h)return;K(($0)=>{if(!$0||!($0.last_activity||$0.lastActivity))return $0;return null})},$)},[y,j,G,$,K]),S=P(()=>{Y.current=!1,q(!1),Z.current=null,X.current=0,L.current="",Q.current="",V.current=null,F.current=null,N.current=null,H.current=null,z.current=null,E.current={inFlight:!1,lastAttemptAt:0,turnId:null},y(),A(null),O(null),U.current=!1,k.current=!1},[z,y,N,L,k,Y,Z,F,X,V,A,q,O,E,H,Q,U]),v=P(async(c,h)=>{await SL({panelKey:c,expanded:h,currentTurnIdRef:T,thoughtExpandedRef:U,draftExpandedRef:k,setAgentThoughtVisibility:x,getAgentThought:W,thoughtBufferRef:Q,draftBufferRef:L,setAgentThought:J,setAgentDraft:M})},[T,L,k,W,M,J,x,Q,U]);return{noteAgentActivity:D,clearLastActivityTimer:y,clearLastActivityFlag:I,showLastActivity:R,clearAgentRunState:S,handlePanelToggle:v}}T0();function K8(_){return _?{..._}:{text:"",totalLines:0}}function gL(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function uJ(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function gJ(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function bL(_){return{agentStatus:_.agentStatus,agentDraft:K8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:K8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:gL(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:uJ(_.silentRecovery)}}function vL(_){let $=_.snapshot||gJ(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(K8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(K8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(gL($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function i9(_){return String(_||"").trim()||"web:default"}function mL({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function bJ(_){return mL(_)}function vJ(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function cL(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:q,agentPlan:K,agentThought:L,pendingRequest:Q,pendingRequestRef:V,followupQueueItems:F,activeModel:N,activeThinkingLevel:H,supportsThinking:z,activeModelUsage:E,contextUsage:U,isAgentRunningRef:k,wasAgentActiveRef:A,draftBufferRef:O,thoughtBufferRef:T,lastAgentEventRef:x,lastSilenceNoticeRef:W,lastAgentResponseRef:J,currentTurnIdRef:M,thoughtExpandedRef:D,draftExpandedRef:y,agentStatusRef:I,silentRecoveryRef:R,clearLastActivityTimer:S,setIsAgentTurnActive:v,setAgentStatus:c,setAgentDraft:h,setAgentPlan:$0,setAgentThought:b,setPendingRequest:t,setCurrentTurnId:s,setFollowupQueueItems:q0,setActiveModel:X0,setActiveThinkingLevel:H0,setSupportsThinking:B0,setActiveModelUsage:K0,setContextUsage:D0,lastNotifiedIdRef:Q0,agentsRef:k0,notify:d,shouldNotifyLocallyForChat:G0}=_,x0=P((P0)=>{if(!bJ({remainingQueueCount:P0,steerQueuedTurnId:Z.current,currentTurnId:M.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,M,X,Z]),y0=P(()=>bL({agentStatus:Y,agentDraft:q,agentPlan:K,agentThought:L,pendingRequest:Q,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:F,activeModel:N,activeThinkingLevel:H,supportsThinking:z,activeModelUsage:E,contextUsage:U,isAgentRunning:k.current,wasAgentActive:A.current,draftBuffer:O.current,thoughtBuffer:T.current,lastAgentEvent:x.current,lastSilenceNotice:W.current,lastAgentResponse:J.current,currentTurnIdRef:M.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:D.current,draftExpanded:y.current,agentStatusRef:I.current,silentRecovery:R.current}),[N,E,H,q,K,Y,L,U,G,F,$,Q,j,z,k,A,O,T,x,W,J,M,Z,D,y,I,R]),C0=P((P0)=>{vL({snapshot:P0,clearLastActivityTimer:S,refs:{isAgentRunningRef:k,wasAgentActiveRef:A,lastAgentEventRef:x,lastSilenceNoticeRef:W,draftBufferRef:O,thoughtBufferRef:T,pendingRequestRef:V,lastAgentResponseRef:J,currentTurnIdRef:M,steerQueuedTurnIdRef:Z,agentStatusRef:I,silentRecoveryRef:R,thoughtExpandedRef:D,draftExpandedRef:y},setters:{setIsAgentTurnActive:v,setAgentStatus:c,setAgentDraft:h,setAgentPlan:$0,setAgentThought:b,setPendingRequest:t,setCurrentTurnId:s,setSteerQueuedTurnId:X,setFollowupQueueItems:q0,setActiveModel:X0,setActiveThinkingLevel:H0,setSupportsThinking:B0,setActiveModelUsage:K0,setContextUsage:D0}})},[I,S,M,O,y,k,x,J,W,V,X0,K0,H0,h,$0,c,b,D0,s,q0,v,t,X,B0,R,Z,T,D,A]),n0=P((P0)=>{if(!P0)return;if(M.current===P0)return;M.current=P0,R.current={inFlight:!1,lastAttemptAt:0,turnId:P0},s(P0),Z.current=null,X(null),O.current="",T.current="",h({text:"",totalLines:0}),$0(""),b({text:"",totalLines:0}),t(null),V.current=null,J.current=null,D.current=!1,y.current=!1},[M,O,y,J,V,h,$0,b,s,t,X,R,Z,T,D]),j_=P((P0)=>{let d0=J.current;if(!d0||!d0.post)return;if(P0&&d0.turnId&&d0.turnId!==P0)return;let w0=d0.post,s0=typeof w0?.chat_jid==="string"&&w0.chat_jid.trim()?w0.chat_jid.trim():"";if(!s0||!G0(s0))return;if(w0.id&&Q0.current===w0.id)return;let S0=vJ(w0);if(!S0)return;Q0.current=w0.id||Q0.current,J.current=null;let t0=k0.current||{},E_=(w0?.data?.agent_id?t0[w0.data.agent_id]:null)?.name||"Pi";d(E_,S0,{sourceLabel:"Local"})},[k0,J,Q0,d,G0]);return{clearQueuedSteerStateIfStale:x0,snapshotCurrentChatPaneState:y0,restoreChatPaneState:C0,setActiveTurn:n0,notifyForFinalResponse:j_}}T0();function L8(_){return _?.turn_id||_?.turnId||null}function q5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function s9(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function a9(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function V8(_,$){return{text:_,totalLines:a9(_,$)}}function t9(_,$){return{text:$?.text||"",totalLines:zX(_),fullText:_}}function lL(_,$,j){return j==="replace"?$:`${_||""}${$}`}function hL(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function pL(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function p1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function nL(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function e9(_,$){return _&&$}function rL(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function dL(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function oL(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function iL(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:q,agentStatusRef:K,pendingRequestRef:L,thoughtBufferRef:Q,draftBufferRef:V,setAgentStatus:F,setAgentDraft:N,setAgentPlan:H,setAgentThought:z,setPendingRequest:E,setActiveTurn:U,noteAgentActivity:k,clearLastActivityFlag:A}=_,O=$;try{let T=await j(O);if(G.current!==O)return null;if(!T||T.status!=="active"||!T.data){if(Z.current&&p1(X.current))Y();return Z.current=!1,q(),K.current=null,F(null),N({text:"",totalLines:0}),H(""),z({text:"",totalLines:0}),E(null),L.current=null,T??null}Z.current=!0;let x=T.data;K.current=x;let W=L8(x);if(W)U(W);k({running:!0,clearSilence:!0,atMs:C$(x)??Date.now()}),A(),F(x);let J=q5(T.thought);if(J)z((D)=>{if(s9(D,J.text))return D;return Q.current=J.text,J});let M=q5(T.draft);if(M)N((D)=>{if(s9(D,M.text))return D;return V.current=M.text,M});return T}catch(T){return console.warn("Failed to fetch agent status:",T),null}}async function sL(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:q,refreshQueueState:K,refreshAgentStatus:L,now:Q=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=G.current||null,F=Z.current,N=Q();if(F.inFlight)return null;if(F.turnId===V&&N-F.lastAttemptAt<X)return null;F.inFlight=!0,F.lastAttemptAt=N,F.turnId=V;try{if(p1(Y.current))await q();return await K(),await L()}finally{F.inFlight=!1}}function mJ(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function aL(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:q,silenceRefreshMs:K,isCompactionStatus:L,setAgentStatus:Q,reconcileSilentTurn:V,now:F=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let N=G.current;if(!N)return;let H=F(),z=H-N,E=X.current,U=L(E),k=mJ(E);if(z>=q){if(!U&&!k)Q({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(z>=Y&&H-Z.current>=K){if(!U&&!k){let A=Math.floor(z/1000);Q({type:"waiting",title:`Waiting for model… No events for ${A}s`})}Z.current=H,V()}}function cJ(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function tL(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:q,thoughtBufferRef:K,pendingRequestRef:L,lastAgentResponseRef:Q,agentStatusRef:V,stalledPostIdRef:F,scrollToBottomRef:N,setCurrentTurnId:H,setAgentDraft:z,setAgentPlan:E,setAgentThought:U,setPendingRequest:k,setAgentStatus:A,setPosts:O,dedupePosts:T,now:x=()=>Date.now(),nowIso:W=()=>new Date().toISOString()}=_;if(!$.current)return;let J=cJ(V.current);$.current=!1,j.current=0,G.current=null,V.current=null,Z.current=null,H(null),X.current=!1,Y.current=!1;let M=(q.current||"").trim();if(q.current="",K.current="",E(""),U({text:"",totalLines:0}),k(null),L.current=null,Q.current=null,!M){z({text:"",totalLines:0}),A({type:"error",title:"Response stalled - No content received"});return}z({text:M,totalLines:a9(M,null),fullText:M});let D=M,y=x(),I=W(),R={id:y,timestamp:I,data:{type:"agent_response",content:D,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:J?.summary||"",tool_title:J?.title||"",tool_name:J?.toolName||"",tool_status:J?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};F.current=y,O((S)=>S?T([...S,R]):[R]),N.current?.(),A(null)}function lJ(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function hJ(_){tL(_)}function eL(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;u(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function _V(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:K,draftBufferRef:L,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:F,agentStatusRef:N,scrollToBottomRef:H,setCurrentTurnId:z,setAgentDraft:E,setAgentPlan:U,setAgentThought:k,setPendingRequest:A,setAgentStatus:O,dedupePosts:T}=_,x=P(()=>{lJ({stalledPostIdRef:$,setPosts:j})},[j,$]),W=P(()=>{hJ({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:K,draftBufferRef:L,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:F,agentStatusRef:N,stalledPostIdRef:$,scrollToBottomRef:H,setCurrentTurnId:z,setAgentDraft:E,setAgentPlan:U,setAgentThought:k,setPendingRequest:A,setAgentStatus:O,setPosts:j,dedupePosts:T})},[Y,T,L,K,G,X,F,N,Z,V,H,E,U,O,k,z,A,j,$,Q,q]);return{removeStalledPost:x,finalizeStalledResponse:W}}function pJ(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function nJ(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function $V(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:q}=_,{applyBranding:K}=wL($),L=fL(j);pJ({removeFileRefRef:q,composeReferenceActions:L});let Q=uL(G),V=cL({...Z,clearLastActivityTimer:Q.clearLastActivityTimer}),F=_V(X);return eL(Y),nJ({applyBranding:K,composeReferenceActions:L,agentActivity:Q,chatPaneRuntime:V,recoveryCallbacks:F})}T0();T0();g_();var Q8=new Map,_j=new Map;function jV(){return Date.now()}function F6(_){return String(_||"").trim()}function GV(_,$=600000){return Boolean(_&&jV()-_.cachedAt<=$)}function rJ(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function ZV(_,$){return Q8.delete(_),Q8.set(_,$),rJ(Q8),$}function F8(_,$){let j=F6(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:jV()};return ZV(j,G)}function $j(_,$={}){let j=F6(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=Q8.get(j)||null;if(!GV(Z,G))return null;return ZV(j,Z)}function XV(_,$,j=5){if(!Array.isArray(_))return[];let G=F6($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let q of _){let K=F6(q?.chat_jid);if(!K||K===G||X.has(K))continue;if(X.add(K),Y.push(K),Y.length>=Z)break}return Y}async function YV(_){let $=Array.from(new Set((_.chatJids||[]).map((q)=>F6(q)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((q)=>!GV($j(q,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let q=Z[X++],K=_j.get(q);if(K){await K;continue}let L=(async()=>{try{let Q=await _.fetchTimeline(q);F8(q,Q)}catch(Q){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",Q,{chatJid:q})}finally{_j.delete(q)}})();_j.set(q,L),await L}});await Promise.all(Y)}function qV(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let q=Y?.id;if(typeof q==="number"&&Number.isFinite(q)&&q<Z)Z=q}if(!Number.isFinite(Z))return a4([...G,...j]);let X=j.filter((Y)=>{let q=Y?.id;return typeof q==="number"&&Number.isFinite(q)&&q<Z});return a4([...G,...X])}function KV({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=C(null),[q,K]=C(!1),L=g(!1),Q=g(null),V=g(!1),F=g(null),N=g(null),H=g(0),z=g(0);u(()=>{L.current=q},[q]),u(()=>{N.current=X},[X]);let E=!G&&!Z,U=g(E);u(()=>{U.current=E},[E]),u(()=>{H.current+=1,Y(null),N.current=null,F.current=null,V.current=!1,L.current=!1,K(!1),z.current=0},[j]);let k=P((J,M)=>{if(!E)return;F8(j,{posts:Array.isArray(J)?J:[],has_more:Boolean(M)})},[j,E]),A=P((J,M)=>{N.current=Array.isArray(J)?J:[],L.current=Boolean(M),Y(N.current),K(L.current),k(N.current,L.current)},[k]),O=P(async(J=null)=>{let M=H.current;try{if(J){let R=await o3(J,50,0,j);if(M!==H.current)return;Y(R.posts),K(!1);return}let D=(R)=>{if(M!==H.current)return;let S=Array.isArray(R?.posts)?R.posts:[],v=Boolean(R?.has_more);A(S,v)},y=$j(j);if(y){A(y.posts,y.has_more);let R=z.current;x$(10,null,j).then((S)=>{if(M!==H.current||z.current!==R)return;if(!U.current)return;let v=Array.isArray(S?.posts)?S.posts:[],c=Boolean(S?.has_more);A(qV(N.current,v),c)}).catch((S)=>{if(M!==H.current)return;console.error("Failed to refresh cached timeline:",S)});return}let I=await x$(10,null,j);D(I)}catch(D){if(M!==H.current)return;throw console.error("Failed to load posts:",D),D}},[j,A]),T=P(async()=>{let J=H.current;try{let M=await x$(10,null,j);if(J!==H.current)return;A(qV(N.current,M?.posts),Boolean(M?.has_more))}catch(M){if(J!==H.current)return;console.error("Failed to refresh timeline:",M)}},[j,A]),x=P(async(J={})=>{let M=H.current,D=N.current;if(!D||D.length===0)return;if(V.current)return;let{preserveScroll:y=!0,preserveMode:I="top",allowRepeat:R=!1}=J,S=(h)=>{if(!y){h();return}if(I==="top")$(h);else _(h)},c=D.slice().sort((h,$0)=>h.id-$0.id)[0]?.id;if(!Number.isFinite(c))return;if(!R&&F.current===c)return;V.current=!0,F.current=c;try{let h=await x$(10,c,j);if(M!==H.current)return;if(z.current+=1,h.posts.length>0)S(()=>{let $0=a4([...h.posts,...N.current||[]]);A($0,h.has_more)});else A(N.current||[],!1)}catch(h){if(M!==H.current)return;console.error("Failed to load more posts:",h)}finally{if(M===H.current)V.current=!1}},[j,_,$,A]);u(()=>{Q.current=x},[x]);let W=P((J)=>{Y((M)=>{let D=typeof J==="function"?J(M):J;if(N.current=D,Array.isArray(D)){if(z.current+=1,E)F8(j,{posts:D,has_more:L.current})}return D})},[j,E]);return{posts:X,setPosts:W,hasMore:q,setHasMore:K,hasMoreRef:L,loadPosts:O,refreshTimeline:T,loadMore:x,loadMoreRef:Q,loadingMoreRef:V,lastBeforeIdRef:F}}T0();function dJ(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function LV(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!dJ(Z));return G.length===_.length?_:G}function VV(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function QV(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function m$(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function FV(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function NV(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function oJ(_,$=150){return Math.abs(_)<=$}function BV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=P(()=>{let K=$.current;if(!K)return;if(oJ(K.scrollTop))K.scrollTop=0},[$]),X=P((K)=>{let L=$.current;if(!L||typeof K!=="function"){K?.();return}let{currentHashtag:Q,searchQuery:V,searchOpen:F}=j.current||{},N=!((V||F)&&!Q),H=N?L.scrollHeight-L.scrollTop:L.scrollTop;K(),requestAnimationFrame(()=>{let z=$.current;if(!z)return;if(N){let E=Math.max(z.scrollHeight-H,0);z.scrollTop=E}else{let E=Math.max(z.scrollHeight-z.clientHeight,0),U=Math.min(H,E);z.scrollTop=U}})},[$,j]),Y=P((K)=>{let L=$.current;if(!L||typeof K!=="function"){K?.();return}let Q=L.scrollTop;K(),requestAnimationFrame(()=>{let V=$.current;if(!V)return;let F=Math.max(V.scrollHeight-V.clientHeight,0);V.scrollTop=Math.min(Q,F)})},[$]),q=P((K)=>{return LV(K,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:q}}function iJ(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function sJ(_){_.scrollToBottomRef.current=_.scrollToBottom}function UV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:q}=_,K=g(null),{scrollToBottom:L,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,filterQueuedPosts:F}=BV({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});sJ({scrollToBottomRef:K,scrollToBottom:L});let{posts:N,setPosts:H,hasMore:z,setHasMore:E,hasMoreRef:U,loadPosts:k,refreshTimeline:A,loadMore:O,loadMoreRef:T}=KV({preserveTimelineScroll:Q,preserveTimelineScrollTop:V,chatJid:Z,currentHashtag:X,searchQuery:Y}),x=Y0(()=>iJ({rawPosts:N,followupQueueItems:q,filterQueuedPosts:F}),[F,q,N]);return{scrollToBottomRef:K,scrollToBottom:L,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,rawPosts:N,setPosts:H,hasMore:z,setHasMore:E,hasMoreRef:U,loadPosts:k,refreshTimeline:A,loadMore:O,loadMoreRef:T,posts:x}}T0();function aJ(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function HV(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:q,loadPosts:K,searchPosts:L,setCurrentHashtag:Q,setSearchQuery:V,setSearchOpen:F,setSearchScope:N,setPosts:H,setHasMore:z,preserveTimelineScrollTop:E,setRemovingPostIds:U,deletePost:k,hasMoreRef:A,loadMoreRef:O}=_,T=P(async(R)=>{await IL({hashtag:R,setCurrentHashtag:Q,setPosts:H,loadPosts:K})},[K,Q,H]),x=P(async()=>{await CL({setCurrentHashtag:Q,setSearchQuery:V,setPosts:H,loadPosts:K})},[K,Q,H,V]),W=P(async(R,S=Z,v)=>{await o9({query:R,scope:S,currentChatJid:X,currentRootChatJid:Y,searchPosts:L,setSearchScope:N,setSearchQuery:V,setCurrentHashtag:Q,setPosts:H,setHasMore:z,filters:v})},[X,Y,L,Z,Q,z,H,V,N]),J=P((R)=>{if(N(R),j&&j.trim())o9({query:j,scope:R,currentChatJid:X,currentRootChatJid:Y,searchPosts:L,setSearchScope:N,setSearchQuery:V,setCurrentHashtag:Q,setPosts:H,setHasMore:z})},[X,Y,L,j,Q,z,H,V,N]),M=P(()=>{F(!0),V(null),Q(null),N("current"),H([])},[Q,H,F,V,N]),D=P(()=>{F(!1),V(null),K()},[K,F,V]),y=Y0(()=>aJ({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),I=P(async(R)=>{await PL({post:R,posts:q,currentChatJid:X,deletePost:k,preserveTimelineScrollTop:E,setPosts:H,setRemovingPostIds:U,hasMoreRef:A,loadMoreRef:O})},[X,k,A,O,q,E,H,U]);return{handleHashtagClick:T,handleBackToTimeline:x,handleSearch:W,handleSearchScopeChange:J,enterSearchMode:M,exitSearchMode:D,isMainTimelineView:y,handleDeletePost:I}}T0();function jj(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function EV(_,$){let j=new Map(_),G=jj($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function N8(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=jj($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function DV(_){if(_?.options?.remove)return!0;return jj(_)?.state!=="running"}function Gj(_,$){return`${_}:${$}`}function zV(_,$,j){let G=Gj($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function OV(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function B8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function WV(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}if($.startsWith("codex.stop"))return await fetch("/agent/codex/stop",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:$,chat_jid:_.currentChatJid})}),{refreshAutoresearchStatus:!1,dismissPanelKey:typeof _.panel?.key==="string"?_.panel.key:void 0};if($.startsWith("codex.dismiss"))return await fetch("/agent/codex/dismiss",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:$,chat_jid:_.currentChatJid})}),{refreshAutoresearchStatus:!1,dismissPanelKey:typeof _.panel?.key==="string"?_.panel.key:void 0};throw Error(`Unsupported panel action: ${$||j}`)}var JV="piclaw:ctx:";function c$(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Z=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Z)?Z:null}}function K5(_,$){let j=c$(_),G=c$($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function L5(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{L_(JV+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function AV(_){if(!_||typeof window>"u"||!window.localStorage)return;try{window.localStorage.removeItem(JV+_)}catch{return}}async function kV(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}=_,K=++j.current,L=$;try{let Q=await X(L);if(K!==j.current)return;if(G.current!==L)return;let V=Z.current,F=Array.isArray(Q?.items)?Q.items:[],N=VV(F,V);if(N.length){Y((H)=>QV(H,N)?H:N);return}if(F.length>0)return;V.clear(),q(0),Y((H)=>H.length===0?H:[])}catch{if(K!==j.current)return;if(G.current!==L)return;Y((Q)=>Q.length===0?Q:[])}}async function MV(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=c$(await G(X));if(j.current!==X)return;if(Y&&Y.percent!=null)Z((q)=>K5(q,Y)?q:Y),L5(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function yV(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let q=await G(Y);if(j.current!==Y)return;Z((K)=>EV(K,q)),X((K)=>B8(K,"autoresearch"))}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",q)}}function TV(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function wV(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(p1($.current))j();G()}h5();var U8=new Map,H8=new Map,tJ=250,xV=1500,IV=300000;function V5(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function eJ(_,$){return`${_}:${$}`}function _A(_){for(let[$,j]of H8.entries())if(_-j>IV)H8.delete($)}function $A(_){for(let[$,j]of U8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>IV)U8.delete($)}}function CV(_=V5()){_A(_),$A(_)}function PV(_){let{chatJid:$,nowMs:j=V5()}=_;if(!$)return;H8.set($,j),CV(j)}function N6(_,$=xV,j=V5()){if(!_)return!1;let G=H8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function B$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=tJ,activationWindowMs:X=xV,nowMs:Y=V5()}=_;CV(Y);let q=eJ($,j),K=U8.get(q)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(U8.set(q,K),K.inFlight)return await K.inFlight;if(Boolean(q2("thread-switch",j)||N6(j,X,Y))&&Number.isFinite(K.lastCompletedAt)&&Y-K.lastCompletedAt<=Z)return K.lastValue;let Q=Promise.resolve().then(G).then((V)=>{return K.lastCompletedAt=V5(),K.lastValue=V??null,K.inFlight=null,V}).catch((V)=>{throw K.lastCompletedAt=V5(),K.inFlight=null,V});return K.inFlight=Q,await Q}function RV(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:q,showIntentToast:K}=_,L=typeof $==="string"&&$.trim()?$.trim():null;if(!L||!j||L===j)return!1;if(G.current===L)return!0;G.current=L;let Q=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!Q&&!Y.current&&!q.current&&!Z.current);return K("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function Zj(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function fV(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:q,setPendingRequest:K,pendingRequestRef:L,clearAgentRunState:Q,hasConnectedOnceRef:V,viewStateRef:F,refreshTimeline:N,refreshAgentStatus:H,refreshQueueState:z,refreshContextUsage:E}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),K(null),L.current=null,Q();return}if(!V.current){if(V.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),K(null),L.current=null,Q(),N6($))return;if(Zj(F.current))N();H(),z(),E();return}if(Zj(F.current))N();H(),z(),E()}function SV(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_,K=Zj($.current);if(j){if(K)G();Z(),X(),Y(),q();return}if(K)G();X(),Y(),q()}function jA(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function uV(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q,getAgentContext:K,setContextUsage:L,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:F,getAgentStatus:N,wasAgentActiveRef:H,viewStateRef:z,refreshTimeline:E,clearAgentRunState:U,agentStatusRef:k,pendingRequestRef:A,thoughtBufferRef:O,draftBufferRef:T,setAgentStatus:x,setAgentDraft:W,setAgentPlan:J,setAgentThought:M,setPendingRequest:D,setActiveTurn:y,noteAgentActivity:I,clearLastActivityFlag:R,isAgentRunningRef:S,currentTurnIdRef:v,silentRecoveryRef:c,silenceRefreshMs:h,lastAgentEventRef:$0,lastSilenceNoticeRef:b,silenceWarningMs:t,silenceFinalizeMs:s,isCompactionStatus:q0,serverVersionContext:X0,setConnectionStatus:H0,setPendingRequestForConnection:B0,hasConnectedOnceRef:K0}=_,D0=P(()=>{return B$({kind:"queue-state",chatJid:$,run:async()=>{return await kV({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}),null}})},[j,q,$,Z,X,G,Y]),Q0=P(async()=>{await B$({kind:"context-usage",chatJid:$,run:async()=>{return await MV({currentChatJid:$,activeChatJidRef:j,getAgentContext:K,setContextUsage:L}),null}})},[j,$,K,L]),k0=P(async()=>{await B$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await yV({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:F}),null}})},[j,$,Q,V,F]),d=P(async()=>{return await B$({kind:"agent-status",chatJid:$,run:async()=>{return await iL({currentChatJid:$,getAgentStatus:N,activeChatJidRef:j,wasAgentActiveRef:H,viewStateRef:z,refreshTimeline:E,clearAgentRunState:U,agentStatusRef:k,pendingRequestRef:A,thoughtBufferRef:O,draftBufferRef:T,setAgentStatus:x,setAgentDraft:W,setAgentPlan:J,setAgentThought:M,setPendingRequest:D,setActiveTurn:y,noteAgentActivity:I,clearLastActivityFlag:R})}})},[j,k,U,R,$,T,N,I,A,E,y,W,J,x,M,D,O,z,H]),G0=P(async()=>{return await sL({isAgentRunningRef:S,pendingRequestRef:A,currentTurnIdRef:v,silentRecoveryRef:c,silenceRefreshMs:h,viewStateRef:z,refreshTimeline:E,refreshQueueState:D0,refreshAgentStatus:d})},[v,S,A,d,D0,E,h,c,z]);u(()=>{let C0=jA(t),n0=setInterval(()=>{aL({isAgentRunningRef:S,pendingRequestRef:A,lastAgentEventRef:$0,lastSilenceNoticeRef:b,agentStatusRef:k,silenceWarningMs:t,silenceFinalizeMs:s,silenceRefreshMs:h,isCompactionStatus:q0,setAgentStatus:x,reconcileSilentTurn:G0})},C0);return()=>clearInterval(n0)},[k,S,q0,$0,b,A,G0,x,s,h,t]);let x0=P((C0)=>{return RV({serverVersion:C0,...X0})},[X0]),y0=P((C0)=>{fV({currentChatJid:$,status:C0,setConnectionStatus:H0,setAgentStatus:x,setAgentDraft:W,setAgentPlan:J,setAgentThought:M,setPendingRequest:B0,pendingRequestRef:A,clearAgentRunState:U,hasConnectedOnceRef:K0,viewStateRef:z,refreshTimeline:E,refreshAgentStatus:d,refreshQueueState:D0,refreshContextUsage:Q0})},[U,$,K0,A,d,Q0,D0,E,W,J,x,M,H0,B0,z]);return{refreshQueueState:D0,refreshContextUsage:Q0,refreshAutoresearchStatus:k0,refreshAgentStatus:d,handleUiVersionDrift:x0,handleConnectionStatusChange:y0}}T0();function B6(_){return typeof _==="string"}function U6(_){return typeof _==="string"&&_.trim().length>0}function E8(_){if(!U6(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function Xj(_){if(!Array.isArray(_))return[];return _.filter(($)=>U6($?.chat_jid)&&U6($?.agent_name))}function gV(_){if(!Array.isArray(_))return[];return _.filter(($)=>B6($?.chat_jid)&&B6($?.agent_name))}function bV(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(B6(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!B6(Y?.chat_jid))return Y;let q=G.get(Y.chat_jid);return q?{...Y,...q,is_active:q.is_active??Y.is_active}:Y}),X=B6(j)?j:"";return Z.sort((Y,q)=>{if(Y.chat_jid===X&&q.chat_jid!==X)return-1;if(q.chat_jid===X&&Y.chat_jid!==X)return 1;let K=Boolean(Y.archived_at),L=Boolean(q.archived_at);if(K!==L)return K?1:-1;if(Boolean(Y.is_active)!==Boolean(q.is_active))return Y.is_active?-1:1;let Q=E8(Y.updated_at)||E8(Y.created_at),V=E8(q.updated_at)||E8(q.created_at);if(Q!==V)return V-Q;let F=U6(Y.agent_name)?Y.agent_name.trim():"",N=U6(q.agent_name)?q.agent_name.trim():"",H=F.localeCompare(N,void 0,{sensitivity:"base"});if(H!==0)return H;return String(Y.chat_jid).localeCompare(String(q.chat_jid))}),Z}var GA={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null,hasFastMode:!1,fastMode:null};function vV(_){if(!_||typeof _!=="object")return GA;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null,hasFastMode:_.fast_mode!==void 0,fastMode:typeof _.fast_mode==="boolean"?_.fast_mode:null}}function mV(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function cV(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},q=Y.name||null,K=Y.avatar_url??Y.avatarUrl??Y.avatar??null,L=!1,Q=!1;if(Z&&Z!==Y.name)q=Z,L=!0;if(X!==void 0){let V=typeof X==="string"?X.trim():null,F=typeof K==="string"?K.trim():null,N=V||null;if(N!==(F||null))K=N,Q=!0}if(!L&&!Q)return null;return{agentId:G,nameChanged:L,avatarChanged:Q,resolvedName:q,resolvedAvatar:K}}function lV(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function hV(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,q=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===q)return _;return{name:X,avatar_url:Y,avatar_background:q}}async function nV(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(EX(X));let Y=X?.user||{};G((K)=>lV(K,Y));let q=mV(X?.agents);Z(q.name,q.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function rV(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=cV($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let K={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)K.name=X.resolvedName;if(X.avatarChanged)K.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:K}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function dV(_){let{payload:$,setUserProfile:j}=_;j((G)=>hV(G,$))}function pV(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function oV(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:q}=_;if($&&typeof $==="object")Y?.((L)=>pV(L,$)?L:$),q?.(!0);let K=vV($);if(K.hasModel)j((L)=>Object.is(L,K.model)?L:K.model);if(K.hasThinkingLevel){let L=K.thinkingLevelLabel??K.thinkingLevel;G((Q)=>Object.is(Q,L)?Q:L)}if(K.hasSupportsThinking)Z((L)=>L===K.supportsThinking?L:K.supportsThinking);if(K.hasProviderUsage)X((L)=>pV(L,K.providerUsage)?L:K.providerUsage)}async function iV(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[q,K]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let L=Xj(q?.chats),Q=Xj(K?.chats),V=bV(L,Q,Y);return X(V),V}catch{if(Z.current!==Y)return[];return X([]),[]}}async function sV(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(gV(Z?.chats))}catch{G([])}}function aV(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),NV($))Y()}function tV(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,q=$("sidebarWidth",null),K=Number.isFinite(q)?Math.min(Math.max(Number(q),Z),X):Y;if(j.current=K,G)G.style.setProperty("--sidebar-width",`${K}px`);return K}async function eV(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:q,setPosts:K,setHasMore:L,scrollToBottom:Q,isCancelled:V,scheduleRaf:F=(O)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(O);return}setTimeout(O,0)},scheduleTimeout:N=(O,T)=>{setTimeout(O,T)},onTimelineLoadStart:H,onTimelineDataReady:z,onTimelineFirstPaint:E,onTimelineError:U}=_,k=(O)=>{if(V())return;F(()=>{if(V())return;F(()=>{if(V())return;E?.(O)})})},A=()=>{if(V())return;F(()=>{if(V())return;N(()=>{if(V())return;Q()},0)})};if($){H?.({mode:"hashtag",hashtag:$});try{if(await Y($),V())return;z?.({mode:"hashtag",hashtag:$}),k({mode:"hashtag"})}catch(O){if(V())return;throw U?.(O,{mode:"hashtag",hashtag:$}),O}return}if(j){H?.({mode:"search",searchQuery:j,searchScope:G});try{let O=await q(j,50,0,Z,G,X);if(V())return;K(Array.isArray(O?.results)?O.results:[]),L(!1),z?.({mode:"search",resultCount:Array.isArray(O?.results)?O.results.length:0}),k({mode:"search"})}catch(O){if(V())return;U?.(O,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",O),K([]),L(!1)}return}H?.({mode:"timeline"});try{if(await Y(),V())return;z?.({mode:"timeline"}),k({mode:"timeline"}),A()}catch(O){if(V())return;U?.(O,{mode:"timeline"}),console.error("Failed to load timeline:",O)}}h5();g_();function ZA(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:q=60000,scheduleInterval:K=(V,F)=>setInterval(V,F),clearScheduledInterval:L=(V)=>clearInterval(V)}=_;if(Y)$();let Q=K(()=>{j(),G(),Z(),X()},q);return()=>{L(Q)}}function XA(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:q=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:q}),G(),Z(),X(),Y()}function YA(_){let $=XV(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;YV({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>x$(10,null,j))})}function _Q(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:q,currentChatJid:K,currentRootChatJid:L,getAgentModels:Q,getAgentContext:V,getActiveChatAgents:F,getChatBranches:N,activeChatJidRef:H,setActiveChatAgents:z,setCurrentChatBranches:E,setActiveModel:U,setActiveThinkingLevel:k,setSupportsThinking:A,setActiveModelUsage:O,setAgentModelsPayload:T,setHasLoadedAgentModels:x,agentsRef:W,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:D,setContextUsage:y,setExtensionWorkingState:I}=_,R=P(async()=>{await nV({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);u(()=>{R(),tV({readStoredNumber:X,sidebarWidthRef:Y,shellElement:q.current,maxWidth:t5(Number.POSITIVE_INFINITY)})},[q,R,X,Y]);let S=P((X0)=>{oV({payload:X0,setActiveModel:U,setActiveThinkingLevel:k,setSupportsThinking:A,setActiveModelUsage:O,setAgentModelsPayload:T,setHasLoadedAgentModels:x})},[U,O,k,T,x,A]),v=P(()=>q2("thread-switch",K),[K]),c=P(()=>{return B$({kind:"model-state",chatJid:K,run:async()=>{let X0=v();if(X0)e_(X0,"runtime-hydration-start",{phase:"model-state"});let H0=K;try{let[K0,D0]=await Promise.all([(async()=>{let k0=X0||v();if(k0)e_(k0,"model-request-start",{chatJid:H0});let d=await Q(H0);if(k0)e_(k0,"model-request-ready",{chatJid:H0,hasCurrent:Boolean(d?.current),modelCount:Array.isArray(d?.models)?d.models.length:0});return d})(),V(H0).catch(()=>null)]);if(H.current&&H.current!==H0)return null;S(K0);let Q0=c$(D0);if(Q0&&Q0.percent!=null)y((k0)=>K5(k0,Q0)?k0:Q0),L5(H0,Q0);else y(null),AV(H0)}catch{if(H.current&&H.current!==H0)return null;S(null)}let B0=X0||v();if(B0)e_(B0,"runtime-hydration-ready",{chatJid:K}),K2(B0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:K});return null}})},[H,S,K,V,Q,v,y]);u(()=>{PV({chatJid:K}),U(null),k(null),A(!1),O(null),x(!1),T(null),I({message:null,indicator:null,visible:!0}),y(null),c()},[K,c,U,O,k,T,y,I,x,A]);let h=P((X0)=>{rV({payload:X0,agentsRef:W,setAgents:j,applyBranding:Z})},[W,Z,j]),$0=P((X0)=>{dV({payload:X0,setUserProfile:G})},[G]),b=P((X0)=>{let H0=Boolean(X0?.prewarmRecent),B0=Number.isFinite(X0?.prewarmLimit)?Number(X0?.prewarmLimit):5;return B$({kind:"active-chat-agents",chatJid:K,run:async()=>{let K0=v(),D0=await iV({currentChatJid:K,getActiveChatAgents:async()=>{if(K0)e_(K0,"active-chat-list-request-start",{chatJid:K});let Q0=await F(K);if(K0)e_(K0,"active-chat-list-request-ready",{rowCount:Array.isArray(Q0?.chats)?Q0.chats.length:0});return Q0},getChatBranches:async(Q0,k0)=>{if(K0)e_(K0,"branch-list-request-start",{rootChatJid:Q0});let d=await N(Q0,k0);if(K0)e_(K0,"branch-list-request-ready",{rootChatJid:Q0,rowCount:Array.isArray(d?.chats)?d.chats.length:0});return d},activeChatJidRef:H,setActiveChatAgents:z});if(H0)YA({chats:D0,currentChatJid:K,prewarmLimit:B0});return null}})},[H,K,F,N,v,z]),t=P(()=>{return B$({kind:"current-chat-branches",chatJid:K,run:async()=>{let X0=v();return await sV({currentRootChatJid:L,getChatBranches:async(H0,B0)=>{if(X0)e_(X0,"root-branch-request-start",{rootChatJid:H0});let K0=await N(H0,B0);if(X0)e_(X0,"root-branch-request-ready",{rootChatJid:H0,rowCount:Array.isArray(K0?.chats)?K0.chats.length:0});return K0},setCurrentChatBranches:E}),null}})},[K,L,N,v,E]),s=P(()=>{TV({refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:t,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:D})},[b,D,M,t,c,J]),q0=P(()=>{XA({refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:t,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:D,prewarmLimit:5})},[b,D,M,t,c,J]);return u(()=>ZA({refreshModelAndQueueState:s,refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:t,refreshQueueState:J,runImmediately:!1}),[b,t,s,c,J]),u(()=>{let X0=setInterval(()=>{c()},5000);return()=>clearInterval(X0)},[c]),{updateAgentProfile:h,updateUserProfile:$0,applyModelState:S,refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:t,refreshModelAndQueueState:s,refreshPostPaintThreadState:q0}}T0();function qA(_,$){let j=H1(_);return Boolean(_&&j===$)}function Q5(_,$,j){if(!qA(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function $Q(_,$){return{..._,openedAt:$}}function jQ(_){let $=H1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function GQ(_,$,j){let G=Qq({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=H1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=H1(_),Y=Boolean(Z&&X&&Z===X),q={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:q,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function ZQ(_,$){if(!_||_?.source!=="live")return _||null;let j=H1($),G=H1(_);if(j&&G&&j!==G)return _;return null}function XQ(_,$,j){return Q5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function Yj(_,$,j){if(j.errorMessage)return Q5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return Q5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function YQ(_,$,j){return Q5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function qQ(_,$,j){return Q5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function KQ(_,$,j){return Q5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}h5();function KA(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function LQ(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function VQ(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:q,setPosts:K,setHasMore:L,scrollToBottom:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:F,setExtensionWorkingState:N,paneStateOwnerChatJidRef:H,chatPaneStateByChatRef:z,snapshotCurrentChatPaneState:E,restoreChatPaneState:U,dismissedQueueRowIdsRef:k,refreshAgentStatus:A,viewStateRef:O,refreshTimeline:T,refreshModelAndQueueState:x,refreshPostPaintThreadState:W,setFloatingWidget:J,dismissedLiveWidgetKeysRef:M}=_;u(()=>{KA({setExtensionStatusPanels:V,setPendingExtensionPanelActions:F,setExtensionWorkingState:N})},[$,V,F,N]),u(()=>{let I=!1,R=PZ("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return e_(R,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),eV({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:q,setPosts:K,setHasMore:L,scrollToBottom:Q,isCancelled:()=>I,onTimelineLoadStart:(S)=>{e_(R,"timeline-load-start",S||null)},onTimelineDataReady:(S)=>{e_(R,"timeline-data-ready",S||null)},onTimelineFirstPaint:(S)=>{e_(R,"timeline-first-paint",S||null),K2(R,["runtime-hydration-ready","timeline-first-paint"],"settled",S||null),LQ({refreshAgentStatus:A,refreshPostPaintThreadState:W})},onTimelineError:(S,v)=>{RZ(R,S,"timeline-load-failed",v||null),LQ({refreshAgentStatus:A,refreshPostPaintThreadState:W})}}),()=>{I=!0,fZ(R,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,Q,q,L,K,A,W]),u(()=>{let I=H.current||$;z.current.set(I,E())},[z,$,H,E]),u(()=>{let I=H.current||$;if(I===$)return;z.current.set(I,E()),H.current=$,k.current.clear(),U(z.current.get($)||null)},[z,$,k,H,U,E]);let D=P(()=>{wV({viewStateRef:O,refreshTimeline:T,refreshModelAndQueueState:x})},[x,T,O]),y=P((I,R="streaming")=>{let S=new Date().toISOString();J((v)=>GQ(v,I,{fallbackStatus:R,currentChatJid:$,dismissedSessionKeys:M.current,updatedAt:S}))},[$,M,J]);return{refreshCurrentView:D,applyLiveGeneratedWidgetUpdate:y}}T0();T0();g_();function LA({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!_6(),q=Z.visibilityState&&Z.visibilityState!=="visible",K=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return q=!0,!0;return!1},L=()=>{if(K())return;if(q)q=!1,X(),$?.()},Q=()=>{if(K())return;if(q){L();return}if(Y)_.reconnectIfNeeded()},V=()=>{L()},F=()=>{L()};return G.addEventListener("focus",Q),G.addEventListener("pageshow",V),Z.addEventListener("visibilitychange",F),()=>{G.removeEventListener("focus",Q),G.removeEventListener("pageshow",V),Z.removeEventListener("visibilitychange",F)}}function QQ({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=g(_);X.current=_;let Y=g($);Y.current=$;let q=g(j);q.current=j;let K=g(G);K.current=G,u(()=>{let L=new B2((V,F)=>X.current(V,F),(V)=>Y.current(V),{chatJid:Z});L.connect();let Q=LA({sse:L,onWake:()=>K.current?.()});return()=>{Q(),L.disconnect()}},[Z])}g5();J2();function E4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function F5(_,$){return Boolean(_)&&!Boolean($)}function FQ(_,$){return _||$||null}function NQ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function N5(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=m$(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function qj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function VA(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function BQ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:VA($,j),panelKey:typeof $?.key==="string"?$.key:""}}function QA(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function UQ(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};let G=QA($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function HQ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var FA=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function EQ(_){return FA.has(String(_||"").trim())}function NA(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function D8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(NA(_),{detail:G})),!0}function DQ(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function zQ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function OQ(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:q,pendingRequestRef:K,draftBufferRef:L,thoughtBufferRef:Q,previewResyncPendingRef:V,previewResyncGenerationRef:F,steerQueuedTurnIdRef:N,thoughtExpandedRef:H,draftExpandedRef:z,draftThrottleRef:E,thoughtThrottleRef:U,viewStateRef:k,followupQueueItemsRef:A,dismissedQueueRowIdsRef:O,scrollToBottomRef:T,hasMoreRef:x,loadMoreRef:W,lastAgentResponseRef:J,wasAgentActiveRef:M,setActiveTurn:D,applyLiveGeneratedWidgetUpdate:y,setFloatingWidget:I,clearLastActivityFlag:R,handleUiVersionDrift:S,setAgentStatus:v,setAgentDraft:c,setAgentPlan:h,setAgentThought:$0,setPendingRequest:b,clearAgentRunState:t,getAgentStatus:s,noteAgentActivity:q0,showLastActivity:X0,refreshTimeline:H0,refreshModelAndQueueState:B0,refreshActiveChatAgents:K0,refreshCurrentChatBranches:D0,notifyForFinalResponse:Q0,setContextUsage:k0,refreshContextUsage:d,refreshQueueState:G0,setFollowupQueueItems:x0,clearQueuedSteerStateIfStale:y0,setSteerQueuedTurnId:C0,applyModelState:n0,getAgentContext:j_,setExtensionStatusPanels:P0,setPendingExtensionPanelActions:d0,setExtensionWorkingState:w0,refreshActiveEditorFromWorkspace:s0,showIntentToast:S0,removeStalledPost:t0,setPosts:V_,preserveTimelineScrollTop:E_,openEditor:l0}=j,{turnId:u0,isCurrentChatEvent:f0}=DQ(_,$,G);if(f0)Z($),X($);if(_==="ui_theme"){o4($);return}if(_==="ui_meters"){TX($);return}if(_==="ui_open_tab"){let L0=typeof $?.path==="string"?$.path.trim():"",W0=typeof $?.label==="string"?$.label.trim():void 0;if(L0==="piclaw://settings"){let b0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:b0?{section:b0}:void 0}));return}if(L0&&typeof l0==="function")l0(L0,W0?{label:W0}:void 0);return}let a0=NQ(_);if(a0.kind==="update"){if(!f0)return;if(a0.shouldAdoptTurn&&F5(u0,Y.current))D(u0);y($,a0.fallbackStatus||"streaming");return}if(a0.kind==="close"){if(!f0)return;I((L0)=>ZQ(L0,$));return}if(_?.startsWith("agent_")&&!zQ(_))R();if(_==="connected"){if(S($?.app_asset_version))return;if($?.ui_theme){let b0=$.ui_theme.theme||"default",N_=$.ui_theme.tint||null;o4({theme:b0,tint:N_})}let L0=F.current+1;if(F.current=L0,V.current=!0,L.current="",Q.current="",v(null),c({text:"",totalLines:0}),h(""),$0({text:"",totalLines:0}),w0({message:null,indicator:null,visible:!0}),b(null),K.current=null,t(),N6(G)){if(F.current===L0)V.current=!1;return}let W0=G;if(s(W0).then((b0)=>{if(q.current!==W0)return;if(!b0||b0.status!=="active"||!b0.data)return;let N_=b0.data,k_=L8(N_);if(k_)D(k_);v(N_),q0({clearSilence:!0,atMs:C$(N_)??Date.now()}),X0(N_);let e0=q5(b0.thought);if(e0)Q.current=e0.text,$0(e0);let D_=q5(b0.draft);if(D_)L.current=D_.text,c(D_)}).catch((b0)=>{console.warn("Failed to fetch agent status:",b0)}).finally(()=>{if(F.current===L0)V.current=!1}),p1(k.current))H0();B0();return}if(_==="agent_status"){if(!f0){if($?.type==="done"||$?.type==="error")K0(),D0();return}if($.type==="done"||$.type==="error"){if(E4(u0,Y.current))return;if($.type==="done"){if(Q0(u0||Y.current),p1(k.current))H0();let L0=c$($.context_usage);if(L0&&L0.percent!=null)k0((W0)=>K5(W0,L0)?W0:L0),L5(G,L0)}if(d(),M.current=!1,t(),O.current.clear(),K0(),G0(),c({text:"",totalLines:0}),h(""),$0({text:"",totalLines:0}),w0({message:null,indicator:null,visible:!0}),b(null),$.type==="error")v({type:"error",title:$.title||"Agent error"}),setTimeout(()=>v(null),8000);else v(null)}else{if(u0)D(u0);if(q0({running:!0,clearSilence:!0,atMs:C$($)??Date.now()}),$.type==="thinking")L.current="",Q.current="",c({text:"",totalLines:0}),h(""),$0({text:"",totalLines:0});v($)}return}if(_==="agent_steer_queued"){if(!f0)return;if(E4(u0,Y.current))return;let L0=FQ(u0,Y.current);if(!L0)return;N.current=L0,C0(L0);return}if(_==="agent_followup_queued"){if(!f0)return;x0((L0)=>FV(L0,$)),G0();return}if(_==="agent_followup_consumed"){if(!f0)return;let L0=N5(A.current,$);if(L0)y0(L0.remainingQueueCount),x0((W0)=>m$(W0,L0.rowId).items);if(G0(),p1(k.current))H0();return}if(_==="agent_followup_removed"){if(!f0)return;let L0=N5(A.current,$);if(L0)O.current.add(L0.rowId),y0(L0.remainingQueueCount),x0((W0)=>m$(W0,L0.rowId).items);G0();return}if(_==="agent_draft_delta"){if(!f0)return;if(V.current)return;if(E4(u0,Y.current))return;if(F5(u0,Y.current))D(u0);q0({running:!0,clearSilence:!0}),L.current=hL(L.current,$);let L0=Date.now();if(!E.current||L0-E.current>=100){E.current=L0;let W0=L.current;if(z.current)c((b0)=>t9(W0,b0));else c(V8(W0,null))}return}if(_==="agent_draft"){if(!f0)return;if(V.current)return;if(E4(u0,Y.current))return;if(F5(u0,Y.current))D(u0);q0({running:!0,clearSilence:!0});let L0=$.text||"",W0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")h((b0)=>lL(b0,L0,W0));else if(!z.current)L.current=L0,c(V8(L0,$.total_lines));return}if(_==="agent_thought_delta"){if(!f0)return;if(V.current)return;if(E4(u0,Y.current))return;if(F5(u0,Y.current))D(u0);q0({running:!0,clearSilence:!0}),Q.current=pL(Q.current,$);let L0=Date.now();if(H.current&&(!U.current||L0-U.current>=100)){U.current=L0;let W0=Q.current;$0((b0)=>t9(W0,b0))}return}if(_==="agent_thought"){if(!f0)return;if(V.current)return;if(E4(u0,Y.current))return;if(F5(u0,Y.current))D(u0);q0({running:!0,clearSilence:!0});let L0=$.text||"";if(!H.current)Q.current=L0,$0(V8(L0,$.total_lines));return}if(_==="model_changed"){if(!f0)return;n0($);let L0=G;j_(L0).then((W0)=>{if(q.current!==L0)return;let b0=c$(W0);if(b0&&b0.percent!=null)k0((N_)=>K5(N_,b0)?N_:b0),L5(L0,b0)}).catch(()=>{if(q.current!==L0)return});return}let F_=BQ(_,$,G);if(F_.isStatusPanelWidgetEvent){if(F_.eventChatJid!==G)return;if(!F_.panelKey)return;if(P0((L0)=>N8(L0,$)),DV($))d0((L0)=>B8(L0,F_.panelKey));D8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));s0($?.updates);return}if(EQ(_)){if(_==="extension_ui_title"){K0(),D0(),D8(_,$);return}if(!f0)return;w0((W0)=>{return UQ(W0,_,$)??W0}),D8(_,$);let L0=HQ(_,$);if(L0)S0(L0.title,L0.detail,L0.kind,L0.durationMs);return}let z_=p1(k.current);if(_==="agent_response"){if(!f0)return;w0({message:null,indicator:null,visible:!0}),t0(),J.current={post:$,turnId:Y.current}}if(nL(_,f0,z_))V_((L0)=>rL(L0,$)),T.current?.();if(_==="interaction_updated"){if(!e9(f0,z_))return;V_((L0)=>dL(L0,$))}if(_==="interaction_deleted"){if(!e9(f0,z_))return;let L0=$?.ids||[];if(L0.length){if(E_(()=>{V_((W0)=>oL(W0,L0))}),x.current)W.current?.({preserveScroll:!0,preserveMode:"top"})}}}function BA(_){return _?15000:60000}function WQ(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:q,updateUserProfile:K,currentTurnIdRef:L,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:F,thoughtBufferRef:N,previewResyncPendingRef:H,previewResyncGenerationRef:z,steerQueuedTurnIdRef:E,thoughtExpandedRef:U,draftExpandedRef:k,draftThrottleRef:A,thoughtThrottleRef:O,viewStateRef:T,followupQueueItemsRef:x,dismissedQueueRowIdsRef:W,scrollToBottomRef:J,hasMoreRef:M,loadMoreRef:D,lastAgentResponseRef:y,wasAgentActiveRef:I,setActiveTurn:R,applyLiveGeneratedWidgetUpdate:S,setFloatingWidget:v,clearLastActivityFlag:c,handleUiVersionDrift:h,setAgentStatus:$0,setAgentDraft:b,setAgentPlan:t,setAgentThought:s,setPendingRequest:q0,clearAgentRunState:X0,getAgentStatus:H0,noteAgentActivity:B0,showLastActivity:K0,refreshTimeline:D0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:k0,refreshCurrentChatBranches:d,notifyForFinalResponse:G0,setContextUsage:x0,refreshContextUsage:y0,refreshQueueState:C0,setFollowupQueueItems:n0,clearQueuedSteerStateIfStale:j_,setSteerQueuedTurnId:P0,applyModelState:d0,getAgentContext:w0,setExtensionStatusPanels:s0,setPendingExtensionPanelActions:S0,setExtensionWorkingState:t0,refreshActiveEditorFromWorkspace:V_,showIntentToast:E_,removeStalledPost:l0,setPosts:u0,preserveTimelineScrollTop:f0,openEditor:a0,finalizeStalledResponse:F_,connectionStatus:z_,agentStatus:L0,refreshAgentStatus:W0,refreshAutoresearchStatus:b0}=_,N_=P((e0,D_)=>{OQ(e0,D_,{currentChatJid:$,updateAgentProfile:q,updateUserProfile:K,currentTurnIdRef:L,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:F,thoughtBufferRef:N,previewResyncPendingRef:H,previewResyncGenerationRef:z,steerQueuedTurnIdRef:E,thoughtExpandedRef:U,draftExpandedRef:k,draftThrottleRef:A,thoughtThrottleRef:O,viewStateRef:T,followupQueueItemsRef:x,dismissedQueueRowIdsRef:W,scrollToBottomRef:J,hasMoreRef:M,loadMoreRef:D,lastAgentResponseRef:y,wasAgentActiveRef:I,setActiveTurn:R,applyLiveGeneratedWidgetUpdate:S,setFloatingWidget:v,clearLastActivityFlag:c,handleUiVersionDrift:h,setAgentStatus:$0,setAgentDraft:b,setAgentPlan:t,setAgentThought:s,setPendingRequest:q0,clearAgentRunState:X0,getAgentStatus:H0,noteAgentActivity:B0,showLastActivity:K0,refreshTimeline:D0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:k0,refreshCurrentChatBranches:d,notifyForFinalResponse:G0,setContextUsage:x0,refreshContextUsage:y0,refreshQueueState:C0,setFollowupQueueItems:n0,clearQueuedSteerStateIfStale:j_,setSteerQueuedTurnId:P0,applyModelState:d0,getAgentContext:w0,setExtensionStatusPanels:s0,setPendingExtensionPanelActions:S0,setExtensionWorkingState:t0,refreshActiveEditorFromWorkspace:V_,showIntentToast:E_,removeStalledPost:l0,setPosts:u0,preserveTimelineScrollTop:f0,openEditor:a0})},[Q,S,d0,X0,c,j_,$,L,W,F,k,A,x,w0,H0,h,M,y,D,B0,G0,V,f0,z,H,k0,V_,y0,d,Q0,C0,D0,l0,J,R,b,t,$0,s,x0,s0,t0,v,n0,S0,q0,u0,P0,E_,K0,E,N,U,O,q,K,T,I,a0]);u(()=>{if(typeof window>"u")return;let e0=window.__PICLAW_TEST_API||{};return e0.emit=N_,e0.reset=()=>{l0(),X0(),$0(null),b({text:"",totalLines:0}),t(""),s({text:"",totalLines:0}),t0({message:null,indicator:null,visible:!0}),q0(null)},e0.finalize=()=>F_(),window.__PICLAW_TEST_API=e0,()=>{if(window.__PICLAW_TEST_API===e0)window.__PICLAW_TEST_API=void 0}},[X0,F_,N_,l0,b,t,$0,s,t0,q0]),QQ({handleSseEvent:N_,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),u(()=>{if(!j||j.length===0)return;let e0=location.hash;if(!e0||!e0.startsWith("#msg-"))return;let D_=e0.slice(5);G(D_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let k_=L0!==null;u(()=>{if(z_!=="connected")return;let e0=BA(k_),D_=setInterval(()=>{SV({viewStateRef:T,isAgentActive:k_,refreshTimeline:D0,refreshQueueState:C0,refreshAgentStatus:W0,refreshContextUsage:y0,refreshAutoresearchStatus:b0})},e0);return()=>clearInterval(D_)},[z_,k_,W0,b0,y0,C0,D0,T]),u(()=>{return q8(()=>{W0(),y0(),C0(),b0()})},[W0,b0,y0,C0])}function UA(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function HA(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function EA(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function DA(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function JQ(_){let $=uV(UA(_)),j=_Q(HA({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=VQ(EA({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return WQ(DA({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}T0();var AQ="piclaw:pane-host-transfer:",zA=300000;function kQ(_){try{return _?.localStorage??null}catch{return null}}function MQ(_){return typeof _==="string"?_.trim():""}function yQ(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function OA(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function WA(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function JA(_,$=globalThis,j=Date.now()){let G=kQ($),Z=MQ(_?.path),X=yQ(_?.payload);if(!G||!Z||!X)return null;let Y=OA(j);try{return G.setItem(`${AQ}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function Kj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=kQ($);if(!G||!Z)return null;let X=`${AQ}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;WA(Z,X);try{let q=JSON.parse(Y),K=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(K+zA<j)return null;let L=MQ(q?.path),Q=yQ(q?.payload);if(!L||!Q)return null;return{path:L,payload:Q,capturedAt:K}}catch{return null}}function z8(_,$=globalThis,j=Date.now()){let G=JA(_,$,j);return G?{pane_transfer:G}:null}function TQ(_=globalThis,$=Date.now()){let j=u4("pane_transfer",_);return Kj(j,_,$)}function D4(_){return typeof _==="string"?_.trim():""}function AA(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function Lj(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(AA($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function kA(_){try{return _?.(),!0}catch($){return!1}}function B5(_,$=typeof window<"u"?window:null){let j=Lj($),G=D4(_?.panePath),Z=D4(_?.paneInstanceId),X=D4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function wQ(_,$=typeof window<"u"?window:null){let j=Lj($),G=D4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function xQ(_,$,j,G){let Z=Lj(_),X=D4($?.panePath),Y=D4($?.paneInstanceId),q=D4($?.paneWindowId);if(!Z||!X||!Y||!q)return null;let K=Z.get(q)||null;if(!K)return null;if(K.panePath!==X||K.paneInstanceId!==Y)return null;if(typeof K.instance?.moveHost!=="function")return null;if(!await K.instance.moveHost(j,G))return null;return Z.delete(q),kA(K.releaseSourceHost),K.instance}k2();function H6(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function IQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(Q)=>{let V=Q?.detail?.path,F=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)G?.(V,F)},q=(Q)=>{let V=Q?.detail?.path,F=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)Z?.(V,F)},K=(Q)=>{let V=Q?.detail?.path,F=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)X?.(V,F)},L=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return L.forEach((Q)=>j.addEventListener(Q,Y)),j.addEventListener("html-viewer:edit-source",q),j.addEventListener("pane:popout",K),()=>{L.forEach((Q)=>j.removeEventListener(Q,Y)),j.removeEventListener("html-viewer:edit-source",q),j.removeEventListener("pane:popout",K)}}function CQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(H6(Z?.target))return;if(!N$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function PQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(q)=>{if(H6(q?.target))return;if(N$(q,"toggleZenMode")){q.preventDefault?.(),G?.();return}if(q?.key==="Escape"&&X())q.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function RQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(H6(Z?.target))return;if(N$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(N$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function fQ(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(H6(G?.target))return;if(!N$(G,"openSettings"))return;G.preventDefault(),h1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function SQ(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(H6(G?.target))return;if(!N$(G,"openHelp"))return;G.preventDefault(),h1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function uQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:q,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let L=X?.()||null;if(!L)return!1;if(G||K<Number(Z||0)||L.inFlight||K<Number(L.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),q?.(!0),!0}function gQ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function bQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:q,setIsRenamingBranch:K,renameChatBranch:L,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,navigate:F,baseHref:N,chatOnlyMode:H,showIntentToast:z,closeRenameForm:E,now:U=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let k=U(),A=q?.()||null;if(!A)return!1;if(X.current||k<Number(Y.current||0)||A.inFlight||k<Number(A.cooldownUntil||0))return!1;X.current=!0,A.inFlight=!0,K?.(!0);try{let O=j.agent_name||"",T=S2(G,O);if(!T.canSubmit)return z?.("Could not rename branch",T.message||"Enter a valid branch handle.","warning",4000),!1;let x=T.normalized||O,W=await L(j.chat_jid,{agentName:x});await Promise.allSettled([Q?.(),V?.()]);let J=W?.branch?.agent_name||x||O,M=W?.branch?.chat_jid;if(M&&M!==j.chat_jid){let D=A1(N,M,{chatOnly:H});F?.(D)}return z?.("Branch renamed",`@${J}`,"info",3500),E?.(),!0}catch(O){let T=O instanceof Error?O.message:String(O||"Could not rename branch."),x=/already in use/i.test(T||"")?`${T} Switch to or restore that existing session from the session manager.`:T;return z?.("Could not rename branch",x||"Could not rename branch.","warning",5000),!1}finally{X.current=!1,K?.(!1);let O=U()+_L;Y.current=O;let T=q?.()||null;if(T)T.inFlight=!1,T.cooldownUntil=O}}async function vQ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:q,refreshActiveChatAgents:K,refreshCurrentChatBranches:L,showIntentToast:Q,baseHref:V,chatOnlyMode:F,navigate:N,confirm:H=(J)=>window.confirm(J)}=_;if(!$)return!1;let z=typeof j==="string"&&j.trim()?j.trim():"",E=typeof G==="string"&&G.trim()?G.trim():"",U=z||Z?.chat_jid||E;if(!U)return Q?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let k=(Z?.chat_jid===U?Z:null)||X.find((J)=>J?.chat_jid===U)||Y.find((J)=>J?.chat_jid===U)||null,A=k?.chat_jid===(k?.root_chat_jid||k?.chat_jid),O=Boolean(A&&U==="web:default"),T=Boolean(A&&X.some((J)=>{let M=typeof J?.chat_jid==="string"?J.chat_jid.trim():"",D=typeof J?.root_chat_jid==="string"?J.root_chat_jid.trim():M;return M&&M!==U&&D===U&&!J?.archived_at}));if(O)return Q?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(T)return Q?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let x=`@${k?.agent_name||U}${k?.chat_jid?` — ${k.chat_jid}`:""}`;if(!H(A?`Archive ${x}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${x}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await q(U),await Promise.allSettled([K?.(),L?.()]);let J=A?"web:default":k?.root_chat_jid||"web:default";Q?.(A?"Session archived":"Branch pruned",`${x} has been archived.`,"info",3000);let M=A1(V,J,{chatOnly:F});return N?.(M),!0}catch(J){let M=J instanceof Error?J.message:String(J||"Could not prune branch.");return Q?.("Could not prune branch",M||"Could not prune branch.","warning",5000),!1}}async function mQ(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:q=(z)=>window.confirm(z)}=_,K=typeof $==="string"?$.trim():"";if(!K||typeof j!=="function")return!1;let L=G.find((z)=>z?.chat_jid===K)||null;if(!Boolean(L?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let V=Boolean(L?.chat_jid&&L.chat_jid===(L.root_chat_jid||L.chat_jid)),F=`@${L?.agent_name||K}`;if(!q(`Permanently delete ${F}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${V?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(K),await Promise.allSettled([Z?.(),X?.()]),Y?.(V?"Archived session deleted":"Archived branch deleted",`${F} was permanently deleted.`,"info",4000),!0}catch(z){let E=z instanceof Error?z.message:String(z||`Could not permanently delete archived ${V?"session":"branch"}.`);return Y?.("Could not delete branch",E||`Could not permanently delete archived ${V?"session":"branch"}.`,"warning",5000),!1}}async function cQ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:q,chatOnlyMode:K,navigate:L}=_,Q=typeof $==="string"?$.trim():"";if(!Q||typeof j!=="function")return!1;try{let V=G.find((U)=>U?.chat_jid===Q)||null,F=await j(Q);await Promise.allSettled([Z?.(),X?.()]);let N=F?.branch,H=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():Q,z=lY(V?.agent_name,N?.agent_name,H);Y?.("Branch restored",z,"info",4200);let E=A1(q,H,{chatOnly:K});return L?.(E),!0}catch(V){let F=V instanceof Error?V.message:String(V||"Could not restore branch.");return Y?.("Could not restore branch",F||"Could not restore branch.","warning",5000),!1}}async function lQ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let q=await j($);if(Y())return!1;let K=q?.branch,L=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!L)throw Error("Branch fork did not return a chat id.");let Q=A1(X,L,{chatOnly:!0});return Z?.(Q,{replace:!0}),!0}catch(q){if(Y())return!1;return G?.({status:"error",message:v4(q)}),!1}}function pQ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let q=typeof j==="string"?j.trim():"";if(!q||q===G)return!1;let K=A1(X,q,{chatOnly:Z});return Y?.(K),!0}function MA(_){return typeof _==="string"?_.trim():""}function yA(_){return new Promise(($)=>setTimeout($,_))}async function hQ(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function nQ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:q,resolveTab:K,buildEditorPopoutTransfer:L}=_,Q=$===X&&Boolean(K?.($));if($===X&&!Q){let z=Z.current;if(await hQ(z,$),typeof z?.preparePopoutTransfer!=="function")return null;return await z.preparePopoutTransfer()}let V=()=>MA(q?.()??j),F=V(),N=G.current;if(F!==$)Y?.($);let H=F===$?G.current:null;if(typeof H?.preparePopoutTransfer!=="function")for(let z=0;z<12;z+=1){if(z>0)await yA(16);else await Promise.resolve();let E=V(),U=G.current,k=E===$,A=U!==N;if(!k||typeof U?.preparePopoutTransfer!=="function")continue;if(F===$||A||z>0){H=U;break}}if(await hQ(H,$),typeof H?.preparePopoutTransfer==="function"){let z=await H.preparePopoutTransfer();if(z)return z}return L?.($)??null}function rQ(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,q=Z($);if(q&&!q.dirty){X($);return}if($===j&&G)Y(!1)}function dQ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:q}=_;if(!j||!$||!G)return;if(!Z.current){let K=q("editorWidth",null),L=Y.current||280,Q=Number.isFinite(K)?Number(K):L;Z.current=e5(Q,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let K=q("dockHeight",null);X.current=Number.isFinite(K)?Number(K):200}G.style.setProperty("--dock-height",`${X.current}px`)}async function oQ(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function iQ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:K}=_;if(typeof q==="function")try{let L=U3(K,$,{chatOnly:j});return q(L),!0}catch(L){return Y?.("Could not create branch",v4(L),"warning",5000),!1}try{let Q=(await G($))?.branch,V=typeof Q?.chat_jid==="string"&&Q.chat_jid.trim()?Q.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let F=Q?.agent_name?`@${Q.agent_name}`:V;Y?.("New branch created",`Switched to ${F}.`,"info",2500);let N=A1(K,V,{chatOnly:j});return q?.(N),!0}catch(L){return Y?.("Could not create branch",v4(L),"warning",5000),!1}}async function sQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:q,onPaneWindowOpened:K,currentChatJid:L,baseHref:Q}=_;if(!$||j)return!1;let V=typeof G==="string"&&G.trim()?G.trim():"";if(!V)return!1;let F=DG(V);if(!F)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let N=Q3(F);if(!N)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;F3(N,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let H=await Y?.(V),z=Boolean(H&&Object.keys(H).length>0),E=EG(Q,V,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:L,params:H});if(N3(N,E),K?.(V,N,H||null),z&&!K)q?.(V);return!0}catch(H){B3(N);let z=H instanceof Error?H.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",z,"warning",5000),!1}}async function aQ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:q,setActiveChatAgents:K,setCurrentChatBranches:L,showIntentToast:Q,baseHref:V}=_;if(!$||j)return!1;let F=HG(G);if(!F)return Q?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(F.mode==="tab"){let H=U3(V,G,{chatOnly:!0});if(!window.open(H,F.target))return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let N=Q3(F);if(!N)return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;F3(N,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let z=(await X(G))?.branch,E=typeof z?.chat_jid==="string"&&z.chat_jid.trim()?z.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let U=await oQ(()=>Y?.());if(U)K?.(Array.isArray(U?.chats)?U.chats:[]);let k=await oQ(()=>q?.(Z));if(k)L?.(Array.isArray(k?.chats)?k.chats:[]);let A=A1(V,E,{chatOnly:!0});return N3(N,A),!0}catch(H){return B3(N),Q?.("Could not open branch window",v4(H),"error",5000),!1}}function TA(_){_(($)=>!$)}function wA(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return pQ({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function xA(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:q=typeof window<"u"}=_;return uQ({hasWindow:q,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function IA(_){gQ(_)}async function CA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await bQ({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function PA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await vQ({hasWindow:$,baseHref:j,...G})}async function RA(_){await mQ(_)}async function fA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await cQ({baseHref:j,...G})}function SA(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:q=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:K=lQ}=_;if(!$||!Y)return;let L=!1;return K({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:q,isCancelled:()=>L}),()=>{L=!0}}async function uA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await iQ({baseHref:j,...G})}async function gA(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:L,terminalTabPath:Q,tabPaneOverrides:V,buildPaneDetachTransfer:F,registerDetachedPaneWindow:N,dockVisible:H,resolveTab:z,closeTab:E,setDockVisible:U,hasWindow:k=typeof window<"u",baseHref:A=k?window.location.href:"http://localhost/"}=_,O=F?.(j)||null;return await sQ({hasWindow:k,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:A,resolveSourceTransfer:async(T)=>{let x=await nQ({panePath:T,activateTab:Y,getActiveTabId:()=>__.getActiveId(),tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:L,terminalTabPath:Q,resolveTab:z,buildEditorPopoutTransfer:(D)=>{if(!D||D===Q)return null;let y=K.current,I=typeof y?.getContent==="function"?y.getContent():void 0,R=typeof y?.isDirty==="function"?y.isDirty():!1,S=V instanceof Map?V.get(D)||null:null,v=__.getViewState(D)||null;return h6({path:D,content:R?I:void 0,paneOverrideId:S,viewState:v})}}),W=T===Q&&!z(T)?L.current:K.current,J=typeof W?.exportHostTransferState==="function"?W.exportHostTransferState():null,M=J?z8({path:T,payload:J}):null;if(O?.paneInstanceId&&O?.paneWindowId&&W&&T!==Q&&J?.kind!=="terminal")B5({panePath:T,paneInstanceId:O.paneInstanceId,paneWindowId:O.paneWindowId,instance:W,releaseSourceHost:()=>{if(T===Q){if(L.current===W)L.current=null;if(K.current===W)K.current=null;return}if(K.current===W)K.current=null}});return{...x||{},...M||{},...O?.params||{}}},onPaneWindowOpened:N?(T,x,W)=>{N(T,G,x,W)}:void 0,closeSourcePaneIfTransferred:N?void 0:(T)=>{rQ({panePath:T,terminalTabPath:Q,dockVisible:H,resolveTab:z,closeTab:E,setDockVisible:U})}})}function bA(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=IQ}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function vA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await aQ({hasWindow:$,baseHref:j,...G})}function mA(_){let{hasWindow:$=typeof window<"u",...j}=_;dQ({hasWindow:$,...j})}function tQ(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:K,setRenameBranchNameDraft:L,setIsRenameBranchFormOpen:Q,setIsRenamingBranch:V,renameChatBranch:F,refreshActiveChatAgents:N,refreshCurrentChatBranches:H,showIntentToast:z,currentChatBranches:E,activeChatAgents:U,pruneChatBranch:k,purgeChatBranch:A,restoreChatBranch:O,branchLoaderMode:T,branchLoaderSourceChatJid:x,forkChatBranch:W,setBranchLoaderState:J,currentRootChatJid:M,isWebAppMode:D,getActiveChatAgents:y,getChatBranches:I,setActiveChatAgents:R,setCurrentChatBranches:S,openEditor:v,activateTab:c,tabStripActiveId:h,editorInstanceRef:$0,dockInstanceRef:b,terminalTabPath:t,tabPaneOverrides:s,buildPaneDetachTransfer:q0,registerDetachedPaneWindow:X0,dockVisible:H0,resolveTab:B0,closeTab:K0,setDockVisible:D0,editorOpen:Q0,shellElement:k0,editorWidthRef:d,dockHeightRef:G0,sidebarWidthRef:x0,readStoredNumber:y0}=_,C0=P(()=>{TA($)},[$]),n0=P((l0)=>{wA({nextChatJid:l0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),j_=P(()=>{xA({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:q.current,getFormLock:K,setRenameBranchNameDraft:L,setIsRenameBranchFormOpen:Q})},[X,K,Y,q,Q,L]),P0=P(()=>{IA({setIsRenameBranchFormOpen:Q,setRenameBranchNameDraft:L})},[Q,L]),d0=P(async(l0)=>{await CA({currentBranchRecord:X,nextName:l0,openRenameForm:j_,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:K,setIsRenamingBranch:V,renameChatBranch:F,refreshActiveChatAgents:N,refreshCurrentChatBranches:H,navigate:Z,chatOnlyMode:G,showIntentToast:z,closeRenameForm:P0})},[P0,X,G,K,Z,j_,N,H,Y,q,F,V,z]),w0=P(async(l0=null)=>{await PA({targetChatJid:l0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:E,activeChatAgents:U,pruneChatBranch:k,refreshActiveChatAgents:N,refreshCurrentChatBranches:H,showIntentToast:z,chatOnlyMode:G,navigate:Z})},[U,G,X,E,j,Z,k,N,H,z]),s0=P(async(l0)=>{await RA({targetChatJid:l0,purgeChatBranch:A,currentChatBranches:E,refreshActiveChatAgents:N,refreshCurrentChatBranches:H,showIntentToast:z})},[E,A,N,H,z]),S0=P(async(l0)=>{await fA({targetChatJid:l0,restoreChatBranch:O,currentChatBranches:E,refreshActiveChatAgents:N,refreshCurrentChatBranches:H,showIntentToast:z,chatOnlyMode:G,navigate:Z})},[G,E,Z,N,H,O,z]);u(()=>SA({branchLoaderMode:T,branchLoaderSourceChatJid:x,forkChatBranch:W,setBranchLoaderState:J,navigate:Z}),[T,x,W,Z,J]);let t0=P(async()=>{await uA({currentChatJid:j,chatOnlyMode:G,forkChatBranch:W,refreshActiveChatAgents:N,refreshCurrentChatBranches:H,showIntentToast:z,navigate:Z})},[G,j,W,Z,N,H,z]),V_=P(async(l0,u0)=>{return await gA({isWebAppMode:D,path:l0,label:u0,showIntentToast:z,currentChatJid:j,activateTab:c,tabStripActiveId:h,editorInstanceRef:$0,dockInstanceRef:b,terminalTabPath:t,tabPaneOverrides:s,buildPaneDetachTransfer:q0,registerDetachedPaneWindow:X0,dockVisible:H0,resolveTab:B0,closeTab:K0,setDockVisible:D0})},[c,q0,K0,j,b,H0,$0,D,X0,B0,D0,z,s,h,t]);u(()=>bA({openEditor:v,popOutPane:(l0,u0)=>{V_(l0,u0)}}),[V_,v]);let E_=P(async()=>{await vA({isWebAppMode:D,currentChatJid:j,currentRootChatJid:M,forkChatBranch:W,getActiveChatAgents:y,getChatBranches:I,setActiveChatAgents:R,setCurrentChatBranches:S,showIntentToast:z})},[j,M,W,y,I,D,R,S,z]);return u(()=>{mA({editorOpen:Q0,shellElement:k0,editorWidthRef:d,dockHeightRef:G0,sidebarWidthRef:x0,readStoredNumber:y0})},[G0,Q0,d,y0,k0,x0]),{toggleWorkspace:C0,handleBranchPickerChange:n0,openRenameCurrentBranchForm:j_,closeRenameCurrentBranchForm:P0,handleRenameCurrentBranch:d0,handlePruneCurrentBranch:w0,handlePurgeArchivedBranch:s0,handleRestoreBranch:S0,handleCreateSessionFromCompose:t0,handlePopOutPane:V_,handlePopOutChat:E_}}T0();function l$(_){return _.status==="fulfilled"?_.value:null}function O8(_){return Math.max(0,Math.min(100,_))}function eQ(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((E)=>E?.data?.is_bot_message).length,Z=$.filter((E)=>!E?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,q=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,K=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,L=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,Q=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,F=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,N=_.modelsPayload?.supports_thinking??_.supportsThinking,H=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),z=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:q},agent:{status:H,phase:z,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:F,supportsThinking:Boolean(N)},context:{tokens:L,contextWindow:Q,percent:K},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:O8(Math.round(K))},{key:"queue",label:"Queue",value:O8(X*18)},{key:"activeChats",label:"Active chats",value:O8(Y*12)},{key:"posts",label:"Timeline load",value:O8($.length*5)}]}}function _F(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function $F(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function jF(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function GF(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function ZF(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function XF(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function YF(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:q,getActiveChatAgents:K,getChatBranches:L,getTimeline:Q,rawPosts:V,activeChatAgents:F,currentChatBranches:N,contextUsage:H,followupQueueItems:z,activeModel:E,activeThinkingLevel:U,supportsThinking:k,isAgentTurnActive:A}=_,[O,T,x,W,J,M,D]=await Promise.allSettled([Z(j),X(j),Y(j),q(j),K(),L(G),Q(20,null,j)]);return eQ({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:l$(O),contextPayload:l$(T),queuePayload:l$(x),modelsPayload:l$(W),activeChatsPayload:l$(J),branchesPayload:l$(M),timelinePayload:l$(D),rawPosts:V,activeChatAgents:F,currentChatBranches:N,contextUsage:H,followupQueueItems:z,activeModel:E,activeThinkingLevel:U,supportsThinking:k,isAgentTurnActive:A})}function qF(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,steerAgentQueueItem:K}=_,L=N5(j.current,$);if(!L)return;let{rowId:Q}=L;G.current.add(Q),Y((V)=>m$(V,Q).items),K(Q,i9(Z)).then(()=>{X()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let F=qj("steer");q(F.title,F.detail,"warning"),G.current.delete(Q),X()})}function KF(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,clearQueuedSteerStateIfStale:K,removeAgentQueueItem:L}=_,Q=N5(j.current,$);if(!Q)return;let{rowId:V}=Q;G.current.add(V),K?.(Q.remainingQueueCount),Y((F)=>m$(F,V).items),L(V,i9(Z)).then(()=>{X()}).catch((F)=>{console.warn("[queue] Failed to remove queued item:",F);let N=qj("remove");q(N.title,N.detail,"warning"),G.current.delete(V),X()})}function LF(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=H1($);if(Z)j.current.delete(Z);G($Q($,new Date().toISOString()))}function VF(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=jQ(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function QF(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:q,showIntentToast:K,sendAgentMessage:L,buildFloatingWidgetDashboardSnapshot:Q}=_,V=typeof $?.kind==="string"?$.kind:"",F=H1(j);if(!V||!F)return;if(V==="widget.close"){Y();return}if(V==="widget.submit"){let N=Uq($?.payload),H=Hq($?.payload),z=new Date().toISOString();if(X((E)=>XQ(E,F,{kind:V,payload:$?.payload||null,submittedAt:z,submissionText:N})),!N){if(K("Widget submission received","The widget submitted data without a message payload yet.","info",3500),H)Y();return}(async()=>{try{let E=await L("default",N,null,[],Z?"queue":null,G);q(E),X((k)=>Yj(k,F,{submittedAt:z,submissionText:N,queued:E?.queued||null}));let U=_F(E?.queued);if(K(U.title,U.detail,U.kind,U.durationMs),H)Y()}catch(E){X((k)=>Yj(k,F,{submittedAt:z,submissionText:N,errorMessage:E?.message||"Could not send the widget message."}));let U=$F(E?.message);K(U.title,U.detail,U.kind,U.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let N=new Date().toISOString(),H=jF($?.payload||null,j?.runtimeState?.refreshCount);if(X((z)=>YQ(z,F,{kind:V,payload:$?.payload||null,eventAt:N,nextRefreshCount:H.nextRefreshCount,shouldBuildDashboard:H.shouldBuildDashboard})),V==="widget.request_refresh")if(H.shouldBuildDashboard)(async()=>{try{let z=await Q($?.payload||null);X((U)=>qQ(U,F,{dashboard:z,at:new Date().toISOString(),count:H.nextRefreshCount,echo:$?.payload||null}));let E=GF();K(E.title,E.detail,E.kind,E.durationMs)}catch(z){X((U)=>KQ(U,F,{errorMessage:z?.message||"Could not build dashboard.",at:new Date().toISOString(),count:H.nextRefreshCount}));let E=ZF(z?.message);K(E.title,E.detail,E.kind,E.durationMs)}})();else{let z=XF();K(z.title,z.detail,z.kind,z.durationMs)}}}function cA(_,$=qF){$(_)}function lA(_,$=KF){$(_)}function hA(_,$,j=aV){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function FF(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:K,removeAgentQueueItem:L,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:F,refreshAutoresearchStatus:N}=_,H=P((k)=>{cA({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:K,removeAgentQueueItem:L})},[$,G,j,Z,L,X,Y,K]),z=P((k)=>{lA({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:K,removeAgentQueueItem:L})},[q,$,G,j,Z,L,X,Y,K]),E=P(async(k,A)=>{X((O)=>{if(!Array.isArray(O)||k<0||A<0||k>=O.length||A>=O.length||k===A)return O;let T=[...O],[x]=T.splice(k,1);return T.splice(A,0,x),T});try{let{reorderAgentQueueItem:O}=await Promise.resolve().then(() => (g_(),i5));await O(k,A,$)}catch(O){console.warn("Failed to persist queue reorder:",O),Z()}},[$,Z,X]),U=P((k)=>{hA(k,{refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:F,refreshAutoresearchStatus:N,refreshQueueState:Z})},[Q,N,F,V,Z]);return{handleInjectQueuedFollowup:H,handleRemoveQueuedFollowup:z,handleMoveQueuedFollowup:E,handleMessageResponse:U}}T0();function NF(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function BF(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:q}=_,K=String($||"").trim();if(!K)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let L=new AbortController;Y.current=L,q({question:K,answer:"",thinking:"",error:null,model:null,status:"running"});try{let Q=await G(K,{signal:L.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(V)=>{if(V==="side_prompt_start")q((F)=>F?{...F,status:"running"}:F)},onThinkingDelta:(V)=>{q((F)=>F?{...F,thinking:`${F.thinking||""}${V||""}`}:F)},onTextDelta:(V)=>{q((F)=>F?{...F,answer:`${F.answer||""}${V||""}`}:F)}});if(Y.current!==L)return!0;q((V)=>V?{...V,answer:Q?.result||V.answer||"",thinking:Q?.thinking||V.thinking||"",model:Q?.model||null,status:"success",error:null}:V)}catch(Q){if(L.signal.aborted)return!0;q((V)=>V?{...V,status:"error",error:Q?.payload?.error||Q?.message||"BTW request failed."}:V)}finally{if(Y.current===L)Y.current=null}return!0}async function UF(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function HF(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:q}=_,K=j($);if(!K)return!1;try{let L=await X("default",K,null,[],G?"queue":null,Z);return Y(L),q(L?.queued==="followup"?"BTW queued":"BTW injected",L?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(L){return q("BTW inject failed",L?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function pA(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function nA(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function EF(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setExtensionStatusPanels:X,setPendingExtensionPanelActions:Y,refreshAutoresearchStatus:q,stopAutoresearch:K,dismissAutoresearch:L,streamSidePrompt:Q,btwAbortRef:V,btwSession:F,setBtwSession:N,sendAgentMessage:H,handleMessageResponse:z,dismissedLiveWidgetKeysRef:E,setFloatingWidget:U,getAgentStatus:k,getAgentContext:A,getAgentQueueState:O,getAgentModels:T,getActiveChatAgents:x,getChatBranches:W,getTimeline:J,rawPosts:M,activeChatAgents:D,currentChatBranches:y,contextUsage:I,followupQueueItemsRef:R,activeModel:S,activeThinkingLevel:v,supportsThinking:c,isAgentTurnActive:h}=_,$0=P(async(Q0,k0)=>{let d=typeof Q0?.key==="string"?Q0.key:"",G0=typeof k0?.key==="string"?k0.key:"",x0=Gj(d,G0);if(!d||!G0)return;Y((y0)=>zV(y0,d,G0));try{let y0=await WV({panel:Q0,action:k0,currentChatJid:$,stopAutoresearch:K,dismissAutoresearch:L,writeClipboard:async(C0)=>{if(!await pA(C0))throw Error("Clipboard access is unavailable.")}});if(y0.refreshAutoresearchStatus)q();if(y0.dismissPanelKey)X((C0)=>N8(C0,{key:y0.dismissPanelKey,content:[],options:{remove:!0,surface:"status-panel"}}));if(y0.toast)Z(y0.toast.title,y0.toast.detail,y0.toast.kind,y0.toast.durationMs)}catch(y0){Z("Panel action failed",y0?.message||"Could not complete that action.","warning")}finally{Y((y0)=>OV(y0,x0))}},[$,L,q,X,Y,Z,K]),b=P(()=>{NF({btwAbortRef:V,setBtwSession:N})},[V,N]),t=P(async(Q0)=>{return await BF({question:Q0,currentChatJid:$,streamSidePrompt:Q,resolveBtwChatJid:Gq,showIntentToast:Z,btwAbortRef:V,setBtwSession:N})},[V,$,N,Z,Q]),s=P(async({content:Q0})=>{return await UF({content:Q0,parseBtwCommand:jq,closeBtwPanel:b,runBtwPrompt:t,showIntentToast:Z})},[b,t,Z]),q0=P(()=>{if(F?.question)t(F.question)},[F,t]),X0=P(async()=>{await HF({btwSession:F,buildBtwInjectionText:Yq,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:H,handleMessageResponse:z,showIntentToast:Z})},[F,$,z,G,H,Z]),H0=P(async(Q0=null)=>{return YF({requestPayload:Q0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:k,getAgentContext:A,getAgentQueueState:O,getAgentModels:T,getActiveChatAgents:x,getChatBranches:W,getTimeline:J,rawPosts:M,activeChatAgents:D,currentChatBranches:y,contextUsage:I,followupQueueItems:R.current,activeModel:S,activeThinkingLevel:v,supportsThinking:c,isAgentTurnActive:h})},[D,S,v,I,y,$,j,R,x,A,T,O,k,W,J,h,M,c]),B0=P((Q0)=>{LF({widget:Q0,dismissedLiveWidgetKeysRef:E,setFloatingWidget:U})},[E,U]),K0=P(()=>{VF({dismissedLiveWidgetKeysRef:E,setFloatingWidget:U})},[E,U]),D0=P((Q0,k0)=>{QF({event:Q0,widget:k0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:U,handleCloseFloatingWidget:K0,handleMessageResponse:z,showIntentToast:Z,sendAgentMessage:H,buildFloatingWidgetDashboardSnapshot:H0})},[H0,$,K0,z,G,H,U,Z]);return u(()=>{nA({dismissedLiveWidgetKeysRef:E,setFloatingWidget:U})},[$,E,U]),{handleExtensionPanelAction:$0,closeBtwPanel:b,handleBtwIntercept:s,handleBtwRetry:q0,handleBtwInject:X0,handleOpenFloatingWidget:B0,handleCloseFloatingWidget:K0,handleFloatingWidgetEvent:D0}}T0();function rA(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function dA(_){return!_}function DF(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:q,nextChat:K}=_;u(()=>{if(!rA({hasDockPanes:$,chatOnlyMode:j}))return;return CQ(G)},[j,$,G]),u(()=>{if(!dA(j))return;return PQ({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),u(()=>{if(typeof q!=="function"&&typeof K!=="function")return;return RQ({previousChat:q,nextChat:K})},[K,q]),u(()=>SQ(),[]),u(()=>fQ(),[])}function oA(_){return Boolean(_&&typeof _.closest==="function")}function zF(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function iA(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function sA(){return{lastTriggeredAt:0,accumX:0}}function Vj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var aA=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),tA=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function OF(_){if(!_||!oA(_))return!1;let $=_.closest(aA);if(!$)return!0;return Boolean($.closest(tA))}function JF(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function Qj(_){let $=JF(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function WF(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function eA(_){let $=JF(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:WF(_.candidates,G)},next:{chatJid:Z,name:WF(_.candidates,Z)}}}function _k(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function $k(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function jk(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let q=$<0,K=q?G.next:G.prev,L=_.querySelector(".chat-swipe-chevron");if(L)L.textContent=q?"›":"‹",L.style.order=q?"2":"0";let Q=_.querySelector(".chat-swipe-name");if(Q)Q.textContent=K?.name??""}function E6(_){_.style.display="none",_.style.opacity="0"}function AF(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,q=$.current;if(!q)return()=>{};let K=X(),L=typeof Y==="function"?Y():!1;if(!K&&!L)return()=>{};let Q=iA(),V=sA(),F=null,N={prev:null,next:null},H=!1;function z(){N=eA({candidates:j,currentChatJid:G})}z();function E(){if(!F)F=$k(q);return F}function U(J){let M=J==="next"?N.next:N.prev;if(M)Z(M.chatJid)}function k(J){H=String(J.pointerType||"").toLowerCase()==="pen"}function A(J){if(Vj(Q),z(),!K)return;if(J.touches.length!==1)return;if(H)return;if(zF())return;if(!OF(J.target))return;let M=J.touches[0];Q.active=!0,Q.startX=M.clientX,Q.startY=M.clientY,Q.lastX=M.clientX,Q.lastY=M.clientY,Q.startedAt=Date.now()}function O(J){if(!Q.active||Q.cancelled)return;if(zF()){Q.cancelled=!0,E6(E());return}let M=J.touches[0];if(!M)return;Q.lastX=M.clientX,Q.lastY=M.clientY;let D=Q.lastX-Q.startX,y=Q.lastY-Q.startY;if(!Q.horizontalLocked){if(Math.abs(y)>16&&Math.abs(y)>=Math.abs(D)){Q.cancelled=!0,E6(E());return}if(Math.abs(D)>12&&Math.abs(D)>Math.abs(y)*1.15)Q.horizontalLocked=!0}if(Q.horizontalLocked){if(J.cancelable)J.preventDefault();jk(E(),D,q.clientWidth,N)}}function T(){if(!Q.active)return;let J=Q.lastX-Q.startX,M=Q.lastY-Q.startY,D=!Q.cancelled&&_k({dx:J,dy:M});if(E6(E()),Vj(Q),D)U(J<0?"next":"prev")}function x(){E6(E()),Vj(Q)}function W(J){if(K)return;if(!L)return;if(!OF(J.target))return;let{deltaX:M,deltaY:D}=J;if(!Number.isFinite(M)||Math.abs(M)<72)return;if(Math.abs(M)<=Math.abs(D)*1.35)return;if(J.cancelable)J.preventDefault();let y=Date.now();if(y-V.lastTriggeredAt<450)return;V.lastTriggeredAt=y,U(M>0?"next":"prev")}return q.addEventListener("pointerdown",k,{passive:!0}),q.addEventListener("touchstart",A,{passive:!0}),q.addEventListener("touchmove",O,{passive:!1}),q.addEventListener("touchend",T,{passive:!0}),q.addEventListener("touchcancel",x,{passive:!0}),q.addEventListener("wheel",W,{passive:!1}),()=>{if(q.removeEventListener("pointerdown",k),q.removeEventListener("touchstart",A),q.removeEventListener("touchmove",O),q.removeEventListener("touchend",T),q.removeEventListener("touchcancel",x),q.removeEventListener("wheel",W),F)E6(F),F.remove(),F=null}}function Gk(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function Zk(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function Xk(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function Yk(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=Qj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=Qj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function kF(_){let $=FF(Gk(_)),j=EF(Zk({..._,handleMessageResponse:$.handleMessageResponse})),G=tQ(Xk(_));return DF(Yk({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function qk(_,$){return Boolean(_||$!==null)}function Kk(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function Lk(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:q,refs:K,setters:L,services:Q,helpers:V}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:K.activeChatJidRef,queueRefreshGenRef:K.queueRefreshGenRef,dismissedQueueRowIdsRef:K.dismissedQueueRowIdsRef,getAgentQueueState:Q.getAgentQueueState,setFollowupQueueItems:L.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:Q.getAgentContext,setContextUsage:L.setContextUsage,getAutoresearchStatus:Q.getAutoresearchStatus,setExtensionStatusPanels:L.setExtensionStatusPanels,setPendingExtensionPanelActions:L.setPendingExtensionPanelActions,setExtensionWorkingState:L.setExtensionWorkingState,getAgentStatus:Q.getAgentStatus,wasAgentActiveRef:K.wasAgentActiveRef,viewStateRef:K.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:K.agentStatusRef,pendingRequestRef:K.pendingRequestRef,thoughtBufferRef:K.thoughtBufferRef,draftBufferRef:K.draftBufferRef,previewResyncPendingRef:K.previewResyncPendingRef,previewResyncGenerationRef:K.previewResyncGenerationRef,setAgentStatus:L.setAgentStatus,setAgentDraft:L.setAgentDraft,setAgentPlan:L.setAgentPlan,setAgentThought:L.setAgentThought,setPendingRequest:L.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:K.isAgentRunningRef,currentTurnIdRef:K.currentTurnIdRef,silentRecoveryRef:K.silentRecoveryRef,silenceRefreshMs:Q.silenceRefreshMs,lastAgentEventRef:K.lastAgentEventRef,lastSilenceNoticeRef:K.lastSilenceNoticeRef,silenceWarningMs:Q.silenceWarningMs,silenceFinalizeMs:Q.silenceFinalizeMs,isCompactionStatus:Q.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:Q.currentAppAssetVersion,staleUiVersionRef:K.staleUiVersionRef,staleUiReloadScheduledRef:K.staleUiReloadScheduledRef,tabStoreHasUnsaved:Q.tabStoreHasUnsaved,isAgentRunningRef:K.isAgentRunningRef,pendingRequestRef:K.pendingRequestRef,showIntentToast:$},setConnectionStatus:L.setConnectionStatus,hasConnectedOnceRef:K.hasConnectedOnceRef,getAgents:Q.getAgents,setAgents:L.setAgents,setUserProfile:L.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:V.readStoredNumber,sidebarWidthRef:K.sidebarWidthRef,appShellRef:K.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:Q.getAgentModels,getActiveChatAgents:Q.getActiveChatAgents,getChatBranches:Q.getChatBranches,setActiveChatAgents:L.setActiveChatAgents,setCurrentChatBranches:L.setCurrentChatBranches,setActiveModel:L.setActiveModel,setActiveThinkingLevel:L.setActiveThinkingLevel,setSupportsThinking:L.setSupportsThinking,setActiveModelUsage:L.setActiveModelUsage,setAgentModelsPayload:L.setAgentModelsPayload,setHasLoadedAgentModels:L.setHasLoadedAgentModels,agentsRef:K.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:Q.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:K.paneStateOwnerChatJidRef,chatPaneStateByChatRef:K.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:L.setFloatingWidget,dismissedLiveWidgetKeysRef:K.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:K.draftThrottleRef,thoughtThrottleRef:K.thoughtThrottleRef,followupQueueItemsRef:K.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:K.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:L.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:q.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{L.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:Q.agentStatus,thoughtExpandedRef:K.thoughtExpandedRef,draftExpandedRef:K.draftExpandedRef,steerQueuedTurnIdRef:K.steerQueuedTurnIdRef}}function Vk(_,$){let{routeState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:q,setters:K,services:L,helpers:Q}=_;return{currentChatJid:j.currentChatJid,followupQueueItemsRef:q.followupQueueItemsRef,dismissedQueueRowIdsRef:q.dismissedQueueRowIdsRef,setFollowupQueueItems:K.setFollowupQueueItems,showIntentToast:$.showIntentToast,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:L.steerAgentQueueItem,removeAgentQueueItem:L.removeAgentQueueItem,refreshQueueState:$.agentStatusLifecycleBundle.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:$.agentStatusLifecycleBundle.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:$.agentStatusLifecycleBundle.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:$.agentStatusLifecycleBundle.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:$.agentStatusLifecycleBundle.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:j.currentRootChatJid,isComposeBoxAgentActive:$.isComposeBoxAgentActive,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,stopAutoresearch:L.stopAutoresearch,dismissAutoresearch:L.dismissAutoresearch,streamSidePrompt:L.streamSidePrompt,btwAbortRef:q.btwAbortRef,btwSession:G.btwSession,setBtwSession:K.setBtwSession,sendAgentMessage:L.sendAgentMessage,dismissedLiveWidgetKeysRef:q.dismissedLiveWidgetKeysRef,setFloatingWidget:K.setFloatingWidget,getAgentStatus:L.getAgentStatus,getAgentContext:L.getAgentContext,getAgentQueueState:L.getAgentQueueState,getAgentModels:L.getAgentModels,getActiveChatAgents:L.getActiveChatAgents,getChatBranches:L.getChatBranches,getTimeline:L.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:L.isAgentTurnActive,chatOnlyMode:j.chatOnlyMode,navigate:j.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:q.renameBranchInFlightRef,renameBranchLockUntilRef:q.renameBranchLockUntilRef,getFormLock:Q.getFormLock,setRenameBranchNameDraft:K.setRenameBranchNameDraft,setIsRenameBranchFormOpen:K.setIsRenameBranchFormOpen,setIsRenamingBranch:K.setIsRenamingBranch,renameChatBranch:L.renameChatBranch,pruneChatBranch:L.pruneChatBranch,purgeChatBranch:L.purgeChatBranch,restoreChatBranch:L.restoreChatBranch,branchLoaderMode:j.branchLoaderMode,branchLoaderSourceChatJid:j.branchLoaderSourceChatJid,forkChatBranch:L.forkChatBranch,setBranchLoaderState:K.setBranchLoaderState,isWebAppMode:j.isWebAppMode,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,openEditor:L.openEditor,tabStripActiveId:L.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:L.terminalTabPath,tabPaneOverrides:L.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:L.resolveTab,closeTab:L.closeTab,setDockVisible:Y.setDockVisible,editorOpen:L.editorOpen,shellElement:q.appShellRef.current,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef,sidebarWidthRef:q.sidebarWidthRef,readStoredNumber:Q.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode}}function MF(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:q,setters:K,services:L,helpers:Q}=_,V=X.composeReferenceActions.showIntentToast,F=HV({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:L.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:K.setRemovingPostIds,deletePost:L.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),N=JQ(Lk(_,V)),H=qk(L.isAgentTurnActive,L.agentStatus),z=kF(Vk(_,{showIntentToast:V,agentStatusLifecycleBundle:N,isComposeBoxAgentActive:H}));return Kk({agentStatusLifecycleBundle:N,actionBundle:z,timelineViewActions:F,isComposeBoxAgentActive:H})}T0();g_();T0();function yF(_){try{return _?.focus?.(),!0}catch($){return!1}}function D6(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function Fj(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function TF(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function wF(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function h$(_=typeof window<"u"?window:null){let $=_?.localStorage,j=D6($,"piclaw.notifications.deviceId");if(j)return j;let G=wF("device");return Fj($,"piclaw.notifications.deviceId",G),D6($,"piclaw.notifications.deviceId")||G}function z6(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=D6($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=wF("client");if(Fj($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=D6($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function xF(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function Nj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():h$($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():z6($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),q=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),L=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:L,hasFocus:q,updatedAtMs:Y}}function IF(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return Fj(j,xF(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function CF(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return TF(j,xF(G,Z)),!0}function Qk(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():h$($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,q=[],K=[];for(let L=0;L<j.length;L+=1){let Q=j.key(L);if(!Q||!Q.startsWith(Y))continue;let V=D6(j,Q);if(!V){K.push(Q);continue}try{let F=JSON.parse(V),N=Number(F?.updatedAtMs);if(!Number.isFinite(N)||Z-N>X){K.push(Q);continue}let H=typeof F?.chatJid==="string"?F.chatJid.trim():"",z=typeof F?.clientId==="string"?F.clientId.trim():"";if(!H||!z){K.push(Q);continue}q.push({deviceId:G,clientId:z,chatJid:H,visibilityState:F?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(F?.hasFocus),updatedAtMs:N})}catch{K.push(Q)}}return K.forEach((L)=>TF(j,L)),q.sort((L,Q)=>L.clientId.localeCompare(Q.clientId))}function PF(_={}){let $=Nj(_),j=$.chatJid;if(!j)return!1;let G=Qk({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,q)=>Y.clientId.localeCompare(q.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}var Fk="Web Push";function Nk(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function Bk(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=Nk(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function Uk(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function W8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function fF(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function Hk(_){let $=await fF(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await e3(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Uk(Z)})}async function RF(_,$){if(!W8(_))return!1;let j=await Hk(_);return await _7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function Ek(_,$){if(!W8(_))return!1;let G=await(await fF(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await $7(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function Dk(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function zk(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function SF(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=C(!1),[Z,X]=C("default"),Y=g(!1),q=g(null),K=g(null);u(()=>{let N=Y$("notificationsEnabled",!1);if(Y.current=N,G(N),typeof window<"u")q.current=h$(window),K.current=z6(window);if(typeof Notification>"u")return;let H=Notification.permission;if(X(H),H==="denied"&&N){Y.current=!1,G(!1),L_("notificationsEnabled","false");return}if(H==="granted"&&N&&typeof window<"u"&&W8(window))RF(window,q.current||h$(window)).catch((z)=>{console.warn("Failed to refresh stored web push subscription:",z)})},[]),u(()=>{Y.current=j},[j]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let N=q.current||h$(window),H=K.current||z6(window);q.current=N,K.current=H;let z=(A=!0,O="fetch")=>{let T=Nj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:N,clientId:H});if(A)IF(T,window);else CF({deviceId:N,clientId:H},window);let x={device_id:N,client_id:H,chat_jid:$,visibility_state:T.visibilityState,has_focus:T.hasFocus,active:A};if(!A&&O==="beacon"&&zk(x,window))return;Dk(x,{runtimeWindow:window,keepalive:!A||O==="keepalive"})},E=()=>z(!0),U=()=>z(!1,"beacon");z(!0);let k=setInterval(()=>z(!0),15000);return document.addEventListener("visibilitychange",E),window.addEventListener("focus",E),window.addEventListener("blur",E),window.addEventListener("pageshow",E),window.addEventListener("pagehide",U),window.addEventListener("beforeunload",U),()=>{clearInterval(k),document.removeEventListener("visibilitychange",E),window.removeEventListener("focus",E),window.removeEventListener("blur",E),window.removeEventListener("pageshow",E),window.removeEventListener("pagehide",U),window.removeEventListener("beforeunload",U),z(!1,"beacon")}},[$]);let L=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch(N){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",N),Promise.resolve("default")}},[]),Q=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let z=await L();if(X(z||"default"),z!=="granted"){Y.current=!1,G(!1),L_("notificationsEnabled","false");return}}let N=!Y.current;Y.current=N,G(N),L_("notificationsEnabled",String(N));let H=q.current||h$(window);if(q.current=H,W8(window))try{if(N){await RF(window,H);try{await j7({title:"PiClaw notifications enabled",body:"Web Push is configured for this device.",url:window.location.pathname+window.location.search,deviceId:H,tag:"piclaw:test",sourceLabel:Fk})}catch(z){console.warn("Failed to send a test web push notification:",z)}}else await Ek(window,H)}catch(z){if(console.warn("Failed to sync web push notifications:",z),N)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[L]),V=P((N,H,z={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let E=new Notification(Bk(N,z?.sourceLabel||"",window),{body:H});return E.onclick=()=>{yF(window)},!0}catch(E){return console.debug("[use-notifications] Local notification creation failed.",E,{title:typeof N==="string"?N:null}),!1}},[]),F=P((N)=>{if(typeof window>"u"||typeof document>"u")return!1;return PF({chatJid:typeof N==="string"&&N.trim()?N.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:q.current||h$(window),clientId:K.current||z6(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:Q,notify:V,shouldNotifyLocallyForChat:F}}function Ok(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function Wk(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function Jk(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function uF(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=C("disconnected"),[X,Y]=C(()=>x1()),[q,K]=C(null),[L,Q]=C(null),[V,F]=C(!1),[N,H]=C("current"),[z,E]=C([]),[U,k]=C([]),[A,O]=C(null),[T,x]=C({}),[W,J]=C(null),[M,D]=C(null),[y,I]=C(!1),[R,S]=C(null),[v,c]=C(null),[h,$0]=C(!1),[b,t]=C([]),[s,q0]=C([]),[X0,H0]=C(null),[B0,K0]=C(()=>new Map),[D0,Q0]=C(()=>new Set),[k0,d]=C(()=>({message:null,indicator:null,visible:!0})),[G0,x0]=C([]),[y0,C0]=C(!1),[n0,j_]=C(()=>ZL()),[P0,d0]=C(null),[w0,s0]=C(null),S0=g(new Set),t0=Y0(()=>Ok({activeChatAgents:b,currentChatBranches:s,currentChatJid:$}),[b,s,$]),V_=Y0(()=>Jk($,t0),[t0,$]),E_=GL(N),[l0,u0]=C(()=>Wk(j)),f0=G0.length,a0=g(new Set),F_=g([]),z_=g(new Set),L0=g(0),W0=g({inFlight:!1,lastAttemptAt:0,turnId:null});a0.current=new Set(G0.map((E1)=>E1.row_id)),F_.current=G0;let{notificationsEnabled:b0,notificationPermission:N_,toggleNotifications:k_,notify:e0,shouldNotifyLocallyForChat:D_}=SF({chatJid:$}),[B_,O_]=C(()=>new Set),[_0,O0]=C(()=>AL({allowLegacyFallback:!0,defaultValue:!1})),[A0,I0]=C({name:"You",avatar_url:null,avatar_background:null}),c0=g(null),e=g(!1),p=g(!1),a=g(!1),j0=g(null),Z0=g($),E0=g(new Map),v0=g($),o0=g(0),J0=g(0),R0=g({}),q_=g({name:null,avatar_url:null}),K_=g({currentHashtag:null,searchQuery:null,searchOpen:!1}),G_=g(null),U_=g(null),T_=g(0),Z_=g(0),r=g(0),z0=g(null),m0=g(null),h0=g(null),f_=g(null),W_=g(0),p_=g({title:null,avatarBase:null}),d1=g(null),n_=g(!1),[o1,Q1]=C(!1),Y_=g(0),[m_,$1]=C(!1),[I_,c_]=C(""),r_=Y0(()=>S2(I_,t0?.agent_name||""),[t0?.agent_name,I_]),F1=g(null);return{connectionStatus:G,setConnectionStatus:Z,isWebAppMode:X,setIsWebAppMode:Y,currentHashtag:q,setCurrentHashtag:K,searchQuery:L,setSearchQuery:Q,searchOpen:V,setSearchOpen:F,searchScope:N,setSearchScope:H,fileRefs:z,setFileRefs:E,messageRefs:U,setMessageRefs:k,intentToast:A,setIntentToast:O,agents:T,setAgents:x,activeModel:W,setActiveModel:J,activeThinkingLevel:M,setActiveThinkingLevel:D,supportsThinking:y,setSupportsThinking:I,activeModelUsage:R,setActiveModelUsage:S,agentModelsPayload:v,setAgentModelsPayload:c,hasLoadedAgentModels:h,setHasLoadedAgentModels:$0,activeChatAgents:b,setActiveChatAgents:t,currentChatBranches:s,setCurrentChatBranches:q0,contextUsage:X0,setContextUsage:H0,extensionStatusPanels:B0,setExtensionStatusPanels:K0,pendingExtensionPanelActions:D0,setPendingExtensionPanelActions:Q0,extensionWorkingState:k0,setExtensionWorkingState:d,followupQueueItems:G0,setFollowupQueueItems:x0,isAgentTurnActive:y0,setIsAgentTurnActive:C0,btwSession:n0,setBtwSession:j_,floatingWidget:P0,setFloatingWidget:d0,attachmentPreview:w0,setAttachmentPreview:s0,dismissedLiveWidgetKeysRef:S0,currentBranchRecord:t0,currentRootChatJid:V_,activeSearchScopeLabel:E_,branchLoaderState:l0,setBranchLoaderState:u0,followupQueueCount:f0,followupQueueRowIdsRef:a0,followupQueueItemsRef:F_,dismissedQueueRowIdsRef:z_,queueRefreshGenRef:L0,silentRecoveryRef:W0,notificationsEnabled:b0,notificationPermission:N_,handleToggleNotifications:k_,notify:e0,shouldNotifyLocallyForChat:D_,removingPostIds:B_,setRemovingPostIds:O_,workspaceOpen:_0,setWorkspaceOpen:O0,userProfile:A0,setUserProfile:I0,staleUiVersionRef:c0,staleUiReloadScheduledRef:e,hasConnectedOnceRef:p,wasAgentActiveRef:a,agentStatusRef:j0,activeChatJidRef:Z0,chatPaneStateByChatRef:E0,paneStateOwnerChatJidRef:v0,draftThrottleRef:o0,thoughtThrottleRef:J0,agentsRef:R0,userProfileRef:q_,viewStateRef:K_,timelineRef:G_,appShellRef:U_,sidebarWidthRef:T_,editorWidthRef:Z_,dockHeightRef:r,lastNotifiedIdRef:z0,lastAgentResponseRef:m0,btwAbortRef:h0,lastActivityTimerRef:f_,lastActivityTokenRef:W_,brandingRef:p_,intentToastTimerRef:d1,renameBranchInFlightRef:n_,isRenamingBranch:o1,setIsRenamingBranch:Q1,renameBranchLockUntilRef:Y_,isRenameBranchFormOpen:m_,setIsRenameBranchFormOpen:$1,renameBranchNameDraft:I_,setRenameBranchNameDraft:c_,renameBranchDraftState:r_,renameBranchNameInputRef:F1}}T0();T0();function Ak(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,q]of _.entries()){let K=Y;if(G==="dir"){if(Y===$)K=j,Z=!0;else if(Y.startsWith(`${$}/`))K=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)K=j,Z=!0;X.set(K,q)}return Z?X:_}function gF(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let q=Y;if(G==="dir"){if(Y===$)q=j,Z=!0;else if(Y.startsWith(`${$}/`))q=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)q=j,Z=!0;X.add(q)}return Z?X:_}function bF({onTabClosed:_}={}){let $=g(_);$.current=_;let[j,G]=C(()=>__.getTabs()),[Z,X]=C(()=>__.getActiveId()),[Y,q]=C(()=>__.getTabs().length>0);u(()=>{return __.onChange((I,R)=>{G(I),X(R),q(I.length>0)})},[]);let[K,L]=C(()=>new Set),[Q,V]=C(()=>new Set),[F,N]=C(()=>new Map),H=P((I)=>{L((R)=>{let S=new Set(R);if(S.has(I))S.delete(I);else S.add(I);return S})},[]),z=P((I)=>{L((R)=>{if(!R.has(I))return R;let S=new Set(R);return S.delete(I),S})},[]),E=P((I)=>{V((R)=>{if(!R.has(I))return R;let S=new Set(R);return S.delete(I),S})},[]),U=P((I)=>{N((R)=>{if(!R.has(I))return R;let S=new Map(R);return S.delete(I),S})},[]),k=P((I,R={})=>{if(!I)return;let S=typeof R?.paneOverrideId==="string"&&R.paneOverrideId.trim()?R.paneOverrideId.trim():null,v={path:I,mode:"edit"};try{if(!(S?X_.get(S):X_.resolve(v))){if(!X_.get("editor")){console.warn(`[openEditor] No pane handler for: ${I}`);return}}}catch(b){console.warn(`[openEditor] paneRegistry.resolve() error for "${I}":`,b)}let c=typeof R?.label==="string"&&R.label.trim()?R.label.trim():void 0,h=R?.viewState&&typeof R.viewState==="object"?R.viewState:null,$0=R?.diffMode==="saved"?"saved":null;if(__.open(I,c),h)__.saveViewState(I,h);if(S)N((b)=>{if(b.get(I)===S)return b;let t=new Map(b);return t.set(I,S),t});if($0==="saved")V((b)=>{if(b.has(I))return b;let t=new Set(b);return t.add(I),t})},[]),A=P(()=>{let I=__.getActiveId();if(I){let R=__.get(I);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}__.close(I),z(I),E(I),U(I),$.current?.(I)}},[E,U,z]),O=P((I)=>{let R=__.get(I);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}__.close(I),z(I),E(I),U(I),$.current?.(I)},[E,U,z]),T=P((I)=>{__.activate(I)},[]),x=P((I)=>{let R=__.getTabs().filter((c)=>c.id!==I&&!c.pinned),S=R.filter((c)=>c.dirty).length;if(S>0){if(!window.confirm(`${S} unsaved tab${S>1?"s":""} will be closed. Continue?`))return}let v=R.map((c)=>c.id);__.closeOthers(I),v.forEach((c)=>{z(c),E(c),U(c),$.current?.(c)})},[E,U,z]),W=P(()=>{let I=__.getTabs().filter((v)=>!v.pinned),R=I.filter((v)=>v.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let S=I.map((v)=>v.id);__.closeAll(),S.forEach((v)=>{z(v),E(v),U(v),$.current?.(v)})},[E,U,z]),J=P((I)=>{__.togglePin(I)},[]),M=P((I)=>{if(!I)return;V((R)=>{let S=new Set(R);if(S.has(I))S.delete(I);else S.add(I);return S}),__.activate(I)},[]),D=P((I)=>{if(!I)return;N((R)=>{if(R.get(I)==="editor")return R;let S=new Map(R);return S.set(I,"editor"),S}),__.activate(I)},[]),y=P(()=>{let I=__.getActiveId();if(I)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:I}}))},[]);return u(()=>{let I=(R)=>{let{oldPath:S,newPath:v,type:c}=R.detail||{};if(!S||!v)return;if(c==="dir"){for(let h of __.getTabs())if(h.path===S||h.path.startsWith(`${S}/`)){let $0=`${v}${h.path.slice(S.length)}`;__.rename(h.id,$0)}}else __.rename(S,v);L((h)=>gF(h,S,v,c)),V((h)=>gF(h,S,v,c)),N((h)=>Ak(h,S,v,c))};return window.addEventListener("workspace-file-renamed",I),()=>window.removeEventListener("workspace-file-renamed",I)},[]),u(()=>{let I=(R)=>{if(__.hasUnsaved())R.preventDefault(),R.returnValue=""};return window.addEventListener("beforeunload",I),()=>window.removeEventListener("beforeunload",I)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:K,diffTabs:Q,tabPaneOverrides:F,openEditor:k,closeEditor:A,handleTabClose:O,handleTabActivate:T,handleTabCloseOthers:x,handleTabCloseAll:W,handleTabTogglePin:J,handleTabTogglePreview:H,handleTabToggleDiff:M,handleTabEditSource:D,revealInExplorer:y}}T0();function n1(_){return typeof _==="string"&&_.trim()?_.trim():null}function kk(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function z4(_="pane"){let $=kk();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function vF(_){let $=n1(_?.paneInstanceId),j=n1(_?.paneWindowId);if(!$||!j)return{};let G=n1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function mF(_={}){let $=new URLSearchParams(_.search||"");return{panePath:n1($.get("pane_path"))||n1(_.panePath),paneLabel:n1($.get("pane_label"))||n1(_.paneLabel),paneInstanceId:n1($.get("pane_instance_id")),paneWindowId:n1($.get("pane_window_id")),paneSourceWindowId:n1($.get("pane_source_window_id"))}}function O4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function r1(_){return typeof _==="string"&&_.trim()?_.trim():null}function cF(_){let $=r1(_?.panePath),j=r1(_?.paneInstanceId),G=r1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=r1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:r1(_?.label),sourceWindowId:r1(_?.sourceWindowId)}}function Bj(_,$){if(!_||!$)return!1;return r1($.panePath)===_.panePath&&r1($.paneInstanceId)===_.paneInstanceId&&r1($.paneWindowId)===_.ownerWindowId}function Uj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:r1($)||new Date().toISOString(),label:_.label||null}}function J8(_){try{return _?.close?.(),!0}catch($){return!1}}function Hj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function Mk(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function lF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var yk=400;function Tk(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function wk(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return Tk(j).some((Z)=>Z==="."||Z===_)})}async function hF(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function xk(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function M8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function pF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function A8(_){if(!pF(_))return!1;return M8(_?.runtimeNavigator)}function k8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return M8(_?.runtimeNavigator)}function U5(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function Ik(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",q=_?.allowLiveTransfer!==!1,K=_?.instance||null,L=typeof K?.exportHostTransferState==="function"?K.exportHostTransferState():null,Q=$===Y,V=L&&!Q?z8({path:$,payload:L},j,G):null,F=null;if($!==Y){let N=L&&typeof L==="object"?typeof L.mtime==="string"?L.mtime:L.mtime===null?null:void 0:void 0,H=typeof K?.isDirty==="function"?K.isDirty():!1,z=typeof K?.getContent==="function"?K.getContent():void 0;F=h6({path:$,content:H?z:void 0,mtime:N,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...F?.editor_popout?{editorPopoutToken:F.editor_popout}:{},...V?.pane_transfer?{paneTransferToken:V.pane_transfer}:{},...Q&&L?{paneTransferPayload:L}:{},...q?{}:{allowLiveTransfer:!1}}}function Ck(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",q=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,K=X?X3(X,j,G):null,L=q?{panePath:$,path:$,payload:q,capturedAt:G}:Y?Kj(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:K?.path===$?K:null,hostTransfer:L?.path===$?L:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function nF(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:q,previewTabs:K,diffTabs:L,tabPaneOverrides:Q,terminalTabPath:V,vncTabPrefix:F,openEditor:N,closeEditor:H,getWorkspaceFile:z}=_,E=g(null),U=g(null),k=g(null),A=g(null),O=g((()=>{if(!$)return null;let e=u4("editor_popout");return X3(e)})()),T=g((()=>{if(!$)return null;return TQ()})()),x=g(mF({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),W=g(x.current.paneWindowId||z4("pane-window")),J=g(new Map),M=g(new Map),D=g(new Map),y=g(new Map),I=g(!1),R=g(new Map),S=g(z4("pane-instance")),v=g(new Map),c=g(new Map),h=g(new Set),[$0,b]=C(()=>new Map),t=g($0);t.current=$0;let[s,q0]=C(()=>new Map),X0=g(s);X0.current=s;let[H0,B0]=C(null),K0=g(H0);K0.current=H0;let[D0,Q0]=C(null),k0=g(D0);k0.current=D0;let d=X_.getDockPanes().length>0,[G0,x0]=C(!1),y0=P(()=>x0((e)=>!e),[]),C0=P(()=>{N(V,{label:"Terminal"})},[N,V]),n0=P(()=>{N(F,{label:"VNC"})},[N,F]),j_=P((e)=>{let p=typeof e==="string"?e.trim():"";if(!p)return z4("pane-instance");if(p===V&&!__.get(p)){if(!S.current)S.current=z4("pane-instance");return S.current}let j0=R.current.get(p);if(j0)return j0;let Z0=z4("pane-instance");return R.current.set(p,Z0),Z0},[V]),P0=Y0(()=>!$&&q?s.get(q)||null:null,[s,$,q]),d0=!$?D0:null,w0=P((e)=>{if(!e)return;wQ(e),c.current.delete(e),h.current.delete(e),B0((p)=>p?.panePath===e?null:p),b((p)=>{if(!p.has(e))return p;let a=new Map(p);return a.delete(e),a})},[]),s0=P((e)=>{if(!e)return;v.current.delete(e),c.current.delete(e),h.current.delete(e),w0(e),Q0((p)=>p?.panePath===e?null:p),q0((p)=>{if(!p.has(e))return p;let a=new Map(p);return a.delete(e),a})},[w0]),S0=P((e,p={})=>{let a=typeof e==="string"?e.trim():"";if(!a)return!1;if(k8({panePath:a,terminalTabPath:V}))return!1;let j0=v.current.get(a),Z0=Boolean(X0.current.get(a)),E0=Boolean(k0.current?.panePath===a);if(s0(a),a===V&&E0&&!Z0)x0(!0);else if(a===V&&Z0)N(a,{label:"Terminal"});else if(__.get(a))__.activate(a);else N(a);if(p.closeDetachedWindow!==!1&&j0&&typeof j0.close==="function")J8(j0);return!0},[s0,N,x0,V]),t0=P(()=>{if($)return;if(!xk())return;let e=Date.now();for(let[p,a]of c.current.entries()){if(a>e)continue;c.current.delete(p),S0(p,{closeDetachedWindow:!1})}},[$,S0]),V_=P((e,p={})=>{let a=typeof e==="string"?e.trim():"";if(!a)return!1;let j0={panePath:a,terminalTabPath:V,allowLiveTransfer:p.allowLiveTransfer,reason:p.reason};if(A8(j0))return v.current.delete(a),c.current.delete(a),h.current.add(a),!0;if(!pF(j0))return S0(a,{closeDetachedWindow:!1});return c.current.set(a,Date.now()+yk),t0(),!0},[t0,S0,V]),E_=P((e)=>{let p=typeof e==="string"?e.trim():"";if(!p)return null;let a=j_(p),j0=z4("pane-window");return{paneInstanceId:a,paneWindowId:j0,params:vF({paneInstanceId:a,paneWindowId:j0,paneSourceWindowId:W.current})}},[j_]),l0=P((e,p,a,j0)=>{let Z0=typeof e==="string"?e.trim():"";if(!Z0||!j0)return;let E0=cF({panePath:Z0,paneInstanceId:j0.pane_instance_id,ownerWindowId:j0.pane_window_id,sourceWindowId:j0.pane_source_window_id,label:p});if(!E0)return;if(v.current.set(Z0,a||null),Z0===V&&!__.get(Z0)){B0(E0);return}b((o0)=>{let J0=new Map(o0);return J0.set(Z0,E0),J0})},[V]),u0=P((e,p)=>{let a=typeof e?.panePath==="string"?e.panePath.trim():"";if(!a)return!1;let j0=v.current.get(a);if(j0&&p&&j0!==p)return!1;let Z0=t.current.get(a)||null;if(Bj(Z0,e)){let R0=U.current,q_=U5({panePath:a,terminalTabPath:V});if(q_&&R0&&typeof R0.moveHost==="function")B5({panePath:a,paneInstanceId:Z0.paneInstanceId,paneWindowId:Z0.ownerWindowId,instance:R0,releaseSourceHost:()=>{if(U.current===R0)U.current=null}});if(q_&&U.current)U.current=null;let K_=Uj(Z0);if(!K_)return!1;return b((G_)=>{if(!G_.has(a))return G_;let U_=new Map(G_);return U_.delete(a),U_}),q0((G_)=>{let U_=new Map(G_);return U_.set(a,K_),U_}),lF({panePath:a,terminalTabPath:V,closeTab:(G_)=>__.close(G_),sourceHost:"tab"}),!0}if(a!==V)return!1;let E0=K0.current,v0=A.current,o0=U5({panePath:a,terminalTabPath:V});if(o0&&E0&&v0&&typeof v0.moveHost==="function")B5({panePath:a,paneInstanceId:E0.paneInstanceId,paneWindowId:E0.ownerWindowId,instance:v0,releaseSourceHost:()=>{if(A.current===v0)A.current=null}});if(o0&&A.current)A.current=null;if(!Bj(E0,e))return!1;let J0=Uj(E0);if(!J0)return!1;return B0(null),Q0(J0),lF({panePath:a,terminalTabPath:V,setDockVisible:x0,sourceHost:"dock"}),!0},[x0,V]),f0=P((e=!1,p=!0)=>{if(!$)return!1;let a=x.current;if(!O4(a))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(I.current){if(e)J8(window);return!0}let j0=a.panePath||j,Z0=j0===V?A.current||U.current:U.current,E0=p&&U5({panePath:j0,terminalTabPath:V}),v0=Ik({panePath:j0,paneInstanceId:a.paneInstanceId,paneOverrideId:j0===V?null:typeof Q?.get==="function"?Q.get(j0)||null:null,terminalTabPath:V,viewState:j0===V?null:__.getViewState(j0)||null,allowLiveTransfer:E0,instance:Z0});if(!v0)return!1;if(E0&&v0.paneTransferToken&&typeof Z0?.moveHost==="function"){if(A.current===Z0)A.current=null;if(U.current===Z0)U.current=null}if(!Hj(window.opener,v0,window.location.origin))return!1;if(I.current=!0,e)J8(window);return!0},[$,j,Q,V]),a0=P(()=>f0(!0,!0),[f0]);u(()=>{if(!$||typeof window>"u")return;let e=()=>{let p=x.current,a=O4(p)?p.panePath||j||"":"";if(A8({panePath:a,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"}))return;f0(!1,!1)};return window.addEventListener("pagehide",e),window.addEventListener("beforeunload",e),()=>{window.removeEventListener("pagehide",e),window.removeEventListener("beforeunload",e)}},[$,f0]);let F_=Y0(()=>YL(Y,q),[q,Y]),z_=Y0(()=>qL(Q,q),[Q,q]),L0=Y0(()=>c9(G,F_,j),[F_,G,j]),W0=Y0(()=>q&&L.has(q)?"saved":null,[L,q]),b0=g(W0);u(()=>{b0.current=W0},[W0]);let N_=Y0(()=>LL(Y,K,L,q),[L,K,q,Y]),k_=Y0(()=>VL(j,F),[j,F]),e0=Y0(()=>QL(j,V,N_,k_),[k_,N_,j,V]),D_=FL($,Z,X,d,G0),[B_,O_]=C(!1),_0=g(!1),O0=P(()=>{if(!X||Z)return;if(_0.current=G0,G0)x0(!1);O_(!0)},[Z,G0,X]),A0=P(()=>{if(!B_)return;if(O_(!1),_0.current)x0(!0),_0.current=!1},[B_]),I0=P(()=>{if(B_){A0();return}O0()},[O0,A0,B_]);u(()=>{if(B_&&!X)A0()},[X,A0,B_]),u(()=>{let e=new Set(Y.map((j0)=>j0.id)),p=new Set(t.current.keys()),a=new Set(X0.current.keys());for(let j0 of Array.from(R.current.keys()))if(!Mk({panePath:j0,openTabIds:e,pendingDetachedTabPaths:p,detachedTabPaths:a,terminalTabPath:V,hasPendingDetachedDockPane:Boolean(K0.current),hasDetachedDockPane:Boolean(k0.current)}))R.current.delete(j0)},[Y,V]),u(()=>{if($||typeof window>"u")return;let e=(p)=>{if(p.origin!==window.location.origin)return;let a=p.data;if(!a||typeof a!=="object")return;if(a.type==="piclaw-pane-detach-claim"){u0({panePath:a.panePath,paneInstanceId:a.paneInstanceId,paneWindowId:a.paneWindowId},p.source);return}if(a.type!=="piclaw-pane-reattach-request")return;let j0=Ck({payload:a}),Z0=j0?.panePath||"";if(!Z0)return;if(j0?.editorTransfer)J.current.set(Z0,j0.editorTransfer);if(j0?.hostTransfer)if(M.current.set(Z0,j0.hostTransfer),j0.allowLiveTransfer&&p.source)D.current.set(Z0,p.source);else D.current.delete(Z0);let E0=X0.current.get(Z0)||null,v0=Z0===V?k0.current:null,o0=U5({panePath:Z0,terminalTabPath:V}),J0=E0||v0;if(!J0)return;if(j0?.paneInstanceId&&j0.paneInstanceId!==J0.paneInstanceId)return;if(k8({panePath:Z0,terminalTabPath:V})){D.current.delete(Z0),y.current.delete(Z0),M.current.delete(Z0),J.current.delete(Z0);return}if(j0?.hostTransfer&&j0.allowLiveTransfer&&o0)y.current.set(Z0,{panePath:Z0,paneInstanceId:J0.paneInstanceId,paneWindowId:J0.ownerWindowId});else y.current.delete(Z0);if(A8({panePath:Z0,terminalTabPath:V,allowLiveTransfer:j0?.allowLiveTransfer,reason:"message"})){D.current.delete(Z0),v.current.delete(Z0),c.current.delete(Z0),h.current.add(Z0);return}V_(Z0,{allowLiveTransfer:j0?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[u0,$,V_,V]),u(()=>{if($||typeof window>"u"||typeof document>"u")return;let e=()=>t0();window.addEventListener("focus",e),window.addEventListener("pageshow",e),document.addEventListener("visibilitychange",e);let p=setInterval(()=>{t0();for(let[a,j0]of v.current.entries()){if(!j0||!j0.closed)continue;if(a===V?Boolean(K0.current):t.current.has(a)){v.current.delete(a),w0(a);continue}if(k8({panePath:a,terminalTabPath:V})){s0(a);continue}if(A8({panePath:a,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"})){v.current.delete(a),c.current.delete(a),h.current.add(a);continue}if(h.current.has(a)){v.current.delete(a);continue}V_(a,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",e),window.removeEventListener("pageshow",e),document.removeEventListener("visibilitychange",e),clearInterval(p)}},[s0,w0,t0,$,V_,V]),u(()=>{if(!$||!j)return;if(__.getActiveId()===j)return;let p=O.current?.path===j?O.current:null,a=T.current?.path===j?T.current:null;N(j,{...G?{label:G}:{},...p?.paneOverrideId?{paneOverrideId:p.paneOverrideId}:{},...p?.viewState?{viewState:p.viewState}:{},...a?.payload?.diffMode?{diffMode:a.payload.diffMode}:{}})},[N,G,$,j]),u(()=>{if(!$)return;let e=x.current;if(!O4(e))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;Hj(window.opener,{type:"piclaw-pane-detach-claim",panePath:e.panePath,paneInstanceId:e.paneInstanceId,paneWindowId:e.paneWindowId},window.location.origin)},[$]),u(()=>{let e=E.current;if(!e)return;if(U.current)U.current.dispose(),U.current=null;let p=q;if(!p)return;if(!$&&P0?.panePath===p){e.innerHTML="";return}let a=O.current?.path===p?O.current:null,j0=J.current.get(p)||null,Z0=a||j0,E0=T.current?.path===p?T.current:null,v0=M.current.get(p)||null,o0=E0||v0,J0=z_||Z0?.paneOverrideId||null,R0=o0?.payload?{...o0.payload}:null;if(b0.current)R0={...R0||{},diffMode:b0.current};else if(R0&&"diffMode"in R0)delete R0.diffMode;let q_={path:p,mode:"edit",...Z0?.content!==void 0?{content:Z0.content}:{},...Z0?.mtime!==void 0?{mtime:Z0.mtime}:{},...R0?{transferState:R0}:{}},K_=(J0?X_.get(J0):null)||X_.resolve(q_)||X_.get("editor");if(!K_){e.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let G_=null,U_=!1,T_=(Z_)=>{G_=Z_,U.current=Z_,Z_.onDirtyChange?.((m0)=>{__.setDirty(p,m0)}),Z_.onSaveRequest?.(()=>{}),Z_.onClose?.(()=>{H()});let r=__.getViewState(p);if(r&&typeof Z_.restoreViewState==="function")requestAnimationFrame(()=>Z_.restoreViewState(r));if(typeof Z_.onViewStateChange==="function")Z_.onViewStateChange((m0)=>{__.saveViewState(p,m0)});let z0=x.current;if($&&O4(z0)&&typeof Z_?.moveHost==="function"&&U5({panePath:p,terminalTabPath:V}))B5({panePath:p,paneInstanceId:z0.paneInstanceId||"",paneWindowId:z0.paneWindowId||"",instance:Z_,releaseSourceHost:()=>{if(A.current===Z_)A.current=null;if(U.current===Z_)U.current=null}});hF(Z_,{path:p,hostMode:$?"popout":"main",transferState:R0}).catch((m0)=>{console.warn("[pane-attach] afterAttachToHost failed:",m0)}),requestAnimationFrame(()=>Z_.focus?.())};return(async()=>{let Z_=x.current,r=$&&O4(Z_)&&Z_.panePath===p?{panePath:p,paneInstanceId:Z_.paneInstanceId||"",paneWindowId:Z_.paneWindowId||""}:null,z0=y.current.get(p)||null,m0=U5({panePath:p,terminalTabPath:V})?r||z0:null,h0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:D.current.get(p)||null,f_=$?"popout":"main";if(o0&&m0&&h0)try{let W_=await xQ(h0,m0,e,{path:p,hostMode:f_,transferState:R0});if(!U_&&W_){if(T_(W_),a)O.current=null;if(j0)J.current.delete(p);if(E0)T.current=null;if(v0)M.current.delete(p);D.current.delete(p),y.current.delete(p);return}}catch(W_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",W_)}if(U_)return;if(T_(K_.mount(e,q_)),a)O.current=null;if(j0)J.current.delete(p);if(E0)T.current=null;if(v0)M.current.delete(p);D.current.delete(p),y.current.delete(p)})(),()=>{if(U_=!0,U.current===G_)G_.dispose(),U.current=null}},[P0,z_,H,$,q]),u(()=>{let e=q,p=U.current;if(!e||typeof p?.setDiffMode!=="function")return;p.setDiffMode(W0)},[W0,q]);let c0=P(async(e)=>{let p=typeof q==="string"?q.trim():"",a=U.current;if(!p||!a?.setContent)return;if(typeof a.isDirty==="function"&&a.isDirty())return;if(!wk(p,e))return;try{let j0=await z(p,1e6,"edit"),Z0=typeof j0?.text==="string"?j0.text:"",E0=typeof j0?.mtime==="string"&&j0.mtime.trim()?j0.mtime.trim():new Date().toISOString();a.setContent(Z0,E0)}catch(j0){console.warn("[workspace_update] Failed to refresh active pane:",j0)}},[z,q]);return u(()=>{let e=k.current;if(A.current)A.current.dispose(),A.current=null;if(!e||!d||!G0)return;if(!$&&d0?.panePath===V){e.innerHTML="";return}let p=X_.getDockPanes()[0];if(!p){e.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let a=T.current?.path===V?T.current:null,j0=M.current.get(V)||null,Z0=a||j0,E0=p.mount(e,{mode:"view",...Z0?.payload?{transferState:Z0.payload}:{}});if(A.current=E0,hF(E0,{path:V,hostMode:$?"popout":"main",transferState:Z0?.payload||null}).catch((v0)=>{console.warn("[pane-attach] afterAttachToHost failed:",v0)}),a)T.current=null;if(j0)M.current.delete(V);return requestAnimationFrame(()=>E0.focus?.()),()=>{if(A.current===E0)E0.dispose(),A.current=null}},[d0,G0,d,$,V]),{editorContainerRef:E,editorInstanceRef:U,dockContainerRef:k,dockInstanceRef:A,hasDockPanes:d,dockVisible:G0,setDockVisible:x0,toggleDock:y0,openTerminalTab:C0,openVncTab:n0,panePopoutTitle:L0,panePopoutHasMenuActions:N_,hidePanePopoutControls:e0,showEditorPaneContainer:D_,zenMode:B_,exitZenMode:A0,toggleZenMode:I0,refreshActiveEditorFromWorkspace:c0,detachedTabs:s,activeDetachedTab:P0,detachedDockPane:d0,buildPaneDetachTransfer:E_,registerDetachedPaneWindow:l0,reattachPane:S0,requestPanePopoutReattach:a0,canReattachPanePopout:$&&O4(x.current)&&!k8({panePath:j||"",terminalTabPath:V})}}function Pk(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function rF(_){let $=g(null),j=bF({onTabClosed:(Z)=>$.current?.(Z)}),G=nF({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return Pk({removeFileRefRef:$,editorState:j,paneRuntime:G})}g_();var T8=1280,w8=820;function y8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function O6(_){return typeof _==="string"&&_.trim()?_.trim():null}function Rk(_){let $=O6(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function fk(_){if(_.isMobile)return!1;let $=y8(_.windowWidth),j=y8(_.windowHeight);if($===null||j===null)return!1;if($<T8||j<w8)return!1;let G=y8(_.screenWidth),Z=y8(_.screenHeight);if(G!==null&&G<T8)return!1;if(Z!==null&&Z<w8)return!1;return!0}function Sk(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function uk(_){if(!_||_.kind!=="custom")return null;let $=O6(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=O6(j.path);if(!Rk(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:O6(_.chat_jid),path:G,label:O6(j.label),target:Z}}async function gk(_,$,j){await s4(_,$,j||void 0)}async function dF(_,$){let j=uk(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||gk,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:T8,height:w8};if(j.target==="popout"){if(!fk({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:Sk(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${T8}×${w8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let K=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:K,opened:K,reason:K?void 0:"popout_failed",detail:K?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var Ej="piclaw:oobe:provider-missing:dismissed";function bk(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function vk(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function oF(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=bk(G),Y=X>0,q=vk(G),K=Y||q;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};if(K)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q}}var mk=$L();await HL();var{searchPosts:ck,deletePost:lk,getAgents:hk,getAgentThought:iF,setAgentThoughtVisibility:sF,getAgentStatus:pk,getAgentContext:nk,getAutoresearchStatus:rk,stopAutoresearch:dk,dismissAutoresearch:ok,getAgentModels:ik,getActiveChatAgents:sk,getChatBranches:ak,renameChatBranch:tk,pruneChatBranch:ek,purgeChatBranch:_M,restoreChatBranch:$M,getAgentQueueState:jM,steerAgentQueueItem:GM,removeAgentQueueItem:ZM,streamSidePrompt:XM,getWorkspaceFile:YM,getThread:qM,getTimeline:KM,sendAgentMessage:LM,forkChatBranch:VM}=EL;function QM({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:q,branchLoaderSourceChatJid:K}=Y0(()=>XL(_),[_]);u(()=>{if(j)L_(m9,j)},[j]);let L=uF({currentChatJid:j,branchLoaderMode:q}),[Q,V]=C(()=>Y$(Ej,!1)),[F,N]=C(null),H=P((w0)=>{let s0=typeof w0==="string"?w0:"";if(!s0.trim())return;N({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:s0})},[]),{agentStatus:z,setAgentStatus:E,agentDraft:U,setAgentDraft:k,agentPlan:A,setAgentPlan:O,agentThought:T,setAgentThought:x,pendingRequest:W,setPendingRequest:J,currentTurnId:M,setCurrentTurnId:D,steerQueuedTurnId:y,setSteerQueuedTurnId:I,lastAgentEventRef:R,lastSilenceNoticeRef:S,isAgentRunningRef:v,draftBufferRef:c,thoughtBufferRef:h,previewResyncPendingRef:$0,previewResyncGenerationRef:b,pendingRequestRef:t,stalledPostIdRef:s,currentTurnIdRef:q0,steerQueuedTurnIdRef:X0,thoughtExpandedRef:H0,draftExpandedRef:B0}=ZX(),K0=rF({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:b4,vncTabPrefix:l1,getWorkspaceFile:YM}),D0=UV({timelineRef:L.timelineRef,viewStateRef:L.viewStateRef,followupQueueRowIdsRef:L.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:L.currentHashtag,searchQuery:L.searchQuery,followupQueueItems:L.followupQueueItems,onIdentity:P((w0)=>{if(!w0)return;let{assistant_name:s0,assistant_avatar_url:S0}=w0;if(s0||S0)L.setAgents((u0)=>{let f0=u0.default||{id:"default"},a0=s0&&!f0.name,F_=S0&&!f0.avatar_url;if(!a0&&!F_)return u0;return{...u0,["default"]:{...f0,...a0?{name:s0}:{},...F_?{avatar_url:S0}:{}}}});let{user_name:t0,user_avatar_url:V_,user_avatar_background:E_}=w0;if(t0||V_||E_)L.setUserProfile((l0)=>{let u0=t0&&!l0.name,f0=V_&&!l0.avatar_url,a0=E_&&!l0.avatar_background;if(!u0&&!f0&&!a0)return l0;return{...l0,...u0?{name:t0}:{},...f0?{avatar_url:V_}:{},...a0?{avatar_background:E_}:{}}})},[L.setAgents,L.setUserProfile])}),Q0=$V({environment:{isRenameBranchFormOpen:L.isRenameBranchFormOpen,renameBranchNameInputRef:L.renameBranchNameInputRef,appShellRef:L.appShellRef,setIsWebAppMode:L.setIsWebAppMode,workspaceOpen:L.workspaceOpen,setWorkspaceOpen:L.setWorkspaceOpen,btwSession:L.btwSession,agents:L.agents,agentsRef:L.agentsRef,currentChatJid:j,activeChatJidRef:L.activeChatJidRef,userProfile:L.userProfile,userProfileRef:L.userProfileRef,brandingRef:L.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:L.setIntentToast,intentToastTimerRef:L.intentToastTimerRef,editorOpen:K0.editorState.editorOpen,openEditor:K0.editorState.openEditor,resolvePane:(w0)=>X_.resolve(w0),tabStripActiveId:K0.editorState.tabStripActiveId,setFileRefs:L.setFileRefs,setMessageRefs:L.setMessageRefs,currentChatJid:j,currentHashtag:L.currentHashtag,searchQuery:L.searchQuery,searchOpen:L.searchOpen,setCurrentHashtag:L.setCurrentHashtag,setSearchQuery:L.setSearchQuery,setSearchOpen:L.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:qM,setPosts:D0.setPosts},agentActivity:{lastActivityTtlMs:HX,lastActivityTimerRef:L.lastActivityTimerRef,lastActivityTokenRef:L.lastActivityTokenRef,lastAgentEventRef:R,lastSilenceNoticeRef:S,isAgentRunningRef:v,setIsAgentTurnActive:L.setIsAgentTurnActive,setAgentStatus:E,draftBufferRef:c,thoughtBufferRef:h,pendingRequestRef:t,lastAgentResponseRef:L.lastAgentResponseRef,currentTurnIdRef:q0,steerQueuedTurnIdRef:X0,agentStatusRef:L.agentStatusRef,silentRecoveryRef:L.silentRecoveryRef,thoughtExpandedRef:H0,draftExpandedRef:B0,setCurrentTurnId:D,setSteerQueuedTurnId:I,currentTurnIdRefForPanel:q0,setAgentThoughtVisibility:sF,getAgentThought:iF,setAgentThought:x,setAgentDraft:k},chatPaneRuntime:{isAgentTurnActive:L.isAgentTurnActive,steerQueuedTurnId:y,currentTurnId:M,steerQueuedTurnIdRef:X0,setSteerQueuedTurnId:I,agentStatus:z,agentDraft:U,agentPlan:A,agentThought:T,pendingRequest:W,pendingRequestRef:t,followupQueueItems:L.followupQueueItems,activeModel:L.activeModel,activeThinkingLevel:L.activeThinkingLevel,supportsThinking:L.supportsThinking,activeModelUsage:L.activeModelUsage,contextUsage:L.contextUsage,isAgentRunningRef:v,wasAgentActiveRef:L.wasAgentActiveRef,draftBufferRef:c,thoughtBufferRef:h,lastAgentEventRef:R,lastSilenceNoticeRef:S,lastAgentResponseRef:L.lastAgentResponseRef,currentTurnIdRef:q0,thoughtExpandedRef:H0,draftExpandedRef:B0,agentStatusRef:L.agentStatusRef,silentRecoveryRef:L.silentRecoveryRef,setIsAgentTurnActive:L.setIsAgentTurnActive,setAgentStatus:E,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:J,setCurrentTurnId:D,setFollowupQueueItems:L.setFollowupQueueItems,setActiveModel:L.setActiveModel,setActiveThinkingLevel:L.setActiveThinkingLevel,setSupportsThinking:L.setSupportsThinking,setActiveModelUsage:L.setActiveModelUsage,setContextUsage:L.setContextUsage,lastNotifiedIdRef:L.lastNotifiedIdRef,agentsRef:L.agentsRef,notify:L.notify,shouldNotifyLocallyForChat:L.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:v,lastSilenceNoticeRef:S,lastAgentEventRef:R,currentTurnIdRef:q0,thoughtExpandedRef:H0,draftExpandedRef:B0,draftBufferRef:c,thoughtBufferRef:h,pendingRequestRef:t,lastAgentResponseRef:L.lastAgentResponseRef,agentStatusRef:L.agentStatusRef,stalledPostIdRef:s,scrollToBottomRef:D0.scrollToBottomRef,setCurrentTurnId:D,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:J,setAgentStatus:E,setPosts:D0.setPosts,dedupePosts:a4},viewState:{viewStateRef:L.viewStateRef,currentHashtag:L.currentHashtag,searchQuery:L.searchQuery,searchOpen:L.searchOpen},removeFileRefRef:K0.removeFileRefRef}),k0=FX({appShellRef:L.appShellRef,sidebarWidthRef:L.sidebarWidthRef,editorWidthRef:L.editorWidthRef,dockHeightRef:L.dockHeightRef}),{chatRefreshLifecycle:d,timelineViewActions:G0,isComposeBoxAgentActive:x0,followupActions:y0,sidepanelActions:C0,branchPaneActions:n0}=MF({routeState:{currentChatJid:j,currentRootChatJid:L.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:q,branchLoaderSourceChatJid:K,isWebAppMode:L.isWebAppMode},searchState:{currentHashtag:L.currentHashtag,setCurrentHashtag:L.setCurrentHashtag,searchQuery:L.searchQuery,setSearchQuery:L.setSearchQuery,searchOpen:L.searchOpen,setSearchOpen:L.setSearchOpen,searchScope:L.searchScope,setSearchScope:L.setSearchScope},shellState:{activeChatAgents:L.activeChatAgents,currentChatBranches:L.currentChatBranches,currentBranchRecord:L.currentBranchRecord,contextUsage:L.contextUsage,activeModel:L.activeModel,activeThinkingLevel:L.activeThinkingLevel,supportsThinking:L.supportsThinking,activeModelUsage:L.activeModelUsage,connectionStatus:L.connectionStatus,notificationsEnabled:L.notificationsEnabled,notificationPermission:L.notificationPermission,workspaceOpen:L.workspaceOpen,setWorkspaceOpen:L.setWorkspaceOpen,userProfile:L.userProfile,agents:L.agents,removingPostIds:L.removingPostIds,btwSession:L.btwSession},timeline:D0,interaction:Q0,paneRuntime:K0.paneRuntime,refs:{activeChatJidRef:L.activeChatJidRef,queueRefreshGenRef:L.queueRefreshGenRef,dismissedQueueRowIdsRef:L.dismissedQueueRowIdsRef,wasAgentActiveRef:L.wasAgentActiveRef,viewStateRef:L.viewStateRef,agentStatusRef:L.agentStatusRef,pendingRequestRef:t,thoughtBufferRef:h,draftBufferRef:c,previewResyncPendingRef:$0,previewResyncGenerationRef:b,isAgentRunningRef:v,currentTurnIdRef:q0,silentRecoveryRef:L.silentRecoveryRef,lastAgentEventRef:R,lastSilenceNoticeRef:S,staleUiVersionRef:L.staleUiVersionRef,staleUiReloadScheduledRef:L.staleUiReloadScheduledRef,hasConnectedOnceRef:L.hasConnectedOnceRef,sidebarWidthRef:L.sidebarWidthRef,appShellRef:L.appShellRef,agentsRef:L.agentsRef,paneStateOwnerChatJidRef:L.paneStateOwnerChatJidRef,chatPaneStateByChatRef:L.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:L.dismissedLiveWidgetKeysRef,draftThrottleRef:L.draftThrottleRef,thoughtThrottleRef:L.thoughtThrottleRef,followupQueueItemsRef:L.followupQueueItemsRef,lastAgentResponseRef:L.lastAgentResponseRef,thoughtExpandedRef:H0,draftExpandedRef:B0,steerQueuedTurnIdRef:X0,btwAbortRef:L.btwAbortRef,renameBranchInFlightRef:L.renameBranchInFlightRef,renameBranchLockUntilRef:L.renameBranchLockUntilRef,editorWidthRef:L.editorWidthRef,dockHeightRef:L.dockHeightRef},setters:{setFollowupQueueItems:L.setFollowupQueueItems,setContextUsage:L.setContextUsage,setExtensionStatusPanels:L.setExtensionStatusPanels,setPendingExtensionPanelActions:L.setPendingExtensionPanelActions,setExtensionWorkingState:L.setExtensionWorkingState,setAgentStatus:E,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:J,setConnectionStatus:L.setConnectionStatus,setAgents:L.setAgents,setUserProfile:L.setUserProfile,setActiveChatAgents:L.setActiveChatAgents,setCurrentChatBranches:L.setCurrentChatBranches,setActiveModel:L.setActiveModel,setActiveThinkingLevel:L.setActiveThinkingLevel,setSupportsThinking:L.setSupportsThinking,setActiveModelUsage:L.setActiveModelUsage,setAgentModelsPayload:L.setAgentModelsPayload,setHasLoadedAgentModels:L.setHasLoadedAgentModels,setHasMore:D0.setHasMore,setFloatingWidget:L.setFloatingWidget,setSteerQueuedTurnId:I,setRemovingPostIds:L.setRemovingPostIds,setBtwSession:L.setBtwSession,setWorkspaceOpen:L.setWorkspaceOpen,setRenameBranchNameDraft:L.setRenameBranchNameDraft,setIsRenameBranchFormOpen:L.setIsRenameBranchFormOpen,setIsRenamingBranch:L.setIsRenamingBranch},services:{searchPosts:ck,deletePost:lk,getAgentQueueState:jM,getAgentContext:nk,getAutoresearchStatus:rk,getAgentStatus:pk,getAgents:hk,getAgentModels:ik,getActiveChatAgents:sk,getChatBranches:ak,getTimeline:KM,stopAutoresearch:dk,dismissAutoresearch:ok,streamSidePrompt:XM,sendAgentMessage:LM,renameChatBranch:tk,pruneChatBranch:ek,purgeChatBranch:_M,restoreChatBranch:$M,forkChatBranch:VM,steerAgentQueueItem:GM,removeAgentQueueItem:ZM,getAgentThought:iF,setAgentThoughtVisibility:sF,silenceRefreshMs:UX,silenceWarningMs:NX,silenceFinalizeMs:BX,isCompactionStatus:Q$,currentAppAssetVersion:mk,tabStoreHasUnsaved:()=>__.hasUnsaved(),agentStatus:z,isAgentTurnActive:L.isAgentTurnActive,openEditor:K0.editorState.openEditor,activateTab:K0.editorState.handleTabActivate,tabStripActiveId:K0.editorState.tabStripActiveId,terminalTabPath:b4,resolveTab:(w0)=>__.get(w0),closeTab:K0.editorState.handleTabClose,editorOpen:K0.editorState.editorOpen},helpers:{getFormLock:jL,readStoredNumber:j4}});u(()=>{return AF({timelineRef:L.timelineRef,activeChatAgents:L.activeChatAgents,currentChatJid:j,onSwitch:(w0)=>n0.handleBranchPickerChange(w0),isIOSDevice:_6,isLikelySafari:M8})},[L.timelineRef,L.activeChatAgents,j,n0.handleBranchPickerChange]);let j_=Y0(()=>oF({panePopoutMode:Z,modelsLoaded:L.hasLoadedAgentModels,modelPayload:L.agentModelsPayload,providerMissingDismissed:Q}),[Z,L.hasLoadedAgentModels,L.agentModelsPayload,Q]),P0=P(()=>{PY()},[]),d0=P(()=>{V(!0),L_(Ej,"true")},[]);return u(()=>{if(!Z||typeof document>"u")return;document.title=KL(Y,K0.paneRuntime.activePaneTab,X)},[K0.paneRuntime.activePaneTab,Y,Z,X]),u(()=>{if(typeof window>"u")return;let w0=(s0)=>{dF(s0,{currentChatJid:j,openEditor:K0.editorState.openEditor,popOutPane:n0.handlePopOutPane,showIntentToast:Q0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",w0),()=>{window.removeEventListener("piclaw-extension-ui:request",w0)}},[n0.handlePopOutPane,j,Q0.composeReferenceActions.showIntentToast,K0.editorState.openEditor]),tK(zL({routeState:{branchLoaderMode:q,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:K0.paneRuntime,splitters:k0,orchestration:{branchPaneActions:n0,timelineViewActions:G0,sidepanelActions:C0,followupActions:y0,chatRefreshLifecycle:d,isComposeBoxAgentActive:x0},interaction:Q0,timeline:D0,surface:{...L,oobePanelState:j_,composePrefillRequest:F,requestComposePrefill:H,handleOobeSetupProvider:P0,handleOobeShowModelPicker:P0,handleOobeOpenWorkspace:P0,handleDismissProviderMissingOobe:d0},editorState:K0.editorState,agentState:{agentStatus:z,agentDraft:U,agentPlan:A,agentThought:T,pendingRequest:W,currentTurnId:M,steerQueuedTurnId:y,setPendingRequest:J,pendingRequestRef:t,isCompactionStatus:Q$},helpers:{formatBranchPickerLabel:u2,isIOSDevice:_6,terminalTabPath:b4}}))}function FM(){let{locationParams:_,navigate:$}=fY();return B`<${QM} locationParams=${_} navigate=${$} />`}var x8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(x8){if(G$(null,x8),x8.replaceChildren(),G$(B`<${FM} />`,x8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=DE7F987178A0D74A64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
