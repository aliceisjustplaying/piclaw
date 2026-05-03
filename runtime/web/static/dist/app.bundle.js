var vF=Object.defineProperty;var mF=(_)=>_;function cF(_,$){this[_]=mF.bind(null,$)}var Y1=(_,$)=>{for(var j in $)vF(_,j,{get:$[j],enumerable:!0,configurable:!0,set:cF.bind($,j)})};var O_=(_,$)=>()=>(_&&($=_(_=0)),$);var qG={};Y1(qG,{useState:()=>C,useRef:()=>u,useReducer:()=>ZG,useMemo:()=>X0,useLayoutEffect:()=>c4,useImperativeHandle:()=>sF,useErrorBoundary:()=>eF,useEffect:()=>g,useDebugValue:()=>tF,useContext:()=>aF,useCallback:()=>f,render:()=>L$,html:()=>N,h:()=>e8,createContext:()=>oF,Component:()=>R5});function q$(_,$){for(var j in $)_[j]=$[j];return _}function t8(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function e8(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?n6.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return m6(_,Y,G,Z,null)}function m6(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++rj:Z,__i:-1,__u:0};return Z==null&&y_.vnode!=null&&y_.vnode(X),X}function d6(_){return _.children}function R5(_,$){this.props=_,this.context=$}function b4(_,$){if($==null)return _.__?b4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?b4(_):null}function pF(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=q$({},$);X.__v=$.__v+1,y_.vnode&&y_.vnode(X),_3(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?b4($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,_G(G,X,Z),$.__e=$.__=null,X.__e!=j&&aj(X)}}function aj(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),aj(_)}function i8(_){(!_.__d&&(_.__d=!0)&&P$.push(_)&&!p6.__r++||Rj!=y_.debounceRendering)&&((Rj=y_.debounceRendering)||dj)(p6)}function p6(){try{for(var _,$=1;P$.length;)P$.length>$&&P$.sort(ij),_=P$.shift(),$=P$.length,pF(_)}finally{P$.length=p6.__r=0}}function tj(_,$,j,G,Z,X,Y,q,L,K,Q){var V,B,F,H,D,E,U,A=G&&G.__k||h6,z=$.length;for(L=nF(j,$,A,L,z),V=0;V<z;V++)(F=j.__k[V])!=null&&(B=F.__i!=-1&&A[F.__i]||l6,F.__i=V,E=_3(_,F,B,Z,X,Y,q,L,K,Q),H=F.__e,F.ref&&B.ref!=F.ref&&(B.ref&&$3(B.ref,null,F),Q.push(F.ref,F.__c||H,F)),D==null&&H!=null&&(D=H),(U=!!(4&F.__u))||B.__k===F.__k?(L=ej(F,L,_,U),U&&B.__e&&(B.__e=null)):typeof F.type=="function"&&E!==void 0?L=E:H&&(L=H.nextSibling),F.__u&=-7);return j.__e=D,L}function nF(_,$,j,G,Z){var X,Y,q,L,K,Q=j.length,V=Q,B=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=m6(null,Y,null,null,null):r6(Y)?Y=_.__k[X]=m6(d6,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=m6(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,L=X+B,Y.__=_,Y.__b=_.__b+1,q=null,(K=Y.__i=rF(Y,j,L,V))!=-1&&(V--,(q=j[K])&&(q.__u|=2)),q==null||q.__v==null?(K==-1&&(Z>Q?B--:Z<Q&&B++),typeof Y.type!="function"&&(Y.__u|=4)):K!=L&&(K==L-1?B--:K==L+1?B++:(K>L?B--:B++,Y.__u|=4))):_.__k[X]=null;if(V)for(X=0;X<Q;X++)(q=j[X])!=null&&(2&q.__u)==0&&(q.__e==G&&(G=b4(q)),jG(q,q));return G}function ej(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=ej(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=b4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function rF(_,$,j,G){var Z,X,Y,q=_.key,L=_.type,K=$[j],Q=K!=null&&(2&K.__u)==0;if(K===null&&q==null||Q&&q==K.key&&L==K.type)return j;if(G>(Q?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((K=$[Y=Z>=0?Z--:X++])!=null&&(2&K.__u)==0&&q==K.key&&L==K.type)return Y}return-1}function Sj(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||hF.test($)?j:j+"px"}function b6(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||Sj(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||Sj(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(oj,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[P5]=G[P5]:(j[P5]=a8,_.addEventListener($,X?d8:r8,X)):_.removeEventListener($,X?d8:r8,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function gj(_){return function($){if(this.l){var j=this.l[$.type+_];if($[v6]==null)$[v6]=a8++;else if($[v6]<j[P5])return;return j(y_.event?y_.event($):$)}}}function _3(_,$,j,G,Z,X,Y,q,L,K){var Q,V,B,F,H,D,E,U,A,z,O,y,I,k,J,M=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),X=[q=$.__e=j.__e]),(Q=y_.__b)&&Q($);_:if(typeof M=="function")try{if(U=$.props,A=M.prototype&&M.prototype.render,z=(Q=M.contextType)&&G[Q.__c],O=Q?z?z.props.value:Q.__:G,j.__c?E=(V=$.__c=j.__c).__=V.__E:(A?$.__c=V=new M(U,O):($.__c=V=new R5(U,O),V.constructor=M,V.render=iF),z&&z.sub(V),V.state||(V.state={}),V.__n=G,B=V.__d=!0,V.__h=[],V._sb=[]),A&&V.__s==null&&(V.__s=V.state),A&&M.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=q$({},V.__s)),q$(V.__s,M.getDerivedStateFromProps(U,V.__s))),F=V.props,H=V.state,V.__v=$,B)A&&M.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),A&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(A&&M.getDerivedStateFromProps==null&&U!==F&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(U,O),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(U,V.__s,O)===!1){$.__v!=j.__v&&(V.props=U,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(W){W&&(W.__=$)}),h6.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Y.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(U,V.__s,O),A&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(F,H,D)})}if(V.context=O,V.props=U,V.__P=_,V.__e=!1,y=y_.__r,I=0,A)V.state=V.__s,V.__d=!1,y&&y($),Q=V.render(V.props,V.state,V.context),h6.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,y&&y($),Q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++I<25);V.state=V.__s,V.getChildContext!=null&&(G=q$(q$({},G),V.getChildContext())),A&&!B&&V.getSnapshotBeforeUpdate!=null&&(D=V.getSnapshotBeforeUpdate(F,H)),k=Q!=null&&Q.type===d6&&Q.key==null?$G(Q.props.children):Q,q=tj(_,r6(k)?k:[k],$,j,G,Z,X,Y,q,L,K),V.base=$.__e,$.__u&=-161,V.__h.length&&Y.push(V),E&&(V.__E=V.__=null)}catch(W){if($.__v=null,L||X!=null)if(W.then){for($.__u|=L?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;X[X.indexOf(q)]=null,$.__e=q}else{for(J=X.length;J--;)t8(X[J]);o8($)}else $.__e=j.__e,$.__k=j.__k,W.then||o8($);y_.__e(W,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=dF(j.__e,$,j,G,Z,X,Y,L,K);return(Q=y_.diffed)&&Q($),128&$.__u?void 0:q}function o8(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(o8))}function _G(_,$,j){for(var G=0;G<j.length;G++)$3(j[G],j[++G],j[++G]);y_.__c&&y_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){y_.__e(X,Z.__v)}})}function $G(_){return typeof _!="object"||_==null||_.__b>0?_:r6(_)?_.map($G):q$({},_)}function dF(_,$,j,G,Z,X,Y,q,L){var K,Q,V,B,F,H,D,E=j.props||l6,U=$.props,A=$.type;if(A=="svg"?Z="http://www.w3.org/2000/svg":A=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(K=0;K<X.length;K++)if((F=X[K])&&"setAttribute"in F==!!A&&(A?F.localName==A:F.nodeType==3)){_=F,X[K]=null;break}}if(_==null){if(A==null)return document.createTextNode(U);_=document.createElementNS(Z,A,U.is&&U),q&&(y_.__m&&y_.__m($,X),q=!1),X=null}if(A==null)E===U||q&&_.data==U||(_.data=U);else{if(X=X&&n6.call(_.childNodes),!q&&X!=null)for(E={},K=0;K<_.attributes.length;K++)E[(F=_.attributes[K]).name]=F.value;for(K in E)F=E[K],K=="dangerouslySetInnerHTML"?V=F:K=="children"||(K in U)||K=="value"&&("defaultValue"in U)||K=="checked"&&("defaultChecked"in U)||b6(_,K,null,F,Z);for(K in U)F=U[K],K=="children"?B=F:K=="dangerouslySetInnerHTML"?Q=F:K=="value"?H=F:K=="checked"?D=F:q&&typeof F!="function"||E[K]===F||b6(_,K,F,E[K],Z);if(Q)q||V&&(Q.__html==V.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(V&&(_.innerHTML=""),tj($.type=="template"?_.content:_,r6(B)?B:[B],$,j,G,A=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&b4(j,0),q,L),X!=null)for(K=X.length;K--;)t8(X[K]);q||(K="value",A=="progress"&&H==null?_.removeAttribute("value"):H!=null&&(H!==_[K]||A=="progress"&&!H||A=="option"&&H!=E[K])&&b6(_,K,H,E[K],Z),K="checked",D!=null&&D!=_[K]&&b6(_,K,D,E[K],Z))}return _}function $3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){y_.__e(Z,j)}}function jG(_,$,j){var G,Z;if(y_.unmount&&y_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||$3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){y_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&jG(G[Z],$,j||typeof _.type!="function");j||t8(_.__e),_.__c=_.__=_.__e=void 0}function iF(_,$,j){return this.constructor(_,j)}function L$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),y_.__&&y_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],_3($,_=(!G&&j||$).__k=e8(d6,null,[_]),Z||l6,l6,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?n6.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),_G(X,_,Y)}function oF(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,i8(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+sj++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function m4(_,$){g_.__h&&g_.__h(w_,_,v4||$),v4=0;var j=w_.__H||(w_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return v4=1,ZG(XG,_)}function ZG(_,$,j){var G=m4(R$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):XG(void 0,$),function(q){var L=G.__N?G.__N[0]:G.__[0],K=G.t(L,q);L!==K&&(G.__N=[K,G.__[1]],G.__c.setState({}))}],G.__c=w_,!w_.__f)){var Z=function(q,L,K){if(!G.__c.__H)return!0;var Q=G.__c.__H.__.filter(function(B){return B.__c});if(Q.every(function(B){return!B.__N}))return!X||X.call(this,q,L,K);var V=G.__c.props!==q;return Q.some(function(B){if(B.__N){var F=B.__[0];B.__=B.__N,B.__N=void 0,F!==B.__[0]&&(V=!0)}}),X&&X.call(this,q,L,K)||V};w_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=w_;w_.componentWillUpdate=function(q,L,K){if(this.__e){var Q=X;X=void 0,Z(q,L,K),X=Q}Y&&Y.call(this,q,L,K)},w_.shouldComponentUpdate=Z}return G.__N||G.__}function g(_,$){var j=m4(R$++,3);!g_.__s&&j3(j.__H,$)&&(j.__=_,j.u=$,w_.__H.__h.push(j))}function c4(_,$){var j=m4(R$++,4);!g_.__s&&j3(j.__H,$)&&(j.__=_,j.u=$,w_.__h.push(j))}function u(_){return v4=5,X0(function(){return{current:_}},[])}function sF(_,$,j){v4=6,c4(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function X0(_,$){var j=m4(R$++,7);return j3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function f(_,$){return v4=8,X0(function(){return _},$)}function aF(_){var $=w_.context[_.__c],j=m4(R$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(w_)),$.props.value):_.__}function tF(_,$){g_.useDebugValue&&g_.useDebugValue($?$(_):_)}function eF(_){var $=m4(R$++,10),j=C();return $.__=_,w_.componentDidCatch||(w_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function _N(){for(var _;_=GG.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(c6),$.__h.some(s8),$.__h=[]}catch(j){$.__h=[],g_.__e(j,_.__v)}}}function $N(_){var $,j=function(){clearTimeout(G),pj&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);pj&&($=requestAnimationFrame(j))}function c6(_){var $=w_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),w_=$}function s8(_){var $=w_;_.__c=_.__(),w_=$}function j3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function XG(_,$){return typeof $=="function"?$(_):$}function jN(_){var $=nj.get(this);return $||($=new Map,nj.set(this,$)),($=YG(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",q="",L=[0],K=function(B){X===1&&(B||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,B,Y):X===3&&(B||Y)?(L.push(3,B,Y),X=2):X===2&&Y==="..."&&B?L.push(4,B,0):X===2&&Y&&!B?L.push(5,0,!0,Y):X>=5&&((Y||!B&&X===5)&&(L.push(X,0,Y,Z),X=6),B&&(L.push(X,B,0,Z),X=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(X===1&&K(),K(Q));for(var V=0;V<j[Q].length;V++)G=j[Q][V],X===1?G==="<"?(K(),L=[L],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:q?G===q?q="":Y+=G:G==='"'||G==="'"?q=G:G===">"?(K(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[Q][V+1]===">")?(K(),X===3&&(L=L[0]),X=L,(L=L[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(K(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,L=L[0])}return K(),L}(_)),$),arguments,[])).length>1?$:$[0]}var n6,y_,rj,lF,P$,Rj,dj,ij,p8,v6,P5,oj,a8,r8,d8,sj,l6,h6,hF,r6,R$,w_,n8,uj,v4=0,GG,g_,bj,vj,mj,cj,lj,hj,pj,YG=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],q=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=q:Y===4?G[1]=Object.assign(G[1]||{},q):Y===5?(G[1]=G[1]||{})[$[++X]]=q:Y===6?G[1][$[++X]]+=q+"":Y?(Z=_.apply(q,YG(_,q,j,["",null])),G.push(Z),q[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(q)}return G},nj,N;var x0=O_(()=>{l6={},h6=[],hF=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,r6=Array.isArray;n6=h6.slice,y_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(q){_=q}throw _}},rj=0,lF=function(_){return _!=null&&_.constructor===void 0},R5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=q$({},this.state),typeof _=="function"&&(_=_(q$({},j),this.props)),_&&q$(j,_),_!=null&&this.__v&&($&&this._sb.push($),i8(this))},R5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),i8(this))},R5.prototype.render=d6,P$=[],dj=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ij=function(_,$){return _.__v.__b-$.__v.__b},p6.__r=0,p8=Math.random().toString(8),v6="__d"+p8,P5="__a"+p8,oj=/(PointerCapture)$|Capture$/i,a8=0,r8=gj(!1),d8=gj(!0),sj=0;GG=[],g_=y_,bj=g_.__b,vj=g_.__r,mj=g_.diffed,cj=g_.__c,lj=g_.unmount,hj=g_.__;g_.__b=function(_){w_=null,bj&&bj(_)},g_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),hj&&hj(_,$)},g_.__r=function(_){vj&&vj(_),R$=0;var $=(w_=_.__c).__H;$&&(n8===w_?($.__h=[],w_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(c6),$.__h.some(s8),$.__h=[],R$=0)),n8=w_},g_.diffed=function(_){mj&&mj(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(GG.push($)!==1&&uj===g_.requestAnimationFrame||((uj=g_.requestAnimationFrame)||$N)(_N)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),n8=w_=null},g_.__c=function(_,$){$.some(function(j){try{j.__h.some(c6),j.__h=j.__h.filter(function(G){return!G.__||s8(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],g_.__e(G,j.__v)}}),cj&&cj(_,$)},g_.unmount=function(_){lj&&lj(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{c6(G)}catch(Z){$=Z}}),j.__H=void 0,$&&g_.__e($,j.__v))};pj=typeof requestAnimationFrame=="function";nj=new Map;N=jN.bind(e8)});function B1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function V_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function Q$(_,$=!1){let j=B1(_);if(j===null)return $;return j==="true"}function Q4(_,$=null){let j=B1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function b3(_){let $=B1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function c3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function wZ(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function FH(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function NH(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=FH(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),q=parseInt(Z[3],10);if(![X,Y,q].every((K)=>Number.isFinite(K)))return null;let L=`#${[X,Y,q].map((K)=>K.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:q,hex:L}}function B4(_){return wZ(_)||NH(_)}function l3(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function q2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function UH(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function HH(_){return UH(_)>0.4?"#000000":"#ffffff"}function yZ(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function h3(_){return kZ[_]||kZ.default}function EH(_){return _.mode==="auto"?yZ():_.mode}function xZ(_,$){let j=h3(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||F$}function B$(_,$,j){let G=B4(_);if(!G)return _;return l3(G,$,j)}function IZ(_,$,j){let G=B4($);if(!G)return _;let X=wZ(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:B$(_.bgPrimary,G,0.08),bgSecondary:B$(_.bgSecondary,G,0.12),bgHover:B$(_.bgHover,G,0.16),textPrimary:B$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:B$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:B$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?l3(G,X,0.18):G.hex,warning:B$(_.warning||F$.warning,G,0.14),danger:B$(_.danger,G,0.16),success:B$(_.success,G,0.16)}}function DH(_,$){let j=B4(_?.warning);if(j)return j.hex;let G=B4($==="dark"?V2.warning:F$.warning)||B4(F$.warning),Z=B4(_?.accent);if(G&&Z)return l3(G,Z,$==="dark"?0.18:0.14);return $==="dark"?V2.warning:F$.warning}function WH(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=B4(G),X=Z?q2(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?q2(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=Z?q2(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=Z?HH(Z):$==="dark"?"#000000":"#ffffff",K=Z?q2(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",Q=DH(_,$),V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":K,"--accent-soft":Y,"--accent-soft-strong":q,"--accent-contrast-text":L,"--warning-color":Q,"--danger-color":_.danger||F$.danger,"--success-color":_.success||F$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([B,F])=>{if(F)j.style.setProperty(B,F)})}function OH(){if(typeof document>"u")return;let _=document.documentElement;BH.forEach(($)=>_.style.removeProperty($))}function t4(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function MZ(_){let $=c3(F4?.theme||"default"),j=F4?.tint?String(F4.tint).trim():null,G=xZ($,_);if($==="default"&&j)G=IZ(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?V2.bgPrimary:F$.bgPrimary}function zH(_,$){if(typeof document>"u")return;let j=t4("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=t4("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",MZ("light"));let Z=t4("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",MZ("dark"));let X=t4("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=t4("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let q=t4("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function JH(){if(typeof window>"u")return;let _={...F4,mode:TZ};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function AH(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function p3(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=c3(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=h3(j),X=EH(Z),Y=xZ(j,X);F4={theme:j,tint:G},TZ=X;let q=document.documentElement;q.dataset.theme=X,q.dataset.colorTheme=j,q.dataset.tint=G?String(G):"",q.style.colorScheme=X;let L=Y;if(j==="default"&&G)L=IZ(Y,G,X);if(j==="default"&&!G)OH();else WH(L,X);if(zH(L.bgPrimary,X),JH(),$.persist!==!1)if(V_(m3,j),G)V_(K2,G);else V_(K2,"")}function L2(){if(h3(F4.theme).mode!=="auto")return;p3(F4,{persist:!1})}function CZ(){if(typeof window>"u")return()=>{};let _=c3(B1(m3)||"default"),$=(()=>{let j=B1(K2);return j?j.trim():null})();if(p3({theme:_,tint:$},{persist:!1}),window.matchMedia&&!v3){let j=window.matchMedia("(prefers-color-scheme: dark)");if(j.addEventListener)j.addEventListener("change",L2);else if(j.addListener)j.addListener(L2);return v3=!0,()=>{if(j.removeEventListener)j.removeEventListener("change",L2);else if(j.removeListener)j.removeListener(L2);v3=!1}}return()=>{}}function e4(_){if(!_||typeof _!=="object")return;let $=AH(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)p3({theme:G||"default",tint:Z},{persist:!1});V_(m3,G||"default"),V_(K2,Z||"")}function fZ(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return yZ()}var m3="piclaw_theme",K2="piclaw_tint",F$,V2,kZ,BH,F4,TZ="light",v3=!1;var l5=O_(()=>{F$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},V2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},kZ={default:{label:"Default",mode:"auto",light:F$,dark:V2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},BH=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],F4={theme:"default",tint:null}});function lZ(_=typeof window<"u"?window:null){return _||null}function B2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function d5(_,$){return`${_}:${$}`}function hZ(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function pZ(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function U4(_){if(!_||typeof _!=="object")return null;return{..._}}function D4(_){if(!_)return null;return H4.find(($)=>$.id===_)||null}function r3(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function nZ(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=D4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function cZ(_,$,j){let G=E4.get(d5(_,$));if(G&&D4(G)?.status==="active")r5(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=hZ(_),X={id:Z,type:_,chatJid:$,startedAt:B2(),detail:U4(j),phases:[],status:"active"};return H4.push(X),pZ(H4,100),E4.set(d5(_,$),Z),r3(Z,"start"),Z}function r5(_,$,j,G,Z){let X=D4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:B2(),detail:U4(G)}),r3(X.id,j);if(X.status=$,X.completedAt=B2(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=d5(X.type,X.chatJid);if(E4.get(Y)===X.id)E4.delete(Y);nZ(X.id)}function pH(_=lZ()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=F2;return F2}function _5(_=lZ()){return pH(_)}function rZ(_,$,j){return _5().ensureTrace(_,$,j)}function N2(_,$){return _5().getActiveTraceId(_,$)}function _1(_,$,j){_5().markTrace(_,$,j)}function U2(_,$,j="settled",G){let Z=D4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return r5(_,"completed",j,G),!0}function dZ(_,$,j="failed",G){_5().failTrace(_,$,j,G)}function iZ(_,$="cancelled",j){_5().cancelTrace(_,$,j)}function d3(_){return _5().recordRequest(_)}var H4,n5,E4,F2;var i5=O_(()=>{H4=[],n5=[],E4=new Map;F2={startTrace(_,$,j){return cZ(_,$,j)},ensureTrace(_,$,j){let G=E4.get(d5(_,$));if(G&&D4(G)?.status==="active")return G;return cZ(_,$,j)},getActiveTraceId(_,$){let j=E4.get(d5(_,$));return j&&D4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=D4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:B2(),detail:U4(j)}),r3(G.id,$)},completeTrace(_,$="settled",j){r5(_,"completed",$,j)},failTrace(_,$,j="failed",G){r5(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){r5(_,"cancelled",$,j)},recordRequest(_){let $=hZ("req");return n5.push({..._,id:$,detail:U4(_.detail)}),pZ(n5,300),$},getTraces(){return H4.map((_)=>({..._,detail:U4(_.detail),phases:_.phases.map(($)=>({...$,detail:U4($.detail)}))}))},getRequests(){return n5.map((_)=>({..._,detail:U4(_.detail)}))},clear(){H4.forEach((_)=>nZ(_.id)),H4.splice(0,H4.length),n5.splice(0,n5.length),E4.clear()},printSummary(){let _={traces:F2.getTraces(),requests:F2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});var _6={};Y1(_6,{uploadWorkspaceFile:()=>D2,uploadMedia:()=>X7,updateWorkspaceFile:()=>AE,submitAdaptiveCardAction:()=>Y7,streamSidePrompt:()=>WE,stopAutoresearch:()=>BE,steerAgentQueueItem:()=>HE,setWorkspaceVisibility:()=>t5,setAgentThoughtVisibility:()=>zE,sendWebPushTestNotification:()=>Z7,sendPeerAgentMessage:()=>qE,sendAgentMessage:()=>D1,searchPosts:()=>rH,saveWorkspaceSettings:()=>e3,saveWebPushSubscription:()=>j7,saveUiState:()=>a3,saveQuickActionsSettings:()=>t3,saveEnvironmentOverride:()=>H2,restoreChatBranch:()=>YE,respondToAgentRequest:()=>$5,reorderAgentQueueItem:()=>EE,renameWorkspaceFile:()=>H7,renameChatJid:()=>XE,renameChatBranch:()=>$E,removeAgentQueueItem:()=>UE,reindexWorkspace:()=>B7,purgeChatBranch:()=>ZE,pruneChatBranch:()=>GE,moveWorkspaceEntry:()=>E7,mergeChatBranchIntoParent:()=>jE,getWorkspaceTree:()=>a5,getWorkspaceRawUrl:()=>e5,getWorkspaceIndexStatus:()=>Q7,getWorkspaceFileStat:()=>N7,getWorkspaceFileDownloadUrl:()=>W2,getWorkspaceFile:()=>F7,getWorkspaceDownloadUrl:()=>O2,getWorkspaceBranch:()=>V7,getWebPushPublicKey:()=>$7,getTimeline:()=>b$,getThumbnailUrl:()=>L7,getThread:()=>dH,getSystemMetrics:()=>s3,getQuickActionsSettings:()=>s5,getPostsByHashtag:()=>o3,getMediaUrl:()=>P1,getMediaText:()=>JE,getMediaInfo:()=>E2,getMediaBlob:()=>K7,getEnvironmentSettings:()=>_7,getChatBranches:()=>tH,getAutoresearchStatus:()=>QE,getAgents:()=>LE,getAgentThought:()=>OE,getAgentStatus:()=>KE,getAgentQueueState:()=>NE,getAgentModels:()=>W4,getAgentContext:()=>VE,getAgentCommands:()=>o5,getActiveChatAgents:()=>aH,forkChatBranch:()=>eH,dismissAutoresearch:()=>FE,deleteWorkspaceFile:()=>D7,deleteWebPushSubscription:()=>G7,deletePost:()=>sH,createWorkspaceFile:()=>U7,createRootChatSession:()=>_E,createReply:()=>oH,createPost:()=>iH,completeInstanceOobe:()=>DE,attachWorkspaceFile:()=>kE,addToWhitelist:()=>q7,SSEClient:()=>z2});async function p0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(c_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw d3({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(d3({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function oZ(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function nH(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:q}=await j.read();if(q)break;Z+=G.decode(Y,{stream:!0});let L=Z.split(`

`);Z=L.pop()||"";for(let K of L){let Q=oZ(K);if(Q)$(Q.event,Q.data)}}Z+=G.decode();let X=oZ(Z);if(X)$(X.event,X.data)}async function b$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return p0(G)}async function o3(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return p0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function rH(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let q=G?`&chat_jid=${encodeURIComponent(G)}`:"",L=Z?`&scope=${encodeURIComponent(Z)}`:"",K=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",Q=Y?.images?"&images=1":"",V=Y?.attachments?"&attachments=1":"";return p0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${L}${K}${Q}${V}`)}async function dH(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return p0(`/thread/${_}${j}`)}async function s3(){return p0("/agent/system-metrics")}async function a3(_){return p0("/agent/ui-state",{method:"POST",body:JSON.stringify(_||{})})}async function iH(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return p0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function oH(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return p0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function sH(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return p0(Z,{method:"DELETE"})}async function D1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",q={content:$,thread_id:j,media_ids:G};if(Z==="auto"||Z==="queue"||Z==="steer")q.mode=Z;return p0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(q)})}async function o5(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return p0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function s5(){return p0("/agent/settings/quick-actions")}async function t3(_){return p0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function e3(_){return p0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function _7(){return p0("/agent/settings/environment")}async function H2(_){return p0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function aH(){return p0("/agent/active-chats")}async function tH(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");if($?.prewarmRecent)j.set("prewarm_recent","1");if(Number.isFinite($?.prewarmLimit))j.set("prewarm_limit",String($.prewarmLimit));if($?.excludeChatJid)j.set("exclude_chat_jid",String($.excludeChatJid));if($?.prewarmChatJid)j.set("prewarm_chat_jid",String($.prewarmChatJid));let G=j.toString()?`?${j.toString()}`:"";return p0(`/agent/branches${G}`)}async function eH(_,$={}){return p0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function _E(_){return p0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function $E(_,$={}){return p0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function jE(_){return p0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function GE(_){return p0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function ZE(_){return p0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function XE(_,$){return p0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function YE(_,$={}){return p0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function qE(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return p0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function $7(){return p0("/agent/push/vapid-public-key")}async function j7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return p0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function G7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return p0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function Z7(_={}){return p0("/agent/push/test",{method:"POST",body:JSON.stringify(_||{})})}async function LE(){return p0("/agent/roster")}async function KE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/status${$}`)}async function VE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/context${$}`)}async function QE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/autoresearch/status${$}`)}async function BE(_=null,$={}){return p0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function FE(_=null){return p0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function NE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/queue-state${$}`)}async function UE(_,$=null){let j=await fetch(c_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function HE(_,$=null){let j=await fetch(c_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function EE(_,$,j=null){let G=await fetch(c_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function W4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/models${$}`)}async function DE(_="provider-ready"){return p0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function X7(_){let $=new FormData;$.append("file",_);let j=await fetch(c_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function $5(_,$,j=null){let G=await fetch(c_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function Y7(_){let $=await fetch(c_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function WE(_,$={}){let j=await fetch(c_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await nH(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function q7(_,$){let j=await fetch(c_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function OE(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return p0(j)}async function zE(_,$,j){return p0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function P1(_){return`${c_}/media/${_}`}function L7(_){return`${c_}/media/${_}/thumbnail`}async function E2(_){let $=await fetch(`${c_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function JE(_){let $=await fetch(`${c_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function K7(_){let $=await fetch(`${c_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function a5(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return p0(G)}async function V7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return p0($)}async function Q7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return p0($)}async function B7(_="all"){return p0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function F7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return p0(Z)}async function N7(_){return p0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function AE(_,$){return p0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function kE(_){return p0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function TE(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function wE(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function yE(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",c_+$);for(let[q,L]of Object.entries(j||{}))if(L!==void 0&&L!==null)Y.setRequestHeader(q,String(L));Y.upload.onprogress=(q)=>{if(typeof G==="function")G({loaded:q.lengthComputable?q.loaded:0,total:q.lengthComputable?q.total:_.size,lengthComputable:q.lengthComputable})},Y.onload=()=>{try{let q=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(q);else{let L=Error(q.error||`HTTP ${Y.status}`);L.status=Y.status,L.code=q.code,X(L)}}catch{let q=Error(`HTTP ${Y.status}`);q.status=Y.status,X(q)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function xE(_,$="",j={}){let G=wE(),Z=TE("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(i3,Number(j.chunkSize)||ME)),Y=Math.max(0,Number(_?.size)||0),q=Math.max(1,Math.ceil(Y/X)),L=0,K=null;for(let Q=0;Q<q;Q+=1){let V=Q*X,B=Math.min(Y,V+X),F=_.slice(V,B),H=F.size;if(K=await yE(F,Z,{"X-Upload-Id":G,"X-Chunk-Index":Q,"X-Chunk-Total":q,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(D)=>{if(typeof j.onProgress!=="function")return;let E=Math.min(Y,L+(D?.loaded||0)),U=Y||1;j.onProgress({loaded:E,total:U,percent:Math.round(E/U*100),chunkIndex:Q,chunkTotal:q})}),L+=H,typeof j.onProgress==="function"){let D=Y||1,E=Y?L:D;j.onProgress({loaded:E,total:D,percent:Math.round(E/D*100),chunkIndex:Q+1,chunkTotal:q})}}return K}async function D2(_,$="",j={}){if(_?.size>i3){let G=(_.size/1048576).toFixed(0),Z=(i3/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await xE(_,$,j)}async function U7(_,$,j=""){let G=await fetch(c_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function H7(_,$){let j=await fetch(c_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function E7(_,$){let j=await fetch(c_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function D7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return p0($,{method:"DELETE"})}async function t5(_,$=!1){return p0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function e5(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${c_}/workspace/raw?${j.toString()}`}function W2(_){return e5(_,{download:!0})}function O2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${c_}/workspace/download?${j}`}class z2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(c_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var c_="",i3=1073741824,ME=8388608;var u_=O_(()=>{i5()});function G5(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function p1(_={}){if(typeof window>"u")return;let $=G5(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function f7(){if(typeof window>"u")return null;return G5(window.__piclawSettingsRequestedSection)}function M2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=f7();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function c$({children:_,className:$=""}){let[j,G]=C(null);return g(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return document.body.appendChild(Z),G(Z),()=>{try{L$(null,Z)}finally{Z.remove()}}},[]),g(()=>{if(!j)return;j.className=$||"";return},[$,j]),c4(()=>{if(!j)return;L$(_,j);return},[_,j]),null}var T2=O_(()=>{x0()});function l$(_){let $=z4.findIndex((j)=>j.id===_.id);if($>=0)z4[$]=_;else z4.push(_);z4.sort((j,G)=>(j.order??500)-(G.order??500))}function gX(_){let $=z4.findIndex((j)=>j.id===_);if($>=0)z4.splice($,1)}function uX(){return[...z4]}function P7(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var z4;var Z5=O_(()=>{z4=[]});function tE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(J4,{detail:{enabled:Boolean(_)}}))}function mX(_){if(typeof fetch!=="function")return;a3({ui_meters:_}).catch(($)=>{console.debug("[meters] Failed to persist meters UI state.",$)})}function eE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(y2,{detail:{collapsed:Boolean(_)}}))}function q6(_=!1){return Q$(bX,_)}function cX(_=!1){return Q$(vX,_)}function w2(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)V_(bX,Z?"true":"false");if(G)mX({enabled:Z});return tE(Z),Z}function R7(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)V_(vX,Z?"true":"false");if(G)mX({collapsed:Z});return eE(Z),Z}function S7(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if(typeof _?.enabled==="boolean")w2(Boolean(_.enabled),{persistServer:!1});else if($==="toggle"){let j=!q6(!1);w2(j,{persistServer:!1})}if(typeof _?.collapsed==="boolean")R7(Boolean(_.collapsed),{persistServer:!1})}var bX="piclaw_system_meters_enabled",vX="piclaw_system_meters_collapsed",J4="piclaw-meters-change",y2="piclaw-meters-collapsed-change";var x2=O_(()=>{u_()});function lX(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function hX(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function E$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=lX(_,$);return hX(Z,{min:j,max:G})}function _D(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=E$(_,{fallback:G,min:Z,max:X}),q=Math.abs(lX(j,1))||1,L=Number($)<0?-1:1;return hX(Y+L*q,{min:Z,max:X})}function b_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:q,onChange:L}){let K=Number.isFinite(Number(Z))?Number(Z):E$(_,{fallback:0,min:$,max:j}),[Q,V]=C(String(_??K)),B=u(!1);g(()=>{if(!B.current)V(String(_??K))},[_,K]);let F=f((D)=>{B.current=!1;let E=E$(D,{fallback:K,min:$,max:j});V(String(E)),L?.(E)},[K,$,j,L]),H=f((D)=>{B.current=!1;let E=_D(_,{direction:D,step:G,fallback:K,min:$,max:j});V(String(E)),L?.(E)},[K,j,$,L,G,_]);return N`
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
                onInput=${(D)=>{B.current=!0,V(D.target.value)}}
                onBlur=${(D)=>F(D.target.value)}
                onKeyDown=${(D)=>{if(D.key==="Enter")D.preventDefault(),F(D.target.value),D.target.blur()}}
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
    `}var A4=O_(()=>{x0()});function pX(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function nX({value:_,onChange:$}){let j=u(null),[G,Z]=C(pX(_));g(()=>{Z(pX(_))},[_]);let X=f((Y)=>{let q=Y.target.files?.[0];if(!q)return;let L=new FileReader;L.onload=()=>{let K=L.result;Z(K),$?.(K)},L.readAsDataURL(q)},[$]);return N`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?N`<img src=${G} alt="avatar" />`:N`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function rX(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}function g7({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(""),[X,Y]=C(""),[q,L]=C(""),[K,Q]=C(""),[V,B]=C(32),[F,H]=C(256),[D,E]=C(""),[U,A]=C(!1),[z,O]=C(!1),[y,I]=C(()=>q6(!1)),[k,J]=C(!1),M=u(""),W=u(null),T=u(!0);g(()=>{return T.current=!0,()=>{T.current=!1}},[]);let x=f((r)=>{let b=rX(r);Z(b.userName),Y(b.userAvatar),L(b.assistantName),Q(b.assistantAvatar),B(b.composeUploadLimitMb),H(b.workspaceUploadLimitMb),E(r?.widgetToken||""),M.current=JSON.stringify(b)},[]);g(()=>{x(_||{})},[_,x]),g(()=>{let r=(b)=>{I(Boolean(b?.detail?.enabled))};return window.addEventListener(J4,r),()=>window.removeEventListener(J4,r)},[]);let P=X0(()=>JSON.stringify(rX({userName:G,userAvatar:X,assistantName:q,assistantAvatar:K,composeUploadLimitMb:V,workspaceUploadLimitMb:F})),[G,X,q,K,V,F]);g(()=>{if(P===M.current)return;if(W.current)clearTimeout(W.current);return W.current=setTimeout(async()=>{if(!T.current)return;let r=document.activeElement;if(r&&r.closest?.(".settings-number-stepper"))return;try{let b=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:P}),s=await b.json().catch(()=>({}));if(!T.current)return;if(!b.ok||!s?.ok||!s?.settings)return;M.current=P,j?.(s.settings),J(!0),setTimeout(()=>{if(T.current)J(!1)},4000)}catch(b){console.warn("[settings/general] Failed to persist general settings snapshot.",b)}},800),()=>{if(W.current)clearTimeout(W.current)}},[P,j]);let R=_?.instanceTotp||{configured:!1,issuer:q||"Piclaw",label:G?`${q||"Piclaw"}:${G}`:q||"Piclaw",secret:"",otpauth:"",qrSvg:""},v=f(async()=>{if(!D)return;try{await navigator.clipboard?.writeText(D),A(!0),setTimeout(()=>{if(T.current)A(!1)},3000)}catch(r){console.warn("[settings/general] Failed to copy widget token.",r)}},[D]),c=f(async()=>{if(z)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;O(!0);try{let r=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),b=await r.json().catch(()=>({}));if(!r.ok||!b?.ok||!b?.settings)throw Error(b?.error||"Failed to regenerate widget token.");E(b.settings.widgetToken||""),j?.(b.settings),J(!0),setTimeout(()=>{if(T.current)J(!1)},4000)}catch(r){console.warn("[settings/general] Failed to regenerate widget token.",r)}finally{if(T.current)O(!1)}},[z,j]),h=typeof window<"u"&&window.isSecureContext;return N`
        <div class="settings-section">
            ${k&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${nX} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(r)=>Z(r.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${nX} value=${K} onChange=${Q} />
                <input type="text" value=${q} onInput=${(r)=>L(r.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${h?N`
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
                    <input type="checkbox" checked=${y}
                        onChange=${()=>{let r=w2(!y);I(r)}} />
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
                    onChange=${B}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${b_}
                    label="workspace upload limit"
                    value=${F}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${H}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-row settings-row-vertical">
                <label>Widget bearer token</label>
                <div style="display:flex; gap:8px; align-items:center; width:100%;">
                    <input type="password" readonly value=${D||""} style="flex:1; min-width:0; font-family: var(--mono-font, monospace);" />
                    <button type="button" onClick=${v} disabled=${!D}>${U?"Copied":"Copy"}</button>
                    <button type="button" onClick=${c} disabled=${z}>${z?"Regenerating…":"Regenerate"}</button>
                </div>
                <span class="settings-hint" style="margin:6px 0 0 0;">
                    Read-only token for <code>GET /api/state</code> and <code>GET /api/state/events</code>. Use as <code>Authorization: Bearer …</code>.
                </span>
            </div>
            <div class="settings-totp-panel">
                <div class="settings-totp-header">
                    <div>
                        <strong>TOTP setup QR</strong>
                        <div class="settings-hint" style="margin:6px 0 0 0;">
                            ${R.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${R.configured?N`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:R.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${R.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${R.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${R.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var dX=O_(()=>{x0();x2();A4()});var oX={};Y1(oX,{SessionsSection:()=>$D});function iX(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function $D({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(16),[q,L]=C(4000),[K,Q]=C(3),[V,B]=C(64),[F,H]=C("none"),[D,E]=C(!1),U=u(""),A=u(null),z=u(!0);g(()=>{return z.current=!0,()=>{z.current=!1}},[]);let O=f((I)=>{let k=iX(I);Z(k.sessionAutoRotate),Y(k.sessionMaxSizeMb),L(k.sessionMaxLines),Q(k.sessionMaxCompactions),B(k.toolUseBudget),H(k.sessionIsolation),U.current=JSON.stringify(k)},[]);g(()=>{O(_||{})},[_,O]);let y=X0(()=>JSON.stringify(iX({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:q,sessionMaxCompactions:K,toolUseBudget:V,sessionIsolation:F})),[G,X,q,K,V,F]);return g(()=>{if(y===U.current)return;if(A.current)clearTimeout(A.current);return A.current=setTimeout(async()=>{if(!z.current)return;let I=document.activeElement;if(I&&I.closest?.(".settings-number-stepper"))return;try{let k=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),J=await k.json().catch(()=>({}));if(!z.current)return;if(!k.ok||!J?.ok||!J?.settings)return;U.current=y,j?.(J.settings),E(!0),setTimeout(()=>{if(z.current)E(!1)},4000)}catch(k){console.warn("[settings/sessions] Failed to persist session settings.",k)}},800),()=>{if(A.current)clearTimeout(A.current)}},[y,j]),N`
        <div class="settings-section">
            ${D&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${G} onChange=${(I)=>Z(I.target.checked)} />
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
                    onChange=${B}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${F} onChange=${(I)=>H(I.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var sX=O_(()=>{x0();A4()});var aX={};Y1(aX,{CompactionSection:()=>GD});function jD(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??75,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function u7(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function GD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(180),[X,Y]=C(15),[q,L]=C(360),[K,Q]=C(75),[V,B]=C(0.5),[F,H]=C(!1),[D,E]=C(120),[U,A]=C([]),[z,O]=C([]),[y,I]=C(!1),k=u(""),J=u(null),M=u(!0);g(()=>{return M.current=!0,()=>{M.current=!1}},[]);let W=f((P)=>{let R=jD(P);Z(R.compactionTimeoutSec),Y(R.compactionBackoffBaseMin),L(R.compactionBackoffMaxMin),Q(R.compactionThresholdPercent),B(R.compactionBackoffDecayFactor),H(R.progressWatchdogEnabled),E(R.progressWatchdogTimeoutSec),A(R.compactionBackoffs),O(R.progressWatchdogPhases),k.current=JSON.stringify({compactionTimeoutSec:R.compactionTimeoutSec,compactionBackoffBaseMin:R.compactionBackoffBaseMin,compactionBackoffMaxMin:R.compactionBackoffMaxMin,compactionThresholdPercent:R.compactionThresholdPercent,compactionBackoffDecayFactor:R.compactionBackoffDecayFactor,progressWatchdogEnabled:R.progressWatchdogEnabled,progressWatchdogTimeoutSec:R.progressWatchdogTimeoutSec})},[]);g(()=>{W(_||{})},[_,W]);let T=X0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:q,compactionThresholdPercent:K,compactionBackoffDecayFactor:V,progressWatchdogEnabled:F,progressWatchdogTimeoutSec:D}),[G,X,q,K,V,F,D]);g(()=>{if(T===k.current)return;if(J.current)clearTimeout(J.current);return J.current=setTimeout(async()=>{if(!M.current)return;let P=document.activeElement;if(P&&P.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let R=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:T}),v=await R.json().catch(()=>({}));if(!M.current)return;if(!R.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to save compaction settings.","error");return}k.current=T,j?.(v.settings),W({..._||{},...v.settings||{}}),$?.("Compaction settings saved.","success"),I(!0),setTimeout(()=>{if(M.current)I(!1),$?.(null)},4000)}catch(R){if(console.warn("[settings/compaction] Failed to persist compaction settings.",R),M.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(J.current)clearTimeout(J.current)}},[T,j,$,W,_]);let x=f(async(P)=>{try{$?.(`Clearing compaction suppression for ${P}…`,"info");let R=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:P})}),v=await R.json().catch(()=>({}));if(!R.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to clear compaction suppression.","error");return}j?.(v.settings),W({..._||{},...v.settings||{}}),$?.(`Cleared compaction suppression for ${P}.`,"success")}catch(R){console.warn("[settings/compaction] Failed to clear compaction suppression.",R),$?.("Failed to clear compaction suppression.","error")}},[W,j,$,_]);return N`
        <div class="settings-section">
            ${y&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${b_}
                    label="compaction threshold"
                    value=${K}
                    min=${10}
                    max=${95}
                    fallback=${75}
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
                    onChange=${L}
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
                    onChange=${(P)=>B(P/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${F} onChange=${(P)=>H(Boolean(P.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${b_}
                    label="watchdog timeout"
                    value=${D}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!F}
                    onChange=${E}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${U.length===0?N`
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
                            ${U.map((P)=>N`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.failureCount}</td>
                                    <td>${u7(P.backoffUntil)}</td>
                                    <td title=${P.lastErrorMessage||""}>${P.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>x(P.chatJid)}>
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
            ${z.length===0?N`
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
                            ${z.map((P)=>N`
                                <tr>
                                    <td><code>${P.chatJid}</code></td>
                                    <td>${P.phase}</td>
                                    <td>${u7(P.startedAt)}</td>
                                    <td>${u7(P.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var tX=O_(()=>{x0();A4()});function _Y(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=YD[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(qD.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function X5(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),q=XD[Y];if(q){G[q]=!0;continue}if(G.key)return null;let L=_Y(X);if(!L||L==="escape")return null;G.key=L}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function $Y(_){return String(_||"").split(/[\n,]/).map(($)=>X5($)).filter(($)=>Boolean($))}function p$(_){return _.join(", ")}function v7(){let _=b3(eX);if(!_||typeof _!=="object")return{};let $={};for(let j of h$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>X5(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function b7(_){if(V_(eX,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function jY(_){return ZD.get(_)}function L6(_){let $=v7()[_];if(Array.isArray($))return $;return[...jY(_).defaultBindings]}function GY(_,$){let j=v7(),G=jY(_).defaultBindings,Z=[...new Set($.map((X)=>X5(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;b7(j)}function m7(_){if(!_){b7({});return}let $=v7();delete $[_],b7($)}function I2(){let _={};for(let $ of h$)_[$.id]=L6($.id);return _}function LD(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return _Y($)||$.toLowerCase()}function KD(_){let $=X5(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function VD(_,$){let j=KD($);if(!j)return!1;if(LD(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function D$(_,$){return L6($).some((j)=>VD(_,j))}var eX="piclaw_keyboard_shortcuts_v1",h$,ZD,XD,YD,qD;var C2=O_(()=>{h$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],ZD=new Map(h$.map((_)=>[_.id,_])),XD={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},YD={esc:"escape",return:"enter",spacebar:"space"},qD=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var ZY={};Y1(ZY,{KeyboardSection:()=>BD});function QD(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function BD({filter:_="",setStatus:$}){let[j,G]=C(()=>{let L=I2();return Object.fromEntries(Object.entries(L).map(([K,Q])=>[K,p$(Q)]))});g(()=>{let L=()=>{let K=I2();G(Object.fromEntries(Object.entries(K).map(([Q,V])=>[Q,p$(V)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",L),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",L)},[]);let Z=X0(()=>h$.filter((L)=>{let K=String(j[L.id]||"");return QD(_,L,K)}),[j,_]),X=(L)=>{let K=String(j[L]||"").trim(),V=(K?K.split(/[\n,]/).map((F)=>F.trim()).filter(Boolean):[]).filter((F)=>!X5(F));if(V.length>0){$?.(`Invalid shortcut: ${V[0]}. Escape is reserved and cannot be rebound.`,"error");return}let B=$Y(K);GY(L,B),G((F)=>({...F,[L]:p$(L6(L))})),$?.("Keyboard shortcuts saved.","success")},Y=(L)=>{m7(L),G((K)=>({...K,[L]:p$(L6(L))})),$?.("Keyboard shortcut reset to default.","success")};return N`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{m7();let L=I2();G(Object.fromEntries(Object.entries(L).map(([K,Q])=>[K,p$(Q)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((L)=>N`
                    <div class="settings-shortcut-card" key=${L.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${L.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${L.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${p$(L.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[L.id]||""}
                                placeholder=${p$(L.defaultBindings)}
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
    `}var XY=O_(()=>{x0();C2()});function YY(_,$=c7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function qY(_,$=l7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function Y5(){return{refreshIntervalSec:YY(Q4(P2,c7),c7),folderPreviewDepth:qY(Q4(R2,l7),l7)}}function LY(_={}){let $=Y5(),j={refreshIntervalSec:YY(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:qY(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(V_(P2,String(j.refreshIntervalSec)),V_(R2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(f2,{detail:{settings:j}}));return j}var f2="piclaw:workspace-client-settings-updated",P2="workspaceRefreshIntervalSec",R2="workspaceFolderPreviewDepth",c7=60,l7=3;var h7=()=>{};var VY={};Y1(VY,{WorkspaceSection:()=>FD});function KY(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function FD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(!0),[q,L]=C(4),[K,Q]=C(5000),[V,B]=C(60),[F,H]=C(3),[D,E]=C(!1),[U,A]=C(!1),z=u(""),O=u(null),y=u(null),I=u(null),k=u(!0);g(()=>{return k.current=!0,()=>{if(k.current=!1,O.current)clearTimeout(O.current);if(y.current)clearTimeout(y.current);if(I.current)clearTimeout(I.current)}},[]);let J=f((T)=>{let x=KY(T),P=Y5();Z(x.webTerminalEnabled),Y(x.vncAllowDirect),L(x.treeMaxDepth),Q(x.treeMaxEntries),B(P.refreshIntervalSec),H(P.folderPreviewDepth),z.current=JSON.stringify(x)},[]);g(()=>{J(_||{})},[_,J]);let M=X0(()=>JSON.stringify(KY({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:q,treeMaxEntries:K}})),[G,X,q,K]);g(()=>{if(M===z.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!k.current)return;let T=document.activeElement;if(T&&T.closest?.(".settings-number-stepper"))return;try{let x=await e3(JSON.parse(M));if(!k.current||!x?.ok||!x?.settings)return;if(z.current=M,j?.({workspaceSettings:x.settings}),$?.(null),E(!0),y.current)clearTimeout(y.current);y.current=setTimeout(()=>{if(k.current)E(!1)},4000)}catch(x){$?.(String(x?.message||x),"error")}},800),()=>{if(O.current)clearTimeout(O.current)}},[M,j,$]);let W=f((T)=>{let x=LY(T);if(B(x.refreshIntervalSec),H(x.folderPreviewDepth),A(!0),I.current)clearTimeout(I.current);I.current=setTimeout(()=>{if(k.current)A(!1)},3000)},[]);return N`
        <div class="settings-section">
            ${D&&N`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${U&&N`
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
                <${b_}
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
                <${b_}
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
                <${b_}
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
                <${b_}
                    label="folder preview scan depth"
                    value=${F}
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
    `}var QY=O_(()=>{x0();u_();h7();A4()});var BY={};Y1(BY,{EnvironmentSection:()=>ND});function p7(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function ND({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=C(()=>p7(_||{})),[Y,q]=C({}),[L,K]=C(""),[Q,V]=C(""),[B,F]=C(null);g(()=>{X(p7(_||{})),q({})},[_]);let H=f((O)=>{let y=p7({environmentSettings:O?.settings||O});return X(y),G?.({environmentSettings:y}),q({}),y},[G]),D=f(async()=>{try{let O=await _7();if(O?.ok)H(O.settings);j?.("Environment refreshed.","info")}catch(O){j?.(String(O?.message||O),"error")}},[H,j]),E=f(async(O,y)=>{let I=String(O||"").trim();if(!I)return;F(I);try{let k=await H2({action:"set",name:I,value:String(y??"")});if(k?.ok)H(k.settings);if(j?.(`Saved environment override for ${I}.`,"info"),I===L.trim())K(""),V("")}catch(k){j?.(String(k?.message||k),"error")}finally{F(null)}},[H,L,j]),U=f(async(O)=>{let y=String(O||"").trim();if(!y)return;F(y);try{let I=await H2({action:"clear",name:y});if(I?.ok)H(I.settings);j?.(`Cleared environment override for ${y}.`,"info")}catch(I){j?.(String(I?.message||I),"error")}finally{F(null)}},[H,j]),A=X0(()=>{let O=String($||"").trim().toLowerCase(),y=Array.isArray(Z.variables)?Z.variables:[];if(!O)return y;return y.filter((I)=>{return`${I?.name||""} ${I?.value||""} ${I?.source||""}`.toLowerCase().includes(O)})},[Z.variables,$]),z=f((O,y)=>{q((I)=>({...I||{},[O]:y}))},[]);return N`
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
                        disabled=${!L.trim()||B===L.trim()}
                        onClick=${()=>E(L,Q)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Z.count} variables visible • ${Z.overrideCount} overrides active • ${Z.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${A.map((O)=>{let y=String(O?.name||""),I=Object.prototype.hasOwnProperty.call(Y,y)?Y[y]:O.value,k=I!==O.value,J=B===y;return N`
                        <div class="settings-tool-row" key=${y} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${y}>${y}</span>
                            <input
                                type="text"
                                value=${I}
                                spellcheck="false"
                                onInput=${(M)=>z(y,M.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${O.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${O.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${J||!k} onClick=${()=>E(y,I)}>Save</button>
                                <button type="button" disabled=${J||!O.overridden} onClick=${()=>U(y)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${A.length===0&&N`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var FY=O_(()=>{x0();u_()});var NY={};Y1(NY,{ProvidersSection:()=>HD});function UD(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function HD({providers:_,setStatus:$}){let[j,G]=C(null),[Z,X]=C(null),[Y,q]=C({}),L=f((E,U)=>{q((A)=>({...A,[E]:U}))},[]),K=f(async(E)=>{let U=(Y.apiKey||"").trim();if(!U){$?.("API key cannot be empty.","error");return}G(E),$?.(`Configuring ${E}…`,"info");try{let A=JSON.stringify({provider:E,method:"api_key",api_key:U}),z=await D1("default",`/login __step2 ${A}`,null,[]);if(z?.command?.status==="error"){$?.(z.command.message,"error");return}$?.(z?.command?.message||`${E} configured.`,"success"),X(null),q({})}catch(A){$?.(String(A.message||A),"error")}finally{G(null)}},[Y,$]),Q=f(async(E,U)=>{G(E),$?.(`Configuring ${E}…`,"info");try{let A={provider:E,method:"custom"};for(let y of U.customFields||[])A[y.key]=(Y[y.key]||"").trim();let z=JSON.stringify(A),O=await D1("default",`/login __step2 ${z}`,null,[]);if(O?.command?.status==="error"){$?.(O.command.message,"error");return}$?.(O?.command?.message||`${E} configured.`,"success"),X(null),q({})}catch(A){$?.(String(A.message||A),"error")}finally{G(null)}},[Y,$]),V=f(async(E)=>{G(E),$?.(`Starting OAuth for ${E}…`,"info");try{let U=JSON.stringify({provider:E}),z=(await D1("default",`/login __step1 ${U}`,null,[]))?.command?.message||"";if(z.includes("http")){let O=z.match(/(https?:\/\/[^\s)]+)/);if(O)window.open(O[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(z,"success")}else $?.(z||`OAuth flow started for ${E}. Check the chat.`,"success")}catch(U){$?.(String(U.message||U),"error")}finally{G(null)}},[$]),B=f(async(E)=>{if(j)return;G(E),$?.(`Logging out ${E}…`,"info");try{await D1("default",`/logout ${E}`,null,[]),$?.(`Logged out ${E}. Restart may be needed.`,"success")}catch(U){$?.(String(U.message||U),"error")}finally{G(null)}},[j,$]),F=_||[],H=(E)=>Z===E,D=(E)=>{X((U)=>U===E?null:E),q({})};return N`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${F.map((E)=>N`
                    <div class=${`settings-provider-card${E.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!E.configured&&D(E.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${E.name}</strong>
                                <span class="settings-provider-id">${E.id}</span>
                                ${E.configured&&N`<span class="settings-tag settings-tag-skill">${UD(E.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${E.hasOAuth&&N`<span class="settings-tag">OAuth</span>`}
                                ${E.hasApiKey&&N`<span class="settings-tag">API Key</span>`}
                                ${E.isCustom&&N`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${E.configured?N`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===E.id} onClick=${(U)=>{U.stopPropagation(),B(E.id)}}
                                    >${j===E.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===E.id} onClick=${(U)=>{U.stopPropagation(),D(E.id)}}
                                    >Reconfigure</button>
                                `:N`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===E.id} onClick=${(U)=>{U.stopPropagation(),D(E.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${H(E.id)&&N`
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
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${Y.apiKey||""}
                                                onInput=${(U)=>L("apiKey",U.target.value)}
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
                                        ${(E.customFields||[]).map((U)=>N`
                                            <div class="settings-provider-field-row">
                                                <label>${U.label}${U.required?" *":""}</label>
                                                <input type="text" value=${Y[U.key]||""}
                                                    onInput=${(A)=>L(U.key,A.target.value)}
                                                    placeholder=${U.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===E.id}
                                                onClick=${()=>Q(E.id,E)}>
                                                ${j===E.id?"Configuring…":"Save configuration"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                    </div>
                `)}
            </div>
        </div>
    `}var UY=O_(()=>{x0();u_()});var HY={};Y1(HY,{ModelsSection:()=>zD});function WD(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function OD({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=WD(j)?ED:DD,q=G&&G.length>1?G:["off","minimal","low","medium","high"],L=Math.max(0,q.indexOf(_??"off"));if(!$)return N`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return N`
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
    `}function zD({filter:_=""}){let[$,j]=C(null),[G,Z]=C(!1),[X,Y]=C("off"),[q,L]=C(!1),[K,Q]=C(["off"]),[V,B]=C(!1),F=f(async()=>{let I=await W4();if(j(I),I.thinking_level)Y(I.thinking_level);if(L(Boolean(I.supports_thinking)),Array.isArray(I.available_thinking_levels)&&I.available_thinking_levels.length>0)Q(I.available_thinking_levels);return I},[]);g(()=>{F().catch(()=>j({models:[],model_options:[]}))},[]);let H=f(async(I)=>{if(G)return;Z(!0);try{await D1("default",`/model ${I}`,null,[]),await F()}catch(k){console.error("Failed to switch model:",k)}finally{Z(!1)}},[G,F]),D=f(async(I)=>{if(V)return;B(!0),Y(I);try{let k=await D1("default",`/thinking ${I}`,null,[]);if(k?.command?.thinking_level)Y(k.command.thinking_level);L(k?.command?.supports_thinking!==!1),await F()}catch(k){console.error("Failed to set thinking:",k),await F().catch((J)=>{})}finally{B(!1)}},[V,F]);if(!$)return N`<div class="settings-loading">Loading models\u2026</div>`;let E=$.model_options||[],U=$.current,z=E.find((I)=>I.label===U)?.provider||"",O=_.toLowerCase(),y=O?E.filter((I)=>I.label.toLowerCase().includes(O)||(I.provider||"").toLowerCase().includes(O)):E;return N`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${y.map((I)=>N`
                            <tr class=${I.label===U?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${I.label===U} disabled=${G} onChange=${()=>H(I.label)} /></td>
                                <td>${I.name||I.label}</td><td>${I.provider}</td>
                                <td>${I.context_window?(I.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${I.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${y.length===0&&N`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${OD}
                    thinkingLevel=${X}
                    supportsThinking=${q}
                    provider=${z}
                    availableLevels=${K}
                    onSetLevel=${D}
                    disabled=${V||G} />
            </div>
        </div>
    `}var ED,DD;var EY=O_(()=>{x0();u_();ED={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},DD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var WY={};Y1(WY,{ThemeSection:()=>JD});function DY(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function JD({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=C("default"),[q,L]=C(""),[K,Q]=C(!1),V=u(""),B=u(null),F=u(!0);g(()=>{return F.current=!0,()=>{F.current=!1}},[]);let H=f((z)=>{let O=DY(z);Y(O.uiTheme),L(O.uiTint),V.current=JSON.stringify(O)},[]);g(()=>{if(j){H(j);return}H({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,H]);let D=f((z,O)=>{e4({theme:z,tint:O||null}),Y(z||"default"),L(O||"")},[]),E=X0(()=>JSON.stringify(DY({uiTheme:X,uiTint:q})),[X,q]);g(()=>{if(E===V.current)return;if(B.current)clearTimeout(B.current);return B.current=setTimeout(async()=>{if(!F.current)return;Q(!0);try{let z=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:E}),O=await z.json().catch(()=>({}));if(!F.current)return;if(!z.ok||!O?.ok||!O?.settings){G?.(O?.error||"Failed to save appearance settings.","error");return}V.current=E,Z?.(O.settings),G?.("Appearance synced across clients.","success")}catch(z){if(!F.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",z),G?.("Failed to save appearance settings.","error")}finally{if(F.current)Q(!1)}},250),()=>{if(B.current)clearTimeout(B.current)}},[E,Z,G]);let U=$||[],A=_||[];return N`
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
                        onInput=${(z)=>{let O=z.target.value;if(L(O),X==="default")e4({theme:"default",tint:O})}} />
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
                        ${U.map((z)=>N`<th class="settings-swatch-header">${z.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${A.filter((z)=>z.name!=="default").map((z)=>N`
                        <tr class=${z.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>D(z.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${z.name===X} onChange=${()=>D(z.name,"")} /></td>
                            <td><strong>${z.label}</strong></td>
                            <td>${z.mode}</td>
                            ${U.map((O)=>{let y=z.colors?.[O];return N`<td class="settings-swatch-cell">
                                    ${y?N`<span class="settings-color-swatch" style=${"background:"+y} title=${y}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var OY=O_(()=>{x0();l5()});function zY(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function q5(_){return typeof _==="string"&&_.trim().length>0}function n7(_,...$){let j=zY(_);if(!j)return!0;let G=$.map((Z)=>zY(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function JY(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function r$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:JY($.workspaceCommands),slashCommands:JY($.slashCommands)}}function AY(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function AD(_){let $=Array.isArray(_?.commands)?_.commands:[],j=r$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>AY(j.workspaceCommands,Z.id)).filter((Z)=>n7(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function kD(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=q5(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>n7(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=q5(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=q5(Z?.session_name)?Z.session_name.trim():"",q=String(Z?.chat_jid||"").trim();return{key:`agent:${q}`,kind:"agent",title:`@${X}`,subtitle:Y||q,searchText:`@${X} ${Y} ${q}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:q}})}function MD(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=r$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=q5(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),AY(j.slashCommands,Y)}).filter((X)=>n7(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),q=q5(X?.description)?X.description.trim():"slash command",L=q5(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:q,searchText:`${Y} ${q} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:L||"Slash",actionHint:"Insert",commandName:Y}})}function kY(_){return[...kD({agents:_?.agents,query:_?.query}),...AD({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...MD({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var n$;var r7=O_(()=>{n$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var wY={};Y1(wY,{QuickActionsSection:()=>TD});function MY(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function TY(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function TD({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=C(()=>n$.map((I)=>I.id)),[X,Y]=C([]),[q,L]=C([]),[K,Q]=C(!0),[V,B]=C(!1),F=f(async()=>{Q(!0);try{let[I,k]=await Promise.all([s5(),o5("web:default").catch(()=>({commands:[]}))]),J=r$(I?.settings),M=Array.isArray(k?.commands)?k.commands:[];L(M),Z(Array.isArray(J.workspaceCommands)?J.workspaceCommands:n$.map((W)=>W.id)),Y(Array.isArray(J.slashCommands)?J.slashCommands:M.map((W)=>String(W?.name||"").trim()).filter(Boolean))}catch(I){$?.(String(I?.message||I),"error")}finally{Q(!1)}},[$]);g(()=>{F()},[F]);let H=X0(()=>TY(G),[G]),D=X0(()=>TY(X),[X]),E=X0(()=>n$.filter((I)=>MY(_,I.label,I.description,...I.keywords||[])),[_]),U=X0(()=>q.filter((I)=>MY(_,I?.name,I?.description,I?.source)),[q,_]),A=f((I)=>{Z((k)=>{let J=new Set((Array.isArray(k)?k:[]).map((M)=>String(M||"").trim()).filter(Boolean));if(J.has(I))J.delete(I);else J.add(I);return n$.map((M)=>M.id).filter((M)=>J.has(M))})},[]),z=f((I)=>{Y((k)=>{let J=new Set((Array.isArray(k)?k:[]).map((M)=>String(M||"").trim()).filter(Boolean));if(J.has(I))J.delete(I);else J.add(I);return q.map((M)=>String(M?.name||"").trim()).filter((M)=>M&&J.has(M))})},[q]),O=f(()=>{Z(n$.map((I)=>I.id)),Y(q.map((I)=>String(I?.name||"").trim()).filter(Boolean))},[q]),y=f(async()=>{if(V)return;B(!0),$?.("Saving quick actions…","info");try{let I=await t3({workspaceCommands:G,slashCommands:X}),k=r$(I?.settings);j?.({quickActions:k}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:k}})),$?.("Quick Actions saved.","success")}catch(I){$?.(String(I?.message||I),"error")}finally{B(!1)}},[j,V,$,X,G]);if(K)return N`<div class="settings-loading">Loading…</div>`;return N`
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
                ${E.map((I)=>{let k=H?H.has(I.id.toLowerCase()):!0;return N`
                        <label class="settings-checkbox-row" key=${I.id}>
                            <input type="checkbox" checked=${k} onChange=${()=>A(I.id)} />
                            <div>
                                <div>${I.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I.description}</div>
                            </div>
                        </label>
                    `})}
                ${E.length===0&&N`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${U.map((I)=>{let k=String(I?.name||"").trim(),J=D?D.has(k.toLowerCase()):!0;return N`
                        <label class="settings-checkbox-row" key=${k}>
                            <input type="checkbox" checked=${J} onChange=${()=>z(k)} />
                            <div>
                                <div><code>${k}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${U.length===0&&N`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var yY=O_(()=>{x0();u_();r7()});var xY={};Y1(xY,{KeychainSection:()=>xD});function wD(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function xD({filter:_=""}){let[$,j]=C([]),[G,Z]=C(!0),[X,Y]=C(null),[q,L]=C(!1),[K,Q]=C(""),[V,B]=C(""),[F,H]=C(""),[D,E]=C(""),[U,A]=C(""),[z,O]=C("secret"),[y,I]=C(!1),[k,J]=C({}),[M,W]=C(null),[T,x]=C(null),[P,R]=C(null),v=u(null),c=u(null),h=u(null),r=f(async()=>{Z(!0),Y(null);try{let j0=await(await fetch("/agent/keychain")).json();if(j0?.ok)j(j0.entries||[]);else Y(j0?.error||"Failed to load keychain.")}catch(i){Y("Failed to load keychain.")}finally{Z(!1)}},[]);g(()=>{r()},[r]);let b=f(async()=>{let i=K.trim(),j0=V;if(!i||!j0)return;I(!0);try{let M0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i,secret:j0,type:z,username:F.trim()||void 0,userNote:D,agentNote:U})})).json();if(M0?.ok)Q(""),B(""),H(""),E(""),A(""),O("secret"),L(!1),await r();else Y(M0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{I(!1)}},[K,V,F,D,U,z,r]),s=f(async(i)=>{try{let C0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i})})).json();if(C0?.ok)x(null),R((M0)=>M0?.name===i?null:M0),await r();else Y(C0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[r]),a=f(async(i)=>{let j0=i?.name;if(!j0)return;let C0=k[j0]||{},M0=Object.prototype.hasOwnProperty.call(C0,"userNote")?C0.userNote:i.userNote||"",m0=Object.prototype.hasOwnProperty.call(C0,"agentNote")?C0.agentNote:i.agentNote||"";W(j0);try{let Z_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j0,userNote:M0,agentNote:m0})})).json();if(Z_?.ok)J((h0)=>{let l0={...h0||{}};return delete l0[j0],l0}),await r();else Y(Z_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{W(null)}},[k,r]),q0=f((i,j0,C0)=>{J((M0)=>({...M0||{},[i]:{...(M0||{})[i]||{},[j0]:C0}}))},[]),Z0=f(async(i,j0,C0)=>{try{let m0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i,master_password:j0||void 0,totp_code:C0||void 0})})).json();if(m0?.ok)R({name:i,phase:"revealed",secret:m0.secret,username:m0.username,masterPassword:j0});else if(m0?.needs_master_password)R((c0)=>({name:i,phase:"password",masterPassword:"",error:c0?.name===i&&c0?.masterPassword?m0.error:null})),requestAnimationFrame(()=>c.current?.focus());else if(m0?.needs_totp)R((c0)=>({name:i,phase:"totp",masterPassword:j0,totpCode:"",error:c0?.name===i&&c0?.phase==="totp"&&c0?.totpCode?m0.error:null})),requestAnimationFrame(()=>h.current?.focus());else R({name:i,phase:"error",error:m0?.error||"Failed to reveal."})}catch{R({name:i,phase:"error",error:"Failed to reveal."})}},[]),H0=f((i)=>{if(P?.name===i&&P?.phase==="revealed"){R(null);return}Z0(i,null,null)},[P,Z0]),N0=f((i)=>{let j0=P?.masterPassword||"";if(!j0)return;Z0(i,j0,null)},[P,Z0]),L0=f((i)=>{let j0=P?.totpCode||"";if(j0.length<6)return;Z0(i,P?.masterPassword,j0)},[P,Z0]),D0=f(async(i)=>{try{await navigator.clipboard.writeText(i)}catch{let j0=document.createElement("textarea");j0.value=i,j0.style.position="fixed",j0.style.opacity="0",document.body.appendChild(j0),j0.select(),document.execCommand("copy"),document.body.removeChild(j0)}},[]);g(()=>{if(q)requestAnimationFrame(()=>v.current?.focus())},[q]);let Q0=_.toLowerCase(),k0=X0(()=>{if(!Q0)return $;return $.filter((i)=>i.name.toLowerCase().includes(Q0)||(i.type||"").toLowerCase().includes(Q0)||(i.envVar||"").toLowerCase().includes(Q0)||(i.userNote||"").toLowerCase().includes(Q0)||(i.agentNote||"").toLowerCase().includes(Q0))},[$,Q0]);if(G)return N`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return N`
        <div class="settings-section">
            ${X&&N`
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
                        <select value=${z} onChange=${(i)=>O(i.target.value)}
                            class="settings-keychain-select">
                            ${yD.map((i)=>N`<option value=${i}>${i}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${V} onInput=${(i)=>B(i.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${F} onInput=${(i)=>H(i.target.value)}
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
                            value=${U} onInput=${(i)=>A(i.target.value)}
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
                        ${k0.length===0&&N`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${Q0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${k0.map((i)=>{let j0=P?.name===i.name?P:null,C0=j0?.phase==="revealed",M0=j0?.phase==="password",m0=j0?.phase==="totp",c0=j0?.phase==="error",Z_=k[i.name]||{},h0=Object.prototype.hasOwnProperty.call(Z_,"userNote")?Z_.userNote:i.userNote||"",l0=Object.prototype.hasOwnProperty.call(Z_,"agentNote")?Z_.agentNote:i.agentNote||"",T0=h0!==(i.userNote||"")||l0!==(i.agentNote||""),n0=M===i.name;return N`
                            <tr class="settings-keychain-row" key=${i.name}>
                                <td class="settings-keychain-name">${i.name}</td>
                                <td><span class="settings-keychain-type-badge">${i.type}</span></td>
                                <td class="settings-keychain-env">${i.envVar?N`<code>$${i.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${wD(i.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${C0?" active":""}`}
                                        onClick=${()=>H0(i.name)}
                                        title=${C0?"Hide secret":"Reveal secret"}>
                                        ${C0?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${T===i.name?N`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>s(i.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>x(null)}>No</button>
                                            </span>
                                        `:N`<button class="settings-keychain-delete-btn" onClick=${()=>x(i.name)} title="Delete">🗑</button>`}
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
                                                value=${l0}
                                                onInput=${(b0)=>q0(i.name,"agentNote",b0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!T0||n0} onClick=${()=>a(i)}>
                                            ${n0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${M0&&N`
                                <tr class="settings-keychain-prompt-row" key=${i.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${c} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${j0?.masterPassword||""}
                                                onInput=${(b0)=>R((o0)=>({...o0,masterPassword:b0.target.value}))}
                                                onKeyDown=${(b0)=>{if(b0.key==="Enter")N0(i.name);if(b0.key==="Escape")R(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>N0(i.name)}
                                                disabled=${!j0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>R(null)}>Cancel</button>
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
                                                onInput=${(b0)=>R((o0)=>({...o0,totpCode:b0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(b0)=>{if(b0.key==="Enter")L0(i.name);if(b0.key==="Escape")R(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>L0(i.name)}
                                                disabled=${(j0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>R(null)}>Cancel</button>
                                            ${j0?.error&&N`<span class="settings-keychain-prompt-error">${j0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${C0&&N`
                                <tr class="settings-keychain-reveal-row" key=${i.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${j0.username&&N`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${j0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>D0(j0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${j0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>D0(j0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${c0&&N`
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
    `}var yD;var IY=O_(()=>{x0();yD=["secret","token","password","basic"]});var CY={};Y1(CY,{ToolsSection:()=>RD});function RD({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=C(()=>{let B={};for(let F of Z)B[F.name]=!0;return B}),q=f((B)=>{Y((F)=>({...F,[B]:!F[B]}))},[]),L=j?.searchMatchMode||"or",K=f(async()=>{let B=L==="or"?"and":"or";try{let H=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:B})})).json().catch(()=>({}));if(H?.ok&&H?.settings)G?.(H.settings)}catch(F){console.warn("[settings/tools] Failed to save search match mode.",F)}},[L,G]),Q=$.toLowerCase(),V=X0(()=>{if(!Q)return Z;return Z.map((B)=>{let F=B.tools.filter((H)=>H.name.toLowerCase().includes(Q)||B.name.toLowerCase().includes(Q)||(H.summary||"").toLowerCase().includes(Q));return F.length>0?{...B,tools:F}:null}).filter(Boolean)},[Z,Q]);if(Z.length===0)return N`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return N`
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
            ${V.map((B)=>{let F=X[B.name]!==!1;return N`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${F} onChange=${()=>q(B.name)} />
                            <span class="settings-toolset-icon">${ID[B.name]||PD}</span>
                            <strong>${B.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${B.description}</span>
                    </div>
                    ${F&&N`<div class="settings-tool-list">${B.tools.map((H)=>N`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${H.name}</span>
                            <span class="settings-tool-kind" title=${H.kind}>${fD[H.kind]||"?"}</span>
                            ${H.summary&&N`<span class="settings-tool-summary">${H.summary}</span>`}
                            <span class="settings-tool-source">${CD[H.name]||B.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${V.length===0&&N`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var ID,CD,fD,PD;var fY=O_(()=>{x0();ID={core:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},CD={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",list_internal_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},fD={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},PD=N`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var PY={};Y1(PY,{AddonsSection:()=>SD});function SD({setStatus:_,filter:$=""}){let[j,G]=C(null),[Z,X]=C(!0),[Y,q]=C(null),[L,K]=C(!1),[Q,V]=C({runtime:"",windowsNative:!1}),[B,F]=C([]),[H,D]=C([]);function E(){let M=new URLSearchParams;try{let T=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),x=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((R)=>R.trim()).filter(Boolean),P=localStorage.getItem("piclaw_addons_repo_url");if(T)M.append("catalog_url",T);for(let R of x)M.append("catalog_url",R);if(P)M.set("repo_url",P)}catch(T){}let W=M.toString();return W?`?${W}`:""}let U=f(async()=>{try{let[M,W]=await Promise.all([fetch(`/agent/addons${E()}`),fetch("/agent/settings-data")]),T=await M.json();if(T.error)throw Error(T.error);G(T.addons||[]),F(T.sources||[]),D(T.failed_sources||[]);let x=await W.json().catch(()=>({})),P=typeof x?.runtimePlatform==="string"?x.runtimePlatform:"";V({runtime:P,windowsNative:P==="win32"})}catch(M){G(null),_?.(String(M.message||M),"error")}finally{X(!1)}},[_]);g(()=>{U()},[]);let A=f(async(M)=>{if(Y)return;q({slug:M,action:"install"}),_?.(`Installing ${M}…`,"info");try{let T=await(await fetch(`/agent/addons/install${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:M})})).json();if(T.error){_?.(T.error,"error");return}K(!0);let x=[T.message,T.warning].filter(Boolean).join(" ");_?.(x||"Add-on installed.","success"),await U()}catch(W){_?.(String(W.message||W),"error")}finally{q(null)}},[Y,U,_]),z=f(async(M)=>{if(Y)return;q({slug:M,action:"remove"}),_?.(`Removing ${M}…`,"info");try{let T=await(await fetch(`/agent/addons/uninstall${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:M})})).json();if(T.error){_?.(T.error,"error");return}K(!0);let x=[T.message,T.warning].filter(Boolean).join(" ");_?.(x||"Add-on removed.","success"),await U()}catch(W){_?.(String(W.message||W),"error")}finally{q(null)}},[Y,U,_]),O=f(async()=>{if(Y)return;q({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let W=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(W.error){_?.(W.error,"error"),q(null);return}_?.(W.message||"Restarting piclaw…","success"),K(!1),(async(x=30,P=2000)=>{for(let R=0;R<x;R++){await new Promise((v)=>setTimeout(v,P));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await U(),q(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(v){}}q(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(M){_?.(String(M.message||M),"error"),q(null)}},[Y,_,U]);if(Z)return N`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return N`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let y=$.toLowerCase(),I=y?j.filter((M)=>M.slug.toLowerCase().includes(y)||(M.description||"").toLowerCase().includes(y)||(M.tags||[]).some((W)=>W.toLowerCase().includes(y))):j,k=Y?.slug||null,J=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return N`
        <div class=${`settings-section settings-addon-panel${Y?" busy":""}`} aria-busy=${Y?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${B.length<=1?N`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:N`${B.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${H.length>0&&N`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${H.length} catalog source${H.length>1?"s":""}:
                            ${H.map((M)=>N` <code style="font-size:0.82em;word-break:break-all">${M}</code>`)}
                        </div>
                    `}
                    ${B.length>1&&N`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${B.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${B.map((M)=>N`<li style="word-break:break-all"><code>${M}</code></li>`)}
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
                ${I.map((M)=>{let W=(M.skills||[]).length>0,T=M.type==="extension",x=W&&T?"extension + skill":W?"skill":"extension",P=W&&!T?"settings-tag-skill":"",R=typeof M.homepage==="string"&&M.homepage.trim()?M.homepage.trim():"";return N`
                    <div class=${`settings-addon-card${M.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${R?N`<a class="settings-addon-name-link" href=${R} target="_blank" rel="noopener noreferrer">${M.slug}</a>`:N`<strong>${M.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${P}`}>${x}</span>
                            <span class="settings-addon-version">${M.installed?M.installedVersion||"?":M.version||""}</span>
                            ${M.installKind&&N`<span class="settings-tag">${M.installKind}</span>`}
                            ${M.hasUpdate&&N`<span class="settings-tag settings-tag-skill">\u2191 ${M.version}</span>`}
                            <div class="settings-addon-actions">
                                ${M.installed?N`
                                    ${M.hasUpdate&&N`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Y)} onClick=${()=>A(M.slug)}>${k===M.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Y)} onClick=${()=>z(M.slug)}>${k===M.slug?"…":"Remove"}</button>
                                `:N`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Y)} onClick=${()=>A(M.slug)}>${k===M.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${M.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(M.tags||[]).map((v)=>N`<span class="settings-tag">${v}</span>`)}${(M.skills||[]).map((v)=>N`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${v}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${I.length===0&&N`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${L&&N`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Y)} onClick=${O}>Restart Now</button>
                </div>
            `}
        </div>
    `}var RY=O_(()=>{x0()});var lD={};function d7(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function S2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function gD(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function uD(_,$){try{localStorage.setItem(_,$)}catch(j){}}function bD(_,$,j,G){try{return E$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return E$($,{fallback:$,min:j,max:G})}}function vD(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function mD(){let[_,$]=C(()=>d7("piclaw_vim_mode",!1)),[j,G]=C(()=>d7("piclaw_show_whitespace",!0)),[Z,X]=C(()=>d7("piclaw_md_live_preview",!0)),[Y,q]=C(()=>bD("piclaw_editor_font_size",13,10,24)),[L,K]=C(()=>gD("piclaw_editor_font_family","")),Q=f((V,B,F)=>{let H=!B;F(H),S2(V,H)},[]);return N`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let V=!_;$(V),S2("piclaw_vim_mode",V)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let V=!j;G(V),S2("piclaw_show_whitespace",V)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let V=!Z;X(V),S2("piclaw_md_live_preview",V)}} />
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
                    onChange=${(V)=>{q(V),vD("piclaw_editor_font_size",V)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${L}
                    onInput=${(V)=>{let B=V.target.value;K(B),uD("piclaw_editor_font_family",B)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var cD;var SY=O_(()=>{x0();Z5();A4();cD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;l$({id:"editor",label:"Editor",icon:cD,component:mD,order:150})});var dD={};function gY(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function uY(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function hD(_,$,j,G){try{return E$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return E$($,{fallback:$,min:j,max:G})}}function pD(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function nD(){let[_,$]=C(()=>gY("piclaw_mindmap_auto_expand",!0)),[j,G]=C(()=>hD("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=C(()=>gY("piclaw_mindmap_animate",!0));return N`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),uY("piclaw_mindmap_auto_expand",Y)}} />
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
                    onChange=${(Y)=>{G(Y),pD("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),uY("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var rD;var bY=O_(()=>{x0();Z5();A4();rD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;l$({id:"mindmap",label:"Mind Map",icon:rD,component:nD,order:170})});var sD={};function i7(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function o7(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function s7(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function a7(_,$){try{localStorage.setItem(_,$)}catch(j){}}function iD(){let[_,$]=C(()=>i7("piclaw_dev_mode",!1)),[j,G]=C(()=>s7("piclaw_addons_catalog_url","")),[Z,X]=C(()=>s7("piclaw_addons_catalog_urls","")),[Y,q]=C(()=>s7("piclaw_addons_repo_url","")),[L,K]=C(()=>i7("piclaw_debug_sse",!1)),[Q,V]=C(()=>i7("piclaw_debug_tool_calls",!1)),B=f(()=>{let F=!_;$(F),o7("piclaw_dev_mode",F)},[_]);return N`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${_} onChange=${B} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${_&&N`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${j}
                        onInput=${(F)=>{let H=F.target.value;G(H),a7("piclaw_addons_catalog_url",H)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(F)=>{let H=F.target.value;X(H),a7("piclaw_addons_catalog_urls",H)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(F)=>{let H=F.target.value;q(H),a7("piclaw_addons_repo_url",H)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${L}
                        onChange=${()=>{let F=!L;K(F),o7("piclaw_debug_sse",F)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${Q}
                        onChange=${()=>{let F=!Q;V(F),o7("piclaw_debug_tool_calls",F)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var oD;var vY=O_(()=>{x0();Z5();oD=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;l$({id:"developer",label:"Developer",icon:oD,component:iD,order:900})});var pY={};Y1(pY,{openSettingsDialog:()=>UW,SettingsDialogContent:()=>hY,SettingsDialog:()=>NW});function V6(_){K6.push({ts:performance.now(),label:_})}function aD(){if(!K6.length)return;let _=K6[0].ts,$=K6.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}K6.length=0}function _W(_){let $=b2.get(_);if($)return Promise.resolve($);let j=g2.get(_);if(j)return j;let G=tD[_]().then((Z)=>{return b2.set(_,Z),g2.delete(_),Z}).catch((Z)=>{throw g2.delete(_),Z});return g2.set(_,G),G}function u2(_="Loading…"){return N`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function hY({onClose:_}){V6("SettingsDialogContent-render-start");let[$,j]=C(()=>f7()||"general"),[G,Z]=C(mY),[X,Y]=C(null),[q,L]=C(""),[,K]=C(0),[Q,V]=C(()=>Object.fromEntries(b2.entries())),[B,F]=C(null),[H,D]=C({compact:!1,narrow:!1}),E=u(null),U=u(null);g(()=>{V6("SettingsDialogContent-mounted"),aD()},[]),g(()=>{let W=(T)=>{if(T.key==="Escape")_()};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[_]),g(()=>{let W=(T)=>{let x=typeof T?.detail?.section==="string"?T.detail.section.trim():"";if(x)j(x),L("")};return window.addEventListener("piclaw:open-settings",W),()=>window.removeEventListener("piclaw:open-settings",W)},[]),g(()=>{let W=()=>K((T)=>T+1);return window.addEventListener("piclaw:settings-panes-changed",W),()=>window.removeEventListener("piclaw:settings-panes-changed",W)},[]),g(()=>{fetch("/agent/settings-data").then((W)=>W.json()).then((W)=>{mY=W,Z(W)}).catch(()=>Z({}))},[]),g(()=>{let W=U.current;if(!W)return;let T=()=>{let x=W.clientWidth||0;D((P)=>{let R={compact:x>0&&x<=860,narrow:x>0&&x<=720};return P.compact===R.compact&&P.narrow===R.narrow?P:R})};if(T(),typeof ResizeObserver==="function"){let x=new ResizeObserver(()=>T());return x.observe(W),()=>x.disconnect()}return window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]);let A=uX(),z=[...lY,...A.map((W)=>({id:W.id,label:W.label,icon:W.icon,searchable:W.searchable||!1,placeholder:W.searchPlaceholder,order:W.order??500,isExtension:!0,component:W.component}))].sort((W,T)=>(W.order??500)-(T.order??500)),O=z.find((W)=>W.id===$)||lY.find((W)=>W.id===$);g(()=>{if(O?.searchable)requestAnimationFrame(()=>E.current?.focus())},[$]),g(()=>{if(O?.isExtension){F(null);return}let W=!1;if(Q[$]){F(null);return}return F($),_W($).then((T)=>{if(W)return;V((x)=>x?.[$]?x:{...x||{},[$]:T})}).catch((T)=>{if(W)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,T)}).finally(()=>{if(!W)F((T)=>T===$?null:T)}),()=>{W=!0}},[$,O?.isExtension,Q]);let y=f((W,T="info")=>{Y(W?{text:W,type:T}:null)},[]),I=f((W)=>{j(W),L("");let T=eD[W];if(T&&!cY.has(W))cY.add(W),T().then(()=>K((x)=>x+1)).catch((x)=>{})},[]),k=f((W)=>{Z((T)=>({...T||{},...W||{}}))},[]),J=()=>{if(O?.isExtension){if(!O.component)return u2("Loading pane…");let T=O.component;return N`<${T} filter=${q} />`}let W=Q[$];if(!W||B===$)return u2(`Loading ${O?.label||"settings"}…`);switch($){case"general":return N`<${W} settingsData=${G} setStatus=${y} mergeSettingsData=${k} />`;case"sessions":return N`<${W} settingsData=${G} setStatus=${y} mergeSettingsData=${k} />`;case"compaction":return N`<${W} settingsData=${G} setStatus=${y} mergeSettingsData=${k} />`;case"keyboard":return N`<${W} filter=${q} setStatus=${y} />`;case"workspace":return N`<${W} settingsData=${G} setStatus=${y} mergeSettingsData=${k} />`;case"environment":return N`<${W} settingsData=${G} filter=${q} setStatus=${y} mergeSettingsData=${k} />`;case"providers":return N`<${W} providers=${G?.providers} setStatus=${y} />`;case"models":return N`<${W} filter=${q} />`;case"theme":return N`<${W} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${y} mergeSettingsData=${k} />`;case"quick-actions":return N`<${W} filter=${q} setStatus=${y} mergeSettingsData=${k} />`;case"keychain":return N`<${W} filter=${q} />`;case"tools":return N`<${W} toolsets=${G?.toolsets} filter=${q} settingsData=${G} mergeSettingsData=${k} />`;case"addons":return N`<${W} setStatus=${y} filter=${q} />`;default:return u2("Loading settings…")}},M=!O;return V6("SettingsDialogContent-render-end"),N`
        <div class="settings-dialog-backdrop" onClick=${(W)=>{if(W.target===W.currentTarget)_()}}>
            <div ref=${U} data-testid="settings-dialog" class=${`settings-dialog${H.compact?" settings-dialog-compact":""}${H.narrow?" settings-dialog-narrow":""}`}>
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
                        ${z.map((W,T)=>{let x=T>0&&!z[T-1].isExtension,P=W.isExtension&&x;return N`
                                ${P&&N`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${W.id===$?"active":""}`} onClick=${()=>I(W.id)}>
                                    <span class="settings-nav-icon">${W.icon}</span>
                                    <span class="settings-nav-label">${W.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${M?u2("Loading settings…"):J()}
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
    `}function NW(){let[_,$]=C(!1);if(g(()=>{let j=(Z)=>{let X=G5(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=M2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return N`<${c$} className="settings-portal"><${hY} onClose=${()=>$(!1)} /><//>`}function UW(_={}){p1(_)}var K6,mY=null,b2,g2,tD,eD,cY,$W,jW,GW,ZW,XW,YW,qW,LW,KW,VW,QW,BW,FW,lY;var nY=O_(()=>{x0();T2();Z5();dX();K6=[];V6("module-eval-start");V6("imports-done");b2=new Map,g2=new Map;b2.set("general",g7);tD={general:()=>Promise.resolve(g7),sessions:()=>Promise.resolve().then(() => (sX(),oX)).then((_)=>_.SessionsSection),compaction:()=>Promise.resolve().then(() => (tX(),aX)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (XY(),ZY)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (QY(),VY)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (FY(),BY)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (UY(),NY)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (EY(),HY)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (OY(),WY)).then((_)=>_.ThemeSection),"quick-actions":()=>Promise.resolve().then(() => (yY(),wY)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (IY(),xY)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (fY(),CY)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (RY(),PY)).then((_)=>_.AddonsSection)},eD={"editor-settings":()=>Promise.resolve().then(() => (SY(),lD)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (bY(),dD)).then(()=>{}),developer:()=>Promise.resolve().then(() => (vY(),sD)).then(()=>{})},cY=new Set;$W=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,jW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,GW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,ZW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,XW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,YW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,qW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,LW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,KW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,VW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,QW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,BW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,FW=N`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,lY=[{id:"general",label:"General",icon:$W,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:jW,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:GW,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:YW,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:ZW,searchable:!1,order:15},{id:"environment",label:"Environment",icon:XW,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:qW,searchable:!1,order:20},{id:"models",label:"Models",icon:LW,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:KW,searchable:!1,order:40},{id:"quick-actions",label:"Quick Actions",icon:QW,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:BW,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:VW,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:FW,searchable:!0,placeholder:"Filter add-ons…",order:90}]});x0();class LG{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var Y_=new LG;var i6=null,G3=null;function GN(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function KG(){if(G3)return Promise.resolve(G3);if(!i6)i6=import(GN()).then((_)=>{return G3=_,_}).catch((_)=>{throw i6=null,_});return i6}class VG{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await KG();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var Z3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new VG(_,$)}};function X3(){KG().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function QG(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function o6(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var BG="piclaw:editor-popout:",ZN=300000;function FG(_){try{return _?.localStorage??null}catch{return null}}function XN(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function NG(_){return typeof _==="string"?_.trim():""}function UG(_){return(typeof _==="string"?_.trim():"")||null}function HG(_){return typeof _==="string"?_:void 0}function EG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function DG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function l4(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function YN(_,$=globalThis,j=Date.now()){let G=FG($),Z=NG(_?.path);if(!G||!Z)return null;let X={path:Z,content:HG(_?.content),mtime:EG(_?.mtime),paneOverrideId:UG(_?.paneOverrideId),viewState:DG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let q=XN(j);try{return G.setItem(`${BG}${q}`,JSON.stringify(X)),q}catch{return null}}function Y3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=FG($);if(!G||!Z)return null;let X=`${BG}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;o6(Z,X);try{let q=JSON.parse(Y),L=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(L+ZN<j)return null;let K=NG(q?.path);if(!K)return null;return{path:K,content:HG(q?.content),mtime:EG(q?.mtime),paneOverrideId:UG(q?.paneOverrideId),viewState:DG(q?.viewState),capturedAt:L}}catch{return null}}function s6(_,$=globalThis,j=Date.now()){let G=YN(_,$,j);return G?{editor_popout:G}:null}function J1(_){try{return _(),!0}catch($){return!1}}function WG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:q,resizeObserver:L}=_;J1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),J1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),J1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),J1(()=>{q?.disconnect?.()}),J1(()=>{L?.disconnect?.()})}function OG(_){_.syncHostLayout(),J1(()=>{_.terminal?.renderer?.remeasureFont?.()}),J1(()=>{_.fitAddon?.fit?.()}),J1(()=>{_.terminal?.refresh?.()}),_.syncHostLayout(),_.sendResize()}function zG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)J1(()=>{j($)});return J1(()=>{G?.close?.()}),J1(()=>{Z?.dispose?.()}),J1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function b1(_){try{return _(),!0}catch($){return!1}}function JG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:q}=_;if(b1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let L=j?.querySelector?.(".terminal-live-host");if(L&&typeof L==="object"&&"style"in L)L.style.backgroundColor=Z.background,L.style.color=Z.foreground;let K=j?.querySelector?.("canvas");if(K&&typeof K==="object"&&"style"in K)K.style.backgroundColor=Z.background,K.style.color=Z.foreground}),b1(()=>{if(G?.options)G.options.theme=Z}),X)b1(()=>{G?.reset?.()});b1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),b1(()=>{G?.loadFonts?.()}),b1(()=>{G?.renderer?.remeasureFont?.()}),b1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),b1(()=>{q?.()}),b1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),b1(()=>{G?.refresh?.()})}var qN="/static/js/vendor/ghostty-web.js",LN="/static/js/vendor/ghostty-vt.wasm",p4="piclaw://terminal",KN='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',VN='400 13px "FiraCode Nerd Font Mono"',QN='700 13px "FiraCode Nerd Font Mono"',yG="x-piclaw-terminal-client",AG="piclaw_terminal_client",BN={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},FN={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},a6=null,q3=null;function NN(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function UN(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(LN,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!NN(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function HN(){let $=await import(new URL(qN,window.location.origin).href);if(!a6)a6=UN(()=>Promise.resolve($.init?.())).catch((j)=>{throw a6=null,j});return await a6,$}async function EN(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!q3)q3=Promise.allSettled([document.fonts.load(VN),document.fonts.load(QN),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await q3}function kG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function L3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(AG)||"").trim():"";if(j)return j;let G=kG(_);return $?.setItem?.(AG,G),G}catch($){return kG(_)}}async function DN(_=L3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[yG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function WN(_=L3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[yG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function ON(_,$=null,j=L3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function zN(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function Y4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function h4(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function MG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function S5(_,$){let j=MG(_),G=MG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function xG(_){let $=h4(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return S5($,j)>=S5($,G)?"#ffffff":"#000000"}function t6(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function TG(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function t_(_,$,j=4.5){let G=h4(_),Z=h4($);if(!G||!Z)return $;if(S5(G,Z)>=j)return t6(Z);let X=h4(xG(_));if(!X)return t6(Z);let Y=X,q=1,L=0,K=1;for(let B=0;B<14;B+=1){let F=(L+K)/2,H=TG(Z,X,F);if(S5(G,H)>=j)Y=H,q=F,K=F;else L=F}let Q=t6(Y),V=h4(Q);while(V&&S5(G,V)<j&&q<1)q=Math.min(1,q+0.01),Q=t6(TG(Z,X,q)),V=h4(Q);return Q}function JN(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function wG(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=zN(_,$),G=j?FN:BN,Z=Y4("--bg-primary",j?"#000000":"#ffffff",$),X=Y4("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=t_(Z,X||xG(Z),7),q=Y4("--accent-color","#1d9bf0",$),L=Y4("--danger-color",j?"#ff7b72":"#cf222e",$),K=Y4("--success-color",j?"#7ee787":"#1a7f37",$),Q=Y4("--bg-hover",j?"#1d1f23":"#e8ebed",$),V=Y4("--accent-soft-strong",JN(q,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:t_(Z,q,3),cursorAccent:Z,selectionBackground:V,selectionForeground:Y,black:t_(Z,Q,3),red:t_(Z,L,4.5),green:t_(Z,K,4.5),yellow:t_(Z,G.yellow,4.5),blue:t_(Z,q,4.5),magenta:t_(Z,G.magenta,4.5),cyan:t_(Z,G.cyan,4.5),white:Y,brightBlack:t_(Z,G.brightBlack,3),brightRed:t_(Z,G.brightRed,4.5),brightGreen:t_(Z,G.brightGreen,4.5),brightYellow:t_(Z,G.brightYellow,4.5),brightBlue:t_(Z,G.brightBlue,4.5),brightMagenta:t_(Z,G.brightMagenta,4.5),brightCyan:t_(Z,G.brightCyan,4.5),brightWhite:Y}}class K3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=l4("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.minHeight="0",$.style.flex="1 1 auto",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none",j.style.maxHeight="none"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await HN();if(await EN(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:KN,fontSize:13,theme:wG(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);await j.open($),$.__terminal=j,this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=wG(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;JG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=WN().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await DN();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(ON($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){WG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){OG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=zG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var V3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new K3(_,$)}},Q3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===p4?1e4:!1},mount(_,$){return new K3(_,$)}};function I1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function e6(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function IG(_,$={}){if(I1($))return null;if(e6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:AN(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function B3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function F3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let q=_.document.createElement("p");if(q.setAttribute("style","margin: 0; line-height: 1.5;"),q.textContent=G,X.appendChild(Y),X.appendChild(q),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function N3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function U3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function A1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function H3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function CG(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,q]of Object.entries(X)){let L=String(Y||"").trim();if(!L)continue;if(q===null||q===void 0||q==="")G.searchParams.delete(L);else G.searchParams.set(L,String(q))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function AN(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function kN(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function fG(_,$={}){if(I1($))return null;if(e6($))return{target:"_blank",features:void 0,mode:"tab"};return{target:kN(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function q4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function MN(_){try{return JSON.parse(_)}catch{return null}}function TN(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function wN(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function PG(_){try{return _?.close?.(),!0}catch($){return!1}}class E3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;PG(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=wN($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||MN;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,PG(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=TN($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var g5=()=>{throw Error("Operation requires compiling with --exportRuntime")},yN=typeof BigUint64Array<"u",u5=Symbol();var xN=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function RG(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return xN.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function SG(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return RG(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,q,L){let K=$.memory||G.memory;throw Error(`abort: ${j(K,X)} at ${j(K,Y)}:${q}:${L}`)},G.trace=G.trace||function(X,Y,...q){let L=$.memory||G.memory;console.log(`trace: ${j(L,X)}${Y?" ":""}${q.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function gG(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||g5,Y=j.__pin||g5,q=j.__unpin||g5,L=j.__collect||g5,K=j.__rtti_base,Q=K?(W)=>W[K>>>2]:g5;_.__new=X,_.__pin=Y,_.__unpin=q,_.__collect=L;function V(W){let T=new Uint32Array(G.buffer);if((W>>>=0)>=Q(T))throw Error(`invalid id: ${W}`);return T[(K+4>>>2)+W]}function B(W){let T=V(W);if(!(T&7))throw Error(`not an array: ${W}, flags=${T}`);return T}function F(W){return 31-Math.clz32(W>>>6&31)}function H(W){if(W==null)return 0;let T=W.length,x=X(T<<1,2),P=new Uint16Array(G.buffer);for(let R=0,v=x>>>1;R<T;++R)P[v+R]=W.charCodeAt(R);return x}_.__newString=H;function D(W){if(W==null)return 0;let T=new Uint8Array(W),x=X(T.length,1);return new Uint8Array(G.buffer).set(T,x),x}_.__newArrayBuffer=D;function E(W){if(!W)return null;let T=G.buffer;if(new Uint32Array(T)[W+-8>>>2]!==2)throw Error(`not a string: ${W}`);return RG(T,W)}_.__getString=E;function U(W,T,x){let P=G.buffer;if(x)switch(W){case 2:return new Float32Array(P);case 3:return new Float64Array(P)}else switch(W){case 0:return new(T?Int8Array:Uint8Array)(P);case 1:return new(T?Int16Array:Uint16Array)(P);case 2:return new(T?Int32Array:Uint32Array)(P);case 3:return new(T?BigInt64Array:BigUint64Array)(P)}throw Error(`unsupported align: ${W}`)}function A(W,T=0){let x=T,P=B(W),R=F(P),v=typeof x!=="number",c=v?x.length:x,h=X(c<<R,P&4?W:1),r;if(P&4)r=h;else{Y(h);let b=X(P&2?16:12,W);q(h);let s=new Uint32Array(G.buffer);if(s[b+0>>>2]=h,s[b+4>>>2]=h,s[b+8>>>2]=c<<R,P&2)s[b+12>>>2]=c;r=b}if(v){let b=U(R,P&2048,P&4096),s=h>>>R;if(P&16384)for(let a=0;a<c;++a)b[s+a]=x[a];else b.set(x,s)}return r}_.__newArray=A;function z(W){let T=new Uint32Array(G.buffer),x=T[W+-8>>>2],P=B(x),R=F(P),v=P&4?W:T[W+4>>>2],c=P&2?T[W+12>>>2]:T[v+-4>>>2]>>>R;return U(R,P&2048,P&4096).subarray(v>>>=R,v+c)}_.__getArrayView=z;function O(W){let T=z(W),x=T.length,P=Array(x);for(let R=0;R<x;R++)P[R]=T[R];return P}_.__getArray=O;function y(W){let T=G.buffer,x=new Uint32Array(T)[W+-4>>>2];return T.slice(W,W+x)}_.__getArrayBuffer=y;function I(W){if(!Z)throw Error("Operation requires compiling with --exportTable");let T=new Uint32Array(G.buffer)[W>>>2];return Z.get(T)}_.__getFunction=I;function k(W,T,x){return new W(J(W,T,x))}function J(W,T,x){let P=G.buffer,R=new Uint32Array(P);return new W(P,R[x+4>>>2],R[x+8>>>2]>>>T)}function M(W,T,x){_[`__get${T}`]=k.bind(null,W,x),_[`__get${T}View`]=J.bind(null,W,x)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((W)=>{M(W,W.name,31-Math.clz32(W.BYTES_PER_ELEMENT))}),yN)[BigUint64Array,BigInt64Array].forEach((W)=>{M(W,W.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,CN(j,_)}function uG(_){return typeof Response<"u"&&_ instanceof Response}function IN(_){return _ instanceof WebAssembly.Module}async function D3(_,$={}){if(uG(_=await _))return _2(_,$);let j=IN(_)?_:await WebAssembly.compile(_),G=SG($),Z=await WebAssembly.instantiate(j,$),X=gG(G,Z);return{module:j,instance:Z,exports:X}}async function _2(_,$={}){if(!WebAssembly.instantiateStreaming)return D3(uG(_=await _)?_.arrayBuffer():_,$);let j=SG($),G=await WebAssembly.instantiateStreaming(_,$),Z=gG(j,G.instance);return{...G,exports:Z}}function CN(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let K=X.shift();if(!Object.hasOwn(Y,K))Y[K]={};Y=Y[K]}let q=X[0],L=q.indexOf("#");if(L>=0){let K=q.substring(0,L),Q=Y[K];if(typeof Q>"u"||!Q.prototype){let V=function(...B){return V.wrap(V.prototype.constructor(0,...B))};if(V.prototype={valueOf(){return this[u5]}},V.wrap=function(B){return Object.create(V.prototype,{[u5]:{value:B,writable:!1}})},Q)Object.getOwnPropertyNames(Q).forEach((B)=>Object.defineProperty(V,B,Object.getOwnPropertyDescriptor(Q,B)));Y[K]=V}if(q=q.substring(L+1),Y=Y[K].prototype,/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4))){let V=_[G.replace("set:","get:")],B=_[G.replace("get:","set:")];Object.defineProperty(Y,q,{get(){return V(this[u5])},set(F){B(this[u5],F)},enumerable:!0})}}else if(q==="constructor")(Y[q]=function(...V){return j(V.length),Z(...V)}).original=Z;else(Y[q]=function(...V){return j(V.length),Z(this[u5],...V)}).original=Z}else if(/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4)))Object.defineProperty(Y,q,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[q]=(...K)=>{return j(K.length),Z(...K)}).original=Z;else Y[q]=Z}return $}function W3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var PN="/static/js/vendor/remote-display-decoder.wasm",$2=null;function bG(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function vG(){if($2)return $2;return $2=(async()=>{try{let G=function(Z,X,Y,q,L,K,Q){let V=bG(X),B=j.__pin(j.__newArrayBuffer(V));try{return j[Z](B,Y,q,L,K,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift)}finally{j.__unpin(B),W3(j)}},_=await fetch(PN,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof _2==="function"?await _2(_,{}):await D3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,q,L,K){return G("processRawRect",Z,X,Y,q,L,K)},processCopyRect(Z,X,Y,q,L,K){return j.processCopyRect(Z,X,Y,q,L,K)},processRreRect(Z,X,Y,q,L,K){return G("processRreRect",Z,X,Y,q,L,K)},processHextileRect(Z,X,Y,q,L,K){return G("processHextileRect",Z,X,Y,q,L,K)},processZrleTileData(Z,X,Y,q,L,K){return G("processZrleTileData",Z,X,Y,q,L,K)},decodeRawRectToRgba(Z,X,Y,q){let L=bG(Z),K=j.__pin(j.__newArrayBuffer(L));try{let Q=j.__pin(j.decodeRawRectToRgba(K,X,Y,q.bitsPerPixel,q.bigEndian?1:0,q.trueColor?1:0,q.redMax,q.greenMax,q.blueMax,q.redShift,q.greenShift,q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(Q))}finally{j.__unpin(Q)}}finally{j.__unpin(K),W3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),$2}function n4(_,$,j){return Math.max($,Math.min(j,_))}function j2(_,$,j){let G=new Uint8Array(6),Z=n4(Math.floor(Number($||0)),0,65535),X=n4(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=n4(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function S$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function z3(_){let $=S$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return S$(0);let G=Number(_?.buttons||0);if(G&1)return S$(0);if(G&4)return S$(1);if(G&2)return S$(2);return 0}function L4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if(($==="pointerleave"||$==="pointerout")&&$!=="pointerdown")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function mG(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function v1(_){return String(_||"").toLowerCase()==="touch"}function RN(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function J3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return RN(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function cG(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!J3(_)}function lG(_){return String(_||"").toLowerCase()!=="mouse"}function A3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Number(j?.width||0)),L=Math.max(1,Number(j?.height||0)),K=(Number(_||0)-Number(j?.left||0))/q,Q=(Number($||0)-Number(j?.top||0))/L;return{x:n4(Math.floor(K*X),0,Math.max(0,X-1)),y:n4(Math.floor(Q*Y),0,Math.max(0,Y-1))}}function hG(_,$,j,G=0){let Z=Number(_)<0?8:16,X=n4(Number(G||0)|Z,0,255);return[j2(X,$,j),j2(Number(G||0),$,j)]}function pG(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function nG(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function K4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function rG(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),q=Math.max(1,Math.floor(Number(G||0))),L=Math.min(Z/Y,X/q);if(!Number.isFinite(L)||L<=0)return 1;return Math.max(0.01,L)}var O3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)O3[`F${_}`]=65470+(_-1);function k3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(O3,X))return O3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var p_=Uint8Array,E1=Uint16Array,P3=Int32Array,G2=new p_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Z2=new p_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),x3=new p_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),sG=function(_,$){var j=new E1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new P3(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},aG=sG(G2,2),tG=aG.b,I3=aG.r;tG[28]=258,I3[258]=28;var eG=sG(Z2,0),SN=eG.b,dG=eG.r,C3=new E1(32768);for(B_=0;B_<32768;++B_)m1=(B_&43690)>>1|(B_&21845)<<1,m1=(m1&52428)>>2|(m1&13107)<<2,m1=(m1&61680)>>4|(m1&3855)<<4,C3[B_]=((m1&65280)>>8|(m1&255)<<8)>>1;var m1,B_,c1=function(_,$,j){var G=_.length,Z=0,X=new E1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new E1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var q;if(j){q=new E1(1<<$);var L=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var K=Z<<4|_[Z],Q=$-_[Z],V=Y[_[Z]-1]++<<Q;for(var B=V|(1<<Q)-1;V<=B;++V)q[C3[V]>>L]=K}}else{q=new E1(G);for(Z=0;Z<G;++Z)if(_[Z])q[Z]=C3[Y[_[Z]-1]++]>>15-_[Z]}return q},g$=new p_(288);for(B_=0;B_<144;++B_)g$[B_]=8;var B_;for(B_=144;B_<256;++B_)g$[B_]=9;var B_;for(B_=256;B_<280;++B_)g$[B_]=7;var B_;for(B_=280;B_<288;++B_)g$[B_]=8;var B_,c5=new p_(32);for(B_=0;B_<32;++B_)c5[B_]=5;var B_,gN=c1(g$,9,0),uN=c1(g$,9,1),bN=c1(c5,5,0),vN=c1(c5,5,1),M3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},C1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},T3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},R3=function(_){return(_+7)/8|0},m5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new p_(_.subarray($,j))};var mN=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Q1=function(_,$,j){var G=Error($||mN[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,Q1);if(!j)throw G;return G},cN=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new p_(0);var Y=!j,q=Y||$.i!=2,L=$.i;if(Y)j=new p_(Z*3);var K=function(j0){var C0=j.length;if(j0>C0){var M0=new p_(Math.max(C0*2,j0));M0.set(j),j=M0}},Q=$.f||0,V=$.p||0,B=$.b||0,F=$.l,H=$.d,D=$.m,E=$.n,U=Z*8;do{if(!F){Q=C1(_,V,1);var A=C1(_,V+1,3);if(V+=3,!A){var z=R3(V)+4,O=_[z-4]|_[z-3]<<8,y=z+O;if(y>Z){if(L)Q1(0);break}if(q)K(B+O);j.set(_.subarray(z,y),B),$.b=B+=O,$.p=V=y*8,$.f=Q;continue}else if(A==1)F=uN,H=vN,D=9,E=5;else if(A==2){var I=C1(_,V,31)+257,k=C1(_,V+10,15)+4,J=I+C1(_,V+5,31)+1;V+=14;var M=new p_(J),W=new p_(19);for(var T=0;T<k;++T)W[x3[T]]=C1(_,V+T*3,7);V+=k*3;var x=M3(W),P=(1<<x)-1,R=c1(W,x,1);for(var T=0;T<J;){var v=R[C1(_,V,P)];V+=v&15;var z=v>>4;if(z<16)M[T++]=z;else{var c=0,h=0;if(z==16)h=3+C1(_,V,3),V+=2,c=M[T-1];else if(z==17)h=3+C1(_,V,7),V+=3;else if(z==18)h=11+C1(_,V,127),V+=7;while(h--)M[T++]=c}}var r=M.subarray(0,I),b=M.subarray(I);D=M3(r),E=M3(b),F=c1(r,D,1),H=c1(b,E,1)}else Q1(1);if(V>U){if(L)Q1(0);break}}if(q)K(B+131072);var s=(1<<D)-1,a=(1<<E)-1,q0=V;for(;;q0=V){var c=F[T3(_,V)&s],Z0=c>>4;if(V+=c&15,V>U){if(L)Q1(0);break}if(!c)Q1(2);if(Z0<256)j[B++]=Z0;else if(Z0==256){q0=V,F=null;break}else{var H0=Z0-254;if(Z0>264){var T=Z0-257,N0=G2[T];H0=C1(_,V,(1<<N0)-1)+tG[T],V+=N0}var L0=H[T3(_,V)&a],D0=L0>>4;if(!L0)Q1(3);V+=L0&15;var b=SN[D0];if(D0>3){var N0=Z2[D0];b+=T3(_,V)&(1<<N0)-1,V+=N0}if(V>U){if(L)Q1(0);break}if(q)K(B+131072);var Q0=B+H0;if(B<b){var k0=X-b,i=Math.min(b,Q0);if(k0+B<0)Q1(3);for(;B<i;++B)j[B]=G[k0+B]}for(;B<Q0;++B)j[B]=j[B-b]}}if($.l=F,$.p=q0,$.b=B,$.f=Q,F)Q=1,$.m=D,$.d=H,$.n=E}while(!Q);return B!=j.length&&Y?m5(j,0,B):j.subarray(0,B)},K$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},b5=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},w3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:$Z,l:0};if(Z==1){var Y=new p_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(y,I){return y.f-I.f}),j.push({s:-1,f:25001});var q=j[0],L=j[1],K=0,Q=1,V=2;j[0]={s:-1,f:q.f+L.f,l:q,r:L};while(Q!=Z-1)q=j[j[K].f<j[V].f?K++:V++],L=j[K!=Q&&j[K].f<j[V].f?K++:V++],j[Q++]={s:-1,f:q.f+L.f,l:q,r:L};var B=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>B)B=X[G].s;var F=new E1(B+1),H=f3(j[Q-1],F,0);if(H>$){var G=0,D=0,E=H-$,U=1<<E;X.sort(function(I,k){return F[k.s]-F[I.s]||I.f-k.f});for(;G<Z;++G){var A=X[G].s;if(F[A]>$)D+=U-(1<<H-F[A]),F[A]=$;else break}D>>=E;while(D>0){var z=X[G].s;if(F[z]<$)D-=1<<$-F[z]++-1;else++G}for(;G>=0&&D;--G){var O=X[G].s;if(F[O]==$)--F[O],++D}H=$}return{t:new p_(F),l:H}},f3=function(_,$,j){return _.s==-1?Math.max(f3(_.l,$,j+1),f3(_.r,$,j+1)):$[_.s]=j},iG=function(_){var $=_.length;while($&&!_[--$]);var j=new E1(++$),G=0,Z=_[0],X=1,Y=function(L){j[G++]=L};for(var q=1;q<=$;++q)if(_[q]==Z&&q!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[q]}return{c:j.subarray(0,G),n:$}},v5=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},_Z=function(_,$,j){var G=j.length,Z=R3($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},oG=function(_,$,j,G,Z,X,Y,q,L,K,Q){K$($,Q++,j),++Z[256];var V=w3(Z,15),B=V.t,F=V.l,H=w3(X,15),D=H.t,E=H.l,U=iG(B),A=U.c,z=U.n,O=iG(D),y=O.c,I=O.n,k=new E1(19);for(var J=0;J<A.length;++J)++k[A[J]&31];for(var J=0;J<y.length;++J)++k[y[J]&31];var M=w3(k,7),W=M.t,T=M.l,x=19;for(;x>4&&!W[x3[x-1]];--x);var P=K+5<<3,R=v5(Z,g$)+v5(X,c5)+Y,v=v5(Z,B)+v5(X,D)+Y+14+3*x+v5(k,W)+2*k[16]+3*k[17]+7*k[18];if(L>=0&&P<=R&&P<=v)return _Z($,Q,_.subarray(L,L+K));var c,h,r,b;if(K$($,Q,1+(v<R)),Q+=2,v<R){c=c1(B,F,0),h=B,r=c1(D,E,0),b=D;var s=c1(W,T,0);K$($,Q,z-257),K$($,Q+5,I-1),K$($,Q+10,x-4),Q+=14;for(var J=0;J<x;++J)K$($,Q+3*J,W[x3[J]]);Q+=3*x;var a=[A,y];for(var q0=0;q0<2;++q0){var Z0=a[q0];for(var J=0;J<Z0.length;++J){var H0=Z0[J]&31;if(K$($,Q,s[H0]),Q+=W[H0],H0>15)K$($,Q,Z0[J]>>5&127),Q+=Z0[J]>>12}}}else c=gN,h=g$,r=bN,b=c5;for(var J=0;J<q;++J){var N0=G[J];if(N0>255){var H0=N0>>18&31;if(b5($,Q,c[H0+257]),Q+=h[H0+257],H0>7)K$($,Q,N0>>23&31),Q+=G2[H0];var L0=N0&31;if(b5($,Q,r[L0]),Q+=b[L0],L0>3)b5($,Q,N0>>5&8191),Q+=Z2[L0]}else b5($,Q,c[N0]),Q+=h[N0]}return b5($,Q,c[256]),Q+h[256]},lN=new P3([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),$Z=new p_(0),hN=function(_,$,j,G,Z,X){var Y=X.z||_.length,q=new p_(G+Y+5*(1+Math.ceil(Y/7000))+Z),L=q.subarray(G,q.length-Z),K=X.l,Q=(X.r||0)&7;if($){if(Q)L[0]=X.r>>3;var V=lN[$-1],B=V>>13,F=V&8191,H=(1<<j)-1,D=X.p||new E1(32768),E=X.h||new E1(H+1),U=Math.ceil(j/3),A=2*U,z=function(m0){return(_[m0]^_[m0+1]<<U^_[m0+2]<<A)&H},O=new P3(25000),y=new E1(288),I=new E1(32),k=0,J=0,M=X.i||0,W=0,T=X.w||0,x=0;for(;M+2<Y;++M){var P=z(M),R=M&32767,v=E[P];if(D[R]=v,E[P]=R,T<=M){var c=Y-M;if((k>7000||W>24576)&&(c>423||!K)){Q=oG(_,L,0,O,y,I,J,W,x,M-x,Q),W=k=J=0,x=M;for(var h=0;h<286;++h)y[h]=0;for(var h=0;h<30;++h)I[h]=0}var r=2,b=0,s=F,a=R-v&32767;if(c>2&&P==z(M-a)){var q0=Math.min(B,c)-1,Z0=Math.min(32767,M),H0=Math.min(258,c);while(a<=Z0&&--s&&R!=v){if(_[M+r]==_[M+r-a]){var N0=0;for(;N0<H0&&_[M+N0]==_[M+N0-a];++N0);if(N0>r){if(r=N0,b=a,N0>q0)break;var L0=Math.min(a,N0-2),D0=0;for(var h=0;h<L0;++h){var Q0=M-a+h&32767,k0=D[Q0],i=Q0-k0&32767;if(i>D0)D0=i,v=Q0}}}R=v,v=D[R],a+=R-v&32767}}if(b){O[W++]=268435456|I3[r]<<18|dG[b];var j0=I3[r]&31,C0=dG[b]&31;J+=G2[j0]+Z2[C0],++y[257+j0],++I[C0],T=M+r,++k}else O[W++]=_[M],++y[_[M]]}}for(M=Math.max(M,T);M<Y;++M)O[W++]=_[M],++y[_[M]];if(Q=oG(_,L,K,O,y,I,J,W,x,M-x,Q),!K)X.r=Q&7|L[Q/8|0]<<3,Q-=7,X.h=E,X.p=D,X.i=M,X.w=T}else{for(var M=X.w||0;M<Y+K;M+=65535){var M0=M+65535;if(M0>=Y)L[Q/8|0]=K,M0=Y;Q=_Z(L,Q+1,_.subarray(M,M0))}X.i=Y}return m5(q,0,G+R3(Q)+Z)};var jZ=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var q=Math.min(Y+2655,X);for(;Y<q;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},pN=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new p_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return hN(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var GZ=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var nN=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=jZ();Z.p($.dictionary),GZ(_,2,Z.d())}},rN=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)Q1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)Q1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var y3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new p_(32768),this.p=new p_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)Q1(5);if(this.d)Q1(4);if(!this.p.length)this.p=$;else if($.length){var j=new p_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=cN(this.p,this.s,this.o);this.ondata(m5(G,j,this.s.b),this.d),this.o=m5(G,this.s.b-32768),this.s.b=this.o.length,this.p=m5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function ZZ(_,$){if(!$)$={};var j=jZ();j.p(_);var G=pN(_,$,$.dictionary?6:2,4);return nN(G,$),GZ(G,G.length-4,j.d()),G}var XZ=function(){function _($,j){y3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(y3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(rN(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)Q1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}y3.prototype.c.call(this,j)},_}();var dN=typeof TextDecoder<"u"&&new TextDecoder,iN=0;try{dN.decode($Z,{stream:!0}),iN=1}catch(_){}var oN=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],sN=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],aN=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],tN=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],eN=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],_U=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],$U=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],jU=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],LZ=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;LZ[_]=$}function KZ(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function VZ(_){let $=0n,j=KZ(_);for(let G of j)$=$<<8n|BigInt(G);return $}function GU(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function r4(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function YZ(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function ZU(_){let $=r4(VZ(_),eN,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of $U){j=YZ(j,X),G=YZ(G,X);let Y=j<<28n|G;Z.push(r4(Y,_U,56))}return Z}function XU(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(jU[j][X][Y])}return $}function YU(_,$){let j=r4(_,aN,32)^BigInt($),G=XU(j);return r4(G,tN,32)}function qZ(_,$){let j=ZU($),G=r4(VZ(_),oN,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let q of j){let L=X,K=(Z^YU(X,q))&0xffffffffn;Z=L,X=K}let Y=X<<32n|Z;return GU(r4(Y,sN,64),8)}function qU(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=LZ[Z]}return j}function QZ(_,$){let j=KZ($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=qU(_),Z=new Uint8Array(16);return Z.set(qZ(j.slice(0,8),G),0),Z.set(qZ(j.slice(8,16),G),8),Z}var f1="vnc";function LU(_){return Number(_)}function KU(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=LU(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function o4(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function VU(_,$){let j=o4(_),G=o4($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function QU(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=o4(Z);j.set(X,G),G+=X.byteLength}return j}function BU(){return(_)=>{let $=o4(_);try{let j=[],G=new XZ((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return QU(j)}catch(j){try{let G=ZZ($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function FU(_){return new TextEncoder().encode(String(_||""))}function d4(_){return new TextDecoder().decode(o4(_))}function NU(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function UU(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function BZ(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function HU(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function EU(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function FZ(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function i4(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function UZ(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function DU(_,$,j,G){let Z=G||s4,X=o4(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),q=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<q)throw Error(`Incomplete raw rectangle payload: expected ${q} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let L=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),K=0,Q=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let B=UZ(X,K,Y,Z.bigEndian),F=i4(B>>>Z.redShift&Z.redMax,Z.redMax),H=i4(B>>>Z.greenShift&Z.greenMax,Z.greenMax),D=i4(B>>>Z.blueShift&Z.blueMax,Z.blueMax);L[Q]=F,L[Q+1]=H,L[Q+2]=D,L[Q+3]=255,K+=Y,Q+=4}return L}function V$(_,$,j){let G=j||s4,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=UZ(_,$,Z,G.bigEndian);return{rgba:[i4(X>>>G.redShift&G.redMax,G.redMax),i4(X>>>G.greenShift&G.greenMax,G.greenMax),i4(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function u$(_,$,j,G,Z,X,Y){if(!Y)return;for(let q=0;q<X;q+=1)for(let L=0;L<Z;L+=1){let K=((G+q)*$+(j+L))*4;_[K]=Y[0],_[K+1]=Y[1],_[K+2]=Y[2],_[K+3]=Y[3]}}function HZ(_,$,j,G,Z,X,Y){for(let q=0;q<X;q+=1){let L=q*Z*4,K=((G+q)*$+j)*4;_.set(Y.subarray(L,L+Z*4),K)}}function NZ(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function WU(_,$,j,G,Z,X,Y){let q=Z||s4,L=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let K=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+K)return null;let Q=_.slice($+4,$+4+K),V;try{V=Y(Q)}catch{return{consumed:4+K,skipped:!0}}let B=0,F=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let H=0;H<G;H+=64){let D=Math.min(64,G-H);for(let E=0;E<j;E+=64){let U=Math.min(64,j-E);if(V.byteLength<B+1)return null;let A=V[B++],z=A&127,O=(A&128)!==0;if(!O&&z===0){let y=U*D*L;if(V.byteLength<B+y)return null;let I=X(V.slice(B,B+y),U,D,q);B+=y,HZ(F,j,E,H,U,D,I);continue}if(!O&&z===1){let y=V$(V,B,q);if(!y)return null;B+=y.bytesPerPixel,u$(F,j,E,H,U,D,y.rgba);continue}if(!O&&z>1&&z<=16){let y=[];for(let M=0;M<z;M+=1){let W=V$(V,B,q);if(!W)return null;B+=W.bytesPerPixel,y.push(W.rgba)}let I=z<=2?1:z<=4?2:4,k=Math.ceil(U*I/8),J=k*D;if(V.byteLength<B+J)return null;for(let M=0;M<D;M+=1){let W=B+M*k;for(let T=0;T<U;T+=1){let x=T*I,P=W+(x>>3),R=8-I-(x&7),v=V[P]>>R&(1<<I)-1;u$(F,j,E+T,H+M,1,1,y[v])}}B+=J;continue}if(O&&z===0){let y=0,I=0;while(I<D){let k=V$(V,B,q);if(!k)return null;B+=k.bytesPerPixel;let J=NZ(V,B);if(!J)return null;B+=J.consumed;for(let M=0;M<J.runLength;M+=1)if(u$(F,j,E+y,H+I,1,1,k.rgba),y+=1,y>=U){if(y=0,I+=1,I>=D)break}}continue}if(O&&z>0){let y=[];for(let J=0;J<z;J+=1){let M=V$(V,B,q);if(!M)return null;B+=M.bytesPerPixel,y.push(M.rgba)}let I=0,k=0;while(k<D){if(V.byteLength<B+1)return null;let J=V[B++],M=J,W=1;if(J&128){M=J&127;let x=NZ(V,B);if(!x)return null;B+=x.consumed,W=x.runLength}let T=y[M];if(!T)return null;for(let x=0;x<W;x+=1)if(u$(F,j,E+I,H+k,1,1,T),I+=1,I>=U){if(I=0,k+=1,k>=D)break}}continue}return{consumed:4+K,skipped:!0}}}return{consumed:4+K,rgba:F,decompressed:V}}function OU(_,$,j,G,Z){let X=Z||s4,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let L=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),K=4+Y+L*(Y+8);if(_.byteLength<$+K)return null;let Q=$+4,V=V$(_,Q,X);if(!V)return null;Q+=V.bytesPerPixel;let B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);u$(B,j,0,0,j,G,V.rgba);for(let F=0;F<L;F+=1){let H=V$(_,Q,X);if(!H)return null;if(Q+=H.bytesPerPixel,_.byteLength<Q+8)return null;let D=new DataView(_.buffer,_.byteOffset+Q,8),E=D.getUint16(0,!1),U=D.getUint16(2,!1),A=D.getUint16(4,!1),z=D.getUint16(6,!1);Q+=8,u$(B,j,E,U,A,z,H.rgba)}return{consumed:Q-$,rgba:B}}function zU(_,$,j,G,Z,X){let Y=Z||s4,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),K=$,Q=[0,0,0,255],V=[255,255,255,255];for(let B=0;B<G;B+=16){let F=Math.min(16,G-B);for(let H=0;H<j;H+=16){let D=Math.min(16,j-H);if(_.byteLength<K+1)return null;let E=_[K++];if(E&1){let U=D*F*q;if(_.byteLength<K+U)return null;let A=X(_.slice(K,K+U),D,F,Y);K+=U,HZ(L,j,H,B,D,F,A);continue}if(E&2){let U=V$(_,K,Y);if(!U)return null;Q=U.rgba,K+=U.bytesPerPixel}if(u$(L,j,H,B,D,F,Q),E&4){let U=V$(_,K,Y);if(!U)return null;V=U.rgba,K+=U.bytesPerPixel}if(E&8){if(_.byteLength<K+1)return null;let U=_[K++];for(let A=0;A<U;A+=1){let z=V;if(E&16){let W=V$(_,K,Y);if(!W)return null;z=W.rgba,K+=W.bytesPerPixel}if(_.byteLength<K+2)return null;let O=_[K++],y=_[K++],I=O>>4,k=O&15,J=(y>>4)+1,M=(y&15)+1;u$(L,j,H+I,B+k,J,M,z)}}}}return{consumed:K-$,rgba:L}}var s4={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class X2{protocol=f1;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:DU,this.pipeline=_.pipeline||null,this.encodings=KU(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...s4},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:BU()}receive(_){if(_)this.buffer=VU(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=d4(Z),Y=NU(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=UU(Y),j.push(FU(this.clientVersionText)),$.push({type:"protocol-version",protocol:f1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let L=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+L)break;this.consume(1);let K=d4(this.consume(4+L).slice(4));throw Error(K||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:f1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:f1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+q)break;let L=d4(this.consume(4+q).slice(4));throw Error(L||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:f1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:f1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(QZ(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let q=d4(this.consume(4+Y).slice(4));throw Error(q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:f1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),q=BZ(Z,4),L=Z.getUint32(20,!1);if(this.buffer.byteLength<24+L)break;let K=this.consume(24),Q=new DataView(K.buffer,K.byteOffset,K.byteLength);if(this.framebufferWidth=Q.getUint16(0,!1),this.framebufferHeight=Q.getUint16(2,!1),this.serverPixelFormat=BZ(Q,4),this.serverName=d4(this.consume(L)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(HU(this.clientPixelFormat)),j.push(EU(this.encodings)),j.push(FZ(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:f1,width:X,height:Y,name:this.serverName,pixelFormat:q}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),q=4,L=[],K=!1,Q=!!this.pipeline;for(let B=0;B<Y;B+=1){if(this.buffer.byteLength<q+12){K=!0;break}let F=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,12),H=F.getUint16(0,!1),D=F.getUint16(2,!1),E=F.getUint16(4,!1),U=F.getUint16(6,!1),A=F.getInt32(8,!1);if(q+=12,A===0){let z=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),O=E*U*z;if(this.buffer.byteLength<q+O){K=!0;break}let y=this.buffer.slice(q,q+O);if(q+=O,Q)this.pipeline.processRawRect(y,H,D,E,U,this.clientPixelFormat),L.push({kind:"pipeline",x:H,y:D,width:E,height:U});else L.push({kind:"rgba",x:H,y:D,width:E,height:U,rgba:this.decodeRawRect(y,E,U,this.clientPixelFormat)});continue}if(A===2){let z=OU(this.buffer,q,E,U,this.clientPixelFormat);if(!z){K=!0;break}if(Q){let O=this.buffer.slice(q,q+z.consumed);this.pipeline.processRreRect(O,H,D,E,U,this.clientPixelFormat),L.push({kind:"pipeline",x:H,y:D,width:E,height:U})}else L.push({kind:"rgba",x:H,y:D,width:E,height:U,rgba:z.rgba});q+=z.consumed;continue}if(A===1){if(this.buffer.byteLength<q+4){K=!0;break}let z=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,4),O=z.getUint16(0,!1),y=z.getUint16(2,!1);if(q+=4,Q)this.pipeline.processCopyRect(H,D,E,U,O,y),L.push({kind:"pipeline",x:H,y:D,width:E,height:U});else L.push({kind:"copy",x:H,y:D,width:E,height:U,srcX:O,srcY:y});continue}if(A===16){let z=WU(this.buffer,q,E,U,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!z){K=!0;break}if(q+=z.consumed,z.skipped)continue;if(Q&&z.decompressed)this.pipeline.processZrleTileData(z.decompressed,H,D,E,U,this.clientPixelFormat),L.push({kind:"pipeline",x:H,y:D,width:E,height:U});else L.push({kind:"rgba",x:H,y:D,width:E,height:U,rgba:z.rgba});continue}if(A===5){let z=zU(this.buffer,q,E,U,this.clientPixelFormat,this.decodeRawRect);if(!z){K=!0;break}if(Q){let O=this.buffer.slice(q,q+z.consumed);this.pipeline.processHextileRect(O,H,D,E,U,this.clientPixelFormat),L.push({kind:"pipeline",x:H,y:D,width:E,height:U})}else L.push({kind:"rgba",x:H,y:D,width:E,height:U,rgba:z.rgba});q+=z.consumed;continue}if(A===-223){if(this.framebufferWidth=E,this.framebufferHeight=U,Q)this.pipeline.initFramebuffer(E,U);L.push({kind:"resize",x:H,y:D,width:E,height:U});continue}throw Error(`Unsupported VNC rectangle encoding ${A}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(K)break;this.consume(q);let V={type:"framebuffer-update",protocol:f1,width:this.framebufferWidth,height:this.framebufferHeight,rects:L};if(Q)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(FZ(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:f1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let q=d4(this.consume(Y));$.push({type:"clipboard",protocol:f1,text:q}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var h1="piclaw://vnc";function WZ(_){let $=String(_||"").trim();return $?`${h1}/${encodeURIComponent($)}`:h1}var S3="piclaw:vnc-popout:",JU=60000;function OZ(_=globalThis){try{return _?.localStorage??null}catch{return null}}function AU(_=globalThis){let $=QG(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function zZ(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith(S3))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{o6(_,G)}}function kU(_,$=globalThis,j=Date.now()){let G=K4(_);if(G===null)return null;let Z=OZ($);if(!Z)return null;zZ(Z,j);let X=AU($);try{return Z.setItem(`${S3}${X}`,JSON.stringify({password:G,expiresAt:j+JU})),X}catch{return null}}function MU(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=OZ($);if(!Z)return null;zZ(Z,j);let X=`${S3}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let q=JSON.parse(Y),L=Number(q?.expiresAt||0);if(!Number.isFinite(L)||L<=j)return null;return K4(q?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function TU(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:WZ(G)},X=kU($,j);if(X)Z.vnc_secret=X;return Z}function wU(_){let $=String(_||"");if($===h1)return null;if(!$.startsWith(`${h1}/`))return null;let j=$.slice(`${h1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function l1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function yU(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function xU(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function IU(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function CU(_){return String(_||"").trim()||"localhost"}function fU(_,$){let j=CU(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function PU(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function EZ(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function DZ(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function RU(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class JZ{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=wU($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=EZ("vnc_handoff");let j=EZ("vnc_secret"),G=MU(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=PU({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=fU(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=K4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),q=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=xU();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
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
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=K4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=K4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=rG($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return A3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(j2(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,q=new Map,L=new Set,K=!1,Q=(k)=>this.getFramebufferPointFromEvent(k)||X.get(k?.pointerId)||{x:0,y:0},V=(k)=>{if(!k||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let J=this.canvas.getBoundingClientRect?.();if(!J||!J.width||!J.height)return null;return A3(k.clientX,k.clientY,J,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},B=(k)=>{let J=Y.get(k);if(J)G.clearTimeout(J),Y.delete(k)},F=(k)=>{let J=q.get(k);if(J?.holdTimer)G.clearTimeout(J.holdTimer);q.delete(k)},H=()=>{for(let k of q.keys())F(k)},D=()=>{if(!L.size)K=!1},E=(k,J=80)=>{let M=String(k?.pointerType||"").toLowerCase();if(!lG(M))return;let W=Number(k?.pointerId);if(!Number.isFinite(W))return;B(W);let T=G.setTimeout(()=>{if(Y.delete(W),!Z.has(W)&&!this.pointerButtonMask)return;A({pointerId:W,pointerType:M,type:"pointercancel",clientX:k?.clientX,clientY:k?.clientY},{resetAll:!0})},J);Y.set(W,T)},U=(k=null)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;for(let M of Y.keys())B(M);H(),L.clear(),K=!1;let J=k||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,J.x,J.y)},A=(k,J={})=>{if(J.resetAll){let P=Number(k?.pointerId);B(P),U(Q(k));try{this.canvas?.releasePointerCapture?.(P)}catch{}return}let M=Q(k),W=Number(k?.pointerId);B(W),F(W),L.delete(W),D();let T=Z.has(W),x=Z.get(W)??z3(k);if(!T&&!x&&!this.pointerButtonMask)return;if(Z.delete(W),X.delete(W),x)this.pointerButtonMask&=~x;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,M.x,M.y);try{this.canvas?.releasePointerCapture?.(W)}catch{}},z=(k)=>{if(K)return;let J=q.get(k);if(!J||J.dragActivated)return;J.dragActivated=!0,J.holdTimer=null;let M=S$(0);if(!M)return;Z.set(k,(Z.get(k)??0)|M),this.pointerButtonMask|=M,E({pointerId:k,pointerType:"touch",clientX:J.lastClientX,clientY:J.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,J.lastPoint.x,J.lastPoint.y)},O=(k,J,M={})=>{let W=q.get(k);if(!W)return!1;let T=J||W.lastPoint||{x:0,y:0},x=Number.isFinite(M.clientX)?Number(M.clientX):W.lastClientX,P=Number.isFinite(M.clientY)?Number(M.clientY):W.lastClientY;if(L.delete(k),M.cancelled||K){if(F(k),D(),Z.has(k)||this.pointerButtonMask)U(T);return!0}if(W.dragActivated||Z.has(k))return A({pointerId:k,pointerType:"touch",type:"pointerup",clientX:x,clientY:P}),D(),!0;let R=Date.now()-W.startedAt,v=cG({startX:W.startClientX,startY:W.startClientY,clientX:x,clientY:P,elapsedMs:R});if(B(k),F(k),X.delete(k),D(),v){let c=S$(0);this.sendPointerEvent(c,T.x,T.y),this.sendPointerEvent(0,T.x,T.y)}else this.sendPointerEvent(this.pointerButtonMask,T.x,T.y);return!0};this.canvas.addEventListener("contextmenu",(k)=>{k.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(k)=>{let J=this.getFramebufferPointFromEvent(k);if(!J)return;let M=String(k?.pointerType||"").toLowerCase(),W=v1(M);if(X.set(k.pointerId,J),W){let T=q.get(k.pointerId);if(T){if(T.lastClientX=Number(k?.clientX||0),T.lastClientY=Number(k?.clientY||0),T.lastPoint=J,!T.dragActivated&&J3({startX:T.startClientX,startY:T.startClientY,clientX:T.lastClientX,clientY:T.lastClientY}))F(k.pointerId),q.set(k.pointerId,{...T,holdTimer:null,dragActivated:!1});if(!T.dragActivated){this.sendPointerEvent(this.pointerButtonMask,J.x,J.y);return}}if(K)return}if(Z.has(k.pointerId)&&L4(k)){A(k,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(k.pointerId)&&L4(k)){U(J);return}if(Z.has(k.pointerId))E(k);this.sendPointerEvent(this.pointerButtonMask,J.x,J.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(k)=>{let J=this.getFramebufferPointFromEvent(k);if(!J)return;let M=String(k?.pointerType||"").toLowerCase(),W=v1(M);if(k.preventDefault(),this.canvas?.focus?.(),X.set(k.pointerId,J),W){if(L.add(k.pointerId),L.size>1){let P=[...L];K=!0,U(J);for(let R of P)L.add(R);K=!0;return}F(k.pointerId);let x={startClientX:Number(k?.clientX||0),startClientY:Number(k?.clientY||0),lastClientX:Number(k?.clientX||0),lastClientY:Number(k?.clientY||0),startedAt:Date.now(),lastPoint:J,holdTimer:null,dragActivated:!1};x.holdTimer=G.setTimeout(()=>{z(k.pointerId)},260),q.set(k.pointerId,x),this.sendPointerEvent(this.pointerButtonMask,J.x,J.y);return}if(M==="mouse")try{this.canvas?.setPointerCapture?.(k.pointerId)}catch{}let T=z3(k);if(!T)return;Z.set(k.pointerId,(Z.get(k.pointerId)??0)|T),this.pointerButtonMask|=T,E(k),this.sendPointerEvent(this.pointerButtonMask,J.x,J.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(k)=>{if(k.preventDefault(),v1(k?.pointerType)){let J=Q(k);if(O(k.pointerId,J,{clientX:k?.clientX,clientY:k?.clientY}))return}A(k)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(k)=>{if(k.preventDefault(),v1(k?.pointerType)){let J=Q(k);if(O(k.pointerId,J,{clientX:k?.clientX,clientY:k?.clientY,cancelled:!0}))return}A(k,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(k)=>{if(q.has(k.pointerId)&&v1(k?.pointerType)){O(k.pointerId,Q(k),{clientX:k?.clientX,clientY:k?.clientY,cancelled:!0});return}if(!Z.has(k.pointerId))return;if(!L4(k))return;A(k,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(k)=>{if(q.has(k.pointerId)&&v1(k?.pointerType)){O(k.pointerId,Q(k),{clientX:k?.clientX,clientY:k?.clientY,cancelled:!0});return}if(!Z.has(k.pointerId))return;if(!L4(k))return;A(k,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(k)=>{A(k,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(k)=>{if(!Z.size&&!this.pointerButtonMask||!L4(k))return;if(!Z.has(k.pointerId)&&!this.pointerButtonMask)return;A(k,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(k)=>{if(!Z.has(k.pointerId)&&!this.pointerButtonMask&&!q.has(k.pointerId))return;if(k.preventDefault?.(),v1(k?.pointerType)){let J=Q(k);if(O(k.pointerId,J,{clientX:k?.clientX,clientY:k?.clientY}))return}A(k,{resetAll:!Z.has(k.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(k)=>{if(!Z.has(k.pointerId)&&!this.pointerButtonMask&&!q.has(k.pointerId))return;if(k.preventDefault?.(),v1(k?.pointerType)){let J=Q(k);if(O(k.pointerId,J,{clientX:k?.clientX,clientY:k?.clientY,cancelled:!0}))return}A(k,{resetAll:!0})},{signal:$,passive:!1});let y=(k)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;if(!mG(k))return;let J=k?.changedTouches?.[0]||k?.touches?.[0]||null,M=V(J)||X.values().next().value||q.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&q.size===1){let[W]=q.entries().next().value||[];if(Number.isFinite(W)){O(W,M,{clientX:J?.clientX,clientY:J?.clientY,cancelled:k?.type==="touchcancel"});return}}U(M)},I=(k,J={})=>{if(!Z.size&&!this.pointerButtonMask&&!q.has(k?.pointerId))return;if(!L4(k))return;if(k?.preventDefault?.(),v1(k?.pointerType)){let M=Q(k);if(O(k.pointerId,M,{clientX:k?.clientX,clientY:k?.clientY,cancelled:J.resetAll===!0}))return}A(k,{resetAll:J.resetAll===!0||!Z.has(k?.pointerId)})};this.canvas.addEventListener("touchend",y,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",y,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",y,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",y,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",y,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",y,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(k)=>{I(k)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(k)=>{I(k,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;U()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;U()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")U()},{signal:$}),this.canvas.addEventListener("wheel",(k)=>{let J=this.getFramebufferPointFromEvent(k);if(!J)return;k.preventDefault();for(let M of hG(k.deltaY,J.x,J.y,this.pointerButtonMask))this.socketBoundary?.send?.(M)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(pG(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=k3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(nG(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??k3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new X2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await vG(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(q,L,K,Q)=>G.decodeRawRectToRgba(q,L,K,Q);let X=K4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new X2(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new E3({url:IU(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(q)=>{this.applyMetrics(q)},onMessage:(q)=>{this.handleSocketMessage(q)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(DZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),DZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await yU(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${l1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!RU(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return TU(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var g3={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===h1||$.startsWith(`${h1}/`)?9000:!1},mount(_,$){return new JZ(_,$)}};import{classHighlighter as SU,highlightTree as gU,StreamLanguage as a4,cssLanguage as uU,cppLanguage as bU,goLanguage as vU,htmlLanguage as mU,javascriptLanguage as cU,jsxLanguage as lU,tsxLanguage as hU,typescriptLanguage as pU,jsonLanguage as nU,markdownLanguage as rU,pythonLanguage as dU,rustLanguage as iU,StandardSQL as oU,xmlLanguage as sU,yamlLanguage as aU,dockerFile as tU,powerShell as eU,ruby as _H,shell as $H,swift as jH,toml as GH}from"#editor-vendor/codemirror";function V4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var ZH={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},XH=a4.define($H).parser,YH=a4.define(eU).parser,qH=a4.define(tU).parser,LH=a4.define(_H).parser,KH=a4.define(jH).parser,VH=a4.define(GH).parser;function AZ(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return ZH[$]||String(_||"").trim()}function QH(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return cU.parser;case"ts":case"typescript":return pU.parser;case"jsx":return lU.parser;case"tsx":return hU.parser;case"py":case"python":return dU.parser;case"json":return nU.parser;case"css":return uU.parser;case"html":return mU.parser;case"xml":return sU.parser;case"yaml":case"yml":return aU.parser;case"md":case"markdown":return rU.parser;case"sql":return oU.language.parser;case"go":return vU.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return bU.parser;case"sh":case"bash":case"shell":case"zsh":return XH;case"ps1":case"powershell":return YH;case"dockerfile":return qH;case"rb":case"ruby":return LH;case"rs":case"rust":return iU.parser;case"swift":return KH;case"toml":return VH;default:return null}}function Y2(_,$){let j=QH($);if(!j)return V4(_);let G=[];try{let Y=j.parse(_);gU(Y,SU,(q,L,K)=>{if(!K||q>=L)return;G.push({from:q,to:L,cls:K})})}catch{return V4(_)}if(!G.length)return V4(_);G.sort((Y,q)=>Y.from-q.from||Y.to-q.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=V4(_.slice(Z,Y.from));X+=`<span class="${V4(Y.cls)}">${V4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=V4(_.slice(Z));return X}l5();var Q2=/#(\w+)/g,kH=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),MH=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),TH=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),PZ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},wH=new Set(["http:","https:","mailto:",""]);function yH(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(PZ[j]||new Set).has(G)||TH.has(G)}function n3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function N4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!wH.has(G.protocol))return null;return G.href}catch{return null}}function RZ(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let q=Y.tagName.toLowerCase();if(!MH.has(q)){let K=Y.parentNode;if(!K)continue;while(Y.firstChild)K.insertBefore(Y.firstChild,Y);K.removeChild(Y);continue}let L=PZ[q]||new Set;for(let K of Array.from(Y.attributes)){let Q=K.name.toLowerCase(),V=K.value;if(Q.startsWith("on")){Y.removeAttribute(K.name);continue}if(yH(q,Q)){if(Q==="href"){let B=N4(V);if(!B)Y.removeAttribute(K.name);else if(Y.setAttribute(K.name,B),q==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(B))Y.setAttribute("target","_blank")}}else if(Q==="src"){let B=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,F=N4(B,{allowDataImage:q==="img"});if(!F)Y.removeAttribute(K.name);else Y.setAttribute(K.name,F)}continue}Y.removeAttribute(K.name)}}return j.body.innerHTML}function SZ(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function h5(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=SZ(j);if(Z===j)break;j=Z}return j}function xH(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function IH(_){let{text:$,frontmatter:j}=xH(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function CH(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let q of j){if(!X&&q.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&q.trim().match(/^```\s*$/)){let L=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${L}@@`),X=!1,Y=[];continue}if(X)Y.push(q);else Z.push(q)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function fH(_){if(!_)return _;return h5(_,5)}function PH(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function RH(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function SH(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=fH(X);return`<div class="mermaid-container" data-mermaid="${PH(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function gZ(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function gH(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=h5(Z,2),q=X||"plaintext",L=Y2(Y,X);return`<pre><code class="hljs language-${n3(q)}">${L}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var uH={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function bH(_,$){let j=uH[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let q=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${n3(q)}"`)}return G.join("")}function uZ(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,q=X.endsWith("/")?X.slice(0,-1).trim():X,[L=""]=q.split(/\s+/,1),K=L.toLowerCase();if(!K||!kH.has(K))return $;if(K==="br")return Z?"":"<br>";if(Z)return`</${K}>`;let Q=q.slice(L.length).trim(),V=bH(K,Q);return`<${K}${V}>`})}function bZ(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function vZ(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function vH(_){if(!window.katex)return _;let $=(Y)=>SZ(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let q=[],L=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(K)=>{let Q=q.length;return q.push(K),`@@CODE_BLOCK_${Q}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(K)=>{let Q=q.length;return q.push(K),`@@CODE_INLINE_${Q}@@`}),{html:L,blocks:q}},G=(Y,q)=>{if(!q.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,K)=>{let Q=Number(K);return q[Q]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,q,L)=>{try{let K=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${q}${K}`}catch(K){return`<span class="math-error" title="${n3(K.message)}">${Y}</span>`}}),G(X,Z.blocks)}function mH(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(Q2.lastIndex=0,!Q2.test(Y))continue;Q2.lastIndex=0;let q=X.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let L=Y.split(Q2);if(L.length<=1)continue;let K=$.createDocumentFragment();L.forEach((Q,V)=>{if(V%2===1){let B=$.createElement("a");B.setAttribute("href","#"),B.className="hashtag",B.setAttribute("data-hashtag",Q),B.textContent=`#${Q}`,K.appendChild(B)}else K.appendChild($.createTextNode(Q))}),X.parentNode?.replaceChild(K,X)}return $.body.innerHTML}function cH(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function lH(_){let $=IH(_||""),j=cH($),{text:G,blocks:Z}=CH(j),X=h5(G,2),q=gZ(X).replace(/</g,"&lt;");return{safeHtml:uZ(q),mermaidBlocks:Z}}function e_(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=lH(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=bZ(X),X=vZ(X),X=gH(X),X=vH(X),X=mH(X),X=SH(X,Z),X=RZ(X,j),X}function p5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=h5($,2),Z=gZ(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=uZ(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=bZ(Y),Y=vZ(Y),Y=RZ(Y),Y}function mZ(_){if(!_)return"";return String(_).replace(/\r\n/g,`
`).replace(/\r/g,`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\n/g,"<br>")}function hH(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((L)=>{let[K,Q]=L.split(",").map(Number);return{x:K,y:Q}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let q=[`M ${Y[0].x},${Y[0].y}`];for(let L=1;L<Y.length-1;L++){let K=Y[L-1],Q=Y[L],V=Y[L+1],B=Q.x-K.x,F=Q.y-K.y,H=V.x-Q.x,D=V.y-Q.y,E=Math.sqrt(B*B+F*F),U=Math.sqrt(H*H+D*D),A=Math.min($,E/2,U/2);if(A<0.5){q.push(`L ${Q.x},${Q.y}`);continue}let z=Q.x-B/E*A,O=Q.y-F/E*A,y=Q.x+H/U*A,I=Q.y+D/U*A,J=B*D-F*H>0?1:0;q.push(`L ${z},${O}`),q.push(`A ${A},${A} 0 0 ${J} ${y},${I}`)}return q.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${q.join(" ")}"${X}/>`})}async function N$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=fZ()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let q=Y.dataset.mermaid,L=RH(q||""),K=h5(L,2),Q=await $(K,{...Z,transparent:!0});Q=hH(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${q.message}`,Y.innerHTML="",Y.appendChild(L),Y.removeAttribute("data-mermaid")}}u_();function sZ(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date-$,Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let L=$.toLocaleDateString(void 0,{weekday:"short"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${K}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${q}`}function $6(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function a_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function O4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function v$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function IE(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),K=Z.startsWith("/")?Z:`${q?`${q}/`:""}${Z}`,Q=[];for(let B of K.split("/")){if(!B||B===".")continue;if(B===".."){if(Q.length>0)Q.pop();continue}Q.push(B)}let V=Q.join("/");return`${e5(V)}${X}${Y}`}function j6(_){return _?.preview||null}function CE(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function fE(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function PE(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${v$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${v$(a_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${v$(O4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${v$(fE($))}</span>`),G.push(`<span><strong>extension:</strong> ${v$(CE(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${v$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function RE(_){let $=j6(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=PE(_,$);if($.kind==="image"){let G=$.url||($.path?e5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${v$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=e_($.text||"",null,{rewriteImageSrc:(Z)=>IE(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${v$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class W7{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=RE(this.context)}getContent(){let _=j6(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=j6(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var O7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=j6(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new W7(_,$)}},z7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return j6(_)||_?.path?1:!1},mount(_,$){return new W7(_,$)}};var SE=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),gE={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},uE={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function tZ(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function aZ(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class eZ{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=tZ(j),X=uE[Z]||"\uD83D\uDCC4",Y=gE[Z]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${aZ(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${aZ(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let L=q.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let K=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class _X{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var J7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=tZ(_?.path);if(!$||!SE.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new eZ(_,$);return new _X(_,$)}};var bE=/\.(csv|tsv)$/i;function $X(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class jX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${$X(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${$X(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class GX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var A7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!bE.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new jX(_,$);return new GX(_,$)}};var vE=/\.pdf$/i;function mE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class ZX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${mE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class XX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!vE.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new ZX(_,$);return new XX(_,$)}};var cE=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function M7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class YX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${M7(Z)}" alt="${M7(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${M7(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class qX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var T7={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!cE.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new YX(_,$);return new qX(_,$)}};var lE=/\.(html|htm)$/i;function LX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class KX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${LX(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${LX(j)}</div>
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
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class VX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var w7={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!lE.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new KX(_,$);return new VX(_,$)}};var hE=/\.(mp4|m4v|mov|webm|ogv)$/i;function pE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class QX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${pE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class BX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y7={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!hE.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new QX(_,$);return new BX(_,$)}};u_();function nE(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function FX(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:q,pollMs:L=3000,ownerDocument:K=document}=_,Q=null,V=null,B=!1,F=!1,H=!1;async function D(){if(F||H||B)return;let O=j();if(!O)return;try{let y=await N7($);if(F||H||!y?.mtime)return;if(y.mtime!==O)B=!0,U(),A()}catch(y){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",y)}}function E(){if(U(),F)return;Q=setInterval(D,L)}function U(){if(Q)clearInterval(Q),Q=null}function A(){if(V||F)return;let O=K.createElement("div");O.className="editor-conflict-bar",O.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,O.addEventListener("click",(y)=>{let I=y.target.closest("[data-action]");if(!I)return;let k=I.getAttribute("data-action");if(k==="reload")z(),X();else if(k==="save-copy"){let J=nE($);Y(J)}else if(k==="overwrite")z(),q();else if(k==="dismiss")z()}),V=O,G.insertBefore(O,Z)}function z(){if(V)V.remove(),V=null;B=!1,E()}return{start(){E()},stop(){U()},onSaved(O){B=!1,H=!1,E()},dispose(){if(F=!0,U(),V)V.remove(),V=null}}}var rE=/\.mindmap\.ya?ml$/i,J2=String(Date.now());function dE(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function NX(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function x7(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function iE(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function oE(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(G)}class UX{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${dE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class HX{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(NX())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,iE("/static/css/mindmap.css?v="+J2),await Promise.all([x7("/static/js/vendor/d3-mindmap.min.js?v="+J2),x7("/static/js/vendor/js-yaml.min.js?v="+J2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),oE(this.mindmapEl);let j=NX(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await x7("/static/js/vendor/mindmap-editor.js?v="+J2),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=FX({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var I7={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!rE.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new UX(_,$);return new HX(_,$)}};class EX{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var a0=new EX;var j5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};x0();function DX(){let[_,$]=C(null),[j,G]=C({text:"",totalLines:0}),[Z,X]=C(""),[Y,q]=C({text:"",totalLines:0}),[L,K]=C(null),[Q,V]=C(null),[B,F]=C(null),H=u(null),D=u(0),E=u(!1),U=u(""),A=u(""),z=u(!1),O=u(0),y=u(null),I=u(null),k=u(null),J=u(null),M=u(!1),W=u(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:q,pendingRequest:L,setPendingRequest:K,currentTurnId:Q,setCurrentTurnId:V,steerQueuedTurnId:B,setSteerQueuedTurnId:F,lastAgentEventRef:H,lastSilenceNoticeRef:D,isAgentRunningRef:E,draftBufferRef:U,thoughtBufferRef:A,previewResyncPendingRef:z,previewResyncGenerationRef:O,pendingRequestRef:y,stalledPostIdRef:I,currentTurnIdRef:k,steerQueuedTurnIdRef:J,thoughtExpandedRef:M,draftExpandedRef:W}}x0();var sE=0.1,AX=4,kX=4,WX=160,OX=1600,zX=200,JX=1600;function U$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function MX(_=U$()){return _>0?Math.floor(_*sE):0}function G6(_,$=U$(),j=0){let G=MX($)+AX+(j>0?kX+Math.max(0,j):0),Z=$>0?Math.floor($-G):OX;return Math.min(Math.max(Number(_)||0,WX),Math.max(WX,Math.min(OX,Z)))}function Z6(_,$=U$(),j=0){let G=MX($)+kX+(j>0?AX+Math.max(0,j):0),Z=$>0?Math.floor($-G):JX;return Math.min(Math.max(Number(_)||0,zX),Math.max(zX,Math.min(JX,Z)))}function TX({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let B=Q.clientX,F=$.current||280,H=Q.currentTarget;H.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=B,E=(A)=>{D=A.clientX;let z=G6(F+(A.clientX-B),U$(),j?.current||0);V.style.setProperty("--sidebar-width",`${z}px`),$.current=z},U=()=>{let A=G6(F+(D-B),U$(),j?.current||0);$.current=A,H.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",V_("sidebarWidth",String(Math.round(A))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",U)}).current,X=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let B=Q.touches[0];if(!B)return;let F=B.clientX,H=$.current||280,D=Q.currentTarget;D.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(A)=>{let z=A.touches[0];if(!z)return;A.preventDefault();let O=G6(H+(z.clientX-F),U$(),j?.current||0);V.style.setProperty("--sidebar-width",`${O}px`),$.current=O},U=()=>{D.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",V_("sidebarWidth",String(Math.round($.current||H))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current,Y=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let B=Q.clientX,F=j.current||$.current||280,H=Q.currentTarget;H.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=B,E=(A)=>{D=A.clientX;let z=Z6(F+(A.clientX-B),U$(),$?.current||0);V.style.setProperty("--editor-width",`${z}px`),j.current=z},U=()=>{let A=Z6(F+(D-B),U$(),$?.current||0);j.current=A,H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",V_("editorWidth",String(Math.round(A))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",U)}).current,q=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let B=Q.touches[0];if(!B)return;let F=B.clientX,H=j.current||$.current||280,D=Q.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let E=(A)=>{let z=A.touches[0];if(!z)return;A.preventDefault();let O=Z6(H+(z.clientX-F),U$(),$?.current||0);V.style.setProperty("--editor-width",`${O}px`),j.current=O},U=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",V_("editorWidth",String(Math.round(j.current||H))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current,L=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let B=Q.clientY,F=G?.current||200,H=Q.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=B,E=(A)=>{D=A.clientY;let z=Math.min(Math.max(F-(A.clientY-B),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${z}px`),G)G.current=z;window.dispatchEvent(new CustomEvent("dock-resize"))},U=()=>{let A=Math.min(Math.max(F-(D-B),100),window.innerHeight*0.5);if(G)G.current=A;H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",V_("dockHeight",String(Math.round(A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",U)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",U)}).current,K=u((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let B=Q.touches[0];if(!B)return;let F=B.clientY,H=G?.current||200,D=Q.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let E=(A)=>{let z=A.touches[0];if(!z)return;A.preventDefault();let O=Math.min(Math.max(H-(z.clientY-F),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${O}px`),G)G.current=O;window.dispatchEvent(new CustomEvent("dock-resize"))},U=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",V_("dockHeight",String(Math.round(G?.current||H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",U),document.removeEventListener("touchcancel",U)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",U),document.addEventListener("touchcancel",U)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:K}}x0();function C7(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var wX=C7("warning",30000),yX=C7("finalize",120000),xX=C7("refresh",30000),IX=30000;function CX(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function X6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function fX(_=30000){let[,$]=C(0);g(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function PX(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function A2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function aE(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function m$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function H$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function k2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return H$(_)?"Compacting context":"Working..."}function RX(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function Y6(_,$=Date.now()){let j=A2(_);if(j===null)return null;return RX(Math.max(0,$-j))}function SX(_,$=Date.now()){let j=aE(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${RX(G)}`}x0();function rY(_={}){p1(_)}function dY(){let[_,$]=C(!1);if(g(()=>{let Z=(Y)=>{let q=G5(Y?.detail?.section);if(q)try{window.__piclawSettingsRequestedSection=q}catch(L){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=M2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=C(null);if(g(()=>{Promise.resolve().then(() => (nY(),pY)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return N`
            <div class="settings-dialog-backdrop" onClick=${()=>$(!1)}>
                <div class="settings-dialog settings-dialog-loading-shell" data-testid="settings-dialog">
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
    `}x0();function HW(_,$){return new URL(String(_||""),$).toString()}function iY(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=f((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},q=HW(Z,window.location.href);if(Y)window.history.replaceState(null,"",q);else window.history.pushState(null,"",q);$(window.location.href)},[]);return{locationParams:X0(()=>new URL(_).searchParams,[_]),navigate:j}}x0();x0();function oY(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function t7(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var EW=400,e7=60,DW=220,_9="mdPreviewHeight";function WW(){return oY(localStorage,_9,e7,DW)}function v2({getContent:_,path:$,onClose:j}){let[G,Z]=C(""),[X,Y]=C(WW),q=u(null),L=u(null),K=u(""),Q=u(_);return Q.current=_,g(()=>{let F=()=>{let D=Q.current?.()||"";if(D===K.current)return;K.current=D;try{let E=e_(D,null);Z(E)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};F();let H=setInterval(F,EW);return()=>clearInterval(H)},[]),g(()=>{if(q.current&&G)N$(q.current).catch((F)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",F,{path:$})})},[G]),N`
        <div
            class="md-preview-splitter"
            onMouseDown=${(F)=>{F.preventDefault();let H=F.clientY,D=L.current?.offsetHeight||X,E=L.current?.parentElement,U=E?E.offsetHeight*0.7:500,A=F.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let z=(y)=>{let I=Math.min(Math.max(D-(y.clientY-H),e7),U);Y(I)},O=()=>{A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",t7(localStorage,_9,L.current?.offsetHeight||X),document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",O)};document.addEventListener("mousemove",z),document.addEventListener("mouseup",O)}}
            onTouchStart=${(F)=>{F.preventDefault();let H=F.touches[0];if(!H)return;let D=H.clientY,E=L.current?.offsetHeight||X,U=L.current?.parentElement,A=U?U.offsetHeight*0.7:500,z=F.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let O=(I)=>{let k=I.touches[0];if(!k)return;I.preventDefault();let J=Math.min(Math.max(E-(k.clientY-D),e7),A);Y(J)},y=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",t7(localStorage,_9,L.current?.offsetHeight||X),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",y)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",y),document.addEventListener("touchcancel",y)}}
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
    `}function sY(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function OW(_){return _==="error"?"Could not open branch window":"Opening branch…"}function aY(_){return N`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${OW(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function tY(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:q,handleTabActivate:L,previewTabs:K,diffTabs:Q,handleTabTogglePreview:V,handleTabToggleDiff:B,editorContainerRef:F,getPaneContent:H,panePopoutPath:D}=_,E=j&&!G&&Z,U=X?`Pane window controls for ${X}`:"Pane window controls";return N`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${E&&N`
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
                ${Y.length>1&&N`
                  <div class="pane-popout-controls-section">
                    <div class="pane-popout-controls-section-title">Open panes</div>
                    <div class="pane-popout-controls-list">
                      ${Y.map((A)=>N`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${A.id===q?" active":""}`}
                          onClick=${(z)=>{L(A.id),z.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${A.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${q&&Q.has(q)&&N`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(A)=>{B(q),A.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${q&&K.has(q)&&N`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(A)=>{V(q),A.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide preview
                  </button>
                `}
              </div>
            </details>
          </div>
        `}
        ${j?N`<div class="editor-pane-host" ref=${F}></div>`:N`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${D||"No pane path provided."}</p>
            </div>
          `}
        ${j&&q&&K.has(q)&&N`
          <${v2}
            getContent=${H}
            path=${q}
            onClose=${()=>V(q)}
          />
        `}
      </div>
    </div>
  `}x0();x0();function m2(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function zW(_,$){let j=m2(_),G=m2($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function Q6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function $9(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function JW(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function AW(_,$,j=0,G=(Z)=>Z){let Z=m2($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=JW(X.length,j),q=X.map((L)=>m2(G(L)));for(let L of Y)if(q[L].startsWith(Z))return L;for(let L of Y)if(q[L].includes(Z))return L;return-1}function j9(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if(zW(X,$))return j}return AW(Z,$,0,G)}u_();function c2(_){return String(_||"").trim().toLowerCase()}function G9(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return c2($[1]||"")}function kW(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=c2(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function eY(_,$,j={}){let G=G9($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return kW(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return c2(X?.agent_name).startsWith(G)})}function Z9(_){let $=c2(_);return $?`@${$} `:""}function _q(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function $q(_,$,j={}){if(!_||_.isComposing)return!1;if(!_q(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function X9(_,$={}){if(!_q($))return!1;return String(_||"")==="@"}function Y9(_){let $=q9(_);return $?`@${$}`:""}function q9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function l2(_,$=""){let j=String(_||""),G=q9(j),Z=q9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function MW(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function h2(_,$={}){let j=Y9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=MW(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function jq(_,$,j){let G=Y9(_),Z=Y9($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function p2({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function n2({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function r2(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";if(_?.type==="intent")return"dot";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function Gq(_,$={}){return r2(_,$)==="dot"}x0();var Zq=350;function TW(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function wW(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let q=TW(j);return{show:!0,statusClass:j,label:q,title:`Connection: ${q}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):Zq,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!0,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function L9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):Zq,[G,Z]=C(null),[X,Y]=C(()=>Date.now());return g(()=>{if(_==="disconnected"){let q=Date.now();Z((L)=>L??q),Y(q);return}Z(null),Y(Date.now())},[_]),g(()=>{if(_!=="disconnected"||G===null)return;let q=j-(Date.now()-G);if(q<=0)return;let L=setTimeout(()=>{Y(Date.now())},q);return()=>clearTimeout(L)},[_,G,j]),X0(()=>wW(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}x0();function k1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let q=`${_}-file-pill`,L=`${_}-file-name`,K=`${_}-file-remove`,Q=Y==="message"?N`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
  `}async function K9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function yW(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function xW(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function V9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=I1(_),Z=yW(_),X=xW(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function Xq(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let q=/[\s\n]$/.test(G)?"":" ";return`${G}${q}${Y}`}function Yq(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let q=String(Y[0].transcript||"").trim();if(!q)continue;if(Y.isFinal)j=`${j} ${q}`.trim();else G=`${G} ${q}`.trim()}return{finalText:j,interimText:G}}function Q9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var IW=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/backend",description:"Show or switch backend (codex|claude|pi)"},{name:"/proactive",description:"Enable, disable, or show proactive Gmail/calendar checks"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"},{name:"/update",description:"Update PiClaw to latest git main"},{name:"/rebuild",description:"Rebuild the NixOS host"},{name:"/fast",description:"Show or set Codex Fast mode"}],qq="piclaw_compose_history";function CW(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function fW(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return qq;return`${qq}:${encodeURIComponent($)}`}function PW(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),q=Boolean(X?.archived_at);if(Y!==q)return Y?1:-1;let L=String(Z?.agent_name||"").trim(),K=String(X?.agent_name||"").trim(),Q=L.localeCompare(K,void 0,{sensitivity:"base"});if(Q!==0)return Q;let V=String(Z?.chat_jid||"").trim(),B=String(X?.chat_jid||"").trim();return V.localeCompare(B,void 0,{sensitivity:"base"})}),G}function RW(_){return Boolean(_?.is_active&&!_?.archived_at)}function SW(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function Lq(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"",Y=Z.length>1;if(X==="/fast")return j;if(!Y&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function gW(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function uW(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function bW(_){return _==="abort"||_==="compacting"}function vW(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!0}}function mW({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G="",compactDisabled:Z=!1,compactDisabledTitle:X=""}){let Y=Math.min(100,Math.max(0,_.percent||0)),q=_.tokens,L=_.contextWindow,K="Compact context",Q=q!=null?`Context: ${B6(q)} / ${B6(L)} tokens (${Y.toFixed(0)}%)`:`Context: ${Y.toFixed(0)}%`,V=typeof j==="string"?j.trim():"",B=typeof G==="string"?G.trim():"",F=V?`${Q} — ${B||"Smart compaction"} · ${V}`:Z?`${Q} — ${X||"Manual compaction unavailable"}`:`${Q} — ${"Compact context"}`,H=9,D=2*Math.PI*9,E=Y/100*D,U=Y>90?"var(--context-red, #ef4444)":Y>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return N`
        <button
            class=${`compose-context-pie icon-btn${V?" is-compacting":""}`}
            type="button"
            title=${F}
            aria-label=${V?`Smart compaction ${V}`:Z?"Manual compaction unavailable":"Compact context"}
            disabled=${Z}
            onClick=${(A)=>{if(A.preventDefault(),A.stopPropagation(),Z)return;$?.()}}
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
                    stroke-dasharray=${`${E} ${D}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${V&&N`<span class="compose-context-pie-timer">${V}</span>`}
        </button>
    `}function B6(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function cW(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function Kq(_,$){let j=Number(_?.contextWindow??_?.context_window),G=cW($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${B6(G)} tokens, but this model only fits ${B6(j)}. Compact first.`,tokens:G,contextWindow:j}}function B9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${B6($)} ctx`}function Vq(_){let $=Number(_);if(!Number.isFinite($))return"";return`${Math.max(0,Math.min(100,Math.round($)))}%`}function lW(_){let $=Vq(_?.primary?.remaining_percent),j=Vq(_?.secondary?.remaining_percent),G=[$,j].filter(Boolean);if(G.length>0)return G.join(" • ");let Z=typeof _?.hint_short==="string"?_.hint_short.trim():"";if(!Z)return"";return Z.split("•").map((X)=>X.trim().split(/\s+/).slice(-1)[0]||"").filter(Boolean).join(" • ")}function Fq(_){let $=typeof _==="string"?_.trim():"",j=$.toLowerCase();for(let G of["codex/","claude/","anthropic/"])if(j.startsWith(G))return $.slice(G.length);return $}function i2(_){let $=Fq(_),j=$.toLowerCase(),G=j.match(/^claude-(?:opus|sonnet)-(\d+)[.-](\d+)/);if(G)return`${G[1]}.${G[2]}`;if(j.includes("gpt-5.4-mini"))return"5.4m";if(j.includes("gpt-5.3-codex-spark"))return"5.3cs";if(j.includes("gpt-5.3-codex"))return"5.3c";let Z=j.match(/^gpt-(\d+)\.(\d+)/);if(Z)return`${Z[1]}.${Z[2]}`;return $}function hW(_){return/^\/model\s*$/i.test(String(_||"").trim())}function pW(_,$){let j=i2(_),G=B9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function nW(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function Nq(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let V=X.trim();if(!V)continue;let B=V.indexOf("/"),F=B>0?V.slice(0,B).trim():"",H=B>0?V.slice(B+1).trim():V;Z.push({label:V,provider:F,id:H,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",q=typeof X.id==="string"?X.id.trim():"",L=nW(X.label,Y,q);if(!L)continue;let K=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,Q=Number(X.context_window??X.contextWindow);Z.push({label:L,provider:Y,id:q,name:K,contextWindow:Number.isFinite(Q)&&Q>0?Q:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function rW(_){if(!_||typeof _!=="object")return"";return[i2(_.label),Fq(_.label),_.label,_.provider,_.id,_.name,B9(_.contextWindow)].filter(Boolean).join(" ")}function dW(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:i2(j),hasAvailableModels:!0};let G=Nq($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function d2(_){return(typeof _==="string"?_.trim():"")||null}function Qq(_){return d2(_)?.toLowerCase()??null}function Bq(_,$){let j=Qq(_),G=Qq($);if(!j||!G)return!1;return j===G||j.endsWith(`/${G}`)||G.endsWith(`/${j}`)}function iW(_,$){let j=$&&typeof $==="object"?$:{},G=d2(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!G)return null;let Z=d2(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(Z&&Bq(G,Z))return null;let X=d2(_??j.current??j.model);if(X&&Z&&!Bq(X,Z))return null;return{label:`Routed: ${G}`,title:Z?`Requested model: ${Z} • Routed model: ${G}`:`Routed model: ${G}`,requestedModel:Z,responseModel:G}}function oW(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let q=j[Z].trim();if(!q){Z+=1;continue}if(q==="Messages:"||q.startsWith("Channel:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(q)){X=!0,Z+=1;let L=[];while(Z<j.length){let K=j[Z],Q=K.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(Q))break;if(Q.startsWith("Channel:")||Q==="Messages:")break;L.push(K.startsWith("  ")?K.slice(2):K),Z+=1}if(L.length>0)G.push(L.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function sW(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function aW(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=sW(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function tW(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Q)Z.push(Q[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function eW(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Attachments:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(V)Z.push({id:V[1],label:(V[2]||"").trim()||`attachment:${V[1]}`,raw:Q})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function Uq(_){let $=oW(_||""),j=aW($||""),G=tW(j.content||""),Z=eW(G.content||"");return{text:Z.content||"",fileRefs:j.fileRefs,messageRefs:G.messageRefs,attachmentRefs:Z.attachmentRefs}}function _O(_){let $=Uq(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function $O(_){let{queuedItem:$,buildDraft:j=_O,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:q,onSetMessageRefs:L,setContent:K,textareaRef:Q,resizeTextarea:V=()=>{},scheduleTimeout:B=(U,A=0)=>setTimeout(U,A),scheduleRaf:F=(U)=>requestAnimationFrame(U),logger:H=console}=_||{};if(!$)return!1;let D=j($?.content||""),E=D.content;return H?.info?.("[compose-box] Returning queued item to editor",{text:E?.slice(0,80),fileRefs:D.fileRefs?.length,messageRefs:D.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),q?.(D.fileRefs),L?.(D.messageRefs),K?.(E),F(()=>{let U=Q?.current;if(!U)return;if(U.value=E,typeof U.dispatchEvent==="function")U.dispatchEvent(new Event("input",{bubbles:!0}));V();let A=E.length;U.selectionStart=A,U.selectionEnd=A,U.focus()}),B(()=>{try{G?.($)}catch(U){H?.warn?.("[compose-box] Failed to remove returned queued follow-up.",U)}},0),!0}function F9({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return N`
        <div class="compose-queue-stack">
            ${_.map((Y,q)=>{let L=typeof Y?.content==="string"?Y.content:"",K=Uq(L);if(!K.text.trim()&&K.fileRefs.length===0&&K.messageRefs.length===0&&K.attachmentRefs.length===0)return null;let Q=q>0,V=q<_.length-1,B=!0;return N`
                    <div class="compose-queue-stack-item" data-testid="queue-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${L}>
                            ${K.text.trim()&&N`<div class="compose-queue-stack-text">${K.text}</div>`}
                            ${(K.messageRefs.length>0||K.fileRefs.length>0||K.attachmentRefs.length>0)&&N`
                                <div class="compose-queue-stack-refs">
                                    ${K.messageRefs.map((F)=>N`
                                        <${k1}
                                            key=${"queue-msg-"+F}
                                            prefix="compose"
                                            label=${"msg:"+F}
                                            title=${"Message reference: "+F}
                                            icon="message"
                                        />
                                    `)}
                                    ${K.fileRefs.map((F)=>{let H=F.split("/").pop()||F;return N`
                                            <${k1}
                                                key=${"queue-file-"+F}
                                                prefix="compose"
                                                label=${H}
                                                title=${F}
                                                onClick=${()=>X?.(F)}
                                            />
                                        `})}
                                    ${K.attachmentRefs.map((F)=>N`
                                        <${k1}
                                            key=${"queue-attachment-"+F.id}
                                            prefix="compose"
                                            label=${F.label}
                                            title=${F.raw}
                                        />
                                    `)}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                            ${_.length>1&&N`
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-up"
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
                                    data-action="move-down"
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
                            ${B&&N`
                                <button
                                    class="compose-queue-stack-move-btn queue-edit"
                                    data-action="edit"
                                    type="button"
                                    title="Edit in compose"
                                    aria-label="Return queued message to editor"
                                    onClick=${(F)=>{F.stopPropagation(),Z?.(Y)}}
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
                                class="compose-queue-stack-close-btn queue-remove"
                                data-action="remove"
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
    `}function Hq({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:q,fileRefs:L=[],onRemoveFileRef:K,onClearFileRefs:Q,messageRefs:V=[],onRemoveMessageRef:B,onClearMessageRefs:F,activeModel:H=null,agentModelsPayload:D=null,modelUsage:E=null,thinkingLevel:U=null,supportsThinking:A=!1,contextUsage:z=null,onContextCompact:O,notificationsEnabled:y=!1,notificationPermission:I="default",onToggleNotifications:k,onModelChange:J,onModelStateChange:M,activeEditorPath:W=null,onAttachEditorFile:T,onOpenFilePill:x,followupQueueItems:P=[],onInjectQueuedFollowup:R,onRemoveQueuedFollowup:v,onMoveQueuedFollowup:c,onSubmitIntercept:h,onMessageResponse:r,isAgentActive:b=!1,activeChatAgents:s=[],currentChatJid:a="web:default",connectionStatus:q0="connected",onSetFileRefs:Z0,onSetMessageRefs:H0,onSubmitError:N0,onSwitchChat:L0,onRenameSession:D0,isRenameSessionInProgress:Q0=!1,onCreateSession:k0,onCreateRootSession:i,onDeleteSession:j0,onPurgeArchivedSession:C0,onRestoreSession:M0,showQueueStack:m0=!0,statusNotice:c0=null,extensionWorkingState:Z_=null,prefillRequest:h0=null}){let[l0,T0]=C(""),[n0,b0]=C(""),[o0,U_]=C(!1),[H_,K_]=C(!1),[g0,J0]=C("or"),[r0,q_]=C([]),[z_,F0]=C(!1),[w0,f0]=C([]),[N_,A_]=C(0),[Q_,X_]=C(!1),D_=u(null),[T_,$0]=C([]),[O0,A0]=C(0),[u0,v0]=C(!1),[e,o]=C(!1),[d,Y0]=C(!1),[G0,E0]=C(!1),[I0,t0]=C([]),[z0,R0]=C(0),[e0,L_]=C(0),[j_,F_]=C(!1),[k_,__]=C(!1),[_0,W0]=C(0),[s0,d0]=C(null),[f_,W_]=C(null),[x_,i1]=C(()=>V9()),[J_,d_]=C({kind:"idle",title:"",detail:""}),[O1,v_]=C(()=>Date.now()),[n_,q1]=C(0),$_=u(null),m_=u(null),i_=u(null),L1=u(null),M1=u(null),o1=u(null),z$=u(null),F1=u(null),o_=u({value:"",updatedAt:0}),r_=u(null),t$=u(""),j1=u(""),N1=u(""),K1=u(""),s1=u(!1),U1=u(0),J$=u(!1),w6=200,A$=fW(a),I_=(w)=>{let m=new Set,n=[];for(let V0 of w||[]){if(typeof V0!=="string")continue;let S0=V0.trim();if(!S0||m.has(S0))continue;m.add(S0),n.push(S0)}return n},T1=(w=A$)=>{let m=B1(w);if(!m)return[];try{let n=JSON.parse(m);if(!Array.isArray(n))return[];return I_(n)}catch{return[]}},J5=(w,m=A$)=>{V_(m,JSON.stringify(w))},R1=u(T1(A$)),S1=u(-1),a1=u(""),I4=u("");g(()=>{R1.current=T1(A$),S1.current=-1,a1.current=""},[A$]),g(()=>{if(!j)return;fetch("/agent/settings-data").then((w)=>w.json()).then((w)=>{if(w?.searchMatchMode)J0(w.searchMatchMode)}).catch(()=>{})},[j]),g(()=>{let w=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(a||"web:default")}`).then((n)=>n.ok?n.json():null).then((n)=>{if(w||!n?.commands)return;D_.current=n.commands.map((V0)=>({name:V0.name,description:V0.description||""}))}).catch((n)=>{console.debug("[compose] failed to fetch dynamic commands",n)}),()=>{w=!0}},[a]),g(()=>{let w=CW(h0,I4.current,j);if(!w.shouldApply)return;I4.current=w.nextToken,d0(null),T0(w.text),i0(w.text),s_(w.text),requestAnimationFrame(()=>{B0();let m=$_.current;if(!m)return;try{m.focus({preventScroll:!0})}catch{m.focus()}let n=w.text.length;m.setSelectionRange?.(n,n)})},[h0,j]),g(()=>{i1(V9())},[]);let k$=l0.trim()||r0.length>0||L.length>0||V.length>0,A5=J_.kind!=="idle",k5=J_.kind==="requesting_permission"||J_.kind==="listening",C4=!j&&Boolean(x_?.showButton),e$=J_.kind==="requesting_permission"||J_.kind==="listening",G1=e$?"Stop voice input":x_?.title||"Voice input",P_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),M5=typeof window<"u"&&typeof Notification<"u",t1=typeof window<"u"?Boolean(window.isSecureContext):!1,T5=M5&&t1&&I!=="denied",f4=I==="granted"&&y,z1=H$(c0),M$=k2(c0),w1=typeof c0?.detail==="string"&&c0.detail.trim()?c0.detail.trim():"",T$=z1?Y6(c0,O1):null,e1=vW(Z_,n_),Z1=Z_?.indicator&&typeof Z_.indicator==="object"?Z_.indicator:null,_4=f4?"Disable notifications":"Enable notifications",w5=r0.length>0||L.length>0||V.length>0,_$=L9(q0),P4=_$.label,X1=_$.title,w$=gW(b,k$,z1),$$=uW(b,z1),y5=(Array.isArray(s)?s:[]).filter((w)=>!w?.archived_at),R_=(()=>{for(let w of Array.isArray(s)?s:[]){let m=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(m&&m===a)return w}return null})(),R4=Boolean(R_&&R_.chat_jid===(R_.root_chat_jid||R_.chat_jid)),g8=Boolean(R4&&(R_?.chat_jid||a)==="web:default"),y1=(()=>{let w=typeof R_?.parent_branch_id==="string"?R_.parent_branch_id.trim():"",m=typeof R_?.branch_id==="string"?R_.branch_id.trim():"";if(!R_||!w||!m||R_.archived_at)return null;if((Array.isArray(s)?s:[]).filter((S0)=>{let E_=typeof S0?.parent_branch_id==="string"?S0.parent_branch_id.trim():"";return E_&&E_===m}).length>0)return null;return(Array.isArray(s)?s:[]).find((S0)=>{let E_=typeof S0?.branch_id==="string"?S0.branch_id.trim():"";return E_&&E_===w&&!S0?.archived_at})||null})(),S4=X0(()=>PW(s,a),[s,a]),j$=S4.length>0,y$=j$&&typeof L0==="function",x$=j$&&typeof M0==="function",g4=Boolean(Q0||J$.current),x1=!j&&typeof D0==="function"&&!g4,G$=!j&&typeof k0==="function",$4=!j&&typeof i==="function",j4=!j&&!b&&!k_&&Boolean(y1?.chat_jid),Z$=!j&&typeof j0==="function"&&!g8,x6=!j&&typeof C0==="function",X$=!j&&(y$||x$||x1||G$||$4||j4||Z$||x6),I6=dW(H,D),x5=I6.showPicker,I5=I6.label,u8=typeof D?.fast_mode==="boolean"?D.fast_mode:null,C5=A&&U?` (${U})`:"",b8=C5.trim()?`${U}`:"",C6=u8===!0?"Fast on":null,f6=iW(H,D),S=lW(E)||(typeof E?.hint_short==="string"?E.hint_short.trim():""),l=typeof E?.extra_usage?.reset_description==="string"?E.extra_usage.reset_description.trim():"",p=[b8||null,C6||null,f6?.label||null,S||null].filter(Boolean).join(" • "),t=Boolean(p),U0=[H?`Current model: ${I5}${C5}`:null,f6?.title||null,E?.plan?`Plan: ${E.plan}`:null,S||null,C6,E?.primary?.reset_description||null,E?.secondary?.reset_description||null,l||null].filter(Boolean),K0=e?"Switching model…":U0.join(" • ")||(x5?"Select a model (tap to open model picker)":`Current model: ${I5}${C5} (tap to open model picker)`),y0=!j&&(x5||z&&z.percent!=null),P0=(w)=>{if(!w||typeof w!=="object")return;let m=w.model??w.current;if(typeof M==="function")M({...w,model:m??null,thinking_level:w.thinking_level??null,thinking_level_label:w.thinking_level_label??null,fast_mode:w.fast_mode??null,supports_thinking:w.supports_thinking,provider_usage:w.provider_usage??null});if(m&&typeof J==="function")J(m)},B0=(w)=>{let m=w||$_.current;if(!m)return;m.style.height="auto",m.style.height=`${m.scrollHeight}px`,m.style.overflowY="hidden"},i0=(w)=>{if(!w.startsWith("/")||w.includes(`
`)){X_(!1),f0([]);return}let m=w.toLowerCase().split(" ")[0];if(m.length<1){X_(!1),f0([]);return}let V0=(D_.current||IW).filter((S0)=>S0.name.startsWith(m)||S0.name.replace(/-/g,"").startsWith(m.replace(/-/g,"")));if(V0.length>0&&!(V0.length===1&&V0[0].name===m))v0(!1),$0([]),f0(V0),A_(0),X_(!0);else X_(!1),f0([])},l_=(w)=>{let m=l0,n=m.indexOf(" "),V0=n>=0?m.slice(n):"",S0=w.name+V0;T0(S0),X_(!1),f0([]),requestAnimationFrame(()=>{let E_=$_.current;if(!E_)return;let S_=S0.length;E_.selectionStart=S_,E_.selectionEnd=S_,E_.focus()})},s_=(w)=>{if(X9(w,{searchMode:j,showSessionSwitcherButton:X$})){v0(!1),$0([]);return}if(G9(w)==null){v0(!1),$0([]);return}let m=eY(y5,w,{currentChatJid:a});if(m.length>0&&!(m.length===1&&Z9(m[0].agent_name).trim().toLowerCase()===String(w||"").trim().toLowerCase()))X_(!1),f0([]),$0(m),A0(0),v0(!0);else v0(!1),$0([])},I$=(w)=>{let m=Z9(w?.agent_name);if(!m)return;T0(m),v0(!1),$0([]),requestAnimationFrame(()=>{let n=$_.current;if(!n)return;let V0=m.length;n.selectionStart=V0,n.selectionEnd=V0,n.focus()})},P6=()=>{if(j||!y$&&!x$&&!x1&&!G$&&!Z$)return!1;return o_.current={value:"",updatedAt:0},Y0(!1),X_(!1),f0([]),v0(!1),$0([]),E0(!0),!0},kj=(w)=>{if(w?.preventDefault?.(),w?.stopPropagation?.(),j||!y$&&!x$&&!x1&&!G$&&!Z$)return;if(G0){o_.current={value:"",updatedAt:0},E0(!1);return}P6()},Mj=(w)=>{let m=typeof w==="string"?w.trim():"";if(E0(!1),!m||m===a){requestAnimationFrame(()=>$_.current?.focus());return}L0?.(m)},Tj=async(w)=>{let m=typeof w==="string"?w.trim():"";if(E0(!1),!m||typeof M0!=="function"){requestAnimationFrame(()=>$_.current?.focus());return}try{await M0(m)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>$_.current?.focus())}},h_=X0(()=>{let w=[];for(let m of S4){let n=Boolean(m?.archived_at),V0=typeof m?.agent_name==="string"?m.agent_name.trim():"",S0=typeof m?.chat_jid==="string"?m.chat_jid.trim():"";if(!V0||!S0)continue;w.push({type:"session",key:`session:${S0}`,label:`@${V0} — ${S0}${m?.is_active?" active":""}${n?" archived":""}`,chat:m,disabled:n?!x$:!y$})}if(G$)w.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if($4)w.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(y1?.chat_jid)w.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!j4});if(x1)w.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:g4});if(Z$)w.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return w},[S4,x$,y$,G$,$4,y1,j4,x1,Z$,g4]),wj=async(w)=>{if(w?.preventDefault)w.preventDefault();if(w?.stopPropagation)w.stopPropagation();if(typeof D0!=="function"||Q0||J$.current)return;J$.current=!0,E0(!1);try{await D0()}catch(m){console.warn("Failed to rename session:",m)}finally{J$.current=!1}requestAnimationFrame(()=>$_.current?.focus())},yj=async()=>{if(typeof k0!=="function")return;E0(!1);try{await k0()}catch(w){console.warn("Failed to create session:",w)}requestAnimationFrame(()=>$_.current?.focus())},xj=async()=>{if(typeof i!=="function")return;E0(!1);let w=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",m=String(w||"").trim();if(!m){requestAnimationFrame(()=>$_.current?.focus());return}try{await i(m)}catch(n){console.warn("Failed to create root session:",n)}requestAnimationFrame(()=>$_.current?.focus())},Ij=async()=>{let w=typeof y1?.chat_jid==="string"?y1.chat_jid.trim():"";if(!w||k_||b)return;E0(!1),d0(null),W_(null),__(!0);try{let m=await D1("default","/rollup",null,[],null,a);r?.(m),_?.(m);let n=m?.command;if(n?.status==="error"){let S0=n?.message||"Failed to merge current session with parent.";d0(S0),N0?.(S0);return}let V0=typeof n?.rolled_up_to==="string"&&n.rolled_up_to.trim()?n.rolled_up_to.trim():w;L0?.(V0)}catch(m){let n=m?.message||"Failed to merge current session with parent.";d0(n),N0?.(n),console.warn("Failed to merge session with parent:",m)}finally{__(!1)}requestAnimationFrame(()=>$_.current?.focus())},Cj=async()=>{if(typeof j0!=="function")return;E0(!1);try{await j0(a)}catch(w){console.warn("Failed to delete session:",w)}requestAnimationFrame(()=>$_.current?.focus())},C$=(w)=>{if(j)b0(w);else T0(w),i0(w),s_(w);requestAnimationFrame(()=>B0())},FF=(w)=>{let m=j?n0:l0,n=m&&!m.endsWith(`
`)?`
`:"",V0=`${m}${n}${w}`.trimStart();C$(V0)},v8=f(()=>{requestAnimationFrame(()=>{let w=$_.current;if(!w)return;try{w.focus({preventScroll:!0})}catch{w.focus()}})},[]),g1=f(()=>{d_({kind:"idle",title:"",detail:""})},[]),m8=f((w=j1.current,m=N1.current)=>{if(j)return;C$(Xq(t$.current,w,m))},[j]),f$=f(()=>{s1.current=!0;let w=r_.current;if(!w){g1();return}try{w.stop()}catch{r_.current=null,g1()}},[g1]),NF=f(()=>{if(d0(null),W_(null),r_.current){f$();return}if(!x_?.showButton)return;if(x_.mode==="fallback"){v8(),d_({kind:"guidance",title:x_.title||"Use keyboard dictation",detail:x_.detail||"Use your keyboard dictation mic for voice input here."});return}if(!x_?.canStart||!x_?.recognitionCtor){d_({kind:"error",title:x_?.title||"Voice input unavailable",detail:x_?.detail||"This browser does not expose native speech recognition in this context."});return}try{let w=new x_.recognitionCtor;if(r_.current=w,t$.current=String(l0||""),j1.current="",N1.current="",K1.current="",s1.current=!1,w.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",w.interimResults=!0,w.continuous=!1,"maxAlternatives"in w)w.maxAlternatives=1;w.onstart=()=>{d_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},w.onresult=(m)=>{let{finalText:n,interimText:V0}=Yq(m?.results,m?.resultIndex||0);if(n)j1.current=`${j1.current} ${n}`.trim();N1.current=V0,m8(),d_({kind:"listening",title:"Listening…",detail:V0?`Heard: ${V0}`:"Speak now. Tap the mic again to stop."})},w.onerror=(m)=>{let n=String(m?.error||"").trim();if(K1.current=n,r_.current=null,N1.current="",n==="aborted"){g1();return}d_({kind:"error",title:"Voice input failed",detail:Q9(n,x_)})},w.onend=()=>{let m=K1.current,n=s1.current,V0=Boolean(j1.current.trim()||N1.current.trim());if(r_.current=null,s1.current=!1,K1.current="",N1.current.trim())j1.current=`${j1.current} ${N1.current}`.trim(),N1.current="";if(V0)m8(j1.current,"");if(m&&m!=="aborted")return;if(!V0&&!n){d_({kind:"error",title:"No speech detected",detail:Q9("no-speech",x_)});return}g1()},d_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),v8(),w.start()}catch(w){r_.current=null,d_({kind:"error",title:"Voice input failed",detail:w?.message||"Could not start native browser speech recognition."})}},[m8,g1,l0,v8,x_,f$]),UF=(w)=>{let m=w?.command?.model_label;if(m)return m;let n=w?.command?.message;if(typeof n==="string"){let V0=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(V0?.[1])return V0[1].trim()}return null},fj=async(w)=>{if(j||e)return;d0(null),W_(null),o(!0);try{let m=await D1("default",w,null,[],null,a),n=UF(m);return P0({model:n??H??null,thinking_level:m?.command?.thinking_level,thinking_level_label:m?.command?.thinking_level_label,fast_mode:m?.command?.fast_mode,supports_thinking:m?.command?.supports_thinking}),await K9(W4,a,P0),W_(Lq(w,m)),_?.(m),!0}catch(m){return console.error("Failed to switch model:",m),alert("Failed to switch model: "+m.message),!1}finally{o(!1)}},HF=async()=>{await fj("/cycle-model")},c8=async(w)=>{let m=typeof w==="string"?w:typeof w?.label==="string"?w.label:"";if(!m||e)return;let n=Kq(w,z);if(n.blocked){d0(null),W_(n.note);return}if(await fj(`/model ${m}`))Y0(!1)},EF=(w)=>{if(!w||w.disabled)return;if(w.type==="session"){let m=w.chat;if(m?.archived_at)Tj(m.chat_jid);else Mj(m.chat_jid);return}if(w.type==="action"){if(w.action==="new"){yj();return}if(w.action==="new-root"){xj();return}if(w.action==="rollup"){Ij();return}if(w.action==="rename"){wj();return}if(w.action==="delete")Cj()}},DF=(w)=>{w.preventDefault(),w.stopPropagation(),o_.current={value:"",updatedAt:0},E0(!1),Y0((m)=>!m)},WF=async()=>{if(j)return;O?.(),await u4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},OF=(w)=>{if(w==="queue"||w==="steer"||w==="auto")return w;return b?"queue":void 0},u4=async(w,m,n={})=>{let V0=typeof w==="string"?w:l0;if(/^\/settings\s*$/i.test(V0.trim())){T0(""),requestAnimationFrame(()=>B0()),p1();return}if(/^\/help\s*$/i.test(V0.trim())){T0(""),requestAnimationFrame(()=>B0()),p1({section:"keyboard"});return}if(hW(V0)){T0(""),requestAnimationFrame(()=>B0()),o_.current={value:"",updatedAt:0},E0(!1),X_(!1),f0([]),v0(!1),$0([]),d0(null),W_(null),Y0(!0);return}let{includeMedia:S0=!0,includeFileRefs:E_=!0,includeMessageRefs:S_=!0,clearAfterSubmit:M_=!0,recordHistory:u1=!0}=n||{},H1=typeof w==="string"?w:w&&typeof w?.target?.value==="string"?w.target.value:l0,Pj=typeof H1==="string"?H1:"";if(!Pj.trim()&&(S0?r0.length===0:!0)&&(E_?L.length===0:!0)&&(S_?V.length===0:!0))return;if(r_.current)f$();g1(),X_(!1),f0([]),v0(!1),$0([]),E0(!1),d0(null),W_(null);let R6=S0?[...r0]:[],S6=E_?[...L]:[],g6=S_?[...V]:[],G4=Pj.trim();if(u1&&G4){let Z4=R1.current,V1=I_(Z4.filter((h8)=>h8!==G4));if(V1.push(G4),V1.length>200)V1.splice(0,V1.length-200);R1.current=V1,J5(V1),S1.current=-1,a1.current=""}let RF=()=>{if(S0)q_([...R6]);if(E_)Z0?.(S6);if(S_)H0?.(g6);T0(G4),requestAnimationFrame(()=>B0())};if(M_)T0(""),q_([]),Q?.(),F?.();(async()=>{try{let Z4=await h?.({content:G4,submitMode:m,fileRefs:S6,messageRefs:g6,mediaFiles:R6});if(Z4){_?.(Z4);return}let V1=[];for(let X4 of R6){let u6=await X7(X4);V1.push(u6.id)}let h8=S6.length?`Files:
${S6.map((X4)=>`- ${X4}`).join(`
`)}`:"",SF=g6.length?`Referenced messages:
${g6.map((X4)=>`- message:${X4}`).join(`
`)}`:"",gF=V1.length?`Attachments:
${V1.map((X4,u6)=>{let bF=R6[u6]?.name||`attachment-${u6+1}`;return`- attachment:${X4} (${bF})`}).join(`
`)}`:"",uF=[G4,h8,SF,gF].filter(Boolean).join(`

`),Y$=await D1("default",uF,null,V1,OF(m),a);if(r?.(Y$),Y$?.command)P0({model:Y$.command.model_label??H??null,thinking_level:Y$.command.thinking_level,thinking_level_label:Y$.command.thinking_level_label,fast_mode:Y$.command.fast_mode,supports_thinking:Y$.command.supports_thinking}),await K9(W4,a,P0);W_(Lq(G4,Y$)),_?.(Y$)}catch(Z4){if(M_)RF();let V1=Z4?.message||"Failed to send message.";d0(V1),N0?.(V1),console.error("Failed to post:",Z4)}})()},zF=(w)=>{R?.(w)},JF=f((w)=>{$O({queuedItem:w,onRemoveQueuedFollowup:v,setSubmitError:d0,setSubmitNotice:W_,setMediaFiles:q_,onSetFileRefs:Z0,onSetMessageRefs:H0,setContent:T0,textareaRef:$_,resizeTextarea:B0})},[v,Z0,H0,B0]),f5=f((w)=>{if(j||!d&&!G0||w?.isComposing)return!1;let m=()=>{w.preventDefault?.(),w.stopPropagation?.()},n=()=>{o_.current={value:"",updatedAt:0}};if(w.key==="Escape"){if(m(),n(),d)Y0(!1);if(G0)E0(!1);return!0}if(d){if(w.key==="ArrowDown"){if(m(),n(),I0.length>0)R0((V0)=>(V0+1)%I0.length);return!0}if(w.key==="ArrowUp"){if(m(),n(),I0.length>0)R0((V0)=>(V0-1+I0.length)%I0.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&I0.length>0)return m(),n(),c8(I0[Math.max(0,Math.min(z0,I0.length-1))]),!0;if(Q6(w)&&I0.length>0){m();let V0=$9(o_.current,w.key);o_.current=V0;let S0=j9(I0,V0.value,z0,(E_)=>rW(E_));if(S0>=0)R0(S0);return!0}}if(G0){if(w.key==="ArrowDown"){if(m(),n(),h_.length>0)L_((V0)=>(V0+1)%h_.length);return!0}if(w.key==="ArrowUp"){if(m(),n(),h_.length>0)L_((V0)=>(V0-1+h_.length)%h_.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&h_.length>0)return m(),n(),EF(h_[Math.max(0,Math.min(e0,h_.length-1))]),!0;if(Q6(w)&&h_.length>0){m();let V0=$9(o_.current,w.key);o_.current=V0;let S0=j9(h_,V0.value,e0,(E_)=>E_.label);if(S0>=0)L_(S0);return!0}}return!1},[j,d,G0,I0,z0,h_,e0,c8]),AF=(w)=>{if(w.isComposing)return;if(j&&w.key==="Escape"){w.preventDefault(),b0(""),q?.();return}if(f5(w))return;let m=$_.current?.value??(j?n0:l0);if($q(w,m,{searchMode:j,showSessionSwitcherButton:X$})){w.preventDefault(),P6();return}if(u0&&T_.length>0){let n=$_.current?.value??(j?n0:l0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))v0(!1),$0([]);else{if(w.key==="ArrowDown"){w.preventDefault(),A0((V0)=>(V0+1)%T_.length);return}if(w.key==="ArrowUp"){w.preventDefault(),A0((V0)=>(V0-1+T_.length)%T_.length);return}if(w.key==="Tab"||w.key==="Enter"){w.preventDefault(),I$(T_[O0]);return}if(w.key==="Escape"){w.preventDefault(),v0(!1),$0([]);return}}}if(Q_&&w0.length>0){let n=$_.current?.value??(j?n0:l0);if(!String(n||"").startsWith("/"))X_(!1),f0([]);else{if(w.key==="ArrowDown"){w.preventDefault(),A_((V0)=>(V0+1)%w0.length);return}if(w.key==="ArrowUp"){w.preventDefault(),A_((V0)=>(V0-1+w0.length)%w0.length);return}if(w.key==="Tab"){w.preventDefault(),l_(w0[N_]);return}if(w.key==="Enter"&&!w.shiftKey){if(!m.includes(" ")){w.preventDefault();let S0=w0[N_];X_(!1),f0([]),u4(S0.name);return}}if(w.key==="Escape"){w.preventDefault(),X_(!1),f0([]);return}}}if(!j&&(w.key==="ArrowUp"||w.key==="ArrowDown")&&!w.metaKey&&!w.ctrlKey&&!w.altKey&&!w.shiftKey){let n=$_.current;if(!n)return;let V0=n.value||"",S0=n.selectionStart===0&&n.selectionEnd===0,E_=n.selectionStart===V0.length&&n.selectionEnd===V0.length;if(w.key==="ArrowUp"&&S0||w.key==="ArrowDown"&&E_){let S_=R1.current;if(!S_.length)return;w.preventDefault();let M_=S1.current;if(w.key==="ArrowUp"){if(M_===-1)a1.current=V0,M_=S_.length-1;else if(M_>0)M_-=1;S1.current=M_,C$(S_[M_]||"")}else{if(M_===-1)return;if(M_<S_.length-1)M_+=1,S1.current=M_,C$(S_[M_]||"");else S1.current=-1,C$(a1.current||""),a1.current=""}requestAnimationFrame(()=>{let u1=$_.current;if(!u1)return;let H1=u1.value.length;u1.selectionStart=H1,u1.selectionEnd=H1});return}}if(w.key==="Enter"&&!w.shiftKey&&(w.ctrlKey||w.metaKey)){if(w.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:o0,attachments:H_})}else u4(m,"steer");return}if(w.key==="Enter"&&!w.shiftKey){if(w.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:o0,attachments:H_})}else u4(m);return}if(w.key==="Escape"){if(d||G0||Q_||u0)return;w.preventDefault(),$_.current?.blur()}},l8=(w)=>{let m=Array.from(w||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!m.length)return;q_((n)=>[...n,...m]),d0(null)},kF=(w)=>{l8(w.target.files),w.target.value=""},MF=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),U1.current+=1,F0(!0)},TF=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),U1.current=Math.max(0,U1.current-1),U1.current===0)F0(!1)},wF=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),w.dataTransfer)w.dataTransfer.dropEffect="copy";F0(!0)},yF=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),U1.current=0,F0(!1),l8(w.dataTransfer?.files||[])},xF=(w)=>{if(j)return;let m=w.clipboardData?.items;if(!m||!m.length)return;let n=[];for(let V0 of m){if(V0.kind!=="file")continue;let S0=V0.getAsFile?.();if(S0)n.push(S0)}if(n.length>0)w.preventDefault(),l8(n)},IF=(w)=>{q_((m)=>m.filter((n,V0)=>V0!==w))},CF=()=>{d0(null),q_([]),Q?.(),F?.()},fF=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((w)=>{let{latitude:m,longitude:n,accuracy:V0}=w.coords,S0=`${m.toFixed(5)}, ${n.toFixed(5)}`,E_=Number.isFinite(V0)?` ±${Math.round(V0)}m`:"",S_=`https://maps.google.com/?q=${m},${n}`,M_=`Location: ${S0}${E_} ${S_}`;FF(M_)},(w)=>{let m=w?.message||"Unable to retrieve location.";alert(`Location error: ${m}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!d)return;o_.current={value:"",updatedAt:0},F_(!0),W4(a).then((w)=>{t0(Nq(w)),P0(w)}).catch((w)=>{console.warn("Failed to load model list:",w),t0([])}).finally(()=>{F_(!1)})},[d,H]),g(()=>{if(j)Y0(!1),E0(!1),X_(!1),f0([]),v0(!1),$0([])},[j]),g(()=>{if(G0&&!X$)E0(!1)},[G0,X$]),g(()=>{if(!d)return;let w=I0.findIndex((m)=>m?.label===H);R0(w>=0?w:0)},[d,I0,H]),g(()=>{if(!G0)return;L_(SW(h_,a)),o_.current={value:"",updatedAt:0}},[G0,a,h_]),g(()=>{if(!d)return;let w=(m)=>{let n=L1.current,V0=M1.current,S0=m.target;if(n&&n.contains(S0))return;if(V0&&V0.contains(S0))return;Y0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[d]),g(()=>{if(!G0)return;let w=(m)=>{let n=o1.current,V0=z$.current,S0=m.target;if(n&&n.contains(S0))return;if(V0&&V0.contains(S0))return;E0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[G0]),g(()=>{if(j||!d&&!G0)return;let w=(m)=>{f5(m)};return document.addEventListener("keydown",w,!0),()=>document.removeEventListener("keydown",w,!0)},[j,d,G0,f5]),g(()=>{if(!d)return;let w=L1.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[d,z0,I0]),g(()=>{if(!G0)return;let w=o1.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[G0,e0,h_.length]),g(()=>{if(!u0||!i_.current)return;i_.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[u0,O0,T_.length]),g(()=>{if(!Q_||!m_.current)return;m_.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[Q_,N_,w0.length]),g(()=>{let w=(n)=>{if(!n||typeof n!=="object")return!1;if(n.isContentEditable)return!0;if(typeof n.closest!=="function")return!1;return Boolean(n.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},m=(n)=>{if(n.ctrlKey||n.metaKey||n.altKey)return;let V0=$_.current;if(!V0)return;let S0=document.activeElement===V0;if(n.key==="Escape"&&!S0&&!w(n.target)){n.preventDefault(),V0.focus();return}if(n.key==="/"&&!S0&&!w(n.target))n.preventDefault(),C$("/"),requestAnimationFrame(()=>{V0.focus(),V0.selectionStart=1,V0.selectionEnd=1,i0("/")})};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]),g(()=>{let w=()=>{let E_=F1.current?.clientWidth||0;W0((S_)=>S_===E_?S_:E_)};w();let m=F1.current,n=0,V0=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,w()})},S0=null;if(m&&typeof ResizeObserver<"u")S0=new ResizeObserver(()=>V0()),S0.observe(m);if(typeof window<"u")window.addEventListener("resize",V0);return()=>{if(n)cancelAnimationFrame(n);if(S0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",V0)}},[j,H,R_?.agent_name,X$,z?.percent]);let PF=(w)=>{let m=w.target.value;if(r_.current&&w?.isTrusted)f$();if(d0(null),W_(null),J_.kind==="guidance"||J_.kind==="error")g1();if(G0)E0(!1);if(B0(w.target),X9(m,{searchMode:j,showSessionSwitcherButton:X$})){C$(""),requestAnimationFrame(()=>{let n=$_.current;if(!n)return;n.value="",n.selectionStart=0,n.selectionEnd=0,n.focus()}),P6();return}C$(m)};return g(()=>{requestAnimationFrame(()=>B0())},[l0,n0,j]),g(()=>{if(!j)return;if(r_.current)f$();return},[j,f$]),g(()=>{if(r_.current)f$();g1()},[a,g1,f$]),g(()=>{return()=>{if(!r_.current)return;try{r_.current.stop()}catch(w){console.debug("[compose] failed to stop speech recognition during cleanup",w)}r_.current=null}},[]),g(()=>{if(!z1)return;v_(Date.now());let w=setInterval(()=>v_(Date.now()),1000);return()=>clearInterval(w)},[z1,c0?.started_at,c0?.startedAt]),g(()=>{if(q1(0),Z1?.mode!=="custom"||!Array.isArray(Z1.frames)||Z1.frames.length<=1)return;let w=typeof Z1.intervalMs==="number"&&Number.isFinite(Z1.intervalMs)&&Z1.intervalMs>0?Z1.intervalMs:120,m=setInterval(()=>{q1((n)=>(n+1)%Z1.frames.length)},w);return()=>clearInterval(m)},[Z1]),g(()=>{if(j)return;s_(l0)},[y5,a,l0,j]),N`
        <div class="compose-box" data-testid="compose-box">
            ${A5&&N`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${J_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${n2({pulsing:k5})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${J_.title}</span>
                    </div>
                    ${J_.detail&&N`<div class="compose-inline-status-detail">${J_.detail}</div>`}
                </div>
            `}
            ${m0&&!j&&N`
                <${F9}
                    items=${P}
                    onInjectQueuedFollowup=${zF}
                    onRemoveQueuedFollowup=${v}
                    onMoveQueuedFollowup=${c}
                    onReturnQueuedFollowup=${JF}
                    onOpenFilePill=${x}
                />
            `}
            ${e1.visible&&N`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${e1.indicatorText?N`<span class="compose-inline-status-glyph" aria-hidden="true">${e1.indicatorText}</span>`:e1.animateDot?N`<span class=${n2({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${e1.title}</span>
                    </div>
                </div>
            `}
            ${c0&&!z1&&N`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${w1||""}
                >
                    <div class="compose-inline-status-row">
                        <span class=${n2({pulsing:!1})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${M$}</span>
                        ${T$&&N`<span class="compose-inline-status-elapsed">${T$}</span>`}
                    </div>
                    ${w1&&N`<div class="compose-inline-status-detail">${w1}</div>`}
                </div>
            `}
            ${f_&&N`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:e_(f_)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${z_?" drag-active":""}`}
                onDragEnter=${MF}
                onDragOver=${wF}
                onDragLeave=${TF}
                onDrop=${yF}
            >
                <div class="compose-input-main">
                    ${w5&&N`
                        <div class="compose-file-refs">
                            ${V.map((w)=>{return N`
                                    <${k1}
                                        key=${"msg-"+w}
                                        prefix="compose"
                                        label=${"msg:"+w}
                                        title=${"Message reference: "+w}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>B?.(w)}
                                    />
                                `})}
                            ${L.map((w)=>{let m=w.split("/").pop()||w;return N`
                                    <${k1}
                                        prefix="compose"
                                        label=${m}
                                        title=${w}
                                        onClick=${()=>x?.(w)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>K?.(w)}
                                    />
                                `})}
                            ${r0.map((w,m)=>{let n=w?.name||`attachment-${m+1}`;return N`
                                    <${k1}
                                        key=${n+m}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>IF(m)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${CF}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${$_}
                        data-testid="compose-input"
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?n0:l0}
                        onInput=${PF}
                        onKeyDown=${AF}
                        onPaste=${xF}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${u0&&T_.length>0&&N`
                        <div class="slash-autocomplete" ref=${i_}>
                            ${T_.map((w,m)=>N`
                                <div
                                    key=${w.chat_jid||w.agent_name}
                                    class=${`slash-item${m===O0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),I$(w)}}
                                    onMouseEnter=${()=>A0(m)}
                                >
                                    <span class="slash-name">@${w.agent_name}</span>
                                    <span class="slash-desc">${w.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${Q_&&w0.length>0&&N`
                        <div class="slash-autocomplete" ref=${m_}>
                            ${w0.map((w,m)=>N`
                                <div
                                    key=${w.name}
                                    class=${`slash-item${m===N_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),l_(w)}}
                                    onMouseEnter=${()=>A_(m)}
                                >
                                    <span class="slash-name">${w.name}</span>
                                    <span class="slash-desc">${w.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${d&&!j&&N`
                        <div class="compose-model-popup" ref=${L1} tabIndex="-1" onKeyDown=${f5}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${j_&&N`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!j_&&I0.length===0&&N`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!j_&&I0.map((w,m)=>{let n=typeof w?.label==="string"?w.label:"",V0=i2(n),S0=B9(w?.contextWindow),E_=typeof w?.name==="string"?w.name.trim():"",S_=E_&&E_!==V0?E_:null,M_=Kq(w,z);return N`
                                        <button
                                            key=${n}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${z0===m?" active":""}${H===n?" current-model":""}${M_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{c8(w)}}
                                            disabled=${e||M_.blocked}
                                            title=${[V0,S_,S0,M_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${pW(n,w?.contextWindow)}${S_?N` <span class="compose-model-popup-model-subtitle">${S_}</span>`:""}</span>
                                                ${M_.blocked&&N`<span class="compose-model-popup-model-note">${M_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{HF()}}
                                    disabled=${e}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${G0&&!j&&N`
                        <div class="compose-model-popup" data-testid="session-popup" ref=${o1} tabIndex="-1" onKeyDown=${f5}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!j$&&N`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${j$&&S4.map((w,m)=>{let n=Boolean(w.archived_at),V0=w.chat_jid===(w.root_chat_jid||w.chat_jid),S0=!V0&&!w.is_active&&!n&&typeof j0==="function",E_=n&&x6,S_=h2(w,{currentChatJid:a});return N`
                                        <div key=${w.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item session-item${n?" archived":""}${e0===m?" active":""}`}
                                                data-testid="session-item"
                                                onClick=${()=>{if(n){Tj(w.chat_jid);return}Mj(w.chat_jid)}}
                                                disabled=${n?!x$:!y$}
                                                title=${n?`Restore archived ${`@${w.agent_name}`}`:`Switch to ${`@${w.agent_name}`}`}
                                            >
                                                <span style=${RW(w)?"font-weight:700":""}>${S_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${w.agent_name} in new window`}
                                                aria-label=${`Open @${w.agent_name} in new window`}
                                                onClick=${(M_)=>{M_.stopPropagation(),E0(!1);let u1=new URL(window.location.href);u1.searchParams.set("chat_jid",w.chat_jid),u1.searchParams.set("chat_only","1");let H1=document.createElement("a");H1.href=u1.toString(),H1.target="_blank",H1.rel="noopener",H1.style.display="none",document.body.appendChild(H1),H1.click(),H1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(S0||E_)&&N`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${E_?V0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${E_?V0?`Permanently delete archived session @${w.agent_name}`:`Permanently delete archived branch @${w.agent_name}`:`Delete @${w.agent_name}`}
                                                    onClick=${(M_)=>{if(M_.stopPropagation(),E0(!1),E_){C0?.(w.chat_jid);return}j0(w.chat_jid)}}
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
                            ${(G$||$4||x1||Z$)&&N`
                                <div class="compose-model-popup-actions">
                                    ${G$&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${h_.findIndex((w)=>w.key==="action:new")===e0?" active":""}`}
                                            onClick=${()=>{yj()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${$4&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${h_.findIndex((w)=>w.key==="action:new-root")===e0?" active":""}`}
                                            onClick=${()=>{xj()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${y1?.chat_jid&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${h_.findIndex((w)=>w.key==="action:rollup")===e0?" active":""}`}
                                            onClick=${()=>{Ij()}}
                                            title=${j4?`Merge this branch into ${y1.agent_name?`@${y1.agent_name}`:y1.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!j4}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${x1&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${h_.findIndex((w)=>w.key==="action:rename")===e0?" active":""}`}
                                            onClick=${(w)=>{wj(w)}}
                                            title="Rename the current session"
                                            disabled=${g4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${Z$&&N`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${h_.findIndex((w)=>w.key==="action:delete")===e0?" active":""}`}
                                            onClick=${()=>{Cj()}}
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
                    ${y0&&N`
                    <div class="compose-meta-row">
                        ${x5&&N`
                            <div class="compose-model-meta">
                                <button
                                    ref=${M1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${K0}
                                    aria-label="Open model picker"
                                    onClick=${DF}
                                    disabled=${e}
                                >
                                    ${e?"Switching…":I5}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!e&&t&&N`
                                        <span class="compose-model-usage-hint" title=${K0}>
                                            ${p}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&z&&z.percent!=null&&N`
                            <${mW}
                                usage=${z}
                                onCompact=${WF}
                                compactionLabel=${z1?T$||"0:00":""}
                                compactionTitle=${z1?M$||"Smart compaction":""}
                            />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${X$&&N`
                        <div
                            ref=${z$}
                            class="compose-session-trigger-group"
                        >
                            ${R_?.agent_name&&N`
                                <button
                                    type="button"
                                    class=${`compose-session-trigger compose-session-trigger-pill${G0?" active":""}`}
                                    data-testid="session-switcher"
                                    onClick=${kj}
                                    title=${R_?.chat_jid||a}
                                    aria-label=${`Manage sessions for @${R_.agent_name}`}
                                    aria-expanded=${G0?"true":"false"}
                                >
                                    <span class="compose-current-agent-label active">@${R_.agent_name}</span>
                                </button>
                            `}
                            <button
                                type="button"
                                class=${`compose-session-trigger compose-session-trigger-icon-btn${G0?" active":""}`}
                                data-testid="session-switcher"
                                onClick=${kj}
                                title=${R_?.chat_jid||a}
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
                            <input type="checkbox" checked=${o0} onChange=${()=>U_((w)=>!w)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${H_} onChange=${()=>K_((w)=>!w)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${g0==="and"?"active":""}`}
                            onClick=${()=>{let w=g0==="or"?"and":"or";J0(w),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:w})}).catch((m)=>{})}}
                            title=${g0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${g0==="or"?"OR":"AND"}
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
                    ${P_&&!j&&N`
                        <button
                            class="icon-btn location-btn"
                            onClick=${fF}
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
                    ${C4&&N`
                        <button
                            class=${`icon-btn voice-input-btn${e$?" active":""}${x_.mode==="fallback"?" fallback":""}`}
                            onClick=${NF}
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
                    ${T5&&!j&&N`
                        <button
                            class=${`icon-btn notification-btn${f4?" active":""}`}
                            onClick=${k}
                            title=${_4}
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
                            <input type="file" multiple hidden onChange=${kF} />
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
                                    class=${w$.className}
                                    data-testid="send-button"
                                    type="button"
                                    onClick=${()=>{u4()}}
                                    disabled=${w$.disabled}
                                    title=${w$.title}
                                    aria-label=${w$.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${$$&&N`
                                    <button 
                                        class=${$$.className}
                                        data-testid="stop-button"
                                        type="button"
                                        onClick=${()=>{if(bW($$.mode))u4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
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
    `}x0();function Eq({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return N`
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
  `}x0();function Dq(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function Wq(_){return String(_||"").trim()||"web:default"}function Oq(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function zq(_){if(!_)return!1;return _.status!=="running"}function Jq(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function Aq({session:_,onClose:$,onInject:j,onRetry:G}){let Z=u(null),X=u(null),Y=_?.thinking?p5(_.thinking):"",q=_?.answer?e_(_.answer,null):"";if(g(()=>{if(Z.current&&Y)N$(Z.current).catch((D)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",D)})},[Y]),g(()=>{if(X.current&&q)N$(X.current).catch((D)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",D)})},[q]),!_)return null;let L=_.status==="running",K=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),V=Oq(_),B=zq(_),F=!L&&K,H=L?"Thinking…":_.status==="error"?"Error":"Done";return N`
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

            ${B&&N`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&N`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>G?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!F}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}x0();function N9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function U9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function jO(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function GO(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function d$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function G_(_){return typeof _==="string"&&_.trim()?_.trim():null}function Mq(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var Tq="__PICLAW_WIDGET_HOST__:";function kq(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function H9(_,$){if(!_||_.type!=="generated_widget")return null;let j=jO(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:Mq(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function wq(_){if(!_||typeof _!=="object")return null;let $=GO(_),j=G_(_?.widget_id)||G_(_?.widgetId)||G_(_?.tool_call_id)||G_(_?.toolCallId),G=G_(_?.tool_call_id)||G_(_?.toolCallId),Z=G_(_?.turn_id)||G_(_?.turnId),X=G_(_?.title)||G_(_?.name)||"Generated widget",Y=G_(_?.subtitle)||"",q=G_(_?.description)||Y,L=G_(_?.status),K=L==="loading"||L==="streaming"||L==="final"||L==="error"?L:"streaming";return{title:X,subtitle:Y,description:q,originPostId:d$(_?.origin_post_id)??d$(_?.originPostId),originChatJid:G_(_?.origin_chat_jid)||G_(_?.originChatJid)||G_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:Mq(_?.capabilities,!0),source:"live",status:K,turnId:Z,toolCallId:G,width:d$(_?.width),height:d$(_?.height),error:G_(_?.error)}}function yq(_){return H9(_,null)!==null}function W1(_){let $=G_(_?.toolCallId)||G_(_?.tool_call_id);if($)return $;let j=G_(_?.widgetId)||G_(_?.widget_id);if(j)return j;let G=d$(_?.originPostId)??d$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function xq(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function Iq(_){return xq(_)?"allow-downloads allow-scripts allow-same-origin":"allow-downloads"}function o2(_){return{title:G_(_?.title)||"Generated widget",widgetId:G_(_?.widgetId)||G_(_?.widget_id),toolCallId:G_(_?.toolCallId)||G_(_?.tool_call_id),turnId:G_(_?.turnId)||G_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:G_(_?.status)||"final"}}function s2(_){return{...o2(_),subtitle:G_(_?.subtitle)||"",description:G_(_?.description)||"",error:G_(_?.error)||null,width:d$(_?.width),height:d$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function a2(_){return`${Tq}${JSON.stringify(s2(_))}`}function Cq(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=G_(_.text)||G_(_.content)||G_(_.message)||G_(_.prompt)||G_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=G_(j.text)||G_(j.content)||G_(j.message)||G_(j.prompt)||G_(j.value);if(G)return G}return null}function fq(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function Pq(_){let $=G_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return G_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function ZO(_){let $=o2(_);return`<script>
(function () {
  const meta = ${kq($)};
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

  const windowNamePrefix = ${kq(Tq)};
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
</script>`}function Rq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let q=xq(_),L=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),K=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,Q=q?ZO(_):"";return`<!doctype html>
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
</html>`}x0();function XO(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let q=$.get(Y.id);if(!q)continue;let L=Y.parentId?$.get(Y.parentId):null;if(L)L.children.push(q);else j.push(q)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let q=Y.children[0];if(q.role!=="toolResult")continue;Y.resultDetail=q.detail||null,Y.resultLength=q.contentLength||0,Y.resultId=q.id,Y.merged=!0,Y.children=q.children;for(let L of Y.children)L.parentId=Y.id;G.add(q.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),q=Y.children.length>1;for(let L=Y.children.length-1;L>=0;L--)Y.children[L].depth=q?Y.depth+1:Y.depth,X.push(Y.children[L])}return Z}function YO(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function Sq(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function L5(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function qO(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function LO(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function gq(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function KO(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(q)=>typeof q==="string"&&Z.some((L)=>L?.id===q);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((q)=>q?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function VO(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=gq(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function uq({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,q]=C(()=>({loading:!j,error:null,data:j})),[L,K]=C(()=>j?.leafId||null),[Q,V]=C(""),B=u(null),F=u(null),H=u(j?.leafId||null),D=u(null),E=u(""),U=async()=>{q((J)=>({...J,loading:!0,error:null}));try{let J=G?`?chat_jid=${encodeURIComponent(G)}`:"",M=await fetch(`/agent/session-tree${J}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),W=await M.json().catch(()=>({}));if(!M.ok)throw Error(W?.error||`HTTP ${M.status}`);q({loading:!1,error:null,data:W})}catch(J){q((M)=>({loading:!1,error:J?.message||"Failed to load tree.",data:M?.data||j||null}))}};D.current=U,g(()=>{U()},[G]);let A=X0(()=>{let J=Y.data;if(!J||!Array.isArray(J.nodes)||J.nodes.length===0)return[];return YO(J.flat?XO(J.nodes):J.nodes)},[Y.data]);g(()=>{let J=KO(A,L,H.current,Y.data?.leafId||null);if(J!==L)K(J);if(H.current&&Y.data?.leafId===H.current)H.current=null},[A,L,Y.data?.leafId]);let z=X0(()=>{let J=(Q||"").trim().toLowerCase();if(!J)return A;return A.filter((M)=>{return[M.preview,M.toolInput,M.toolInputFull,M.detail,M.toolName,M.role,M.id,M.resultDetail,M.type,M.label].some((T)=>typeof T==="string"&&T.toLowerCase().includes(J))})},[A,Q]),O=X0(()=>z.find((J)=>J.id===L)||null,[z,L]),y=X0(()=>VO(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);g(()=>{if(F.current)F.current.scrollIntoView({block:"center",behavior:"auto"})},[L,Y.data?.leafId,z.length]),g(()=>{let J=gq(X?.preview);if(J?.targetId)H.current=J.targetId;let M=y?.refreshDelays||[];if(!M.length)return;let W=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(E.current===W)return;E.current=W;let T=M.map((x)=>setTimeout(()=>D.current?.(),x));return()=>T.forEach((x)=>clearTimeout(x))},[G,X?.type,X?.submittedAt,X?.preview,y?.refreshDelays]);let I=(J=!1)=>{let M=O?.id,W=LO(M,J);if(!W)return;H.current=W.navigateTargetId,$?.({kind:"widget.submit",payload:W},_)},k=y?.tone||"info";return N`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>U()} disabled=${Y.loading}>${Y.loading?"Loading…":"Refresh"}</button>
                    <input ref=${B}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${Q}
                        onInput=${(J)=>V(J.currentTarget.value)}
                        onKeyDown=${(J)=>{if(J.key==="Escape")V(""),J.currentTarget.blur()}}
                    />
                    ${Q&&N`<span class="session-tree-meta">${z.length} match${z.length!==1?"es":""}</span>`}
                    ${Y.error&&N`<span class="session-tree-error-inline">${Y.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${y?.text&&N`<span class=${`session-tree-host-update ${k}`}>${y.text}</span>`}
                    ${Y.data?.capped&&N`<span class="session-tree-meta">Showing ${Y.data?.nodes?.length||0} of ${Y.data?.total||0}</span>`}
                    ${G&&N`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Y.loading&&z.length===0&&!Q&&N`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&z.length===0&&!Q&&N`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&z.length===0&&Q&&N`<div class="session-tree-empty">No entries match \u201c${Q}\u201d</div>`}
                    ${z.map((J)=>{let M=L===J.id,W=`st-row${J.active?" active":""}${M?" selected":""}`,T=(J.children||[]).length>1,x=qO(J);return N`
                            <button key=${J.id} ref=${J.active||M?F:null}
                                class=${W} type="button" role="treeitem" aria-selected=${M}
                                onClick=${()=>K(J.id)}>
                                <span class="st-indent" style=${`width:${(J.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${J.active?" active":T?" branch":""}`}></span>
                                <span class=${`st-tag ${x.tagClass}`}>${x.tag}</span>
                                <span class="st-text">${x.text}</span>
                                ${J.merged&&J.resultLength>0&&N`<span class="st-size">${Sq(J.resultLength)}</span>`}
                                ${!J.merged&&J.contentLength>3000&&N`<span class="st-size">${Sq(J.contentLength)}</span>`}
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
                                <div class="st-side-label">Result${O.resultLength?` (${L5(O.resultLength)})`:""}</div>
                                <pre class="st-side-code">${O.resultDetail}</pre>
                            </div>
                        `}
                        ${O.detail&&!O.toolInput&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.role==="toolResult"?"Output":"Content"}${O.contentLength?` (${L5(O.contentLength)})`:""}</div>
                                <pre class="st-side-code">${O.detail}</pre>
                            </div>
                        `}
                        ${O.rawDetail&&N`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${O.rawContentLength?` (${L5(O.rawContentLength)})`:""}</div>
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
                                    ${O.contentLength>0&&N`<span class="st-pill">${L5(O.contentLength)} content</span>`}
                                    ${O.hasThinking&&N`<span class="st-pill thinking">${L5(O.thinkingLength)} thinking</span>`}
                                    ${O.merged&&O.resultLength>0&&N`<span class="st-pill">${L5(O.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>I(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>I(!0)}>Navigate + summarize</button>
                        </div>
                    `:N`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function bq({widget:_,onClose:$,onWidgetEvent:j}){let G=u(null),Z=u(!1),X=X0(()=>Rq(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let U=(A)=>{if(A.key==="Escape")$?.()};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[_,$]),g(()=>{Z.current=!1},[X]),g(()=>{if(!_)return;let U=G.current;if(!U)return;let A=(k)=>{let J=a2(_),M=k==="widget.init"?o2(_):s2(_);N9(U,J),U9(U,{__piclawGeneratedWidgetHost:!0,type:k,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M})},z=()=>{A("widget.init"),A("widget.update")},O=()=>{Z.current=!0,z()};U.addEventListener("load",O);let I=[0,40,120,300,800].map((k)=>setTimeout(z,k));return()=>{U.removeEventListener("load",O),I.forEach((k)=>clearTimeout(k))}},[X,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let U=G.current;if(!U?.contentWindow)return;let A=a2(_),z=s2(_);N9(U,A),U9(U,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:z});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let U=(A)=>{let z=A?.data;if(!z||z.__piclawGeneratedWidget!==!0)return;let O=G.current,y=W1(_),I=W1({widgetId:z.widgetId,toolCallId:z.toolCallId});if(I&&y&&I!==y)return;if(!I&&O?.contentWindow&&A.source!==O.contentWindow)return;j?.(z,_)};return window.addEventListener("message",U),()=>window.removeEventListener("message",U)},[_,j]),!_)return null;let q=(_?.artifact||{}).kind||_?.kind||"html",L=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",Q=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",B=Q==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",F=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",H=!X,D=Pq(_),E=Iq(_);return N`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${L}
                onClick=${(U)=>U.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${B} • ${q.toUpperCase()}</div>
                        <div class="floating-widget-title">${L}</div>
                        ${(K||F)&&N`
                            <div class="floating-widget-subtitle">${K||F}</div>
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
                    ${q==="session_tree"?N`<${uq} widget=${_} onWidgetEvent=${j} />`:H?N`<div class="floating-widget-empty">${D}</div>`:N`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${L}
                                    name=${a2(_)}
                                    sandbox=${E}
                                    referrerpolicy="no-referrer"
                                    srcdoc=${X}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}x0();T2();u_();Z5();var QO=new Set,vq=new Set,E9=new Set,k4=new Map,mq=!1,t2=null;function BO(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",G=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(G)return G}catch(j){}return"web:default"}function FO(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function cq(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return Y_.register(_),QO.add(_.id),!0}function NO(_){return cq(_)}function UO(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return l$(_),vq.add(_.id),P7(),()=>{gX(_.id),vq.delete(_.id),P7()}}function HO(_){if(typeof _!=="function")return()=>{};return E9.add(_),()=>{E9.delete(_)}}function lq(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...E9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function EO(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return k4.set(_.id,_),()=>{if(k4.get(_.id)===_)k4.delete(_.id)}}function e2(_,$){for(let j of Array.from(k4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function hq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return k4.get($)?.label||null}function pq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return k4.get($)?.note||null}function nq(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=k4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function DO(_=typeof window<"u"?window:null){return{registerPane:NO,registerWorkspacePane:cq,registerSettingsPane:UO,registerStandaloneTabUrlResolver:HO,registerAttachmentPreview:EO,getCurrentChatJid:()=>BO(_)}}function D9(_=typeof window<"u"?window:null){let $=DO(_);if(!_||mq)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},mq=!0,$}async function rq(_=typeof window<"u"?window:null){if(!_)return;if(t2)return t2;return t2=(async()=>{D9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=FO(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(q){console.warn("[addon-web] Failed to load installed addon web entry:",Y,q)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),t2}var WO=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),OO=new Set(["text/markdown"]),zO=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),JO=new Set(["application/eml","message/rfc822"]);function i$(_){return typeof _==="string"?_.trim().toLowerCase():""}function AO(_){let $=i$(_);return!!$&&$.endsWith(".eml")}function kO(_){let $=i$(_);return!!$&&$.endsWith(".pdf")}function MO(_){let $=i$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var TO=new Set(["application/zip","application/x-zip-compressed"]);function wO(_){let $=i$(_);return!!$&&$.endsWith(".zip")}function yO(_){let $=i$(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function xO(_){let $=i$(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")}function F6(_,$){let j=e2(_,$);if(j?.id)return j.id;let G=i$(_);if(kO($)||G==="application/pdf")return"pdf";if(MO($)||zO.has(G))return"office";if(AO($)||JO.has(G))return"eml";if(wO($)||TO.has(G))return"archive";if(yO($)||G==="text/html")return"html";if(xO($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(WO.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function dq(_){let $=i$(_);return OO.has($)}function _8(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"archive":return"ZIP archive preview";default:return hq(_)||"Preview unavailable"}}var IO=new TextDecoder("utf-8",{fatal:!1});function K5(_,$){return _[$]|_[$+1]<<8}function M4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function iq(_,$,j){return IO.decode(_.subarray($,$+j))}function CO(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(M4(_,j)===101010256)return j;return-1}function fO(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(M4(_,G)===117853008)return!0;return!1}function PO(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function RO(_){return String(_||"").replace(/\\/g,"/").trim()}function oq(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function sq(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=CO($);if(j<0)throw Error("ZIP archive directory could not be found.");if(fO($,j))throw Error("ZIP64 archives are not previewable yet.");let G=K5($,j+10),Z=M4($,j+12),X=M4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],q=X,L=X+Z;while(q<L){if(q+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(M4($,q)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let V=K5($,q+8),B=K5($,q+10),F=M4($,q+20),H=M4($,q+24),D=K5($,q+28),E=K5($,q+30),U=K5($,q+32),A=q+46,z=A+D+E,O=z+U;if(O>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let y=(V&2048)===2048,I=RO(iq($,A,D)),k=iq($,z,U),J=I.endsWith("/");if(I)Y.push({path:I,isDirectory:J,compressedSize:F,uncompressedSize:H,compressionMethod:B,comment:y?k:k});q=O}Y.sort((V,B)=>{if(V.isDirectory!==B.isDirectory)return V.isDirectory?-1:1;return V.path.localeCompare(B.path)});let K=Y.filter((V)=>!V.isDirectory),Q=PO(Y);return{entries:Y,summary:{fileCount:K.length,directoryCount:Q.size,totalEntries:Y.length,compressedBytes:K.reduce((V,B)=>V+B.compressedSize,0),uncompressedBytes:K.reduce((V,B)=>V+B.uncompressedSize,0)}}}function aq(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var SO="allow-scripts";function gO(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function uO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function bO(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function vO(_,$=null,j=null){let G=_?.metadata?.size,Z=_?.content_type||"application/octet-stream",X=j?.summary||null;return[{label:"Type",value:Z},{label:"Syntax",value:$},{label:"Entries",value:X?String(X.totalEntries):null},{label:"Files",value:X?String(X.fileCount):null},{label:"Folders",value:X?String(X.directoryCount):null},{label:"Compressed",value:X?a_(X.compressedBytes):null},{label:"Uncompressed",value:X?a_(X.uncompressedBytes):null},{label:"Savings",value:aq(X)},{label:"Size",value:typeof G==="number"?a_(G):null},{label:"Added",value:_?.created_at?O4(_.created_at):null}].filter((Y)=>Y.value)}function mO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function cO(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=P1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function tq({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=X0(()=>e2($?.content_type,G),[$?.content_type,G]),X=X0(()=>F6($?.content_type,G),[$?.content_type,G]),Y=Z?.label||_8(X),q=X0(()=>dq($?.content_type),[$?.content_type]),[L,K]=C(X==="text"||X==="html"||X==="archive"),[Q,V]=C(""),[B,F]=C(null),[H,D]=C(null),E=u(null),U=X0(()=>mO($,G),[$,G]),A=X0(()=>U?AZ(U):null,[U]),z=X0(()=>vO($,!q?A:null,B),[$,q,A,B]),O=X0(()=>Z?nq(Z.id,_,G):cO(_,G,X),[Z,_,G,X]),y=X0(()=>pq(Z?.id||X),[Z?.id,X]),I=X0(()=>{if(!q||!Q)return"";return e_(Q)},[q,Q]),k=X0(()=>{if(q||!Q||!U)return"";return Y2(Q,U)},[q,Q,U]);return g(()=>{let J=(M)=>{if(M.key==="Escape")j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[j]),g(()=>{if(!E.current||!I)return;N$(E.current);return},[I]),g(()=>{let J=!1;async function M(){if(X!=="text"&&X!=="html"&&X!=="archive"){K(!1),D(null),V(""),F(null);return}K(!0),D(null),V(""),F(null);try{let W=await K7(_),T=new Uint8Array(await W.arrayBuffer());if(X==="text"||X==="html"){if(X==="text"&&uO($,G)&&!gO(T))throw Error("Attachment does not appear to contain text content.");let P=bO(T);if(!J)V(P);return}let x=sq(T);if(!J)F(x)}catch(W){if(!J){let T=W instanceof Error?W.message:String(W||"Unknown error");D(X==="archive"?`Failed to load ZIP preview. ${T}`:`Failed to load text preview. ${T}`)}}finally{if(!J)K(!1)}}return M(),()=>{J=!0}},[_,X]),N`
        <${c$} className="attachment-preview-portal-root">
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
                        ${L&&N`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!L&&H&&N`<div class="attachment-preview-state">${H}</div>`}
                        ${!L&&!H&&X==="image"&&N`
                            <img class="attachment-preview-image" src=${P1(_)} alt=${G} />
                        `}
                        ${!L&&!H&&X==="video"&&N`
                            <video class="attachment-preview-video" src=${P1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!L&&!H&&X==="html"&&N`
                            <iframe class="attachment-preview-frame" srcdoc=${Q||""} sandbox=${SO} title=${G}></iframe>
                        `}
                        ${!L&&!H&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&O&&N`
                            <iframe class="attachment-preview-frame" src=${O} title=${G}></iframe>
                        `}
                        ${!L&&!H&&y&&N`
                            <div class="attachment-preview-readonly-note">${y}</div>
                        `}
                        ${!L&&!H&&X==="archive"&&B&&N`
                            <div class="attachment-preview-archive">
                                <div class="attachment-preview-archive-summary">
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Files</span>
                                        <strong class="attachment-preview-archive-card-value">${B.summary.fileCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Folders</span>
                                        <strong class="attachment-preview-archive-card-value">${B.summary.directoryCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Compressed</span>
                                        <strong class="attachment-preview-archive-card-value">${a_(B.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${a_(B.summary.uncompressedBytes)}</strong>
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
                                            ${B.entries.map((J)=>N`
                                                <tr key=${J.path}>
                                                    <td class="attachment-preview-archive-name">${J.path}</td>
                                                    <td>${J.isDirectory?"Folder":"File"}</td>
                                                    <td>${J.isDirectory?"—":oq(J.compressionMethod)}</td>
                                                    <td>${J.isDirectory?"—":a_(J.compressedSize)}</td>
                                                    <td>${J.isDirectory?"—":a_(J.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!L&&!H&&X==="text"&&q&&N`
                            <div
                                ref=${E}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:I}}
                            />
                        `}
                        ${!L&&!H&&X==="text"&&!q&&k&&N`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:k}} /></pre>
                        `}
                        ${!L&&!H&&X==="text"&&!q&&!k&&N`
                            <pre class="attachment-preview-text">${Q}</pre>
                        `}
                        ${!L&&!H&&X==="unsupported"&&N`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${z.map((J)=>N`
                            <div class="attachment-preview-meta-item" key=${J.label}>
                                <span class="attachment-preview-meta-label">${J.label}</span>
                                <span class="attachment-preview-meta-value">${J.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${c$}>
    `}x0();u_();C2();r7();function lO(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function hO(_){if(!_||typeof _!=="object")return!0;if(lO(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function pO(_){if(!Q6(_))return!1;if(!hO(_?.target))return!1;return!h$.some((j)=>D$(_,j.id))}function eq(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function nO(_){let $=[],j=new Map(n$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function _L(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function rO(_){if(_?.imageUrl)return N`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return N`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function $8(_,$){return N`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function dO(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function $L({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:q,onOpenVncTab:L,onToggleTerminalDock:K,onPrefillCompose:Q}){let[V,B]=C(!1),[F,H]=C(""),[D,E]=C(0),[U,A]=C([]),[z,O]=C({workspaceCommands:null,slashCommands:null}),y=u(null),I=u(null),k=f(async()=>{try{let T=await s5();O(r$(T?.settings))}catch{O({workspaceCommands:null,slashCommands:null})}},[]);g(()=>{k()},[k]),g(()=>{let T=!1;return o5($).then((x)=>{if(T)return;A(Array.isArray(x?.commands)?x.commands:[])}).catch(()=>{if(T)return;A([])}),()=>{T=!0}},[$]);let J=X0(()=>nO({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:q,onOpenVncTab:L,onToggleTerminalDock:K}),[G,q,L,K,Z,j]),M=X0(()=>kY({agents:_,workspaceCommands:J,slashCommands:U,settings:z,query:F}),[_,F,z,U,J]);if(g(()=>{if(M.length===0){E(-1);return}if(!F.trim()){E(0);return}let T=F.toLowerCase().replace(/^[@/]+/,"").trim();if(!T){E(0);return}let x=0,P=0;for(let R=0;R<M.length;R++){let v=M[R],c=(v.title||"").toLowerCase().replace(/^[@/]+/,"");if(c===T){x=R;break}let h=0;if(c.startsWith(T))h=3;else if(c.includes(T))h=2;else if((v.subtitle||"").toLowerCase().includes(T))h=1;if(h>P)P=h,x=R}E(x)},[M,F]),g(()=>{if(!V)return;requestAnimationFrame(()=>I.current?.focus?.())},[V]),g(()=>{let T=(P)=>{if(!V){if(!pO(P))return;P.preventDefault(),H(String(P.key||"")),E(0),B(!0);return}if(P.key==="Escape"){P.preventDefault(),B(!1),H("");return}if(P.key==="ArrowDown"){P.preventDefault(),E((R)=>M.length>0?(R+1+M.length)%M.length:0);return}if(P.key==="ArrowUp"){P.preventDefault(),E((R)=>M.length>0?(R-1+M.length)%M.length:0);return}if(P.key==="Enter"&&M[D]){P.preventDefault();let R=M[D],v=P.altKey;if(R){if(R.kind==="agent"&&R.chatJid)if(v)dO(R.chatJid);else X?.(R.chatJid);else if(R.kind==="workspace"&&R.commandId){if(R.commandId==="toggle-workspace"||R.commandId==="open-explorer")Y?.();if(R.commandId==="toggle-chat-only")eq(G);if(R.commandId==="open-terminal-tab")q?.();if(R.commandId==="open-vnc-tab")L?.();if(R.commandId==="toggle-terminal-dock")K?.();if(R.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(R.kind==="slash"&&R.commandName)Q?.(R.commandName)}B(!1),H("")}},x=(P)=>{if(!V)return;if(y.current?.contains(P.target))return;B(!1),H("")};return window.addEventListener("keydown",T,!0),document.addEventListener("pointerdown",x,!0),()=>{window.removeEventListener("keydown",T,!0),document.removeEventListener("pointerdown",x,!0)}},[G,D,M,q,L,Q,X,K,Y,V]),g(()=>{let T=(x)=>{let P=r$(x?.detail?.settings);if(x?.detail?.settings){O(P);return}k()};return window.addEventListener("focus",T),window.addEventListener("piclaw:quick-actions-settings-updated",T),()=>{window.removeEventListener("focus",T),window.removeEventListener("piclaw:quick-actions-settings-updated",T)}},[k]),!V)return null;let W=null;return N`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${y}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${I}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${F}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(T)=>{H(T.currentTarget?.value||""),E(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${$8("Move","↑↓")}
                                ${$8("Select","↵")}
                                ${$8("Pop out","Alt+↵")}
                                ${$8("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${M.length===0&&N`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${M.map((T,x)=>{let P=T.kind!==W;return W=T.kind,N`
                                ${P&&N`<div class="timeline-quick-actions-section">${_L(T.kind)}</div>`}
                                <button
                                    key=${T.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${T.kind}${x===D?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(T.kind==="agent"&&T.chatJid)X?.(T.chatJid);if(T.kind==="workspace"&&T.commandId==="toggle-workspace")Y?.();if(T.kind==="workspace"&&T.commandId==="open-explorer")Y?.();if(T.kind==="workspace"&&T.commandId==="toggle-chat-only")eq(G);if(T.kind==="workspace"&&T.commandId==="open-terminal-tab")q?.();if(T.kind==="workspace"&&T.commandId==="open-vnc-tab")L?.();if(T.kind==="workspace"&&T.commandId==="toggle-terminal-dock")K?.();if(T.kind==="workspace"&&T.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(T.kind==="slash"&&T.commandName)Q?.(T.commandName);B(!1),H("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${rO(T)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${T.title}</span>
                                            ${T.actionHint?N`<span class="timeline-quick-actions-item-action-hint">${T.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${T.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${T.categoryLabel||_L(T.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}x0();function jL({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[q,L]=C(!1),[K,Q]=C({top:8,left:8}),V=u(null),B=u(null),F=u(null);g(()=>{if(typeof document>"u")return;let U=document.createElement("div");return U.className="timeline-menu-portal in-chat",document.body.appendChild(U),F.current=U,()=>{U.remove(),F.current=null}},[]),g(()=>{let U=()=>{if(_){let O=document.querySelector(".workspace-sidebar");if(O){let y=O.getBoundingClientRect();Q({top:y.top+8,left:y.left+8})}}else Q({top:8,left:8})};U();let A=new ResizeObserver(U),z=document.querySelector(".workspace-sidebar");if(z)A.observe(z);return window.addEventListener("resize",U),()=>{A.disconnect(),window.removeEventListener("resize",U)}},[_]),g(()=>{if(F.current)F.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),g(()=>{if(!F.current)return;let U=F.current.style;U.top=`${K.top}px`,U.left=`${K.left}px`,U.right="auto"},[K]),g(()=>{if(!q)return;let U=(A)=>{if(V.current?.contains(A.target))return;if(B.current?.contains(A.target))return;L(!1)};return document.addEventListener("mousedown",U,!0),()=>document.removeEventListener("mousedown",U,!0)},[q]),g(()=>{if(!q)return;let U=(A)=>{if(A.key==="Escape")L(!1)};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[q]),g(()=>{L(!1)},[_]);let H=f((U)=>{L(!1),U?.()},[]),D=f(()=>{let U=new URL(window.location.href);if(j)U.searchParams.delete("chat_only");else U.searchParams.set("chat_only","1");window.location.href=U.toString()},[j]),E=N`
        <button ref=${B} class=${`timeline-menu-btn${q?" active":""}`}
            onClick=${()=>L((U)=>!U)} title="Menu" aria-label="Menu"
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
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>H($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&N`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>H(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>H(D)}>
                    ${j?"Exit chat-only mode":"Chat-only mode"}
                </button>

                ${(G||Z||X)&&N`<div class="workspace-menu-separator"></div>`}
                ${G&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>H(G)}>Open terminal in tab</button>`}
                ${Z&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>H(Z)}>Open VNC in tab</button>`}
                ${X&&N`<button class="workspace-menu-item" role="menuitem" onClick=${()=>H(X)}>${Y?"Hide terminal dock":"Show terminal dock"}</button>`}

                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>H(()=>window.dispatchEvent(new CustomEvent("piclaw:open-settings")))}>Settings</button>
            </div>
        `}
    `;return c4(()=>{if(F.current)L$(E,F.current)}),null}x0();u_();var GL="PiClaw";function W9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,q=X[Y],L=G.trim().toLowerCase(),K=typeof $==="string"?$.trim():"",Q=K?K:null,V=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:Z,color:q,image:Q||(V?"/static/icon-192.png":null)}}function ZL(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function XL(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function YL(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",q=X?.dataset?.tint||"",L=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(L&&(q||Y&&Y!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function O9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function iO(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function qL(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return iO($[1].trim())||null}function LL(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=O9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=O9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=O9(j.command),Y=qL(X);if(Y)return Y;if(Array.isArray(j.commands))for(let q of j.commands){let L=qL(q);if(L)return L}return null}var oO=N`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,sO=N`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,aO=N`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,tO=1e4;function eO(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function _z(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function $z(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function jz(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function KL(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return m$(_)!==null}function VL(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&A2(_)!==null}function Gz(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=tO}function Zz(_,$=Date.now()){if(!KL(_))return null;let j=m$(_);if(j===null||!Gz(j,$))return null;let G=QL(new Date(j).toISOString(),$);return G?`${G} ago`:null}function Xz(_,$=Date.now()){if(!VL(_))return null;if(A2(_)===null)return null;return Y6(_,$)}function Yz(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=_?.title,Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function QL(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function z9({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:q=new Set,onExtensionPanelAction:L,turnId:K,steerQueued:Q,onPanelToggle:V,showCorePanels:B=!0,showExtensionPanels:F=!0}){let E=($0)=>{if(!$0)return{text:"",totalLines:0,fullText:""};if(typeof $0==="string"){let v0=$0,e=v0?v0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:v0,totalLines:e,fullText:v0}}let O0=$0.text||"",A0=$0.fullText||$0.full_text||O0,u0=Number.isFinite($0.totalLines)?$0.totalLines:A0?A0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:O0,totalLines:u0,fullText:A0}},U=160,A=($0)=>String($0||"").replace(/<\/?internal>/gi,""),z=($0)=>{if(!$0)return 1;return Math.max(1,Math.ceil($0.length/160))},O=($0,O0,A0)=>{let u0=($0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!u0)return{text:"",omitted:0,totalLines:Number.isFinite(A0)?A0:0,visibleLines:0};let v0=u0.split(`
`),e=v0.length>O0?v0.slice(0,O0).join(`
`):u0,o=Number.isFinite(A0)?A0:v0.reduce((G0,E0)=>G0+z(E0),0),d=e?e.split(`
`).reduce((G0,E0)=>G0+z(E0),0):0,Y0=Math.max(o-d,0);return{text:e,omitted:Y0,totalLines:o,visibleLines:d}},y=E(j),I=E(G),k=E($),J=Boolean(y.text)||y.totalLines>0,M=Boolean(I.text)||I.totalLines>0,W=Boolean(k.fullText?.trim()||k.text?.trim()),T=Boolean(_||W||J||M||Z||X),x=Array.isArray(Y)&&Y.length>0,[P,R]=C(new Set),[v,c]=C(null),[h,r]=C(()=>Date.now()),b=($0)=>R((O0)=>{let A0=new Set(O0),u0=!A0.has($0);if(u0)A0.add($0);else A0.delete($0);if(typeof V==="function")V($0,u0);return A0});g(()=>{R(new Set),c(null)},[K]),g(()=>{if(!(Array.isArray(Y)&&Y.some((A0)=>A0?.started_at||A0?.last_activity_at)))return;let O0=setInterval(()=>r(Date.now()),1000);return()=>clearInterval(O0)},[Y]);let s=X0(()=>_z(P),[P]);g(()=>{if(!s||typeof document>"u")return;let $0=(O0)=>{if(O0?.defaultPrevented)return;if(O0?.key!=="Escape")return;if(O0?.altKey||O0?.ctrlKey||O0?.metaKey||O0?.shiftKey)return;let A0=O0?.target;if(A0 instanceof Element){if(A0.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(A0.isContentEditable)return}if(R((u0)=>{if(!(u0 instanceof Set)||!u0.has(s))return u0;let v0=new Set(u0);return v0.delete(s),v0}),typeof V==="function")V(s,!1);O0.preventDefault?.(),O0.stopPropagation?.()};return document.addEventListener("keydown",$0),()=>document.removeEventListener("keydown",$0)},[s,V]);let a=H$(_),q0=Boolean(_?.last_activity||_?.lastActivity),Z0=X0(()=>KL(_),[_]),H0=X0(()=>VL(_),[_]),N0=X0(()=>LL(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[L0,D0]=C(null);g(()=>{if(!Boolean(H0||_?.retry_at||_?.retryAt||Z0))return;r(Date.now());let O0=setInterval(()=>r(Date.now()),1000);return()=>clearInterval(O0)},[Z0,H0,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),g(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!N0){D0(null);return}let O0=!0;return V7(N0).then((A0)=>{if(!O0)return;if(A0?.branch)D0({branch:A0.branch,repoPath:A0.repo_path||null,path:N0});else D0(null)}).catch(()=>{if(O0)D0(null)}),()=>{O0=!1}},[_?.type,N0]);let Q0=_?.turn_id||K,k0=YL(Q0),i=p2({steerQueued:Q}),j0=($0)=>$0,C0=Gq(_,{isLastActivity:q0}),M0=r2(_,{isLastActivity:q0}),m0=r2(null,{pendingRequest:!0}),c0=($0)=>$0==="warning"?"#f59e0b":$0==="error"?"var(--danger-color)":$0==="success"?"var(--success-color)":k0,Z_=X?.kind||"info",h0=c0(Z_),l0=c0(_?.kind||(a?"warning":"info")),T0=Yz(_,{isLastActivity:q0}),n0=Zz(_,h),b0=L0?.repoPath||"",o0=L0?.branch||"",U_=L0?jz(b0,o0):"",H_=eO(_?.status_hints||_?.statusHints),K_=X0(()=>$z(H_),[H_]),g0=X0(()=>K_.filter(($0)=>$0?.key==="ssh"),[K_]),J0=X0(()=>K_.filter(($0)=>$0?.key!=="ssh"),[K_]);if((!B||!T)&&(!F||!x))return null;let r0=({panelTitle:$0,text:O0,fullText:A0,totalLines:u0,maxLines:v0,titleClass:e,panelKey:o})=>{let d=P.has(o),Y0=A0||O0||"",G0=o==="thought"||o==="draft"?A(Y0):Y0,E0=typeof v0==="number",I0=d&&E0,t0=E0?O(G0,v0,u0):{text:G0||"",omitted:0,totalLines:Number.isFinite(u0)?u0:0};if(!G0&&!(Number.isFinite(t0.totalLines)&&t0.totalLines>0))return null;let z0=`agent-thinking-body${E0?" agent-thinking-body-collapsible":""}`,R0=E0?`--agent-thinking-collapsed-lines: ${v0};`:"",e0=o==="thought"||o==="draft"?mZ(G0):p5(G0);return N`
            <div
                class="agent-thinking"
                data-expanded=${d?"true":"false"}
                data-collapsible=${E0?"true":"false"}
                data-panel-key=${o||""}
                style=${k0?`--turn-color: ${k0};`:""}
            >
                <div class="agent-thinking-title ${e||""}">
                    ${k0&&N`<span class=${i} aria-hidden="true"></span>`}
                    ${$0}
                    ${I0&&N`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${$0} panel`}
                            onClick=${()=>b(o)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${z0}
                    style=${R0}
                    dangerouslySetInnerHTML=${{__html:e0}}
                />
                ${!d&&t0.omitted>0&&N`
                    <button class="agent-thinking-truncation" onClick=${()=>b(o)}>
                        ▸ ${t0.omitted} more lines
                    </button>
                `}
                ${d&&t0.omitted>0&&N`
                    <button class="agent-thinking-truncation" onClick=${()=>b(o)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},q_=Z?.tool_call?.title,z_=q_?`Awaiting approval: ${q_}`:"Awaiting approval",F0=Xz(_,h),w0=($0,O0,A0=null)=>{let u0=k2($0),v0=SX($0,h),e=[A0,v0].filter(Boolean).join(" · "),o=p2({steerQueued:Q,pulsing:H$($0)||Boolean(v0)});return N`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${O0?`--turn-color: ${O0};`:""}
                title=${$0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${O0&&N`<span class=${o} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${u0}</span>
                    ${e&&N`<span class="agent-status-elapsed">${e}</span>`}
                </div>
                ${$0.detail&&N`<div class="agent-thinking-body">${$0.detail}</div>`}
            </div>
        `},f0=($0,O0,A0,u0,v0,e,o,d=8,Y0=8)=>{let G0=Math.max(v0-u0,0.000000001),E0=Math.max(O0-d*2,1),I0=Math.max(A0-Y0*2,1),t0=Math.max(o-e,1),z0=o===e?O0/2:d+($0.run-e)/t0*E0,R0=Y0+(I0-($0.value-u0)/G0*I0);return{x:z0,y:R0}},N_=($0,O0,A0,u0,v0,e,o,d=8,Y0=8)=>{if(!Array.isArray($0)||$0.length===0)return"";return $0.map((G0,E0)=>{let{x:I0,y:t0}=f0(G0,O0,A0,u0,v0,e,o,d,Y0);return`${E0===0?"M":"L"} ${I0.toFixed(2)} ${t0.toFixed(2)}`}).join(" ")},A_=($0,O0="")=>{if(!Number.isFinite($0))return"—";return`${Math.abs($0)>=100?$0.toFixed(0):$0.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${O0}`},Q_=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],X_=($0,O0)=>{let A0=Q_;if(!Array.isArray(A0)||A0.length===0)return"var(--accent-color)";if(A0.length===1||!Number.isFinite(O0)||O0<=1)return A0[0];let v0=Math.max(0,Math.min(Number.isFinite($0)?$0:0,O0-1))/Math.max(1,O0-1)*(A0.length-1),e=Math.floor(v0),o=Math.min(A0.length-1,e+1),d=v0-e,Y0=A0[e],G0=A0[o];if(!G0||e===o||d<=0.001)return Y0;if(d>=0.999)return G0;let E0=Math.round((1-d)*1000)/10,I0=Math.round(d*1000)/10;return`color-mix(in oklab, ${Y0} ${E0}%, ${G0} ${I0}%)`},D_=($0,O0="autoresearch")=>{let A0=Array.isArray($0)?$0.map((z0)=>({...z0,points:Array.isArray(z0?.points)?z0.points.filter((R0)=>Number.isFinite(R0?.value)&&Number.isFinite(R0?.run)):[]})).filter((z0)=>z0.points.length>0):[],u0=A0.map((z0,R0)=>({...z0,color:X_(R0,A0.length)}));if(u0.length===0)return null;let v0=320,e=120,o=u0.flatMap((z0)=>z0.points),d=o.map((z0)=>z0.value),Y0=o.map((z0)=>z0.run),G0=Math.min(...d),E0=Math.max(...d),I0=Math.min(...Y0),t0=Math.max(...Y0);return N`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${u0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${v0} ${e}`} preserveAspectRatio="none" aria-hidden="true">
                        ${u0.map((z0)=>{let R0=z0?.key||z0?.label||"series",e0=v?.panelKey===O0&&v?.seriesKey===R0;return N`
                                <g key=${R0}>
                                    <path
                                        class=${`agent-series-chart-line${e0?" is-hovered":""}`}
                                        d=${N_(z0.points,v0,e,G0,E0,I0,t0)}
                                        style=${`--agent-series-color: ${z0.color};`}
                                        onMouseEnter=${()=>c({panelKey:O0,seriesKey:R0})}
                                        onMouseLeave=${()=>c((L_)=>L_?.panelKey===O0&&L_?.seriesKey===R0?null:L_)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${u0.flatMap((z0)=>{let R0=typeof z0?.unit==="string"?z0.unit:"",e0=z0?.key||z0?.label||"series";return z0.points.map((L_,j_)=>{let F_=f0(L_,v0,e,G0,E0,I0,t0);return N`
                                    <button
                                        key=${`${e0}-point-${j_}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${z0.color}; left:${F_.x/v0*100}%; top:${F_.y/e*100}%;`}
                                        onMouseEnter=${()=>c({panelKey:O0,seriesKey:e0,run:L_.run,value:L_.value,unit:R0})}
                                        onMouseLeave=${()=>c((k_)=>k_?.panelKey===O0?null:k_)}
                                        onFocus=${()=>c({panelKey:O0,seriesKey:e0,run:L_.run,value:L_.value,unit:R0})}
                                        onBlur=${()=>c((k_)=>k_?.panelKey===O0?null:k_)}
                                        aria-label=${`${z0?.label||"Series"} ${A_(L_.value,R0)} at run ${L_.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${u0.map((z0)=>{let R0=z0.points[z0.points.length-1]?.value,e0=typeof z0?.unit==="string"?z0.unit:"",L_=z0?.key||z0?.label||"series",j_=v?.panelKey===O0&&v?.seriesKey===L_?v:null,F_=j_&&Number.isFinite(j_.value)?j_.value:R0,k_=j_&&typeof j_.unit==="string"?j_.unit:e0,__=j_&&Number.isFinite(j_.run)?j_.run:null;return N`
                            <div key=${`${L_}-legend`} class=${`agent-series-legend-item${j_?" is-hovered":""}`} style=${`--agent-series-color: ${z0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${z0.color};`}></span>
                                <span class="agent-series-legend-label">${z0?.label||"Series"}</span>
                                ${__!==null&&N`<span class="agent-series-legend-run">run ${__}</span>`}
                                <span class="agent-series-legend-value">${A_(F_,k_)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},T_=($0)=>{if(!$0)return null;let O0=typeof $0?.key==="string"?$0.key:`panel-${Math.random()}`,A0=P.has(O0),u0=$0?.title||"Extension status",v0=$0?.collapsed_text||"",e=String($0?.state||"").replace(/[-_]+/g," ").replace(/^./,(F_)=>F_.toUpperCase()),o=c0($0?.state==="completed"?"success":$0?.state==="failed"?"error":$0?.state==="stopped"?"warning":"info"),d=p2({steerQueued:Q,pulsing:$0?.state==="running"}),Y0=typeof $0?.detail_markdown==="string"?$0.detail_markdown.trim():"",G0=typeof $0?.last_run_text==="string"?$0.last_run_text.trim():"",E0=typeof $0?.tmux_command==="string"?$0.tmux_command.trim():"",I0=Array.isArray($0?.series)?$0.series:[],t0=Array.isArray($0?.actions)?$0.actions:[],z0=$0?.started_at?Y6($0,h):null,R0=v0,e0=Boolean(Y0||E0||z0),L_=Boolean(Y0||I0.length>0||E0),j_=[u0,R0].filter(Boolean).join(" — ");return N`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${A0?"true":"false"}
                style=${o?`--turn-color: ${o};`:""}
                title=${!A0?j_||u0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>L_?b(O0):null}
                    >
                        ${o&&N`<span class=${d} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${u0}</span>
                        ${R0&&N`<span class="agent-thinking-title-meta">${R0}</span>`}
                        ${z0&&N`<span class="agent-status-elapsed">${z0}</span>`}
                    </button>
                    ${(t0.length>0||L_)&&N`
                        <div class="agent-thinking-tools-inline">
                            ${t0.length>0&&N`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${t0.map((F_)=>{let k_=`${O0}:${F_?.key||""}`,__=q?.has?.(k_);return N`
                                            <button
                                                key=${k_}
                                                class=${`agent-thinking-action-btn${F_?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>L?.($0,F_)}
                                                disabled=${Boolean(__)}
                                            >
                                                ${__?"Working…":F_?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${L_&&N`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${A0?"Collapse":"Expand"} ${u0}`}
                                    title=${A0?"Collapse details":"Expand details"}
                                    onClick=${()=>b(O0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        ${A0?N`<polyline points="4 6 8 10 12 6"></polyline>`:N`<polyline points="4 10 8 6 12 10"></polyline>`}
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${A0&&N`
                    <div class=${`agent-thinking-autoresearch-layout${e0?"":" chart-only"}`}>
                        ${e0&&N`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${z0&&N`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${z0}</span>
                                        ${$0?.last_activity_at&&$0?.state==="running"&&N`<span title="Since last activity">⟳ ${QL($0.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${Y0&&N`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:p5(Y0)}}
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
                                                onClick=${()=>L?.($0,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${oO}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${I0.length>0?N`
                                <div class="agent-series-chart-stack">
                                    ${D_(I0,O0)}
                                    ${G0&&N`<div class="agent-series-chart-note">${G0}</div>`}
                                </div>
                            `:N`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return N`
        <div class="agent-status-panel">
            ${B&&X&&w0(X,h0)}
            ${F&&Array.isArray(Y)&&Y.map(($0)=>T_($0))}
            ${B&&_?.type==="intent"&&w0(_,l0,F0)}
            ${B&&Z&&N`
                <div class="agent-status agent-status-request" aria-live="polite" style=${k0?`--turn-color: ${k0};`:""}>
                    ${m0==="dot"&&N`<span class=${i} aria-hidden="true"></span>`}
                    ${m0==="spinner"&&N`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${z_}</span>
                </div>
            `}
            ${B&&J&&r0({panelTitle:j0("Planning"),text:y.text,fullText:y.fullText,totalLines:y.totalLines,panelKey:"plan"})}
            ${B&&W&&r0({panelTitle:j0("Draft"),text:k.text,fullText:k.fullText,totalLines:k.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${B&&M&&r0({panelTitle:j0("Thoughts"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${B&&_&&_?.type!=="intent"&&N`
                <div class=${`agent-status${q0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${U_||H_.length>0||n0?" agent-status-multiline":""}`} aria-live="polite" style=${k0?`--turn-color: ${k0};`:""}>
                    ${k0&&C0&&N`<span class=${i} aria-hidden="true"></span>`}
                    ${_?.type==="error"?N`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:M0==="spinner"&&N`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${T0}</span>
                        ${(U_||K_.length>0||n0)&&N`
                            <span class="agent-status-meta-row">
                                ${g0.map(($0)=>N`
                                    <span key=${$0.key} class="agent-status-hint-row" title=${$0.title||$0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:$0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${$0.label}</span>
                                    </span>
                                `)}
                                ${U_&&N`
                                    <span class="agent-status-git-row" title=${N0||U_}>
                                        <span class="agent-status-git-icon">${sO}</span>
                                        <span class="agent-status-git-label">
                                            ${b0&&N`<span class="agent-status-git-part">${b0}</span>`}
                                            ${b0&&o0&&N`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${o0&&N`<span class="agent-status-git-part">${o0}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${J0.map(($0)=>N`
                                    <span key=${$0.key} class="agent-status-hint-row" title=${$0.title||$0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:$0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${$0.label}</span>
                                    </span>
                                `)}
                                ${n0&&N`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${q0?"Recent activity":"Last event"} ${n0}`}>
                                        <span class="agent-status-hint-icon">${aO}</span>
                                        <span class="agent-status-hint-label">${n0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function BL({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",q=G?.kind||"other",L=G?.rawInput||{},K=L.command||L.commands&&L.commands[0]||null,Q=L.diff||null,V=L.fileName||L.path||null,B=G?.description||L.description||L.explanation||null,H=(Array.isArray(G?.locations)?G.locations:[]).map((z)=>z?.path).filter((z)=>Boolean(z)),D=Array.from(new Set([V,...H].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let E=async(z)=>{try{await $5(j,z,X||null),$()}catch(O){console.error("Failed to respond to agent request:",O)}},U=async()=>{try{await q7(Y,`Auto-approved: ${Y}`),await $5(j,"approved",X||null),$()}catch(z){console.error("Failed to add to whitelist:",z)}},A=Z&&Z.length>0;return N`
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
                ${(B||K||Q||D.length>0)&&N`
                    <div class="agent-request-body">
                        ${B&&N`
                            <div class="agent-request-description">${B}</div>
                        `}
                        ${D.length>0&&N`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${D.map((z,O)=>N`<li key=${O}>${z}</li>`)}
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
                    ${A?Z.map((z)=>N`
                            <button 
                                key=${z.optionId||z.id||String(z)}
                                class="agent-request-btn ${z.kind==="allow_once"||z.kind==="allow_always"?"primary":""}"
                                onClick=${()=>E(z.optionId||z.id||z)}
                            >
                                ${z.name||z.label||z.optionId||z.id||String(z)}
                            </button>
                        `):N`
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
    `}x0();x0();u_();function N6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>N6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${N6(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function FL(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:N6(j)})).filter(($)=>$.value)}function qz(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function J9(_){if(!Array.isArray(_))return[];return _.filter(qz)}function j8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=N6(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=FL(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function NL(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=FL(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):N6(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function C_(_){return typeof _==="string"?_.trim():""}function UL(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function Lz(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let q=C_(X.type);if(q==="text"){let L=C_(X.text)||C_(X.content);if(L)j.push(L);return}if(q==="resource_link"){let L=C_(X.uri),K=C_(X.title)||C_(X.name)||L;if(L&&K)j.push(K===L?L:`[${K}](${L})`);return}if(q==="resource"){let L=C_(X.title)||C_(X.name)||C_(X.uri)||"Embedded resource",K=C_(X.text);if(K)j.push(`### ${L}

\`\`\`
${K}
\`\`\``);else j.push(`### ${L}`);return}if(q==="generated_widget"){let L=C_(X.title)||C_(X.name)||"Generated widget",K=C_(X.description)||C_(X.subtitle);j.push(UL([`### ${L}`,K]));return}if(q==="adaptive_card"&&C_(X.fallback_text)){j.push(C_(X.fallback_text));return}if(q==="adaptive_card_submission"){let L=j8(X);if(C_(L))j.push(C_(L));return}if(q==="file"){let L=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${L}`);return}if(q==="image"||!q){let L=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${L}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return UL(j)}function G8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return Lz(G,Z)}function HL(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function EL(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function DL(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(HL(j,"aria-disabled","true"),HL(j,"tabindex","-1"),"disabled"in j)EL(j,"disabled");if("readOnly"in j)EL(j,"readOnly")}}function Kz(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function Vz(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function WL(_){return Kz(_)||Vz(_)}function Z8(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function Qz(_,$){let j=Math.max(Z8(_),Z8($)),G=Math.min(Z8(_),Z8($));return(j+0.05)/(G+0.05)}function Bz(_,$,j="#ffffff"){let G=WL(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let q=WL(Y);if(!q)continue;let L=Qz(G,q);if(L>X)Z=Y,X=L}return Z}function A9(){let _=getComputedStyle(document.documentElement),$=(H,D)=>{for(let E of H){let U=_.getPropertyValue(E).trim();if(U)return U}return D},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),K=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),B=$(["--font-family"],"system-ui, sans-serif"),F=Bz(q,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:q,good:L,warning:K,attention:Q,border:V,fontFamily:B,buttonTextColor:F}}function OL(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:q,border:L,fontFamily:K}=A9();return{fontFamily:K,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var Fz=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),zL=!1,X8=null,JL=!1;function k9(_){_.querySelector(".adaptive-card-notice")?.remove()}function Nz(_,$,j="error"){k9(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function Uz(_,$=(j)=>e_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function Hz(_=($)=>e_($,null)){return($,j)=>{try{let G=Uz($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function Ez(_){if(JL||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=Hz(),JL=!0}async function Dz(){if(zL)return;if(X8)return X8;return X8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{zL=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),X8}function Wz(){return globalThis.AdaptiveCards}function Oz(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function zz(_){return Fz.has(_)}function T9(_){if(!Array.isArray(_))return[];return _.filter(Oz)}function Jz(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function M9(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>M9($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${M9(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function Az(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return M9($);return typeof $==="string"?$:String($)}function kz(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((q)=>G(q));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=Az(Y.type,j[Y.id],Y);for(let[q,L]of Object.entries(Y))if(Array.isArray(L)||L&&typeof L==="object")Y[q]=G(L);return Y};return G(_)}function Mz(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function Tz(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=Mz(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function AL(_,$,j){if(!zz($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await Dz()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=Wz();Ez(G);let Z=new G.AdaptiveCard,X=A9();Z.hostConfig=new G.HostConfig(OL());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:kz($.payload,Y);Z.parse(q),Z.onExecuteAction=(Q)=>{let V=Jz(Q);if(j?.onAction)k9(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((B)=>{console.error("[adaptive-card] Action failed:",B);let F=B instanceof Error?B.message:String(B||"Action failed.");Nz(_,F||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let L=Z.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let K=Tz($);if(K){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=K.label,Q.appendChild(V),K.detail){let B=document.createElement("span");B.className="adaptive-card-status-detail",B.textContent=K.detail,Q.appendChild(B)}_.appendChild(Q)}if(k9(_),_.appendChild(L),K)DL(L);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}x0();T2();function kL({src:_,onClose:$}){return g(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),N`
        <${c$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${c$}>
    `}var Y8=0,w9=null,U6={activePostId:null,speaking:!1},y9=new Set;function I9(_={}){return _.window??(typeof window<"u"?window:null)}function ML(_={}){return I9(_)?.speechSynthesis||null}function x9(){let _={...U6};for(let $ of y9)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function C9(){return{...U6}}function TL(_){if(typeof _!=="function")return()=>{};return y9.add(_),_(C9()),()=>y9.delete(_)}function wL(_={}){let $=I9(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function yL(_){let $=G8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function xL(_={}){let $=ML(_);if(Y8+=1,w9=null,U6={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}x9()}function IL(_,$,j={}){let G=I9(j),Z=ML(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=Y8+1;Y8=Y;try{Z.cancel()}catch{}let q=new G.SpeechSynthesisUtterance(X);w9=q,U6={activePostId:_,speaking:!0},x9();let L=()=>{if(Y!==Y8)return;w9=null,U6={activePostId:null,speaking:!1},x9()};q.onend=L,q.onerror=L;try{return Z.speak(q),!0}catch(K){return console.warn("[post-speech] speak failed:",K),L(),!1}}async function fL(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function f9(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(q)=>{let L=q?.clipboardData;if(!L||typeof L.setData!=="function")return;if(L.setData("text/plain",j),G)L.setData("text/html",G);if(typeof q.preventDefault==="function")q.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let q=_.execCommand("copy");return Boolean(X||q)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function CL(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function PL(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let L=Z.getRangeAt(0);if(L&&typeof L.intersectsNode==="function")X=Boolean(L.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let L=CL(Z.anchorNode),K=CL(Z.focusNode);X=Boolean(L&&G.contains(L)||K&&G.contains(K))}if(!X)return!1;let q=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!q)return!1;return j.setData("text/plain",q),_?.preventDefault?.(),!0}function RL(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function SL(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function gL(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function wz({mediaId:_,onPreview:$}){let[j,G]=C(null);if(g(()=>{E2(_).then(G).catch((K)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,K)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?a_(X):"",L=F6(j.content_type,j.filename)!=="unsupported";return N`
        <div class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
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
    `}function yz(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function xz(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function Iz(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function Cz(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function fz(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function uL(_){let $=Cz(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():fz(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function Pz(_,$){let j=uL($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var Rz={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function Sz(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=Rz[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function gz(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function uz({marker:_}){let[$,j]=C(!1),G=f((V)=>{V.stopPropagation(),j((B)=>!B)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",q=_?.draft_recovered,L=String(_?.severity||"warning"),K=Y||Z||String(_?.label||_?.kind||"issue"),Q=Boolean(X||Z&&Y);return N`
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
    `}function bz({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=C(null);g(()=>{if(!Number.isFinite(j))return;E2(j).then(Z).catch((Q)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,Q)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?P1(j):null,q=F6(G?.content_type,G?.filename||_?.label),L=_8(q),K=q!=="unsupported";return N`
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
    `}function q8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?O4(G):null;return N`
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
    `}function vz({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?a_(_.size):"",Z=_.mime_type||"",X=lz(Z),Y=N4(_.uri);return N`
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
    `}function mz({block:_}){let[$,j]=C(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return N`
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
    `}function cz({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=H9(_,$),Z=yq(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",q=G?.description||_.description||_.subtitle||"",L=_.open_label||"Open widget",K=u(!1),Q=(V)=>{if(V)V.preventDefault(),V.stopPropagation();if(!G)return;j?.(G)};return g(()=>{if(!_?.auto_open||!G||!Z||K.current)return;let V=$?.timestamp?new Date($.timestamp).getTime():0;if(V&&Date.now()-V>1e4)return;let B=`widget_opened_${_.widget_id||$?.id||""}`;if(RL(sessionStorage,B))return;K.current=!0,SL(sessionStorage,B,"1"),j?.(G)},[_?.auto_open,G,Z]),N`
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
    `}function lz(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function hz(_){let $=N4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function pz({preview:_}){let $=N4(_.url),j=hz(_.image),G=gL(_.site_name,$);return N`
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
    `}function nz(_,$){return typeof _==="string"?_:""}var bL=1800,rz=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,dz=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,iz=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,oz=`
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
</style>`;async function vL(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(f9(document,{text:$}))return!0;if(await fL(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function sz(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=e_($,null),G=`<html><head>${oz}</head><body>${j}</body></html>`;if(f9(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return vL($)}function az(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let q=window.getSelection?.();if(!q||q.isCollapsed)return;for(let L of $)if(PL(Y,{root:L,selection:q}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,q)=>{let L=q||"idle";if(Y.dataset.copyState=L,L==="success")Y.innerHTML=dz,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(L==="error")Y.innerHTML=iz,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=rz,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let L=document.createElement("button");L.type="button",L.className="post-code-copy-btn",X(L,"idle"),q.appendChild(L);let K=async(Q)=>{Q.preventDefault(),Q.stopPropagation();let B=Y.querySelector("code")?.textContent||"",F=await vL(B);X(L,F?"success":"error");let H=j.get(L);if(H)clearTimeout(H);let D=setTimeout(()=>{X(L,"idle"),j.delete(L)},bL);j.set(L,D)};L.addEventListener("click",K),G.push(()=>{L.removeEventListener("click",K);let Q=j.get(L);if(Q)clearTimeout(Q);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{G.forEach((Y)=>Y())}}function tz(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function ez(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=tz(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:Z}}function _J(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let V=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:Z}}function $J(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1){let Q=j[K].trim();if((Q==="Images:"||Q==="Attachments:")&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let B=V[1],F=(V[2]||"").trim()||B;Z.push({id:B,label:F,raw:Q})}else Z.push({id:null,label:Q,raw:Q})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),q=j.slice(X),L=[...Y,...q].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:Z}}function jJ(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function GJ(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(jJ).sort((Q,V)=>V.length-Q.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),q=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),L=[],K;while(K=q.nextNode())L.push(K);for(let Q of L){let V=Q.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let B=Q.parentElement;if(B&&B.closest("code, pre, script, style"))continue;let F=V.split(Z).filter((D)=>D!=="");if(F.length===0)continue;let H=Y.createDocumentFragment();for(let D of F)if(X.test(D)){let E=Y.createElement("mark");E.className="search-highlight-term",E.textContent=D,H.appendChild(E)}else H.appendChild(Y.createTextNode(D));Q.parentNode.replaceChild(H,Q)}return Y.body.innerHTML}function mL({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:q,userAvatarUrl:L,userAvatarBackground:K,onDelete:Q,isThreadReply:V,isThreadPrev:B,isThreadNext:F,isRemoving:H,highlightQuery:D,onFileRef:E,onOpenWidget:U,onOpenAttachmentPreview:A}){let[z,O]=C(null),[y,I]=C("idle"),[k,J]=C(()=>C9()),M=u(null),W=u(null),T=_.data,x=T.type==="agent_response",P=q||"You",R=x?X||GL:P,v=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",c=Boolean(x&&D&&v&&v!==R),h=x?W9(X,Y,!0):W9(P,L),r=typeof K==="string"?K.trim().toLowerCase():"",b=!x&&h.image&&(r==="clear"||r==="transparent"),s=x&&Boolean(h.image),a=`background-color: ${b||s?"transparent":h.color}`,q0=T.content_meta,Z0=Boolean(q0?.truncated),H0=Boolean(q0?.preview),N0=Z0&&!H0,L0=Z0?{originalLength:Number.isFinite(q0?.original_length)?q0.original_length:T.content?T.content.length:0,maxLength:Number.isFinite(q0?.max_length)?q0.max_length:0}:null,D0=T.content_blocks||[],Q0=T.media_ids||[],k0=uL(D0),i=Boolean(k0?.sourceAgentName),j0=nz(T.content,T.link_previews);j0=Pz(j0,D0);let{content:C0,fileRefs:M0}=ez(j0),{content:m0,messageRefs:c0}=_J(C0),Z_=(_0)=>{_0?.preventDefault?.(),_0?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},h0=(_0)=>{if(_0.key==="Enter"||_0.key===" ")Z_(_0)},{content:l0,attachments:T0}=$J(m0);j0=l0;let n0=T9(D0),b0=J9(D0),U_=yz(D0)[0]||null,K_=xz(D0)[0]||null,J0=Iz(D0)[0]||null,r0=n0.length===1&&typeof n0[0]?.fallback_text==="string"?n0[0].fallback_text.trim():"",q_=b0.length===1?j8(b0[0]).trim():"",z_=Boolean(r0)&&j0?.trim()===r0||Boolean(q_)&&j0?.trim()===q_,F0=Boolean(j0)&&!N0&&!z_,w0=typeof D==="string"?D.trim():"",f0=X0(()=>{if(!j0||z_)return"";let _0=e_(j0,j);return w0?GJ(_0,w0):_0},[j0,z_,w0]),N_=X0(()=>G8(_),[_]),A_=X0(()=>wL(),[]),Q_=X0(()=>yL(_),[_]),X_=Boolean(k.speaking&&k.activePostId===_.id),D_=(_0,W0)=>{_0.stopPropagation(),O(P1(W0))},T_=(_0)=>{A?.(_0)},$0=(_0)=>{_0.stopPropagation(),Q?.(_)},O0=async(_0)=>{_0.stopPropagation();let W0=await sz(N_);if(I(W0?"success":"error"),W.current)clearTimeout(W.current);W.current=setTimeout(()=>{W.current=null,I("idle")},bL)},A0=(_0)=>{if(_0.stopPropagation(),X_){xL();return}IL(_.id,Q_)},u0=(_0,W0)=>{let s0=new Set;if(!_0||W0.length===0)return{content:_0,usedIds:s0};return{content:_0.replace(/attachment:([^\s)"']+)/g,(f_,W_,x_,i1)=>{let J_=W_.replace(/^\/+/,""),O1=W0.find((n_)=>n_.name&&n_.name.toLowerCase()===J_.toLowerCase()&&!s0.has(n_.id))||W0.find((n_)=>!s0.has(n_.id));if(!O1)return f_;if(s0.add(O1.id),i1.slice(Math.max(0,x_-2),x_)==="](")return`/media/${O1.id}`;return O1.name||"attachment"}),usedIds:s0}},v0=[],e=[],o=[],d=[],Y0=[],G0=[],E0=[],I0=0;if(D0.length>0)D0.forEach((_0)=>{if(_0?.type==="text"&&_0.annotations)E0.push(_0.annotations);if(_0?.type==="generated_widget")G0.push(_0);else if(_0?.type==="resource_link")d.push(_0);else if(_0?.type==="resource")Y0.push(_0);else if(_0?.type==="file"){let W0=Q0[I0++];if(W0)e.push(W0),o.push({id:W0,name:_0?.name||_0?.filename||_0?.title})}else if(_0?.type==="image"||!_0?.type){let W0=Q0[I0++];if(W0){let s0=typeof _0?.mime_type==="string"?_0.mime_type:void 0;v0.push({id:W0,annotations:_0?.annotations,mimeType:s0}),o.push({id:W0,name:_0?.name||_0?.filename||_0?.title})}}});else if(Q0.length>0){let _0=T0.length>0;Q0.forEach((W0,s0)=>{let d0=T0[s0]||null;if(o.push({id:W0,name:d0?.label||null}),_0)e.push(W0);else v0.push({id:W0,annotations:null})})}if(T0.length>0)T0.forEach((_0)=>{if(!_0?.id)return;let W0=o.find((s0)=>String(s0.id)===String(_0.id));if(W0&&!W0.name)W0.name=_0.label});let{content:t0,usedIds:z0}=u0(j0,o);j0=t0;let R0=v0.filter(({id:_0})=>!z0.has(_0)),e0=e.filter((_0)=>!z0.has(_0)),L_=T0.length>0?T0.map((_0,W0)=>({id:_0.id||`attachment-${W0+1}`,label:_0.label||`attachment-${W0+1}`})):o.map((_0,W0)=>({id:_0.id,label:_0.name||`attachment-${W0+1}`})),j_=X0(()=>T9(D0),[D0]),F_=X0(()=>J9(D0),[D0]),k_=X0(()=>{return j_.map((_0)=>`${_0.card_id}:${_0.state}`).join("|")},[j_]);g(()=>{if(!M.current)return;return N$(M.current),az(M.current)},[f0]),g(()=>{return TL((_0)=>{J(_0)})},[]),g(()=>()=>{if(W.current)clearTimeout(W.current)},[]);let __=u(null);return g(()=>{if(!__.current||j_.length===0)return;let _0=__.current;_0.innerHTML="";for(let W0 of j_){let s0=document.createElement("div");_0.appendChild(s0),AL(s0,W0,{onAction:async(d0)=>{if(d0.type==="Action.OpenUrl"){let f_=N4(d0.url||"");if(!f_)throw Error("Invalid URL");window.open(f_,"_blank","noopener,noreferrer");return}if(d0.type==="Action.Submit"){await Y7({post_id:_.id,thread_id:T.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:W0.card_id,action:{type:d0.type,title:d0.title||"",data:d0.data}});return}console.warn("[post] unsupported adaptive card action:",d0.type,d0)}}).catch((d0)=>{console.error("[post] adaptive card render error:",d0),s0.textContent=W0.fallback_text||"Card failed to render."})}},[k_,_.id]),N`
        <div id=${`post-${_.id}`} class="post ${x?"agent-post":""} ${V?"thread-reply":""} ${B?"thread-prev":""} ${F?"thread-next":""} ${H?"removing":""}" onClick=${$}>
            <div class="post-avatar ${x?"agent-avatar":""} ${h.image?"has-image":""}" style=${a}>
                ${h.image?N`<img src=${h.image} alt=${R} />`:h.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${x&&A_&&Q_&&N`
                        <button
                            class=${`post-action-btn post-speak-btn${X_?" is-active":""}`}
                            type="button"
                            title=${X_?"Stop reading aloud":"Read aloud"}
                            aria-label=${X_?"Stop reading aloud":"Read aloud"}
                            onClick=${A0}
                        >
                            ${X_?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${y==="success"?" is-success":y==="error"?" is-error":""}`}
                        type="button"
                        title=${y==="success"?"Copied":y==="error"?"Copy failed":"Copy message"}
                        aria-label=${y==="success"?"Copied":y==="error"?"Copy failed":"Copy message"}
                        onClick=${O0}
                        disabled=${!N_}
                    >
                        ${y==="success"?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:y==="error"?N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:N`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
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
                    <span class="post-author">${R}</span>
                    ${i&&N`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${k0?.sourceChatJid||""}`.trim()}
                        >
                            @${k0?.sourceAgentName}
                        </span>
                    `}
                    ${c&&N`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${v} and reference this message`}
                            onClick=${Z_}
                            onKeyDown=${h0}
                        >
                            @${v}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${Z_}>${sZ(_.timestamp)}</a>
                    ${U_&&N`
                        <span
                            class="post-recovery-chip"
                            title=${Sz(U_)}
                        >
                            recovered
                        </span>
                    `}
                    ${K_&&N`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${gz(K_)}
                        >
                            timeout
                        </span>
                    `}
                    ${J0&&N`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(J0.severity||"warning")}${J0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(J0.label||J0.kind||"issue")}
                        >
                            ${String(J0.label||J0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${J0&&N`
                    <${uz} marker=${J0} />
                `}
                ${N0&&L0&&N`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${$6(L0.originalLength)} chars
                            ${L0.maxLength?N` • Display limit: ${$6(L0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${H0&&L0&&N`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${$6(L0.maxLength)} of ${$6(L0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(M0.length>0||c0.length>0||L_.length>0)&&N`
                    <div class="post-file-refs">
                        ${c0.map((_0)=>{let W0=(s0)=>{if(s0.preventDefault(),s0.stopPropagation(),Z)Z(_0,_.chat_jid||null);else{let d0=document.getElementById("post-"+_0);if(d0)d0.scrollIntoView({behavior:"smooth",block:"center"}),d0.classList.add("post-highlight"),setTimeout(()=>d0.classList.remove("post-highlight"),2000)}};return N`
                                <a href=${`#msg-${_0}`} class="post-msg-pill-link" onClick=${W0}>
                                    <${k1}
                                        prefix="post"
                                        label=${"msg:"+_0}
                                        title=${"Message "+_0}
                                        icon="message"
                                        onClick=${W0}
                                    />
                                </a>
                            `})}
                        ${M0.map((_0)=>{let W0=_0.split("/").pop()||_0;return N`
                                <${k1}
                                    prefix="post"
                                    label=${W0}
                                    title=${_0}
                                    onClick=${()=>E?.(_0)}
                                />
                            `})}
                        ${L_.map((_0)=>N`
                            <${bz}
                                key=${_0.id}
                                attachment=${_0}
                                onPreview=${T_}
                            />
                        `)}
                    </div>
                `}
                ${F0&&N`
                    <div 
                        ref=${M}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:f0}}
                        onClick=${(_0)=>{if(_0.target.classList.contains("hashtag")){_0.preventDefault(),_0.stopPropagation();let W0=_0.target.dataset.hashtag;if(W0)j?.(W0)}else if(_0.target.tagName==="IMG")_0.preventDefault(),_0.stopPropagation(),O(_0.target.src)}}
                    />
                `}
                ${j_.length>0&&N`
                    <div ref=${__} class="post-adaptive-cards" />
                `}
                ${F_.length>0&&N`
                    <div class="post-adaptive-card-submissions">
                        ${F_.map((_0,W0)=>{let s0=NL(_0),d0=`${_0.card_id}-${W0}`;return N`
                                <div key=${d0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${s0.title}</span>
                                        </div>
                                    </div>
                                    ${s0.fields.length>0&&N`
                                        <div class="adaptive-card-submission-fields">
                                            ${s0.fields.map((f_)=>N`
                                                <span class="adaptive-card-submission-field" title=${`${f_.key}: ${f_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${f_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${f_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${O4(s0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${G0.length>0&&N`
                    <div class="generated-widget-launches">
                        ${G0.map((_0,W0)=>N`
                            <${cz}
                                key=${_0.widget_id||_0.id||`${_.id}-widget-${W0}`}
                                block=${_0}
                                post=${_}
                                onOpenWidget=${U}
                            />
                        `)}
                    </div>
                `}
                ${E0.length>0&&N`
                    ${E0.map((_0,W0)=>N`
                        <${q8} key=${W0} annotations=${_0} />
                    `)}
                `}
                ${R0.length>0&&N`
                    <div class="media-preview">
                        ${R0.map(({id:_0,mimeType:W0})=>{let d0=typeof W0==="string"&&W0.toLowerCase().startsWith("image/svg")?P1(_0):L7(_0);return N`
	                                <img
	                                    key=${_0}
	                                    src=${d0}
	                                    alt="Media"
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(f_)=>D_(f_,_0)}
                                />
                            `})}
                    </div>
                `}
                ${R0.length>0&&N`
                    ${R0.map(({annotations:_0},W0)=>N`
                        ${_0&&N`<${q8} key=${W0} annotations=${_0} />`}
                    `)}
                `}
                ${e0.length>0&&N`
                    <div class="file-attachments">
                        ${e0.map((_0)=>N`
                            <${wz} key=${_0} mediaId=${_0} onPreview=${T_} />
                        `)}
                    </div>
                `}
                ${d.length>0&&N`
                    <div class="resource-links">
                        ${d.map((_0,W0)=>N`
                            <div key=${W0}>
                                <${vz} block=${_0} />
                                <${q8} annotations=${_0.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y0.length>0&&N`
                    <div class="resource-embeds">
                        ${Y0.map((_0,W0)=>N`
                            <div key=${W0}>
                                <${mz} block=${_0} />
                                <${q8} annotations=${_0.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${T.link_previews?.length>0&&N`
                    <div class="link-previews">
                        ${T.link_previews.map((_0,W0)=>N`
                            <${pz} key=${W0} preview=${_0} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${z&&N`<${kL} src=${z} onClose=${()=>O(null)} />`}

    `}function cL({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:q,onOpenWidget:L,onOpenAttachmentPreview:K,emptyMessage:Q,timelineRef:V,agents:B,user:F,onDeletePost:H,reverse:D=!0,removingPostIds:E,searchQuery:U}){let[A,z]=C(!1),O=u(null),y=typeof IntersectionObserver<"u",I=f(async()=>{if(!j||!$||A)return;z(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{z(!1)}},[$,A,j]),k=f((v)=>{let{scrollTop:c,scrollHeight:h,clientHeight:r}=v.target,b=D?h-r-c:c,s=Math.max(300,r);if(b<s)I()},[D,I]);g(()=>{if(!y)return;let v=O.current,c=V?.current;if(!v||!c)return;let h=300,r=new IntersectionObserver((b)=>{for(let s of b){if(!s.isIntersecting)continue;I()}},{root:c,rootMargin:`${h}px 0px ${h}px 0px`,threshold:0});return r.observe(v),()=>r.disconnect()},[y,$,j,V,I]);let J=u(I);if(J.current=I,g(()=>{if(y)return;if(!V?.current)return;let{scrollTop:v,scrollHeight:c,clientHeight:h}=V.current,r=D?c-h-v:v,b=Math.max(300,h);if(r<b)J.current?.()},[y,_,$,D,V]),g(()=>{if(!V?.current)return;if(!$||A)return;let{scrollTop:v,scrollHeight:c,clientHeight:h}=V.current,r=D?c-h-v:v,b=Math.max(300,h);if(c<=h+1||r<b)J.current?.()},[_,$,A,D,V]),!_)return N`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return N`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let M=_.slice().sort((v,c)=>v.id-c.id),W=(v)=>{let c=v?.data?.thread_id;if(c===null||c===void 0||c==="")return null;let h=Number(c);return Number.isFinite(h)?h:null},T=new Map;for(let v=0;v<M.length;v+=1){let c=M[v],h=Number(c?.id),r=W(c);if(r!==null){let b=T.get(r)||{anchorIndex:-1,replyIndexes:[]};b.replyIndexes.push(v),T.set(r,b)}else if(Number.isFinite(h)){let b=T.get(h)||{anchorIndex:-1,replyIndexes:[]};b.anchorIndex=v,T.set(h,b)}}let x=new Map;for(let[v,c]of T.entries()){let h=new Set;if(c.anchorIndex>=0)h.add(c.anchorIndex);for(let r of c.replyIndexes)h.add(r);x.set(v,Array.from(h).sort((r,b)=>r-b))}let P=M.map((v,c)=>{let h=W(v);if(h===null)return{hasThreadPrev:!1,hasThreadNext:!1};let r=x.get(h);if(!r||r.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let b=r.indexOf(c);if(b<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:b>0,hasThreadNext:b<r.length-1}}),R=N`<div class="timeline-sentinel" ref=${O}></div>`;return N`
        <div class="timeline ${D?"reverse":"normal"}" ref=${V} onScroll=${k}>
            <div class="timeline-content">
                ${D?R:null}
                ${M.map((v,c)=>{let h=Boolean(v.data?.thread_id&&v.data.thread_id!==v.id),r=E?.has?.(v.id),b=P[c]||{};return N`
                    <${mL}
                        key=${v.id}
                        post=${v}
                        isThreadReply=${h}
                        isThreadPrev=${b.hasThreadPrev}
                        isThreadNext=${b.hasThreadNext}
                        isRemoving=${r}
                        highlightQuery=${U}
                        agentName=${ZL(v.data?.agent_id,B||{})}
                        agentAvatarUrl=${XL(v.data?.agent_id,B||{})}
                        userName=${F?.name||F?.user_name}
                        userAvatarUrl=${F?.avatar_url||F?.avatarUrl||F?.avatar}
                        userAvatarBackground=${F?.avatar_background||F?.avatarBackground}
                        onClick=${()=>G?.(v)}
                        onHashtagClick=${Z}
                        onMessageRef=${X}
                        onScrollToMessage=${Y}
                        onFileRef=${q}
                        onOpenWidget=${L}
                        onDelete=${H}
                        onOpenAttachmentPreview=${K}
                    />
                `})}
                ${D?null:R}
            </div>
        </div>
    `}x0();u_();function lL(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var L8="workspaceExplorerScale",ZJ=["compact","default","comfortable"],XJ=new Set(ZJ),YJ={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function hL(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return XJ.has(j)?j:$}function P9(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function qJ(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function LJ(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function R9(_={}){let $=qJ(_),j=_.stored?hL(_.stored,$):$;return LJ(j,_)}function pL(_){return YJ[hL(_)]}h7();function KJ(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function S9(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function nL(_,$,j={}){let G=j.resolvePane;if(S9(_,G))return!0;return KJ($)}var sL=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function VJ(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return S9($,(j)=>Y_.resolve(j))}function aL(_,$,j,G=0,Z=[]){if(!j&&sL(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)aL(X,$,j,G+1,Z);return Z}function rL(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&sL(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function v9(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((q)=>[q?.path,q])):new Map,X=!j||j.length!==G.length,Y=G.map((q)=>{let L=v9(Z.get(q.path),q);if(L!==Z.get(q.path))X=!0;return L});return X?{...$,children:Y}:_}function u9(_,$,j){if(!_)return _;if(_.path===$)return v9(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=u9(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var tL=4,g9=14,QJ=16;function eL(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=eL(G);return _.__bytes=j,j}function _K(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=tL)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let q of Z){let L=Math.max(0,Number(q?.__bytes??q?.size??0));if(L<=0)continue;if(q.type==="dir")X.push({kind:"dir",node:q,size:L});else X.push({kind:"file",name:q.name,path:q.path,size:L})}X.sort((q,L)=>L.size-q.size);let Y=X;if(X.length>g9){let q=X.slice(0,g9-1),L=X.slice(g9-1),K=L.reduce((Q,V)=>Q+V.size,0);q.push({kind:"other",name:`+${L.length} more`,path:`${G.path}/[other]`,size:K}),Y=q}return G.children=Y.map((q)=>{if(q.kind==="dir")return _K(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),G}function dL(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function $K(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function K8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function m9(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,q=X-Z>Y?Z+Y:X,L=K8(_,$,G,Z),K=K8(_,$,G,q),Q=K8(_,$,j,q),V=K8(_,$,j,Z),B=q-Z>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${G} ${G} 0 ${B} 1 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${B} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var jK={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function GK(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(q,L,K,Q)=>{let V=Array.isArray(q?.children)?q.children:[];if(!V.length)return;let B=Math.max(0,Number(q.size)||0);if(B<=0)return;let F=K-L,H=L;V.forEach((D,E)=>{let U=Math.max(0,Number(D.size)||0);if(U<=0)return;let A=U/B,z=H,O=E===V.length-1?K:H+F*A;if(H=O,O-z<0.003)return;let y=jK[Q];if(y){let I=$K(z,Q,j);if(G.push({key:D.path,path:D.path,label:D.name,size:U,color:I,depth:Q,startAngle:z,endAngle:O,innerRadius:y[0],outerRadius:y[1],d:m9(120,120,y[0],y[1],z,O)}),Q===1)Z.push({key:D.path,name:D.name,size:U,pct:X>0?U/X*100:0,color:I})}if(Q<tL)Y(D,z,O,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function b9(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=b9(G,$);if(Z)return Z}return null}function ZK(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=jK[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,q=$K(X,1,G),K=`${$||"."}/[files]`;return{segments:[{key:K,path:K,label:_,size:j,color:q,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:m9(120,120,Z[0],Z[1],X,Y)}],legend:[{key:K,name:_,size:j,pct:100,color:q}]}}function iL(_,$=!1,j=!1){if(!_)return null;let G=eL(_),Z=_K(_,0),X=Z.size||G,{segments:Y,legend:q}=GK(Z,X,j);if(!Y.length&&X>0){let L=ZK("[files]",Z.path,X,j);Y=L.segments,q=L.legend}return{root:Z,totalSize:X,segments:Y,legend:q,truncated:$,isDarkTheme:j}}function BJ({payload:_}){if(!_)return null;let[$,j]=C(null),[G,Z]=C(_?.root?.path||"."),[X,Y]=C(()=>[_?.root?.path||"."]),[q,L]=C(!1);g(()=>{let W=_?.root?.path||".";Z(W),Y([W]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!G)return;L(!0);let W=setTimeout(()=>L(!1),180);return()=>clearTimeout(W)},[G]);let K=X0(()=>{return b9(_.root,G)||_.root},[_?.root,G]),Q=K?.size||_.totalSize||0,{segments:V,legend:B}=X0(()=>{let W=GK(K,Q,_.isDarkTheme);if(W.segments.length>0)return W;if(Q<=0)return W;let T=K?.children?.length?"Total":"[files]";return ZK(T,K?.path||_?.root?.path||".",Q,_.isDarkTheme)},[K,Q,_.isDarkTheme,_?.root?.path]),[F,H]=C(V),D=u(new Map),E=u(0);g(()=>{let W=D.current,T=new Map(V.map((v)=>[v.key,v])),x=performance.now(),P=220,R=(v)=>{let c=Math.min(1,(v-x)/220),h=c*(2-c),r=V.map((b)=>{let a=W.get(b.key)||{startAngle:b.startAngle,endAngle:b.startAngle,innerRadius:b.innerRadius,outerRadius:b.innerRadius},q0=(D0,Q0)=>D0+(Q0-D0)*h,Z0=q0(a.startAngle,b.startAngle),H0=q0(a.endAngle,b.endAngle),N0=q0(a.innerRadius,b.innerRadius),L0=q0(a.outerRadius,b.outerRadius);return{...b,d:m9(120,120,N0,L0,Z0,H0)}});if(H(r),c<1)E.current=requestAnimationFrame(R)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(R),D.current=T,()=>{if(E.current)cancelAnimationFrame(E.current)}},[V]);let U=F.length?F:V,A=Q>0?a_(Q):"0 B",z=K?.name||"",y=(z&&z!=="."?z:"Total")||"Total",I=A,k=X.length>1,J=(W)=>{if(!W?.path)return;let T=b9(_.root,W.path);if(!T||!Array.isArray(T.children)||T.children.length===0)return;Y((x)=>[...x,T.path]),Z(T.path),j(null)},M=()=>{if(!k)return;Y((W)=>{let T=W.slice(0,-1);return Z(T[T.length-1]||_?.root?.path||"."),T}),j(null)};return N`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${K?.path||_?.root?.path||"."}`}
                data-segments=${U.length}
                data-base-size=${Q}>
                ${U.map((W)=>N`
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
                        <title>${W.label} — ${a_(W.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${k?" is-drill":""}`}
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${I}</text>
                </g>
            </svg>
            ${B.length>0&&N`
                <div class="workspace-folder-starburst-legend">
                    ${B.slice(0,8).map((W)=>N`
                        <div key=${W.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${W.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${W.name}>${W.name}</span>
                            <span class="workspace-folder-starburst-size">${a_(W.size)}</span>
                            <span class="workspace-folder-starburst-pct">${W.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&N`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function oL(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function XK(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function FJ(_){if(!_)return"Workspace index status";let $=[XK(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function NJ(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function UJ(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function HJ(_,$=null){let j=NJ(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:UJ(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function YK({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:G,onOpenTerminalTab:Z,onOpenVncTab:X,onToggleTerminal:Y,terminalVisible:q=!1}){let[L,K]=C(null),[Q,V]=C(new Set(["."])),[B,F]=C(null),[H,D]=C(null),[E,U]=C(""),[A,z]=C(null),[,O]=C(null),[y,I]=C(!0),[k,J]=C(!1),[M,W]=C(null),[T,x]=C(()=>Q$("workspaceShowHidden",!1)),[P,R]=C(!1),[v,c]=C(null),[h,r]=C(null),[b,s]=C(null),[a,q0]=C(!1),[Z0,H0]=C(null),[N0,L0]=C(null),[D0,Q0]=C(null),[k0,i]=C(!1),[j0,C0]=C(()=>Y5()),[M0,m0]=C(()=>dL()),[c0,Z_]=C(()=>R9({stored:B1(L8),...P9()})),[h0,l0]=C(!1),T0=Math.max(15000,(Number(j0?.refreshIntervalSec)||60)*1000),n0=Math.max(0,Number(j0?.folderPreviewDepth)||0),b0=u(Q),o0=u(""),U_=u(null),H_=u(0),K_=u(new Set),g0=u(null),J0=u(null),r0=u(new Map),q_=u(_),z_=u(G),F0=u(null),w0=u(null),f0=u(null),N_=u(null),A_=u(null),Q_=u(null),X_=u("."),D_=u(0),T_=u({path:null,dragging:!1,startX:0,startY:0}),$0=u({path:null,dragging:!1,startX:0,startY:0}),O0=u({path:null,timer:0}),A0=u(!1),u0=u(0),v0=u(new Map),e=u(null),o=u(null),d=u(null),Y0=u(null),G0=u(null),E0=u(null),I0=u(T),t0=u($),z0=u(j??$),R0=u(0),e0=u(b),L_=u(P),j_=u(v),F_=u(null),k_=u({x:0,y:0}),__=u(0),_0=u(null),W0=u(B),s0=u(H),d0=u(null),f_=u(A);q_.current=_,z_.current=G,g(()=>{b0.current=Q},[Q]),g(()=>{I0.current=T},[T]),g(()=>{t0.current=$},[$]),g(()=>{z0.current=j??$},[j,$]),g(()=>{e0.current=b},[b]);let W_=f(()=>{if(!D_.current)return;clearTimeout(D_.current),D_.current=0},[]);g(()=>()=>W_(),[W_]),g(()=>{if(typeof window>"u")return;let S=()=>{Z_(R9({stored:B1(L8),...P9()}))};S();let l=()=>S(),p=()=>S(),t=(B0)=>{if(!B0||B0.key===null||B0.key===L8)S()};window.addEventListener("resize",l),window.addEventListener("focus",p),window.addEventListener("storage",t);let U0=window.matchMedia?.("(pointer: coarse)"),K0=window.matchMedia?.("(hover: none)"),y0=(B0,i0)=>{if(!B0)return;if(B0.addEventListener)B0.addEventListener("change",i0);else if(B0.addListener)B0.addListener(i0)},P0=(B0,i0)=>{if(!B0)return;if(B0.removeEventListener)B0.removeEventListener("change",i0);else if(B0.removeListener)B0.removeListener(i0)};return y0(U0,l),y0(K0,l),()=>{window.removeEventListener("resize",l),window.removeEventListener("focus",p),window.removeEventListener("storage",t),P0(U0,l),P0(K0,l)}},[]),g(()=>{if(typeof window>"u")return;let S=()=>{C0(Y5())},l=(U0)=>{if(!U0||U0.key===null||U0.key===P2||U0.key===R2)S()},p=()=>S(),t=(U0)=>{let K0=U0?.detail?.settings;if(K0&&typeof K0==="object"){C0({refreshIntervalSec:Number(K0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(K0.folderPreviewDepth)||0)});return}S()};return window.addEventListener("focus",p),window.addEventListener("storage",l),window.addEventListener(f2,t),()=>{window.removeEventListener("focus",p),window.removeEventListener("storage",l),window.removeEventListener(f2,t)}},[]),g(()=>{let S=(l)=>{let p=l?.detail?.path;if(!p)return;let t=p.split("/"),U0=[];for(let K0=1;K0<t.length;K0++)U0.push(t.slice(0,K0).join("/"));if(U0.length)V((K0)=>{let y0=new Set(K0);y0.add(".");for(let P0 of U0)y0.add(P0);return y0});F(p),requestAnimationFrame(()=>{let K0=document.querySelector(`[data-path="${CSS.escape(p)}"]`);if(K0)K0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",S),()=>window.removeEventListener("workspace-reveal-path",S)},[]),g(()=>{L_.current=P},[P]),g(()=>{j_.current=v},[v]),g(()=>{W0.current=B},[B]),g(()=>{s0.current=H},[H]),g(()=>{f_.current=A},[A]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let S=()=>m0(dL());S();let l=window.matchMedia?.("(prefers-color-scheme: dark)"),p=()=>S();if(l?.addEventListener)l.addEventListener("change",p);else if(l?.addListener)l.addListener(p);let t=typeof MutationObserver<"u"?new MutationObserver(()=>S()):null;if(t?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)t?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(l?.removeEventListener)l.removeEventListener("change",p);else if(l?.removeListener)l.removeListener(p);t?.disconnect()}},[]),g(()=>{if(!H)return;let S=A_.current;if(!S)return;let l=requestAnimationFrame(()=>{lL(S)});return()=>cancelAnimationFrame(l)},[H]),g(()=>{if(!h0)return;let S=(p)=>{let t=p?.target;if(!(t instanceof Element))return;if(G0.current?.contains(t))return;if(E0.current?.contains(t))return;l0(!1)},l=(p)=>{if(p?.key==="Escape")l0(!1),E0.current?.focus?.()};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S,{passive:!0}),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S),document.removeEventListener("keydown",l)}},[h0]);let x_=async(S,l={})=>{let p=Boolean(l?.autoOpen),t=String(S||"").trim();J(!0),z(null),O(null);try{let U0=await F7(t,20000);if(p&&t&&nL(t,U0,{resolvePane:(K0)=>Y_.resolve(K0)}))return z_.current?.(t,U0),U0;return z(U0),U0}catch(U0){let K0={error:U0.message||"Failed to load preview"};return z(K0),K0}finally{J(!1)}};F0.current=x_;let i1=f(async()=>{try{let S=await Q7("all");return Q0(S),S}catch(S){return console.warn("[workspace-explorer] Failed to load workspace index status:",S),null}},[]);J0.current=i1;let J_=f(()=>{J0.current?.()},[]),d_=async()=>{if(!t0.current)return;try{let S=await a5("",1,I0.current),l=rL(S.root,b0.current,I0.current);if(l===o0.current){I(!1);return}if(o0.current=l,U_.current=S.root,!H_.current)H_.current=requestAnimationFrame(()=>{H_.current=0,K((p)=>v9(p,U_.current)),I(!1)})}catch(S){W(S.message||"Failed to load workspace"),I(!1)}},O1=async(S)=>{if(!S)return;if(K_.current.has(S))return;K_.current.add(S);try{let l=await a5(S,1,I0.current);K((p)=>u9(p,S,l.root))}catch(l){W(l.message||"Failed to load workspace")}finally{K_.current.delete(S)}};w0.current=O1;let v_=f(()=>{let S=B;if(!S)return".";let l=r0.current?.get(S);if(l&&l.type==="dir")return l.path;if(S==="."||!S.includes("/"))return".";let p=S.split("/");return p.pop(),p.join("/")||"."},[B]),n_=f((S)=>{let l=S?.closest?.(".workspace-row");if(!l)return null;let p=l.dataset.path,t=l.dataset.type;if(!p)return null;if(t==="dir")return p;if(p.includes("/")){let U0=p.split("/");return U0.pop(),U0.join("/")||"."}return"."},[]),q1=f((S)=>{return n_(S?.target||null)},[n_]),$_=f((S)=>{e0.current=S,s(S)},[]),m_=f(()=>{let S=O0.current;if(S?.timer)clearTimeout(S.timer);O0.current={path:null,timer:0}},[]),i_=f((S)=>{if(!S||S==="."){m_();return}let l=r0.current?.get(S);if(!l||l.type!=="dir"){m_();return}if(b0.current?.has(S)){m_();return}if(O0.current?.path===S)return;m_();let p=setTimeout(()=>{O0.current={path:null,timer:0},w0.current?.(S),V((t)=>{let U0=new Set(t);return U0.add(S),U0})},600);O0.current={path:S,timer:p}},[m_]),L1=f((S,l)=>{if(k_.current={x:S,y:l},__.current)return;__.current=requestAnimationFrame(()=>{__.current=0;let p=F_.current;if(!p)return;let t=k_.current;p.style.transform=`translate(${t.x+12}px, ${t.y+12}px)`})},[]),M1=f((S)=>{if(!S)return;let p=(r0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!p)return;r({path:S,label:p})},[]),o1=f(()=>{if(r(null),__.current)cancelAnimationFrame(__.current),__.current=0;if(F_.current)F_.current.style.transform="translate(-9999px, -9999px)"},[]),z$=f((S)=>{if(!S)return".";let l=r0.current?.get(S);if(l&&l.type==="dir")return l.path;if(S==="."||!S.includes("/"))return".";let p=S.split("/");return p.pop(),p.join("/")||"."},[]),F1=f(()=>{D(null),U("")},[]),o_=f((S)=>{if(!S)return;let p=(r0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!p||S===".")return;D(S),U(p)},[]),r_=f(async()=>{let S=s0.current;if(!S)return;let l=(E||"").trim();if(!l){F1();return}let p=r0.current?.get(S),t=(p?.name||S.split("/").pop()||S).trim();if(l===t){F1();return}try{let K0=(await H7(S,l))?.path||S,y0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(F1(),W(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:S,newPath:K0,type:p?.type||"file"}})),p?.type==="dir")V((P0)=>{let B0=new Set;for(let i0 of P0)if(i0===S)B0.add(K0);else if(i0.startsWith(`${S}/`))B0.add(`${K0}${i0.slice(S.length)}`);else B0.add(i0);return B0});if(F(K0),p?.type==="dir")z(null),J(!1),O(null);else F0.current?.(K0);w0.current?.(y0),J_()}catch(U0){W(U0?.message||"Failed to rename file")}},[F1,E,J_]),t$=f(async(S)=>{let t=S||".";for(let U0=0;U0<50;U0+=1){let y0=`untitled${U0===0?"":`-${U0}`}.md`;try{let B0=(await U7(t,y0,""))?.path||(t==="."?y0:`${t}/${y0}`);if(t&&t!==".")V((i0)=>new Set([...i0,t]));F(B0),W(null),w0.current?.(t),F0.current?.(B0),J_();return}catch(P0){if(P0?.status===409||P0?.code==="file_exists")continue;W(P0?.message||"Failed to create file");return}}W("Failed to create file (untitled name already in use).")},[]),j1=f((S)=>{if(S?.stopPropagation?.(),a)return;let l=z$(W0.current);t$(l)},[a,z$,t$]);g(()=>{if(typeof window>"u")return;let S=(l)=>{let p=l?.detail?.updates||[];if(!Array.isArray(p)||p.length===0)return;K((P0)=>{let B0=P0;for(let i0 of p){if(!i0?.root)continue;if(!B0||i0.path==="."||!i0.path)B0=i0.root;else B0=u9(B0,i0.path,i0.root)}if(B0)o0.current=rL(B0,b0.current,I0.current);return I(!1),B0});let t=W0.current;if(Boolean(t)&&p.some((P0)=>{let B0=P0?.path||"";if(!B0||B0===".")return!0;return t===B0||t.startsWith(`${B0}/`)||B0.startsWith(`${t}/`)}))v0.current.clear();if(J_(),!t||!f_.current)return;let K0=r0.current?.get(t);if(K0&&K0.type==="dir")return;if(p.some((P0)=>{let B0=P0?.path||"";if(!B0||B0===".")return!0;return t===B0||t.startsWith(`${B0}/`)}))F0.current?.(t)};return window.addEventListener("workspace-update",S),()=>window.removeEventListener("workspace-update",S)},[]),g0.current=d_;let N1=u(()=>{if(typeof window>"u")return;let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),l=z0.current??t0.current,p=document.visibilityState!=="hidden"&&(l||S.matches&&t0.current);t5(p,I0.current).catch((t)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",t,{visible:p,showHidden:I0.current})})}).current,K1=u(0),s1=u(()=>{if(K1.current)clearTimeout(K1.current);K1.current=setTimeout(()=>{K1.current=0,N1()},250)}).current;g(()=>{if(t0.current)g0.current?.(),J0.current?.();s1()},[$,j]),g(()=>{g0.current(),J0.current?.();let S=setInterval(()=>{g0.current(),J0.current?.()},T0);return()=>clearInterval(S)},[T0]),g(()=>{N1();let S=Q4("previewHeight",null),l=Number.isFinite(S)?Math.min(Math.max(S,80),600):280;if(u0.current=l,f0.current)f0.current.style.setProperty("--preview-height",`${l}px`);let p=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),t=()=>s1();if(p.addEventListener)p.addEventListener("change",t);else if(p.addListener)p.addListener(t);return document.addEventListener("visibilitychange",t),()=>{if(H_.current)cancelAnimationFrame(H_.current),H_.current=0;if(p.removeEventListener)p.removeEventListener("change",t);else if(p.removeListener)p.removeListener(t);if(document.removeEventListener("visibilitychange",t),K1.current)clearTimeout(K1.current),K1.current=0;t5(!1,I0.current).catch((U0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",U0,{showHidden:I0.current})})}},[]);let U1=X0(()=>aL(L,Q,T),[L,Q,T]),J$=X0(()=>new Map(U1.map((S)=>[S.node.path,S.node])),[U1]),w6=X0(()=>pL(c0),[c0]);r0.current=J$;let I_=(B?r0.current.get(B):null)?.type==="dir";g(()=>{if(!B||!I_){L0(null),e.current=null,o.current=null;return}if(n0<=0){L0({loading:!1,error:null,payload:null,disabled:!0}),e.current=null,o.current=null;return}let S=B,l=`${T?"hidden":"visible"}:${n0}:${B}`,p=v0.current,t=p.get(l);if(t?.root){p.delete(l),p.set(l,t);let y0=iL(t.root,Boolean(t.truncated),M0);if(y0)e.current=y0,o.current=B,L0({loading:!1,error:null,payload:y0,disabled:!1});return}let U0=e.current,K0=o.current;L0({loading:!0,error:null,payload:K0===B?U0:null,disabled:!1}),a5(B,n0,T).then((y0)=>{if(W0.current!==S)return;let P0={root:y0?.root,truncated:Boolean(y0?.truncated)};p.delete(l),p.set(l,P0);while(p.size>QJ){let i0=p.keys().next().value;if(!i0)break;p.delete(i0)}let B0=iL(P0.root,P0.truncated,M0);e.current=B0,o.current=B,L0({loading:!1,error:null,payload:B0,disabled:!1})}).catch((y0)=>{if(W0.current!==S)return;L0({loading:!1,error:y0?.message||"Failed to load folder size chart",payload:K0===B?U0:null,disabled:!1})})},[B,I_,T,M0,n0]);let T1=Boolean(A&&A.kind==="text"&&!I_&&(!A.size||A.size<=262144)),J5=T1?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable",R1=Boolean(B&&!I_&&VJ(B)),S1=Boolean(B&&B!=="."),a1=Boolean(B&&!I_),I4=Boolean(B&&!I_),k$=B&&I_?O2(B,T):null,A5=XK(D0),k5=FJ(D0),C4=D0?.state||"never_indexed",e$=C4!=="ready",G1=f(()=>l0(!1),[]),P_=f(async(S)=>{G1();try{await S?.()}catch(l){console.warn("[workspace-explorer] Header menu action failed:",l)}},[G1]),M5=f(async(S)=>{S?.stopPropagation?.(),i(!0),Q0((l)=>({scope:"all",last_indexed_at:l?.last_indexed_at||null,last_error:null,indexed_file_count:l?.indexed_file_count||0,roots:l?.roots||[],updated_at:l?.updated_at||null,state:"indexing"}));try{let l=await B7("all");Q0(l),W(null),o0.current="",g0.current?.()}catch(l){let p=l?.message||"Failed to reindex workspace";Q0((t)=>({scope:"all",last_indexed_at:t?.last_indexed_at||null,last_error:p,indexed_file_count:t?.indexed_file_count||0,roots:t?.roots||[],updated_at:t?.updated_at||null,state:"failed"})),W(p)}finally{i(!1)}},[]);g(()=>{let S=d.current;if(Y0.current)Y0.current.dispose(),Y0.current=null;if(!S)return;if(S.innerHTML="",!B||I_||!A||A.error)return;let l={path:B,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},p=Y_.resolve(l)||Y_.get("workspace-preview-default");if(!p)return;let t=p.mount(S,l);return Y0.current=t,()=>{if(Y0.current===t)t.dispose(),Y0.current=null;S.innerHTML=""}},[B,I_,A]);let t1=(S)=>{let l=S?.target;if(l instanceof Element)return l;return l?.parentElement||null},y6=(S)=>{return Boolean(S?.closest?.(".workspace-node-icon, .workspace-label-text"))},T5=(S)=>{if(!S)return!1;if(S.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(S.isContentEditable)},f4=u((S)=>{let l=t1(S),p=l?.closest?.("[data-path]");if(!p)return;let t=p.dataset.path;if(!t||t===".")return;let U0=Boolean(l?.closest?.("button"))||Boolean(l?.closest?.("a"))||Boolean(l?.closest?.("input")),K0=Boolean(l?.closest?.(".workspace-caret"));if(U0||K0)return;if(s0.current===t)return;o_(t)}).current,z1=u((S)=>{if(A0.current){A0.current=!1;return}let l=t1(S),p=l?.closest?.("[data-path]");if(N_.current?.focus?.(),!p)return;let t=p.dataset.path,U0=p.dataset.type,K0=Boolean(l?.closest?.(".workspace-caret")),y0=Boolean(l?.closest?.("button"))||Boolean(l?.closest?.("a"))||Boolean(l?.closest?.("input")),P0=W0.current===t,B0=s0.current;if(B0){if(B0===t)return;F1()}if(U0==="dir"){if(d0.current=null,F(t),z(null),O(null),J(!1),!b0.current.has(t))w0.current?.(t);if(P0&&!K0)return;V((l_)=>{let s_=new Set(l_);if(s_.has(t))s_.delete(t);else s_.add(t);return s_})}else{d0.current=null,F(t);let i0=r0.current.get(t);if(i0)q_.current?.(i0.path,i0);if(!y0&&!K0)F0.current?.(t)}}).current,M$=u(()=>{o0.current="",g0.current(),J0.current?.(),Array.from(b0.current||[]).filter((l)=>l&&l!==".").forEach((l)=>w0.current?.(l))}).current,w1=u(()=>{d0.current=null,F(null),z(null),O(null),J(!1)}).current,T$=u(()=>{x((S)=>{let l=!S;if(typeof window<"u")V_("workspaceShowHidden",String(l));return I0.current=l,t5(!0,l).catch((t)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",t,{showHidden:l})}),o0.current="",g0.current?.(),Array.from(b0.current||[]).filter((t)=>t&&t!==".").forEach((t)=>w0.current?.(t)),l})}).current,e1=u((S)=>{if(t1(S)?.closest?.("[data-path]"))return;w1()}).current,Z1=f(async(S)=>{if(!S)return;let l=S.split("/").pop()||S;if(!window.confirm(`Delete "${l}"? This cannot be undone.`))return;try{await D7(S);let t=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(W0.current===S)w1();w0.current?.(t),W(null),J_()}catch(t){z((U0)=>({...U0||{},error:t.message||"Failed to delete file"}))}},[w1]),_4=f((S)=>{let l=N_.current;if(!l||!S||typeof CSS>"u"||typeof CSS.escape!=="function")return;l.querySelector(`[data-path="${CSS.escape(S)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),w5=f((S)=>{let l=t1(S);if(s0.current||T5(l))return;let p=U1;if(!p||p.length===0)return;let t=B?p.findIndex((U0)=>U0.node.path===B):-1;if(S.key==="ArrowDown"){S.preventDefault();let U0=Math.min(t+1,p.length-1),K0=p[U0];if(!K0)return;if(F(K0.node.path),K0.node.type!=="dir")q_.current?.(K0.node.path,K0.node),F0.current?.(K0.node.path);else z(null),J(!1),O(null);_4(K0.node.path);return}if(S.key==="ArrowUp"){S.preventDefault();let U0=t<=0?0:t-1,K0=p[U0];if(!K0)return;if(F(K0.node.path),K0.node.type!=="dir")q_.current?.(K0.node.path,K0.node),F0.current?.(K0.node.path);else z(null),J(!1),O(null);_4(K0.node.path);return}if(S.key==="ArrowRight"&&t>=0){let U0=p[t];if(U0?.node?.type==="dir"&&!Q.has(U0.node.path))S.preventDefault(),w0.current?.(U0.node.path),V((K0)=>new Set([...K0,U0.node.path]));return}if(S.key==="ArrowLeft"&&t>=0){let U0=p[t];if(U0?.node?.type==="dir"&&Q.has(U0.node.path))S.preventDefault(),V((K0)=>{let y0=new Set(K0);return y0.delete(U0.node.path),y0});return}if(S.key==="Enter"&&t>=0){S.preventDefault();let U0=p[t];if(!U0)return;let K0=U0.node.path;if(U0.node.type==="dir"){if(!b0.current.has(K0))w0.current?.(K0);V((P0)=>{let B0=new Set(P0);if(B0.has(K0))B0.delete(K0);else B0.add(K0);return B0}),z(null),O(null),J(!1)}else q_.current?.(K0,U0.node),F0.current?.(K0);return}if((S.key==="Delete"||S.key==="Backspace")&&t>=0){let U0=p[t];if(!U0||U0.node.type==="dir")return;S.preventDefault(),Z1(U0.node.path);return}if(S.key==="Escape")S.preventDefault(),w1()},[w1,Z1,Q,U1,_4,B]),_$=f((S)=>{let l=HJ(S,s0.current);if(!l)return;T_.current={path:l.dragPath,dragging:!1,startX:l.startX,startY:l.startY}},[]),P4=f(()=>{let S=T_.current;if(S?.dragging&&S.path){let l=e0.current||v_(),p=_0.current;if(typeof p==="function")p(S.path,l)}T_.current={path:null,dragging:!1,startX:0,startY:0},R0.current=0,R(!1),c(null),$_(null),m_(),o1()},[v_,o1,$_,m_]),X1=f((S)=>{let l=T_.current,p=S?.touches?.[0];if(!p||!l?.path)return;let t=Math.abs(p.clientX-l.startX),U0=Math.abs(p.clientY-l.startY),K0=t>8||U0>8;if(!l.dragging&&K0)l.dragging=!0,R(!0),c("move"),M1(l.path);if(l.dragging){S.preventDefault(),L1(p.clientX,p.clientY);let y0=document.elementFromPoint(p.clientX,p.clientY),P0=n_(y0)||v_();if(e0.current!==P0)$_(P0);i_(P0)}},[n_,v_,M1,L1,$_,i_]),w$=u((S)=>{S.preventDefault();let l=f0.current;if(!l)return;let p=S.clientY,t=u0.current||280,U0=S.currentTarget;U0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let K0=p,y0=(B0)=>{K0=B0.clientY;let i0=l.clientHeight-80,l_=Math.min(Math.max(t-(B0.clientY-p),80),i0);l.style.setProperty("--preview-height",`${l_}px`),u0.current=l_},P0=()=>{let B0=l.clientHeight-80,i0=Math.min(Math.max(t-(K0-p),80),B0);u0.current=i0,U0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",V_("previewHeight",String(Math.round(i0))),document.removeEventListener("mousemove",y0),document.removeEventListener("mouseup",P0)};document.addEventListener("mousemove",y0),document.addEventListener("mouseup",P0)}).current,$$=u((S)=>{S.preventDefault();let l=f0.current;if(!l)return;let p=S.touches[0];if(!p)return;let t=p.clientY,U0=u0.current||280,K0=S.currentTarget;K0.classList.add("dragging"),document.body.style.userSelect="none";let y0=(B0)=>{let i0=B0.touches[0];if(!i0)return;B0.preventDefault();let l_=l.clientHeight-80,s_=Math.min(Math.max(U0-(i0.clientY-t),80),l_);l.style.setProperty("--preview-height",`${s_}px`),u0.current=s_},P0=()=>{K0.classList.remove("dragging"),document.body.style.userSelect="",V_("previewHeight",String(Math.round(u0.current||U0))),document.removeEventListener("touchmove",y0),document.removeEventListener("touchend",P0),document.removeEventListener("touchcancel",P0)};document.addEventListener("touchmove",y0,{passive:!1}),document.addEventListener("touchend",P0),document.addEventListener("touchcancel",P0)}).current,y5=f((S=B)=>{if(!S)return;oL(W2(S))},[B]),R_=async()=>{if(!B||I_)return;await Z1(B)},R4=(S)=>{return Array.from(S?.dataTransfer?.types||[]).includes("Files")},g8=f((S)=>{if(!R4(S))return;if(S.preventDefault(),R0.current+=1,!L_.current)R(!0);c("upload");let l=q1(S)||v_();$_(l),i_(l)},[v_,q1,$_,i_]),y1=f((S)=>{if(!R4(S))return;if(S.preventDefault(),S.dataTransfer)S.dataTransfer.dropEffect="copy";if(!L_.current)R(!0);if(j_.current!=="upload")c("upload");let l=q1(S)||v_();if(e0.current!==l)$_(l);i_(l)},[v_,q1,$_,i_]),S4=f((S)=>{if(!R4(S))return;if(S.preventDefault(),R0.current=Math.max(0,R0.current-1),R0.current===0)R(!1),c(null),$_(null),m_()},[$_,m_]),j$=f(async(S,l=".")=>{let p=Array.from(S||[]);if(p.length===0)return;let t=l&&l!==""?l:".",U0=t!=="."?t:"workspace root";W_(),q0(!0),H0({current:0,total:p.length,name:"",percent:0,done:!1,error:null});try{let K0=null;for(let y0=0;y0<p.length;y0++){let P0=p[y0],B0=P0?.name||`file ${y0+1}`;H0((l_)=>({...l_,current:y0+1,name:B0,percent:0}));let i0=(l_)=>H0((s_)=>({...s_,percent:l_.percent}));try{K0=await D2(P0,t,{onProgress:i0})}catch(l_){let s_=l_?.status,I$=l_?.code;if(s_===409||I$==="file_exists"){if(!window.confirm(`"${B0}" already exists in ${U0}. Overwrite?`))continue;K0=await D2(P0,t,{overwrite:!0,onProgress:i0})}else throw l_}}if(K0?.path)d0.current=K0.path,F(K0.path),F0.current?.(K0.path);w0.current?.(t),J_(),H0((y0)=>({...y0,done:!0})),W_(),D_.current=window.setTimeout(()=>{D_.current=0,H0(null)},1500)}catch(K0){W(K0.message||"Failed to upload file"),H0((y0)=>y0?{...y0,error:K0.message||"Upload failed"}:null),W_(),D_.current=window.setTimeout(()=>{D_.current=0,H0(null)},4000)}finally{q0(!1)}},[W_]),y$=f(async(S,l)=>{if(!S)return;let p=r0.current?.get(S);if(!p)return;let t=l&&l!==""?l:".",U0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(t===U0)return;try{let y0=(await E7(S,t))?.path||S;if(p.type==="dir")V((P0)=>{let B0=new Set;for(let i0 of P0)if(i0===S)B0.add(y0);else if(i0.startsWith(`${S}/`))B0.add(`${y0}${i0.slice(S.length)}`);else B0.add(i0);return B0});if(F(y0),p.type==="dir")z(null),J(!1),O(null);else F0.current?.(y0);w0.current?.(U0),w0.current?.(t),J_()}catch(K0){W(K0?.message||"Failed to move entry")}},[]);_0.current=y$;let x$=f(async(S)=>{if(!R4(S))return;S.preventDefault(),R0.current=0,R(!1),c(null),s(null),m_();let l=Array.from(S?.dataTransfer?.files||[]);if(l.length===0)return;let p=e0.current||q1(S)||v_();await j$(l,p)},[v_,q1,j$]),g4=f((S)=>{if(S?.stopPropagation?.(),a)return;let l=S?.currentTarget?.dataset?.uploadTarget||".";X_.current=l,Q_.current?.click()},[a]),x1=f(()=>{if(a)return;let S=W0.current,l=S?r0.current?.get(S):null;X_.current=l?.type==="dir"?l.path:".",Q_.current?.click()},[a]),G$=f(()=>{P_(()=>j1(null))},[P_,j1]),$4=f(()=>{P_(()=>x1())},[P_,x1]),j4=f(()=>{P_(()=>M$())},[P_,M$]),Z$=f(()=>{P_(()=>T$())},[P_,T$]),x6=f(()=>{if(!B||!R1)return;P_(()=>z_.current?.(B,A))},[P_,B,R1,A]),X$=f(()=>{if(!B||!T1)return;P_(()=>z_.current?.(B,A))},[P_,B,T1,A]),I6=f(()=>{if(!B||B===".")return;P_(()=>o_(B))},[P_,B,o_]),x5=f(()=>{if(!B||I_)return;P_(()=>R_())},[P_,B,I_,R_]),I5=f(()=>{if(!B||I_)return;P_(()=>y5())},[P_,B,I_,y5]),u8=f(()=>{if(!k$)return;G1(),oL(k$)},[G1,k$]),C5=f(()=>{G1(),Z?.()},[G1,Z]),b8=f(()=>{G1(),X?.()},[G1,X]),C6=f(()=>{G1(),Y?.()},[G1,Y]),f6=f((S)=>{if(!S||S.button!==0)return;let l=S.currentTarget;if(!l||!l.dataset)return;let p=l.dataset.path;if(!p||p===".")return;if(s0.current===p)return;let t=t1(S);if(t?.closest?.("button, a, input, .workspace-caret"))return;if(!y6(t))return;S.preventDefault(),$0.current={path:p,dragging:!1,startX:S.clientX,startY:S.clientY};let U0=(y0)=>{let P0=$0.current;if(!P0?.path)return;let B0=Math.abs(y0.clientX-P0.startX),i0=Math.abs(y0.clientY-P0.startY),l_=B0>4||i0>4;if(!P0.dragging&&l_)P0.dragging=!0,A0.current=!0,R(!0),c("move"),M1(P0.path),L1(y0.clientX,y0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(P0.dragging){y0.preventDefault(),L1(y0.clientX,y0.clientY);let s_=document.elementFromPoint(y0.clientX,y0.clientY),I$=n_(s_)||v_();if(e0.current!==I$)$_(I$);i_(I$)}},K0=()=>{document.removeEventListener("mousemove",U0),document.removeEventListener("mouseup",K0);let y0=$0.current;if(y0?.dragging&&y0.path){let P0=e0.current||v_(),B0=_0.current;if(typeof B0==="function")B0(y0.path,P0)}$0.current={path:null,dragging:!1,startX:0,startY:0},R0.current=0,R(!1),c(null),$_(null),m_(),o1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{A0.current=!1},0)};document.addEventListener("mousemove",U0),document.addEventListener("mouseup",K0)},[n_,v_,M1,L1,o1,$_,i_,m_]),Aj=f(async(S)=>{let l=Array.from(S?.target?.files||[]);if(l.length===0)return;let p=X_.current||".";if(await j$(l,p),X_.current=".",S?.target)S.target.value=""},[j$]);return N`
        <aside
            class=${`workspace-sidebar${P?" workspace-drop-active":""}`}
            data-workspace-scale=${c0}
            ref=${f0}
            onDragEnter=${g8}
            onDragOver=${y1}
            onDragLeave=${S4}
            onDrop=${x$}
        >
            <input type="file" multiple style="display:none" ref=${Q_} onChange=${Aj} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${E0}
                            class=${`workspace-menu-button${h0?" active":""}`}
                            onClick=${(S)=>{S.stopPropagation(),l0((l)=>!l)}}
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
                                <button class="workspace-menu-item" role="menuitem" onClick=${G$} disabled=${a}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${$4} disabled=${a}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${j4}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>P_(()=>M5())} disabled=${k0}>
                                    ${k0?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${T?" active":""}`} role="menuitem" onClick=${Z$}>
                                    ${T?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(Z||X||Y)&&N`<div class="workspace-menu-separator"></div>`}
                                ${Z&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C5}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${X&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b8}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${Y&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${C6}>
                                        ${q?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${B&&N`<div class="workspace-menu-separator"></div>`}
                                ${R1&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x6}>Open in tab</button>
                                `}
                                ${B&&!I_&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X$} disabled=${!T1}>Open in editor</button>
                                `}
                                ${S1&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I6}>Rename selected</button>
                                `}
                                ${I4&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I5}>Download selected file</button>
                                `}
                                ${k$&&N`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${u8}>Download selected folder (zip)</button>
                                `}
                                ${a1&&N`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${x5}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{l0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${j1} title="New file" disabled=${a}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${M$} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${e$&&N`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${C4}`} title=${k5}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${A5}</span>
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
                        ref=${N_}
                        tabIndex="0"
                        onClick=${z1}
                        onDblClick=${f4}
                        onKeyDown=${w5}
                        onTouchStart=${_$}
                        onTouchEnd=${P4}
                        onTouchMove=${X1}
                        onTouchCancel=${P4}
                    >
                        ${U1.map(({node:S,depth:l})=>{let p=S.type==="dir",t=S.path===B,U0=S.path===H,K0=p&&Q.has(S.path),y0=b&&S.path===b,P0=Array.isArray(S.children)&&S.children.length>0?S.children.length:Number(S.child_count)||0;return N`
                                <div
                                    key=${S.path}
                                    class=${`workspace-row${t?" selected":""}${y0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+l*w6.indentPx}px`}}
                                    data-path=${S.path}
                                    data-type=${S.type}
                                    onMouseDown=${f6}
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
                                    ${U0?N`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${A_}
                                                value=${E}
                                                onInput=${(B0)=>U(B0?.target?.value||"")}
                                                onKeyDown=${(B0)=>{if(B0.stopPropagation(),B0.key==="Enter")B0.preventDefault(),r_();else if(B0.key==="Escape")B0.preventDefault(),F1()}}
                                                onBlur=${F1}
                                                onClick=${(B0)=>B0.stopPropagation()}
                                            />
                                        `:N`<span class="workspace-label"><span class="workspace-label-text">${S.name}</span></span>`}
                                    ${p&&!K0&&P0>0&&N`
                                        <span class="workspace-count">${P0}</span>
                                    `}
                                    ${p&&N`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${S.path}
                                            title="Upload files to this folder"
                                            onClick=${g4}
                                            disabled=${a}
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
            ${B&&N`
                <div class="workspace-preview-splitter-h" onMouseDown=${w$} onTouchStart=${$$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${B}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${j1} title="New file" disabled=${a}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!I_&&N`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>T1&&z_.current?.(B,A)}
                                    title=${J5}
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
                                        title="Upload files to this folder" disabled=${a}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${O2(B,T)} download
                                        title="Download folder as zip" onClick=${(S)=>S.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:N`<a class="workspace-download" href=${W2(B)} download
                                        title="Download" onClick=${(S)=>S.stopPropagation()}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </a>`}
                        </div>
                    </div>
                    ${k&&N`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&N`<div class="workspace-error">${A.error}</div>`}
                    ${I_&&N`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${N0?.disabled&&N`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${N0?.loading&&N`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${N0?.error&&N`<div class="workspace-error">${N0.error}</div>`}
                        ${N0?.payload&&N0.payload.segments?.length>0&&N`
                            <${BJ} payload=${N0.payload} />
                        `}
                        ${N0?.payload&&(!N0.payload.segments||N0.payload.segments.length===0)&&N`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!I_&&N`
                        <div class="workspace-preview-body" ref=${d}></div>
                    `}
                </div>
            `}
            ${h&&N`
                <div class="workspace-drag-ghost" ref=${F_}>${h.label}</div>
            `}
        </aside>
    `}x0();var EJ=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function V8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function qK(_,$,j){let G=V8(_,$,j);return G!=null&&EJ.has(G)}function LK(_,$,j){return V8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function KK(_,$,j){return V8(_,$,j)==="editor"}var DJ=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,WJ=/\.(csv|tsv)$/i,OJ=/\.pdf$/i,zJ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function JJ(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=lq(j,{hasPopOutTab:$});if(G)return G;if(DJ.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if(WJ.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(OJ.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(zJ.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function VK({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:q,onToggleDiff:L,onEditSource:K,previewTabs:Q,diffTabs:V,paneOverrides:B,detachedTabs:F,onReattachTab:H,onToggleDock:D,dockVisible:E,onToggleZen:U,zenMode:A,onPopOutTab:z}){let[O,y]=C(null),I=u(null);g(()=>{if(!O)return;let b=(s)=>{if(s.type==="keydown"&&s.key!=="Escape")return;y(null)};return document.addEventListener("click",b),document.addEventListener("keydown",b),()=>{document.removeEventListener("click",b),document.removeEventListener("keydown",b)}},[O]),g(()=>{let b=(s)=>{if(s.ctrlKey&&s.key==="Tab"){if(s.preventDefault(),!_.length)return;let a=_.findIndex((q0)=>q0.id===$);if(s.shiftKey){let q0=_[(a-1+_.length)%_.length];j?.(q0.id)}else{let q0=_[(a+1)%_.length];j?.(q0.id)}return}if((s.ctrlKey||s.metaKey)&&s.key==="w"){let a=document.querySelector(".editor-pane");if(a&&a.contains(document.activeElement)){if(s.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[_,$,j,G]);let k=f((b,s)=>{if(b.button===0){j?.(s);return}if(b.button===1)b.preventDefault(),G?.(s)},[j,G]),J=f((b,s)=>{if(b.defaultPrevented)return;if(b.button===0)j?.(s)},[j]),M=f((b,s)=>{b.preventDefault(),y({id:s,x:b.clientX,y:b.clientY})},[]),W=f((b)=>{b.stopPropagation()},[]),T=f((b,s)=>{b.preventDefault(),b.stopPropagation(),G?.(s)},[G]);g(()=>{if(!$||!I.current)return;let b=I.current.querySelector(".tab-item.active");if(b)b.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let x=f((b)=>{if(!(B instanceof Map))return null;return B.get(b)||null},[B]),P=X0(()=>_.find((b)=>b.id===O?.id)||null,[O?.id,_]),R=X0(()=>{let b=O?.id;if(!b)return!1;return qK(b,x(b),(s)=>Y_.resolve(s))},[O?.id,x]),v=X0(()=>{let b=O?.id;if(!b)return"Edit Source";return LK(b,x(b),(s)=>Y_.resolve(s))},[O?.id,x]),c=X0(()=>{let b=O?.id;if(!b||!(F instanceof Map))return!1;return F.has(b)},[O?.id,F]),h=X0(()=>{let b=O?.id;if(!b||!(V instanceof Set))return!1;return V.has(b)},[O?.id,V]),r=X0(()=>{let b=O?.id;if(!b)return!1;let s=_.find((q0)=>q0.id===b)||null;if(!s)return!1;return KK(b,x(b),(q0)=>Y_.resolve(q0))&&Boolean(s.dirty||h)},[O?.id,h,x,_]);if(!_.length)return null;return N`
        <div class="tab-strip" ref=${I} role="tablist">
            ${_.map((b)=>N`
                <div
                    key=${b.id}
                    class=${`tab-item${b.id===$?" active":""}${b.dirty?" dirty":""}${b.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${b.id===$}
                    title=${b.path}
                    onMouseDown=${(s)=>k(s,b.id)}
                    onClick=${(s)=>J(s,b.id)}
                    onContextMenu=${(s)=>M(s,b.id)}
                >
                    ${b.pinned&&N`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${b.label}</span>
                    ${F instanceof Map&&F.has(b.id)&&N`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${W}
                        onMouseDown=${W}
                        onClick=${(s)=>T(s,b.id)}
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
            ${U&&N`
                <button
                    class=${`tab-strip-zen-toggle${A?" active":""}`}
                    onClick=${U}
                    title=${`${A?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${A?"Exit":"Enter"} zen mode`}
                    aria-pressed=${A?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${A?N`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:N`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
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
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${R&&K&&N`
                    <button onClick=${()=>{K(O.id),y(null)}}>${v}</button>
                `}
                ${c&&H&&N`
                    <button onClick=${()=>{H(O.id),y(null)}}>Reattach</button>
                `}
                ${z&&!c&&N`
                    <button onClick=${()=>{let b=_.find((s)=>s.id===O.id);z(O.id,b?.label),y(null)}}>Open in Window</button>
                `}
                ${r&&L&&N`
                    <hr />
                    <button onClick=${()=>{j?.(O.id),L(O.id),y(null)}}>${h?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${q&&/\.(md|mdx|markdown)$/i.test(O.id)&&N`
                    <hr />
                    <button onClick=${()=>{q(O.id),y(null)}}>
                        ${Q?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let b=JJ(O.id,{hasPopOutTab:typeof z==="function"});if(!b)return null;return N`
                        <hr />
                        <button onClick=${()=>{window.open(b,"_blank","noopener"),y(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}x0();u_();x2();function V5(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function c9(_,$=30){return V5(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function H6(_,$=56,j=16,G={}){let Z=V5(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let q=(j/2).toFixed(2);return`M 0 ${q} L ${$} ${q}`}if(Z.length===1){let q=(Z[0]-X)/(Y-X),L=(j-q*j).toFixed(2);return`M 0 ${L} L ${$} ${L}`}return Z.map((q,L)=>{let K=L/(Z.length-1||1)*$,Q=(q-X)/(Y-X),V=j-Q*j;return`${L===0?"M":"L"} ${K.toFixed(2)} ${V.toFixed(2)}`}).join(" ")}function Q5(_){return`${Math.round(Number(_)||0)}%`}function l9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function AJ(_){let $=[`CPU ${Q5(_?.cpu_percent)}`,`RAM ${Q5(_?.ram_percent)}`];if(Number(_?.buffer_cache_bytes)>0)$.push(`BUF ${l9(_?.buffer_cache_bytes)}`);if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${Q5(_?.swap_percent)}`);return $.join(" • ")}function QK(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function kJ(_){return QK(_)>0&&V5(_?.process_rss_series_bytes).length>0}function MJ(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function BK({mode:_="overlay"}){let[$,j]=C(()=>q6(!1)),[G,Z]=C(()=>cX(!1)),[X,Y]=C(()=>MJ()),[q,L]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],buffer_cache_bytes:null,buffer_cache_series_bytes:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[K,Q]=C(!1);g(()=>{let M=(T)=>{j(Boolean(T?.detail?.enabled))},W=(T)=>{Z(Boolean(T?.detail?.collapsed))};return window.addEventListener(J4,M),window.addEventListener(y2,W),()=>{window.removeEventListener(J4,M),window.removeEventListener(y2,W)}},[]),g(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let M=window.matchMedia("(max-width: 900px)"),W=()=>Y(Boolean(M.matches));if(W(),typeof M.addEventListener==="function")return M.addEventListener("change",W),()=>M.removeEventListener("change",W);return M.addListener(W),()=>M.removeListener(W)},[]);let B=_==="overlay";g(()=>{if(!$||!B)return;let M=!1,W=0,T=async()=>{Q((x)=>x||q.cpu_series.length>0?x:!0);try{let x=await s3();if(M)return;L({cpu_percent:Number(x?.cpu_percent)||0,ram_percent:Number(x?.ram_percent)||0,swap_percent:Number.isFinite(Number(x?.swap_percent))?Number(x?.swap_percent):null,cpu_series:c9(x?.cpu_series),ram_series:c9(x?.ram_series),swap_series:c9(x?.swap_series),buffer_cache_bytes:Number.isFinite(Number(x?.buffer_cache_bytes))?Number(x?.buffer_cache_bytes):null,buffer_cache_series_bytes:V5(x?.buffer_cache_series_bytes),process_rss_series_bytes:V5(x?.process_rss_series_bytes),process_memory:{rss_bytes:Number(x?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(x?.process_memory?.vm_rss_bytes))?Number(x?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(x?.swap_total_bytes)||0,swap_used_bytes:Number(x?.swap_used_bytes)||0,sample_interval_ms:Number(x?.sample_interval_ms)||2000,platform:String(x?.platform||"")})}catch{if(M)return}finally{if(!M)Q(!1)}};return T(),W=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;T()},Math.max(1000,Number(q.sample_interval_ms)||2000)),()=>{if(M=!0,W)window.clearInterval(W)}},[$,B]);let F=X0(()=>H6(q.cpu_series,56,16,{min:0,max:100}),[q.cpu_series]),H=X0(()=>H6(q.ram_series,56,16,{min:0,max:100}),[q.ram_series]),D=X0(()=>H6(q.swap_series,56,16,{min:0,max:100}),[q.swap_series]),E=X0(()=>H6(q.buffer_cache_series_bytes),[q.buffer_cache_series_bytes]),U=X0(()=>H6(q.process_rss_series_bytes),[q.process_rss_series_bytes]),A=Number(q.buffer_cache_bytes)>0&&V5(q.buffer_cache_series_bytes).length>0,z=Number.isFinite(Number(q.swap_percent))&&q.swap_total_bytes>0,O=QK(q),y=kJ(q),I=X0(()=>AJ(q),[q]);if(!$||!B)return null;let k=G?"Show system meters":K?"Updating system meters… Click to collapse.":"System meters — click to collapse.",J=(M)=>{M?.stopPropagation?.();let W=!G;Z(W),R7(W)};return N`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${k}
                aria-label=${k}
                aria-expanded=${G?"false":"true"}
                onClick=${J}
            >
                ${G?N`<span class="system-meters-collapse-tab" aria-hidden="true">◂</span>`:X?N`<span class="system-meters-compact-summary">${I}</span>`:N`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${F}></path>
                                </svg>
                                <span class="system-meters-value">${Q5(q.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${H}></path>
                                </svg>
                                <span class="system-meters-value">${Q5(q.ram_percent)}</span>
                            </div>
                            ${y&&N`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${U}></path>
                                    </svg>
                                    <span class="system-meters-value">${l9(O)}</span>
                                </div>
                            `}
                            ${A&&N`
                                <div class="system-meters-row buf">
                                    <span class="system-meters-label">BUF</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${l9(q.buffer_cache_bytes)}</span>
                                </div>
                            `}
                            ${z&&N`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${D}></path>
                                    </svg>
                                    <span class="system-meters-value">${Q5(q.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function TJ(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function wJ(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function yJ(_){let{id:$,scrollToBottom:j,getElementById:G=(K)=>document.getElementById(K),scheduleRaf:Z=(K)=>requestAnimationFrame(K),scheduleTimeout:X=(K,Q)=>{setTimeout(K,Q)},maxAttempts:Y=12}=_,q=(K)=>{K.scrollIntoView({behavior:"smooth",block:"center"}),K.classList.add("post-highlight"),X(()=>K.classList.remove("post-highlight"),2000)},L=(K)=>{let Q=G(`post-${$}`);if(Q){q(Q);return}if(K<=0){j?.();return}Z(()=>{X(()=>L(K-1),40)})};L(Y)}function xJ(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(L)=>yJ({id:L,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let q=wJ($);if(q){Z(q);return}G()}function FK(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:q,handleRenameCurrentBranch:L,renameBranchNameDraft:K,renameBranchNameInputRef:Q,setRenameBranchNameDraft:V,renameBranchDraftState:B,isRenamingBranch:F,addFileRef:H,openEditor:D,openTerminalTab:E,openVncTab:U,hasDockPanes:A,toggleDock:z,dockVisible:O,handleSplitterMouseDown:y,handleSplitterTouchStart:I,showEditorPaneContainer:k,tabStripTabs:J,tabStripActiveId:M,handleTabActivate:W,handleTabClose:T,handleTabCloseOthers:x,handleTabCloseAll:P,handleTabTogglePin:R,handleTabTogglePreview:v,handleTabToggleDiff:c,handleTabEditSource:h,handleReattachPane:r,previewTabs:b,diffTabs:s,tabPaneOverrides:a,toggleZenMode:q0,handlePopOutPane:Z0,isWebAppMode:H0,editorContainerRef:N0,editorInstanceRef:L0,detachedTabs:D0,activeDetachedTab:Q0,detachedDockPane:k0,handleDockSplitterMouseDown:i,handleDockSplitterTouchStart:j0,TERMINAL_TAB_PATH:C0,dockContainerRef:M0,handleEditorSplitterMouseDown:m0,handleEditorSplitterTouchStart:c0,searchQuery:Z_,isIOSDevice:h0,currentBranchRecord:l0,currentChatJid:T0,currentChatBranches:n0,handleBranchPickerChange:b0,formatBranchPickerLabel:o0,openRenameCurrentBranchForm:U_,handlePruneCurrentBranch:H_,handlePurgeArchivedBranch:K_,currentHashtag:g0,handleBackToTimeline:J0,activeSearchScopeLabel:r0,oobePanelState:q_,composePrefillRequest:z_,requestComposePrefill:F0,handleOobeSetupProvider:w0,handleOobeShowModelPicker:f0,handleOobeOpenWorkspace:N_,handleDismissProviderMissingOobe:A_,handleCompleteProviderReadyOobe:Q_,posts:X_,isMainTimelineView:D_,hasMore:T_,loadMore:$0,timelineRef:O0,handleHashtagClick:A0,addMessageRef:u0,scrollToMessage:v0,openFileFromPill:e,openTimelineFileFromPill:o,handleDeletePost:d,handleOpenFloatingWidget:Y0,agents:G0,userProfile:E0,removingPostIds:I0,agentStatus:t0,isCompactionStatus:z0,agentDraft:R0,agentPlan:e0,agentThought:L_,pendingRequest:j_,intentToast:F_,currentTurnId:k_,steerQueued:__,handlePanelToggle:_0,btwSession:W0,closeBtwPanel:s0,handleBtwRetry:d0,handleBtwInject:f_,floatingWidget:W_,handleCloseFloatingWidget:x_,handleFloatingWidgetEvent:i1,attachmentPreview:J_,setAttachmentPreview:d_,extensionStatusPanels:O1,pendingExtensionPanelActions:v_,handleExtensionPanelAction:n_,searchOpen:q1,followupQueueItems:$_,handleInjectQueuedFollowup:m_,handleRemoveQueuedFollowup:i_,handleMoveQueuedFollowup:L1,viewStateRef:M1,loadPosts:o1,scrollToBottom:z$,searchScope:F1,handleSearch:o_,handleSearchScopeChange:r_,setSearchScope:t$,enterSearchMode:j1,exitSearchMode:N1,fileRefs:K1,removeFileRef:s1,clearFileRefs:U1,setFileRefsFromCompose:J$,messageRefs:w6,removeMessageRef:A$,clearMessageRefs:I_,setMessageRefsFromCompose:T1,handleCreateSessionFromCompose:J5,handleCreateRootSessionFromCompose:R1,handleRestoreBranch:S1,attachActiveEditorFile:a1,followupQueueCount:I4,handleBtwIntercept:k$,handleMessageResponse:A5,handleComposeSubmitError:k5,isComposeBoxAgentActive:C4,activeChatAgents:e$,connectionStatus:G1,activeModel:P_,agentModelsPayload:M5,activeModelUsage:t1,activeThinkingLevel:y6,supportsThinking:T5,contextUsage:f4,extensionWorkingState:z1,notificationsEnabled:M$,notificationPermission:w1,handleToggleNotifications:T$,setActiveModel:e1,applyModelState:Z1,setPendingRequest:_4,pendingRequestRef:w5,toggleWorkspace:_$}=_,P4=()=>{if(h0())return;z$()};return N`
    <div class=${TJ({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${BK} mode="overlay" />
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
              onInput=${(X1)=>{let w$=X1.currentTarget?.value??"";V(String(w$))}}
              onKeyDown=${(X1)=>{if(X1.key==="Escape")X1.preventDefault(),q()}}
              autocomplete="off"
              placeholder="Session handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${B.kind||"info"}`}>
              ${B.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${F||!B.canSubmit}>
                ${F?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${q}
                disabled=${F}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&N`
        <${YK}
          onFileSelect=${H}
          visible=${j}
          active=${j||G}
          onOpenEditor=${D}
          onOpenTerminalTab=${E}
          onOpenVncTab=${U}
          onToggleTerminal=${A?z:void 0}
          terminalVisible=${Boolean(A&&O)}
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
        <div class="workspace-splitter" onMouseDown=${y} onTouchStart=${I}></div>
      `}
      ${k&&N`
        <div class="editor-pane-container">
          ${X&&N`<div class="zen-hover-zone"></div>`}
          ${G&&N`
            <${VK}
              tabs=${J}
              activeId=${M}
              onActivate=${W}
              onClose=${T}
              onCloseOthers=${x}
              onCloseAll=${P}
              onTogglePin=${R}
              onTogglePreview=${v}
              onToggleDiff=${c}
              onEditSource=${h}
              previewTabs=${b}
              diffTabs=${s}
              paneOverrides=${a}
              detachedTabs=${D0}
              onReattachTab=${r}
              onToggleDock=${A?z:void 0}
              dockVisible=${A&&O}
              onToggleZen=${q0}
              zenMode=${X}
              onPopOutTab=${H0?void 0:Z0}
            />
          `}
          ${G&&Q0&&N`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${Q0.label||Q0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>r(Q0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!Q0&&N`<div class="editor-pane-host" ref=${N0}></div>`}
          ${G&&!Q0&&M&&b.has(M)&&N`
            <${v2}
              getContent=${()=>L0.current?.getContent?.()}
              path=${M}
              onClose=${()=>v(M)}
            />
          `}
          ${A&&O&&N`<div class="dock-splitter" onMouseDown=${i} onTouchStart=${j0}></div>`}
          ${A&&N`<div class=${`dock-panel${O?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!H0&&!k0&&N`
                  <button class="dock-panel-action" onClick=${()=>Z0(C0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${k0&&N`
                  <button class="dock-panel-action" onClick=${()=>r(C0)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${z} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            ${k0?N`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>r(C0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:N`<div class="dock-panel-body" ref=${M0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${m0} onTouchStart=${c0}></div>
      `}
      <${jL}
        workspaceOpen=${j}
        toggleWorkspace=${_$}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${E}
        onOpenVncTab=${U}
        onToggleTerminal=${A?z:void 0}
        terminalVisible=${Boolean(A&&O)}
      />
      <${$L}
        activeChatAgents=${e$}
        currentChatJid=${T0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(A&&O)}
        onSwitchChat=${b0}
        onToggleWorkspace=${_$}
        onOpenTerminalTab=${E}
        onOpenVncTab=${U}
        onToggleTerminalDock=${A?z:void 0}
        onPrefillCompose=${F0}
      />
      <div class="container">
        ${Z_&&h0()&&N`<div class="search-results-spacer"></div>`}
        ${(g0||Z_)&&N`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${J0}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${g0?`#${g0}`:`Search: ${Z_} · ${r0}`}</span>
          </div>
        `}
        ${q_?.kind&&q_.kind!=="hidden"&&N`
          <${Eq}
            kind=${q_.kind}
            onSetupProvider=${w0}
            onShowModelPicker=${f0}
            onOpenWorkspace=${N_}
            onDismiss=${q_.kind==="provider-missing"?A_:Q_}
          />
        `}
        <${cL}
          posts=${X_}
          hasMore=${D_?T_:!1}
          onLoadMore=${D_?$0:void 0}
          timelineRef=${O0}
          onHashtagClick=${A0}
          onMessageRef=${u0}
          onScrollToMessage=${v0}
          onFileRef=${o||e}
          onPostClick=${void 0}
          onDeletePost=${d}
          onOpenWidget=${Y0}
          onOpenAttachmentPreview=${d_}
          emptyMessage=${g0?`No posts with #${g0}`:Z_?`No results for "${Z_}"`:void 0}
          agents=${G0}
          user=${E0}
          reverse=${D_}
          removingPostIds=${I0}
          searchQuery=${Z_}
        />
        <${z9}
          status=${z0(t0)?null:t0}
          draft=${R0}
          plan=${e0}
          thought=${L_}
          pendingRequest=${j_}
          intent=${F_}
          turnId=${k_}
          steerQueued=${__}
          onPanelToggle=${_0}
          showExtensionPanels=${!1}
        />
        <${Aq}
          session=${W0}
          onClose=${s0}
          onRetry=${d0}
          onInject=${f_}
        />
        <${bq}
          widget=${W_}
          onClose=${x_}
          onWidgetEvent=${i1}
        />
        ${J_&&N`
          <${tq}
            mediaId=${J_.mediaId}
            info=${J_.info}
            onClose=${()=>d_(null)}
          />
        `}
        <${dY} />
        <${z9}
          extensionPanels=${Array.from(O1.values())}
          pendingPanelActions=${v_}
          onExtensionPanelAction=${n_}
          turnId=${k_}
          steerQueued=${__}
          onPanelToggle=${_0}
          showCorePanels=${!1}
        />
        <${F9}
          items=${q1?[]:$_}
          onInjectQueuedFollowup=${m_}
          onRemoveQueuedFollowup=${i_}
          onMoveQueuedFollowup=${L1}
          onOpenFilePill=${e}
        />
        <${Hq}
          onPost=${(X1)=>{xJ({response:X1,viewStateRef:M1,scrollToBottom:z$})}}
          onFocus=${P4}
          searchMode=${q1}
          searchScope=${F1}
          onSearch=${o_}
          onSearchScopeChange=${r_||t$}
          onEnterSearch=${j1}
          onExitSearch=${N1}
          fileRefs=${K1}
          onRemoveFileRef=${s1}
          onClearFileRefs=${U1}
          onSetFileRefs=${J$}
          messageRefs=${w6}
          onRemoveMessageRef=${A$}
          onClearMessageRefs=${I_}
          onSetMessageRefs=${T1}
          onSwitchChat=${b0}
          onRenameSession=${L}
          isRenameSessionInProgress=${F}
          onCreateSession=${J5}
          onCreateRootSession=${R1}
          onDeleteSession=${H_}
          onPurgeArchivedSession=${K_}
          onRestoreSession=${S1}
          activeEditorPath=${Z?null:M}
          onAttachEditorFile=${Z?void 0:a1}
          onOpenFilePill=${e}
          followupQueueCount=${I4}
          followupQueueItems=${$_}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${m_}
          onRemoveQueuedFollowup=${i_}
          onMoveQueuedFollowup=${L1}
          onSubmitIntercept=${k$}
          onMessageResponse=${A5}
          onSubmitError=${k5}
          isAgentActive=${C4}
          activeChatAgents=${e$}
          currentChatJid=${T0}
          connectionStatus=${G1}
          activeModel=${P_}
          agentModelsPayload=${M5}
          modelUsage=${t1}
          thinkingLevel=${y6}
          supportsThinking=${T5}
          contextUsage=${f4}
          notificationsEnabled=${M$}
          notificationPermission=${w1}
          onToggleNotifications=${T$}
          onModelChange=${e1}
          onModelStateChange=${Z1}
          statusNotice=${z0(t0)?t0:null}
          extensionWorkingState=${z1}
          prefillRequest=${z_}
        />
        <${BL}
          request=${j_}
          onRespond=${()=>{_4(null),w5.current=null}}
        />
      </div>
    </div>
  `}function NK(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,q=sY({branchLoaderMode:$,panePopoutMode:j}),L=Y?.renderBranchLoaderMode||aY,K=Y?.renderPanePopoutMode||tY,Q=Y?.renderMainShell||FK;if(q==="branch-loader")return L(G);if(q==="pane-popout")return K(Z);return Q(X)}var B8="piclaw_btw_session",p9="piclaw_last_chat_jid",HK=900,UK="__piclawRenameBranchFormLock__";function IJ(){try{return import.meta.url}catch{return null}}function h9(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function CJ(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function Q8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function fJ(_){let j=(typeof _.readItem==="function"?_.readItem:B1)(p9);return j&&j.trim()?j.trim():null}function EK(_={}){let $=_.importMetaUrl===void 0?IJ():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=CJ($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let L=new URL(Y,G).searchParams.get("v");return L&&L.trim()?L.trim():null}catch{return null}}function DK(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[UK];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[UK]=G,G}function WK(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function OK(_={}){let $=typeof _.readItem==="function"?_.readItem:B1,j=_.storageKey||B8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",q=typeof Z.thinking==="string"?Z.thinking:"",L=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,K=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:q,error:K==="error"?L||"BTW stream interrupted. You can retry.":L,model:null,status:K}}catch{return null}}function zK(_,$={}){let j=$.defaultChatJid||"web:default",G=Q8(_,"chat_jid",fJ($)||j),Z=h9(_?.get?.("chat_only")||_?.get?.("chat-only")),X=h9(_?.get?.("pane_popout")),Y=Q8(_,"pane_path"),q=Q8(_,"pane_label"),L=h9(_?.get?.("branch_loader")),K=Q8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:L,branchLoaderSourceChatJid:K}}function JK(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function AK(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function n9(_,$,j){return _||$?.label||j||"Pane"}function kK(_,$,j){return`${n9(_,$,j)} · PiClaw`}function MK(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function TK(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function wK(_,$,j,G){return _===$&&!j||G}function yK(_,$,j,G,Z){return _||!$&&(j||G&&Z)}u_();function PJ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function $1(_,$,j){let G=_?.[$];return typeof G==="function"?G:PJ($,j)}var xK=!1,IK=!1,CK=!1;function RJ(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function SJ(_=typeof window<"u"?window:null){if(!_||IK)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),IK=!0}function gJ(){Y_.register(Z3),Y_.register(z7),Y_.register(O7),Y_.register(J7),Y_.register(A7),Y_.register(k7),Y_.register(T7),Y_.register(w7),Y_.register(y7),Y_.register(I7),Y_.register(g3),X3(),Y_.register(V3),Y_.register(Q3)}function uJ(_=typeof window<"u"?window:null){if(!_||CK)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;CK=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function fK(){if(xK)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(RJ($),SJ(_),D9(_),_)try{let j=await Promise.resolve().then(() => (x0(),qG));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}gJ(),await rq(_),uJ(_),xK=!0}function bJ(_=_6){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:$1(_,"getAgentContext",null),getAutoresearchStatus:$1(_,"getAutoresearchStatus",null),stopAutoresearch:$1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:$1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:$1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:$1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:$1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:$1(_,"getChatBranches",{chats:[]}),renameChatBranch:$1(_,"renameChatBranch",null),pruneChatBranch:$1(_,"pruneChatBranch",null),restoreChatBranch:$1(_,"restoreChatBranch",null),getAgentQueueState:$1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:$1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:$1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:$1(_,"streamSidePrompt",null)}}var PK=bJ(_6);function RK(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:q,shellState:L,agentState:K,composeState:Q,modelState:V}=_,B={appShellRef:L.appShellRef,editorOpen:L.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:L.tabStripTabs,tabStripActiveId:L.tabStripActiveId,handleTabActivate:L.handleTabActivate,previewTabs:L.previewTabs,diffTabs:L.diffTabs,handleTabTogglePreview:L.handleTabTogglePreview,handleTabToggleDiff:L.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),panePopoutPath:L.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},F={appShellRef:L.appShellRef,workspaceOpen:L.workspaceOpen,editorOpen:L.editorOpen,chatOnlyMode:L.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:L.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:L.renameBranchNameDraft,renameBranchNameInputRef:L.renameBranchNameInputRef,setRenameBranchNameDraft:L.setRenameBranchNameDraft,renameBranchDraftState:L.renameBranchDraftState,isRenamingBranch:L.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:L.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:L.TERMINAL_TAB_PATH,isIOSDevice:L.isIOSDevice,currentBranchRecord:L.currentBranchRecord,currentChatJid:L.currentChatJid,currentChatBranches:L.currentChatBranches,formatBranchPickerLabel:L.formatBranchPickerLabel,activeSearchScopeLabel:L.activeSearchScopeLabel,currentHashtag:L.currentHashtag,searchQuery:L.searchQuery,oobePanelState:L.oobePanelState,composePrefillRequest:L.composePrefillRequest,requestComposePrefill:L.requestComposePrefill,handleOobeSetupProvider:L.handleOobeSetupProvider,handleOobeShowModelPicker:L.handleOobeShowModelPicker,handleOobeOpenWorkspace:L.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:L.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:L.handleCompleteProviderReadyOobe,posts:L.posts,hasMore:L.hasMore,loadMore:L.loadMore,timelineRef:L.timelineRef,agents:L.agents,userProfile:L.userProfile,removingPostIds:L.removingPostIds,extensionStatusPanels:L.extensionStatusPanels,pendingExtensionPanelActions:L.pendingExtensionPanelActions,searchOpen:L.searchOpen,followupQueueItems:L.followupQueueItems,viewStateRef:L.viewStateRef,loadPosts:L.loadPosts,scrollToBottom:L.scrollToBottom,searchScope:L.searchScope,tabStripTabs:L.tabStripTabs,tabStripActiveId:L.tabStripActiveId,handleTabActivate:L.handleTabActivate,previewTabs:L.previewTabs,diffTabs:L.diffTabs,handleTabTogglePreview:L.handleTabTogglePreview,handleTabToggleDiff:L.handleTabToggleDiff,panePopoutPath:L.panePopoutPath,tabPaneOverrides:L.tabPaneOverrides,handleTabClose:L.handleTabClose,handleTabCloseOthers:L.handleTabCloseOthers,handleTabCloseAll:L.handleTabCloseAll,handleTabTogglePin:L.handleTabTogglePin,handleTabEditSource:L.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:L.openEditor,openTerminalTab:L.openTerminalTab,openVncTab:L.openVncTab,fileRefs:Q.fileRefs,messageRefs:Q.messageRefs,followupQueueCount:Q.followupQueueCount,attachmentPreview:Q.attachmentPreview,setAttachmentPreview:Q.setAttachmentPreview,extensionWorkingState:Q.extensionWorkingState,activeChatAgents:V.activeChatAgents,connectionStatus:V.connectionStatus,activeModel:V.activeModel,activeModelUsage:V.activeModelUsage,activeThinkingLevel:V.activeThinkingLevel,supportsThinking:V.supportsThinking,contextUsage:V.contextUsage,notificationsEnabled:V.notificationsEnabled,notificationPermission:V.notificationPermission,handleToggleNotifications:V.handleToggleNotifications,setActiveModel:V.setActiveModel,applyModelState:V.applyModelState,setPendingRequest:K.setPendingRequest,pendingRequestRef:K.pendingRequestRef,...G,...Z,...X,...Y,...q,...K,...Q,...V};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:B,mainShellOptions:F}}function vJ(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function SK(_){let $=vJ({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return RK({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}x0();var uK="(min-width: 1024px) and (orientation: landscape)";function r9(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function gK(_,$){let j=r9(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function mJ(_,$,j){let G=r9(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function E6(_=typeof window<"u"?window:null){let $=r9(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function bK(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function vK(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||E6($),Y=bK(X),q=gK($,Y);if(typeof q==="boolean")return q;if(G&&X==="desktop"){let L=gK($,"workspaceOpen");if(typeof L==="boolean")return L}return Z}function mK(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||E6(j);mJ(j,bK(Z),Boolean(_))}l5();var cJ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function cK(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(I1({window:j,navigator:G}))};Z();let Y=cJ.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",Z),()=>q.removeEventListener("change",Z);if(typeof q.addListener==="function")return q.addListener(Z),()=>q.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let q of Y)q();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function F8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function lK(_={}){return I1(_)&&e6(_)}function lJ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let G=Number($?.innerHeight||0);if(Number.isFinite(G)&&G>0)return Math.round(G);return null}function hJ(_={},$={}){if(!lK(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=lJ({window:j});if(Z&&Z>0)G.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(X){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",X)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(X){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",X)}}return Z}function hK(_={}){if(!lK(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},Y=()=>{G=0,hJ({window:$,document:j})},q=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},L=()=>{q();for(let V of[80,220,420]){let B=$.setTimeout?.(()=>{Z.delete(B),q()},V);if(B!=null)Z.add(B)}},K=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},Q=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",K),j.addEventListener("focusin",L,!0),Q?.addEventListener?.("resize",L),Q?.addEventListener?.("scroll",L),()=>{X(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",K),j.removeEventListener("focusin",L,!0),Q?.removeEventListener?.("resize",L),Q?.removeEventListener?.("scroll",L)}}var d9="resume-layout-settling",pJ=220,B5=new WeakMap;function nJ(_){if(!_){V_(B8,"");return}V_(B8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function rJ(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function dJ(_,$={}){if(!_)return()=>{};let{durationMs:j=pJ,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=B5.get(_);if(X)Z(X);_.classList.add(d9);let Y=G(()=>{if(B5.get(_)===Y)_.classList.remove(d9),B5.delete(_)},j);return B5.set(_,Y),()=>{let q=B5.get(_);if(q)Z(q),B5.delete(_);_.classList.remove(d9)}}function iJ(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function pK(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:q,agents:L,agentsRef:K,currentChatJid:Q,activeChatJidRef:V,userProfile:B,userProfileRef:F,brandingRef:H,panePopoutMode:D=!1}=_;fX(30000),g(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),g(()=>CZ(),[]),g(()=>cK(Z),[Z]),g(()=>{let A=()=>{},z=F8(()=>{A(),A=dJ(G.current)});return()=>{z(),A()}},[G]);let E=u(E6());return g(()=>{mK(X,{bucket:E.current})},[X]),g(()=>{if(typeof window>"u"||!window.matchMedia)return;let A=window.matchMedia(uK),z=()=>{let O=E6(window);if(E.current===O)return;let y=E.current;if(E.current=O,y==="desktop"&&O==="narrow")Y(!1)};if(A.addEventListener)A.addEventListener("change",z);else if(A.addListener)A.addListener(z);return()=>{if(A.removeEventListener)A.removeEventListener("change",z);else if(A.removeListener)A.removeListener(z)}},[Y]),g(()=>hK(),[]),g(()=>{nJ(q)},[q]),g(()=>{K.current=L||{}},[L,K]),g(()=>{V.current=Q},[V,Q]),g(()=>{F.current=B||{name:"You",avatar_url:null,avatar_background:null}},[B,F]),{applyBranding:f((A,z,O=null)=>{if(typeof document>"u")return;let y=(A||"").trim()||"PiClaw";if(H.current.title!==y){if(rJ({panePopoutMode:D,search:typeof window<"u"?window.location.search:""})){document.title=y;let k=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(k&&k.getAttribute("content")!==y)k.setAttribute("content",y)}H.current.title=y}let I=z?`${z}|${O||""}`:"";if(H.current.avatarBase!==I){H.current.avatarBase=I;let k=O||Date.now();iJ(document,k)}},[H])}}x0();function nK(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function i9(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function o9(_,$){let j=Array.isArray(_)?_:[],G=i9($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function s9(_,$){let j=Array.isArray(_)?_:[],G=i9($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function a9(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=i9(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function rK(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function dK(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function t9(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:q,setCurrentHashtag:L,setPosts:K,setHasMore:Q}=_,V=typeof $==="string"?$.trim():"";if(!V)return;let B=j==="root"||j==="all"?j:"current";Y(B),q(V),L(null),K(null);try{let F=await X(V,50,0,G,B,Z,_.filters);K(Array.isArray(F?.results)?F.results:[]),Q(!1)}catch(F){console.error("Failed to search:",F),K([])}}async function iK(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:q,hasMoreRef:L,loadMoreRef:K,confirm:Q=(U)=>window.confirm(U),showAlert:V=(U)=>alert(U),scheduleTimeout:B=(U,A)=>{setTimeout(U,A)}}=_;if(!$)return;let F=$.id,H=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,D=j?.filter((U)=>U?.data?.thread_id===F&&U?.id!==F).length||0;if(D>0){if(!Q(`Delete this message and its ${D} replies?`))return}let E=(U)=>{if(!U.length)return;q((A)=>{let z=new Set(A);return U.forEach((O)=>z.add(O)),z}),B(()=>{if(X(()=>{Y((A)=>A?A.filter((z)=>!U.includes(z.id)):A)}),q((A)=>{let z=new Set(A);return U.forEach((O)=>z.delete(O)),z}),L.current)K.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let U=await Z(F,D>0,H);if(U?.ids?.length)E(U.ids)}catch(U){let A=U instanceof Error?U.message:String(U||"");if(D===0&&A.includes("Replies exist")){if(!Q("Delete this message and its replies?"))return;let O=await Z(F,!0,H);if(O?.ids?.length)E(O.ids);return}console.error("Failed to delete post:",U),V(`Failed to delete message: ${A}`)}}async function oK(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(V)=>document.getElementById(V),scheduleRaf:q=(V)=>requestAnimationFrame(V),scheduleTimeout:L=(V,B)=>{setTimeout(V,B)}}=_,K=(V)=>{V.scrollIntoView({behavior:"smooth",block:"center"}),V.classList.add("post-highlight"),L(()=>V.classList.remove("post-highlight"),2000)},Q=Y(`post-${$}`);if(Q){K(Q);return}try{let V=typeof j==="string"&&j.trim()?j.trim():G,F=(await Z($,V))?.thread?.[0];if(!F)return;X((H)=>{if(!H)return[F];if(H.some((D)=>D.id===F.id))return H;return[...H,F]}),q(()=>{L(()=>{let H=Y(`post-${$}`);if(H)K(H)},50)})}catch(V){console.error("[scrollToMessage] Failed to fetch message",$,V)}}function oJ(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function sJ(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:q,setSearchQuery:L,setSearchOpen:K,setMessageRefs:Q,navigate:V,chatOnlyMode:B,baseHref:F=typeof window<"u"?window.location.href:"http://localhost/"}=_,H=String($??"").trim();if(!H)return!1;let D=typeof j==="string"&&j.trim()?j.trim():G,E=D!==G,U=Boolean(Y||X||Z);if(!E&&!U)return Q((A)=>o9(A,H)),!0;if(Q([H]),q?.(null),L?.(null),K?.(!1),E&&typeof V==="function"){let A=A1(F,D,{chatOnly:B});V(A)}return!0}function sK(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:q,setMessageRefs:L,currentChatJid:K,currentHashtag:Q,searchQuery:V,searchOpen:B,setCurrentHashtag:F,setSearchQuery:H,setSearchOpen:D,navigate:E,chatOnlyMode:U,baseHref:A,getThread:z,setPosts:O}=_,y=f(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);g(()=>{return()=>{y()}},[y]);let I=f((a)=>{q((q0)=>o9(q0,a))},[q]),k=f((a)=>{q((q0)=>s9(q0,a))},[q]),J=f(()=>{q([])},[q]),M=f((a)=>{q(a9(a))},[q]),W=f((a,q0=null,Z0="info",H0=3000)=>{y(),$({title:a,detail:q0||null,kind:Z0||"info"}),j.current=setTimeout(()=>{$((N0)=>N0?.title===a?null:N0)},H0)},[y,j,$]),T=f((a,{autoOpenEditor:q0=!1}={})=>{let Z0=nK(a,{editorOpen:G,autoOpenEditor:q0,resolvePane:X});if(Z0.kind==="open"){Z(Z0.path);return}if(Z0.kind==="toast")W(Z0.title,Z0.detail,Z0.level)},[G,Z,X,W]),x=f((a)=>{T(a,{autoOpenEditor:!1})},[T]),P=f((a)=>{T(a,{autoOpenEditor:!0})},[T]),R=f(()=>{let a=Y;if(a)I(a)},[I,Y]),v=f((a,q0=null)=>{sJ({id:a,targetChatJid:q0,currentChatJid:K,currentHashtag:Q,searchQuery:V,searchOpen:B,setCurrentHashtag:F,setSearchQuery:H,setSearchOpen:D,setMessageRefs:L,navigate:E,chatOnlyMode:U,baseHref:A})},[A,U,K,Q,E,B,V,F,L,D,H]),c=f(async(a,q0=null)=>{await oK({id:a,targetChatJid:q0,currentChatJid:K,getThread:z,setPosts:O})},[K,z,O]),h=f((a)=>{L((q0)=>s9(q0,a))},[L]),r=f(()=>{L([])},[L]),b=f((a)=>{L(a9(a))},[L]),s=f((a)=>{W("Compose failed",oJ(a),"error",5000)},[W]);return{clearIntentToast:y,addFileRef:I,removeFileRef:k,clearFileRefs:J,setFileRefsFromCompose:M,showIntentToast:W,openFileFromPill:x,openTimelineFileFromPill:P,attachActiveEditorFile:R,addMessageRef:v,scrollToMessage:c,removeMessageRef:h,clearMessageRefs:r,setMessageRefsFromCompose:b,handleComposeSubmitError:s}}x0();async function aK(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:q,thoughtBufferRef:L,draftBufferRef:K,setAgentThought:Q,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let B=G.current;if($==="thought"){if(Z.current=j,B)try{await Y(B,"thought",j)}catch(F){console.warn("Failed to update thought visibility:",F)}if(!j)return;try{let F=B?await q(B,"thought"):null;if(F?.text)L.current=F.text;Q((H)=>({...H||{text:"",totalLines:0},fullText:L.current||H?.fullText||"",totalLines:Number.isFinite(F?.total_lines)?F.total_lines:H?.totalLines||0}))}catch(F){console.warn("Failed to fetch full thought:",F)}return}if(X.current=j,B)try{await Y(B,"draft",j)}catch(F){console.warn("Failed to update draft visibility:",F)}if(!j)return;try{let F=B?await q(B,"draft"):null;if(F?.text)K.current=F.text;V((H)=>({...H||{text:"",totalLines:0},fullText:K.current||H?.fullText||"",totalLines:Number.isFinite(F?.total_lines)?F.total_lines:H?.totalLines||0}))}catch(F){console.warn("Failed to fetch full draft:",F)}}function aJ(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function tJ(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function tK(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:q,setAgentStatus:L,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:B,currentTurnIdRef:F,steerQueuedTurnIdRef:H,agentStatusRef:D,silentRecoveryRef:E,thoughtExpandedRef:U,draftExpandedRef:A,setCurrentTurnId:z,setSteerQueuedTurnId:O,currentTurnIdRefForPanel:y,setAgentThoughtVisibility:I,getAgentThought:k,setAgentThought:J,setAgentDraft:M}=_,W=f((c={})=>{let h=Number(c.atMs),r=Number.isFinite(h)&&h>0?h:Date.now();if(Z.current=r,c.running)Y.current=!0,q((b)=>b?b:!0);if(c.clearSilence)X.current=0},[Y,Z,X,q]),T=f(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);g(()=>()=>{T()},[T]);let x=f(()=>{T(),L((c)=>aJ(c))},[T,L]),P=f((c)=>{if(!c)return;T();let h=Date.now();G.current=h,L(tJ(c)),j.current=setTimeout(()=>{if(G.current!==h)return;L((r)=>{if(!r||!(r.last_activity||r.lastActivity))return r;return null})},$)},[T,j,G,$,L]),R=f(()=>{Y.current=!1,q(!1),Z.current=null,X.current=0,K.current="",Q.current="",V.current=null,B.current=null,F.current=null,H.current=null,D.current=null,E.current={inFlight:!1,lastAttemptAt:0,turnId:null},T(),z(null),O(null),U.current=!1,A.current=!1},[D,T,F,K,A,Y,Z,B,X,V,z,q,O,E,H,Q,U]),v=f(async(c,h)=>{await aK({panelKey:c,expanded:h,currentTurnIdRef:y,thoughtExpandedRef:U,draftExpandedRef:A,setAgentThoughtVisibility:I,getAgentThought:k,thoughtBufferRef:Q,draftBufferRef:K,setAgentThought:J,setAgentDraft:M})},[y,K,A,k,M,J,I,Q,U]);return{noteAgentActivity:W,clearLastActivityTimer:T,clearLastActivityFlag:x,showLastActivity:P,clearAgentRunState:R,handlePanelToggle:v}}x0();function N8(_){return _?{..._}:{text:"",totalLines:0}}function eK(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function eJ(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function _A(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function _V(_){return{agentStatus:_.agentStatus,agentDraft:N8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:N8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:eK(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:eJ(_.silentRecovery)}}function $V(_){let $=_.snapshot||_A(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(N8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(N8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(eK($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function e9(_){return String(_||"").trim()||"web:default"}function jV({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function $A(_){return jV(_)}function jA(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function GV(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:q,agentPlan:L,agentThought:K,pendingRequest:Q,pendingRequestRef:V,followupQueueItems:B,activeModel:F,activeThinkingLevel:H,supportsThinking:D,activeModelUsage:E,contextUsage:U,isAgentRunningRef:A,wasAgentActiveRef:z,draftBufferRef:O,thoughtBufferRef:y,lastAgentEventRef:I,lastSilenceNoticeRef:k,lastAgentResponseRef:J,currentTurnIdRef:M,thoughtExpandedRef:W,draftExpandedRef:T,agentStatusRef:x,silentRecoveryRef:P,clearLastActivityTimer:R,setIsAgentTurnActive:v,setAgentStatus:c,setAgentDraft:h,setAgentPlan:r,setAgentThought:b,setPendingRequest:s,setCurrentTurnId:a,setFollowupQueueItems:q0,setActiveModel:Z0,setActiveThinkingLevel:H0,setSupportsThinking:N0,setActiveModelUsage:L0,setContextUsage:D0,lastNotifiedIdRef:Q0,agentsRef:k0,notify:i,shouldNotifyLocallyForChat:j0}=_,C0=f((h0)=>{if(!$A({remainingQueueCount:h0,steerQueuedTurnId:Z.current,currentTurnId:M.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,M,X,Z]),M0=f(()=>_V({agentStatus:Y,agentDraft:q,agentPlan:L,agentThought:K,pendingRequest:Q,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:B,activeModel:F,activeThinkingLevel:H,supportsThinking:D,activeModelUsage:E,contextUsage:U,isAgentRunning:A.current,wasAgentActive:z.current,draftBuffer:O.current,thoughtBuffer:y.current,lastAgentEvent:I.current,lastSilenceNotice:k.current,lastAgentResponse:J.current,currentTurnIdRef:M.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:W.current,draftExpanded:T.current,agentStatusRef:x.current,silentRecovery:P.current}),[F,E,H,q,L,Y,K,U,G,B,$,Q,j,D,A,z,O,y,I,k,J,M,Z,W,T,x,P]),m0=f((h0)=>{$V({snapshot:h0,clearLastActivityTimer:R,refs:{isAgentRunningRef:A,wasAgentActiveRef:z,lastAgentEventRef:I,lastSilenceNoticeRef:k,draftBufferRef:O,thoughtBufferRef:y,pendingRequestRef:V,lastAgentResponseRef:J,currentTurnIdRef:M,steerQueuedTurnIdRef:Z,agentStatusRef:x,silentRecoveryRef:P,thoughtExpandedRef:W,draftExpandedRef:T},setters:{setIsAgentTurnActive:v,setAgentStatus:c,setAgentDraft:h,setAgentPlan:r,setAgentThought:b,setPendingRequest:s,setCurrentTurnId:a,setSteerQueuedTurnId:X,setFollowupQueueItems:q0,setActiveModel:Z0,setActiveThinkingLevel:H0,setSupportsThinking:N0,setActiveModelUsage:L0,setContextUsage:D0}})},[x,R,M,O,T,A,I,J,k,V,Z0,L0,H0,h,r,c,b,D0,a,q0,v,s,X,N0,P,Z,y,W,z]),c0=f((h0)=>{if(!h0)return;if(M.current===h0)return;M.current=h0,P.current={inFlight:!1,lastAttemptAt:0,turnId:h0},a(h0),Z.current=null,X(null),O.current="",y.current="",h({text:"",totalLines:0}),r(""),b({text:"",totalLines:0}),s(null),V.current=null,J.current=null,W.current=!1,T.current=!1},[M,O,T,J,V,h,r,b,a,s,X,P,Z,y,W]),Z_=f((h0)=>{let l0=J.current;if(!l0||!l0.post)return;if(h0&&l0.turnId&&l0.turnId!==h0)return;let T0=l0.post,n0=typeof T0?.chat_jid==="string"&&T0.chat_jid.trim()?T0.chat_jid.trim():"";if(!n0||!j0(n0))return;if(T0.id&&Q0.current===T0.id)return;let b0=jA(T0);if(!b0)return;Q0.current=T0.id||Q0.current,J.current=null;let o0=k0.current||{},H_=(T0?.data?.agent_id?o0[T0.data.agent_id]:null)?.name||"Pi";i(H_,b0,{sourceLabel:"Local"})},[k0,J,Q0,i,j0]);return{clearQueuedSteerStateIfStale:C0,snapshotCurrentChatPaneState:M0,restoreChatPaneState:m0,setActiveTurn:c0,notifyForFinalResponse:Z_}}x0();function U8(_){return _?.turn_id||_?.turnId||null}function F5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function _j(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function $j(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function H8(_,$){return{text:_,totalLines:$j(_,$)}}function jj(_,$){return{text:$?.text||"",totalLines:PX(_),fullText:_}}function ZV(_,$,j){return j==="replace"?$:`${_||""}${$}`}function XV(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function YV(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function n1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function qV(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function Gj(_,$){return _&&$}function LV(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function KV(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function VV(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function QV(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:q,agentStatusRef:L,pendingRequestRef:K,thoughtBufferRef:Q,draftBufferRef:V,setAgentStatus:B,setAgentDraft:F,setAgentPlan:H,setAgentThought:D,setPendingRequest:E,setActiveTurn:U,noteAgentActivity:A,clearLastActivityFlag:z}=_,O=$;try{let y=await j(O);if(G.current!==O)return null;if(!y||y.status!=="active"||!y.data){if(Z.current&&n1(X.current))Y();return Z.current=!1,q(),L.current=null,B(null),F({text:"",totalLines:0}),H(""),D({text:"",totalLines:0}),E(null),K.current=null,y??null}Z.current=!0;let I=y.data;L.current=I;let k=U8(I);if(k)U(k);A({running:!0,clearSilence:!0,atMs:m$(I)??Date.now()}),z(),B(I);let J=F5(y.thought);if(J)D((W)=>{if(_j(W,J.text))return W;return Q.current=J.text,J});let M=F5(y.draft);if(M)F((W)=>{if(_j(W,M.text))return W;return V.current=M.text,M});return y}catch(y){return console.warn("Failed to fetch agent status:",y),null}}async function BV(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:q,refreshQueueState:L,refreshAgentStatus:K,now:Q=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=G.current||null,B=Z.current,F=Q();if(B.inFlight)return null;if(B.turnId===V&&F-B.lastAttemptAt<X)return null;B.inFlight=!0,B.lastAttemptAt=F,B.turnId=V;try{if(n1(Y.current))await q();return await L(),await K()}finally{B.inFlight=!1}}function GA(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function FV(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:q,silenceRefreshMs:L,isCompactionStatus:K,setAgentStatus:Q,reconcileSilentTurn:V,now:B=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let F=G.current;if(!F)return;let H=B(),D=H-F,E=X.current,U=K(E),A=GA(E);if(D>=q){if(!U&&!A)Q({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(D>=Y&&H-Z.current>=L){if(!U&&!A){let z=Math.floor(D/1000);Q({type:"waiting",title:`Waiting for model… No events for ${z}s`})}Z.current=H,V()}}function ZA(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function NV(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:q,thoughtBufferRef:L,pendingRequestRef:K,lastAgentResponseRef:Q,agentStatusRef:V,stalledPostIdRef:B,scrollToBottomRef:F,setCurrentTurnId:H,setAgentDraft:D,setAgentPlan:E,setAgentThought:U,setPendingRequest:A,setAgentStatus:z,setPosts:O,dedupePosts:y,now:I=()=>Date.now(),nowIso:k=()=>new Date().toISOString()}=_;if(!$.current)return;let J=ZA(V.current);$.current=!1,j.current=0,G.current=null,V.current=null,Z.current=null,H(null),X.current=!1,Y.current=!1;let M=(q.current||"").trim();if(q.current="",L.current="",E(""),U({text:"",totalLines:0}),A(null),K.current=null,Q.current=null,!M){D({text:"",totalLines:0}),z({type:"error",title:"Response stalled - No content received"});return}D({text:M,totalLines:$j(M,null),fullText:M});let W=M,T=I(),x=k(),P={id:T,timestamp:x,data:{type:"agent_response",content:W,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:J?.summary||"",tool_title:J?.title||"",tool_name:J?.toolName||"",tool_status:J?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};B.current=T,O((R)=>R?y([...R,P]):[P]),F.current?.(),z(null)}function XA(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function YA(_){NV(_)}function UV(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;g(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function HV(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:L,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:B,agentStatusRef:F,scrollToBottomRef:H,setCurrentTurnId:D,setAgentDraft:E,setAgentPlan:U,setAgentThought:A,setPendingRequest:z,setAgentStatus:O,dedupePosts:y}=_,I=f(()=>{XA({stalledPostIdRef:$,setPosts:j})},[j,$]),k=f(()=>{YA({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:L,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:B,agentStatusRef:F,stalledPostIdRef:$,scrollToBottomRef:H,setCurrentTurnId:D,setAgentDraft:E,setAgentPlan:U,setAgentThought:A,setPendingRequest:z,setAgentStatus:O,setPosts:j,dedupePosts:y})},[Y,y,K,L,G,X,B,F,Z,V,H,E,U,O,A,D,z,j,$,Q,q]);return{removeStalledPost:I,finalizeStalledResponse:k}}function qA(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function LA(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function EV(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:q}=_,{applyBranding:L}=pK($),K=sK(j);qA({removeFileRefRef:q,composeReferenceActions:K});let Q=tK(G),V=GV({...Z,clearLastActivityTimer:Q.clearLastActivityTimer}),B=HV(X);return UV(Y),LA({applyBranding:L,composeReferenceActions:K,agentActivity:Q,chatPaneRuntime:V,recoveryCallbacks:B})}x0();x0();u_();var E8=new Map,Zj=new Map;function DV(){return Date.now()}function D6(_){return String(_||"").trim()}function WV(_,$=600000){return Boolean(_&&DV()-_.cachedAt<=$)}function KA(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function OV(_,$){return E8.delete(_),E8.set(_,$),KA(E8),$}function D8(_,$){let j=D6(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:DV()};return OV(j,G)}function Xj(_,$={}){let j=D6(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=E8.get(j)||null;if(!WV(Z,G))return null;return OV(j,Z)}function zV(_,$,j=5){if(!Array.isArray(_))return[];let G=D6($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let q of _){let L=D6(q?.chat_jid);if(!L||L===G||X.has(L))continue;if(X.add(L),Y.push(L),Y.length>=Z)break}return Y}async function JV(_){let $=Array.from(new Set((_.chatJids||[]).map((q)=>D6(q)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((q)=>!WV(Xj(q,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let q=Z[X++],L=Zj.get(q);if(L){await L;continue}let K=(async()=>{try{let Q=await _.fetchTimeline(q);D8(q,Q)}catch(Q){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",Q,{chatJid:q})}finally{Zj.delete(q)}})();Zj.set(q,K),await K}});await Promise.all(Y)}function AV(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let q=Y?.id;if(typeof q==="number"&&Number.isFinite(q)&&q<Z)Z=q}if(!Number.isFinite(Z))return j5([...G,...j]);let X=j.filter((Y)=>{let q=Y?.id;return typeof q==="number"&&Number.isFinite(q)&&q<Z});return j5([...G,...X])}function kV({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=C(null),[q,L]=C(!1),K=u(!1),Q=u(null),V=u(!1),B=u(null),F=u(null),H=u(0),D=u(0);g(()=>{K.current=q},[q]),g(()=>{F.current=X},[X]);let E=!G&&!Z,U=u(E);g(()=>{U.current=E},[E]),g(()=>{H.current+=1,Y(null),F.current=null,B.current=null,V.current=!1,K.current=!1,L(!1),D.current=0},[j]);let A=f((J,M)=>{if(!E)return;D8(j,{posts:Array.isArray(J)?J:[],has_more:Boolean(M)})},[j,E]),z=f((J,M)=>{F.current=Array.isArray(J)?J:[],K.current=Boolean(M),Y(F.current),L(K.current),A(F.current,K.current)},[A]),O=f(async(J=null)=>{let M=H.current;try{if(J){let P=await o3(J,50,0,j);if(M!==H.current)return;Y(P.posts),L(!1);return}let W=(P)=>{if(M!==H.current)return;let R=Array.isArray(P?.posts)?P.posts:[],v=Boolean(P?.has_more);z(R,v)},T=Xj(j);if(T){z(T.posts,T.has_more);let P=D.current;b$(10,null,j).then((R)=>{if(M!==H.current||D.current!==P)return;if(!U.current)return;let v=Array.isArray(R?.posts)?R.posts:[],c=Boolean(R?.has_more);z(AV(F.current,v),c)}).catch((R)=>{if(M!==H.current)return;console.error("Failed to refresh cached timeline:",R)});return}let x=await b$(10,null,j);W(x)}catch(W){if(M!==H.current)return;throw console.error("Failed to load posts:",W),W}},[j,z]),y=f(async()=>{let J=H.current;try{let M=await b$(10,null,j);if(J!==H.current)return;z(AV(F.current,M?.posts),Boolean(M?.has_more))}catch(M){if(J!==H.current)return;console.error("Failed to refresh timeline:",M)}},[j,z]),I=f(async(J={})=>{let M=H.current,W=F.current;if(!W||W.length===0)return;if(V.current)return;let{preserveScroll:T=!0,preserveMode:x="top",allowRepeat:P=!1}=J,R=(h)=>{if(!T){h();return}if(x==="top")$(h);else _(h)},c=W.slice().sort((h,r)=>h.id-r.id)[0]?.id;if(!Number.isFinite(c))return;if(!P&&B.current===c)return;V.current=!0,B.current=c;try{let h=await b$(10,c,j);if(M!==H.current)return;if(D.current+=1,h.posts.length>0)R(()=>{let r=j5([...h.posts,...F.current||[]]);z(r,h.has_more)});else z(F.current||[],!1)}catch(h){if(M!==H.current)return;console.error("Failed to load more posts:",h)}finally{if(M===H.current)V.current=!1}},[j,_,$,z]);g(()=>{Q.current=I},[I]);let k=f((J)=>{Y((M)=>{let W=typeof J==="function"?J(M):J;if(F.current=W,Array.isArray(W)){if(D.current+=1,E)D8(j,{posts:W,has_more:K.current})}return W})},[j,E]);return{posts:X,setPosts:k,hasMore:q,setHasMore:L,hasMoreRef:K,loadPosts:O,refreshTimeline:y,loadMore:I,loadMoreRef:Q,loadingMoreRef:V,lastBeforeIdRef:B}}x0();function VA(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function MV(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!VA(Z));return G.length===_.length?_:G}function TV(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function wV(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function o$(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function yV(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function xV(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function QA(_,$=150){return Math.abs(_)<=$}function IV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=f(()=>{let L=$.current;if(!L)return;if(QA(L.scrollTop))L.scrollTop=0},[$]),X=f((L)=>{let K=$.current;if(!K||typeof L!=="function"){L?.();return}let{currentHashtag:Q,searchQuery:V,searchOpen:B}=j.current||{},F=!((V||B)&&!Q),H=F?K.scrollHeight-K.scrollTop:K.scrollTop;L(),requestAnimationFrame(()=>{let D=$.current;if(!D)return;if(F){let E=Math.max(D.scrollHeight-H,0);D.scrollTop=E}else{let E=Math.max(D.scrollHeight-D.clientHeight,0),U=Math.min(H,E);D.scrollTop=U}})},[$,j]),Y=f((L)=>{let K=$.current;if(!K||typeof L!=="function"){L?.();return}let Q=K.scrollTop;L(),requestAnimationFrame(()=>{let V=$.current;if(!V)return;let B=Math.max(V.scrollHeight-V.clientHeight,0);V.scrollTop=Math.min(Q,B)})},[$]),q=f((L)=>{return MV(L,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:q}}function BA(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function FA(_){_.scrollToBottomRef.current=_.scrollToBottom}function CV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:q}=_,L=u(null),{scrollToBottom:K,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,filterQueuedPosts:B}=IV({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});FA({scrollToBottomRef:L,scrollToBottom:K});let{posts:F,setPosts:H,hasMore:D,setHasMore:E,hasMoreRef:U,loadPosts:A,refreshTimeline:z,loadMore:O,loadMoreRef:y}=kV({preserveTimelineScroll:Q,preserveTimelineScrollTop:V,chatJid:Z,currentHashtag:X,searchQuery:Y}),I=X0(()=>BA({rawPosts:F,followupQueueItems:q,filterQueuedPosts:B}),[B,q,F]);return{scrollToBottomRef:L,scrollToBottom:K,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,rawPosts:F,setPosts:H,hasMore:D,setHasMore:E,hasMoreRef:U,loadPosts:A,refreshTimeline:z,loadMore:O,loadMoreRef:y,posts:I}}x0();function NA(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function fV(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:q,loadPosts:L,searchPosts:K,setCurrentHashtag:Q,setSearchQuery:V,setSearchOpen:B,setSearchScope:F,setPosts:H,setHasMore:D,preserveTimelineScrollTop:E,setRemovingPostIds:U,deletePost:A,hasMoreRef:z,loadMoreRef:O}=_,y=f(async(P)=>{await rK({hashtag:P,setCurrentHashtag:Q,setPosts:H,loadPosts:L})},[L,Q,H]),I=f(async()=>{await dK({setCurrentHashtag:Q,setSearchQuery:V,setPosts:H,loadPosts:L})},[L,Q,H,V]),k=f(async(P,R=Z,v)=>{await t9({query:P,scope:R,currentChatJid:X,currentRootChatJid:Y,searchPosts:K,setSearchScope:F,setSearchQuery:V,setCurrentHashtag:Q,setPosts:H,setHasMore:D,filters:v})},[X,Y,K,Z,Q,D,H,V,F]),J=f((P)=>{if(F(P),j&&j.trim())t9({query:j,scope:P,currentChatJid:X,currentRootChatJid:Y,searchPosts:K,setSearchScope:F,setSearchQuery:V,setCurrentHashtag:Q,setPosts:H,setHasMore:D})},[X,Y,K,j,Q,D,H,V,F]),M=f(()=>{B(!0),V(null),Q(null),F("current"),H([])},[Q,H,B,V,F]),W=f(()=>{B(!1),V(null),L()},[L,B,V]),T=X0(()=>NA({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),x=f(async(P)=>{await iK({post:P,posts:q,currentChatJid:X,deletePost:A,preserveTimelineScrollTop:E,setPosts:H,setRemovingPostIds:U,hasMoreRef:z,loadMoreRef:O})},[X,A,z,O,q,E,H,U]);return{handleHashtagClick:y,handleBackToTimeline:I,handleSearch:k,handleSearchScopeChange:J,enterSearchMode:M,exitSearchMode:W,isMainTimelineView:T,handleDeletePost:x}}x0();function Yj(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function PV(_,$){let j=new Map(_),G=Yj($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function W8(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=Yj($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function RV(_){if(_?.options?.remove)return!0;return Yj(_)?.state!=="running"}function qj(_,$){return`${_}:${$}`}function SV(_,$,j){let G=qj($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function gV(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function O8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function uV(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}if($.startsWith("codex.stop"))return await fetch("/agent/codex/stop",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:$,chat_jid:_.currentChatJid})}),{refreshAutoresearchStatus:!1,dismissPanelKey:typeof _.panel?.key==="string"?_.panel.key:void 0};if($.startsWith("codex.dismiss"))return await fetch("/agent/codex/dismiss",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:$,chat_jid:_.currentChatJid})}),{refreshAutoresearchStatus:!1,dismissPanelKey:typeof _.panel?.key==="string"?_.panel.key:void 0};throw Error(`Unsupported panel action: ${$||j}`)}var bV="piclaw:ctx:";function UA(_){return _==="claude-native-context"||_==="codex-app-server-token-usage"||_==="pi-session-context"}function W$(_){if(!_||typeof _!=="object")return null;let $=_,j=typeof $.backend==="string"&&$.backend.trim()?$.backend.trim():null,G=UA($.source)?$.source:null,Z=typeof $.updatedAt==="string"&&$.updatedAt.trim()?$.updatedAt.trim():null,X=$.tokens==null?null:Number($.tokens),Y=Number($.contextWindow),q=$.percent==null?null:Number($.percent);if(!j||!G||!Z)return null;if(!Number.isFinite(Y)||Y<=0)return null;if(X!=null&&(!Number.isFinite(X)||X>Y))return null;if(q!=null&&(!Number.isFinite(q)||q>100))return null;return{backend:j,source:G,tokens:X,contextWindow:Y,percent:q,model:typeof $.model==="string"?$.model:null,updatedAt:Z,sessionId:typeof $.sessionId==="string"?$.sessionId:null}}function N5(_,$){let j=W$(_),G=W$($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent&&j.backend===G.backend&&j.source===G.source&&j.model===G.model&&j.sessionId===G.sessionId}function U5(_,$){let j=W$($);if(!_||!j)return;if(j.percent==null)return;try{V_(bV+_,JSON.stringify(j))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function Lj(_){if(!_||typeof window>"u"||!window.localStorage)return;try{window.localStorage.removeItem(bV+_)}catch{return}}async function vV(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}=_,L=++j.current,K=$;try{let Q=await X(K);if(L!==j.current)return;if(G.current!==K)return;let V=Z.current,B=Array.isArray(Q?.items)?Q.items:[],F=TV(B,V);if(F.length){Y((H)=>wV(H,F)?H:F);return}if(B.length>0)return;V.clear(),q(0),Y((H)=>H.length===0?H:[])}catch{if(L!==j.current)return;if(G.current!==K)return;Y((Q)=>Q.length===0?Q:[])}}async function mV(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=W$(await G(X));if(j.current!==X)return;if(!Y||Y.percent==null){Z((q)=>q==null?q:null),Lj(X);return}Z((q)=>N5(q,Y)?q:Y),U5(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function cV(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let q=await G(Y);if(j.current!==Y)return;Z((L)=>PV(L,q)),X((L)=>O8(L,"autoresearch"))}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",q)}}function lV(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function hV(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(n1($.current))j();G()}i5();var z8=new Map,J8=new Map,HA=250,pV=1500,nV=300000;function H5(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function EA(_,$){return`${_}:${$}`}function DA(_){for(let[$,j]of J8.entries())if(_-j>nV)J8.delete($)}function WA(_){for(let[$,j]of z8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>nV)z8.delete($)}}function rV(_=H5()){DA(_),WA(_)}function dV(_){let{chatJid:$,nowMs:j=H5()}=_;if(!$)return;J8.set($,j),rV(j)}function W6(_,$=pV,j=H5()){if(!_)return!1;let G=J8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function O$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=HA,activationWindowMs:X=pV,nowMs:Y=H5()}=_;rV(Y);let q=EA($,j),L=z8.get(q)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(z8.set(q,L),L.inFlight)return await L.inFlight;if(Boolean(N2("thread-switch",j)||W6(j,X,Y))&&Number.isFinite(L.lastCompletedAt)&&Y-L.lastCompletedAt<=Z)return L.lastValue;let Q=Promise.resolve().then(G).then((V)=>{return L.lastCompletedAt=H5(),L.lastValue=V??null,L.inFlight=null,V}).catch((V)=>{throw L.lastCompletedAt=H5(),L.inFlight=null,V});return L.inFlight=Q,await Q}function iV(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:q,showIntentToast:L}=_,K=typeof $==="string"&&$.trim()?$.trim():null;if(!K||!j||K===j)return!1;if(G.current===K)return!0;G.current=K;let Q=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!Q&&!Y.current&&!q.current&&!Z.current);return L("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function Kj(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function oV(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:q,setPendingRequest:L,pendingRequestRef:K,clearAgentRunState:Q,hasConnectedOnceRef:V,viewStateRef:B,refreshTimeline:F,refreshAgentStatus:H,refreshQueueState:D,refreshContextUsage:E}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),L(null),K.current=null,Q();return}if(!V.current){if(V.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),L(null),K.current=null,Q(),W6($))return;if(Kj(B.current))F();H(),D(),E();return}if(Kj(B.current))F();H(),D(),E()}function sV(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_,L=Kj($.current);if(j){if(L)G();Z(),X(),Y(),q();return}if(L)G();X(),Y(),q()}function OA(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function aV(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q,getAgentContext:L,setContextUsage:K,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:B,getAgentStatus:F,wasAgentActiveRef:H,viewStateRef:D,refreshTimeline:E,clearAgentRunState:U,agentStatusRef:A,pendingRequestRef:z,thoughtBufferRef:O,draftBufferRef:y,setAgentStatus:I,setAgentDraft:k,setAgentPlan:J,setAgentThought:M,setPendingRequest:W,setActiveTurn:T,noteAgentActivity:x,clearLastActivityFlag:P,isAgentRunningRef:R,currentTurnIdRef:v,silentRecoveryRef:c,silenceRefreshMs:h,lastAgentEventRef:r,lastSilenceNoticeRef:b,silenceWarningMs:s,silenceFinalizeMs:a,isCompactionStatus:q0,serverVersionContext:Z0,setConnectionStatus:H0,setPendingRequestForConnection:N0,hasConnectedOnceRef:L0}=_,D0=f(()=>{return O$({kind:"queue-state",chatJid:$,run:async()=>{return await vV({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}),null}})},[j,q,$,Z,X,G,Y]),Q0=f(async()=>{await O$({kind:"context-usage",chatJid:$,run:async()=>{return await mV({currentChatJid:$,activeChatJidRef:j,getAgentContext:L,setContextUsage:K}),null}})},[j,$,L,K]),k0=f(async()=>{await O$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await cV({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:B}),null}})},[j,$,Q,V,B]),i=f(async()=>{return await O$({kind:"agent-status",chatJid:$,run:async()=>{return await QV({currentChatJid:$,getAgentStatus:F,activeChatJidRef:j,wasAgentActiveRef:H,viewStateRef:D,refreshTimeline:E,clearAgentRunState:U,agentStatusRef:A,pendingRequestRef:z,thoughtBufferRef:O,draftBufferRef:y,setAgentStatus:I,setAgentDraft:k,setAgentPlan:J,setAgentThought:M,setPendingRequest:W,setActiveTurn:T,noteAgentActivity:x,clearLastActivityFlag:P})}})},[j,A,U,P,$,y,F,x,z,E,T,k,J,I,M,W,O,D,H]),j0=f(async()=>{return await BV({isAgentRunningRef:R,pendingRequestRef:z,currentTurnIdRef:v,silentRecoveryRef:c,silenceRefreshMs:h,viewStateRef:D,refreshTimeline:E,refreshQueueState:D0,refreshAgentStatus:i})},[v,R,z,i,D0,E,h,c,D]);g(()=>{let m0=OA(s),c0=setInterval(()=>{FV({isAgentRunningRef:R,pendingRequestRef:z,lastAgentEventRef:r,lastSilenceNoticeRef:b,agentStatusRef:A,silenceWarningMs:s,silenceFinalizeMs:a,silenceRefreshMs:h,isCompactionStatus:q0,setAgentStatus:I,reconcileSilentTurn:j0})},m0);return()=>clearInterval(c0)},[A,R,q0,r,b,z,j0,I,a,h,s]);let C0=f((m0)=>{return iV({serverVersion:m0,...Z0})},[Z0]),M0=f((m0)=>{oV({currentChatJid:$,status:m0,setConnectionStatus:H0,setAgentStatus:I,setAgentDraft:k,setAgentPlan:J,setAgentThought:M,setPendingRequest:N0,pendingRequestRef:z,clearAgentRunState:U,hasConnectedOnceRef:L0,viewStateRef:D,refreshTimeline:E,refreshAgentStatus:i,refreshQueueState:D0,refreshContextUsage:Q0})},[U,$,L0,z,i,Q0,D0,E,k,J,I,M,H0,N0,D]);return{refreshQueueState:D0,refreshContextUsage:Q0,refreshAutoresearchStatus:k0,refreshAgentStatus:i,handleUiVersionDrift:C0,handleConnectionStatusChange:M0}}x0();function O6(_){return typeof _==="string"}function z6(_){return typeof _==="string"&&_.trim().length>0}function A8(_){if(!z6(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function Vj(_){if(!Array.isArray(_))return[];return _.filter(($)=>z6($?.chat_jid)&&z6($?.agent_name))}function tV(_){if(!Array.isArray(_))return[];return _.filter(($)=>O6($?.chat_jid)&&O6($?.agent_name))}function eV(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(O6(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!O6(Y?.chat_jid))return Y;let q=G.get(Y.chat_jid);return q?{...Y,...q,is_active:q.is_active??Y.is_active}:Y}),X=O6(j)?j:"";return Z.sort((Y,q)=>{if(Y.chat_jid===X&&q.chat_jid!==X)return-1;if(q.chat_jid===X&&Y.chat_jid!==X)return 1;let L=Boolean(Y.archived_at),K=Boolean(q.archived_at);if(L!==K)return L?1:-1;if(Boolean(Y.is_active)!==Boolean(q.is_active))return Y.is_active?-1:1;let Q=A8(Y.updated_at)||A8(Y.created_at),V=A8(q.updated_at)||A8(q.created_at);if(Q!==V)return V-Q;let B=z6(Y.agent_name)?Y.agent_name.trim():"",F=z6(q.agent_name)?q.agent_name.trim():"",H=B.localeCompare(F,void 0,{sensitivity:"base"});if(H!==0)return H;return String(Y.chat_jid).localeCompare(String(q.chat_jid))}),Z}var zA={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null,hasFastMode:!1,fastMode:null};function _Q(_){if(!_||typeof _!=="object")return zA;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null,hasFastMode:_.fast_mode!==void 0,fastMode:typeof _.fast_mode==="boolean"?_.fast_mode:null}}function $Q(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function jQ(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},q=Y.name||null,L=Y.avatar_url??Y.avatarUrl??Y.avatar??null,K=!1,Q=!1;if(Z&&Z!==Y.name)q=Z,K=!0;if(X!==void 0){let V=typeof X==="string"?X.trim():null,B=typeof L==="string"?L.trim():null,F=V||null;if(F!==(B||null))L=F,Q=!0}if(!K&&!Q)return null;return{agentId:G,nameChanged:K,avatarChanged:Q,resolvedName:q,resolvedAvatar:L}}function GQ(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function ZQ(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,q=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===q)return _;return{name:X,avatar_url:Y,avatar_background:q}}async function YQ(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(CX(X));let Y=X?.user||{};G((L)=>GQ(L,Y));let q=$Q(X?.agents);Z(q.name,q.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function qQ(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=jQ($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let L={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)L.name=X.resolvedName;if(X.avatarChanged)L.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:L}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function LQ(_){let{payload:$,setUserProfile:j}=_;j((G)=>ZQ(G,$))}function XQ(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function KQ(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:q}=_;if($&&typeof $==="object")Y?.((K)=>XQ(K,$)?K:$),q?.(!0);let L=_Q($);if(L.hasModel)j((K)=>Object.is(K,L.model)?K:L.model);if(L.hasThinkingLevel){let K=L.thinkingLevelLabel??L.thinkingLevel;G((Q)=>Object.is(Q,K)?Q:K)}if(L.hasSupportsThinking)Z((K)=>K===L.supportsThinking?K:L.supportsThinking);if(L.hasProviderUsage)X((K)=>XQ(K,L.providerUsage)?K:L.providerUsage)}async function VQ(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[q,L]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let K=Vj(q?.chats),Q=Vj(L?.chats),V=eV(K,Q,Y);return X(V),V}catch{if(Z.current!==Y)return[];return X([]),[]}}async function QQ(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(tV(Z?.chats))}catch{G([])}}function BQ(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),xV($))Y()}function FQ(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,q=$("sidebarWidth",null),L=Number.isFinite(q)?Math.min(Math.max(Number(q),Z),X):Y;if(j.current=L,G)G.style.setProperty("--sidebar-width",`${L}px`);return L}async function NQ(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:q,setPosts:L,setHasMore:K,scrollToBottom:Q,isCancelled:V,scheduleRaf:B=(O)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(O);return}setTimeout(O,0)},scheduleTimeout:F=(O,y)=>{setTimeout(O,y)},onTimelineLoadStart:H,onTimelineDataReady:D,onTimelineFirstPaint:E,onTimelineError:U}=_,A=(O)=>{if(V())return;B(()=>{if(V())return;B(()=>{if(V())return;E?.(O)})})},z=()=>{if(V())return;B(()=>{if(V())return;F(()=>{if(V())return;Q()},0)})};if($){H?.({mode:"hashtag",hashtag:$});try{if(await Y($),V())return;D?.({mode:"hashtag",hashtag:$}),A({mode:"hashtag"})}catch(O){if(V())return;throw U?.(O,{mode:"hashtag",hashtag:$}),O}return}if(j){H?.({mode:"search",searchQuery:j,searchScope:G});try{let O=await q(j,50,0,Z,G,X);if(V())return;L(Array.isArray(O?.results)?O.results:[]),K(!1),D?.({mode:"search",resultCount:Array.isArray(O?.results)?O.results.length:0}),A({mode:"search"})}catch(O){if(V())return;U?.(O,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",O),L([]),K(!1)}return}H?.({mode:"timeline"});try{if(await Y(),V())return;D?.({mode:"timeline"}),A({mode:"timeline"}),z()}catch(O){if(V())return;U?.(O,{mode:"timeline"}),console.error("Failed to load timeline:",O)}}i5();u_();function JA(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:q=60000,scheduleInterval:L=(V,B)=>setInterval(V,B),clearScheduledInterval:K=(V)=>clearInterval(V)}=_;if(Y)$();let Q=L(()=>{j(),G(),Z(),X()},q);return()=>{K(Q)}}function AA(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:q=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:q}),G(),Z(),X(),Y()}function kA(_){let $=zV(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;JV({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>b$(10,null,j))})}function UQ(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:q,currentChatJid:L,currentRootChatJid:K,getAgentModels:Q,getAgentContext:V,getActiveChatAgents:B,getChatBranches:F,activeChatJidRef:H,setActiveChatAgents:D,setCurrentChatBranches:E,setActiveModel:U,setActiveThinkingLevel:A,setSupportsThinking:z,setActiveModelUsage:O,setAgentModelsPayload:y,setHasLoadedAgentModels:I,agentsRef:k,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:W,setContextUsage:T,setExtensionWorkingState:x}=_,P=f(async()=>{await YQ({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);g(()=>{P(),FQ({readStoredNumber:X,sidebarWidthRef:Y,shellElement:q.current,maxWidth:G6(Number.POSITIVE_INFINITY)})},[q,P,X,Y]);let R=f((Z0)=>{KQ({payload:Z0,setActiveModel:U,setActiveThinkingLevel:A,setSupportsThinking:z,setActiveModelUsage:O,setAgentModelsPayload:y,setHasLoadedAgentModels:I})},[U,O,A,y,I,z]),v=f(()=>N2("thread-switch",L),[L]),c=f(()=>{return O$({kind:"model-state",chatJid:L,run:async()=>{let Z0=v();if(Z0)_1(Z0,"runtime-hydration-start",{phase:"model-state"});let H0=L;try{let[L0,D0]=await Promise.all([(async()=>{let k0=Z0||v();if(k0)_1(k0,"model-request-start",{chatJid:H0});let i=await Q(H0);if(k0)_1(k0,"model-request-ready",{chatJid:H0,hasCurrent:Boolean(i?.current),modelCount:Array.isArray(i?.models)?i.models.length:0});return i})(),V(H0).catch(()=>null)]);if(H.current&&H.current!==H0)return null;R(L0);let Q0=W$(D0);if(Q0&&Q0.percent!=null)T((k0)=>N5(k0,Q0)?k0:Q0),U5(H0,Q0);else T(null),Lj(H0)}catch{if(H.current&&H.current!==H0)return null;R(null)}let N0=Z0||v();if(N0)_1(N0,"runtime-hydration-ready",{chatJid:L}),U2(N0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:L});return null}})},[H,R,L,V,Q,v,T]);g(()=>{dV({chatJid:L}),U(null),A(null),z(!1),O(null),I(!1),y(null),x({message:null,indicator:null,visible:!0}),T(null),c()},[L,c,U,O,A,y,T,x,I,z]);let h=f((Z0)=>{qQ({payload:Z0,agentsRef:k,setAgents:j,applyBranding:Z})},[k,Z,j]),r=f((Z0)=>{LQ({payload:Z0,setUserProfile:G})},[G]),b=f((Z0)=>{let H0=Boolean(Z0?.prewarmRecent),N0=Number.isFinite(Z0?.prewarmLimit)?Number(Z0?.prewarmLimit):5;return O$({kind:"active-chat-agents",chatJid:L,run:async()=>{let L0=v(),D0=await VQ({currentChatJid:L,getActiveChatAgents:async()=>{if(L0)_1(L0,"active-chat-list-request-start",{chatJid:L});let Q0=await B(L);if(L0)_1(L0,"active-chat-list-request-ready",{rowCount:Array.isArray(Q0?.chats)?Q0.chats.length:0});return Q0},getChatBranches:async(Q0,k0)=>{if(L0)_1(L0,"branch-list-request-start",{rootChatJid:Q0});let i=await F(Q0,k0);if(L0)_1(L0,"branch-list-request-ready",{rootChatJid:Q0,rowCount:Array.isArray(i?.chats)?i.chats.length:0});return i},activeChatJidRef:H,setActiveChatAgents:D});if(H0)kA({chats:D0,currentChatJid:L,prewarmLimit:N0});return null}})},[H,L,B,F,v,D]),s=f(()=>{return O$({kind:"current-chat-branches",chatJid:L,run:async()=>{let Z0=v();return await QQ({currentRootChatJid:K,getChatBranches:async(H0,N0)=>{if(Z0)_1(Z0,"root-branch-request-start",{rootChatJid:H0});let L0=await F(H0,N0);if(Z0)_1(Z0,"root-branch-request-ready",{rootChatJid:H0,rowCount:Array.isArray(L0?.chats)?L0.chats.length:0});return L0},setCurrentChatBranches:E}),null}})},[L,K,F,v,E]),a=f(()=>{lV({refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:s,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:W})},[b,W,M,s,c,J]),q0=f(()=>{AA({refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:s,refreshQueueState:J,refreshContextUsage:M,refreshAutoresearchStatus:W,prewarmLimit:5})},[b,W,M,s,c,J]);return g(()=>JA({refreshModelAndQueueState:a,refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:s,refreshQueueState:J,runImmediately:!1}),[b,s,a,c,J]),g(()=>{let Z0=setInterval(()=>{c()},5000);return()=>clearInterval(Z0)},[c]),{updateAgentProfile:h,updateUserProfile:r,applyModelState:R,refreshModelState:c,refreshActiveChatAgents:b,refreshCurrentChatBranches:s,refreshModelAndQueueState:a,refreshPostPaintThreadState:q0}}x0();function MA(_,$){let j=W1(_);return Boolean(_&&j===$)}function E5(_,$,j){if(!MA(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function HQ(_,$){return{..._,openedAt:$}}function EQ(_){let $=W1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function DQ(_,$,j){let G=wq({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=W1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=W1(_),Y=Boolean(Z&&X&&Z===X),q={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:q,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function WQ(_,$){if(!_||_?.source!=="live")return _||null;let j=W1($),G=W1(_);if(j&&G&&j!==G)return _;return null}function OQ(_,$,j){return E5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function Qj(_,$,j){if(j.errorMessage)return E5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return E5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function zQ(_,$,j){return E5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function JQ(_,$,j){return E5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function AQ(_,$,j){return E5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}i5();function TA(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function kQ(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function MQ(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:q,setPosts:L,setHasMore:K,scrollToBottom:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:B,setExtensionWorkingState:F,paneStateOwnerChatJidRef:H,chatPaneStateByChatRef:D,snapshotCurrentChatPaneState:E,restoreChatPaneState:U,dismissedQueueRowIdsRef:A,refreshAgentStatus:z,viewStateRef:O,refreshTimeline:y,refreshModelAndQueueState:I,refreshPostPaintThreadState:k,setFloatingWidget:J,dismissedLiveWidgetKeysRef:M}=_;g(()=>{TA({setExtensionStatusPanels:V,setPendingExtensionPanelActions:B,setExtensionWorkingState:F})},[$,V,B,F]),g(()=>{let x=!1,P=rZ("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return _1(P,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),NQ({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:q,setPosts:L,setHasMore:K,scrollToBottom:Q,isCancelled:()=>x,onTimelineLoadStart:(R)=>{_1(P,"timeline-load-start",R||null)},onTimelineDataReady:(R)=>{_1(P,"timeline-data-ready",R||null)},onTimelineFirstPaint:(R)=>{_1(P,"timeline-first-paint",R||null),U2(P,["runtime-hydration-ready","timeline-first-paint"],"settled",R||null),kQ({refreshAgentStatus:z,refreshPostPaintThreadState:k})},onTimelineError:(R,v)=>{dZ(P,R,"timeline-load-failed",v||null),kQ({refreshAgentStatus:z,refreshPostPaintThreadState:k})}}),()=>{x=!0,iZ(P,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,Q,q,K,L,z,k]),g(()=>{let x=H.current||$;D.current.set(x,E())},[D,$,H,E]),g(()=>{let x=H.current||$;if(x===$)return;D.current.set(x,E()),H.current=$,A.current.clear(),U(D.current.get($)||null)},[D,$,A,H,U,E]);let W=f(()=>{hV({viewStateRef:O,refreshTimeline:y,refreshModelAndQueueState:I})},[I,y,O]),T=f((x,P="streaming")=>{let R=new Date().toISOString();J((v)=>DQ(v,x,{fallbackStatus:P,currentChatJid:$,dismissedSessionKeys:M.current,updatedAt:R}))},[$,M,J]);return{refreshCurrentView:W,applyLiveGeneratedWidgetUpdate:T}}x0();x0();u_();function wA({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!X6(),q=Z.visibilityState&&Z.visibilityState!=="visible",L=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return q=!0,!0;return!1},K=()=>{if(L())return;if(q)q=!1,X(),$?.()},Q=()=>{if(L())return;if(q){K();return}if(Y)_.reconnectIfNeeded()},V=()=>{K()},B=()=>{K()};return G.addEventListener("focus",Q),G.addEventListener("pageshow",V),Z.addEventListener("visibilitychange",B),()=>{G.removeEventListener("focus",Q),G.removeEventListener("pageshow",V),Z.removeEventListener("visibilitychange",B)}}function TQ({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=u(_);X.current=_;let Y=u($);Y.current=$;let q=u(j);q.current=j;let L=u(G);L.current=G,g(()=>{let K=new z2((V,B)=>X.current(V,B),(V)=>Y.current(V),{chatJid:Z});K.connect();let Q=wA({sse:K,onWake:()=>L.current?.()});return()=>{Q(),K.disconnect()}},[Z])}l5();x2();function T4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function D5(_,$){return Boolean(_)&&!Boolean($)}function wQ(_,$){return _||$||null}function yQ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function W5(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=o$(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function Bj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function yA(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function xQ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:yA($,j),panelKey:typeof $?.key==="string"?$.key:""}}function xA(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function IQ(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};let G=xA($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function CQ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var IA=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function fQ(_){return IA.has(String(_||"").trim())}function CA(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function k8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(CA(_),{detail:G})),!0}function PQ(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function RQ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function SQ(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:q,pendingRequestRef:L,draftBufferRef:K,thoughtBufferRef:Q,previewResyncPendingRef:V,previewResyncGenerationRef:B,steerQueuedTurnIdRef:F,thoughtExpandedRef:H,draftExpandedRef:D,draftThrottleRef:E,thoughtThrottleRef:U,viewStateRef:A,followupQueueItemsRef:z,dismissedQueueRowIdsRef:O,scrollToBottomRef:y,hasMoreRef:I,loadMoreRef:k,lastAgentResponseRef:J,wasAgentActiveRef:M,setActiveTurn:W,applyLiveGeneratedWidgetUpdate:T,setFloatingWidget:x,clearLastActivityFlag:P,handleUiVersionDrift:R,setAgentStatus:v,setAgentDraft:c,setAgentPlan:h,setAgentThought:r,setPendingRequest:b,clearAgentRunState:s,getAgentStatus:a,noteAgentActivity:q0,showLastActivity:Z0,refreshTimeline:H0,refreshModelAndQueueState:N0,refreshActiveChatAgents:L0,refreshCurrentChatBranches:D0,notifyForFinalResponse:Q0,setContextUsage:k0,refreshContextUsage:i,refreshQueueState:j0,setFollowupQueueItems:C0,clearQueuedSteerStateIfStale:M0,setSteerQueuedTurnId:m0,applyModelState:c0,getAgentContext:Z_,setExtensionStatusPanels:h0,setPendingExtensionPanelActions:l0,setExtensionWorkingState:T0,refreshActiveEditorFromWorkspace:n0,showIntentToast:b0,removeStalledPost:o0,setPosts:U_,preserveTimelineScrollTop:H_,openEditor:K_}=j,{turnId:g0,isCurrentChatEvent:J0}=PQ(_,$,G);if(J0)Z($),X($);if(_==="ui_theme"){e4($);return}if(_==="ui_meters"){S7($);return}if(_==="ui_open_tab"){let F0=typeof $?.path==="string"?$.path.trim():"",w0=typeof $?.label==="string"?$.label.trim():void 0;if(F0==="piclaw://settings"){let f0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:f0?{section:f0}:void 0}));return}if(F0&&typeof K_==="function")K_(F0,w0?{label:w0}:void 0);return}let r0=yQ(_);if(r0.kind==="update"){if(!J0)return;if(r0.shouldAdoptTurn&&D5(g0,Y.current))W(g0);T($,r0.fallbackStatus||"streaming");return}if(r0.kind==="close"){if(!J0)return;x((F0)=>WQ(F0,$));return}if(_?.startsWith("agent_")&&!RQ(_))P();if(_==="connected"){if(R($?.app_asset_version))return;if($?.ui_theme){let f0=$.ui_theme.theme||"default",N_=$.ui_theme.tint||null;e4({theme:f0,tint:N_})}if($?.ui_meters)S7($.ui_meters);let F0=B.current+1;if(B.current=F0,V.current=!0,K.current="",Q.current="",v(null),c({text:"",totalLines:0}),h(""),r({text:"",totalLines:0}),T0({message:null,indicator:null,visible:!0}),b(null),L.current=null,s(),W6(G)){if(B.current===F0)V.current=!1;return}let w0=G;if(a(w0).then((f0)=>{if(q.current!==w0)return;if(!f0||f0.status!=="active"||!f0.data)return;let N_=f0.data,A_=U8(N_);if(A_)W(A_);v(N_),q0({clearSilence:!0,atMs:m$(N_)??Date.now()}),Z0(N_);let Q_=F5(f0.thought);if(Q_)Q.current=Q_.text,r(Q_);let X_=F5(f0.draft);if(X_)K.current=X_.text,c(X_)}).catch((f0)=>{console.warn("Failed to fetch agent status:",f0)}).finally(()=>{if(B.current===F0)V.current=!1}),n1(A.current))H0();N0();return}if(_==="agent_status"){if(!J0){if($?.type==="done"||$?.type==="error")L0(),D0();return}if($.type==="done"||$.type==="error"){if(T4(g0,Y.current))return;if($.type==="done"){if(Q0(g0||Y.current),n1(A.current))H0();let F0=W$($.context_usage);if(F0&&F0.percent!=null)k0((w0)=>N5(w0,F0)?w0:F0),U5(G,F0)}if(i(),M.current=!1,s(),O.current.clear(),L0(),N0(),c({text:"",totalLines:0}),h(""),r({text:"",totalLines:0}),T0({message:null,indicator:null,visible:!0}),b(null),$.type==="error")v({type:"error",title:$.title||"Agent error"}),setTimeout(()=>v(null),8000);else v(null)}else{if(g0)W(g0);if(q0({running:!0,clearSilence:!0,atMs:m$($)??Date.now()}),$.type==="thinking")K.current="",Q.current="",c({text:"",totalLines:0}),h(""),r({text:"",totalLines:0});v($)}return}if(_==="agent_steer_queued"){if(!J0)return;if(T4(g0,Y.current))return;let F0=wQ(g0,Y.current);if(!F0)return;F.current=F0,m0(F0);return}if(_==="agent_followup_queued"){if(!J0)return;C0((F0)=>yV(F0,$)),j0();return}if(_==="agent_followup_consumed"){if(!J0)return;let F0=W5(z.current,$);if(F0)M0(F0.remainingQueueCount),C0((w0)=>o$(w0,F0.rowId).items);if(j0(),n1(A.current))H0();return}if(_==="agent_followup_removed"){if(!J0)return;let F0=W5(z.current,$);if(F0)O.current.add(F0.rowId),M0(F0.remainingQueueCount),C0((w0)=>o$(w0,F0.rowId).items);j0();return}if(_==="agent_draft_delta"){if(!J0)return;if(V.current)return;if(T4(g0,Y.current))return;if(D5(g0,Y.current))W(g0);q0({running:!0,clearSilence:!0}),K.current=XV(K.current,$);let F0=Date.now();if(!E.current||F0-E.current>=100){E.current=F0;let w0=K.current;if(D.current)c((f0)=>jj(w0,f0));else c(H8(w0,null))}return}if(_==="agent_draft"){if(!J0)return;if(V.current)return;if(T4(g0,Y.current))return;if(D5(g0,Y.current))W(g0);q0({running:!0,clearSilence:!0});let F0=$.text||"",w0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")h((f0)=>ZV(f0,F0,w0));else if(!D.current)K.current=F0,c(H8(F0,$.total_lines));return}if(_==="agent_thought_delta"){if(!J0)return;if(V.current)return;if(T4(g0,Y.current))return;if(D5(g0,Y.current))W(g0);q0({running:!0,clearSilence:!0}),Q.current=YV(Q.current,$);let F0=Date.now();if(H.current&&(!U.current||F0-U.current>=100)){U.current=F0;let w0=Q.current;r((f0)=>jj(w0,f0))}return}if(_==="agent_thought"){if(!J0)return;if(V.current)return;if(T4(g0,Y.current))return;if(D5(g0,Y.current))W(g0);q0({running:!0,clearSilence:!0});let F0=$.text||"";if(!H.current)Q.current=F0,r(H8(F0,$.total_lines));return}if(_==="model_changed"){if(!J0)return;c0($);let F0=G;Z_(F0).then((w0)=>{if(q.current!==F0)return;let f0=W$(w0);if(f0&&f0.percent!=null)k0((N_)=>N5(N_,f0)?N_:f0),U5(F0,f0)}).catch(()=>{if(q.current!==F0)return});return}let q_=xQ(_,$,G);if(q_.isStatusPanelWidgetEvent){if(q_.eventChatJid!==G)return;if(!q_.panelKey)return;if(h0((F0)=>W8(F0,$)),RV($))l0((F0)=>O8(F0,q_.panelKey));k8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));n0($?.updates);return}if(fQ(_)){if(_==="extension_ui_title"){L0(),D0(),k8(_,$);return}if(!J0)return;T0((w0)=>{return IQ(w0,_,$)??w0}),k8(_,$);let F0=CQ(_,$);if(F0)b0(F0.title,F0.detail,F0.kind,F0.durationMs);return}let z_=n1(A.current);if(_==="agent_response"){if(!J0)return;T0({message:null,indicator:null,visible:!0}),o0(),J.current={post:$,turnId:Y.current}}if(qV(_,J0,z_))U_((F0)=>LV(F0,$)),y.current?.();if(_==="interaction_updated"){if(!Gj(J0,z_))return;U_((F0)=>KV(F0,$))}if(_==="interaction_deleted"){if(!Gj(J0,z_))return;let F0=$?.ids||[];if(F0.length){if(H_(()=>{U_((w0)=>VV(w0,F0))}),I.current)k.current?.({preserveScroll:!0,preserveMode:"top"})}}}function fA(_){return _?15000:60000}function gQ(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:q,updateUserProfile:L,currentTurnIdRef:K,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:B,thoughtBufferRef:F,previewResyncPendingRef:H,previewResyncGenerationRef:D,steerQueuedTurnIdRef:E,thoughtExpandedRef:U,draftExpandedRef:A,draftThrottleRef:z,thoughtThrottleRef:O,viewStateRef:y,followupQueueItemsRef:I,dismissedQueueRowIdsRef:k,scrollToBottomRef:J,hasMoreRef:M,loadMoreRef:W,lastAgentResponseRef:T,wasAgentActiveRef:x,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:R,setFloatingWidget:v,clearLastActivityFlag:c,handleUiVersionDrift:h,setAgentStatus:r,setAgentDraft:b,setAgentPlan:s,setAgentThought:a,setPendingRequest:q0,clearAgentRunState:Z0,getAgentStatus:H0,noteAgentActivity:N0,showLastActivity:L0,refreshTimeline:D0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:k0,refreshCurrentChatBranches:i,notifyForFinalResponse:j0,setContextUsage:C0,refreshContextUsage:M0,refreshQueueState:m0,setFollowupQueueItems:c0,clearQueuedSteerStateIfStale:Z_,setSteerQueuedTurnId:h0,applyModelState:l0,getAgentContext:T0,setExtensionStatusPanels:n0,setPendingExtensionPanelActions:b0,setExtensionWorkingState:o0,refreshActiveEditorFromWorkspace:U_,showIntentToast:H_,removeStalledPost:K_,setPosts:g0,preserveTimelineScrollTop:J0,openEditor:r0,finalizeStalledResponse:q_,connectionStatus:z_,agentStatus:F0,refreshAgentStatus:w0,refreshAutoresearchStatus:f0}=_,N_=f((Q_,X_)=>{SQ(Q_,X_,{currentChatJid:$,updateAgentProfile:q,updateUserProfile:L,currentTurnIdRef:K,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:B,thoughtBufferRef:F,previewResyncPendingRef:H,previewResyncGenerationRef:D,steerQueuedTurnIdRef:E,thoughtExpandedRef:U,draftExpandedRef:A,draftThrottleRef:z,thoughtThrottleRef:O,viewStateRef:y,followupQueueItemsRef:I,dismissedQueueRowIdsRef:k,scrollToBottomRef:J,hasMoreRef:M,loadMoreRef:W,lastAgentResponseRef:T,wasAgentActiveRef:x,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:R,setFloatingWidget:v,clearLastActivityFlag:c,handleUiVersionDrift:h,setAgentStatus:r,setAgentDraft:b,setAgentPlan:s,setAgentThought:a,setPendingRequest:q0,clearAgentRunState:Z0,getAgentStatus:H0,noteAgentActivity:N0,showLastActivity:L0,refreshTimeline:D0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:k0,refreshCurrentChatBranches:i,notifyForFinalResponse:j0,setContextUsage:C0,refreshContextUsage:M0,refreshQueueState:m0,setFollowupQueueItems:c0,clearQueuedSteerStateIfStale:Z_,setSteerQueuedTurnId:h0,applyModelState:l0,getAgentContext:T0,setExtensionStatusPanels:n0,setPendingExtensionPanelActions:b0,setExtensionWorkingState:o0,refreshActiveEditorFromWorkspace:U_,showIntentToast:H_,removeStalledPost:K_,setPosts:g0,preserveTimelineScrollTop:J0,openEditor:r0})},[Q,R,l0,Z0,c,Z_,$,K,k,B,A,z,I,T0,H0,h,M,T,W,N0,j0,V,J0,D,H,k0,U_,M0,i,Q0,m0,D0,K_,J,P,b,s,r,a,C0,n0,o0,v,c0,b0,q0,g0,h0,H_,L0,E,F,U,O,q,L,y,x,r0]);g(()=>{if(typeof window>"u")return;let Q_=window.__PICLAW_TEST_API||{};return Q_.emit=N_,Q_.reset=()=>{K_(),Z0(),r(null),b({text:"",totalLines:0}),s(""),a({text:"",totalLines:0}),o0({message:null,indicator:null,visible:!0}),q0(null)},Q_.finalize=()=>q_(),window.__PICLAW_TEST_API=Q_,()=>{if(window.__PICLAW_TEST_API===Q_)window.__PICLAW_TEST_API=void 0}},[Z0,q_,N_,K_,b,s,r,a,o0,q0]),TQ({handleSseEvent:N_,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),g(()=>{if(!j||j.length===0)return;let Q_=location.hash;if(!Q_||!Q_.startsWith("#msg-"))return;let X_=Q_.slice(5);G(X_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let A_=F0!==null;g(()=>{if(z_!=="connected")return;let Q_=fA(A_),X_=setInterval(()=>{sV({viewStateRef:y,isAgentActive:A_,refreshTimeline:D0,refreshQueueState:m0,refreshAgentStatus:w0,refreshContextUsage:M0,refreshAutoresearchStatus:f0})},Q_);return()=>clearInterval(X_)},[z_,A_,w0,f0,M0,m0,D0,y]),g(()=>{return F8(()=>{w0(),M0(),m0(),f0()})},[w0,f0,M0,m0])}function PA(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function RA(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function SA(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function gA(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function uQ(_){let $=aV(PA(_)),j=UQ(RA({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=MQ(SA({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return gQ(gA({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}x0();var bQ="piclaw:pane-host-transfer:",uA=300000;function vQ(_){try{return _?.localStorage??null}catch{return null}}function mQ(_){return typeof _==="string"?_.trim():""}function cQ(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function bA(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function vA(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function mA(_,$=globalThis,j=Date.now()){let G=vQ($),Z=mQ(_?.path),X=cQ(_?.payload);if(!G||!Z||!X)return null;let Y=bA(j);try{return G.setItem(`${bQ}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function Fj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=vQ($);if(!G||!Z)return null;let X=`${bQ}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;vA(Z,X);try{let q=JSON.parse(Y),L=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(L+uA<j)return null;let K=mQ(q?.path),Q=cQ(q?.payload);if(!K||!Q)return null;return{path:K,payload:Q,capturedAt:L}}catch{return null}}function M8(_,$=globalThis,j=Date.now()){let G=mA(_,$,j);return G?{pane_transfer:G}:null}function lQ(_=globalThis,$=Date.now()){let j=l4("pane_transfer",_);return Fj(j,_,$)}function w4(_){return typeof _==="string"?_.trim():""}function cA(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function Nj(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(cA($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function lA(_){try{return _?.(),!0}catch($){return!1}}function O5(_,$=typeof window<"u"?window:null){let j=Nj($),G=w4(_?.panePath),Z=w4(_?.paneInstanceId),X=w4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function hQ(_,$=typeof window<"u"?window:null){let j=Nj($),G=w4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function pQ(_,$,j,G){let Z=Nj(_),X=w4($?.panePath),Y=w4($?.paneInstanceId),q=w4($?.paneWindowId);if(!Z||!X||!Y||!q)return null;let L=Z.get(q)||null;if(!L)return null;if(L.panePath!==X||L.paneInstanceId!==Y)return null;if(typeof L.instance?.moveHost!=="function")return null;if(!await L.instance.moveHost(j,G))return null;return Z.delete(q),lA(L.releaseSourceHost),L.instance}C2();function J6(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function nQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(Q)=>{let V=Q?.detail?.path,B=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)G?.(V,B)},q=(Q)=>{let V=Q?.detail?.path,B=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)Z?.(V,B)},L=(Q)=>{let V=Q?.detail?.path,B=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)X?.(V,B)},K=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return K.forEach((Q)=>j.addEventListener(Q,Y)),j.addEventListener("html-viewer:edit-source",q),j.addEventListener("pane:popout",L),()=>{K.forEach((Q)=>j.removeEventListener(Q,Y)),j.removeEventListener("html-viewer:edit-source",q),j.removeEventListener("pane:popout",L)}}function rQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(J6(Z?.target))return;if(!D$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function dQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(q)=>{if(J6(q?.target))return;if(D$(q,"toggleZenMode")){q.preventDefault?.(),G?.();return}if(q?.key==="Escape"&&X())q.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function iQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(J6(Z?.target))return;if(D$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(D$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function oQ(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(J6(G?.target))return;if(!D$(G,"openSettings"))return;G.preventDefault(),p1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function sQ(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(J6(G?.target))return;if(!D$(G,"openHelp"))return;G.preventDefault(),p1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function aQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:q,now:L=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let K=X?.()||null;if(!K)return!1;if(G||L<Number(Z||0)||K.inFlight||L<Number(K.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),q?.(!0),!0}function tQ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function eQ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:q,setIsRenamingBranch:L,renameChatBranch:K,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,navigate:B,baseHref:F,chatOnlyMode:H,showIntentToast:D,closeRenameForm:E,now:U=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let A=U(),z=q?.()||null;if(!z)return!1;if(X.current||A<Number(Y.current||0)||z.inFlight||A<Number(z.cooldownUntil||0))return!1;X.current=!0,z.inFlight=!0,L?.(!0);try{let O=j.agent_name||"",y=l2(G,O);if(!y.canSubmit)return D?.("Could not rename session",y.message||"Enter a valid session handle.","warning",4000),!1;let I=y.normalized||O,k=await K(j.chat_jid,{agentName:I});await Promise.allSettled([Q?.(),V?.()]);let J=k?.branch?.agent_name||I||O;return D?.("Session renamed",`@${J}`,"info",3500),E?.(),!0}catch(O){let y=O instanceof Error?O.message:String(O||"Could not rename session."),I=/already in use/i.test(y||"")?`${y} Switch to or restore that existing session from the session manager.`:y;return D?.("Could not rename session",I||"Could not rename session.","warning",5000),!1}finally{X.current=!1,L?.(!1);let O=U()+HK;Y.current=O;let y=q?.()||null;if(y)y.inFlight=!1,y.cooldownUntil=O}}async function _B(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:q,refreshActiveChatAgents:L,refreshCurrentChatBranches:K,showIntentToast:Q,baseHref:V,chatOnlyMode:B,navigate:F,confirm:H=(J)=>window.confirm(J)}=_;if(!$)return!1;let D=typeof j==="string"&&j.trim()?j.trim():"",E=typeof G==="string"&&G.trim()?G.trim():"",U=D||Z?.chat_jid||E;if(!U)return Q?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let A=(Z?.chat_jid===U?Z:null)||X.find((J)=>J?.chat_jid===U)||Y.find((J)=>J?.chat_jid===U)||null,z=A?.chat_jid===(A?.root_chat_jid||A?.chat_jid),O=Boolean(z&&U==="web:default"),y=Boolean(z&&X.some((J)=>{let M=typeof J?.chat_jid==="string"?J.chat_jid.trim():"",W=typeof J?.root_chat_jid==="string"?J.root_chat_jid.trim():M;return M&&M!==U&&W===U&&!J?.archived_at}));if(O)return Q?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(y)return Q?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let I=`@${A?.agent_name||U}${A?.chat_jid?` — ${A.chat_jid}`:""}`;if(!H(z?`Archive ${I}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${I}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await q(U),await Promise.allSettled([L?.(),K?.()]);let J=z?"web:default":A?.root_chat_jid||"web:default";Q?.(z?"Session archived":"Branch pruned",`${I} has been archived.`,"info",3000);let M=A1(V,J,{chatOnly:B});return F?.(M),!0}catch(J){let M=J instanceof Error?J.message:String(J||"Could not prune branch.");return Q?.("Could not prune branch",M||"Could not prune branch.","warning",5000),!1}}async function $B(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:q=(D)=>window.confirm(D)}=_,L=typeof $==="string"?$.trim():"";if(!L||typeof j!=="function")return!1;let K=G.find((D)=>D?.chat_jid===L)||null;if(!Boolean(K?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let V=Boolean(K?.chat_jid&&K.chat_jid===(K.root_chat_jid||K.chat_jid)),B=`@${K?.agent_name||L}`;if(!q(`Permanently delete ${B}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${V?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(L),await Promise.allSettled([Z?.(),X?.()]),Y?.(V?"Archived session deleted":"Archived branch deleted",`${B} was permanently deleted.`,"info",4000),!0}catch(D){let E=D instanceof Error?D.message:String(D||`Could not permanently delete archived ${V?"session":"branch"}.`);return Y?.("Could not delete branch",E||`Could not permanently delete archived ${V?"session":"branch"}.`,"warning",5000),!1}}async function jB(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:q,chatOnlyMode:L,navigate:K}=_,Q=typeof $==="string"?$.trim():"";if(!Q||typeof j!=="function")return!1;try{let V=G.find((U)=>U?.chat_jid===Q)||null,B=await j(Q);await Promise.allSettled([Z?.(),X?.()]);let F=B?.branch,H=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():Q,D=jq(V?.agent_name,F?.agent_name,H);Y?.("Branch restored",D,"info",4200);let E=A1(q,H,{chatOnly:L});return K?.(E),!0}catch(V){let B=V instanceof Error?V.message:String(V||"Could not restore branch.");return Y?.("Could not restore branch",B||"Could not restore branch.","warning",5000),!1}}async function GB(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let q=await j($);if(Y())return!1;let L=q?.branch,K=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():null;if(!K)throw Error("Branch fork did not return a chat id.");let Q=A1(X,K,{chatOnly:!0});return Z?.(Q,{replace:!0}),!0}catch(q){if(Y())return!1;return G?.({status:"error",message:q4(q)}),!1}}function XB(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let q=typeof j==="string"?j.trim():"";if(!q||q===G)return!1;let L=A1(X,q,{chatOnly:Z});return Y?.(L),!0}function hA(_){return typeof _==="string"?_.trim():""}function pA(_){return new Promise(($)=>setTimeout($,_))}async function ZB(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function YB(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:q,resolveTab:L,buildEditorPopoutTransfer:K}=_,Q=$===X&&Boolean(L?.($));if($===X&&!Q){let D=Z.current;if(await ZB(D,$),typeof D?.preparePopoutTransfer!=="function")return null;return await D.preparePopoutTransfer()}let V=()=>hA(q?.()??j),B=V(),F=G.current;if(B!==$)Y?.($);let H=B===$?G.current:null;if(typeof H?.preparePopoutTransfer!=="function")for(let D=0;D<12;D+=1){if(D>0)await pA(16);else await Promise.resolve();let E=V(),U=G.current,A=E===$,z=U!==F;if(!A||typeof U?.preparePopoutTransfer!=="function")continue;if(B===$||z||D>0){H=U;break}}if(await ZB(H,$),typeof H?.preparePopoutTransfer==="function"){let D=await H.preparePopoutTransfer();if(D)return D}return K?.($)??null}function qB(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,q=Z($);if(q&&!q.dirty){X($);return}if($===j&&G)Y(!1)}function LB(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:q}=_;if(!j||!$||!G)return;if(!Z.current){let L=q("editorWidth",null),K=Y.current||280,Q=Number.isFinite(L)?Number(L):K;Z.current=Z6(Q,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let L=q("dockHeight",null);X.current=Number.isFinite(L)?Number(L):200}G.style.setProperty("--dock-height",`${X.current}px`)}async function KB(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function VB(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:L}=_;if(typeof q==="function")try{let K=H3(L,$,{chatOnly:j});return q(K),!0}catch(K){return Y?.("Could not create branch",q4(K),"warning",5000),!1}try{let Q=(await G($))?.branch,V=typeof Q?.chat_jid==="string"&&Q.chat_jid.trim()?Q.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let B=Q?.agent_name?`@${Q.agent_name}`:V;Y?.("New branch created",`Switched to ${B}.`,"info",2500);let F=A1(L,V,{chatOnly:j});return q?.(F),!0}catch(K){return Y?.("Could not create branch",q4(K),"warning",5000),!1}}async function QB(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:L}=_,K=String($||"").trim();if(!K)return!1;try{let V=(await G(K))?.branch,B=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!B)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let F=V?.agent_name?`@${V.agent_name}`:B;Y?.("Root session created",`Switched to ${F}.`,"info",2500);let H=A1(L,B,{chatOnly:j});return q?.(H),!0}catch(Q){return Y?.("Could not create root session",q4(Q),"warning",5000),!1}}async function BB(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:q,onPaneWindowOpened:L,currentChatJid:K,baseHref:Q}=_;if(!$||j)return!1;let V=typeof G==="string"&&G.trim()?G.trim():"";if(!V)return!1;let B=fG(V);if(!B)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let F=B3(B);if(!F)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;F3(F,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let H=await Y?.(V),D=Boolean(H&&Object.keys(H).length>0),E=CG(Q,V,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:K,params:H});if(N3(F,E),L?.(V,F,H||null),D&&!L)q?.(V);return!0}catch(H){U3(F);let D=H instanceof Error?H.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",D,"warning",5000),!1}}async function FB(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:q,setActiveChatAgents:L,setCurrentChatBranches:K,showIntentToast:Q,baseHref:V}=_;if(!$||j)return!1;let B=IG(G);if(!B)return Q?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(B.mode==="tab"){let H=H3(V,G,{chatOnly:!0});if(!window.open(H,B.target))return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let F=B3(B);if(!F)return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;F3(F,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let D=(await X(G))?.branch,E=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let U=await KB(()=>Y?.());if(U)L?.(Array.isArray(U?.chats)?U.chats:[]);let A=await KB(()=>q?.(Z));if(A)K?.(Array.isArray(A?.chats)?A.chats:[]);let z=A1(V,E,{chatOnly:!0});return N3(F,z),!0}catch(H){return U3(F),Q?.("Could not open branch window",q4(H),"error",5000),!1}}function nA(_){_(($)=>!$)}function rA(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return XB({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function dA(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:q=typeof window<"u"}=_;return aQ({hasWindow:q,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function iA(_){tQ(_)}async function oA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await eQ({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function sA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await _B({hasWindow:$,baseHref:j,...G})}async function aA(_){await $B(_)}async function tA(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await jB({baseHref:j,...G})}function eA(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:q=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:L=GB}=_;if(!$||!Y)return;let K=!1;return L({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:q,isCancelled:()=>K}),()=>{K=!0}}async function _k(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await VB({baseHref:j,...G})}async function $k(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await QB({baseHref:j,...G})}async function jk(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:q,editorInstanceRef:L,dockInstanceRef:K,terminalTabPath:Q,tabPaneOverrides:V,buildPaneDetachTransfer:B,registerDetachedPaneWindow:F,dockVisible:H,resolveTab:D,closeTab:E,setDockVisible:U,hasWindow:A=typeof window<"u",baseHref:z=A?window.location.href:"http://localhost/"}=_,O=B?.(j)||null;return await BB({hasWindow:A,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:z,resolveSourceTransfer:async(y)=>{let I=await YB({panePath:y,activateTab:Y,getActiveTabId:()=>a0.getActiveId(),tabStripActiveId:q,editorInstanceRef:L,dockInstanceRef:K,terminalTabPath:Q,resolveTab:D,buildEditorPopoutTransfer:(W)=>{if(!W||W===Q)return null;let T=L.current,x=typeof T?.getContent==="function"?T.getContent():void 0,P=typeof T?.isDirty==="function"?T.isDirty():!1,R=V instanceof Map?V.get(W)||null:null,v=a0.getViewState(W)||null;return s6({path:W,content:P?x:void 0,paneOverrideId:R,viewState:v})}}),k=y===Q&&!D(y)?K.current:L.current,J=typeof k?.exportHostTransferState==="function"?k.exportHostTransferState():null,M=J?M8({path:y,payload:J}):null;if(O?.paneInstanceId&&O?.paneWindowId&&k&&y!==Q&&J?.kind!=="terminal")O5({panePath:y,paneInstanceId:O.paneInstanceId,paneWindowId:O.paneWindowId,instance:k,releaseSourceHost:()=>{if(y===Q){if(K.current===k)K.current=null;if(L.current===k)L.current=null;return}if(L.current===k)L.current=null}});return{...I||{},...M||{},...O?.params||{}}},onPaneWindowOpened:F?(y,I,k)=>{F(y,G,I,k)}:void 0,closeSourcePaneIfTransferred:F?void 0:(y)=>{qB({panePath:y,terminalTabPath:Q,dockVisible:H,resolveTab:D,closeTab:E,setDockVisible:U})}})}function Gk(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=nQ}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function Zk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await FB({hasWindow:$,baseHref:j,...G})}function Xk(_){let{hasWindow:$=typeof window<"u",...j}=_;LB({hasWindow:$,...j})}function NB(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:L,setRenameBranchNameDraft:K,setIsRenameBranchFormOpen:Q,setIsRenamingBranch:V,renameChatBranch:B,refreshActiveChatAgents:F,refreshCurrentChatBranches:H,showIntentToast:D,currentChatBranches:E,activeChatAgents:U,pruneChatBranch:A,purgeChatBranch:z,restoreChatBranch:O,branchLoaderMode:y,branchLoaderSourceChatJid:I,forkChatBranch:k,createRootChatSession:J,setBranchLoaderState:M,currentRootChatJid:W,isWebAppMode:T,getActiveChatAgents:x,getChatBranches:P,setActiveChatAgents:R,setCurrentChatBranches:v,openEditor:c,activateTab:h,tabStripActiveId:r,editorInstanceRef:b,dockInstanceRef:s,terminalTabPath:a,tabPaneOverrides:q0,buildPaneDetachTransfer:Z0,registerDetachedPaneWindow:H0,dockVisible:N0,resolveTab:L0,closeTab:D0,setDockVisible:Q0,editorOpen:k0,shellElement:i,editorWidthRef:j0,dockHeightRef:C0,sidebarWidthRef:M0,readStoredNumber:m0}=_,c0=f(()=>{nA($)},[$]),Z_=f((J0)=>{rA({nextChatJid:J0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),h0=f(()=>{dA({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:q.current,getFormLock:L,setRenameBranchNameDraft:K,setIsRenameBranchFormOpen:Q})},[X,L,Y,q,Q,K]),l0=f(()=>{iA({setIsRenameBranchFormOpen:Q,setRenameBranchNameDraft:K})},[Q,K]),T0=f(async(J0)=>{await oA({currentBranchRecord:X,nextName:J0,openRenameForm:h0,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:L,setIsRenamingBranch:V,renameChatBranch:B,refreshActiveChatAgents:F,refreshCurrentChatBranches:H,navigate:Z,chatOnlyMode:G,showIntentToast:D,closeRenameForm:l0})},[l0,X,G,L,Z,h0,F,H,Y,q,B,V,D]),n0=f(async(J0=null)=>{await sA({targetChatJid:J0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:E,activeChatAgents:U,pruneChatBranch:A,refreshActiveChatAgents:F,refreshCurrentChatBranches:H,showIntentToast:D,chatOnlyMode:G,navigate:Z})},[U,G,X,E,j,Z,A,F,H,D]),b0=f(async(J0)=>{await aA({targetChatJid:J0,purgeChatBranch:z,currentChatBranches:E,refreshActiveChatAgents:F,refreshCurrentChatBranches:H,showIntentToast:D})},[E,z,F,H,D]),o0=f(async(J0)=>{await tA({targetChatJid:J0,restoreChatBranch:O,currentChatBranches:E,refreshActiveChatAgents:F,refreshCurrentChatBranches:H,showIntentToast:D,chatOnlyMode:G,navigate:Z})},[G,E,Z,F,H,O,D]);g(()=>eA({branchLoaderMode:y,branchLoaderSourceChatJid:I,forkChatBranch:k,setBranchLoaderState:M,navigate:Z}),[y,I,k,Z,M]);let U_=f(async()=>{await _k({currentChatJid:j,chatOnlyMode:G,forkChatBranch:k,refreshActiveChatAgents:F,refreshCurrentChatBranches:H,showIntentToast:D,navigate:Z})},[G,j,k,Z,F,H,D]),H_=f(async(J0)=>{await $k({rootName:J0,chatOnlyMode:G,createRootChatSession:J,refreshActiveChatAgents:F,refreshCurrentChatBranches:H,showIntentToast:D,navigate:Z})},[G,J,Z,F,H,D]),K_=f(async(J0,r0)=>{return await jk({isWebAppMode:T,path:J0,label:r0,showIntentToast:D,currentChatJid:j,activateTab:h,tabStripActiveId:r,editorInstanceRef:b,dockInstanceRef:s,terminalTabPath:a,tabPaneOverrides:q0,buildPaneDetachTransfer:Z0,registerDetachedPaneWindow:H0,dockVisible:N0,resolveTab:L0,closeTab:D0,setDockVisible:Q0})},[h,Z0,D0,j,s,N0,b,T,H0,L0,Q0,D,q0,r,a]);g(()=>Gk({openEditor:c,popOutPane:(J0,r0)=>{K_(J0,r0)}}),[K_,c]);let g0=f(async()=>{await Zk({isWebAppMode:T,currentChatJid:j,currentRootChatJid:W,forkChatBranch:k,getActiveChatAgents:x,getChatBranches:P,setActiveChatAgents:R,setCurrentChatBranches:v,showIntentToast:D})},[j,W,k,x,P,T,R,v,D]);return g(()=>{Xk({editorOpen:k0,shellElement:i,editorWidthRef:j0,dockHeightRef:C0,sidebarWidthRef:M0,readStoredNumber:m0})},[C0,k0,j0,m0,i,M0]),{toggleWorkspace:c0,handleBranchPickerChange:Z_,openRenameCurrentBranchForm:h0,closeRenameCurrentBranchForm:l0,handleRenameCurrentBranch:T0,handlePruneCurrentBranch:n0,handlePurgeArchivedBranch:b0,handleRestoreBranch:o0,handleCreateSessionFromCompose:U_,handleCreateRootSessionFromCompose:H_,handlePopOutPane:K_,handlePopOutChat:g0}}x0();function s$(_){return _.status==="fulfilled"?_.value:null}function T8(_){return Math.max(0,Math.min(100,_))}function UB(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((E)=>E?.data?.is_bot_message).length,Z=$.filter((E)=>!E?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,q=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,L=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,K=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,Q=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,B=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,F=_.modelsPayload?.supports_thinking??_.supportsThinking,H=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),D=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:q},agent:{status:H,phase:D,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:B,supportsThinking:Boolean(F)},context:{tokens:K,contextWindow:Q,percent:L},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:T8(Math.round(L))},{key:"queue",label:"Queue",value:T8(X*18)},{key:"activeChats",label:"Active chats",value:T8(Y*12)},{key:"posts",label:"Timeline load",value:T8($.length*5)}]}}function HB(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function EB(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function DB(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function WB(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function OB(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function zB(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function JB(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:q,getActiveChatAgents:L,getChatBranches:K,getTimeline:Q,rawPosts:V,activeChatAgents:B,currentChatBranches:F,contextUsage:H,followupQueueItems:D,activeModel:E,activeThinkingLevel:U,supportsThinking:A,isAgentTurnActive:z}=_,[O,y,I,k,J,M,W]=await Promise.allSettled([Z(j),X(j),Y(j),q(j),L(),K(G),Q(20,null,j)]);return UB({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:s$(O),contextPayload:s$(y),queuePayload:s$(I),modelsPayload:s$(k),activeChatsPayload:s$(J),branchesPayload:s$(M),timelinePayload:s$(W),rawPosts:V,activeChatAgents:B,currentChatBranches:F,contextUsage:H,followupQueueItems:D,activeModel:E,activeThinkingLevel:U,supportsThinking:A,isAgentTurnActive:z})}function AB(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,steerAgentQueueItem:L}=_,K=W5(j.current,$);if(!K)return;let{rowId:Q}=K;G.current.add(Q),Y((V)=>o$(V,Q).items),L(Q,e9(Z)).then(()=>{X()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let B=Bj("steer");q(B.title,B.detail,"warning"),G.current.delete(Q),X()})}function kB(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,clearQueuedSteerStateIfStale:L,removeAgentQueueItem:K}=_,Q=W5(j.current,$);if(!Q)return;let{rowId:V}=Q;G.current.add(V),L?.(Q.remainingQueueCount),Y((B)=>o$(B,V).items),K(V,e9(Z)).then(()=>{X()}).catch((B)=>{console.warn("[queue] Failed to remove queued item:",B);let F=Bj("remove");q(F.title,F.detail,"warning"),G.current.delete(V),X()})}function MB(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=W1($);if(Z)j.current.delete(Z);G(HQ($,new Date().toISOString()))}function TB(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=EQ(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function wB(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:q,showIntentToast:L,sendAgentMessage:K,buildFloatingWidgetDashboardSnapshot:Q}=_,V=typeof $?.kind==="string"?$.kind:"",B=W1(j);if(!V||!B)return;if(V==="widget.close"){Y();return}if(V==="widget.submit"){let F=Cq($?.payload),H=fq($?.payload),D=new Date().toISOString();if(X((E)=>OQ(E,B,{kind:V,payload:$?.payload||null,submittedAt:D,submissionText:F})),!F){if(L("Widget submission received","The widget submitted data without a message payload yet.","info",3500),H)Y();return}(async()=>{try{let E=await K("default",F,null,[],Z?"queue":null,G);q(E),X((A)=>Qj(A,B,{submittedAt:D,submissionText:F,queued:E?.queued||null}));let U=HB(E?.queued);if(L(U.title,U.detail,U.kind,U.durationMs),H)Y()}catch(E){X((A)=>Qj(A,B,{submittedAt:D,submissionText:F,errorMessage:E?.message||"Could not send the widget message."}));let U=EB(E?.message);L(U.title,U.detail,U.kind,U.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let F=new Date().toISOString(),H=DB($?.payload||null,j?.runtimeState?.refreshCount);if(X((D)=>zQ(D,B,{kind:V,payload:$?.payload||null,eventAt:F,nextRefreshCount:H.nextRefreshCount,shouldBuildDashboard:H.shouldBuildDashboard})),V==="widget.request_refresh")if(H.shouldBuildDashboard)(async()=>{try{let D=await Q($?.payload||null);X((U)=>JQ(U,B,{dashboard:D,at:new Date().toISOString(),count:H.nextRefreshCount,echo:$?.payload||null}));let E=WB();L(E.title,E.detail,E.kind,E.durationMs)}catch(D){X((U)=>AQ(U,B,{errorMessage:D?.message||"Could not build dashboard.",at:new Date().toISOString(),count:H.nextRefreshCount}));let E=OB(D?.message);L(E.title,E.detail,E.kind,E.durationMs)}})();else{let D=zB();L(D.title,D.detail,D.kind,D.durationMs)}}}function Yk(_,$=AB){$(_)}function qk(_,$=kB){$(_)}function Lk(_,$,j=BQ){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function yB(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:L,removeAgentQueueItem:K,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:B,refreshAutoresearchStatus:F}=_,H=f((A)=>{Yk({queuedItem:A,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:L,removeAgentQueueItem:K})},[$,G,j,Z,K,X,Y,L]),D=f((A)=>{qk({queuedItem:A,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:L,removeAgentQueueItem:K})},[q,$,G,j,Z,K,X,Y,L]),E=f(async(A,z)=>{X((O)=>{if(!Array.isArray(O)||A<0||z<0||A>=O.length||z>=O.length||A===z)return O;let y=[...O],[I]=y.splice(A,1);return y.splice(z,0,I),y});try{let{reorderAgentQueueItem:O}=await Promise.resolve().then(() => (u_(),_6));await O(A,z,$)}catch(O){console.warn("Failed to persist queue reorder:",O),Z()}},[$,Z,X]),U=f((A)=>{Lk(A,{refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:B,refreshAutoresearchStatus:F,refreshQueueState:Z})},[Q,F,B,V,Z]);return{handleInjectQueuedFollowup:H,handleRemoveQueuedFollowup:D,handleMoveQueuedFollowup:E,handleMessageResponse:U}}x0();function xB(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function IB(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:q}=_,L=String($||"").trim();if(!L)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let K=new AbortController;Y.current=K,q({question:L,answer:"",thinking:"",error:null,model:null,status:"running"});try{let Q=await G(L,{signal:K.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(V)=>{if(V==="side_prompt_start")q((B)=>B?{...B,status:"running"}:B)},onThinkingDelta:(V)=>{q((B)=>B?{...B,thinking:`${B.thinking||""}${V||""}`}:B)},onTextDelta:(V)=>{q((B)=>B?{...B,answer:`${B.answer||""}${V||""}`}:B)}});if(Y.current!==K)return!0;q((V)=>V?{...V,answer:Q?.result||V.answer||"",thinking:Q?.thinking||V.thinking||"",model:Q?.model||null,status:"success",error:null}:V)}catch(Q){if(K.signal.aborted)return!0;q((V)=>V?{...V,status:"error",error:Q?.payload?.error||Q?.message||"BTW request failed."}:V)}finally{if(Y.current===K)Y.current=null}return!0}async function CB(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function fB(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:q}=_,L=j($);if(!L)return!1;try{let K=await X("default",L,null,[],G?"queue":null,Z);return Y(K),q(K?.queued==="followup"?"BTW queued":"BTW injected",K?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(K){return q("BTW inject failed",K?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function Kk(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function Vk(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function PB(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setExtensionStatusPanels:X,setPendingExtensionPanelActions:Y,refreshAutoresearchStatus:q,stopAutoresearch:L,dismissAutoresearch:K,streamSidePrompt:Q,btwAbortRef:V,btwSession:B,setBtwSession:F,sendAgentMessage:H,handleMessageResponse:D,dismissedLiveWidgetKeysRef:E,setFloatingWidget:U,getAgentStatus:A,getAgentContext:z,getAgentQueueState:O,getAgentModels:y,getActiveChatAgents:I,getChatBranches:k,getTimeline:J,rawPosts:M,activeChatAgents:W,currentChatBranches:T,contextUsage:x,followupQueueItemsRef:P,activeModel:R,activeThinkingLevel:v,supportsThinking:c,isAgentTurnActive:h}=_,r=f(async(Q0,k0)=>{let i=typeof Q0?.key==="string"?Q0.key:"",j0=typeof k0?.key==="string"?k0.key:"",C0=qj(i,j0);if(!i||!j0)return;Y((M0)=>SV(M0,i,j0));try{let M0=await uV({panel:Q0,action:k0,currentChatJid:$,stopAutoresearch:L,dismissAutoresearch:K,writeClipboard:async(m0)=>{if(!await Kk(m0))throw Error("Clipboard access is unavailable.")}});if(M0.refreshAutoresearchStatus)q();if(M0.dismissPanelKey)X((m0)=>W8(m0,{key:M0.dismissPanelKey,content:[],options:{remove:!0,surface:"status-panel"}}));if(M0.toast)Z(M0.toast.title,M0.toast.detail,M0.toast.kind,M0.toast.durationMs)}catch(M0){Z("Panel action failed",M0?.message||"Could not complete that action.","warning")}finally{Y((M0)=>gV(M0,C0))}},[$,K,q,X,Y,Z,L]),b=f(()=>{xB({btwAbortRef:V,setBtwSession:F})},[V,F]),s=f(async(Q0)=>{return await IB({question:Q0,currentChatJid:$,streamSidePrompt:Q,resolveBtwChatJid:Wq,showIntentToast:Z,btwAbortRef:V,setBtwSession:F})},[V,$,F,Z,Q]),a=f(async({content:Q0})=>{return await CB({content:Q0,parseBtwCommand:Dq,closeBtwPanel:b,runBtwPrompt:s,showIntentToast:Z})},[b,s,Z]),q0=f(()=>{if(B?.question)s(B.question)},[B,s]),Z0=f(async()=>{await fB({btwSession:B,buildBtwInjectionText:Jq,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:H,handleMessageResponse:D,showIntentToast:Z})},[B,$,D,G,H,Z]),H0=f(async(Q0=null)=>{return JB({requestPayload:Q0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:A,getAgentContext:z,getAgentQueueState:O,getAgentModels:y,getActiveChatAgents:I,getChatBranches:k,getTimeline:J,rawPosts:M,activeChatAgents:W,currentChatBranches:T,contextUsage:x,followupQueueItems:P.current,activeModel:R,activeThinkingLevel:v,supportsThinking:c,isAgentTurnActive:h})},[W,R,v,x,T,$,j,P,I,z,y,O,A,k,J,h,M,c]),N0=f((Q0)=>{MB({widget:Q0,dismissedLiveWidgetKeysRef:E,setFloatingWidget:U})},[E,U]),L0=f(()=>{TB({dismissedLiveWidgetKeysRef:E,setFloatingWidget:U})},[E,U]),D0=f((Q0,k0)=>{wB({event:Q0,widget:k0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:U,handleCloseFloatingWidget:L0,handleMessageResponse:D,showIntentToast:Z,sendAgentMessage:H,buildFloatingWidgetDashboardSnapshot:H0})},[H0,$,L0,D,G,H,U,Z]);return g(()=>{Vk({dismissedLiveWidgetKeysRef:E,setFloatingWidget:U})},[$,E,U]),{handleExtensionPanelAction:r,closeBtwPanel:b,handleBtwIntercept:a,handleBtwRetry:q0,handleBtwInject:Z0,handleOpenFloatingWidget:N0,handleCloseFloatingWidget:L0,handleFloatingWidgetEvent:D0}}x0();function Qk(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function Bk(_){return!_}function RB(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:q,nextChat:L}=_;g(()=>{if(!Qk({hasDockPanes:$,chatOnlyMode:j}))return;return rQ(G)},[j,$,G]),g(()=>{if(!Bk(j))return;return dQ({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),g(()=>{if(typeof q!=="function"&&typeof L!=="function")return;return iQ({previousChat:q,nextChat:L})},[L,q]),g(()=>sQ(),[]),g(()=>oQ(),[])}function Fk(_){return Boolean(_&&typeof _.closest==="function")}function SB(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function Nk(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function Uk(){return{lastTriggeredAt:0,accumX:0}}function Uj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var Hk=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),Ek=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function gB(_){if(!_||!Fk(_))return!1;let $=_.closest(Hk);if(!$)return!0;return Boolean($.closest(Ek))}function bB(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function Hj(_){let $=bB(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function uB(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function Dk(_){let $=bB(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:uB(_.candidates,G)},next:{chatJid:Z,name:uB(_.candidates,Z)}}}function Wk(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function Ok(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function zk(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let q=$<0,L=q?G.next:G.prev,K=_.querySelector(".chat-swipe-chevron");if(K)K.textContent=q?"›":"‹",K.style.order=q?"2":"0";let Q=_.querySelector(".chat-swipe-name");if(Q)Q.textContent=L?.name??""}function A6(_){_.style.display="none",_.style.opacity="0"}function vB(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,q=$.current;if(!q)return()=>{};let L=X(),K=typeof Y==="function"?Y():!1;if(!L&&!K)return()=>{};let Q=Nk(),V=Uk(),B=null,F={prev:null,next:null},H=!1;function D(){F=Dk({candidates:j,currentChatJid:G})}D();function E(){if(!B)B=Ok(q);return B}function U(J){let M=J==="next"?F.next:F.prev;if(M)Z(M.chatJid)}function A(J){H=String(J.pointerType||"").toLowerCase()==="pen"}function z(J){if(Uj(Q),D(),!L)return;if(J.touches.length!==1)return;if(H)return;if(SB())return;if(!gB(J.target))return;let M=J.touches[0];Q.active=!0,Q.startX=M.clientX,Q.startY=M.clientY,Q.lastX=M.clientX,Q.lastY=M.clientY,Q.startedAt=Date.now()}function O(J){if(!Q.active||Q.cancelled)return;if(SB()){Q.cancelled=!0,A6(E());return}let M=J.touches[0];if(!M)return;Q.lastX=M.clientX,Q.lastY=M.clientY;let W=Q.lastX-Q.startX,T=Q.lastY-Q.startY;if(!Q.horizontalLocked){if(Math.abs(T)>16&&Math.abs(T)>=Math.abs(W)){Q.cancelled=!0,A6(E());return}if(Math.abs(W)>12&&Math.abs(W)>Math.abs(T)*1.15)Q.horizontalLocked=!0}if(Q.horizontalLocked){if(J.cancelable)J.preventDefault();zk(E(),W,q.clientWidth,F)}}function y(){if(!Q.active)return;let J=Q.lastX-Q.startX,M=Q.lastY-Q.startY,W=!Q.cancelled&&Wk({dx:J,dy:M});if(A6(E()),Uj(Q),W)U(J<0?"next":"prev")}function I(){A6(E()),Uj(Q)}function k(J){if(L)return;if(!K)return;if(!gB(J.target))return;let{deltaX:M,deltaY:W}=J;if(!Number.isFinite(M)||Math.abs(M)<72)return;if(Math.abs(M)<=Math.abs(W)*1.35)return;if(J.cancelable)J.preventDefault();let T=Date.now();if(T-V.lastTriggeredAt<450)return;V.lastTriggeredAt=T,U(M>0?"next":"prev")}return q.addEventListener("pointerdown",A,{passive:!0}),q.addEventListener("touchstart",z,{passive:!0}),q.addEventListener("touchmove",O,{passive:!1}),q.addEventListener("touchend",y,{passive:!0}),q.addEventListener("touchcancel",I,{passive:!0}),q.addEventListener("wheel",k,{passive:!1}),()=>{if(q.removeEventListener("pointerdown",A),q.removeEventListener("touchstart",z),q.removeEventListener("touchmove",O),q.removeEventListener("touchend",y),q.removeEventListener("touchcancel",I),q.removeEventListener("wheel",k),B)A6(B),B.remove(),B=null}}function Jk(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function Ak(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function kk(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function Mk(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=Hj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=Hj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function mB(_){let $=yB(Jk(_)),j=PB(Ak({..._,handleMessageResponse:$.handleMessageResponse})),G=NB(kk(_));return RB(Mk({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function Tk(_,$){return Boolean(_||$!==null)}function wk(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function yk(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:q,refs:L,setters:K,services:Q,helpers:V}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:L.activeChatJidRef,queueRefreshGenRef:L.queueRefreshGenRef,dismissedQueueRowIdsRef:L.dismissedQueueRowIdsRef,getAgentQueueState:Q.getAgentQueueState,setFollowupQueueItems:K.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:Q.getAgentContext,setContextUsage:K.setContextUsage,getAutoresearchStatus:Q.getAutoresearchStatus,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,setExtensionWorkingState:K.setExtensionWorkingState,getAgentStatus:Q.getAgentStatus,wasAgentActiveRef:L.wasAgentActiveRef,viewStateRef:L.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:L.agentStatusRef,pendingRequestRef:L.pendingRequestRef,thoughtBufferRef:L.thoughtBufferRef,draftBufferRef:L.draftBufferRef,previewResyncPendingRef:L.previewResyncPendingRef,previewResyncGenerationRef:L.previewResyncGenerationRef,setAgentStatus:K.setAgentStatus,setAgentDraft:K.setAgentDraft,setAgentPlan:K.setAgentPlan,setAgentThought:K.setAgentThought,setPendingRequest:K.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:L.isAgentRunningRef,currentTurnIdRef:L.currentTurnIdRef,silentRecoveryRef:L.silentRecoveryRef,silenceRefreshMs:Q.silenceRefreshMs,lastAgentEventRef:L.lastAgentEventRef,lastSilenceNoticeRef:L.lastSilenceNoticeRef,silenceWarningMs:Q.silenceWarningMs,silenceFinalizeMs:Q.silenceFinalizeMs,isCompactionStatus:Q.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:Q.currentAppAssetVersion,staleUiVersionRef:L.staleUiVersionRef,staleUiReloadScheduledRef:L.staleUiReloadScheduledRef,tabStoreHasUnsaved:Q.tabStoreHasUnsaved,isAgentRunningRef:L.isAgentRunningRef,pendingRequestRef:L.pendingRequestRef,showIntentToast:$},setConnectionStatus:K.setConnectionStatus,hasConnectedOnceRef:L.hasConnectedOnceRef,getAgents:Q.getAgents,setAgents:K.setAgents,setUserProfile:K.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:V.readStoredNumber,sidebarWidthRef:L.sidebarWidthRef,appShellRef:L.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:Q.getAgentModels,getActiveChatAgents:Q.getActiveChatAgents,getChatBranches:Q.getChatBranches,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setAgentModelsPayload:K.setAgentModelsPayload,setHasLoadedAgentModels:K.setHasLoadedAgentModels,agentsRef:L.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:Q.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:L.paneStateOwnerChatJidRef,chatPaneStateByChatRef:L.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:K.setFloatingWidget,dismissedLiveWidgetKeysRef:L.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:L.draftThrottleRef,thoughtThrottleRef:L.thoughtThrottleRef,followupQueueItemsRef:L.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:L.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:K.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:q.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{K.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:Q.agentStatus,thoughtExpandedRef:L.thoughtExpandedRef,draftExpandedRef:L.draftExpandedRef,steerQueuedTurnIdRef:L.steerQueuedTurnIdRef}}function xk(_,$){let{routeState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:q,setters:L,services:K,helpers:Q}=_;return{currentChatJid:j.currentChatJid,followupQueueItemsRef:q.followupQueueItemsRef,dismissedQueueRowIdsRef:q.dismissedQueueRowIdsRef,setFollowupQueueItems:L.setFollowupQueueItems,showIntentToast:$.showIntentToast,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:K.steerAgentQueueItem,removeAgentQueueItem:K.removeAgentQueueItem,refreshQueueState:$.agentStatusLifecycleBundle.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:$.agentStatusLifecycleBundle.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:$.agentStatusLifecycleBundle.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:$.agentStatusLifecycleBundle.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:$.agentStatusLifecycleBundle.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:j.currentRootChatJid,isComposeBoxAgentActive:$.isComposeBoxAgentActive,setExtensionStatusPanels:L.setExtensionStatusPanels,setPendingExtensionPanelActions:L.setPendingExtensionPanelActions,stopAutoresearch:K.stopAutoresearch,dismissAutoresearch:K.dismissAutoresearch,streamSidePrompt:K.streamSidePrompt,btwAbortRef:q.btwAbortRef,btwSession:G.btwSession,setBtwSession:L.setBtwSession,sendAgentMessage:K.sendAgentMessage,dismissedLiveWidgetKeysRef:q.dismissedLiveWidgetKeysRef,setFloatingWidget:L.setFloatingWidget,getAgentStatus:K.getAgentStatus,getAgentContext:K.getAgentContext,getAgentQueueState:K.getAgentQueueState,getAgentModels:K.getAgentModels,getActiveChatAgents:K.getActiveChatAgents,getChatBranches:K.getChatBranches,getTimeline:K.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:K.isAgentTurnActive,chatOnlyMode:j.chatOnlyMode,navigate:j.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:q.renameBranchInFlightRef,renameBranchLockUntilRef:q.renameBranchLockUntilRef,getFormLock:Q.getFormLock,setRenameBranchNameDraft:L.setRenameBranchNameDraft,setIsRenameBranchFormOpen:L.setIsRenameBranchFormOpen,setIsRenamingBranch:L.setIsRenamingBranch,renameChatBranch:K.renameChatBranch,pruneChatBranch:K.pruneChatBranch,purgeChatBranch:K.purgeChatBranch,restoreChatBranch:K.restoreChatBranch,branchLoaderMode:j.branchLoaderMode,branchLoaderSourceChatJid:j.branchLoaderSourceChatJid,forkChatBranch:K.forkChatBranch,createRootChatSession:K.createRootChatSession,setBranchLoaderState:L.setBranchLoaderState,isWebAppMode:j.isWebAppMode,setActiveChatAgents:L.setActiveChatAgents,setCurrentChatBranches:L.setCurrentChatBranches,openEditor:K.openEditor,tabStripActiveId:K.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:K.terminalTabPath,tabPaneOverrides:K.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:K.resolveTab,closeTab:K.closeTab,setDockVisible:Y.setDockVisible,editorOpen:K.editorOpen,shellElement:q.appShellRef.current,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef,sidebarWidthRef:q.sidebarWidthRef,readStoredNumber:Q.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode}}function cB(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:q,setters:L,services:K,helpers:Q}=_,V=X.composeReferenceActions.showIntentToast,B=fV({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:K.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:L.setRemovingPostIds,deletePost:K.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),F=uQ(yk(_,V)),H=Tk(K.isAgentTurnActive,K.agentStatus),D=mB(xk(_,{showIntentToast:V,agentStatusLifecycleBundle:F,isComposeBoxAgentActive:H}));return wk({agentStatusLifecycleBundle:F,actionBundle:D,timelineViewActions:B,isComposeBoxAgentActive:H})}x0();u_();x0();function lB(_){try{return _?.focus?.(),!0}catch($){return!1}}function k6(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function Ej(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function hB(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function pB(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function a$(_=typeof window<"u"?window:null){let $=_?.localStorage,j=k6($,"piclaw.notifications.deviceId");if(j)return j;let G=pB("device");return Ej($,"piclaw.notifications.deviceId",G),k6($,"piclaw.notifications.deviceId")||G}function M6(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=k6($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=pB("client");if(Ej($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=k6($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function nB(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function Dj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():a$($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():M6($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),q=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),K=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:K,hasFocus:q,updatedAtMs:Y}}function rB(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return Ej(j,nB(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function dB(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return hB(j,nB(G,Z)),!0}function Ik(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():a$($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,q=[],L=[];for(let K=0;K<j.length;K+=1){let Q=j.key(K);if(!Q||!Q.startsWith(Y))continue;let V=k6(j,Q);if(!V){L.push(Q);continue}try{let B=JSON.parse(V),F=Number(B?.updatedAtMs);if(!Number.isFinite(F)||Z-F>X){L.push(Q);continue}let H=typeof B?.chatJid==="string"?B.chatJid.trim():"",D=typeof B?.clientId==="string"?B.clientId.trim():"";if(!H||!D){L.push(Q);continue}q.push({deviceId:G,clientId:D,chatJid:H,visibilityState:B?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(B?.hasFocus),updatedAtMs:F})}catch{L.push(Q)}}return L.forEach((K)=>hB(j,K)),q.sort((K,Q)=>K.clientId.localeCompare(Q.clientId))}function iB(_={}){let $=Dj(_),j=$.chatJid;if(!j)return!1;let G=Ik({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,q)=>Y.clientId.localeCompare(q.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}var Ck="Web Push";function fk(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function Pk(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=fk(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function Rk(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function w8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function sB(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function Sk(_){let $=await sB(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await $7(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Rk(Z)})}async function oB(_,$){if(!w8(_))return!1;let j=await Sk(_);return await j7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function gk(_,$){if(!w8(_))return!1;let G=await(await sB(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await G7(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function uk(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function bk(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function aB(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=C(!1),[Z,X]=C("default"),Y=u(!1),q=u(null),L=u(null);g(()=>{let F=Q$("notificationsEnabled",!1);if(Y.current=F,G(F),typeof window<"u")q.current=a$(window),L.current=M6(window);if(typeof Notification>"u")return;let H=Notification.permission;if(X(H),H==="denied"&&F){Y.current=!1,G(!1),V_("notificationsEnabled","false");return}if(H==="granted"&&F&&typeof window<"u"&&w8(window))oB(window,q.current||a$(window)).catch((D)=>{console.warn("Failed to refresh stored web push subscription:",D)})},[]),g(()=>{Y.current=j},[j]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let F=q.current||a$(window),H=L.current||M6(window);q.current=F,L.current=H;let D=(z=!0,O="fetch")=>{let y=Dj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:F,clientId:H});if(z)rB(y,window);else dB({deviceId:F,clientId:H},window);let I={device_id:F,client_id:H,chat_jid:$,visibility_state:y.visibilityState,has_focus:y.hasFocus,active:z};if(!z&&O==="beacon"&&bk(I,window))return;uk(I,{runtimeWindow:window,keepalive:!z||O==="keepalive"})},E=()=>D(!0),U=()=>D(!1,"beacon");D(!0);let A=setInterval(()=>D(!0),15000);return document.addEventListener("visibilitychange",E),window.addEventListener("focus",E),window.addEventListener("blur",E),window.addEventListener("pageshow",E),window.addEventListener("pagehide",U),window.addEventListener("beforeunload",U),()=>{clearInterval(A),document.removeEventListener("visibilitychange",E),window.removeEventListener("focus",E),window.removeEventListener("blur",E),window.removeEventListener("pageshow",E),window.removeEventListener("pagehide",U),window.removeEventListener("beforeunload",U),D(!1,"beacon")}},[$]);let K=f(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let F=Notification.requestPermission();if(F&&typeof F.then==="function")return F;return Promise.resolve(F)}catch(F){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",F),Promise.resolve("default")}},[]),Q=f(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let D=await K();if(X(D||"default"),D!=="granted"){Y.current=!1,G(!1),V_("notificationsEnabled","false");return}}let F=!Y.current;Y.current=F,G(F),V_("notificationsEnabled",String(F));let H=q.current||a$(window);if(q.current=H,w8(window))try{if(F){await oB(window,H);try{await Z7({title:"PiClaw notifications enabled",body:"Web Push is configured for this device.",url:window.location.pathname+window.location.search,deviceId:H,tag:"piclaw:test",sourceLabel:Ck})}catch(D){console.warn("Failed to send a test web push notification:",D)}}else await gk(window,H)}catch(D){if(console.warn("Failed to sync web push notifications:",D),F)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[K]),V=f((F,H,D={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let E=new Notification(Pk(F,D?.sourceLabel||"",window),{body:H});return E.onclick=()=>{lB(window)},!0}catch(E){return console.debug("[use-notifications] Local notification creation failed.",E,{title:typeof F==="string"?F:null}),!1}},[]),B=f((F)=>{if(typeof window>"u"||typeof document>"u")return!1;return iB({chatJid:typeof F==="string"&&F.trim()?F.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:q.current||a$(window),clientId:L.current||M6(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:Q,notify:V,shouldNotifyLocallyForChat:B}}function vk(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function mk(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function ck(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function tB(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=C("disconnected"),[X,Y]=C(()=>I1()),[q,L]=C(null),[K,Q]=C(null),[V,B]=C(!1),[F,H]=C("current"),[D,E]=C([]),[U,A]=C([]),[z,O]=C(null),[y,I]=C({}),[k,J]=C(null),[M,W]=C(null),[T,x]=C(!1),[P,R]=C(null),[v,c]=C(null),[h,r]=C(!1),[b,s]=C([]),[a,q0]=C([]),[Z0,H0]=C(null),[N0,L0]=C(()=>new Map),[D0,Q0]=C(()=>new Set),[k0,i]=C(()=>({message:null,indicator:null,visible:!0})),[j0,C0]=C([]),[M0,m0]=C(!1),[c0,Z_]=C(()=>OK()),[h0,l0]=C(null),[T0,n0]=C(null),b0=u(new Set),o0=X0(()=>vk({activeChatAgents:b,currentChatBranches:a,currentChatJid:$}),[b,a,$]),U_=X0(()=>ck($,o0),[o0,$]),H_=WK(F),[K_,g0]=C(()=>mk(j)),J0=j0.length,r0=u(new Set),q_=u([]),z_=u(new Set),F0=u(0),w0=u({inFlight:!1,lastAttemptAt:0,turnId:null});r0.current=new Set(j0.map((M1)=>M1.row_id)),q_.current=j0;let{notificationsEnabled:f0,notificationPermission:N_,toggleNotifications:A_,notify:Q_,shouldNotifyLocallyForChat:X_}=aB({chatJid:$}),[D_,T_]=C(()=>new Set),[$0,O0]=C(()=>vK({allowLegacyFallback:!0,defaultValue:!1})),[A0,u0]=C({name:"You",avatar_url:null,avatar_background:null}),v0=u(null),e=u(!1),o=u(!1),d=u(!1),Y0=u(null),G0=u($),E0=u(new Map),I0=u($),t0=u(0),z0=u(0),R0=u({}),e0=u({name:null,avatar_url:null}),L_=u({currentHashtag:null,searchQuery:null,searchOpen:!1}),j_=u(null),F_=u(null),k_=u(0),__=u(0),_0=u(0),W0=u(null),s0=u(null),d0=u(null),f_=u(null),W_=u(0),x_=u({title:null,avatarBase:null}),i1=u(null),J_=u(!1),[d_,O1]=C(!1),v_=u(0),[n_,q1]=C(!1),[$_,m_]=C(""),i_=X0(()=>l2($_,o0?.agent_name||""),[o0?.agent_name,$_]),L1=u(null);return{connectionStatus:G,setConnectionStatus:Z,isWebAppMode:X,setIsWebAppMode:Y,currentHashtag:q,setCurrentHashtag:L,searchQuery:K,setSearchQuery:Q,searchOpen:V,setSearchOpen:B,searchScope:F,setSearchScope:H,fileRefs:D,setFileRefs:E,messageRefs:U,setMessageRefs:A,intentToast:z,setIntentToast:O,agents:y,setAgents:I,activeModel:k,setActiveModel:J,activeThinkingLevel:M,setActiveThinkingLevel:W,supportsThinking:T,setSupportsThinking:x,activeModelUsage:P,setActiveModelUsage:R,agentModelsPayload:v,setAgentModelsPayload:c,hasLoadedAgentModels:h,setHasLoadedAgentModels:r,activeChatAgents:b,setActiveChatAgents:s,currentChatBranches:a,setCurrentChatBranches:q0,contextUsage:Z0,setContextUsage:H0,extensionStatusPanels:N0,setExtensionStatusPanels:L0,pendingExtensionPanelActions:D0,setPendingExtensionPanelActions:Q0,extensionWorkingState:k0,setExtensionWorkingState:i,followupQueueItems:j0,setFollowupQueueItems:C0,isAgentTurnActive:M0,setIsAgentTurnActive:m0,btwSession:c0,setBtwSession:Z_,floatingWidget:h0,setFloatingWidget:l0,attachmentPreview:T0,setAttachmentPreview:n0,dismissedLiveWidgetKeysRef:b0,currentBranchRecord:o0,currentRootChatJid:U_,activeSearchScopeLabel:H_,branchLoaderState:K_,setBranchLoaderState:g0,followupQueueCount:J0,followupQueueRowIdsRef:r0,followupQueueItemsRef:q_,dismissedQueueRowIdsRef:z_,queueRefreshGenRef:F0,silentRecoveryRef:w0,notificationsEnabled:f0,notificationPermission:N_,handleToggleNotifications:A_,notify:Q_,shouldNotifyLocallyForChat:X_,removingPostIds:D_,setRemovingPostIds:T_,workspaceOpen:$0,setWorkspaceOpen:O0,userProfile:A0,setUserProfile:u0,staleUiVersionRef:v0,staleUiReloadScheduledRef:e,hasConnectedOnceRef:o,wasAgentActiveRef:d,agentStatusRef:Y0,activeChatJidRef:G0,chatPaneStateByChatRef:E0,paneStateOwnerChatJidRef:I0,draftThrottleRef:t0,thoughtThrottleRef:z0,agentsRef:R0,userProfileRef:e0,viewStateRef:L_,timelineRef:j_,appShellRef:F_,sidebarWidthRef:k_,editorWidthRef:__,dockHeightRef:_0,lastNotifiedIdRef:W0,lastAgentResponseRef:s0,btwAbortRef:d0,lastActivityTimerRef:f_,lastActivityTokenRef:W_,brandingRef:x_,intentToastTimerRef:i1,renameBranchInFlightRef:J_,isRenamingBranch:d_,setIsRenamingBranch:O1,renameBranchLockUntilRef:v_,isRenameBranchFormOpen:n_,setIsRenameBranchFormOpen:q1,renameBranchNameDraft:$_,setRenameBranchNameDraft:m_,renameBranchDraftState:i_,renameBranchNameInputRef:L1}}x0();x0();function lk(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,q]of _.entries()){let L=Y;if(G==="dir"){if(Y===$)L=j,Z=!0;else if(Y.startsWith(`${$}/`))L=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)L=j,Z=!0;X.set(L,q)}return Z?X:_}function eB(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let q=Y;if(G==="dir"){if(Y===$)q=j,Z=!0;else if(Y.startsWith(`${$}/`))q=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)q=j,Z=!0;X.add(q)}return Z?X:_}function _F({onTabClosed:_}={}){let $=u(_);$.current=_;let[j,G]=C(()=>a0.getTabs()),[Z,X]=C(()=>a0.getActiveId()),[Y,q]=C(()=>a0.getTabs().length>0);g(()=>{return a0.onChange((x,P)=>{G(x),X(P),q(x.length>0)})},[]);let[L,K]=C(()=>new Set),[Q,V]=C(()=>new Set),[B,F]=C(()=>new Map),H=f((x)=>{K((P)=>{let R=new Set(P);if(R.has(x))R.delete(x);else R.add(x);return R})},[]),D=f((x)=>{K((P)=>{if(!P.has(x))return P;let R=new Set(P);return R.delete(x),R})},[]),E=f((x)=>{V((P)=>{if(!P.has(x))return P;let R=new Set(P);return R.delete(x),R})},[]),U=f((x)=>{F((P)=>{if(!P.has(x))return P;let R=new Map(P);return R.delete(x),R})},[]),A=f((x,P={})=>{if(!x)return;let R=typeof P?.paneOverrideId==="string"&&P.paneOverrideId.trim()?P.paneOverrideId.trim():null,v={path:x,mode:"edit"};try{if(!(R?Y_.get(R):Y_.resolve(v))){if(!Y_.get("editor")){console.warn(`[openEditor] No pane handler for: ${x}`);return}}}catch(b){console.warn(`[openEditor] paneRegistry.resolve() error for "${x}":`,b)}let c=typeof P?.label==="string"&&P.label.trim()?P.label.trim():void 0,h=P?.viewState&&typeof P.viewState==="object"?P.viewState:null,r=P?.diffMode==="saved"?"saved":null;if(a0.open(x,c),h)a0.saveViewState(x,h);if(R)F((b)=>{if(b.get(x)===R)return b;let s=new Map(b);return s.set(x,R),s});if(r==="saved")V((b)=>{if(b.has(x))return b;let s=new Set(b);return s.add(x),s})},[]),z=f(()=>{let x=a0.getActiveId();if(x){let P=a0.get(x);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}a0.close(x),D(x),E(x),U(x),$.current?.(x)}},[E,U,D]),O=f((x)=>{let P=a0.get(x);if(P?.dirty){if(!window.confirm(`"${P.label}" has unsaved changes. Close anyway?`))return}a0.close(x),D(x),E(x),U(x),$.current?.(x)},[E,U,D]),y=f((x)=>{a0.activate(x)},[]),I=f((x)=>{let P=a0.getTabs().filter((c)=>c.id!==x&&!c.pinned),R=P.filter((c)=>c.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let v=P.map((c)=>c.id);a0.closeOthers(x),v.forEach((c)=>{D(c),E(c),U(c),$.current?.(c)})},[E,U,D]),k=f(()=>{let x=a0.getTabs().filter((v)=>!v.pinned),P=x.filter((v)=>v.dirty).length;if(P>0){if(!window.confirm(`${P} unsaved tab${P>1?"s":""} will be closed. Continue?`))return}let R=x.map((v)=>v.id);a0.closeAll(),R.forEach((v)=>{D(v),E(v),U(v),$.current?.(v)})},[E,U,D]),J=f((x)=>{a0.togglePin(x)},[]),M=f((x)=>{if(!x)return;V((P)=>{let R=new Set(P);if(R.has(x))R.delete(x);else R.add(x);return R}),a0.activate(x)},[]),W=f((x)=>{if(!x)return;F((P)=>{if(P.get(x)==="editor")return P;let R=new Map(P);return R.set(x,"editor"),R}),a0.activate(x)},[]),T=f(()=>{let x=a0.getActiveId();if(x)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:x}}))},[]);return g(()=>{let x=(P)=>{let{oldPath:R,newPath:v,type:c}=P.detail||{};if(!R||!v)return;if(c==="dir"){for(let h of a0.getTabs())if(h.path===R||h.path.startsWith(`${R}/`)){let r=`${v}${h.path.slice(R.length)}`;a0.rename(h.id,r)}}else a0.rename(R,v);K((h)=>eB(h,R,v,c)),V((h)=>eB(h,R,v,c)),F((h)=>lk(h,R,v,c))};return window.addEventListener("workspace-file-renamed",x),()=>window.removeEventListener("workspace-file-renamed",x)},[]),g(()=>{let x=(P)=>{if(a0.hasUnsaved())P.preventDefault(),P.returnValue=""};return window.addEventListener("beforeunload",x),()=>window.removeEventListener("beforeunload",x)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:L,diffTabs:Q,tabPaneOverrides:B,openEditor:A,closeEditor:z,handleTabClose:O,handleTabActivate:y,handleTabCloseOthers:I,handleTabCloseAll:k,handleTabTogglePin:J,handleTabTogglePreview:H,handleTabToggleDiff:M,handleTabEditSource:W,revealInExplorer:T}}x0();function r1(_){return typeof _==="string"&&_.trim()?_.trim():null}function hk(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function y4(_="pane"){let $=hk();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function $F(_){let $=r1(_?.paneInstanceId),j=r1(_?.paneWindowId);if(!$||!j)return{};let G=r1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function jF(_={}){let $=new URLSearchParams(_.search||"");return{panePath:r1($.get("pane_path"))||r1(_.panePath),paneLabel:r1($.get("pane_label"))||r1(_.paneLabel),paneInstanceId:r1($.get("pane_instance_id")),paneWindowId:r1($.get("pane_window_id")),paneSourceWindowId:r1($.get("pane_source_window_id"))}}function x4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function d1(_){return typeof _==="string"&&_.trim()?_.trim():null}function GF(_){let $=d1(_?.panePath),j=d1(_?.paneInstanceId),G=d1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=d1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:d1(_?.label),sourceWindowId:d1(_?.sourceWindowId)}}function Wj(_,$){if(!_||!$)return!1;return d1($.panePath)===_.panePath&&d1($.paneInstanceId)===_.paneInstanceId&&d1($.paneWindowId)===_.ownerWindowId}function Oj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:d1($)||new Date().toISOString(),label:_.label||null}}function y8(_){try{return _?.close?.(),!0}catch($){return!1}}function zj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function pk(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function ZF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var nk=400;function rk(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function dk(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return rk(j).some((Z)=>Z==="."||Z===_)})}async function XF(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function ik(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function C8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function YF(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function x8(_){if(!YF(_))return!1;return C8(_?.runtimeNavigator)}function I8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return C8(_?.runtimeNavigator)}function z5(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function ok(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",q=_?.allowLiveTransfer!==!1,L=_?.instance||null,K=typeof L?.exportHostTransferState==="function"?L.exportHostTransferState():null,Q=$===Y,V=K&&!Q?M8({path:$,payload:K},j,G):null,B=null;if($!==Y){let F=K&&typeof K==="object"?typeof K.mtime==="string"?K.mtime:K.mtime===null?null:void 0:void 0,H=typeof L?.isDirty==="function"?L.isDirty():!1,D=typeof L?.getContent==="function"?L.getContent():void 0;B=s6({path:$,content:H?D:void 0,mtime:F,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...B?.editor_popout?{editorPopoutToken:B.editor_popout}:{},...V?.pane_transfer?{paneTransferToken:V.pane_transfer}:{},...Q&&K?{paneTransferPayload:K}:{},...q?{}:{allowLiveTransfer:!1}}}function sk(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",q=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,L=X?Y3(X,j,G):null,K=q?{panePath:$,path:$,payload:q,capturedAt:G}:Y?Fj(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:L?.path===$?L:null,hostTransfer:K?.path===$?K:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function qF(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:q,previewTabs:L,diffTabs:K,tabPaneOverrides:Q,terminalTabPath:V,vncTabPrefix:B,openEditor:F,closeEditor:H,getWorkspaceFile:D}=_,E=u(null),U=u(null),A=u(null),z=u(null),O=u((()=>{if(!$)return null;let e=l4("editor_popout");return Y3(e)})()),y=u((()=>{if(!$)return null;return lQ()})()),I=u(jF({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),k=u(I.current.paneWindowId||y4("pane-window")),J=u(new Map),M=u(new Map),W=u(new Map),T=u(new Map),x=u(!1),P=u(new Map),R=u(y4("pane-instance")),v=u(new Map),c=u(new Map),h=u(new Set),[r,b]=C(()=>new Map),s=u(r);s.current=r;let[a,q0]=C(()=>new Map),Z0=u(a);Z0.current=a;let[H0,N0]=C(null),L0=u(H0);L0.current=H0;let[D0,Q0]=C(null),k0=u(D0);k0.current=D0;let i=Y_.getDockPanes().length>0,[j0,C0]=C(!1),M0=f(()=>C0((e)=>!e),[]),m0=f(()=>{F(V,{label:"Terminal"})},[F,V]),c0=f(()=>{F(B,{label:"VNC"})},[F,B]),Z_=f((e)=>{let o=typeof e==="string"?e.trim():"";if(!o)return y4("pane-instance");if(o===V&&!a0.get(o)){if(!R.current)R.current=y4("pane-instance");return R.current}let Y0=P.current.get(o);if(Y0)return Y0;let G0=y4("pane-instance");return P.current.set(o,G0),G0},[V]),h0=X0(()=>!$&&q?a.get(q)||null:null,[a,$,q]),l0=!$?D0:null,T0=f((e)=>{if(!e)return;hQ(e),c.current.delete(e),h.current.delete(e),N0((o)=>o?.panePath===e?null:o),b((o)=>{if(!o.has(e))return o;let d=new Map(o);return d.delete(e),d})},[]),n0=f((e)=>{if(!e)return;v.current.delete(e),c.current.delete(e),h.current.delete(e),T0(e),Q0((o)=>o?.panePath===e?null:o),q0((o)=>{if(!o.has(e))return o;let d=new Map(o);return d.delete(e),d})},[T0]),b0=f((e,o={})=>{let d=typeof e==="string"?e.trim():"";if(!d)return!1;if(I8({panePath:d,terminalTabPath:V}))return!1;let Y0=v.current.get(d),G0=Boolean(Z0.current.get(d)),E0=Boolean(k0.current?.panePath===d);if(n0(d),d===V&&E0&&!G0)C0(!0);else if(d===V&&G0)F(d,{label:"Terminal"});else if(a0.get(d))a0.activate(d);else F(d);if(o.closeDetachedWindow!==!1&&Y0&&typeof Y0.close==="function")y8(Y0);return!0},[n0,F,C0,V]),o0=f(()=>{if($)return;if(!ik())return;let e=Date.now();for(let[o,d]of c.current.entries()){if(d>e)continue;c.current.delete(o),b0(o,{closeDetachedWindow:!1})}},[$,b0]),U_=f((e,o={})=>{let d=typeof e==="string"?e.trim():"";if(!d)return!1;let Y0={panePath:d,terminalTabPath:V,allowLiveTransfer:o.allowLiveTransfer,reason:o.reason};if(x8(Y0))return v.current.delete(d),c.current.delete(d),h.current.add(d),!0;if(!YF(Y0))return b0(d,{closeDetachedWindow:!1});return c.current.set(d,Date.now()+nk),o0(),!0},[o0,b0,V]),H_=f((e)=>{let o=typeof e==="string"?e.trim():"";if(!o)return null;let d=Z_(o),Y0=y4("pane-window");return{paneInstanceId:d,paneWindowId:Y0,params:$F({paneInstanceId:d,paneWindowId:Y0,paneSourceWindowId:k.current})}},[Z_]),K_=f((e,o,d,Y0)=>{let G0=typeof e==="string"?e.trim():"";if(!G0||!Y0)return;let E0=GF({panePath:G0,paneInstanceId:Y0.pane_instance_id,ownerWindowId:Y0.pane_window_id,sourceWindowId:Y0.pane_source_window_id,label:o});if(!E0)return;if(v.current.set(G0,d||null),G0===V&&!a0.get(G0)){N0(E0);return}b((t0)=>{let z0=new Map(t0);return z0.set(G0,E0),z0})},[V]),g0=f((e,o)=>{let d=typeof e?.panePath==="string"?e.panePath.trim():"";if(!d)return!1;let Y0=v.current.get(d);if(Y0&&o&&Y0!==o)return!1;let G0=s.current.get(d)||null;if(Wj(G0,e)){let R0=U.current,e0=z5({panePath:d,terminalTabPath:V});if(e0&&R0&&typeof R0.moveHost==="function")O5({panePath:d,paneInstanceId:G0.paneInstanceId,paneWindowId:G0.ownerWindowId,instance:R0,releaseSourceHost:()=>{if(U.current===R0)U.current=null}});if(e0&&U.current)U.current=null;let L_=Oj(G0);if(!L_)return!1;return b((j_)=>{if(!j_.has(d))return j_;let F_=new Map(j_);return F_.delete(d),F_}),q0((j_)=>{let F_=new Map(j_);return F_.set(d,L_),F_}),ZF({panePath:d,terminalTabPath:V,closeTab:(j_)=>a0.close(j_),sourceHost:"tab"}),!0}if(d!==V)return!1;let E0=L0.current,I0=z.current,t0=z5({panePath:d,terminalTabPath:V});if(t0&&E0&&I0&&typeof I0.moveHost==="function")O5({panePath:d,paneInstanceId:E0.paneInstanceId,paneWindowId:E0.ownerWindowId,instance:I0,releaseSourceHost:()=>{if(z.current===I0)z.current=null}});if(t0&&z.current)z.current=null;if(!Wj(E0,e))return!1;let z0=Oj(E0);if(!z0)return!1;return N0(null),Q0(z0),ZF({panePath:d,terminalTabPath:V,setDockVisible:C0,sourceHost:"dock"}),!0},[C0,V]),J0=f((e=!1,o=!0)=>{if(!$)return!1;let d=I.current;if(!x4(d))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(x.current){if(e)y8(window);return!0}let Y0=d.panePath||j,G0=Y0===V?z.current||U.current:U.current,E0=o&&z5({panePath:Y0,terminalTabPath:V}),I0=ok({panePath:Y0,paneInstanceId:d.paneInstanceId,paneOverrideId:Y0===V?null:typeof Q?.get==="function"?Q.get(Y0)||null:null,terminalTabPath:V,viewState:Y0===V?null:a0.getViewState(Y0)||null,allowLiveTransfer:E0,instance:G0});if(!I0)return!1;if(E0&&I0.paneTransferToken&&typeof G0?.moveHost==="function"){if(z.current===G0)z.current=null;if(U.current===G0)U.current=null}if(!zj(window.opener,I0,window.location.origin))return!1;if(x.current=!0,e)y8(window);return!0},[$,j,Q,V]),r0=f(()=>J0(!0,!0),[J0]);g(()=>{if(!$||typeof window>"u")return;let e=()=>{let o=I.current,d=x4(o)?o.panePath||j||"":"";if(x8({panePath:d,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"}))return;J0(!1,!1)};return window.addEventListener("pagehide",e),window.addEventListener("beforeunload",e),()=>{window.removeEventListener("pagehide",e),window.removeEventListener("beforeunload",e)}},[$,J0]);let q_=X0(()=>JK(Y,q),[q,Y]),z_=X0(()=>AK(Q,q),[Q,q]),F0=X0(()=>n9(G,q_,j),[q_,G,j]),w0=X0(()=>q&&K.has(q)?"saved":null,[K,q]),f0=u(w0);g(()=>{f0.current=w0},[w0]);let N_=X0(()=>MK(Y,L,K,q),[K,L,q,Y]),A_=X0(()=>TK(j,B),[j,B]),Q_=X0(()=>wK(j,V,N_,A_),[A_,N_,j,V]),X_=yK($,Z,X,i,j0),[D_,T_]=C(!1),$0=u(!1),O0=f(()=>{if(!X||Z)return;if($0.current=j0,j0)C0(!1);T_(!0)},[Z,j0,X]),A0=f(()=>{if(!D_)return;if(T_(!1),$0.current)C0(!0),$0.current=!1},[D_]),u0=f(()=>{if(D_){A0();return}O0()},[O0,A0,D_]);g(()=>{if(D_&&!X)A0()},[X,A0,D_]),g(()=>{let e=new Set(Y.map((Y0)=>Y0.id)),o=new Set(s.current.keys()),d=new Set(Z0.current.keys());for(let Y0 of Array.from(P.current.keys()))if(!pk({panePath:Y0,openTabIds:e,pendingDetachedTabPaths:o,detachedTabPaths:d,terminalTabPath:V,hasPendingDetachedDockPane:Boolean(L0.current),hasDetachedDockPane:Boolean(k0.current)}))P.current.delete(Y0)},[Y,V]),g(()=>{if($||typeof window>"u")return;let e=(o)=>{if(o.origin!==window.location.origin)return;let d=o.data;if(!d||typeof d!=="object")return;if(d.type==="piclaw-pane-detach-claim"){g0({panePath:d.panePath,paneInstanceId:d.paneInstanceId,paneWindowId:d.paneWindowId},o.source);return}if(d.type!=="piclaw-pane-reattach-request")return;let Y0=sk({payload:d}),G0=Y0?.panePath||"";if(!G0)return;if(Y0?.editorTransfer)J.current.set(G0,Y0.editorTransfer);if(Y0?.hostTransfer)if(M.current.set(G0,Y0.hostTransfer),Y0.allowLiveTransfer&&o.source)W.current.set(G0,o.source);else W.current.delete(G0);let E0=Z0.current.get(G0)||null,I0=G0===V?k0.current:null,t0=z5({panePath:G0,terminalTabPath:V}),z0=E0||I0;if(!z0)return;if(Y0?.paneInstanceId&&Y0.paneInstanceId!==z0.paneInstanceId)return;if(I8({panePath:G0,terminalTabPath:V})){W.current.delete(G0),T.current.delete(G0),M.current.delete(G0),J.current.delete(G0);return}if(Y0?.hostTransfer&&Y0.allowLiveTransfer&&t0)T.current.set(G0,{panePath:G0,paneInstanceId:z0.paneInstanceId,paneWindowId:z0.ownerWindowId});else T.current.delete(G0);if(x8({panePath:G0,terminalTabPath:V,allowLiveTransfer:Y0?.allowLiveTransfer,reason:"message"})){W.current.delete(G0),v.current.delete(G0),c.current.delete(G0),h.current.add(G0);return}U_(G0,{allowLiveTransfer:Y0?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[g0,$,U_,V]),g(()=>{if($||typeof window>"u"||typeof document>"u")return;let e=()=>o0();window.addEventListener("focus",e),window.addEventListener("pageshow",e),document.addEventListener("visibilitychange",e);let o=setInterval(()=>{o0();for(let[d,Y0]of v.current.entries()){if(!Y0||!Y0.closed)continue;if(d===V?Boolean(L0.current):s.current.has(d)){v.current.delete(d),T0(d);continue}if(I8({panePath:d,terminalTabPath:V})){n0(d);continue}if(x8({panePath:d,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"})){v.current.delete(d),c.current.delete(d),h.current.add(d);continue}if(h.current.has(d)){v.current.delete(d);continue}U_(d,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",e),window.removeEventListener("pageshow",e),document.removeEventListener("visibilitychange",e),clearInterval(o)}},[n0,T0,o0,$,U_,V]),g(()=>{if(!$||!j)return;if(a0.getActiveId()===j)return;let o=O.current?.path===j?O.current:null,d=y.current?.path===j?y.current:null;F(j,{...G?{label:G}:{},...o?.paneOverrideId?{paneOverrideId:o.paneOverrideId}:{},...o?.viewState?{viewState:o.viewState}:{},...d?.payload?.diffMode?{diffMode:d.payload.diffMode}:{}})},[F,G,$,j]),g(()=>{if(!$)return;let e=I.current;if(!x4(e))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;zj(window.opener,{type:"piclaw-pane-detach-claim",panePath:e.panePath,paneInstanceId:e.paneInstanceId,paneWindowId:e.paneWindowId},window.location.origin)},[$]),g(()=>{let e=E.current;if(!e)return;if(U.current)U.current.dispose(),U.current=null;let o=q;if(!o)return;if(!$&&h0?.panePath===o){e.innerHTML="";return}let d=O.current?.path===o?O.current:null,Y0=J.current.get(o)||null,G0=d||Y0,E0=y.current?.path===o?y.current:null,I0=M.current.get(o)||null,t0=E0||I0,z0=z_||G0?.paneOverrideId||null,R0=t0?.payload?{...t0.payload}:null;if(f0.current)R0={...R0||{},diffMode:f0.current};else if(R0&&"diffMode"in R0)delete R0.diffMode;let e0={path:o,mode:"edit",...G0?.content!==void 0?{content:G0.content}:{},...G0?.mtime!==void 0?{mtime:G0.mtime}:{},...R0?{transferState:R0}:{}},L_=(z0?Y_.get(z0):null)||Y_.resolve(e0)||Y_.get("editor");if(!L_){e.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let j_=null,F_=!1,k_=(__)=>{j_=__,U.current=__,__.onDirtyChange?.((s0)=>{a0.setDirty(o,s0)}),__.onSaveRequest?.(()=>{}),__.onClose?.(()=>{H()});let _0=a0.getViewState(o);if(_0&&typeof __.restoreViewState==="function")requestAnimationFrame(()=>__.restoreViewState(_0));if(typeof __.onViewStateChange==="function")__.onViewStateChange((s0)=>{a0.saveViewState(o,s0)});let W0=I.current;if($&&x4(W0)&&typeof __?.moveHost==="function"&&z5({panePath:o,terminalTabPath:V}))O5({panePath:o,paneInstanceId:W0.paneInstanceId||"",paneWindowId:W0.paneWindowId||"",instance:__,releaseSourceHost:()=>{if(z.current===__)z.current=null;if(U.current===__)U.current=null}});XF(__,{path:o,hostMode:$?"popout":"main",transferState:R0}).catch((s0)=>{console.warn("[pane-attach] afterAttachToHost failed:",s0)}),requestAnimationFrame(()=>__.focus?.())};return(async()=>{let __=I.current,_0=$&&x4(__)&&__.panePath===o?{panePath:o,paneInstanceId:__.paneInstanceId||"",paneWindowId:__.paneWindowId||""}:null,W0=T.current.get(o)||null,s0=z5({panePath:o,terminalTabPath:V})?_0||W0:null,d0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:W.current.get(o)||null,f_=$?"popout":"main";if(t0&&s0&&d0)try{let W_=await pQ(d0,s0,e,{path:o,hostMode:f_,transferState:R0});if(!F_&&W_){if(k_(W_),d)O.current=null;if(Y0)J.current.delete(o);if(E0)y.current=null;if(I0)M.current.delete(o);W.current.delete(o),T.current.delete(o);return}}catch(W_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",W_)}if(F_)return;if(k_(L_.mount(e,e0)),d)O.current=null;if(Y0)J.current.delete(o);if(E0)y.current=null;if(I0)M.current.delete(o);W.current.delete(o),T.current.delete(o)})(),()=>{if(F_=!0,U.current===j_)j_.dispose(),U.current=null}},[h0,z_,H,$,q]),g(()=>{let e=q,o=U.current;if(!e||typeof o?.setDiffMode!=="function")return;o.setDiffMode(w0)},[w0,q]);let v0=f(async(e)=>{let o=typeof q==="string"?q.trim():"",d=U.current;if(!o||!d?.setContent)return;if(typeof d.isDirty==="function"&&d.isDirty())return;if(!dk(o,e))return;try{let Y0=await D(o,1e6,"edit"),G0=typeof Y0?.text==="string"?Y0.text:"",E0=typeof Y0?.mtime==="string"&&Y0.mtime.trim()?Y0.mtime.trim():new Date().toISOString();d.setContent(G0,E0)}catch(Y0){console.warn("[workspace_update] Failed to refresh active pane:",Y0)}},[D,q]);return g(()=>{let e=A.current;if(z.current)z.current.dispose(),z.current=null;if(!e||!i||!j0)return;if(!$&&l0?.panePath===V){e.innerHTML="";return}let o=Y_.getDockPanes()[0];if(!o){e.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let d=y.current?.path===V?y.current:null,Y0=M.current.get(V)||null,G0=d||Y0,E0=o.mount(e,{mode:"view",...G0?.payload?{transferState:G0.payload}:{}});if(z.current=E0,XF(E0,{path:V,hostMode:$?"popout":"main",transferState:G0?.payload||null}).catch((I0)=>{console.warn("[pane-attach] afterAttachToHost failed:",I0)}),d)y.current=null;if(Y0)M.current.delete(V);return requestAnimationFrame(()=>E0.focus?.()),()=>{if(z.current===E0)E0.dispose(),z.current=null}},[l0,j0,i,$,V]),{editorContainerRef:E,editorInstanceRef:U,dockContainerRef:A,dockInstanceRef:z,hasDockPanes:i,dockVisible:j0,setDockVisible:C0,toggleDock:M0,openTerminalTab:m0,openVncTab:c0,panePopoutTitle:F0,panePopoutHasMenuActions:N_,hidePanePopoutControls:Q_,showEditorPaneContainer:X_,zenMode:D_,exitZenMode:A0,toggleZenMode:u0,refreshActiveEditorFromWorkspace:v0,detachedTabs:a,activeDetachedTab:h0,detachedDockPane:l0,buildPaneDetachTransfer:H_,registerDetachedPaneWindow:K_,reattachPane:b0,requestPanePopoutReattach:r0,canReattachPanePopout:$&&x4(I.current)&&!I8({panePath:j||"",terminalTabPath:V})}}function ak(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function LF(_){let $=u(null),j=_F({onTabClosed:(Z)=>$.current?.(Z)}),G=qF({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return ak({removeFileRefRef:$,editorState:j,paneRuntime:G})}u_();var P8=1280,R8=820;function f8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function T6(_){return typeof _==="string"&&_.trim()?_.trim():null}function tk(_){let $=T6(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function ek(_){if(_.isMobile)return!1;let $=f8(_.windowWidth),j=f8(_.windowHeight);if($===null||j===null)return!1;if($<P8||j<R8)return!1;let G=f8(_.screenWidth),Z=f8(_.screenHeight);if(G!==null&&G<P8)return!1;if(Z!==null&&Z<R8)return!1;return!0}function _M(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function $M(_){if(!_||_.kind!=="custom")return null;let $=T6(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=T6(j.path);if(!tk(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:T6(_.chat_jid),path:G,label:T6(j.label),target:Z}}async function jM(_,$,j){await $5(_,$,j||void 0)}async function KF(_,$){let j=$M(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||jM,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:P8,height:R8};if(j.target==="popout"){if(!ek({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:_M(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${P8}×${R8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let L=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:L,opened:L,reason:L?void 0:"popout_failed",detail:L?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var Jj="piclaw:oobe:provider-missing:dismissed";function GM(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function ZM(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function VF(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=GM(G),Y=X>0,q=ZM(G),L=Y||q;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};if(L)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q}}var XM=EK();await fK();var{searchPosts:YM,deletePost:qM,getAgents:LM,getAgentThought:QF,setAgentThoughtVisibility:BF,getAgentStatus:KM,getAgentContext:VM,getAutoresearchStatus:QM,stopAutoresearch:BM,dismissAutoresearch:FM,getAgentModels:NM,getActiveChatAgents:UM,getChatBranches:HM,renameChatBranch:EM,pruneChatBranch:DM,purgeChatBranch:WM,restoreChatBranch:OM,getAgentQueueState:zM,steerAgentQueueItem:JM,removeAgentQueueItem:AM,streamSidePrompt:kM,getWorkspaceFile:MM,getThread:TM,getTimeline:wM,sendAgentMessage:yM,forkChatBranch:xM,createRootChatSession:IM}=PK;function CM({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:q,branchLoaderSourceChatJid:L}=X0(()=>zK(_),[_]);g(()=>{if(j)V_(p9,j);if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let K=tB({currentChatJid:j,branchLoaderMode:q}),[Q,V]=C(()=>Q$(Jj,!1)),[B,F]=C(null),H=f((T0)=>{let n0=typeof T0==="string"?T0:"";if(!n0.trim())return;F({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:n0})},[]),{agentStatus:D,setAgentStatus:E,agentDraft:U,setAgentDraft:A,agentPlan:z,setAgentPlan:O,agentThought:y,setAgentThought:I,pendingRequest:k,setPendingRequest:J,currentTurnId:M,setCurrentTurnId:W,steerQueuedTurnId:T,setSteerQueuedTurnId:x,lastAgentEventRef:P,lastSilenceNoticeRef:R,isAgentRunningRef:v,draftBufferRef:c,thoughtBufferRef:h,previewResyncPendingRef:r,previewResyncGenerationRef:b,pendingRequestRef:s,stalledPostIdRef:a,currentTurnIdRef:q0,steerQueuedTurnIdRef:Z0,thoughtExpandedRef:H0,draftExpandedRef:N0}=DX(),L0=LF({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:p4,vncTabPrefix:h1,getWorkspaceFile:MM}),D0=CV({timelineRef:K.timelineRef,viewStateRef:K.viewStateRef,followupQueueRowIdsRef:K.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,followupQueueItems:K.followupQueueItems,onIdentity:f((T0)=>{if(!T0)return;let{assistant_name:n0,assistant_avatar_url:b0}=T0;if(n0||b0)K.setAgents((g0)=>{let J0=g0.default||{id:"default"},r0=n0&&!J0.name,q_=b0&&!J0.avatar_url;if(!r0&&!q_)return g0;return{...g0,["default"]:{...J0,...r0?{name:n0}:{},...q_?{avatar_url:b0}:{}}}});let{user_name:o0,user_avatar_url:U_,user_avatar_background:H_}=T0;if(o0||U_||H_)K.setUserProfile((K_)=>{let g0=o0&&!K_.name,J0=U_&&!K_.avatar_url,r0=H_&&!K_.avatar_background;if(!g0&&!J0&&!r0)return K_;return{...K_,...g0?{name:o0}:{},...J0?{avatar_url:U_}:{},...r0?{avatar_background:H_}:{}}})},[K.setAgents,K.setUserProfile])}),Q0=EV({environment:{isRenameBranchFormOpen:K.isRenameBranchFormOpen,renameBranchNameInputRef:K.renameBranchNameInputRef,appShellRef:K.appShellRef,setIsWebAppMode:K.setIsWebAppMode,workspaceOpen:K.workspaceOpen,setWorkspaceOpen:K.setWorkspaceOpen,btwSession:K.btwSession,agents:K.agents,agentsRef:K.agentsRef,currentChatJid:j,activeChatJidRef:K.activeChatJidRef,userProfile:K.userProfile,userProfileRef:K.userProfileRef,brandingRef:K.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:K.setIntentToast,intentToastTimerRef:K.intentToastTimerRef,editorOpen:L0.editorState.editorOpen,openEditor:L0.editorState.openEditor,resolvePane:(T0)=>Y_.resolve(T0),tabStripActiveId:L0.editorState.tabStripActiveId,setFileRefs:K.setFileRefs,setMessageRefs:K.setMessageRefs,currentChatJid:j,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,searchOpen:K.searchOpen,setCurrentHashtag:K.setCurrentHashtag,setSearchQuery:K.setSearchQuery,setSearchOpen:K.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:TM,setPosts:D0.setPosts},agentActivity:{lastActivityTtlMs:IX,lastActivityTimerRef:K.lastActivityTimerRef,lastActivityTokenRef:K.lastActivityTokenRef,lastAgentEventRef:P,lastSilenceNoticeRef:R,isAgentRunningRef:v,setIsAgentTurnActive:K.setIsAgentTurnActive,setAgentStatus:E,draftBufferRef:c,thoughtBufferRef:h,pendingRequestRef:s,lastAgentResponseRef:K.lastAgentResponseRef,currentTurnIdRef:q0,steerQueuedTurnIdRef:Z0,agentStatusRef:K.agentStatusRef,silentRecoveryRef:K.silentRecoveryRef,thoughtExpandedRef:H0,draftExpandedRef:N0,setCurrentTurnId:W,setSteerQueuedTurnId:x,currentTurnIdRefForPanel:q0,setAgentThoughtVisibility:BF,getAgentThought:QF,setAgentThought:I,setAgentDraft:A},chatPaneRuntime:{isAgentTurnActive:K.isAgentTurnActive,steerQueuedTurnId:T,currentTurnId:M,steerQueuedTurnIdRef:Z0,setSteerQueuedTurnId:x,agentStatus:D,agentDraft:U,agentPlan:z,agentThought:y,pendingRequest:k,pendingRequestRef:s,followupQueueItems:K.followupQueueItems,activeModel:K.activeModel,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,activeModelUsage:K.activeModelUsage,contextUsage:K.contextUsage,isAgentRunningRef:v,wasAgentActiveRef:K.wasAgentActiveRef,draftBufferRef:c,thoughtBufferRef:h,lastAgentEventRef:P,lastSilenceNoticeRef:R,lastAgentResponseRef:K.lastAgentResponseRef,currentTurnIdRef:q0,thoughtExpandedRef:H0,draftExpandedRef:N0,agentStatusRef:K.agentStatusRef,silentRecoveryRef:K.silentRecoveryRef,setIsAgentTurnActive:K.setIsAgentTurnActive,setAgentStatus:E,setAgentDraft:A,setAgentPlan:O,setAgentThought:I,setPendingRequest:J,setCurrentTurnId:W,setFollowupQueueItems:K.setFollowupQueueItems,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setContextUsage:K.setContextUsage,lastNotifiedIdRef:K.lastNotifiedIdRef,agentsRef:K.agentsRef,notify:K.notify,shouldNotifyLocallyForChat:K.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:v,lastSilenceNoticeRef:R,lastAgentEventRef:P,currentTurnIdRef:q0,thoughtExpandedRef:H0,draftExpandedRef:N0,draftBufferRef:c,thoughtBufferRef:h,pendingRequestRef:s,lastAgentResponseRef:K.lastAgentResponseRef,agentStatusRef:K.agentStatusRef,stalledPostIdRef:a,scrollToBottomRef:D0.scrollToBottomRef,setCurrentTurnId:W,setAgentDraft:A,setAgentPlan:O,setAgentThought:I,setPendingRequest:J,setAgentStatus:E,setPosts:D0.setPosts,dedupePosts:j5},viewState:{viewStateRef:K.viewStateRef,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,searchOpen:K.searchOpen},removeFileRefRef:L0.removeFileRefRef}),k0=TX({appShellRef:K.appShellRef,sidebarWidthRef:K.sidebarWidthRef,editorWidthRef:K.editorWidthRef,dockHeightRef:K.dockHeightRef}),{chatRefreshLifecycle:i,timelineViewActions:j0,isComposeBoxAgentActive:C0,followupActions:M0,sidepanelActions:m0,branchPaneActions:c0}=cB({routeState:{currentChatJid:j,currentRootChatJid:K.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:q,branchLoaderSourceChatJid:L,isWebAppMode:K.isWebAppMode},searchState:{currentHashtag:K.currentHashtag,setCurrentHashtag:K.setCurrentHashtag,searchQuery:K.searchQuery,setSearchQuery:K.setSearchQuery,searchOpen:K.searchOpen,setSearchOpen:K.setSearchOpen,searchScope:K.searchScope,setSearchScope:K.setSearchScope},shellState:{activeChatAgents:K.activeChatAgents,currentChatBranches:K.currentChatBranches,currentBranchRecord:K.currentBranchRecord,contextUsage:K.contextUsage,activeModel:K.activeModel,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,activeModelUsage:K.activeModelUsage,connectionStatus:K.connectionStatus,notificationsEnabled:K.notificationsEnabled,notificationPermission:K.notificationPermission,workspaceOpen:K.workspaceOpen,setWorkspaceOpen:K.setWorkspaceOpen,userProfile:K.userProfile,agents:K.agents,removingPostIds:K.removingPostIds,btwSession:K.btwSession},timeline:D0,interaction:Q0,paneRuntime:L0.paneRuntime,refs:{activeChatJidRef:K.activeChatJidRef,queueRefreshGenRef:K.queueRefreshGenRef,dismissedQueueRowIdsRef:K.dismissedQueueRowIdsRef,wasAgentActiveRef:K.wasAgentActiveRef,viewStateRef:K.viewStateRef,agentStatusRef:K.agentStatusRef,pendingRequestRef:s,thoughtBufferRef:h,draftBufferRef:c,previewResyncPendingRef:r,previewResyncGenerationRef:b,isAgentRunningRef:v,currentTurnIdRef:q0,silentRecoveryRef:K.silentRecoveryRef,lastAgentEventRef:P,lastSilenceNoticeRef:R,staleUiVersionRef:K.staleUiVersionRef,staleUiReloadScheduledRef:K.staleUiReloadScheduledRef,hasConnectedOnceRef:K.hasConnectedOnceRef,sidebarWidthRef:K.sidebarWidthRef,appShellRef:K.appShellRef,agentsRef:K.agentsRef,paneStateOwnerChatJidRef:K.paneStateOwnerChatJidRef,chatPaneStateByChatRef:K.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:K.dismissedLiveWidgetKeysRef,draftThrottleRef:K.draftThrottleRef,thoughtThrottleRef:K.thoughtThrottleRef,followupQueueItemsRef:K.followupQueueItemsRef,lastAgentResponseRef:K.lastAgentResponseRef,thoughtExpandedRef:H0,draftExpandedRef:N0,steerQueuedTurnIdRef:Z0,btwAbortRef:K.btwAbortRef,renameBranchInFlightRef:K.renameBranchInFlightRef,renameBranchLockUntilRef:K.renameBranchLockUntilRef,editorWidthRef:K.editorWidthRef,dockHeightRef:K.dockHeightRef},setters:{setFollowupQueueItems:K.setFollowupQueueItems,setContextUsage:K.setContextUsage,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,setExtensionWorkingState:K.setExtensionWorkingState,setAgentStatus:E,setAgentDraft:A,setAgentPlan:O,setAgentThought:I,setPendingRequest:J,setConnectionStatus:K.setConnectionStatus,setAgents:K.setAgents,setUserProfile:K.setUserProfile,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setAgentModelsPayload:K.setAgentModelsPayload,setHasLoadedAgentModels:K.setHasLoadedAgentModels,setHasMore:D0.setHasMore,setFloatingWidget:K.setFloatingWidget,setSteerQueuedTurnId:x,setRemovingPostIds:K.setRemovingPostIds,setBtwSession:K.setBtwSession,setWorkspaceOpen:K.setWorkspaceOpen,setRenameBranchNameDraft:K.setRenameBranchNameDraft,setIsRenameBranchFormOpen:K.setIsRenameBranchFormOpen,setIsRenamingBranch:K.setIsRenamingBranch},services:{searchPosts:YM,deletePost:qM,getAgentQueueState:zM,getAgentContext:VM,getAutoresearchStatus:QM,getAgentStatus:KM,getAgents:LM,getAgentModels:NM,getActiveChatAgents:UM,getChatBranches:HM,getTimeline:wM,stopAutoresearch:BM,dismissAutoresearch:FM,streamSidePrompt:kM,sendAgentMessage:yM,renameChatBranch:EM,pruneChatBranch:DM,purgeChatBranch:WM,restoreChatBranch:OM,forkChatBranch:xM,createRootChatSession:IM,steerAgentQueueItem:JM,removeAgentQueueItem:AM,getAgentThought:QF,setAgentThoughtVisibility:BF,silenceRefreshMs:xX,silenceWarningMs:wX,silenceFinalizeMs:yX,isCompactionStatus:H$,currentAppAssetVersion:XM,tabStoreHasUnsaved:()=>a0.hasUnsaved(),agentStatus:D,isAgentTurnActive:K.isAgentTurnActive,openEditor:L0.editorState.openEditor,activateTab:L0.editorState.handleTabActivate,tabStripActiveId:L0.editorState.tabStripActiveId,terminalTabPath:p4,resolveTab:(T0)=>a0.get(T0),closeTab:L0.editorState.handleTabClose,editorOpen:L0.editorState.editorOpen},helpers:{getFormLock:DK,readStoredNumber:Q4}});g(()=>{return vB({timelineRef:K.timelineRef,activeChatAgents:K.activeChatAgents,currentChatJid:j,onSwitch:(T0)=>c0.handleBranchPickerChange(T0),isIOSDevice:X6,isLikelySafari:C8})},[K.timelineRef,K.activeChatAgents,j,c0.handleBranchPickerChange]);let Z_=X0(()=>VF({panePopoutMode:Z,modelsLoaded:K.hasLoadedAgentModels,modelPayload:K.agentModelsPayload,providerMissingDismissed:Q}),[Z,K.hasLoadedAgentModels,K.agentModelsPayload,Q]),h0=f(()=>{rY()},[]),l0=f(()=>{V(!0),V_(Jj,"true")},[]);return g(()=>{if(!Z||typeof document>"u")return;document.title=kK(Y,L0.paneRuntime.activePaneTab,X)},[L0.paneRuntime.activePaneTab,Y,Z,X]),g(()=>{if(typeof window>"u")return;let T0=(n0)=>{KF(n0,{currentChatJid:j,openEditor:L0.editorState.openEditor,popOutPane:c0.handlePopOutPane,showIntentToast:Q0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",T0),()=>{window.removeEventListener("piclaw-extension-ui:request",T0)}},[c0.handlePopOutPane,j,Q0.composeReferenceActions.showIntentToast,L0.editorState.openEditor]),NK(SK({routeState:{branchLoaderMode:q,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:L0.paneRuntime,splitters:k0,orchestration:{branchPaneActions:c0,timelineViewActions:j0,sidepanelActions:m0,followupActions:M0,chatRefreshLifecycle:i,isComposeBoxAgentActive:C0},interaction:Q0,timeline:D0,surface:{...K,oobePanelState:Z_,composePrefillRequest:B,requestComposePrefill:H,handleOobeSetupProvider:h0,handleOobeShowModelPicker:h0,handleOobeOpenWorkspace:h0,handleDismissProviderMissingOobe:l0},editorState:L0.editorState,agentState:{agentStatus:D,agentDraft:U,agentPlan:z,agentThought:y,pendingRequest:k,currentTurnId:M,steerQueuedTurnId:T,setPendingRequest:J,pendingRequestRef:s,isCompactionStatus:H$},helpers:{formatBranchPickerLabel:h2,isIOSDevice:X6,terminalTabPath:p4}}))}function fM(){let{locationParams:_,navigate:$}=iY();return N`<${CM} locationParams=${_} navigate=${$} />`}var S8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(S8){if(L$(null,S8),S8.replaceChildren(),L$(N`<${fM} />`,S8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=C16FE4B9D705C9D064756E2164756E21
//# sourceMappingURL=app.bundle.js.map
