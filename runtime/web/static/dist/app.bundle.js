var Sq=Object.defineProperty;var wq=(_)=>_;function Rq(_,$){this[_]=wq.bind(null,$)}var uq=(_,$)=>{for(var j in $)Sq(_,j,{get:$[j],enumerable:!0,configurable:!0,set:Rq.bind($,j)})};var j8,N1,f3,vq,B4,M3,b3,g3,m3,Y6,e8,_6,p3,e5={},_8=[],fq=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Z8=Array.isArray;function $4(_,$){for(var j in $)_[j]=$[j];return _}function q6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function Y8(_,$,j){var Z,Y,q,Q={};for(q in $)q=="key"?Z=$[q]:q=="ref"?Y=$[q]:Q[q]=$[q];if(arguments.length>2&&(Q.children=arguments.length>3?j8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(q in _.defaultProps)Q[q]===void 0&&(Q[q]=_.defaultProps[q]);return a5(_,Q,Z,Y,null)}function a5(_,$,j,Z,Y){var q={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Y==null?++f3:Y,__i:-1,__u:0};return Y==null&&N1.vnode!=null&&N1.vnode(q),q}function q8(_){return _.children}function o4(_,$){this.props=_,this.context=$}function s4(_,$){if($==null)return _.__?s4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?s4(_):null}function bq(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Y=[],q=$4({},$);q.__v=$.__v+1,N1.vnode&&N1.vnode(q),Q6(_.__P,q,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?s4($):j,!!(32&$.__u),Y),q.__v=$.__v,q.__.__k[q.__i]=q,n3(Z,q,Y),$.__e=$.__=null,q.__e!=j&&h3(q)}}function h3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),h3(_)}function $6(_){(!_.__d&&(_.__d=!0)&&B4.push(_)&&!$8.__r++||M3!=N1.debounceRendering)&&((M3=N1.debounceRendering)||b3)($8)}function $8(){try{for(var _,$=1;B4.length;)B4.length>$&&B4.sort(g3),_=B4.shift(),$=B4.length,bq(_)}finally{B4.length=$8.__r=0}}function c3(_,$,j,Z,Y,q,Q,K,G,N,X){var V,U,L,H,O,F,W,D=Z&&Z.__k||_8,E=$.length;for(G=gq(j,$,D,G,E),V=0;V<E;V++)(L=j.__k[V])!=null&&(U=L.__i!=-1&&D[L.__i]||e5,L.__i=V,F=Q6(_,L,U,Y,q,Q,K,G,N,X),H=L.__e,L.ref&&U.ref!=L.ref&&(U.ref&&K6(U.ref,null,L),X.push(L.ref,L.__c||H,L)),O==null&&H!=null&&(O=H),(W=!!(4&L.__u))||U.__k===L.__k?G=l3(L,G,_,W):typeof L.type=="function"&&F!==void 0?G=F:H&&(G=H.nextSibling),L.__u&=-7);return j.__e=O,G}function gq(_,$,j,Z,Y){var q,Q,K,G,N,X=j.length,V=X,U=0;for(_.__k=Array(Y),q=0;q<Y;q++)(Q=$[q])!=null&&typeof Q!="boolean"&&typeof Q!="function"?(typeof Q=="string"||typeof Q=="number"||typeof Q=="bigint"||Q.constructor==String?Q=_.__k[q]=a5(null,Q,null,null,null):Z8(Q)?Q=_.__k[q]=a5(q8,{children:Q},null,null,null):Q.constructor===void 0&&Q.__b>0?Q=_.__k[q]=a5(Q.type,Q.props,Q.key,Q.ref?Q.ref:null,Q.__v):_.__k[q]=Q,G=q+U,Q.__=_,Q.__b=_.__b+1,K=null,(N=Q.__i=mq(Q,j,G,V))!=-1&&(V--,(K=j[N])&&(K.__u|=2)),K==null||K.__v==null?(N==-1&&(Y>X?U--:Y<X&&U++),typeof Q.type!="function"&&(Q.__u|=4)):N!=G&&(N==G-1?U--:N==G+1?U++:(N>G?U--:U++,Q.__u|=4))):_.__k[q]=null;if(V)for(q=0;q<X;q++)(K=j[q])!=null&&(2&K.__u)==0&&(K.__e==Z&&(Z=s4(K)),i3(K,K));return Z}function l3(_,$,j,Z){var Y,q;if(typeof _.type=="function"){for(Y=_.__k,q=0;Y&&q<Y.length;q++)Y[q]&&(Y[q].__=_,$=l3(Y[q],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=s4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function mq(_,$,j,Z){var Y,q,Q,K=_.key,G=_.type,N=$[j],X=N!=null&&(2&N.__u)==0;if(N===null&&K==null||X&&K==N.key&&G==N.type)return j;if(Z>(X?1:0)){for(Y=j-1,q=j+1;Y>=0||q<$.length;)if((N=$[Q=Y>=0?Y--:q++])!=null&&(2&N.__u)==0&&K==N.key&&G==N.type)return Q}return-1}function I3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||fq.test($)?j:j+"px"}function s5(_,$,j,Z,Y){var q,Q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||I3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||I3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")q=$!=($=$.replace(m3,"$1")),Q=$.toLowerCase(),$=Q in _||$=="onFocusOut"||$=="onFocusIn"?Q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+q]=j,j?Z?j.u=Z.u:(j.u=Y6,_.addEventListener($,q?_6:e8,q)):_.removeEventListener($,q?_6:e8,q);else{if(Y=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(K){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function x3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=Y6++;else if($.t<j.u)return;return j(N1.event?N1.event($):$)}}}function Q6(_,$,j,Z,Y,q,Q,K,G,N){var X,V,U,L,H,O,F,W,D,E,S,P,b,h,I,M=$.type;if($.constructor!==void 0)return null;128&j.__u&&(G=!!(32&j.__u),q=[K=$.__e=j.__e]),(X=N1.__b)&&X($);_:if(typeof M=="function")try{if(W=$.props,D=M.prototype&&M.prototype.render,E=(X=M.contextType)&&Z[X.__c],S=X?E?E.props.value:X.__:Z,j.__c?F=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new M(W,S):($.__c=V=new o4(W,S),V.constructor=M,V.render=hq),E&&E.sub(V),V.state||(V.state={}),V.__n=Z,U=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&M.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=$4({},V.__s)),$4(V.__s,M.getDerivedStateFromProps(W,V.__s))),L=V.props,H=V.state,V.__v=$,U)D&&M.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&M.getDerivedStateFromProps==null&&W!==L&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(W,S),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(W,V.__s,S)===!1){$.__v!=j.__v&&(V.props=W,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(B){B&&(B.__=$)}),_8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(W,V.__s,S),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(L,H,O)})}if(V.context=S,V.props=W,V.__P=_,V.__e=!1,P=N1.__r,b=0,D)V.state=V.__s,V.__d=!1,P&&P($),X=V.render(V.props,V.state,V.context),_8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,P&&P($),X=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++b<25);V.state=V.__s,V.getChildContext!=null&&(Z=$4($4({},Z),V.getChildContext())),D&&!U&&V.getSnapshotBeforeUpdate!=null&&(O=V.getSnapshotBeforeUpdate(L,H)),h=X!=null&&X.type===q8&&X.key==null?d3(X.props.children):X,K=c3(_,Z8(h)?h:[h],$,j,Z,Y,q,Q,K,G,N),V.base=$.__e,$.__u&=-161,V.__h.length&&Q.push(V),F&&(V.__E=V.__=null)}catch(B){if($.__v=null,G||q!=null)if(B.then){for($.__u|=G?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;q[q.indexOf(K)]=null,$.__e=K}else{for(I=q.length;I--;)q6(q[I]);j6($)}else $.__e=j.__e,$.__k=j.__k,B.then||j6($);N1.__e(B,$,j)}else q==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):K=$.__e=pq(j.__e,$,j,Z,Y,q,Q,G,N);return(X=N1.diffed)&&X($),128&$.__u?void 0:K}function j6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(j6))}function n3(_,$,j){for(var Z=0;Z<j.length;Z++)K6(j[Z],j[++Z],j[++Z]);N1.__c&&N1.__c($,_),_.some(function(Y){try{_=Y.__h,Y.__h=[],_.some(function(q){q.call(Y)})}catch(q){N1.__e(q,Y.__v)}})}function d3(_){return typeof _!="object"||_==null||_.__b>0?_:Z8(_)?_.map(d3):$4({},_)}function pq(_,$,j,Z,Y,q,Q,K,G){var N,X,V,U,L,H,O,F=j.props||e5,W=$.props,D=$.type;if(D=="svg"?Y="http://www.w3.org/2000/svg":D=="math"?Y="http://www.w3.org/1998/Math/MathML":Y||(Y="http://www.w3.org/1999/xhtml"),q!=null){for(N=0;N<q.length;N++)if((L=q[N])&&"setAttribute"in L==!!D&&(D?L.localName==D:L.nodeType==3)){_=L,q[N]=null;break}}if(_==null){if(D==null)return document.createTextNode(W);_=document.createElementNS(Y,D,W.is&&W),K&&(N1.__m&&N1.__m($,q),K=!1),q=null}if(D==null)F===W||K&&_.data==W||(_.data=W);else{if(q=q&&j8.call(_.childNodes),!K&&q!=null)for(F={},N=0;N<_.attributes.length;N++)F[(L=_.attributes[N]).name]=L.value;for(N in F)L=F[N],N=="dangerouslySetInnerHTML"?V=L:N=="children"||(N in W)||N=="value"&&("defaultValue"in W)||N=="checked"&&("defaultChecked"in W)||s5(_,N,null,L,Y);for(N in W)L=W[N],N=="children"?U=L:N=="dangerouslySetInnerHTML"?X=L:N=="value"?H=L:N=="checked"?O=L:K&&typeof L!="function"||F[N]===L||s5(_,N,L,F[N],Y);if(X)K||V&&(X.__html==V.__html||X.__html==_.innerHTML)||(_.innerHTML=X.__html),$.__k=[];else if(V&&(_.innerHTML=""),c3($.type=="template"?_.content:_,Z8(U)?U:[U],$,j,Z,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Y,q,Q,q?q[0]:j.__k&&s4(j,0),K,G),q!=null)for(N=q.length;N--;)q6(q[N]);K||(N="value",D=="progress"&&H==null?_.removeAttribute("value"):H!=null&&(H!==_[N]||D=="progress"&&!H||D=="option"&&H!=F[N])&&s5(_,N,H,F[N],Y),N="checked",O!=null&&O!=_[N]&&s5(_,N,O,F[N],Y))}return _}function K6(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Y){N1.__e(Y,j)}}function i3(_,$,j){var Z,Y;if(N1.unmount&&N1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||K6(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(q){N1.__e(q,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Y=0;Y<Z.length;Y++)Z[Y]&&i3(Z[Y],$,j||typeof _.type!="function");j||q6(_.__e),_.__c=_.__=_.__e=void 0}function hq(_,$,j){return this.constructor(_,j)}function H4(_,$,j){var Z,Y,q,Q;$==document&&($=document.documentElement),N1.__&&N1.__(_,$),Y=(Z=typeof j=="function")?null:j&&j.__k||$.__k,q=[],Q=[],Q6($,_=(!Z&&j||$).__k=Y8(q8,null,[_]),Y||e5,e5,$.namespaceURI,!Z&&j?[j]:Y?null:$.firstChild?j8.call($.childNodes):null,q,!Z&&j?j:Y?Y.__e:$.firstChild,Z,Q),n3(q,_,Q)}function r3(_){function $(j){var Z,Y;return this.getChildContext||(Z=new Set,(Y={})[$.__c]=this,this.getChildContext=function(){return Y},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(q){this.props.value!=q.value&&Z.forEach(function(Q){Q.__e=!0,$6(Q)})},this.sub=function(q){Z.add(q);var Q=q.componentWillUnmount;q.componentWillUnmount=function(){Z&&Z.delete(q),Q&&Q.call(q)}}),j.children}return $.__c="__cC"+p3++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}j8=_8.slice,N1={__e:function(_,$,j,Z){for(var Y,q,Q;$=$.__;)if((Y=$.__c)&&!Y.__)try{if((q=Y.constructor)&&q.getDerivedStateFromError!=null&&(Y.setState(q.getDerivedStateFromError(_)),Q=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(_,Z||{}),Q=Y.__d),Q)return Y.__E=Y}catch(K){_=K}throw _}},f3=0,vq=function(_){return _!=null&&_.constructor===void 0},o4.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=$4({},this.state),typeof _=="function"&&(_=_($4({},j),this.props)),_&&$4(j,_),_!=null&&this.__v&&($&&this._sb.push($),$6(this))},o4.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),$6(this))},o4.prototype.render=q8,B4=[],b3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g3=function(_,$){return _.__v.__b-$.__v.__b},$8.__r=0,m3=/(PointerCapture)$|Capture$/i,Y6=0,e8=x3(!1),_6=x3(!0),p3=0;var z4,G1,t8,T3,a4=0,o3=[],z1=N1,y3=z1.__b,P3=z1.__r,C3=z1.diffed,S3=z1.__c,w3=z1.unmount,R3=z1.__;function t4(_,$){z1.__h&&z1.__h(G1,_,a4||$),a4=0;var j=G1.__H||(G1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function m(_){return a4=1,G6(_2,_)}function G6(_,$,j){var Z=t4(z4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):_2(void 0,$),function(K){var G=Z.__N?Z.__N[0]:Z.__[0],N=Z.t(G,K);G!==N&&(Z.__N=[N,Z.__[1]],Z.__c.setState({}))}],Z.__c=G1,!G1.__f)){var Y=function(K,G,N){if(!Z.__c.__H)return!0;var X=Z.__c.__H.__.filter(function(U){return U.__c});if(X.every(function(U){return!U.__N}))return!q||q.call(this,K,G,N);var V=Z.__c.props!==K;return X.some(function(U){if(U.__N){var L=U.__[0];U.__=U.__N,U.__N=void 0,L!==U.__[0]&&(V=!0)}}),q&&q.call(this,K,G,N)||V};G1.__f=!0;var{shouldComponentUpdate:q,componentWillUpdate:Q}=G1;G1.componentWillUpdate=function(K,G,N){if(this.__e){var X=q;q=void 0,Y(K,G,N),q=X}Q&&Q.call(this,K,G,N)},G1.shouldComponentUpdate=Y}return Z.__N||Z.__}function g(_,$){var j=t4(z4++,3);!z1.__s&&N6(j.__H,$)&&(j.__=_,j.u=$,G1.__H.__h.push(j))}function D5(_,$){var j=t4(z4++,4);!z1.__s&&N6(j.__H,$)&&(j.__=_,j.u=$,G1.__h.push(j))}function y(_){return a4=5,g0(function(){return{current:_}},[])}function s3(_,$,j){a4=6,D5(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function g0(_,$){var j=t4(z4++,7);return N6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function T(_,$){return a4=8,g0(function(){return _},$)}function a3(_){var $=G1.context[_.__c],j=t4(z4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(G1)),$.props.value):_.__}function t3(_,$){z1.useDebugValue&&z1.useDebugValue($?$(_):_)}function e3(_){var $=t4(z4++,10),j=m();return $.__=_,G1.componentDidCatch||(G1.componentDidCatch=function(Z,Y){$.__&&$.__(Z,Y),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function cq(){for(var _;_=o3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(t5),$.__h.some(Z6),$.__h=[]}catch(j){$.__h=[],z1.__e(j,_.__v)}}}z1.__b=function(_){G1=null,y3&&y3(_)},z1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),R3&&R3(_,$)},z1.__r=function(_){P3&&P3(_),z4=0;var $=(G1=_.__c).__H;$&&(t8===G1?($.__h=[],G1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(t5),$.__h.some(Z6),$.__h=[],z4=0)),t8=G1},z1.diffed=function(_){C3&&C3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(o3.push($)!==1&&T3===z1.requestAnimationFrame||((T3=z1.requestAnimationFrame)||lq)(cq)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),t8=G1=null},z1.__c=function(_,$){$.some(function(j){try{j.__h.some(t5),j.__h=j.__h.filter(function(Z){return!Z.__||Z6(Z)})}catch(Z){$.some(function(Y){Y.__h&&(Y.__h=[])}),$=[],z1.__e(Z,j.__v)}}),S3&&S3(_,$)},z1.unmount=function(_){w3&&w3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{t5(Z)}catch(Y){$=Y}}),j.__H=void 0,$&&z1.__e($,j.__v))};var u3=typeof requestAnimationFrame=="function";function lq(_){var $,j=function(){clearTimeout(Z),u3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);u3&&($=requestAnimationFrame(j))}function t5(_){var $=G1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),G1=$}function Z6(_){var $=G1;_.__c=_.__(),G1=$}function N6(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function _2(_,$){return typeof $=="function"?$(_):$}var $2=function(_,$,j,Z){var Y;$[0]=0;for(var q=1;q<$.length;q++){var Q=$[q++],K=$[q]?($[0]|=Q?1:2,j[$[q++]]):$[++q];Q===3?Z[0]=K:Q===4?Z[1]=Object.assign(Z[1]||{},K):Q===5?(Z[1]=Z[1]||{})[$[++q]]=K:Q===6?Z[1][$[++q]]+=K+"":Q?(Y=_.apply(K,$2(_,K,j,["",null])),Z.push(Y),K[0]?$[0]|=2:($[q-2]=0,$[q]=Y)):Z.push(K)}return Z},v3=new Map;function nq(_){var $=v3.get(this);return $||($=new Map,v3.set(this,$)),($=$2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Y,q=1,Q="",K="",G=[0],N=function(U){q===1&&(U||(Q=Q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?G.push(0,U,Q):q===3&&(U||Q)?(G.push(3,U,Q),q=2):q===2&&Q==="..."&&U?G.push(4,U,0):q===2&&Q&&!U?G.push(5,0,!0,Q):q>=5&&((Q||!U&&q===5)&&(G.push(q,0,Q,Y),q=6),U&&(G.push(q,U,0,Y),q=6)),Q=""},X=0;X<j.length;X++){X&&(q===1&&N(),N(X));for(var V=0;V<j[X].length;V++)Z=j[X][V],q===1?Z==="<"?(N(),G=[G],q=3):Q+=Z:q===4?Q==="--"&&Z===">"?(q=1,Q=""):Q=Z+Q[0]:K?Z===K?K="":Q+=Z:Z==='"'||Z==="'"?K=Z:Z===">"?(N(),q=1):q&&(Z==="="?(q=5,Y=Q,Q=""):Z==="/"&&(q<5||j[X][V+1]===">")?(N(),q===3&&(G=G[0]),q=G,(G=G[0]).push(2,0,q),q=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(N(),q=2):Q+=Z),q===3&&Q==="!--"&&(q=4,G=G[0])}return N(),G}(_)),$),arguments,[])).length>1?$:$[0]}var z=nq.bind(Y8);var b1={};uq(b1,{uploadWorkspaceFile:()=>K8,uploadMedia:()=>F6,updateWorkspaceFile:()=>XQ,submitAdaptiveCardAction:()=>J6,streamSidePrompt:()=>KQ,stopAutoresearch:()=>jQ,steerAgentQueueItem:()=>QQ,setWorkspaceVisibility:()=>M5,setAgentThoughtVisibility:()=>A6,sendPeerAgentMessage:()=>eq,sendAgentMessage:()=>e4,searchPosts:()=>V6,restoreChatBranch:()=>tq,respondToAgentRequest:()=>Q8,renameWorkspaceFile:()=>x6,renameChatBranch:()=>sq,removeAgentQueueItem:()=>qQ,pruneChatBranch:()=>aq,moveWorkspaceEntry:()=>T6,getWorkspaceTree:()=>E5,getWorkspaceRawUrl:()=>G8,getWorkspaceFile:()=>k5,getWorkspaceDownloadUrl:()=>N8,getWorkspaceBranch:()=>NQ,getTimeline:()=>u4,getThumbnailUrl:()=>E6,getThread:()=>U6,getPostsByHashtag:()=>X6,getMediaUrl:()=>A_,getMediaText:()=>k6,getMediaInfo:()=>_5,getMediaBlob:()=>GQ,getChatBranches:()=>oq,getAutoresearchStatus:()=>$Q,getAgents:()=>z6,getAgentThought:()=>D6,getAgentStatus:()=>H6,getAgentQueueState:()=>YQ,getAgentModels:()=>A5,getAgentContext:()=>_Q,getActiveChatAgents:()=>W6,forkChatBranch:()=>B6,dismissAutoresearch:()=>ZQ,deleteWorkspaceFile:()=>y6,deletePost:()=>L6,createWorkspaceFile:()=>I6,createReply:()=>rq,createPost:()=>iq,attachWorkspaceFile:()=>M6,addToWhitelist:()=>O6,SSEClient:()=>X8});async function t0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function j2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let q of $)if(q.startsWith("event:"))j=q.slice(6).trim()||"message";else if(q.startsWith("data:"))Z.push(q.slice(5).trim());let Y=Z.join(`
`);if(!Y)return null;try{return{event:j,data:JSON.parse(Y)}}catch{return{event:j,data:Y}}}async function dq(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Y="";while(!0){let{value:Q,done:K}=await j.read();if(K)break;Y+=Z.decode(Q,{stream:!0});let G=Y.split(`

`);Y=G.pop()||"";for(let N of G){let X=j2(N);if(X)$(X.event,X.data)}}Y+=Z.decode();let q=j2(Y);if(q)$(q.event,q.data)}async function u4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return t0(Z)}async function X6(_,$=50,j=0,Z=null){let Y=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return t0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Y}`)}async function V6(_,$=50,j=0,Z=null,Y="current",q=null){let Q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",K=Y?`&scope=${encodeURIComponent(Y)}`:"",G=q?`&root_chat_jid=${encodeURIComponent(q)}`:"";return t0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${Q}${K}${G}`)}async function U6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return t0(`/thread/${_}${j}`)}async function iq(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return t0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function rq(_,$,j=[],Z=null){let Y=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return t0(`/post/reply${Y}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function L6(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Y=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return t0(Y,{method:"DELETE"})}async function e4(_,$,j=null,Z=[],Y=null,q=null){let Q=q?`?chat_jid=${encodeURIComponent(q)}`:"",K={content:$,thread_id:j,media_ids:Z};if(Y==="auto"||Y==="queue"||Y==="steer")K.mode=Y;return t0(`/agent/${_}/message${Q}`,{method:"POST",body:JSON.stringify(K)})}async function W6(){return t0("/agent/active-chats")}async function oq(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return t0(`/agent/branches${Z}`)}async function B6(_,$={}){return t0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function sq(_,$={}){return t0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function aq(_){return t0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function tq(_,$={}){return t0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function eq(_,$,j,Z="auto",Y={}){let q={source_chat_jid:_,content:j,mode:Z,...Y?.sourceAgentName?{source_agent_name:Y.sourceAgentName}:{},...Y?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return t0("/agent/peer-message",{method:"POST",body:JSON.stringify(q)})}async function z6(){return t0("/agent/roster")}async function H6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/status${$}`)}async function _Q(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/context${$}`)}async function $Q(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/autoresearch/status${$}`)}async function jQ(_=null,$={}){return t0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function ZQ(_=null){return t0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function YQ(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/queue-state${$}`)}async function qQ(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function QQ(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function A5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return t0(`/agent/models${$}`)}async function F6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function Q8(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Y.error||`HTTP ${Z.status}`)}return Z.json()}async function J6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function KQ(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let q=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(q.error||`HTTP ${j.status}`)}let Z=null,Y=null;if(await dq(j,(q,Q)=>{if($.onEvent?.(q,Q),q==="side_prompt_thinking_delta")$.onThinkingDelta?.(Q?.delta||"");else if(q==="side_prompt_text_delta")$.onTextDelta?.(Q?.delta||"");else if(q==="side_prompt_done")Z=Q;else if(q==="side_prompt_error")Y=Q}),Y){let q=Error(Y?.error||"Side prompt failed");throw q.payload=Y,q}return Z}async function O6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function D6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return t0(j)}async function A6(_,$,j){return t0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function A_(_){return`/media/${_}`}function E6(_){return`/media/${_}/thumbnail`}async function _5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function k6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function GQ(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function E5(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return t0(Z)}async function NQ(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return t0($)}async function k5(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Y=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return t0(Y)}async function XQ(_,$){return t0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function M6(_){return t0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function K8(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Y=new URLSearchParams;if($)Y.set("path",$);if(j.overwrite)Y.set("overwrite","1");let q=Y.toString(),Q=q?`/workspace/upload?${q}`:"/workspace/upload",K=await fetch(""+Q,{method:"POST",body:Z});if(!K.ok){let G=await K.json().catch(()=>({error:"Upload failed"})),N=Error(G.error||`HTTP ${K.status}`);throw N.status=K.status,N.code=G.code,N}return K.json()}async function I6(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Y=await Z.json().catch(()=>({error:"Create failed"})),q=Error(Y.error||`HTTP ${Z.status}`);throw q.status=Z.status,q.code=Y.code,q}return Z.json()}async function x6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function T6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Y=Error(Z.error||`HTTP ${j.status}`);throw Y.status=j.status,Y.code=Z.code,Y}return j.json()}async function y6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return t0($,{method:"DELETE"})}async function M5(_,$=!1){return t0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function G8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function N8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class X8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Y=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Y),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}class Z2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Y=Z.canHandle(_);if(Y===!1||Y===0)continue;let q=Y===!0?0:typeof Y==="number"?Y:0;if(q>j)j=q,$=Z}catch(Y){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Y)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var d0=new Z2;var V8=null,P6=null;function VQ(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function Y2(){if(P6)return Promise.resolve(P6);if(!V8)V8=import(VQ()).then((_)=>{return P6=_,_}).catch((_)=>{throw V8=null,_});return V8}class q2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await Y2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var C6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new q2(_,$)}};function S6(){Y2().catch(()=>{})}var $5="piclaw://terminal";var UQ={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},LQ={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},U8=null,w6=null;function WQ(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function BQ(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Y,q)=>{let Q=Y instanceof Request?Y.url:Y instanceof URL?Y.href:String(Y);if(!WQ(Q))return $(Y,q);if(Y instanceof Request)return $(new Request(j,Y));return $(j,q)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function zQ(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!U8)U8=BQ(()=>Promise.resolve($.init?.())).catch((j)=>{throw U8=null,j});return await U8,$}async function HQ(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!w6)w6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await w6}async function FQ(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function JQ(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function OQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function j4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function DQ(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function Q2(){let _=OQ(),$=_?LQ:UQ,j=j4("--bg-primary",_?"#000000":"#ffffff"),Z=j4("--text-primary",_?"#e7e9ea":"#0f1419"),Y=j4("--text-secondary",_?"#71767b":"#536471"),q=j4("--accent-color","#1d9bf0"),Q=j4("--danger-color",_?"#ff7b72":"#cf222e"),K=j4("--success-color",_?"#7ee787":"#1a7f37"),G=j4("--bg-hover",_?"#1d1f23":"#e8ebed"),N=j4("--border-color",_?"#2f3336":"#eff3f4"),X=j4("--accent-soft-strong",DQ(q,_?"47":"33"));return{background:j,foreground:Z,cursor:q,cursorAccent:j,selectionBackground:X,selectionForeground:Z,black:G,red:Q,green:K,yellow:$.yellow,blue:q,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:N}}class R6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Y=Number.isFinite($?.width)?$.width:0,q=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Y)}x${Math.round(q)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await zQ();if(await HQ(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:Q2()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=Q2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Y=this.bodyEl.querySelector("canvas");if(Y instanceof HTMLElement)Y.style.backgroundColor=_.background,Y.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Y=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Y}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await FQ();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(JQ($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Y})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Y}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Y=null;try{Y=JSON.parse(String(Z.data))}catch{Y={type:"output",data:String(Z.data)}}if(Y?.type==="output"&&typeof Y.data==="string"){_.write?.(Y.data);return}if(Y?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var u6={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new R6(_,$)}},v6={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new R6(_,$)}};function Z4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Y)=>{try{return Boolean($.matchMedia(Y)?.matches)}catch{return!1}})}function L8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Y=Number(j?.maxTouchPoints||0),q=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),Q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(q||Y>1||Q)}function K2(_,$={}){if(Z4($))return null;if(L8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:AQ(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function f6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function b6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function g6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function m6(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function Y4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Y),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function G2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Y),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function N2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Y=String($||"").trim();if(!Y)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Y),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let q=j?.params&&typeof j.params==="object"?j.params:null;if(q)for(let[Q,K]of Object.entries(q)){let G=String(Q||"").trim();if(!G)continue;if(K===null||K===void 0||K==="")Z.searchParams.delete(G);else Z.searchParams.set(G,String(K))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function AQ(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function EQ(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function X2(_,$={}){if(Z4($))return null;if(L8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:EQ(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function I5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function kQ(_){try{return JSON.parse(_)}catch{return null}}function MQ(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function IQ(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class p6{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=IQ($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||kQ;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=MQ(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var x5=()=>{throw Error("Operation requires compiling with --exportRuntime")},xQ=typeof BigUint64Array<"u",T5=Symbol();var TQ=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function V2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return TQ.decode(Z)}catch{let Y="",q=0;while(j-q>1024)Y+=String.fromCharCode(...Z.subarray(q,q+=1024));return Y+String.fromCharCode(...Z.subarray(q))}}function U2(_){let $={};function j(Y,q){if(!Y)return"<yet unknown>";return V2(Y.buffer,q)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(q,Q,K,G){let N=$.memory||Z.memory;throw Error(`abort: ${j(N,q)} at ${j(N,Q)}:${K}:${G}`)},Z.trace=Z.trace||function(q,Q,...K){let G=$.memory||Z.memory;console.log(`trace: ${j(G,q)}${Q?" ":""}${K.slice(0,Q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function L2(_,$){let j=$.exports,Z=j.memory,Y=j.table,q=j.__new||x5,Q=j.__pin||x5,K=j.__unpin||x5,G=j.__collect||x5,N=j.__rtti_base,X=N?(B)=>B[N>>>2]:x5;_.__new=q,_.__pin=Q,_.__unpin=K,_.__collect=G;function V(B){let k=new Uint32Array(Z.buffer);if((B>>>=0)>=X(k))throw Error(`invalid id: ${B}`);return k[(N+4>>>2)+B]}function U(B){let k=V(B);if(!(k&7))throw Error(`not an array: ${B}, flags=${k}`);return k}function L(B){return 31-Math.clz32(B>>>6&31)}function H(B){if(B==null)return 0;let k=B.length,w=q(k<<1,2),l=new Uint16Array(Z.buffer);for(let f=0,n=w>>>1;f<k;++f)l[n+f]=B.charCodeAt(f);return w}_.__newString=H;function O(B){if(B==null)return 0;let k=new Uint8Array(B),w=q(k.length,1);return new Uint8Array(Z.buffer).set(k,w),w}_.__newArrayBuffer=O;function F(B){if(!B)return null;let k=Z.buffer;if(new Uint32Array(k)[B+-8>>>2]!==2)throw Error(`not a string: ${B}`);return V2(k,B)}_.__getString=F;function W(B,k,w){let l=Z.buffer;if(w)switch(B){case 2:return new Float32Array(l);case 3:return new Float64Array(l)}else switch(B){case 0:return new(k?Int8Array:Uint8Array)(l);case 1:return new(k?Int16Array:Uint16Array)(l);case 2:return new(k?Int32Array:Uint32Array)(l);case 3:return new(k?BigInt64Array:BigUint64Array)(l)}throw Error(`unsupported align: ${B}`)}function D(B,k=0){let w=k,l=U(B),f=L(l),n=typeof w!=="number",d=n?w.length:w,s=q(d<<f,l&4?B:1),e;if(l&4)e=s;else{Q(s);let a=q(l&2?16:12,B);K(s);let q0=new Uint32Array(Z.buffer);if(q0[a+0>>>2]=s,q0[a+4>>>2]=s,q0[a+8>>>2]=d<<f,l&2)q0[a+12>>>2]=d;e=a}if(n){let a=W(f,l&2048,l&4096),q0=s>>>f;if(l&16384)for(let G0=0;G0<d;++G0)a[q0+G0]=w[G0];else a.set(w,q0)}return e}_.__newArray=D;function E(B){let k=new Uint32Array(Z.buffer),w=k[B+-8>>>2],l=U(w),f=L(l),n=l&4?B:k[B+4>>>2],d=l&2?k[B+12>>>2]:k[n+-4>>>2]>>>f;return W(f,l&2048,l&4096).subarray(n>>>=f,n+d)}_.__getArrayView=E;function S(B){let k=E(B),w=k.length,l=Array(w);for(let f=0;f<w;f++)l[f]=k[f];return l}_.__getArray=S;function P(B){let k=Z.buffer,w=new Uint32Array(k)[B+-4>>>2];return k.slice(B,B+w)}_.__getArrayBuffer=P;function b(B){if(!Y)throw Error("Operation requires compiling with --exportTable");let k=new Uint32Array(Z.buffer)[B>>>2];return Y.get(k)}_.__getFunction=b;function h(B,k,w){return new B(I(B,k,w))}function I(B,k,w){let l=Z.buffer,f=new Uint32Array(l);return new B(l,f[w+4>>>2],f[w+8>>>2]>>>k)}function M(B,k,w){_[`__get${k}`]=h.bind(null,B,w),_[`__get${k}View`]=I.bind(null,B,w)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((B)=>{M(B,B.name,31-Math.clz32(B.BYTES_PER_ELEMENT))}),xQ)[BigUint64Array,BigInt64Array].forEach((B)=>{M(B,B.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Y,PQ(j,_)}function W2(_){return typeof Response<"u"&&_ instanceof Response}function yQ(_){return _ instanceof WebAssembly.Module}async function h6(_,$={}){if(W2(_=await _))return W8(_,$);let j=yQ(_)?_:await WebAssembly.compile(_),Z=U2($),Y=await WebAssembly.instantiate(j,$),q=L2(Z,Y);return{module:j,instance:Y,exports:q}}async function W8(_,$={}){if(!WebAssembly.instantiateStreaming)return h6(W2(_=await _)?_.arrayBuffer():_,$);let j=U2($),Z=await WebAssembly.instantiateStreaming(_,$),Y=L2(j,Z.instance);return{...Z,exports:Y}}function PQ(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Y=_[Z],q=Z.split("."),Q=$;while(q.length>1){let N=q.shift();if(!Object.hasOwn(Q,N))Q[N]={};Q=Q[N]}let K=q[0],G=K.indexOf("#");if(G>=0){let N=K.substring(0,G),X=Q[N];if(typeof X>"u"||!X.prototype){let V=function(...U){return V.wrap(V.prototype.constructor(0,...U))};if(V.prototype={valueOf(){return this[T5]}},V.wrap=function(U){return Object.create(V.prototype,{[T5]:{value:U,writable:!1}})},X)Object.getOwnPropertyNames(X).forEach((U)=>Object.defineProperty(V,U,Object.getOwnPropertyDescriptor(X,U)));Q[N]=V}if(K=K.substring(G+1),Q=Q[N].prototype,/^(get|set):/.test(K)){if(!Object.hasOwn(Q,K=K.substring(4))){let V=_[Z.replace("set:","get:")],U=_[Z.replace("get:","set:")];Object.defineProperty(Q,K,{get(){return V(this[T5])},set(L){U(this[T5],L)},enumerable:!0})}}else if(K==="constructor")(Q[K]=function(...V){return j(V.length),Y(...V)}).original=Y;else(Q[K]=function(...V){return j(V.length),Y(this[T5],...V)}).original=Y}else if(/^(get|set):/.test(K)){if(!Object.hasOwn(Q,K=K.substring(4)))Object.defineProperty(Q,K,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Y==="function"&&Y!==j)(Q[K]=(...N)=>{return j(N.length),Y(...N)}).original=Y;else Q[K]=Y}return $}var SQ="/static/js/vendor/remote-display-decoder.wasm",B8=null;function B2(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function z2(){if(B8)return B8;return B8=(async()=>{try{let Z=function(Y,q,Q,K,G,N,X){let V=B2(q),U=j.__pin(j.__newArrayBuffer(V));try{return j[Y](U,Q,K,G,N,X.bitsPerPixel,X.bigEndian?1:0,X.trueColor?1:0,X.redMax,X.greenMax,X.blueMax,X.redShift,X.greenShift,X.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(SQ,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof W8==="function"?await W8(_,{}):await h6(await _.arrayBuffer(),{})).exports;for(let Y of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Y]!=="function")throw Error(`${Y} export is missing.`);return{initFramebuffer(Y,q){j.initFramebuffer(Y,q)},getFramebuffer(){let Y=j.getFramebufferPtr(),q=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Y,q).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Y,q,Q,K,G,N){return Z("processRawRect",Y,q,Q,K,G,N)},processCopyRect(Y,q,Q,K,G,N){return j.processCopyRect(Y,q,Q,K,G,N)},processRreRect(Y,q,Q,K,G,N){return Z("processRreRect",Y,q,Q,K,G,N)},processHextileRect(Y,q,Q,K,G,N){return Z("processHextileRect",Y,q,Q,K,G,N)},processZrleTileData(Y,q,Q,K,G,N){return Z("processZrleTileData",Y,q,Q,K,G,N)},decodeRawRectToRgba(Y,q,Q,K){let G=B2(Y),N=j.__pin(j.__newArrayBuffer(G));try{let X=j.__pin(j.decodeRawRectToRgba(N,q,Q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(X))}finally{j.__unpin(X)}}finally{j.__unpin(N);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),B8}function j5(_,$,j){return Math.max($,Math.min(j,_))}function z8(_,$,j){let Z=new Uint8Array(6),Y=j5(Math.floor(Number($||0)),0,65535),q=j5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=j5(Math.floor(Number(_||0)),0,255),Z[2]=Y>>8&255,Z[3]=Y&255,Z[4]=q>>8&255,Z[5]=q&255,Z}function l6(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function H2(_,$,j,Z,Y){let q=Math.max(1,Math.floor(Number(Z||0))),Q=Math.max(1,Math.floor(Number(Y||0))),K=Math.max(1,Number(j?.width||0)),G=Math.max(1,Number(j?.height||0)),N=(Number(_||0)-Number(j?.left||0))/K,X=(Number($||0)-Number(j?.top||0))/G;return{x:j5(Math.floor(N*q),0,Math.max(0,q-1)),y:j5(Math.floor(X*Q),0,Math.max(0,Q-1))}}function F2(_,$,j,Z=0){let Y=Number(_)<0?8:16,q=j5(Number(Z||0)|Y,0,255);return[z8(q,$,j),z8(Number(Z||0),$,j)]}function J2(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function y5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function O2(_,$,j,Z){let Y=Math.max(1,Math.floor(Number(_||0))),q=Math.max(1,Math.floor(Number($||0))),Q=Math.max(1,Math.floor(Number(j||0))),K=Math.max(1,Math.floor(Number(Z||0))),G=Math.min(Y/Q,q/K);if(!Number.isFinite(G)||G<=0)return 1;return Math.max(0.01,G)}var c6={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)c6[`F${_}`]=65470+(_-1);function n6(_){let $=[_?.key,_?.code];for(let q of $)if(q&&Object.prototype.hasOwnProperty.call(c6,q))return c6[q];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Y=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Y){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var T1=Uint8Array,N_=Uint16Array,_$=Int32Array,H8=new T1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),F8=new T1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s6=new T1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),k2=function(_,$){var j=new N_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Y=new _$(j[30]);for(var Z=1;Z<30;++Z)for(var q=j[Z];q<j[Z+1];++q)Y[q]=q-j[Z]<<5|Z;return{b:j,r:Y}},M2=k2(H8,2),I2=M2.b,a6=M2.r;I2[28]=258,a6[258]=28;var x2=k2(F8,0),wQ=x2.b,D2=x2.r,t6=new N_(32768);for(n0=0;n0<32768;++n0)g_=(n0&43690)>>1|(n0&21845)<<1,g_=(g_&52428)>>2|(g_&13107)<<2,g_=(g_&61680)>>4|(g_&3855)<<4,t6[n0]=((g_&65280)>>8|(g_&255)<<8)>>1;var g_,n0,m_=function(_,$,j){var Z=_.length,Y=0,q=new N_($);for(;Y<Z;++Y)if(_[Y])++q[_[Y]-1];var Q=new N_($);for(Y=1;Y<$;++Y)Q[Y]=Q[Y-1]+q[Y-1]<<1;var K;if(j){K=new N_(1<<$);var G=15-$;for(Y=0;Y<Z;++Y)if(_[Y]){var N=Y<<4|_[Y],X=$-_[Y],V=Q[_[Y]-1]++<<X;for(var U=V|(1<<X)-1;V<=U;++V)K[t6[V]>>G]=N}}else{K=new N_(Z);for(Y=0;Y<Z;++Y)if(_[Y])K[Y]=t6[Q[_[Y]-1]++]>>15-_[Y]}return K},F4=new T1(288);for(n0=0;n0<144;++n0)F4[n0]=8;var n0;for(n0=144;n0<256;++n0)F4[n0]=9;var n0;for(n0=256;n0<280;++n0)F4[n0]=7;var n0;for(n0=280;n0<288;++n0)F4[n0]=8;var n0,w5=new T1(32);for(n0=0;n0<32;++n0)w5[n0]=5;var n0,RQ=m_(F4,9,0),uQ=m_(F4,9,1),vQ=m_(w5,5,0),fQ=m_(w5,5,1),d6=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},w_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},i6=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},$$=function(_){return(_+7)/8|0},S5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new T1(_.subarray($,j))};var bQ=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Q_=function(_,$,j){var Z=Error($||bQ[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,Q_);if(!j)throw Z;return Z},gQ=function(_,$,j,Z){var Y=_.length,q=Z?Z.length:0;if(!Y||$.f&&!$.l)return j||new T1(0);var Q=!j,K=Q||$.i!=2,G=$.i;if(Q)j=new T1(Y*3);var N=function(y0){var Y0=j.length;if(y0>Y0){var D0=new T1(Math.max(Y0*2,y0));D0.set(j),j=D0}},X=$.f||0,V=$.p||0,U=$.b||0,L=$.l,H=$.d,O=$.m,F=$.n,W=Y*8;do{if(!L){X=w_(_,V,1);var D=w_(_,V+1,3);if(V+=3,!D){var E=$$(V)+4,S=_[E-4]|_[E-3]<<8,P=E+S;if(P>Y){if(G)Q_(0);break}if(K)N(U+S);j.set(_.subarray(E,P),U),$.b=U+=S,$.p=V=P*8,$.f=X;continue}else if(D==1)L=uQ,H=fQ,O=9,F=5;else if(D==2){var b=w_(_,V,31)+257,h=w_(_,V+10,15)+4,I=b+w_(_,V+5,31)+1;V+=14;var M=new T1(I),B=new T1(19);for(var k=0;k<h;++k)B[s6[k]]=w_(_,V+k*3,7);V+=h*3;var w=d6(B),l=(1<<w)-1,f=m_(B,w,1);for(var k=0;k<I;){var n=f[w_(_,V,l)];V+=n&15;var E=n>>4;if(E<16)M[k++]=E;else{var d=0,s=0;if(E==16)s=3+w_(_,V,3),V+=2,d=M[k-1];else if(E==17)s=3+w_(_,V,7),V+=3;else if(E==18)s=11+w_(_,V,127),V+=7;while(s--)M[k++]=d}}var e=M.subarray(0,b),a=M.subarray(b);O=d6(e),F=d6(a),L=m_(e,O,1),H=m_(a,F,1)}else Q_(1);if(V>W){if(G)Q_(0);break}}if(K)N(U+131072);var q0=(1<<O)-1,G0=(1<<F)-1,N0=V;for(;;N0=V){var d=L[i6(_,V)&q0],I0=d>>4;if(V+=d&15,V>W){if(G)Q_(0);break}if(!d)Q_(2);if(I0<256)j[U++]=I0;else if(I0==256){N0=V,L=null;break}else{var F0=I0-254;if(I0>264){var k=I0-257,V0=H8[k];F0=w_(_,V,(1<<V0)-1)+I2[k],V+=V0}var P0=H[i6(_,V)&G0],B0=P0>>4;if(!P0)Q_(3);V+=P0&15;var a=wQ[B0];if(B0>3){var V0=F8[B0];a+=i6(_,V)&(1<<V0)-1,V+=V0}if(V>W){if(G)Q_(0);break}if(K)N(U+131072);var M0=U+F0;if(U<a){var w0=q-a,H0=Math.min(a,M0);if(w0+U<0)Q_(3);for(;U<H0;++U)j[U]=Z[w0+U]}for(;U<M0;++U)j[U]=j[U-a]}}if($.l=L,$.p=N0,$.b=U,$.f=X,L)X=1,$.m=O,$.d=H,$.n=F}while(!X);return U!=j.length&&Q?S5(j,0,U):j.subarray(0,U)},q4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},P5=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},r6=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Y=j.length,q=j.slice();if(!Y)return{t:y2,l:0};if(Y==1){var Q=new T1(j[0].s+1);return Q[j[0].s]=1,{t:Q,l:1}}j.sort(function(P,b){return P.f-b.f}),j.push({s:-1,f:25001});var K=j[0],G=j[1],N=0,X=1,V=2;j[0]={s:-1,f:K.f+G.f,l:K,r:G};while(X!=Y-1)K=j[j[N].f<j[V].f?N++:V++],G=j[N!=X&&j[N].f<j[V].f?N++:V++],j[X++]={s:-1,f:K.f+G.f,l:K,r:G};var U=q[0].s;for(var Z=1;Z<Y;++Z)if(q[Z].s>U)U=q[Z].s;var L=new N_(U+1),H=e6(j[X-1],L,0);if(H>$){var Z=0,O=0,F=H-$,W=1<<F;q.sort(function(b,h){return L[h.s]-L[b.s]||b.f-h.f});for(;Z<Y;++Z){var D=q[Z].s;if(L[D]>$)O+=W-(1<<H-L[D]),L[D]=$;else break}O>>=F;while(O>0){var E=q[Z].s;if(L[E]<$)O-=1<<$-L[E]++-1;else++Z}for(;Z>=0&&O;--Z){var S=q[Z].s;if(L[S]==$)--L[S],++O}H=$}return{t:new T1(L),l:H}},e6=function(_,$,j){return _.s==-1?Math.max(e6(_.l,$,j+1),e6(_.r,$,j+1)):$[_.s]=j},A2=function(_){var $=_.length;while($&&!_[--$]);var j=new N_(++$),Z=0,Y=_[0],q=1,Q=function(G){j[Z++]=G};for(var K=1;K<=$;++K)if(_[K]==Y&&K!=$)++q;else{if(!Y&&q>2){for(;q>138;q-=138)Q(32754);if(q>2)Q(q>10?q-11<<5|28690:q-3<<5|12305),q=0}else if(q>3){Q(Y),--q;for(;q>6;q-=6)Q(8304);if(q>2)Q(q-3<<5|8208),q=0}while(q--)Q(Y);q=1,Y=_[K]}return{c:j.subarray(0,Z),n:$}},C5=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},T2=function(_,$,j){var Z=j.length,Y=$$($+2);_[Y]=Z&255,_[Y+1]=Z>>8,_[Y+2]=_[Y]^255,_[Y+3]=_[Y+1]^255;for(var q=0;q<Z;++q)_[Y+q+4]=j[q];return(Y+4+Z)*8},E2=function(_,$,j,Z,Y,q,Q,K,G,N,X){q4($,X++,j),++Y[256];var V=r6(Y,15),U=V.t,L=V.l,H=r6(q,15),O=H.t,F=H.l,W=A2(U),D=W.c,E=W.n,S=A2(O),P=S.c,b=S.n,h=new N_(19);for(var I=0;I<D.length;++I)++h[D[I]&31];for(var I=0;I<P.length;++I)++h[P[I]&31];var M=r6(h,7),B=M.t,k=M.l,w=19;for(;w>4&&!B[s6[w-1]];--w);var l=N+5<<3,f=C5(Y,F4)+C5(q,w5)+Q,n=C5(Y,U)+C5(q,O)+Q+14+3*w+C5(h,B)+2*h[16]+3*h[17]+7*h[18];if(G>=0&&l<=f&&l<=n)return T2($,X,_.subarray(G,G+N));var d,s,e,a;if(q4($,X,1+(n<f)),X+=2,n<f){d=m_(U,L,0),s=U,e=m_(O,F,0),a=O;var q0=m_(B,k,0);q4($,X,E-257),q4($,X+5,b-1),q4($,X+10,w-4),X+=14;for(var I=0;I<w;++I)q4($,X+3*I,B[s6[I]]);X+=3*w;var G0=[D,P];for(var N0=0;N0<2;++N0){var I0=G0[N0];for(var I=0;I<I0.length;++I){var F0=I0[I]&31;if(q4($,X,q0[F0]),X+=B[F0],F0>15)q4($,X,I0[I]>>5&127),X+=I0[I]>>12}}}else d=RQ,s=F4,e=vQ,a=w5;for(var I=0;I<K;++I){var V0=Z[I];if(V0>255){var F0=V0>>18&31;if(P5($,X,d[F0+257]),X+=s[F0+257],F0>7)q4($,X,V0>>23&31),X+=H8[F0];var P0=V0&31;if(P5($,X,e[P0]),X+=a[P0],P0>3)P5($,X,V0>>5&8191),X+=F8[P0]}else P5($,X,d[V0]),X+=s[V0]}return P5($,X,d[256]),X+s[256]},mQ=new _$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),y2=new T1(0),pQ=function(_,$,j,Z,Y,q){var Q=q.z||_.length,K=new T1(Z+Q+5*(1+Math.ceil(Q/7000))+Y),G=K.subarray(Z,K.length-Y),N=q.l,X=(q.r||0)&7;if($){if(X)G[0]=q.r>>3;var V=mQ[$-1],U=V>>13,L=V&8191,H=(1<<j)-1,O=q.p||new N_(32768),F=q.h||new N_(H+1),W=Math.ceil(j/3),D=2*W,E=function(f0){return(_[f0]^_[f0+1]<<W^_[f0+2]<<D)&H},S=new _$(25000),P=new N_(288),b=new N_(32),h=0,I=0,M=q.i||0,B=0,k=q.w||0,w=0;for(;M+2<Q;++M){var l=E(M),f=M&32767,n=F[l];if(O[f]=n,F[l]=f,k<=M){var d=Q-M;if((h>7000||B>24576)&&(d>423||!N)){X=E2(_,G,0,S,P,b,I,B,w,M-w,X),B=h=I=0,w=M;for(var s=0;s<286;++s)P[s]=0;for(var s=0;s<30;++s)b[s]=0}var e=2,a=0,q0=L,G0=f-n&32767;if(d>2&&l==E(M-G0)){var N0=Math.min(U,d)-1,I0=Math.min(32767,M),F0=Math.min(258,d);while(G0<=I0&&--q0&&f!=n){if(_[M+e]==_[M+e-G0]){var V0=0;for(;V0<F0&&_[M+V0]==_[M+V0-G0];++V0);if(V0>e){if(e=V0,a=G0,V0>N0)break;var P0=Math.min(G0,V0-2),B0=0;for(var s=0;s<P0;++s){var M0=M-G0+s&32767,w0=O[M0],H0=M0-w0&32767;if(H0>B0)B0=H0,n=M0}}}f=n,n=O[f],G0+=f-n&32767}}if(a){S[B++]=268435456|a6[e]<<18|D2[a];var y0=a6[e]&31,Y0=D2[a]&31;I+=H8[y0]+F8[Y0],++P[257+y0],++b[Y0],k=M+e,++h}else S[B++]=_[M],++P[_[M]]}}for(M=Math.max(M,k);M<Q;++M)S[B++]=_[M],++P[_[M]];if(X=E2(_,G,N,S,P,b,I,B,w,M-w,X),!N)q.r=X&7|G[X/8|0]<<3,X-=7,q.h=F,q.p=O,q.i=M,q.w=k}else{for(var M=q.w||0;M<Q+N;M+=65535){var D0=M+65535;if(D0>=Q)G[X/8|0]=N,D0=Q;X=T2(G,X+1,_.subarray(M,D0))}q.i=Q}return S5(K,0,Z+$$(X)+Y)};var P2=function(){var _=1,$=0;return{p:function(j){var Z=_,Y=$,q=j.length|0;for(var Q=0;Q!=q;){var K=Math.min(Q+2655,q);for(;Q<K;++Q)Y+=Z+=j[Q];Z=(Z&65535)+15*(Z>>16),Y=(Y&65535)+15*(Y>>16)}_=Z,$=Y},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},hQ=function(_,$,j,Z,Y){if(!Y){if(Y={l:1},$.dictionary){var q=$.dictionary.subarray(-32768),Q=new T1(q.length+_.length);Q.set(q),Q.set(_,q.length),_=Q,Y.w=q.length}}return pQ(_,$.level==null?6:$.level,$.mem==null?Y.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Y)};var C2=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var cQ=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Y=P2();Y.p($.dictionary),C2(_,2,Y.d())}},lQ=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)Q_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)Q_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var o6=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new T1(32768),this.p=new T1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)Q_(5);if(this.d)Q_(4);if(!this.p.length)this.p=$;else if($.length){var j=new T1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=gQ(this.p,this.s,this.o);this.ondata(S5(Z,j,this.s.b),this.d),this.o=S5(Z,this.s.b-32768),this.s.b=this.o.length,this.p=S5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function S2(_,$){if(!$)$={};var j=P2();j.p(_);var Z=hQ(_,$,$.dictionary?6:2,4);return cQ(Z,$),C2(Z,Z.length-4,j.d()),Z}var w2=function(){function _($,j){o6.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(o6.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(lQ(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)Q_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}o6.prototype.c.call(this,j)},_}();var nQ=typeof TextDecoder<"u"&&new TextDecoder,dQ=0;try{nQ.decode(y2,{stream:!0}),dQ=1}catch(_){}var iQ=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],rQ=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],oQ=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],sQ=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],aQ=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],tQ=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],eQ=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],_K=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],v2=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;v2[_]=$}function f2(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function b2(_){let $=0n,j=f2(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function $K(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Y=$-1;Y>=0;Y-=1)j[Y]=Number(Z&0xffn),Z>>=8n;return j}function Z5(_,$,j){let Z=0n;for(let Y of $){let q=BigInt(_)>>BigInt(j-Y)&1n;Z=Z<<1n|q}return Z}function R2(_,$){let j=28n,Z=(1n<<j)-1n,Y=BigInt($%28);return(_<<Y|_>>j-Y)&Z}function jK(_){let $=Z5(b2(_),aQ,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Y=[];for(let q of eQ){j=R2(j,q),Z=R2(Z,q);let Q=j<<28n|Z;Y.push(Z5(Q,tQ,56))}return Y}function ZK(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Y=Number(_>>Z&0x3fn),q=(Y&32)>>4|Y&1,Q=Y>>1&15;$=$<<4n|BigInt(_K[j][q][Q])}return $}function YK(_,$){let j=Z5(_,oQ,32)^BigInt($),Z=ZK(j);return Z5(Z,sQ,32)}function u2(_,$){let j=jK($),Z=Z5(b2(_),iQ,64),Y=Z>>32n&0xffffffffn,q=Z&0xffffffffn;for(let K of j){let G=q,N=(Y^YK(q,K))&0xffffffffn;Y=G,q=N}let Q=q<<32n|Y;return $K(Z5(Q,rQ,64),8)}function qK(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Y=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=v2[Y]}return j}function g2(_,$){let j=f2($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=qK(_),Y=new Uint8Array(16);return Y.set(u2(j.slice(0,8),Z),0),Y.set(u2(j.slice(8,16),Z),8),Y}var R_="vnc";function QK(_){return Number(_)}function KK(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Y)=>Y.trim()).filter((Y)=>Y.length>0):[],j=[],Z=new Set;for(let Y of $){let q=QK(Y);if(!Number.isFinite(q))continue;let Q=Number(q);if(!Z.has(Q))j.push(Q),Z.add(Q)}if(j.length>0)return j;return[5,2,1,0,-223]}function Q5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function GK(_,$){let j=Q5(_),Z=Q5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Y=new Uint8Array(j.byteLength+Z.byteLength);return Y.set(j,0),Y.set(Z,j.byteLength),Y}function NK(_){let $=0;for(let Y of _||[])$+=Y?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Y of _||[]){let q=Q5(Y);j.set(q,Z),Z+=q.byteLength}return j}function XK(){return(_)=>{let $=Q5(_);try{let j=[],Z=new w2((Y)=>{j.push(new Uint8Array(Y))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return NK(j)}catch(j){try{let Z=S2($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Y=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Y}`)}}}}function VK(_){return new TextEncoder().encode(String(_||""))}function Y5(_){return new TextDecoder().decode(Q5(_))}function UK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function LK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function m2(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function WK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function BK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Y=4;for(let q of $)Z.setInt32(Y,Number(q||0),!1),Y+=4;return new Uint8Array(j)}function p2(_,$,j,Z=0,Y=0){let q=new ArrayBuffer(10),Q=new DataView(q);return Q.setUint8(0,3),Q.setUint8(1,_?1:0),Q.setUint16(2,Z,!1),Q.setUint16(4,Y,!1),Q.setUint16(6,Math.max(0,$||0),!1),Q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(q)}function q5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function c2(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function zK(_,$,j,Z){let Y=Z||K5,q=Q5(_),Q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),K=Math.max(0,$||0)*Math.max(0,j||0)*Q;if(q.byteLength<K)throw Error(`Incomplete raw rectangle payload: expected ${K} byte(s), got ${q.byteLength}`);if(!Y.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let G=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),N=0,X=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let U=c2(q,N,Q,Y.bigEndian),L=q5(U>>>Y.redShift&Y.redMax,Y.redMax),H=q5(U>>>Y.greenShift&Y.greenMax,Y.greenMax),O=q5(U>>>Y.blueShift&Y.blueMax,Y.blueMax);G[X]=L,G[X+1]=H,G[X+2]=O,G[X+3]=255,N+=Q,X+=4}return G}function Q4(_,$,j){let Z=j||K5,Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Y)return null;let q=c2(_,$,Y,Z.bigEndian);return{rgba:[q5(q>>>Z.redShift&Z.redMax,Z.redMax),q5(q>>>Z.greenShift&Z.greenMax,Z.greenMax),q5(q>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Y}}function J4(_,$,j,Z,Y,q,Q){if(!Q)return;for(let K=0;K<q;K+=1)for(let G=0;G<Y;G+=1){let N=((Z+K)*$+(j+G))*4;_[N]=Q[0],_[N+1]=Q[1],_[N+2]=Q[2],_[N+3]=Q[3]}}function l2(_,$,j,Z,Y,q,Q){for(let K=0;K<q;K+=1){let G=K*Y*4,N=((Z+K)*$+j)*4;_.set(Q.subarray(G,G+Y*4),N)}}function h2(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Y=_[j++];if(Z+=Y,Y!==255)break}return{consumed:j-$,runLength:Z}}function HK(_,$,j,Z,Y,q,Q){let K=Y||K5,G=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let N=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+N)return null;let X=_.slice($+4,$+4+N),V;try{V=Q(X)}catch{return{consumed:4+N,skipped:!0}}let U=0,L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let H=0;H<Z;H+=64){let O=Math.min(64,Z-H);for(let F=0;F<j;F+=64){let W=Math.min(64,j-F);if(V.byteLength<U+1)return null;let D=V[U++],E=D&127,S=(D&128)!==0;if(!S&&E===0){let P=W*O*G;if(V.byteLength<U+P)return null;let b=q(V.slice(U,U+P),W,O,K);U+=P,l2(L,j,F,H,W,O,b);continue}if(!S&&E===1){let P=Q4(V,U,K);if(!P)return null;U+=P.bytesPerPixel,J4(L,j,F,H,W,O,P.rgba);continue}if(!S&&E>1&&E<=16){let P=[];for(let M=0;M<E;M+=1){let B=Q4(V,U,K);if(!B)return null;U+=B.bytesPerPixel,P.push(B.rgba)}let b=E<=2?1:E<=4?2:4,h=Math.ceil(W*b/8),I=h*O;if(V.byteLength<U+I)return null;for(let M=0;M<O;M+=1){let B=U+M*h;for(let k=0;k<W;k+=1){let w=k*b,l=B+(w>>3),f=8-b-(w&7),n=V[l]>>f&(1<<b)-1;J4(L,j,F+k,H+M,1,1,P[n])}}U+=I;continue}if(S&&E===0){let P=0,b=0;while(b<O){let h=Q4(V,U,K);if(!h)return null;U+=h.bytesPerPixel;let I=h2(V,U);if(!I)return null;U+=I.consumed;for(let M=0;M<I.runLength;M+=1)if(J4(L,j,F+P,H+b,1,1,h.rgba),P+=1,P>=W){if(P=0,b+=1,b>=O)break}}continue}if(S&&E>0){let P=[];for(let I=0;I<E;I+=1){let M=Q4(V,U,K);if(!M)return null;U+=M.bytesPerPixel,P.push(M.rgba)}let b=0,h=0;while(h<O){if(V.byteLength<U+1)return null;let I=V[U++],M=I,B=1;if(I&128){M=I&127;let w=h2(V,U);if(!w)return null;U+=w.consumed,B=w.runLength}let k=P[M];if(!k)return null;for(let w=0;w<B;w+=1)if(J4(L,j,F+b,H+h,1,1,k),b+=1,b>=W){if(b=0,h+=1,h>=O)break}}continue}return{consumed:4+N,skipped:!0}}}return{consumed:4+N,rgba:L,decompressed:V}}function FK(_,$,j,Z,Y){let q=Y||K5,Q=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8));if(_.byteLength<$+4+Q)return null;let G=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),N=4+Q+G*(Q+8);if(_.byteLength<$+N)return null;let X=$+4,V=Q4(_,X,q);if(!V)return null;X+=V.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);J4(U,j,0,0,j,Z,V.rgba);for(let L=0;L<G;L+=1){let H=Q4(_,X,q);if(!H)return null;if(X+=H.bytesPerPixel,_.byteLength<X+8)return null;let O=new DataView(_.buffer,_.byteOffset+X,8),F=O.getUint16(0,!1),W=O.getUint16(2,!1),D=O.getUint16(4,!1),E=O.getUint16(6,!1);X+=8,J4(U,j,F,W,D,E,H.rgba)}return{consumed:X-$,rgba:U}}function JK(_,$,j,Z,Y,q){let Q=Y||K5,K=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8)),G=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),N=$,X=[0,0,0,255],V=[255,255,255,255];for(let U=0;U<Z;U+=16){let L=Math.min(16,Z-U);for(let H=0;H<j;H+=16){let O=Math.min(16,j-H);if(_.byteLength<N+1)return null;let F=_[N++];if(F&1){let W=O*L*K;if(_.byteLength<N+W)return null;let D=q(_.slice(N,N+W),O,L,Q);N+=W,l2(G,j,H,U,O,L,D);continue}if(F&2){let W=Q4(_,N,Q);if(!W)return null;X=W.rgba,N+=W.bytesPerPixel}if(J4(G,j,H,U,O,L,X),F&4){let W=Q4(_,N,Q);if(!W)return null;V=W.rgba,N+=W.bytesPerPixel}if(F&8){if(_.byteLength<N+1)return null;let W=_[N++];for(let D=0;D<W;D+=1){let E=V;if(F&16){let B=Q4(_,N,Q);if(!B)return null;E=B.rgba,N+=B.bytesPerPixel}if(_.byteLength<N+2)return null;let S=_[N++],P=_[N++],b=S>>4,h=S&15,I=(P>>4)+1,M=(P&15)+1;J4(G,j,H+b,U+h,I,M,E)}}}}return{consumed:N-$,rgba:G}}var K5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class J8{protocol=R_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:zK,this.pipeline=_.pipeline||null,this.encodings=KK(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...K5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:XK()}receive(_){if(_)this.buffer=GK(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Y=this.consume(12),q=Y5(Y),Q=UK(q);if(!Q)throw Error(`Unsupported RFB version banner: ${q||"<empty>"}`);this.serverVersion=Q,this.clientVersionText=LK(Q),j.push(VK(this.clientVersionText)),$.push({type:"protocol-version",protocol:R_,server:Q.text.trim(),client:this.clientVersionText.trim()}),this.state=Q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<5)break;let G=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+G)break;this.consume(1);let N=Y5(this.consume(4+G).slice(4));throw Error(N||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Y)break;this.consume(1);let q=Array.from(this.consume(Y));$.push({type:"security-types",protocol:R_,types:q});let Q=null;if(q.includes(2)&&this.password!==null)Q=2;else if(q.includes(1))Q=1;else if(q.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${q.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Q)),$.push({type:"security-selected",protocol:R_,securityType:Q,label:Q===2?"VNC Authentication":"None"}),this.state=Q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),q===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+K)break;let G=Y5(this.consume(4+K).slice(4));throw Error(G||"VNC server rejected the connection.")}if(q===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:R_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(q!==1)throw Error(`Unsupported VNC security type ${q}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:R_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Y=this.consume(16);j.push(g2(this.password,Y)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),q!==0){if(this.buffer.byteLength>=4){let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Q){let K=Y5(this.consume(4+Q).slice(4));throw Error(K||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:R_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),q=Y.getUint16(0,!1),Q=Y.getUint16(2,!1),K=m2(Y,4),G=Y.getUint32(20,!1);if(this.buffer.byteLength<24+G)break;let N=this.consume(24),X=new DataView(N.buffer,N.byteOffset,N.byteLength);if(this.framebufferWidth=X.getUint16(0,!1),this.framebufferHeight=X.getUint16(2,!1),this.serverPixelFormat=m2(X,4),this.serverName=Y5(this.consume(G)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(WK(this.clientPixelFormat)),j.push(BK(this.encodings)),j.push(p2(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:R_,width:q,height:Q,name:this.serverName,pixelFormat:K}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Y=this.buffer[0];if(Y===0){if(this.buffer.byteLength<4)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),K=4,G=[],N=!1,X=!!this.pipeline;for(let U=0;U<Q;U+=1){if(this.buffer.byteLength<K+12){N=!0;break}let L=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,12),H=L.getUint16(0,!1),O=L.getUint16(2,!1),F=L.getUint16(4,!1),W=L.getUint16(6,!1),D=L.getInt32(8,!1);if(K+=12,D===0){let E=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),S=F*W*E;if(this.buffer.byteLength<K+S){N=!0;break}let P=this.buffer.slice(K,K+S);if(K+=S,X)this.pipeline.processRawRect(P,H,O,F,W,this.clientPixelFormat),G.push({kind:"pipeline",x:H,y:O,width:F,height:W});else G.push({kind:"rgba",x:H,y:O,width:F,height:W,rgba:this.decodeRawRect(P,F,W,this.clientPixelFormat)});continue}if(D===2){let E=FK(this.buffer,K,F,W,this.clientPixelFormat);if(!E){N=!0;break}if(X){let S=this.buffer.slice(K,K+E.consumed);this.pipeline.processRreRect(S,H,O,F,W,this.clientPixelFormat),G.push({kind:"pipeline",x:H,y:O,width:F,height:W})}else G.push({kind:"rgba",x:H,y:O,width:F,height:W,rgba:E.rgba});K+=E.consumed;continue}if(D===1){if(this.buffer.byteLength<K+4){N=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,4),S=E.getUint16(0,!1),P=E.getUint16(2,!1);if(K+=4,X)this.pipeline.processCopyRect(H,O,F,W,S,P),G.push({kind:"pipeline",x:H,y:O,width:F,height:W});else G.push({kind:"copy",x:H,y:O,width:F,height:W,srcX:S,srcY:P});continue}if(D===16){let E=HK(this.buffer,K,F,W,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!E){N=!0;break}if(K+=E.consumed,E.skipped)continue;if(X&&E.decompressed)this.pipeline.processZrleTileData(E.decompressed,H,O,F,W,this.clientPixelFormat),G.push({kind:"pipeline",x:H,y:O,width:F,height:W});else G.push({kind:"rgba",x:H,y:O,width:F,height:W,rgba:E.rgba});continue}if(D===5){let E=JK(this.buffer,K,F,W,this.clientPixelFormat,this.decodeRawRect);if(!E){N=!0;break}if(X){let S=this.buffer.slice(K,K+E.consumed);this.pipeline.processHextileRect(S,H,O,F,W,this.clientPixelFormat),G.push({kind:"pipeline",x:H,y:O,width:F,height:W})}else G.push({kind:"rgba",x:H,y:O,width:F,height:W,rgba:E.rgba});K+=E.consumed;continue}if(D===-223){if(this.framebufferWidth=F,this.framebufferHeight=W,X)this.pipeline.initFramebuffer(F,W);G.push({kind:"resize",x:H,y:O,width:F,height:W});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(N)break;this.consume(K);let V={type:"framebuffer-update",protocol:R_,width:this.framebufferWidth,height:this.framebufferHeight,rects:G};if(X)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(p2(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Y===2){this.consume(1),$.push({type:"bell",protocol:R_}),Z=!0;continue}if(Y===3){if(this.buffer.byteLength<8)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Q)break;this.consume(8);let K=Y5(this.consume(Q));$.push({type:"clipboard",protocol:R_,text:K}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Y}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var K4="piclaw://vnc";function OK(_){let $=String(_||"");if($===K4)return null;if(!$.startsWith(`${K4}/`))return null;let j=$.slice(`${K4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function v4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function DK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}async function AK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z?.handoff||null}function EK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function kK(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function MK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class n2{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=OK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=MK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:18px 18px 20px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:14px;box-shadow:0 16px 38px rgba(0,0,0,.22);">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host placeholder="server" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;min-height:40px;font-weight:600;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((Y)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${v4(Y.label||Y.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${v4(Y.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Y.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${v4(Y.id)}" data-target-label="${v4(Y.label||Y.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:28px 24px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);font-size:13px;color:var(--text-secondary);line-height:1.5;">
                            No saved VNC targets yet. Connect directly above.
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Y=kK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Y)return;this.authPassword=y5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Y,Y)};this.directHostInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Y of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Y.addEventListener("click",()=>{let q=Y.getAttribute("data-target-open-tab"),Q=Y.getAttribute("data-target-label")||q||"VNC";if(!q)return;this.openTargetTab(q,Q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${v4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                        <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                        <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                            <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                            <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                        </label>
                        <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Reconnect</button>
                        <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Target</button>
                    </div>
                </div>
                <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:16px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:12px;position:relative;overflow:hidden;">
                    <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:0 12px 36px rgba(0,0,0,.35);border-radius:8px;background:#000;"></canvas>
                    <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${v4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=y5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(q)=>{if(q.key!=="Enter")return;q.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=y5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Y=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",q=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Y}${q}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=O2($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return H2(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(z8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=l6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~l6(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of F2(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(J2(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=n6(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??n6(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Y of _.rects||[])if(Y.kind==="resize")this.ensureCanvasSize(Y.width,Y.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Y=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Y,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new J8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Y of Z.outgoing||[])this.socketBoundary?.send?.(Y);for(let Y of Z.events||[])this.applyRemoteDisplayEvent(Y)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await z2(),Y={};if(Z)Y.pipeline=Z,Y.decodeRawRect=(K,G,N,X)=>Z.decodeRawRectToRgba(K,G,N,X);let q=y5(this.authPassword);if(q!==null)Y.password=q;if(j)Y.encodings=j;let Q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new J8(Y),this.hasRenderedFrame=Q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q?"none":"";this.socketBoundary=new p6({url:EK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(K)=>{this.applyMetrics(K)},onMessage:(K)=>{this.handleSocketMessage(K)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await DK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${v4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await AK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var j$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===K4||$.startsWith(`${K4}/`)?9000:!1},mount(_,$){return new n2(_,$)}};function X_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Y1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function G5(_,$=!1){let j=X_(_);if(j===null)return $;return j==="true"}function R5(_,$=null){let j=X_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}var q$="piclaw_theme",D8="piclaw_tint",r2="piclaw_chat_themes",v5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},o2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},d2={default:{label:"Default",mode:"auto",light:v5,dark:o2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},IK=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],f4={theme:"default",tint:null},s2="light",Z$=!1;function A8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function X5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((q)=>q+q).join(""):j,Y=parseInt(Z,16);return{r:Y>>16&255,g:Y>>8&255,b:Y&255,hex:`#${Z.toLowerCase()}`}}function xK(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Y=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Y)return null;let q=parseInt(Y[1],10),Q=parseInt(Y[2],10),K=parseInt(Y[3],10);if(![q,Q,K].every((N)=>Number.isFinite(N)))return null;let G=`#${[q,Q,K].map((N)=>N.toString(16).padStart(2,"0")).join("")}`;return{r:q,g:Q,b:K,hex:G}}function a2(_){return X5(_)||xK(_)}function u5(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Y=Math.round(_.g+($.g-_.g)*j),q=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Y} ${q})`}function Y$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function TK(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Y=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),q=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Y+0.7152*q+0.0722*Q}function yK(_){return TK(_)>0.4?"#000000":"#ffffff"}function t2(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Q$(_){return d2[_]||d2.default}function PK(_){return _.mode==="auto"?t2():_.mode}function e2(_,$){let j=Q$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||v5}function _7(_,$,j){let Z=a2($);if(!Z)return _;let Y=X5(_.bgPrimary),q=X5(_.bgSecondary),Q=X5(_.bgHover),K=X5(_.borderColor);if(!Y||!q||!Q||!K)return _;let N=X5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:u5(Y,Z,0.08),bgSecondary:u5(q,Z,0.12),bgHover:u5(Q,Z,0.16),borderColor:u5(K,Z,0.08),accent:Z.hex,accentHover:N?u5(Z,N,0.18):Z.hex}}function CK(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Y=a2(Z),q=Y?Y$(Y,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Q=Y?Y$(Y,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",K=Y?Y$(Y,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",G=Y?yK(Y):$==="dark"?"#000000":"#ffffff",N={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":Q,"--accent-soft-strong":K,"--accent-contrast-text":G,"--danger-color":_.danger||v5.danger,"--success-color":_.success||v5.success,"--search-highlight-color":q||"rgba(29, 155, 240, 0.2)"};Object.entries(N).forEach(([X,V])=>{if(V)j.style.setProperty(X,V)})}function SK(){if(typeof document>"u")return;let _=document.documentElement;IK.forEach(($)=>_.style.removeProperty($))}function N5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function i2(_){let $=A8(f4?.theme||"default"),j=f4?.tint?String(f4.tint).trim():null,Z=e2($,_);if($==="default"&&j)Z=_7(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?o2.bgPrimary:v5.bgPrimary}function wK(_,$){if(typeof document>"u")return;let j=N5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=N5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",i2("light"));let Y=N5("theme-color",{id:"theme-color-dark"});if(Y)Y.setAttribute("media","(prefers-color-scheme: dark)"),Y.setAttribute("content",i2("dark"));let q=N5("msapplication-TileColor");if(q&&_)q.setAttribute("content",_);let Q=N5("msapplication-navbutton-color");if(Q&&_)Q.setAttribute("content",_);let K=N5("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function RK(){if(typeof window>"u")return;let _={...f4,mode:s2};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function $7(){try{let _=X_(r2);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function uK(_,$,j){let Z=$7();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};Y1(r2,JSON.stringify(Z))}function vK(_){if(!_)return null;return $7()[_]||null}function j7(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function K$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=A8(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Y=Q$(j),q=PK(Y),Q=e2(j,q);f4={theme:j,tint:Z},s2=q;let K=document.documentElement;K.dataset.theme=q,K.dataset.colorTheme=j,K.dataset.tint=Z?String(Z):"",K.style.colorScheme=q;let G=Q;if(j==="default"&&Z)G=_7(Q,Z,q);if(j==="default"&&!Z)SK();else CK(G,q);if(wK(G.bgPrimary,q),RK(),$.persist!==!1)if(Y1(q$,j),Z)Y1(D8,Z);else Y1(D8,"")}function O8(){if(Q$(f4.theme).mode!=="auto")return;K$(f4,{persist:!1})}function Z7(){if(typeof window>"u")return()=>{};let _=j7(),$=vK(_),j=$?A8($.theme||"default"):A8(X_(q$)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Y=X_(D8);return Y?Y.trim():null})();if(K$({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!Z$){let Y=window.matchMedia("(prefers-color-scheme: dark)");if(Y.addEventListener)Y.addEventListener("change",O8);else if(Y.addListener)Y.addListener(O8);return Z$=!0,()=>{if(Y.removeEventListener)Y.removeEventListener("change",O8);else if(Y.removeListener)Y.removeListener(O8);Z$=!1}}return()=>{}}function Y7(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||j7(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(uK($,j||"default",Z),K$({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")Y1(q$,j||"default"),Y1(D8,Z||"")}function q7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return t2()}var E8=/#(\w+)/g,fK=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),bK=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),gK=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),mK={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},pK=new Set(["http:","https:","mailto:",""]);function G$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function b4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!pK.has(Z.protocol))return null;return Z.href}catch{return null}}function Q7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Y=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),q;while(q=Y.nextNode())Z.push(q);for(let Q of Z){let K=Q.tagName.toLowerCase();if(!bK.has(K)){let N=Q.parentNode;if(!N)continue;while(Q.firstChild)N.insertBefore(Q.firstChild,Q);N.removeChild(Q);continue}let G=mK[K]||new Set;for(let N of Array.from(Q.attributes)){let X=N.name.toLowerCase(),V=N.value;if(X.startsWith("on")){Q.removeAttribute(N.name);continue}if(X.startsWith("data-")||X.startsWith("aria-"))continue;if(G.has(X)||gK.has(X)){if(X==="href"){let U=b4(V);if(!U)Q.removeAttribute(N.name);else if(Q.setAttribute(N.name,U),K==="a"&&!Q.getAttribute("rel"))Q.setAttribute("rel","noopener noreferrer")}else if(X==="src"){let U=K==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,L=b4(U,{allowDataImage:K==="img"});if(!L)Q.removeAttribute(N.name);else Q.setAttribute(N.name,L)}continue}Q.removeAttribute(N.name)}}return j.body.innerHTML}function K7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function k8(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Y=K7(j);if(Y===j)break;j=Y}return j}function hK(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=[],q=!1,Q=[];for(let K of j){if(!q&&K.trim().match(/^```mermaid\s*$/i)){q=!0,Q=[];continue}if(q&&K.trim().match(/^```\s*$/)){let G=Z.length;Z.push(Q.join(`
`)),Y.push(`@@MERMAID_BLOCK_${G}@@`),q=!1,Q=[];continue}if(q)Q.push(K);else Y.push(K)}if(q)Y.push("```mermaid"),Y.push(...Q);return{text:Y.join(`
`),blocks:Z}}function cK(_){if(!_)return _;return k8(_,5)}function lK(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function nK(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function dK(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Y=Number(Z),q=$[Y]??"",Q=cK(q);return`<div class="mermaid-container" data-mermaid="${lK(Q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function G7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var iK={span:new Set(["title","class","lang","dir"])};function rK(_,$){let j=iK[_];if(!j||!$)return"";let Z=[],Y=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,q;while(q=Y.exec($)){let Q=(q[1]||"").toLowerCase();if(!Q||Q.startsWith("on")||!j.has(Q))continue;let K=q[2]??q[3]??q[4]??"";Z.push(` ${Q}="${G$(K)}"`)}return Z.join("")}function N7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Y=Z.startsWith("/"),q=Y?Z.slice(1).trim():Z,K=q.endsWith("/")?q.slice(0,-1).trim():q,[G=""]=K.split(/\s+/,1),N=G.toLowerCase();if(!N||!fK.has(N))return $;if(N==="br")return Y?"":"<br>";if(Y)return`</${N}>`;let X=K.slice(G.length).trim(),V=rK(N,X);return`<${N}${V}>`})}function X7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function V7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(q)=>q.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Y;while(Y=j.nextNode()){if(!Y.nodeValue)continue;let q=Z(Y.nodeValue);if(q!==Y.nodeValue)Y.nodeValue=q}return $.body.innerHTML}function oK(_){if(!window.katex)return _;let $=(Q)=>K7(Q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Q)=>{let K=[],G=Q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(N)=>{let X=K.length;return K.push(N),`@@CODE_BLOCK_${X}@@`});return G=G.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(N)=>{let X=K.length;return K.push(N),`@@CODE_INLINE_${X}@@`}),{html:G,blocks:K}},Z=(Q,K)=>{if(!K.length)return Q;return Q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(G,N)=>{let X=Number(N);return K[X]??""})},Y=j(_),q=Y.html;return q=q.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Q,K,G)=>{try{let N=katex.renderToString($(G.trim()),{displayMode:!0,throwOnError:!1});return`${K}${N}`}catch(N){return`<span class="math-error" title="${G$(N.message)}">${Q}</span>`}}),q=q.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(Q,K,G)=>{if(/\s$/.test(G))return Q;try{let N=katex.renderToString($(G),{displayMode:!1,throwOnError:!1});return`${K}${N}`}catch(N){return`${K}<span class="math-error" title="${G$(N.message)}">$${G}$</span>`}}),Z(q,Y.blocks)}function sK(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Y;while(Y=j.nextNode())Z.push(Y);for(let q of Z){let Q=q.nodeValue;if(!Q)continue;if(E8.lastIndex=0,!E8.test(Q))continue;E8.lastIndex=0;let K=q.parentElement;if(K&&(K.closest("a")||K.closest("code")||K.closest("pre")))continue;let G=Q.split(E8);if(G.length<=1)continue;let N=$.createDocumentFragment();G.forEach((X,V)=>{if(V%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",X),U.textContent=`#${X}`,N.appendChild(U)}else N.appendChild($.createTextNode(X))}),q.parentNode?.replaceChild(N,q)}return $.body.innerHTML}function aK(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Y=!1;for(let q of j){if(!Y&&q.trim().match(/^```(?:math|katex|latex)\s*$/i)){Y=!0,Z.push("$$");continue}if(Y&&q.trim().match(/^```\s*$/)){Y=!1,Z.push("$$");continue}Z.push(q)}return Z.join(`
`)}function tK(_){let $=aK(_||""),{text:j,blocks:Z}=hK($),Y=k8(j,2),Q=G7(Y).replace(/</g,"&lt;");return{safeHtml:N7(Q),mermaidBlocks:Z}}function V_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Y}=tK(_),q=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return q=X7(q),q=V7(q),q=oK(q),q=sK(q),q=dK(q,Y),q=Q7(q,j),q}function f5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=k8($,2),Y=G7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),q=N7(Y),Q=window.marked?marked.parse(q):q.replace(/\n/g,"<br>");return Q=X7(Q),Q=V7(Q),Q=Q7(Q),Q}function eK(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Y,q)=>{let Q=Y.trim().split(/\s+/).map((G)=>{let[N,X]=G.split(",").map(Number);return{x:N,y:X}});if(Q.length<3)return`<polyline${Z}points="${Y}"${q}/>`;let K=[`M ${Q[0].x},${Q[0].y}`];for(let G=1;G<Q.length-1;G++){let N=Q[G-1],X=Q[G],V=Q[G+1],U=X.x-N.x,L=X.y-N.y,H=V.x-X.x,O=V.y-X.y,F=Math.sqrt(U*U+L*L),W=Math.sqrt(H*H+O*O),D=Math.min($,F/2,W/2);if(D<0.5){K.push(`L ${X.x},${X.y}`);continue}let E=X.x-U/F*D,S=X.y-L/F*D,P=X.x+H/W*D,b=X.y+O/W*D,I=U*O-L*H>0?1:0;K.push(`L ${E},${S}`),K.push(`A ${D},${D} 0 0 ${I} ${P},${b}`)}return K.push(`L ${Q[Q.length-1].x},${Q[Q.length-1].y}`),`<path${Z}d="${K.join(" ")}"${q}/>`})}async function G4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Y=q7()==="dark"?j["tokyo-night"]:j["github-light"],q=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Q of q)try{let K=Q.dataset.mermaid,G=nK(K||""),N=k8(G,2),X=await $(N,{...Y,transparent:!0});X=eK(X),Q.innerHTML=X,Q.removeAttribute("data-mermaid")}catch(K){console.error("Mermaid render error:",K);let G=document.createElement("pre");G.className="mermaid-error",G.textContent=`Diagram error: ${K.message}`,Q.innerHTML="",Q.appendChild(G),Q.removeAttribute("data-mermaid")}}function U7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Y=Z/1000,q=86400000;if(Z<q){if(Y<60)return"just now";if(Y<3600)return`${Math.floor(Y/60)}m`;return`${Math.floor(Y/3600)}h`}if(Z<5*q){let G=$.toLocaleDateString(void 0,{weekday:"short"}),N=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${G} ${N}`}let Q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Q} ${K}`}function b5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function E_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function g4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function O4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function _G(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Y=Z?.[1]||j,q=Z?.[2]||"",Q=Z?.[3]||"",K=String($||"").split("/").slice(0,-1).join("/"),N=Y.startsWith("/")?Y:`${K?`${K}/`:""}${Y}`,X=[];for(let U of N.split("/")){if(!U||U===".")continue;if(U===".."){if(X.length>0)X.pop();continue}X.push(U)}let V=X.join("/");return`${G8(V)}${q}${Q}`}function g5(_){return _?.preview||null}function $G(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Y=Z.lastIndexOf(".");if(Y<=0||Y===Z.length-1)return"none";return Z.slice(Y+1)}function jG(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function ZG(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${O4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${O4(E_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${O4(g4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${O4(jG($))}</span>`),Z.push(`<span><strong>extension:</strong> ${O4($G(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${O4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function YG(_){let $=g5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=ZG(_,$);if($.kind==="image"){let Z=$.url||($.path?G8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${O4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=V_($.text||"",null,{rewriteImageSrc:(Y)=>_G(Y,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${O4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class N${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=YG(this.context)}getContent(){let _=g5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=g5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var X$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=g5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new N$(_,$)}},V$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return g5(_)||_?.path?1:!1},mount(_,$){return new N$(_,$)}};var qG=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),QG={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},KG={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function W7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function L7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class B7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=W7(j),q=KG[Y]||"\uD83D\uDCC4",Q=QG[Y]||"Office Document",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${q}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${L7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${L7(Q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let G=K.querySelector("#ov-open-tab");if(G)G.addEventListener("click",()=>{let N=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(N)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class z7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,q=`/office-viewer/?url=${encodeURIComponent(Y)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var U$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=W7(_?.path);if(!$||!qG.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new B7(_,$);return new z7(_,$)}};var GG=/\.(csv|tsv)$/i;function H7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class F7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Y=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${H7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${H7(Y)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let Q=q.querySelector("#csv-open-tab");if(Q)Q.addEventListener("click",()=>{let K=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class J7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var L$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!GG.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new F7(_,$);return new J7(_,$)}};var NG=/\.pdf$/i;function XG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class O7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${XG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#pdf-open-tab");if(q)q.addEventListener("click",()=>{let Q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class D7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var W$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!NG.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new O7(_,$);return new D7(_,$)}};var VG=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function B$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class A7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Y=`/workspace/raw?path=${encodeURIComponent(j)}`,q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${B$(Y)}" alt="${B$(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${B$(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let Q=q.querySelector("#img-open-tab");if(Q)Q.addEventListener("click",()=>{let K=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class E7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var z$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!VG.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new A7(_,$);return new E7(_,$)}};var UG=/\.(mp4|m4v|mov|webm|ogv)$/i;function LG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class k7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${LG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#video-open-tab");if(q)q.addEventListener("click",()=>{let Q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class M7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var H$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!UG.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new k7(_,$);return new M7(_,$)}};function WG(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function BG(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var F$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function I7(_){let $=String(_||"").trim();return $?$:F$}function zG(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function HG(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function FG(_,$="*"){try{let j=(q)=>{let Q=_.parent||_.opener;if(!Q)return!1;return Q.postMessage(JSON.stringify({event:"workspace-export",...q}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let q=Z.prototype.saveData;Z.prototype.saveData=function(Q,K,G,N,X,V){try{if(Q&&G!=null&&j({filename:Q,format:K,data:G,mimeType:N,base64Encoded:Boolean(X),defaultMode:V}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return q.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Y=_.App;if(Y?.prototype&&!Y.prototype.__piclawExportPatched){let q=Y.prototype.exportFile;Y.prototype.exportFile=function(Q,K,G,N,X,V){try{if(K&&j({filename:K,data:Q,mimeType:G,base64Encoded:Boolean(N),mode:X,folderId:V}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return q.apply(this,arguments)},Y.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Y?.prototype&&Y.prototype.__piclawExportPatched)}catch{return!1}}async function x7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${HG(j)}`}class T7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${BG(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#drawio-open-tab");if(q)q.addEventListener("click",()=>{let Q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class y7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=zG(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Y=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let q=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(FG(this.iframe.contentWindow))return;setTimeout(q,250)};q()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=F$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await x7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await x7(_,"image/png");else this.xmlData=I7(await _.text());else if(_.status===404)this.xmlData=F$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?I7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var J$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!WG(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new T7(_,$);return new y7(_,$)}};var JG=/\.mindmap\.ya?ml$/i,O$=String(Date.now());function P7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function D$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,q)=>{let Q=document.createElement("script");Q.src=_,Q.dataset.src=$,Q.onload=()=>Y(),Q.onerror=()=>q(Error(`Failed to load ${_}`)),document.head.appendChild(Q)})}function OG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function DG(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let Z=document.createElement("div");Z.id="context-menu",Z.className="context-menu hidden",Z.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Z)}class C7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83E\uDDE0</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Z}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">Edit in Tab</button>
            </div>`,_.appendChild(Y),Y.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class S7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(P7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,OG("/static/css/mindmap.css"),await Promise.all([D$("/static/js/vendor/d3-mindmap.min.js?v="+O$),D$("/static/js/vendor/js-yaml.min.js?v="+O$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),DG(this.mindmapEl);let j=P7(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await D$("/static/js/vendor/mindmap-editor.js?v="+O$),this.disposed)return;let Y=window.__mindmapEditor;if(!Y)throw Error("__mindmapEditor not found");if(Y.mount({content:$,isDark:j,onEdit:(q)=>{this.lastContent=q,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(q)},resolveImagePath:(q)=>{if(q.startsWith("data:")||q.startsWith("http"))return q;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+q)}`}}),this.pendingContent!==null)Y.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Y){if(console.error("[mindmap] Failed to load mindmap renderer:",Y),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var A$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!JG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new C7(_,$);return new S7(_,$)}};var AG=/\.kanban\.md$/i,EG=String(Date.now());function w7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function kG(){let _=window;if(_.preact)return;_.preact={h:Y8,render:H4,Component:o4,createContext:r3},_.preactHooks={useState:m,useEffect:g,useCallback:T,useRef:y,useMemo:g0,useReducer:G6,useContext:a3,useLayoutEffect:D5,useImperativeHandle:s3,useErrorBoundary:e3,useDebugValue:t3},_.htm={bind:()=>z}}function MG(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Y,q)=>{let Q=document.createElement("script");Q.src=_,Q.dataset.src=$,Q.onload=()=>Y(),Q.onerror=()=>q(Error(`Failed to load ${_}`)),document.head.appendChild(Q)})}function IG(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class R7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Y.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83D\uDCCB</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Z}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Y),Y.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class u7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(w7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,IG("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=w7();try{if(kG(),await MG("/static/js/vendor/kanban-editor.js?v="+EG),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var E$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!AG.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new R7(_,$);return new u7(_,$)}};class v7{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Y)=>Y===_?$:Y),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var e0=new v7;function f7(){let[_,$]=m(!1),[j,Z]=m("default"),Y=y(!1);g(()=>{let G=G5("notificationsEnabled",!1);if(Y.current=G,$(G),typeof Notification<"u")Z(Notification.permission)},[]),g(()=>{Y.current=_},[_]);let q=T(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let G=Notification.requestPermission();if(G&&typeof G.then==="function")return G;return Promise.resolve(G)}catch{return Promise.resolve("default")}},[]),Q=T(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let N=await q();if(Z(N||"default"),N!=="granted"){Y.current=!1,$(!1),Y1("notificationsEnabled","false");return}}let G=!Y.current;Y.current=G,$(G),Y1("notificationsEnabled",String(G))},[q]),K=T((G,N)=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let X=new Notification(G,{body:N});return X.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:Q,notify:K}}var m5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function b7({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Y]=m(null),[q,Q]=m(!1),K=y(!1),G=y(null),N=y(!1),X=y(null),V=y(null),U=y(0);g(()=>{K.current=q},[q]),g(()=>{V.current=Z},[Z]),g(()=>{U.current+=1,X.current=null,N.current=!1,K.current=!1,Q(!1)},[j]);let L=T(async(F=null)=>{let W=U.current;try{if(F){let D=await X6(F,50,0,j);if(W!==U.current)return;Y(D.posts),Q(!1)}else{let D=await u4(10,null,j);if(W!==U.current)return;Y(D.posts),Q(D.has_more)}}catch(D){if(W!==U.current)return;console.error("Failed to load posts:",D)}},[j]),H=T(async()=>{let F=U.current;try{let W=await u4(10,null,j);if(F!==U.current)return;Y((D)=>{if(!D||D.length===0)return W.posts;return m5([...W.posts,...D])}),Q((D)=>D||W.has_more)}catch(W){if(F!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j]),O=T(async(F={})=>{let W=U.current,D=V.current;if(!D||D.length===0)return;if(N.current)return;let{preserveScroll:E=!0,preserveMode:S="top",allowRepeat:P=!1}=F,b=(M)=>{if(!E){M();return}if(S==="top")$(M);else _(M)},I=D.slice().sort((M,B)=>M.id-B.id)[0]?.id;if(!Number.isFinite(I))return;if(!P&&X.current===I)return;N.current=!0,X.current=I;try{let M=await u4(10,I,j);if(W!==U.current)return;if(M.posts.length>0)b(()=>{Y((B)=>m5([...M.posts,...B||[]])),Q(M.has_more)});else Q(!1)}catch(M){if(W!==U.current)return;console.error("Failed to load more posts:",M)}finally{if(W===U.current)N.current=!1}},[j,_,$]);return g(()=>{G.current=O},[O]),{posts:Z,setPosts:Y,hasMore:q,setHasMore:Q,hasMoreRef:K,loadPosts:L,refreshTimeline:H,loadMore:O,loadMoreRef:G,loadingMoreRef:N,lastBeforeIdRef:X}}function g7(){let[_,$]=m(null),[j,Z]=m({text:"",totalLines:0}),[Y,q]=m(""),[Q,K]=m({text:"",totalLines:0}),[G,N]=m(null),[X,V]=m(null),[U,L]=m(null),H=y(null),O=y(0),F=y(!1),W=y(""),D=y(""),E=y(null),S=y(null),P=y(null),b=y(null),h=y(!1),I=y(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Y,setAgentPlan:q,agentThought:Q,setAgentThought:K,pendingRequest:G,setPendingRequest:N,currentTurnId:X,setCurrentTurnId:V,steerQueuedTurnId:U,setSteerQueuedTurnId:L,lastAgentEventRef:H,lastSilenceNoticeRef:O,isAgentRunningRef:F,draftBufferRef:W,thoughtBufferRef:D,pendingRequestRef:E,stalledPostIdRef:S,currentTurnIdRef:P,steerQueuedTurnIdRef:b,thoughtExpandedRef:h,draftExpandedRef:I}}function m7({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Y=y((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,L=$.current||280,H=X.currentTarget;H.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let O=U,F=(D)=>{O=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),160),600);V.style.setProperty("--sidebar-width",`${E}px`),$.current=E},W=()=>{let D=Math.min(Math.max(L+(O-U),160),600);$.current=D,H.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Y1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",F),document.addEventListener("mouseup",W)}).current,q=y((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientX,H=$.current||280,O=X.currentTarget;O.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let F=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let S=Math.min(Math.max(H+(E.clientX-L),160),600);V.style.setProperty("--sidebar-width",`${S}px`),$.current=S},W=()=>{O.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Y1("sidebarWidth",String(Math.round($.current||H))),document.removeEventListener("touchmove",F),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",F,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,Q=y((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,L=j.current||$.current||280,H=X.currentTarget;H.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let O=U,F=(D)=>{O=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),200),800);V.style.setProperty("--editor-width",`${E}px`),j.current=E},W=()=>{let D=Math.min(Math.max(L+(O-U),200),800);j.current=D,H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",F),document.addEventListener("mouseup",W)}).current,K=y((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientX,H=j.current||$.current||280,O=X.currentTarget;O.classList.add("dragging"),document.body.style.userSelect="none";let F=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let S=Math.min(Math.max(H+(E.clientX-L),200),800);V.style.setProperty("--editor-width",`${S}px`),j.current=S},W=()=>{O.classList.remove("dragging"),document.body.style.userSelect="",Y1("editorWidth",String(Math.round(j.current||H))),document.removeEventListener("touchmove",F),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",F,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,G=y((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientY,L=Z?.current||200,H=X.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let O=U,F=(D)=>{O=D.clientY;let E=Math.min(Math.max(L-(D.clientY-U),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${E}px`),Z)Z.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{let D=Math.min(Math.max(L-(O-U),100),window.innerHeight*0.5);if(Z)Z.current=D;H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",F),document.addEventListener("mouseup",W)}).current,N=y((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let L=U.clientY,H=Z?.current||200,O=X.currentTarget;O.classList.add("dragging"),document.body.style.userSelect="none";let F=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let S=Math.min(Math.max(H-(E.clientY-L),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${S}px`),Z)Z.current=S;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{O.classList.remove("dragging"),document.body.style.userSelect="",Y1("dockHeight",String(Math.round(Z?.current||H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",F),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",F,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current;return{handleSplitterMouseDown:Y,handleSplitterTouchStart:q,handleEditorSplitterMouseDown:Q,handleEditorSplitterTouchStart:K,handleDockSplitterMouseDown:G,handleDockSplitterTouchStart:N}}function xG(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Y=!1,q=new Map;for(let[Q,K]of _.entries()){let G=Q;if(Z==="dir"){if(Q===$)G=j,Y=!0;else if(Q.startsWith(`${$}/`))G=`${j}${Q.slice($.length)}`,Y=!0}else if(Q===$)G=j,Y=!0;q.set(G,K)}return Y?q:_}function p7({onTabClosed:_}={}){let $=y(_);$.current=_;let[j,Z]=m(()=>e0.getTabs()),[Y,q]=m(()=>e0.getActiveId()),[Q,K]=m(()=>e0.getTabs().length>0);g(()=>{return e0.onChange((I,M)=>{Z(I),q(M),K(I.length>0)})},[]);let[G,N]=m(()=>new Set),[X,V]=m(()=>new Map),U=T((I)=>{N((M)=>{let B=new Set(M);if(B.has(I))B.delete(I);else B.add(I);return B})},[]),L=T((I)=>{N((M)=>{if(!M.has(I))return M;let B=new Set(M);return B.delete(I),B})},[]),H=T((I)=>{V((M)=>{if(!M.has(I))return M;let B=new Map(M);return B.delete(I),B})},[]),O=T((I,M={})=>{if(!I)return;let B=typeof M?.paneOverrideId==="string"&&M.paneOverrideId.trim()?M.paneOverrideId.trim():null,k={path:I,mode:"edit"};try{if(!(B?d0.get(B):d0.resolve(k))){if(!d0.get("editor")){console.warn(`[openEditor] No pane handler for: ${I}`);return}}}catch(l){console.warn(`[openEditor] paneRegistry.resolve() error for "${I}":`,l)}let w=typeof M?.label==="string"&&M.label.trim()?M.label.trim():void 0;if(e0.open(I,w),B)V((l)=>{if(l.get(I)===B)return l;let f=new Map(l);return f.set(I,B),f})},[]),F=T(()=>{let I=e0.getActiveId();if(I){let M=e0.get(I);if(M?.dirty){if(!window.confirm(`"${M.label}" has unsaved changes. Close anyway?`))return}e0.close(I),L(I),H(I),$.current?.(I)}},[H,L]),W=T((I)=>{let M=e0.get(I);if(M?.dirty){if(!window.confirm(`"${M.label}" has unsaved changes. Close anyway?`))return}e0.close(I),L(I),H(I),$.current?.(I)},[H,L]),D=T((I)=>{e0.activate(I)},[]),E=T((I)=>{let M=e0.getTabs().filter((w)=>w.id!==I&&!w.pinned),B=M.filter((w)=>w.dirty).length;if(B>0){if(!window.confirm(`${B} unsaved tab${B>1?"s":""} will be closed. Continue?`))return}let k=M.map((w)=>w.id);e0.closeOthers(I),k.forEach((w)=>{L(w),H(w),$.current?.(w)})},[H,L]),S=T(()=>{let I=e0.getTabs().filter((k)=>!k.pinned),M=I.filter((k)=>k.dirty).length;if(M>0){if(!window.confirm(`${M} unsaved tab${M>1?"s":""} will be closed. Continue?`))return}let B=I.map((k)=>k.id);e0.closeAll(),B.forEach((k)=>{L(k),H(k),$.current?.(k)})},[H,L]),P=T((I)=>{e0.togglePin(I)},[]),b=T((I)=>{if(!I)return;V((M)=>{if(M.get(I)==="editor")return M;let B=new Map(M);return B.set(I,"editor"),B}),e0.activate(I)},[]),h=T(()=>{let I=e0.getActiveId();if(I)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:I}}))},[]);return g(()=>{let I=(M)=>{let{oldPath:B,newPath:k,type:w}=M.detail||{};if(!B||!k)return;if(w==="dir"){for(let l of e0.getTabs())if(l.path===B||l.path.startsWith(`${B}/`)){let f=`${k}${l.path.slice(B.length)}`;e0.rename(l.id,f)}}else e0.rename(B,k);V((l)=>xG(l,B,k,w))};return window.addEventListener("workspace-file-renamed",I),()=>window.removeEventListener("workspace-file-renamed",I)},[]),g(()=>{let I=(M)=>{if(e0.hasUnsaved())M.preventDefault(),M.returnValue=""};return window.addEventListener("beforeunload",I),()=>window.removeEventListener("beforeunload",I)},[]),{editorOpen:Q,tabStripTabs:j,tabStripActiveId:Y,previewTabs:G,tabPaneOverrides:X,openEditor:O,closeEditor:F,handleTabClose:W,handleTabActivate:D,handleTabCloseOthers:E,handleTabCloseAll:S,handleTabTogglePin:P,handleTabTogglePreview:U,handleTabEditSource:b,revealInExplorer:h}}function k$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Y=j[_]??window[Z],q=Number(Y);return Number.isFinite(q)?q:$}catch{return $}}var h7=k$("warning",30000),c7=k$("finalize",120000),l7=k$("refresh",30000),n7=30000;function d7(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function i7(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function r7(_=30000){let[,$]=m(0);g(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function o7(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Y)=>Z+Math.max(1,Math.ceil(Y.length/$)),0)}async function s7(_){let{panelKey:$,expanded:j,currentTurnIdRef:Z,thoughtExpandedRef:Y,draftExpandedRef:q,setAgentThoughtVisibility:Q,getAgentThought:K,thoughtBufferRef:G,draftBufferRef:N,setAgentThought:X,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let U=Z.current;if($==="thought"){if(Y.current=j,U)try{await Q(U,"thought",j)}catch(L){console.warn("Failed to update thought visibility:",L)}if(!j)return;try{let L=U?await K(U,"thought"):null;if(L?.text)G.current=L.text;X((H)=>({...H||{text:"",totalLines:0},fullText:G.current||H?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:H?.totalLines||0}))}catch(L){console.warn("Failed to fetch full thought:",L)}return}if(q.current=j,U)try{await Q(U,"draft",j)}catch(L){console.warn("Failed to update draft visibility:",L)}if(!j)return;try{let L=U?await K(U,"draft"):null;if(L?.text)N.current=L.text;V((H)=>({...H||{text:"",totalLines:0},fullText:N.current||H?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:H?.totalLines||0}))}catch(L){console.warn("Failed to fetch full draft:",L)}}function M$(_){return String(_||"").trim()||"web:default"}function a7({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function TG(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function D4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function M8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return D4(_)?"Compacting context":"Working..."}function yG(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Y=Math.floor($/3600);if(Y>0)return`${Y}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function I8(_,$=Date.now()){let j=TG(_);if(j===null)return null;return yG(Math.max(0,$-j))}function p5(_){return typeof _==="string"}function t7(_){return typeof _==="string"&&_.trim().length>0}function I$(_){if(!Array.isArray(_))return[];return _.filter(($)=>t7($?.chat_jid)&&t7($?.agent_name))}function e7(_){if(!Array.isArray(_))return[];return _.filter(($)=>p5($?.chat_jid)&&p5($?.agent_name))}function _9(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Z=new Map;if(Array.isArray(_)){for(let Q of _)if(p5(Q?.chat_jid))Z.set(Q.chat_jid,Q)}let Y=$.map((Q)=>{if(!p5(Q?.chat_jid))return Q;let K=Z.get(Q.chat_jid);return K?{...Q,...K,is_active:K.is_active??Q.is_active}:Q}),q=p5(j)?j:"";return Y.sort((Q,K)=>{if(Q.chat_jid===q&&K.chat_jid!==q)return-1;if(K.chat_jid===q&&Q.chat_jid!==q)return 1;let G=Boolean(Q.archived_at),N=Boolean(K.archived_at);if(G!==N)return G?1:-1;if(Boolean(Q.is_active)!==Boolean(K.is_active))return Q.is_active?-1:1;return String(Q.chat_jid).localeCompare(String(K.chat_jid))}),Y}var PG={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function $9(_){if(!_||typeof _!=="object")return PG;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function j9(_){let j=(Array.isArray(_)?_:[]).find((Z)=>Z?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function Z9(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Z=String(j),Y=_.agent_name,q=_.agent_avatar;if(!Y&&q===void 0)return null;let Q=$||{id:Z},K=Q.name||null,G=Q.avatar_url??Q.avatarUrl??Q.avatar??null,N=!1,X=!1;if(Y&&Y!==Q.name)K=Y,N=!0;if(q!==void 0){let V=typeof q==="string"?q.trim():null,U=typeof G==="string"?G.trim():null,L=V||null;if(L!==(U||null))G=L,X=!0}if(!N&&!X)return null;return{agentId:Z,nameChanged:N,avatarChanged:X,resolvedName:K,resolvedAvatar:G}}function Y9(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Z=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Y=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Z&&_.avatar_background===Y)return _;return{name:j,avatar_url:Z,avatar_background:Y}}function q9(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Z=$.user_avatar??$.userAvatar,Y=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Z===void 0&&Y===void 0)return _;let q=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Q=Z===void 0?_.avatar_url:typeof Z==="string"&&Z.trim()?Z.trim():null,K=Y===void 0?_.avatar_background:typeof Y==="string"&&Y.trim()?Y.trim():null;if(_.name===q&&_.avatar_url===Q&&_.avatar_background===K)return _;return{name:q,avatar_url:Q,avatar_background:K}}function CG(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function Q9(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Z=_.filter((Y)=>!j.has(Y?.id)&&!CG(Y));return Z.length===_.length?_:Z}function K9(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Z)=>({...Z})).filter((Z)=>!j.has(Z.row_id)):[]}function G9(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Z)=>j?.row_id===$[Z]?.row_id)}function A4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Z)=>Z?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function N9(_,$){let j=Array.isArray(_)?_:[],Z=$?.row_id,Y=$?.content;if(Z==null||typeof Y!=="string"||!Y.trim())return j;if(j.some((q)=>q?.row_id===Z))return j;return[...j,{row_id:Z,content:Y,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function X9(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function V9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y}=_;try{let q=await $();j(d7(q));let Q=q?.user||{};Z((G)=>Y9(G,Q));let K=j9(q?.agents);Y(K.name,K.avatarUrl)}catch(q){console.warn("Failed to load agents:",q)}}function U9(_){let{payload:$,agentsRef:j,setAgents:Z,applyBranding:Y}=_,q=Z9($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!q)return;if(Z((Q)=>{let G={...Q[q.agentId]||{id:q.agentId}};if(q.nameChanged)G.name=q.resolvedName;if(q.avatarChanged)G.avatar_url=q.resolvedAvatar;return{...Q,[q.agentId]:G}}),q.agentId==="default")Y(q.resolvedName,q.resolvedAvatar,q.avatarChanged?Date.now():null)}function L9(_){let{payload:$,setUserProfile:j}=_;j((Z)=>q9(Z,$))}function W9(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Z,setSupportsThinking:Y,setActiveModelUsage:q}=_,Q=$9($);if(Q.hasModel)j(Q.model);if(Q.hasThinkingLevel)Z(Q.thinkingLevel);if(Q.hasSupportsThinking)Y(Q.supportsThinking);if(Q.hasProviderUsage)q(Q.providerUsage)}function B9(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Z,applyModelState:Y}=_,q=$;j(q).then((Q)=>{if(Z.current!==q)return;if(Q)Y(Q)}).catch(()=>{})}function z9(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Z,activeChatJidRef:Y,setActiveChatAgents:q}=_,Q=$;Promise.all([j().catch(()=>({chats:[]})),Z(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([K,G])=>{if(Y.current!==Q)return;let N=I$(K?.chats),X=I$(G?.chats);q(_9(N,X,Q))}).catch(()=>{if(Y.current!==Q)return;q([])})}function H9(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Z}=_;j($).then((Y)=>{Z(e7(Y?.chats))}).catch(()=>{})}function F9(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshContextUsage:Y,refreshAutoresearchStatus:q,refreshQueueState:Q}=_;if(!$||typeof $!=="object")return;if(j(),Z(),Y(),q(),X9($))Q()}function x$(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function J9(_,$){let j=new Map(_),Z=x$($);if(typeof $?.key==="string"&&$.key&&Z)j.set($.key,Z);else j.delete("autoresearch");return j}function O9(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Z=new Map(_),Y=x$($);if($?.options?.remove||!Y)Z.delete(j);else Z.set(j,Y);return Z}function D9(_){if(_?.options?.remove)return!0;return x$(_)?.state!=="running"}function T$(_,$){return`${_}:${$}`}function A9(_,$,j){let Z=T$($,j);if(_.has(Z))return _;let Y=new Set(_);return Y.add(Z),Y}function E9(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function x8(_,$){if(_.size===0)return _;let j=`${$}:`,Z=new Set(Array.from(_).filter((Y)=>!String(Y).startsWith(j)));return Z.size===_.size?_:Z}async function k9(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Z=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Z)throw Error("No tmux command available.");return await _.writeClipboard(Z),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function p_(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function M9(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function y$(_,$){return _&&$}function I9(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function x9(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function T9(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Z=new Set(j),Y=_.filter((q)=>!Z.has(q?.id));return Y.length===_.length?_:Y}function y9(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Z,dismissedQueueRowIdsRef:Y,getAgentQueueState:q,setFollowupQueueItems:Q,clearQueuedSteerStateIfStale:K}=_,G=++j.current,N=$;q(N).then((X)=>{if(G!==j.current)return;if(Z.current!==N)return;let V=Y.current,U=K9(X?.items,V);if(U.length){Q((L)=>G9(L,U)?L:U);return}V.clear(),K(0),Q((L)=>L.length===0?L:[])}).catch(()=>{if(G!==j.current)return;if(Z.current!==N)return;Q((X)=>X.length===0?X:[])})}async function P9(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Z,setContextUsage:Y}=_,q=$;try{let Q=await Z(q);if(j.current!==q)return;if(Q)Y(Q)}catch(Q){if(j.current!==q)return;console.warn("Failed to fetch agent context:",Q)}}async function C9(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Z,setExtensionStatusPanels:Y,setPendingExtensionPanelActions:q}=_,Q=$;try{let K=await Z(Q);if(j.current!==Q)return;Y((G)=>J9(G,K)),q((G)=>x8(G,"autoresearch"))}catch(K){if(j.current!==Q)return;console.warn("Failed to fetch autoresearch status:",K)}}function S9(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshQueueState:Y,refreshContextUsage:q,refreshAutoresearchStatus:Q}=_;$(),j(),Z(),Y(),q(),Q()}function w9(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Z}=_;if(p_($.current))j();Z()}function R9(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Z,minWidth:Y=160,maxWidth:q=600,fallbackWidth:Q=280}=_,K=$("sidebarWidth",null),G=Number.isFinite(K)?Math.min(Math.max(Number(K),Y),q):Q;if(j.current=G,Z)Z.style.setProperty("--sidebar-width",`${G}px`);return G}async function u9(_){let{currentHashtag:$,searchQuery:j,searchScope:Z,currentChatJid:Y,currentRootChatJid:q,loadPosts:Q,searchPosts:K,setPosts:G,setHasMore:N,scrollToBottom:X,isCancelled:V,scheduleRaf:U=(O)=>requestAnimationFrame(O),scheduleTimeout:L=(O,F)=>{setTimeout(O,F)}}=_,H=()=>{if(V())return;U(()=>{if(V())return;L(()=>{if(V())return;X()},0)})};if($){await Q($);return}if(j){try{let O=await K(j,50,0,Y,Z,q);if(V())return;G(Array.isArray(O?.results)?O.results:[]),N(!1)}catch(O){if(V())return;console.error("Failed to search:",O),G([]),N(!1)}return}try{await Q(),H()}catch(O){if(V())return;console.error("Failed to load timeline:",O)}}function SG(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,refreshQueueState:q,intervalMs:Q=60000,scheduleInterval:K=(X,V)=>setInterval(X,V),clearScheduledInterval:G=(X)=>clearInterval(X)}=_;$();let N=K(()=>{j(),Z(),Y(),q()},Q);return()=>{G(N)}}function v9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y,readStoredNumber:q,sidebarWidthRef:Q,appShellRef:K,currentChatJid:G,currentRootChatJid:N,getAgentModels:X,getActiveChatAgents:V,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:H,setCurrentChatBranches:O,setActiveModel:F,setActiveThinkingLevel:W,setSupportsThinking:D,setActiveModelUsage:E,agentsRef:S,refreshQueueState:P,refreshContextUsage:b,refreshAutoresearchStatus:h}=_,I=T(async()=>{await V9({getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Y})},[Y,$,j,Z]);g(()=>{I(),R9({readStoredNumber:q,sidebarWidthRef:Q,shellElement:K.current})},[K,I,q,Q]);let M=T((d)=>{U9({payload:d,agentsRef:S,setAgents:j,applyBranding:Y})},[S,Y,j]),B=T((d)=>{L9({payload:d,setUserProfile:Z})},[Z]),k=T((d)=>{W9({payload:d,setActiveModel:F,setActiveThinkingLevel:W,setSupportsThinking:D,setActiveModelUsage:E})},[F,E,W,D]),w=T(()=>{B9({currentChatJid:G,getAgentModels:X,activeChatJidRef:L,applyModelState:k})},[L,k,G,X]),l=T(()=>{z9({currentChatJid:G,getActiveChatAgents:V,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:H})},[L,G,V,U,H]),f=T(()=>{H9({currentRootChatJid:N,getChatBranches:U,setCurrentChatBranches:O})},[N,U,O]),n=T(()=>{S9({refreshModelState:w,refreshActiveChatAgents:l,refreshCurrentChatBranches:f,refreshQueueState:P,refreshContextUsage:b,refreshAutoresearchStatus:h})},[l,h,b,f,w,P]);return g(()=>SG({refreshModelAndQueueState:n,refreshModelState:w,refreshActiveChatAgents:l,refreshCurrentChatBranches:f,refreshQueueState:P}),[l,f,n,w,P]),{updateAgentProfile:M,updateUserProfile:B,applyModelState:k,refreshModelState:w,refreshActiveChatAgents:l,refreshCurrentChatBranches:f,refreshModelAndQueueState:n}}function f9(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function b9(_){return String(_||"").trim()||"web:default"}function g9(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function m9(_){if(!_)return!1;return _.status!=="running"}function p9(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function h9(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function c9(_){let{question:$,currentChatJid:j,streamSidePrompt:Z,resolveBtwChatJid:Y,showIntentToast:q,btwAbortRef:Q,setBtwSession:K}=_,G=String($||"").trim();if(!G)return q("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Q.current)Q.current.abort();let N=new AbortController;Q.current=N,K({question:G,answer:"",thinking:"",error:null,model:null,status:"running"});try{let X=await Z(G,{signal:N.signal,chatJid:Y(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(V)=>{if(V==="side_prompt_start")K((U)=>U?{...U,status:"running"}:U)},onThinkingDelta:(V)=>{K((U)=>U?{...U,thinking:`${U.thinking||""}${V||""}`}:U)},onTextDelta:(V)=>{K((U)=>U?{...U,answer:`${U.answer||""}${V||""}`}:U)}});if(Q.current!==N)return!0;K((V)=>V?{...V,answer:X?.result||V.answer||"",thinking:X?.thinking||V.thinking||"",model:X?.model||null,status:"success",error:null}:V)}catch(X){if(N.signal.aborted)return!0;K((V)=>V?{...V,status:"error",error:X?.payload?.error||X?.message||"BTW request failed."}:V)}finally{if(Q.current===N)Q.current=null}return!0}async function l9(_){let{content:$,parseBtwCommand:j,closeBtwPanel:Z,runBtwPrompt:Y,showIntentToast:q}=_,Q=j($);if(!Q)return!1;if(Q.type==="help")return q("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Q.type==="clear")return Z(),q("BTW cleared","Closed the side conversation panel.","info"),!0;if(Q.type==="ask")return await Y(Q.question),!0;return!1}async function n9(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:Z,currentChatJid:Y,sendAgentMessage:q,handleMessageResponse:Q,showIntentToast:K}=_,G=j($);if(!G)return!1;try{let N=await q("default",G,null,[],Z?"queue":null,Y);return Q(N),K(N?.queued==="followup"?"BTW queued":"BTW injected",N?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(N){return K("BTW inject failed",N?.message||"Could not inject BTW answer into chat.","warning"),!1}}function wG(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Y=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Y?{kind:j,html:Y}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function RG(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",q=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(q==="svg")return j?{kind:q,svg:j}:{kind:q};return Z?{kind:q,html:Z}:{kind:q}}function E4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function v0(_){return typeof _==="string"&&_.trim()?_.trim():null}function i9(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Y)=>typeof Y==="string").map((Y)=>Y.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var r9="__PICLAW_WIDGET_HOST__:";function d9(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function P$(_,$){if(!_||_.type!=="generated_widget")return null;let j=wG(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:i9(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function o9(_){if(!_||typeof _!=="object")return null;let $=RG(_),j=v0(_?.widget_id)||v0(_?.widgetId)||v0(_?.tool_call_id)||v0(_?.toolCallId),Z=v0(_?.tool_call_id)||v0(_?.toolCallId),Y=v0(_?.turn_id)||v0(_?.turnId),q=v0(_?.title)||v0(_?.name)||"Generated widget",Q=v0(_?.subtitle)||"",K=v0(_?.description)||Q,G=v0(_?.status),N=G==="loading"||G==="streaming"||G==="final"||G==="error"?G:"streaming";return{title:q,subtitle:Q,description:K,originPostId:E4(_?.origin_post_id)??E4(_?.originPostId),originChatJid:v0(_?.origin_chat_jid)||v0(_?.originChatJid)||v0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:i9(_?.capabilities,!0),source:"live",status:N,turnId:Y,toolCallId:Z,width:E4(_?.width),height:E4(_?.height),error:v0(_?.error)}}function s9(_){return P$(_,null)!==null}function U_(_){let $=v0(_?.toolCallId)||v0(_?.tool_call_id);if($)return $;let j=v0(_?.widgetId)||v0(_?.widget_id);if(j)return j;let Z=E4(_?.originPostId)??E4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function a9(_){let j=(_?.artifact||{}).kind||_?.kind||null,Y=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((q)=>typeof q==="string"&&q.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Y)}function t9(_){return a9(_)?"allow-downloads allow-scripts":"allow-downloads"}function T8(_){return{title:v0(_?.title)||"Generated widget",widgetId:v0(_?.widgetId)||v0(_?.widget_id),toolCallId:v0(_?.toolCallId)||v0(_?.tool_call_id),turnId:v0(_?.turnId)||v0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:v0(_?.status)||"final"}}function y8(_){return{...T8(_),subtitle:v0(_?.subtitle)||"",description:v0(_?.description)||"",error:v0(_?.error)||null,width:E4(_?.width),height:E4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function P8(_){return`${r9}${JSON.stringify(y8(_))}`}function e9(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=v0(_.text)||v0(_.content)||v0(_.message)||v0(_.prompt)||v0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=v0(j.text)||v0(j.content)||v0(j.message)||v0(j.prompt)||v0(j.value);if(Z)return Z}return null}function _j(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function $j(_){let $=v0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return v0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function uG(_){let $=T8(_);return`<script>
(function () {
  const meta = ${d9($)};
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

  const windowNamePrefix = ${d9(r9)};
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
</script>`}function jj(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Y=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Q=j==="svg"?Y:Z;if(!Q)return"";let K=a9(_),G=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",K?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),N=j==="svg"?`<div class="widget-svg-shell">${Q}</div>`:Q,X=K?uG(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${G}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${q.replace(/[<&>]/g,"")}</title>
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
${X}
</head>
<body>${N}</body>
</html>`}function vG(_,$){let j=U_(_);return Boolean(_&&j===$)}function V5(_,$,j){if(!vG(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function Zj(_,$){return{..._,openedAt:$}}function Yj(_){let $=U_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function qj(_,$,j){let Z=o9({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Z)return _;let Y=U_(Z);if(Y&&j.dismissedSessionKeys?.has(Y))return _;let q=U_(_),Q=Boolean(Y&&q&&Y===q),K={...Q&&_?.artifact?_.artifact:{},...Z.artifact||{}};return{...Q&&_?_:{},...Z,artifact:K,source:"live",originChatJid:Z.originChatJid||j.currentChatJid,openedAt:Q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function Qj(_,$){if(!_||_?.source!=="live")return _||null;let j=U_($),Z=U_(_);if(j&&Z&&j!==Z)return _;return null}function Kj(_,$,j){return V5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function C$(_,$,j){if(j.errorMessage)return V5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return V5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function Gj(_,$,j){return V5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function Nj(_,$,j){return V5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function Xj(_,$,j){return V5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function U5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Z=A4(_,j);return{rowId:j,items:Z.items,remainingQueueCount:Z.remainingQueueCount}}function S$(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function k4(_){return _.status==="fulfilled"?_.value:null}function C8(_){return Math.max(0,Math.min(100,_))}function Vj(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Z=$.filter((F)=>F?.data?.is_bot_message).length,Y=$.filter((F)=>!F?.data?.is_bot_message).length,q=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,K=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,G=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,N=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,X=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,U=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,L=_.modelsPayload?.supports_thinking??_.supportsThinking,H=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),O=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Q,branches:K},agent:{status:H,phase:O,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:U,supportsThinking:Boolean(L)},context:{tokens:N,contextWindow:X,percent:G},queue:{count:q},timeline:{loadedPosts:$.length,botPosts:Z,userPosts:Y,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:C8(Math.round(G))},{key:"queue",label:"Queue",value:C8(q*18)},{key:"activeChats",label:"Active chats",value:C8(Q*12)},{key:"posts",label:"Timeline load",value:C8($.length*5)}]}}function Uj(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function Lj(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function Wj(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function Bj(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function zj(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function Hj(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function Fj(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Z,getAgentStatus:Y,getAgentContext:q,getAgentQueueState:Q,getAgentModels:K,getActiveChatAgents:G,getChatBranches:N,getTimeline:X,rawPosts:V,activeChatAgents:U,currentChatBranches:L,contextUsage:H,followupQueueItems:O,activeModel:F,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E}=_,[S,P,b,h,I,M,B]=await Promise.allSettled([Y(j),q(j),Q(j),K(j),G(),N(Z),X(20,null,j)]);return Vj({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Z,statusPayload:k4(S),contextPayload:k4(P),queuePayload:k4(b),modelsPayload:k4(h),activeChatsPayload:k4(I),branchesPayload:k4(M),timelinePayload:k4(B),rawPosts:V,activeChatAgents:U,currentChatBranches:L,contextUsage:H,followupQueueItems:O,activeModel:F,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E})}function Jj(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Y,refreshQueueState:q,setFollowupQueueItems:Q,showIntentToast:K,steerAgentQueueItem:G}=_,N=U5(j.current,$);if(!N)return;let{rowId:X}=N;Z.current.add(X),Q((V)=>A4(V,X).items),G(X,M$(Y)).then(()=>{q()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let U=S$("steer");K(U.title,U.detail,"warning"),Z.current.delete(X),q()})}function Oj(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Y,refreshQueueState:q,setFollowupQueueItems:Q,showIntentToast:K,clearQueuedSteerStateIfStale:G,removeAgentQueueItem:N}=_,X=U5(j.current,$);if(!X)return;let{rowId:V}=X;Z.current.add(V),G?.(X.remainingQueueCount),Q((U)=>A4(U,V).items),N(V,M$(Y)).then(()=>{q()}).catch((U)=>{console.warn("[queue] Failed to remove queued item:",U);let L=S$("remove");K(L.title,L.detail,"warning"),Z.current.delete(V),q()})}function Dj(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Z}=_;if(!$||typeof $!=="object")return;let Y=U_($);if(Y)j.current.delete(Y);Z(Zj($,new Date().toISOString()))}function Aj(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Z)=>{let Y=Yj(Z);if(Y.dismissedSessionKey)$.current.add(Y.dismissedSessionKey);return Y.nextWidget})}function Ej(_){let{event:$,widget:j,currentChatJid:Z,isComposeBoxAgentActive:Y,setFloatingWidget:q,handleCloseFloatingWidget:Q,handleMessageResponse:K,showIntentToast:G,sendAgentMessage:N,buildFloatingWidgetDashboardSnapshot:X}=_,V=typeof $?.kind==="string"?$.kind:"",U=U_(j);if(!V||!U)return;if(V==="widget.close"){Q();return}if(V==="widget.submit"){let L=e9($?.payload),H=_j($?.payload),O=new Date().toISOString();if(q((F)=>Kj(F,U,{kind:V,payload:$?.payload||null,submittedAt:O,submissionText:L})),!L){if(G("Widget submission received","The widget submitted data without a message payload yet.","info",3500),H)Q();return}(async()=>{try{let F=await N("default",L,null,[],Y?"queue":null,Z);K(F),q((D)=>C$(D,U,{submittedAt:O,submissionText:L,queued:F?.queued||null}));let W=Uj(F?.queued);if(G(W.title,W.detail,W.kind,W.durationMs),H)Q()}catch(F){q((D)=>C$(D,U,{submittedAt:O,submissionText:L,errorMessage:F?.message||"Could not send the widget message."}));let W=Lj(F?.message);G(W.title,W.detail,W.kind,W.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let L=new Date().toISOString(),H=Wj($?.payload||null,j?.runtimeState?.refreshCount);if(q((O)=>Gj(O,U,{kind:V,payload:$?.payload||null,eventAt:L,nextRefreshCount:H.nextRefreshCount,shouldBuildDashboard:H.shouldBuildDashboard})),V==="widget.request_refresh")if(H.shouldBuildDashboard)(async()=>{try{let O=await X($?.payload||null);q((W)=>Nj(W,U,{dashboard:O,at:new Date().toISOString(),count:H.nextRefreshCount,echo:$?.payload||null}));let F=Bj();G(F.title,F.detail,F.kind,F.durationMs)}catch(O){q((W)=>Xj(W,U,{errorMessage:O?.message||"Could not build dashboard.",at:new Date().toISOString(),count:H.nextRefreshCount}));let F=zj(O?.message);G(F.title,F.detail,F.kind,F.durationMs)}})();else{let O=Hj();G(O.title,O.detail,O.kind,O.durationMs)}}}function fG(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function kj(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:Z,showIntentToast:Y,setPendingExtensionPanelActions:q,refreshAutoresearchStatus:Q,stopAutoresearch:K,dismissAutoresearch:G,streamSidePrompt:N,btwAbortRef:X,btwSession:V,setBtwSession:U,sendAgentMessage:L,handleMessageResponse:H,dismissedLiveWidgetKeysRef:O,setFloatingWidget:F,getAgentStatus:W,getAgentContext:D,getAgentQueueState:E,getAgentModels:S,getActiveChatAgents:P,getChatBranches:b,getTimeline:h,rawPosts:I,activeChatAgents:M,currentChatBranches:B,contextUsage:k,followupQueueItemsRef:w,activeModel:l,activeThinkingLevel:f,supportsThinking:n,isAgentTurnActive:d}=_,s=T(async(B0,M0)=>{let w0=typeof B0?.key==="string"?B0.key:"",H0=typeof M0?.key==="string"?M0.key:"",y0=T$(w0,H0);if(!w0||!H0)return;q((Y0)=>A9(Y0,w0,H0));try{let Y0=await k9({panel:B0,action:M0,currentChatJid:$,stopAutoresearch:K,dismissAutoresearch:G,writeClipboard:(D0)=>navigator.clipboard.writeText(D0)});if(Y0.refreshAutoresearchStatus)Q();if(Y0.toast)Y(Y0.toast.title,Y0.toast.detail,Y0.toast.kind,Y0.toast.durationMs)}catch(Y0){Y("Panel action failed",Y0?.message||"Could not complete that action.","warning")}finally{q((Y0)=>E9(Y0,y0))}},[$,G,Q,q,Y,K]),e=T(()=>{h9({btwAbortRef:X,setBtwSession:U})},[X,U]),a=T(async(B0)=>{return await c9({question:B0,currentChatJid:$,streamSidePrompt:N,resolveBtwChatJid:b9,showIntentToast:Y,btwAbortRef:X,setBtwSession:U})},[X,$,U,Y,N]),q0=T(async({content:B0})=>{return await l9({content:B0,parseBtwCommand:f9,closeBtwPanel:e,runBtwPrompt:a,showIntentToast:Y})},[e,a,Y]),G0=T(()=>{if(V?.question)a(V.question)},[V,a]),N0=T(async()=>{await n9({btwSession:V,buildBtwInjectionText:p9,isComposeBoxAgentActive:Z,currentChatJid:$,sendAgentMessage:L,handleMessageResponse:H,showIntentToast:Y})},[V,$,H,Z,L,Y]),I0=T(async(B0=null)=>{return Fj({requestPayload:B0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:W,getAgentContext:D,getAgentQueueState:E,getAgentModels:S,getActiveChatAgents:P,getChatBranches:b,getTimeline:h,rawPosts:I,activeChatAgents:M,currentChatBranches:B,contextUsage:k,followupQueueItems:w.current,activeModel:l,activeThinkingLevel:f,supportsThinking:n,isAgentTurnActive:d})},[M,l,f,k,B,$,j,w,P,D,S,E,W,b,h,d,I,n]),F0=T((B0)=>{Dj({widget:B0,dismissedLiveWidgetKeysRef:O,setFloatingWidget:F})},[O,F]),V0=T(()=>{Aj({dismissedLiveWidgetKeysRef:O,setFloatingWidget:F})},[O,F]),P0=T((B0,M0)=>{Ej({event:B0,widget:M0,currentChatJid:$,isComposeBoxAgentActive:Z,setFloatingWidget:F,handleCloseFloatingWidget:V0,handleMessageResponse:H,showIntentToast:Y,sendAgentMessage:L,buildFloatingWidgetDashboardSnapshot:I0})},[I0,$,V0,H,Z,L,F,Y]);return g(()=>{fG({dismissedLiveWidgetKeysRef:O,setFloatingWidget:F})},[$,O,F]),{handleExtensionPanelAction:s,closeBtwPanel:e,handleBtwIntercept:q0,handleBtwRetry:G0,handleBtwInject:N0,handleOpenFloatingWidget:F0,handleCloseFloatingWidget:V0,handleFloatingWidgetEvent:P0}}function Mj(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function w$(_,$){if(typeof $!=="string")return Array.isArray(_)?_:[];let j=$.trim();if(!j)return Array.isArray(_)?_:[];let Z=Array.isArray(_)?_:[];if(Z.includes(j))return Z;return[...Z,j]}function R$(_,$){let j=Array.isArray(_)?_:[];if(typeof $!=="string")return j;let Z=$.trim();if(!Z)return j;if(!j.includes(Z))return j;return j.filter((Y)=>Y!==Z)}function u$(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Z of _){if(typeof Z!=="string")continue;let Y=Z.trim();if(!Y||j.has(Y))continue;j.add(Y),$.push(Y)}return $}async function Ij(_){let{hashtag:$,setCurrentHashtag:j,setPosts:Z,loadPosts:Y}=_;j($),Z(null),await Y($)}async function xj(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:Z,loadPosts:Y}=_;$(null),j(null),Z(null),await Y()}async function Tj(_){let{query:$,scope:j,currentChatJid:Z,currentRootChatJid:Y,searchPosts:q,setSearchScope:Q,setSearchQuery:K,setCurrentHashtag:G,setPosts:N,setHasMore:X}=_,V=typeof $==="string"?$.trim():"";if(!V)return;let U=j==="root"||j==="all"?j:"current";Q(U),K(V),G(null),N(null);try{let L=await q(V,50,0,Z,U,Y);N(Array.isArray(L?.results)?L.results:[]),X(!1)}catch(L){console.error("Failed to search:",L),N([])}}async function yj(_){let{post:$,posts:j,currentChatJid:Z,deletePost:Y,preserveTimelineScrollTop:q,setPosts:Q,setRemovingPostIds:K,hasMoreRef:G,loadMoreRef:N,confirm:X=(W)=>window.confirm(W),showAlert:V=(W)=>alert(W),scheduleTimeout:U=(W,D)=>{setTimeout(W,D)}}=_;if(!$)return;let L=$.id,H=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():Z,O=j?.filter((W)=>W?.data?.thread_id===L&&W?.id!==L).length||0;if(O>0){if(!X(`Delete this message and its ${O} replies?`))return}let F=(W)=>{if(!W.length)return;K((D)=>{let E=new Set(D);return W.forEach((S)=>E.add(S)),E}),U(()=>{if(q(()=>{Q((D)=>D?D.filter((E)=>!W.includes(E.id)):D)}),K((D)=>{let E=new Set(D);return W.forEach((S)=>E.delete(S)),E}),G.current)N.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let W=await Y(L,O>0,H);if(W?.ids?.length)F(W.ids)}catch(W){let D=W instanceof Error?W.message:String(W||"");if(O===0&&D.includes("Replies exist")){if(!X("Delete this message and its replies?"))return;let S=await Y(L,!0,H);if(S?.ids?.length)F(S.ids);return}console.error("Failed to delete post:",W),V(`Failed to delete message: ${D}`)}}async function Pj(_){let{id:$,targetChatJid:j,currentChatJid:Z,getThread:Y,setPosts:q,getElementById:Q=(V)=>document.getElementById(V),scheduleRaf:K=(V)=>requestAnimationFrame(V),scheduleTimeout:G=(V,U)=>{setTimeout(V,U)}}=_,N=(V)=>{V.scrollIntoView({behavior:"smooth",block:"center"}),V.classList.add("post-highlight"),G(()=>V.classList.remove("post-highlight"),2000)},X=Q(`post-${$}`);if(X){N(X);return}try{let V=typeof j==="string"&&j.trim()?j.trim():Z,L=(await Y($,V))?.thread?.[0];if(!L)return;q((H)=>{if(!H)return[L];if(H.some((O)=>O.id===L.id))return H;return[...H,L]}),K(()=>{G(()=>{let H=Q(`post-${$}`);if(H)N(H)},50)})}catch(V){console.error("[scrollToMessage] Failed to fetch message",$,V)}}function bG(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function Cj(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:Z,openEditor:Y,resolvePane:q,tabStripActiveId:Q,setFileRefs:K,setMessageRefs:G,currentChatJid:N,getThread:X,setPosts:V}=_,U=T(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);g(()=>{return()=>{U()}},[U]);let L=T((B)=>{K((k)=>w$(k,B))},[K]),H=T((B)=>{K((k)=>R$(k,B))},[K]),O=T(()=>{K([])},[K]),F=T((B)=>{K(u$(B))},[K]),W=T((B,k=null,w="info",l=3000)=>{U(),$({title:B,detail:k||null,kind:w||"info"}),j.current=setTimeout(()=>{$((f)=>f?.title===B?null:f)},l)},[U,j,$]),D=T((B)=>{let k=Mj(B,{editorOpen:Z,resolvePane:q});if(k.kind==="open"){Y(k.path);return}if(k.kind==="toast")W(k.title,k.detail,k.level)},[Z,Y,q,W]),E=T(()=>{let B=Q;if(B)L(B)},[L,Q]),S=T((B)=>{G((k)=>w$(k,B))},[G]),P=T(async(B,k=null)=>{await Pj({id:B,targetChatJid:k,currentChatJid:N,getThread:X,setPosts:V})},[N,X,V]),b=T((B)=>{G((k)=>R$(k,B))},[G]),h=T(()=>{G([])},[G]),I=T((B)=>{G(u$(B))},[G]),M=T((B)=>{W("Compose failed",bG(B),"error",5000)},[W]);return{clearIntentToast:U,addFileRef:L,removeFileRef:H,clearFileRefs:O,setFileRefsFromCompose:F,showIntentToast:W,openFileFromPill:D,attachActiveEditorFile:E,addMessageRef:S,scrollToMessage:P,removeMessageRef:b,clearMessageRefs:h,setMessageRefsFromCompose:I,handleComposeSubmitError:M}}function gG(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j}=_;$(new Map),j(new Set)}function Sj(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:Z,searchQuery:Y,searchScope:q,loadPosts:Q,searchPosts:K,setPosts:G,setHasMore:N,scrollToBottom:X,setExtensionStatusPanels:V,setPendingExtensionPanelActions:U,paneStateOwnerChatJidRef:L,chatPaneStateByChatRef:H,snapshotCurrentChatPaneState:O,restoreChatPaneState:F,dismissedQueueRowIdsRef:W,refreshQueueState:D,refreshAgentStatus:E,refreshContextUsage:S,viewStateRef:P,refreshTimeline:b,refreshModelAndQueueState:h,setFloatingWidget:I,dismissedLiveWidgetKeysRef:M}=_;g(()=>{gG({setExtensionStatusPanels:V,setPendingExtensionPanelActions:U})},[$,V,U]),g(()=>{let w=!1;return u9({currentHashtag:Z,searchQuery:Y,searchScope:q,currentChatJid:$,currentRootChatJid:j,loadPosts:Q,searchPosts:K,setPosts:G,setHasMore:N,scrollToBottom:X,isCancelled:()=>w}),()=>{w=!0}},[$,Z,Y,q,j,Q,X,K,N,G]),g(()=>{let w=L.current||$;H.current.set(w,O())},[H,$,L,O]),g(()=>{let w=L.current||$;if(w===$)return;H.current.set(w,O()),L.current=$,W.current.clear(),F(H.current.get($)||null),D(),E(),S()},[H,$,W,L,E,S,D,F,O]);let B=T(()=>{w9({viewStateRef:P,refreshTimeline:b,refreshModelAndQueueState:h})},[h,b,P]),k=T((w,l="streaming")=>{let f=new Date().toISOString();I((n)=>qj(n,w,{fallbackStatus:l,currentChatJid:$,dismissedSessionKeys:M.current,updatedAt:f}))},[$,M,I]);return{refreshCurrentView:B,applyLiveGeneratedWidgetUpdate:k}}function wj({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Y}){let q=y(_);q.current=_;let Q=y($);Q.current=$;let K=y(j);K.current=j;let G=y(Z);G.current=Z,g(()=>{let N=new X8((V,U)=>q.current(V,U),(V)=>Q.current(V),{chatJid:Y});N.connect();let X=()=>{N.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")G.current?.()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),N.disconnect()}},[Y])}function mG(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function S8(_,$){return{text:_,totalLines:mG(_,$)}}function v$(_,$){return{text:$?.text||"",totalLines:o7(_),fullText:_}}function Rj(_,$,j){return j==="replace"?$:`${_||""}${$}`}function uj(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function vj(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function m4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function L5(_,$){return Boolean(_)&&!Boolean($)}function fj(_,$){return _||$||null}function w8(_){return _?.turn_id||_?.turnId||null}function W5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function f$(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function bj(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function pG(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function gj(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:pG($,j),panelKey:typeof $?.key==="string"?$.key:""}}function mj(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var hG=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function pj(_){return hG.has(String(_||"").trim())}function cG(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function b$(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(cG(_),{detail:Z})),!0}function hj(_,$,j){let Z=$?.turn_id,Y=$?.chat_jid,q=typeof Y==="string"&&Y.trim()?Y.trim():null,Q=_==="connected"||_==="workspace_update";return{turnId:Z,eventChatJid:q,isGlobalUiEvent:Q,isCurrentChatEvent:q?q===j:Q}}function cj(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function lj(_,$,j){let{currentChatJid:Z,updateAgentProfile:Y,updateUserProfile:q,currentTurnIdRef:Q,activeChatJidRef:K,pendingRequestRef:G,draftBufferRef:N,thoughtBufferRef:X,steerQueuedTurnIdRef:V,thoughtExpandedRef:U,draftExpandedRef:L,draftThrottleRef:H,thoughtThrottleRef:O,viewStateRef:F,followupQueueItemsRef:W,dismissedQueueRowIdsRef:D,scrollToBottomRef:E,hasMoreRef:S,loadMoreRef:P,lastAgentResponseRef:b,wasAgentActiveRef:h,setActiveTurn:I,applyLiveGeneratedWidgetUpdate:M,setFloatingWidget:B,clearLastActivityFlag:k,handleUiVersionDrift:w,setAgentStatus:l,setAgentDraft:f,setAgentPlan:n,setAgentThought:d,setPendingRequest:s,clearAgentRunState:e,getAgentStatus:a,noteAgentActivity:q0,showLastActivity:G0,refreshTimeline:N0,refreshModelAndQueueState:I0,refreshActiveChatAgents:F0,refreshCurrentChatBranches:V0,notifyForFinalResponse:P0,setContextUsage:B0,refreshContextUsage:M0,refreshQueueState:w0,setFollowupQueueItems:H0,clearQueuedSteerStateIfStale:y0,setSteerQueuedTurnId:Y0,applyModelState:D0,getAgentContext:f0,setExtensionStatusPanels:h0,setPendingExtensionPanelActions:U1,refreshActiveEditorFromWorkspace:a0,showIntentToast:m0,removeStalledPost:p0,setPosts:o0,preserveTimelineScrollTop:s0}=j,{turnId:U0,isCurrentChatEvent:R0}=hj(_,$,Z);if(R0)Y($),q($);if(_==="ui_theme"){Y7($);return}let _1=bj(_);if(_1.kind==="update"){if(!R0)return;if(_1.shouldAdoptTurn&&L5(U0,Q.current))I(U0);M($,_1.fallbackStatus||"streaming");return}if(_1.kind==="close"){if(!R0)return;B((p)=>Qj(p,$));return}if(_?.startsWith("agent_")&&!cj(_))k();if(_==="connected"){if(w($?.app_asset_version))return;l(null),f({text:"",totalLines:0}),n(""),d({text:"",totalLines:0}),s(null),G.current=null,e();let p=Z;if(a(p).then((i)=>{if(K.current!==p)return;if(!i||i.status!=="active"||!i.data)return;let J0=i.data,k0=w8(J0);if(k0)I(k0);q0({clearSilence:!0}),G0(J0);let x0=W5(i.thought);if(x0)X.current=x0.text,d(x0);let X0=W5(i.draft);if(X0)N.current=X0.text,f(X0)}).catch((i)=>{console.warn("Failed to fetch agent status:",i)}),p_(F.current))N0();I0();return}if(_==="agent_status"){if(!R0){if($?.type==="done"||$?.type==="error")F0(),V0();return}if($.type==="done"||$.type==="error"){if(m4(U0,Q.current))return;if($.type==="done"){if(P0(U0||Q.current),p_(F.current))N0();if($.context_usage)B0($.context_usage)}if(M0(),h.current=!1,e(),D.current.clear(),F0(),w0(),f({text:"",totalLines:0}),n(""),d({text:"",totalLines:0}),s(null),$.type==="error")l({type:"error",title:$.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(U0)I(U0);if(q0({running:!0,clearSilence:!0}),$.type==="thinking")N.current="",X.current="",f({text:"",totalLines:0}),n(""),d({text:"",totalLines:0});l((p)=>{if(p&&p.type===$.type&&p.title===$.title)return p;return $})}return}if(_==="agent_steer_queued"){if(!R0)return;if(m4(U0,Q.current))return;let p=fj(U0,Q.current);if(!p)return;V.current=p,Y0(p);return}if(_==="agent_followup_queued"){if(!R0)return;H0((p)=>N9(p,$)),w0();return}if(_==="agent_followup_consumed"){if(!R0)return;let p=U5(W.current,$);if(p)y0(p.remainingQueueCount),H0((i)=>A4(i,p.rowId).items);if(w0(),p_(F.current))N0();return}if(_==="agent_followup_removed"){if(!R0)return;let p=U5(W.current,$);if(p)D.current.add(p.rowId),y0(p.remainingQueueCount),H0((i)=>A4(i,p.rowId).items);w0();return}if(_==="agent_draft_delta"){if(!R0)return;if(m4(U0,Q.current))return;if(L5(U0,Q.current))I(U0);q0({running:!0,clearSilence:!0}),N.current=uj(N.current,$);let p=Date.now();if(!H.current||p-H.current>=100){H.current=p;let i=N.current;if(L.current)f((J0)=>v$(i,J0));else f(S8(i,null))}return}if(_==="agent_draft"){if(!R0)return;if(m4(U0,Q.current))return;if(L5(U0,Q.current))I(U0);q0({running:!0,clearSilence:!0});let p=$.text||"",i=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")n((J0)=>Rj(J0,p,i));else if(!L.current)N.current=p,f(S8(p,$.total_lines));return}if(_==="agent_thought_delta"){if(!R0)return;if(m4(U0,Q.current))return;if(L5(U0,Q.current))I(U0);q0({running:!0,clearSilence:!0}),X.current=vj(X.current,$);let p=Date.now();if(U.current&&(!O.current||p-O.current>=100)){O.current=p;let i=X.current;d((J0)=>v$(i,J0))}return}if(_==="agent_thought"){if(!R0)return;if(m4(U0,Q.current))return;if(L5(U0,Q.current))I(U0);q0({running:!0,clearSilence:!0});let p=$.text||"";if(!U.current)X.current=p,d(S8(p,$.total_lines));return}if(_==="model_changed"){if(!R0)return;D0($);let p=Z;f0(p).then((i)=>{if(K.current!==p)return;if(i)B0(i)}).catch(()=>{});return}let o=gj(_,$,Z);if(o.isStatusPanelWidgetEvent){if(o.eventChatJid!==Z)return;if(!o.panelKey)return;if(h0((p)=>O9(p,$)),D9($))U1((p)=>x8(p,o.panelKey));b$(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));a0($?.updates);return}if(pj(_)){if(!R0)return;b$(_,$);let p=mj(_,$);if(p)m0(p.title,p.detail,p.kind,p.durationMs);return}let K0=p_(F.current);if(_==="agent_response"){if(!R0)return;p0(),b.current={post:$,turnId:Q.current}}if(M9(_,R0,K0))o0((p)=>I9(p,$)),E.current?.();if(_==="interaction_updated"){if(!y$(R0,K0))return;o0((p)=>x9(p,$))}if(_==="interaction_deleted"){if(!y$(R0,K0))return;let p=$?.ids||[];if(p.length){if(s0(()=>{o0((i)=>T9(i,p))}),S.current)P.current?.({preserveScroll:!0,preserveMode:"top"})}}}function nj(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Z,staleUiReloadScheduledRef:Y,tabStoreHasUnsaved:q,isAgentRunningRef:Q,pendingRequestRef:K,showIntentToast:G}=_,N=typeof $==="string"&&$.trim()?$.trim():null;if(!N||!j||N===j)return!1;if(Z.current===N)return!0;Z.current=N;let X=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!q()&&!X&&!Q.current&&!K.current&&!Y.current)return Y.current=!0,G("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Y.current=!1}},350),!0;return G("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function g$(_){let{currentHashtag:$,searchQuery:j,searchOpen:Z}=_||{};return!$&&!j&&!Z}function dj(_){let{status:$,setConnectionStatus:j,setAgentStatus:Z,setAgentDraft:Y,setAgentPlan:q,setAgentThought:Q,setPendingRequest:K,pendingRequestRef:G,clearAgentRunState:N,hasConnectedOnceRef:X,viewStateRef:V,refreshTimeline:U,refreshAgentStatus:L,refreshQueueState:H,refreshContextUsage:O}=_;if(j($),$!=="connected"){Z(null),Y({text:"",totalLines:0}),q(""),Q({text:"",totalLines:0}),K(null),G.current=null,N();return}if(!X.current){if(X.current=!0,g$(V.current))U();L(),H(),O();return}if(g$(V.current))U();L(),H(),O()}function ij(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Z,refreshQueueState:Y,refreshAgentStatus:q,refreshContextUsage:Q,refreshAutoresearchStatus:K}=_,G=g$($.current);if(j){if(G)Z();Y(),q(),Q(),K();return}if(G)Z();q(),Q(),K()}var lG=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function rj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Y=()=>{_(Z4({window:j,navigator:Z}))};Y();let Q=lG.map((K)=>{try{return j.matchMedia?.(K)??null}catch{return null}}).filter(Boolean).map((K)=>{if(typeof K.addEventListener==="function")return K.addEventListener("change",Y),()=>K.removeEventListener("change",Y);if(typeof K.addListener==="function")return K.addListener(Y),()=>K.removeListener(Y);return()=>{}});return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),()=>{for(let K of Q)K();j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y)}}function oj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Y=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Y),j.addEventListener?.("pageshow",Y),Z.addEventListener?.("visibilitychange",Y),()=>{j.removeEventListener?.("focus",Y),j.removeEventListener?.("pageshow",Y),Z.removeEventListener?.("visibilitychange",Y)}}function nG(_){return _?15000:60000}function sj(_){let{currentChatJid:$,posts:j,scrollToMessage:Z,handleConnectionStatusChange:Y,loadPosts:q,refreshCurrentView:Q,updateAgentProfile:K,updateUserProfile:G,currentTurnIdRef:N,activeChatJidRef:X,pendingRequestRef:V,draftBufferRef:U,thoughtBufferRef:L,steerQueuedTurnIdRef:H,thoughtExpandedRef:O,draftExpandedRef:F,draftThrottleRef:W,thoughtThrottleRef:D,viewStateRef:E,followupQueueItemsRef:S,dismissedQueueRowIdsRef:P,scrollToBottomRef:b,hasMoreRef:h,loadMoreRef:I,lastAgentResponseRef:M,wasAgentActiveRef:B,setActiveTurn:k,applyLiveGeneratedWidgetUpdate:w,setFloatingWidget:l,clearLastActivityFlag:f,handleUiVersionDrift:n,setAgentStatus:d,setAgentDraft:s,setAgentPlan:e,setAgentThought:a,setPendingRequest:q0,clearAgentRunState:G0,getAgentStatus:N0,noteAgentActivity:I0,showLastActivity:F0,refreshTimeline:V0,refreshModelAndQueueState:P0,refreshActiveChatAgents:B0,refreshCurrentChatBranches:M0,notifyForFinalResponse:w0,setContextUsage:H0,refreshContextUsage:y0,refreshQueueState:Y0,setFollowupQueueItems:D0,clearQueuedSteerStateIfStale:f0,setSteerQueuedTurnId:h0,applyModelState:U1,getAgentContext:a0,setExtensionStatusPanels:m0,setPendingExtensionPanelActions:p0,refreshActiveEditorFromWorkspace:o0,showIntentToast:s0,removeStalledPost:U0,setPosts:R0,preserveTimelineScrollTop:_1,finalizeStalledResponse:o,connectionStatus:K0,agentStatus:p,refreshAgentStatus:i,refreshAutoresearchStatus:J0}=_,k0=T((X0,T0)=>{lj(X0,T0,{currentChatJid:$,updateAgentProfile:K,updateUserProfile:G,currentTurnIdRef:N,activeChatJidRef:X,pendingRequestRef:V,draftBufferRef:U,thoughtBufferRef:L,steerQueuedTurnIdRef:H,thoughtExpandedRef:O,draftExpandedRef:F,draftThrottleRef:W,thoughtThrottleRef:D,viewStateRef:E,followupQueueItemsRef:S,dismissedQueueRowIdsRef:P,scrollToBottomRef:b,hasMoreRef:h,loadMoreRef:I,lastAgentResponseRef:M,wasAgentActiveRef:B,setActiveTurn:k,applyLiveGeneratedWidgetUpdate:w,setFloatingWidget:l,clearLastActivityFlag:f,handleUiVersionDrift:n,setAgentStatus:d,setAgentDraft:s,setAgentPlan:e,setAgentThought:a,setPendingRequest:q0,clearAgentRunState:G0,getAgentStatus:N0,noteAgentActivity:I0,showLastActivity:F0,refreshTimeline:V0,refreshModelAndQueueState:P0,refreshActiveChatAgents:B0,refreshCurrentChatBranches:M0,notifyForFinalResponse:w0,setContextUsage:H0,refreshContextUsage:y0,refreshQueueState:Y0,setFollowupQueueItems:D0,clearQueuedSteerStateIfStale:f0,setSteerQueuedTurnId:h0,applyModelState:U1,getAgentContext:a0,setExtensionStatusPanels:m0,setPendingExtensionPanelActions:p0,refreshActiveEditorFromWorkspace:o0,showIntentToast:s0,removeStalledPost:U0,setPosts:R0,preserveTimelineScrollTop:_1})},[X,w,U1,G0,f,f0,$,N,P,U,F,W,S,a0,N0,n,h,M,I,I0,w0,V,_1,B0,o0,y0,M0,P0,Y0,V0,U0,b,k,s,e,d,a,H0,m0,l,D0,p0,q0,R0,h0,s0,F0,H,L,O,D,K,G,E,B]);g(()=>{if(typeof window>"u")return;let X0=window.__PICLAW_TEST_API||{};return X0.emit=k0,X0.reset=()=>{U0(),G0(),d(null),s({text:"",totalLines:0}),e(""),a({text:"",totalLines:0}),q0(null)},X0.finalize=()=>o(),window.__PICLAW_TEST_API=X0,()=>{if(window.__PICLAW_TEST_API===X0)window.__PICLAW_TEST_API=void 0}},[G0,o,k0,U0,s,e,d,a,q0]),wj({handleSseEvent:k0,handleConnectionStatusChange:Y,loadPosts:q,onWake:Q,chatJid:$}),g(()=>{if(!j||j.length===0)return;let X0=location.hash;if(!X0||!X0.startsWith("#msg-"))return;let T0=X0.slice(5);Z(T0),history.replaceState(null,"",location.pathname+location.search)},[j,Z]);let x0=p!==null;g(()=>{if(K0!=="connected")return;let X0=nG(x0),T0=setInterval(()=>{ij({viewStateRef:E,isAgentActive:x0,refreshTimeline:V0,refreshQueueState:Y0,refreshAgentStatus:i,refreshContextUsage:y0,refreshAutoresearchStatus:J0})},X0);return()=>clearInterval(T0)},[K0,x0,i,J0,y0,Y0,V0,E]),g(()=>{return oj(()=>{i(),y0(),Y0(),J0()})},[i,J0,y0,Y0])}async function aj(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:Z,wasAgentActiveRef:Y,viewStateRef:q,refreshTimeline:Q,clearAgentRunState:K,agentStatusRef:G,pendingRequestRef:N,thoughtBufferRef:X,draftBufferRef:V,setAgentStatus:U,setAgentDraft:L,setAgentPlan:H,setAgentThought:O,setPendingRequest:F,setActiveTurn:W,noteAgentActivity:D,clearLastActivityFlag:E}=_,S=$;try{let P=await j(S);if(Z.current!==S)return null;if(!P||P.status!=="active"||!P.data){if(Y.current&&p_(q.current))Q();return Y.current=!1,K(),G.current=null,U(null),L({text:"",totalLines:0}),H(""),O({text:"",totalLines:0}),F(null),N.current=null,P??null}Y.current=!0;let b=P.data;G.current=b;let h=w8(b);if(h)W(h);D({running:!0,clearSilence:!0}),E(),U(b);let I=W5(P.thought);if(I)O((B)=>{if(f$(B,I.text))return B;return X.current=I.text,I});let M=W5(P.draft);if(M)L((B)=>{if(f$(B,M.text))return B;return V.current=M.text,M});return P}catch(P){return console.warn("Failed to fetch agent status:",P),null}}async function tj(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:Z,silentRecoveryRef:Y,silenceRefreshMs:q,viewStateRef:Q,refreshTimeline:K,refreshQueueState:G,refreshAgentStatus:N,now:X=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=Z.current||null,U=Y.current,L=X();if(U.inFlight)return null;if(U.turnId===V&&L-U.lastAttemptAt<q)return null;U.inFlight=!0,U.lastAttemptAt=L,U.turnId=V;try{if(p_(Q.current))await K();return await G(),await N()}finally{U.inFlight=!1}}function ej(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:Z,lastSilenceNoticeRef:Y,agentStatusRef:q,silenceWarningMs:Q,silenceFinalizeMs:K,silenceRefreshMs:G,isCompactionStatus:N,setAgentStatus:X,reconcileSilentTurn:V,now:U=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let L=Z.current;if(!L)return;let H=U(),O=H-L,F=N(q.current);if(O>=K){if(!F)X({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(O>=Q&&H-Y.current>=G){if(!F){let W=Math.floor(O/1000);X({type:"waiting",title:`Waiting for model… No events for ${W}s`})}Y.current=H,V()}}function _Z(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:Z,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:Q,draftBufferRef:K,thoughtBufferRef:G,pendingRequestRef:N,lastAgentResponseRef:X,stalledPostIdRef:V,scrollToBottomRef:U,setCurrentTurnId:L,setAgentDraft:H,setAgentPlan:O,setAgentThought:F,setPendingRequest:W,setAgentStatus:D,setPosts:E,dedupePosts:S,now:P=()=>Date.now(),nowIso:b=()=>new Date().toISOString()}=_;if(!$.current)return;$.current=!1,j.current=0,Z.current=null,Y.current=null,L(null),q.current=!1,Q.current=!1;let h=(K.current||"").trim();if(K.current="",G.current="",H({text:"",totalLines:0}),O(""),F({text:"",totalLines:0}),W(null),N.current=null,X.current=null,!h){D({type:"error",title:"Response stalled - No content received"});return}let M=`${h}${`

⚠️ Response may be incomplete - the model stopped responding`}`,B=P(),k=b(),w={id:B,timestamp:k,data:{type:"agent_response",content:M,agent_id:"default",is_local_stall:!0}};V.current=B,E((l)=>l?S([...l,w]):[w]),U.current?.(),D(null)}function dG(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function $Z(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:Z,dismissedQueueRowIdsRef:Y,getAgentQueueState:q,setFollowupQueueItems:Q,clearQueuedSteerStateIfStale:K,getAgentContext:G,setContextUsage:N,getAutoresearchStatus:X,setExtensionStatusPanels:V,setPendingExtensionPanelActions:U,getAgentStatus:L,wasAgentActiveRef:H,viewStateRef:O,refreshTimeline:F,clearAgentRunState:W,agentStatusRef:D,pendingRequestRef:E,thoughtBufferRef:S,draftBufferRef:P,setAgentStatus:b,setAgentDraft:h,setAgentPlan:I,setAgentThought:M,setPendingRequest:B,setActiveTurn:k,noteAgentActivity:w,clearLastActivityFlag:l,isAgentRunningRef:f,currentTurnIdRef:n,silentRecoveryRef:d,silenceRefreshMs:s,lastAgentEventRef:e,lastSilenceNoticeRef:a,silenceWarningMs:q0,silenceFinalizeMs:G0,isCompactionStatus:N0,serverVersionContext:I0,setConnectionStatus:F0,setPendingRequestForConnection:V0,hasConnectedOnceRef:P0}=_,B0=T(()=>{y9({currentChatJid:$,queueRefreshGenRef:Z,activeChatJidRef:j,dismissedQueueRowIdsRef:Y,getAgentQueueState:q,setFollowupQueueItems:Q,clearQueuedSteerStateIfStale:K})},[j,K,$,Y,q,Z,Q]),M0=T(async()=>{await P9({currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:N})},[j,$,G,N]),w0=T(async()=>{await C9({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:X,setExtensionStatusPanels:V,setPendingExtensionPanelActions:U})},[j,$,X,V,U]),H0=T(async()=>{return await aj({currentChatJid:$,getAgentStatus:L,activeChatJidRef:j,wasAgentActiveRef:H,viewStateRef:O,refreshTimeline:F,clearAgentRunState:W,agentStatusRef:D,pendingRequestRef:E,thoughtBufferRef:S,draftBufferRef:P,setAgentStatus:b,setAgentDraft:h,setAgentPlan:I,setAgentThought:M,setPendingRequest:B,setActiveTurn:k,noteAgentActivity:w,clearLastActivityFlag:l})},[j,D,W,l,$,P,L,w,E,F,k,h,I,b,M,B,S,O,H]),y0=T(async()=>{return await tj({isAgentRunningRef:f,pendingRequestRef:E,currentTurnIdRef:n,silentRecoveryRef:d,silenceRefreshMs:s,viewStateRef:O,refreshTimeline:F,refreshQueueState:B0,refreshAgentStatus:H0})},[n,f,E,H0,B0,F,s,d,O]);g(()=>{let f0=dG(q0),h0=setInterval(()=>{ej({isAgentRunningRef:f,pendingRequestRef:E,lastAgentEventRef:e,lastSilenceNoticeRef:a,agentStatusRef:D,silenceWarningMs:q0,silenceFinalizeMs:G0,silenceRefreshMs:s,isCompactionStatus:N0,setAgentStatus:b,reconcileSilentTurn:y0})},f0);return()=>clearInterval(h0)},[D,f,N0,e,a,E,y0,b,G0,s,q0]);let Y0=T((f0)=>{return nj({serverVersion:f0,...I0})},[I0]),D0=T((f0)=>{dj({status:f0,setConnectionStatus:F0,setAgentStatus:b,setAgentDraft:h,setAgentPlan:I,setAgentThought:M,setPendingRequest:V0,pendingRequestRef:E,clearAgentRunState:W,hasConnectedOnceRef:P0,viewStateRef:O,refreshTimeline:F,refreshAgentStatus:H0,refreshQueueState:B0,refreshContextUsage:M0})},[W,P0,E,H0,M0,B0,F,h,I,b,M,F0,V0,O]);return{refreshQueueState:B0,refreshContextUsage:M0,refreshAutoresearchStatus:w0,refreshAgentStatus:H0,handleUiVersionDrift:Y0,handleConnectionStatusChange:D0}}function jZ(_={}){return Z4(_)&&L8(_)}function iG(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function rG(_={},$={}){if(!jZ(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Y=iG({window:j});if(Y&&Y>0)Z.documentElement.style.setProperty("--app-height",`${Y}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Y}function ZZ(_={}){if(!jZ(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Y=new Set,q=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of Y)$.clearTimeout?.(V);Y.clear()},Q=()=>{Z=0,rG({window:$,document:j})},K=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(Q)??0},G=()=>{K();for(let V of[80,220,420]){let U=$.setTimeout?.(()=>{Y.delete(U),K()},V);if(U!=null)Y.add(U)}},N=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;G()},X=$.visualViewport;return G(),$.addEventListener("focus",G),$.addEventListener("pageshow",G),$.addEventListener("resize",G),$.addEventListener("orientationchange",G),j.addEventListener("visibilitychange",N),j.addEventListener("focusin",G,!0),X?.addEventListener?.("resize",G),X?.addEventListener?.("scroll",G),()=>{q(),$.removeEventListener("focus",G),$.removeEventListener("pageshow",G),$.removeEventListener("resize",G),$.removeEventListener("orientationchange",G),j.removeEventListener("visibilitychange",N),j.removeEventListener("focusin",G,!0),X?.removeEventListener?.("resize",G),X?.removeEventListener?.("scroll",G)}}function oG(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function d1(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:oG($,j)}function YZ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.openTab,Y=_?.popOutPane,q=(G)=>{let N=G?.detail?.path,X=typeof G?.detail?.label==="string"&&G.detail.label.trim()?G.detail.label.trim():void 0;if(N)Z?.(N,X)},Q=(G)=>{let N=G?.detail?.path,X=typeof G?.detail?.label==="string"&&G.detail.label.trim()?G.detail.label.trim():void 0;if(N)Y?.(N,X)},K=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return K.forEach((G)=>j.addEventListener(G,q)),j.addEventListener("pane:popout",Q),()=>{K.forEach((G)=>j.removeEventListener(G,q)),j.removeEventListener("pane:popout",Q)}}function qZ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=(Y)=>{if(Y?.ctrlKey&&Y.key==="`")Y.preventDefault?.(),_?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function QZ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.toggleZenMode,Y=_?.exitZenMode,q=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Q=(K)=>{if(K?.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault?.(),Z?.();return}if(K?.key==="Escape"&&q())K.preventDefault?.(),Y?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function KZ(_,$){let j=Array.isArray(_)?_:[];return j.find((Z)=>Z?.id===$)||j[0]||null}function GZ(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function NZ(_,$,j){return _||$?.label||j||"Pane"}function XZ(_,$,j){let Z=Array.isArray(_)?_.length:0,Y=Boolean(j&&$?.has?.(j));return Z>1||Y}function VZ(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function UZ(_,$,j,Z){return _===$&&!j||Z}function LZ(_,$,j,Z,Y){return _||!$&&(j||Z&&Y)}function R8(_){let $=m$(_);return $?`@${$}`:""}function m$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function u8(_,$=""){let j=String(_||""),Z=m$(j),Y=m$($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let q=`@${Z}`;if(Z===Y)return{normalized:Z,handle:q,canSubmit:!1,kind:"info",message:`Already using ${q}.`};if(Z!==j.trim())return{normalized:Z,handle:q,canSubmit:!0,kind:"info",message:`Will save as ${q}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:q,canSubmit:!0,kind:"success",message:`Saving as ${q}.`}}function WZ(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?R8(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function sG(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Y=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Y===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function v8(_,$={}){let j=R8(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Y=sG(_,$);return Y.length>0?`${j} — ${Z} • ${Y.join(" • ")}`:`${j} — ${Z}`}function BZ(_,$,j){let Z=R8(_),Y=R8($),q=String(j||"").trim();if(Z&&Y&&Z!==Y)return`Restored archived ${Z} as ${Y} because ${Z} is already in use.`;if(Y)return`Restored ${Y}.`;if(Z)return`Restored ${Z}.`;return`Restored ${q||"branch"}.`}var aG="piclaw_btw_session",HZ=900,zZ="__piclawRenameBranchFormLock__";function tG(){try{return import.meta.url}catch{return null}}function p$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function f8(_,$,j=""){let Z=_?.get?.($);return Z&&Z.trim()?Z.trim():j}function FZ(_={}){let $=_.importMetaUrl===void 0?tG():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Z=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Y=$?new URL($).searchParams.get("v"):null;if(Y&&Y.trim())return Y.trim()}catch{}try{let q=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((G)=>String(G?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!q)return null;let K=new URL(q,Z).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function JZ(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[zZ];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return $[zZ]=Z,Z}function OZ(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function DZ(_={}){let $=typeof _.readItem==="function"?_.readItem:X_,j=_.storageKey||aG,Z=$(j);if(!Z)return null;try{let Y=JSON.parse(Z);if(!Y||typeof Y!=="object")return null;let q=typeof Y.question==="string"?Y.question:"",Q=typeof Y.answer==="string"?Y.answer:"",K=typeof Y.thinking==="string"?Y.thinking:"",G=typeof Y.error==="string"&&Y.error.trim()?Y.error:null,N=Y.status==="running"?"error":Y.status==="success"||Y.status==="error"?Y.status:"success";return{question:q,answer:Q,thinking:K,error:N==="error"?G||"BTW stream interrupted. You can retry.":G,model:null,status:N}}catch{return null}}function AZ(_,$={}){let j=$.defaultChatJid||"web:default",Z=f8(_,"chat_jid",j),Y=p$(_?.get?.("chat_only")||_?.get?.("chat-only")),q=p$(_?.get?.("pane_popout")),Q=f8(_,"pane_path"),K=f8(_,"pane_label"),G=p$(_?.get?.("branch_loader")),N=f8(_,"branch_source_chat_jid",Z);return{currentChatJid:Z,chatOnlyMode:Y,panePopoutMode:q,panePopoutPath:Q,panePopoutLabel:K,branchLoaderMode:G,branchLoaderSourceChatJid:N}}function EZ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Z,renameBranchLockUntil:Y,getFormLock:q,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:K,now:G=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let N=q?.()||null;if(!N)return!1;if(Z||G<Number(Y||0)||N.inFlight||G<Number(N.cooldownUntil||0))return!1;return Q?.(j.agent_name||""),K?.(!0),!0}function kZ(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function MZ(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Z,openRenameForm:Y,renameBranchInFlightRef:q,renameBranchLockUntilRef:Q,getFormLock:K,setIsRenamingBranch:G,renameChatBranch:N,refreshActiveChatAgents:X,refreshCurrentChatBranches:V,showIntentToast:U,closeRenameForm:L,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Z!=="string")return Y?.(),!1;let O=H(),F=K?.()||null;if(!F)return!1;if(q.current||O<Number(Q.current||0)||F.inFlight||O<Number(F.cooldownUntil||0))return!1;q.current=!0,F.inFlight=!0,G?.(!0);try{let W=j.agent_name||"",D=u8(Z,W);if(!D.canSubmit)return U?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let E=D.normalized||W,S=await N(j.chat_jid,{agentName:E});await Promise.allSettled([X?.(),V?.()]);let P=S?.branch?.agent_name||E||W;return U?.("Branch renamed",`@${P}`,"info",3500),L?.(),!0}catch(W){let D=W instanceof Error?W.message:String(W||"Could not rename branch."),E=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return U?.("Could not rename branch",E||"Could not rename branch.","warning",5000),!1}finally{q.current=!1,G?.(!1);let W=H()+HZ;Q.current=W;let D=K?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=W}}async function IZ(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Z,currentBranchRecord:Y,currentChatBranches:q=[],activeChatAgents:Q=[],pruneChatBranch:K,refreshActiveChatAgents:G,refreshCurrentChatBranches:N,showIntentToast:X,baseHref:V,chatOnlyMode:U,navigate:L,confirm:H=(b)=>window.confirm(b)}=_;if(!$)return!1;let O=typeof j==="string"&&j.trim()?j.trim():"",F=typeof Z==="string"&&Z.trim()?Z.trim():"",W=O||Y?.chat_jid||F;if(!W)return X?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Y?.chat_jid===W?Y:null)||q.find((b)=>b?.chat_jid===W)||Q.find((b)=>b?.chat_jid===W)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return X?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let S=`@${D?.agent_name||W}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!H(`Prune ${S}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await K(W),await Promise.allSettled([G?.(),N?.()]);let b=D?.root_chat_jid||"web:default";X?.("Branch pruned",`${S} has been archived.`,"info",3000);let h=Y4(V,b,{chatOnly:U});return L?.(h),!0}catch(b){let h=b instanceof Error?b.message:String(b||"Could not prune branch.");return X?.("Could not prune branch",h||"Could not prune branch.","warning",5000),!1}}async function xZ(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Z=[],refreshActiveChatAgents:Y,refreshCurrentChatBranches:q,showIntentToast:Q,baseHref:K,chatOnlyMode:G,navigate:N}=_,X=typeof $==="string"?$.trim():"";if(!X||typeof j!=="function")return!1;try{let V=Z.find((W)=>W?.chat_jid===X)||null,U=await j(X);await Promise.allSettled([Y?.(),q?.()]);let L=U?.branch,H=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():X,O=BZ(V?.agent_name,L?.agent_name,H);Q?.("Branch restored",O,"info",4200);let F=Y4(K,H,{chatOnly:G});return N?.(F),!0}catch(V){let U=V instanceof Error?V.message:String(V||"Could not restore branch.");return Q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function TZ(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Z,navigate:Y,baseHref:q,isCancelled:Q=()=>!1}=_;try{Z?.({status:"running",message:"Preparing a new chat branch…"});let K=await j($);if(Q())return!1;let G=K?.branch,N=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null;if(!N)throw Error("Branch fork did not return a chat id.");let X=Y4(q,N,{chatOnly:!0});return Y?.(X,{replace:!0}),!0}catch(K){if(Q())return!1;return Z?.({status:"error",message:I5(K)}),!1}}function yZ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Z,chatOnlyMode:Y,currentHref:q,navigate:Q}=_;if(!$)return!1;let K=typeof j==="string"?j.trim():"";if(!K||K===Z)return!1;let G=Y4(q,K,{chatOnly:Y});return Q?.(G),!0}async function PZ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Z,dockInstanceRef:Y,terminalTabPath:q}=_,K=(typeof j==="string"?j.trim():"")===$?Z.current:$===q?Y.current:null;if(typeof K?.preparePopoutTransfer!=="function")return null;return await K.preparePopoutTransfer()}function CZ(_){let{panePath:$,terminalTabPath:j,dockVisible:Z,resolveTab:Y,closeTab:q,setDockVisible:Q}=_,K=Y($);if(K&&!K.dirty){q($);return}if($===j&&Z)Q(!1)}function SZ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Z,editorWidthRef:Y,dockHeightRef:q,sidebarWidthRef:Q,readStoredNumber:K}=_;if(!j||!$||!Z)return;if(!Y.current){let G=K("editorWidth",null),N=Q.current||280;Y.current=Number.isFinite(G)?Number(G):N}if(Z.style.setProperty("--editor-width",`${Y.current}px`),!q.current){let G=K("dockHeight",null);q.current=Number.isFinite(G)?Number(G):200}Z.style.setProperty("--dock-height",`${q.current}px`)}async function wZ(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Z,refreshActiveChatAgents:Y,refreshCurrentChatBranches:q,showIntentToast:Q,navigate:K,baseHref:G}=_;try{let X=(await Z($))?.branch,V=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Y?.(),q?.()]);let U=X?.agent_name?`@${X.agent_name}`:V;Q?.("New branch created",`Switched to ${U}.`,"info",2500);let L=Y4(G,V,{chatOnly:j});return K?.(L),!0}catch(N){return Q?.("Could not create branch",I5(N),"warning",5000),!1}}async function RZ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Z,label:Y,showIntentToast:q,resolveSourceTransfer:Q,closeSourcePaneIfTransferred:K,currentChatJid:G,baseHref:N}=_;if(!$||j)return!1;let X=typeof Z==="string"&&Z.trim()?Z.trim():"";if(!X)return!1;let V=X2(X);if(!V)return q?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=f6(V);if(!U)return q?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;b6(U,{title:typeof Y==="string"&&Y.trim()?`Opening ${Y}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let L=await Q?.(X),H=N2(N,X,{label:typeof Y==="string"&&Y.trim()?Y.trim():void 0,chatJid:G,params:L});return g6(U,H),K?.(X),!0}catch(L){m6(U);let H=L instanceof Error?L.message:"Could not transfer pane state to the new window.";return q?.("Could not open pane window",H,"warning",5000),!1}}async function uZ(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Z,currentRootChatJid:Y,forkChatBranch:q,getActiveChatAgents:Q,getChatBranches:K,setActiveChatAgents:G,setCurrentChatBranches:N,showIntentToast:X,baseHref:V}=_;if(!$||j)return!1;let U=K2(Z);if(!U)return X?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let H=G2(V,Z,{chatOnly:!0});if(!window.open(H,U.target))return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let L=f6(U);if(!L)return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;b6(L,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let O=(await q(Z))?.branch,F=typeof O?.chat_jid==="string"&&O.chat_jid.trim()?O.chat_jid.trim():null;if(!F)throw Error("Branch fork did not return a chat id.");try{let D=await Q?.();G?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await K?.(Y);N?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let W=Y4(V,F,{chatOnly:!0});return g6(L,W),!0}catch(H){return m6(L),X?.("Could not open branch window",I5(H),"error",5000),!1}}function eG(_){_(($)=>!$)}function _N(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,navigate:Y,hasWindow:q=typeof window<"u",currentHref:Q=q?window.location.href:"http://localhost/"}=_;return yZ({hasWindow:q,nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,currentHref:Q,navigate:Y})}function $N(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:Q,hasWindow:K=typeof window<"u"}=_;return EZ({hasWindow:K,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:Q})}function jN(_){kZ(_)}async function ZN(_){let{hasWindow:$=typeof window<"u",...j}=_;await MZ({hasWindow:$,...j})}async function YN(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await IZ({hasWindow:$,baseHref:j,...Z})}async function qN(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await xZ({baseHref:j,...Z})}function QN(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Y,navigate:q,hasWindow:Q=typeof window<"u",baseHref:K=Q?window.location.href:"http://localhost/",runBranchLoaderImpl:G=TZ}=_;if(!$||!Q)return;let N=!1;return G({branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Y,navigate:q,baseHref:K,isCancelled:()=>N}),()=>{N=!0}}async function KN(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await wZ({baseHref:j,...Z})}async function GN(_){let{isWebAppMode:$,path:j,label:Z,showIntentToast:Y,currentChatJid:q,tabStripActiveId:Q,editorInstanceRef:K,dockInstanceRef:G,terminalTabPath:N,dockVisible:X,resolveTab:V,closeTab:U,setDockVisible:L,hasWindow:H=typeof window<"u",baseHref:O=H?window.location.href:"http://localhost/"}=_;await RZ({hasWindow:H,isWebAppMode:$,path:j,label:Z,showIntentToast:Y,currentChatJid:q,baseHref:O,resolveSourceTransfer:(F)=>PZ({panePath:F,tabStripActiveId:Q,editorInstanceRef:K,dockInstanceRef:G,terminalTabPath:N}),closeSourcePaneIfTransferred:(F)=>{CZ({panePath:F,terminalTabPath:N,dockVisible:X,resolveTab:V,closeTab:U,setDockVisible:L})}})}function NN(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:Z=YZ}=_;return Z({openTab:(Y,q)=>$(Y,q?{label:q}:void 0),popOutPane:(Y,q)=>{j(Y,q)}})}async function XN(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await uZ({hasWindow:$,baseHref:j,...Z})}function VN(_){let{hasWindow:$=typeof window<"u",...j}=_;SZ({hasWindow:$,...j})}function vZ(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:Z,navigate:Y,currentBranchRecord:q,renameBranchInFlightRef:Q,renameBranchLockUntilRef:K,getFormLock:G,setRenameBranchNameDraft:N,setIsRenameBranchFormOpen:X,setIsRenamingBranch:V,renameChatBranch:U,refreshActiveChatAgents:L,refreshCurrentChatBranches:H,showIntentToast:O,currentChatBranches:F,activeChatAgents:W,pruneChatBranch:D,restoreChatBranch:E,branchLoaderMode:S,branchLoaderSourceChatJid:P,forkChatBranch:b,setBranchLoaderState:h,currentRootChatJid:I,isWebAppMode:M,getActiveChatAgents:B,getChatBranches:k,setActiveChatAgents:w,setCurrentChatBranches:l,openEditor:f,tabStripActiveId:n,editorInstanceRef:d,dockInstanceRef:s,terminalTabPath:e,dockVisible:a,resolveTab:q0,closeTab:G0,setDockVisible:N0,editorOpen:I0,shellElement:F0,editorWidthRef:V0,dockHeightRef:P0,sidebarWidthRef:B0,readStoredNumber:M0}=_,w0=T(()=>{eG($)},[$]),H0=T((p0)=>{_N({nextChatJid:p0,currentChatJid:j,chatOnlyMode:Z,navigate:Y})},[Z,j,Y]),y0=T(()=>{$N({currentBranchRecord:q,renameBranchInFlight:Q.current,renameBranchLockUntil:K.current,getFormLock:G,setRenameBranchNameDraft:N,setIsRenameBranchFormOpen:X})},[q,G,Q,K,X,N]),Y0=T(()=>{jN({setIsRenameBranchFormOpen:X,setRenameBranchNameDraft:N})},[X,N]),D0=T(async(p0)=>{await ZN({currentBranchRecord:q,nextName:p0,openRenameForm:y0,renameBranchInFlightRef:Q,renameBranchLockUntilRef:K,getFormLock:G,setIsRenamingBranch:V,renameChatBranch:U,refreshActiveChatAgents:L,refreshCurrentChatBranches:H,showIntentToast:O,closeRenameForm:Y0})},[Y0,q,G,y0,L,H,Q,K,U,V,O]),f0=T(async(p0=null)=>{await YN({targetChatJid:p0,currentChatJid:j,currentBranchRecord:q,currentChatBranches:F,activeChatAgents:W,pruneChatBranch:D,refreshActiveChatAgents:L,refreshCurrentChatBranches:H,showIntentToast:O,chatOnlyMode:Z,navigate:Y})},[W,Z,q,F,j,Y,D,L,H,O]),h0=T(async(p0)=>{await qN({targetChatJid:p0,restoreChatBranch:E,currentChatBranches:F,refreshActiveChatAgents:L,refreshCurrentChatBranches:H,showIntentToast:O,chatOnlyMode:Z,navigate:Y})},[Z,F,Y,L,H,E,O]);g(()=>QN({branchLoaderMode:S,branchLoaderSourceChatJid:P,forkChatBranch:b,setBranchLoaderState:h,navigate:Y}),[S,P,b,Y,h]);let U1=T(async()=>{await KN({currentChatJid:j,chatOnlyMode:Z,forkChatBranch:b,refreshActiveChatAgents:L,refreshCurrentChatBranches:H,showIntentToast:O,navigate:Y})},[Z,j,b,Y,L,H,O]),a0=T(async(p0,o0)=>{await GN({isWebAppMode:M,path:p0,label:o0,showIntentToast:O,currentChatJid:j,tabStripActiveId:n,editorInstanceRef:d,dockInstanceRef:s,terminalTabPath:e,dockVisible:a,resolveTab:q0,closeTab:G0,setDockVisible:N0})},[G0,j,s,a,d,M,q0,N0,O,n,e]);g(()=>NN({openEditor:f,popOutPane:(p0,o0)=>{a0(p0,o0)}}),[a0,f]);let m0=T(async()=>{await XN({isWebAppMode:M,currentChatJid:j,currentRootChatJid:I,forkChatBranch:b,getActiveChatAgents:B,getChatBranches:k,setActiveChatAgents:w,setCurrentChatBranches:l,showIntentToast:O})},[j,I,b,B,k,M,w,l,O]);return g(()=>{VN({editorOpen:I0,shellElement:F0,editorWidthRef:V0,dockHeightRef:P0,sidebarWidthRef:B0,readStoredNumber:M0})},[P0,I0,V0,M0,F0,B0]),{toggleWorkspace:w0,handleBranchPickerChange:H0,openRenameCurrentBranchForm:y0,closeRenameCurrentBranchForm:Y0,handleRenameCurrentBranch:D0,handlePruneCurrentBranch:f0,handleRestoreBranch:h0,handleCreateSessionFromCompose:U1,handlePopOutPane:a0,handlePopOutChat:m0}}function b8(_){return _?{..._}:{text:"",totalLines:0}}function fZ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function UN(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function LN(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function bZ(_){return{agentStatus:_.agentStatus,agentDraft:b8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:b8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:fZ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:UN(_.silentRecovery)}}function gZ(_){let $=_.snapshot||LN(),{refs:j,setters:Z}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Z.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Z.setAgentStatus($.agentStatus||null),Z.setAgentDraft(b8($.agentDraft)),Z.setAgentPlan($.agentPlan||""),Z.setAgentThought(b8($.agentThought)),Z.setPendingRequest($.pendingRequest||null),Z.setCurrentTurnId($.currentTurnId||null),Z.setSteerQueuedTurnId($.steerQueuedTurnId||null),Z.setFollowupQueueItems(fZ($.followupQueueItems)),Z.setActiveModel($.activeModel||null),Z.setActiveThinkingLevel($.activeThinkingLevel||null),Z.setSupportsThinking(Boolean($.supportsThinking)),Z.setActiveModelUsage($.activeModelUsage??null),Z.setContextUsage($.contextUsage??null),$}var WN=400,h$=60,mZ=220,c$="mdPreviewHeight";function BN(){try{let _=localStorage.getItem(c$),$=_?Number(_):NaN;return Number.isFinite($)&&$>=h$?$:mZ}catch{return mZ}}function g8({getContent:_,path:$,onClose:j}){let[Z,Y]=m(""),[q,Q]=m(BN),K=y(null),G=y(null),N=y(""),X=y(_);return X.current=_,g(()=>{let L=()=>{let O=X.current?.()||"";if(O===N.current)return;N.current=O;try{let F=V_(O,null,{sanitize:!1});Y(F)}catch{Y('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let H=setInterval(L,WN);return()=>clearInterval(H)},[]),g(()=>{if(K.current&&Z)G4(K.current).catch(()=>{})},[Z]),z`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let H=L.clientY,O=G.current?.offsetHeight||q,F=G.current?.parentElement,W=F?F.offsetHeight*0.7:500,D=L.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=(P)=>{let b=Math.min(Math.max(O-(P.clientY-H),h$),W);Q(b)},S=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(c$,String(Math.round(G.current?.offsetHeight||q)))}catch{}document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",S)}}
            onTouchStart=${(L)=>{L.preventDefault();let H=L.touches[0];if(!H)return;let O=H.clientY,F=G.current?.offsetHeight||q,W=G.current?.parentElement,D=W?W.offsetHeight*0.7:500,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let S=(b)=>{let h=b.touches[0];if(!h)return;b.preventDefault();let I=Math.min(Math.max(F-(h.clientY-O),h$),D);Q(I)},P=()=>{E.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(c$,String(Math.round(G.current?.offsetHeight||q)))}catch{}document.removeEventListener("touchmove",S),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",S,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}}
        ></div>
        <div class="md-preview-panel" ref=${G} style=${{height:q+"px"}}>
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
                ref=${K}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function pZ(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function zN(_){return _==="error"?"Could not open branch window":"Opening branch…"}function hZ(_){return z`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${zN(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function cZ(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Z,panePopoutHasMenuActions:Y,panePopoutTitle:q,tabStripTabs:Q,tabStripActiveId:K,handleTabActivate:G,previewTabs:N,handleTabTogglePreview:X,editorContainerRef:V,getPaneContent:U,panePopoutPath:L}=_;return z`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${j&&!Z&&z`
          <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
            ${Y?z`
                <details class="pane-popout-controls-menu">
                  <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                    <span class="pane-popout-controls-title">${q}</span>
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="4.5 6.5 8 10 11.5 6.5" />
                    </svg>
                  </summary>
                  <div class="pane-popout-controls-panel">
                    ${Q.length>1&&z`
                      <div class="pane-popout-controls-section">
                        <div class="pane-popout-controls-section-title">Open panes</div>
                        <div class="pane-popout-controls-list">
                          ${Q.map((H)=>z`
                            <button
                              type="button"
                              class=${`pane-popout-controls-item${H.id===K?" active":""}`}
                              onClick=${(O)=>{G(H.id),O.currentTarget.closest("details")?.removeAttribute("open")}}
                            >
                              ${H.label}
                            </button>
                          `)}
                        </div>
                      </div>
                    `}
                    ${K&&N.has(K)&&z`
                      <button
                        type="button"
                        class="pane-popout-controls-action"
                        onClick=${(H)=>{X(K),H.currentTarget.closest("details")?.removeAttribute("open")}}
                      >
                        Hide preview
                      </button>
                    `}
                  </div>
                </details>
              `:z`
                <div class="pane-popout-controls-label" aria-label=${q}>${q}</div>
              `}
          </div>
        `}
        ${j?z`<div class="editor-pane-host" ref=${V}></div>`:z`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${L||"No pane path provided."}</p>
            </div>
          `}
        ${j&&K&&N.has(K)&&z`
          <${g8}
            getContent=${U}
            path=${K}
            onClose=${()=>X(K)}
          />
        `}
      </div>
    </div>
  `}function m8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function HN(_,$){let j=m8(_),Z=m8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function l$(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function n$(_,$,j=Date.now(),Z=700){let Y=_&&typeof _==="object"?_:{value:"",updatedAt:0},q=String($||"").trim().toLowerCase();if(!q)return{value:"",updatedAt:j};return{value:!Y.value||!Number.isFinite(Y.updatedAt)||j-Y.updatedAt>Z?q:`${Y.value}${q}`,updatedAt:j}}function FN(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Y=((Number.isInteger($)?$:0)%j+j)%j,q=[];for(let Q=0;Q<j;Q+=1)q.push((Y+Q)%j);return q}function JN(_,$,j=0,Z=(Y)=>Y){let Y=m8($);if(!Y)return-1;let q=Array.isArray(_)?_:[],Q=FN(q.length,j),K=q.map((G)=>m8(Z(G)));for(let G of Q)if(K[G].startsWith(Y))return G;for(let G of Q)if(K[G].includes(Y))return G;return-1}function d$(_,$,j=-1,Z=(Y)=>Y){let Y=Array.isArray(_)?_:[];if(j>=0&&j<Y.length){let q=Z(Y[j]);if(HN(q,$))return j}return JN(Y,$,0,Z)}function p8(_){return String(_||"").trim().toLowerCase()}function i$(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return p8($[1]||"")}function ON(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Y=p8(Z?.agent_name);if(!Y||$.has(Y))continue;$.add(Y),j.push(Z)}return j}function lZ(_,$,j={}){let Z=i$($);if(Z==null)return[];let Y=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return ON(_).filter((q)=>{if(Y&&q?.chat_jid===Y)return!1;return p8(q?.agent_name).startsWith(Z)})}function r$(_){let $=p8(_);return $?`@${$} `:""}function nZ(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function u_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Y,removeTitle:q="Remove",icon:Q="file"}){let K=`${_}-file-pill`,G=`${_}-file-name`,N=`${_}-file-remove`,X=Q==="message"?z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:z`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return z`
    <span class=${K} title=${j||$} onClick=${Y}>
      ${X}
      <span class=${G}>${$}</span>
      ${Z&&z`
        <button
          class=${N}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Z()}}
          title=${q}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var DN=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function AN({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Y=_.contextWindow,q="Compact context",K=`${Z!=null?`Context: ${dZ(Z)} / ${dZ(Y)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,G=9,N=2*Math.PI*9,X=j/100*N,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return z`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${K}
            aria-label="Compact context"
            onClick=${(U)=>{U.preventDefault(),U.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${X} ${N}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function dZ(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function EN(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let N=0;N<j.length;N+=1)if(j[N].trim()==="Files:"&&j[N+1]&&/^\s*-\s+/.test(j[N+1])){Z=N;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let N=j[q];if(/^\s*-\s+/.test(N))Y.push(N.replace(/^\s*-\s+/,"").trim());else if(!N.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let Q=j.slice(0,Z),K=j.slice(q);return{content:[...Q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y}}function kN(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let N=0;N<j.length;N+=1)if(j[N].trim()==="Referenced messages:"&&j[N+1]&&/^\s*-\s+/.test(j[N+1])){Z=N;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let N=j[q];if(/^\s*-\s+/.test(N)){let X=N.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Y.push(X[1])}else if(!N.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let Q=j.slice(0,Z),K=j.slice(q);return{content:[...Q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y}}function MN(_){let $=EN(_||""),j=kN($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function o$({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return z`
        <div class="compose-queue-stack">
            ${_.map((Y)=>{let q=typeof Y?.content==="string"?Y.content:"",Q=MN(q);if(!Q.text.trim()&&Q.fileRefs.length===0&&Q.messageRefs.length===0)return null;return z`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${q}>
                            ${Q.text.trim()&&z`<div class="compose-queue-stack-text">${Q.text}</div>`}
                            ${(Q.messageRefs.length>0||Q.fileRefs.length>0)&&z`
                                <div class="compose-queue-stack-refs">
                                    ${Q.messageRefs.map((K)=>z`
                                        <${u_}
                                            key=${"queue-msg-"+K}
                                            prefix="compose"
                                            label=${"msg:"+K}
                                            title=${"Message reference: "+K}
                                            icon="message"
                                        />
                                    `)}
                                    ${Q.fileRefs.map((K)=>{let G=K.split("/").pop()||K;return z`
                                            <${u_}
                                                key=${"queue-file-"+K}
                                                prefix="compose"
                                                label=${G}
                                                title=${K}
                                                onClick=${()=>Z?.(K)}
                                            />
                                        `})}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
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
    `}function iZ({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Y,onSearchScopeChange:q,onEnterSearch:Q,onExitSearch:K,fileRefs:G=[],onRemoveFileRef:N,onClearFileRefs:X,messageRefs:V=[],onRemoveMessageRef:U,onClearMessageRefs:L,activeModel:H=null,modelUsage:O=null,thinkingLevel:F=null,supportsThinking:W=!1,contextUsage:D=null,onContextCompact:E,notificationsEnabled:S=!1,notificationPermission:P="default",onToggleNotifications:b,onModelChange:h,onModelStateChange:I,activeEditorPath:M=null,onAttachEditorFile:B,onOpenFilePill:k,followupQueueItems:w=[],onInjectQueuedFollowup:l,onRemoveQueuedFollowup:f,onSubmitIntercept:n,onMessageResponse:d,onPopOutChat:s,isAgentActive:e=!1,activeChatAgents:a=[],currentChatJid:q0="web:default",connectionStatus:G0="connected",onSetFileRefs:N0,onSetMessageRefs:I0,onSubmitError:F0,onSwitchChat:V0,onRenameSession:P0,isRenameSessionInProgress:B0=!1,onCreateSession:M0,onDeleteSession:w0,onRestoreSession:H0,showQueueStack:y0=!0,statusNotice:Y0=null}){let[D0,f0]=m(""),[h0,U1]=m(""),[a0,m0]=m([]),[p0,o0]=m(!1),[s0,U0]=m([]),[R0,_1]=m(0),[o,K0]=m(!1),[p,i]=m([]),[J0,k0]=m(0),[x0,X0]=m(!1),[T0,c0]=m(!1),[O0,b0]=m(!1),[A0,Z0]=m(!1),[C,t]=m([]),[z0,E0]=m(0),[i0,j1]=m(0),[q1,v1]=m(!1),[i1,k_]=m(0),[r1,S1]=m(null),[g1,f1]=m(()=>Date.now()),$1=y(null),m1=y(null),h_=y(null),o1=y(null),c_=y(null),v_=y(null),J1=y(null),p1=y(null),O1=y({value:"",updatedAt:0}),X1=y(0),L1=y(!1),K_=200,G_=(J)=>{let R=new Set,c=[];for(let j0 of J||[]){if(typeof j0!=="string")continue;let S0=j0.trim();if(!S0||R.has(S0))continue;R.add(S0),c.push(S0)}return c},y1=()=>{let J=X_("piclaw_compose_history");if(!J)return[];try{let R=JSON.parse(J);if(!Array.isArray(R))return[];return G_(R)}catch{return[]}},h1=(J)=>{Y1("piclaw_compose_history",JSON.stringify(J))},V1=y(y1()),k1=y(-1),s1=y(""),c1=D0.trim()||a0.length>0||G.length>0||V.length>0,l_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),M_=typeof window<"u"&&typeof Notification<"u",n_=typeof window<"u"?Boolean(window.isSecureContext):!1,N4=M_&&n_&&P!=="denied",W_=P==="granted"&&S,I_=D4(Y0),M4=M8(Y0),I4=typeof Y0?.detail==="string"&&Y0.detail.trim()?Y0.detail.trim():"",Z1=I_?I8(Y0,g1):null,D1=W_?"Disable notifications":"Enable notifications",X4=a0.length>0||G.length>0||V.length>0,a1=G0==="disconnected"?"Reconnecting":String(G0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(J)=>J.toUpperCase()),B_=G0==="disconnected"?"Reconnecting":`Connection: ${a1}`,l1=(Array.isArray(a)?a:[]).filter((J)=>!J?.archived_at),H1=(()=>{for(let J of Array.isArray(a)?a:[]){let R=typeof J?.chat_jid==="string"?J.chat_jid.trim():"";if(R&&R===q0)return J}return null})(),P1=Boolean(H1&&H1.chat_jid===(H1.root_chat_jid||H1.chat_jid)),Q1=g0(()=>{let J=new Set,R=[];for(let c of Array.isArray(a)?a:[]){let j0=typeof c?.chat_jid==="string"?c.chat_jid.trim():"";if(!j0||j0===q0||J.has(j0))continue;if(!(typeof c?.agent_name==="string"?c.agent_name.trim():""))continue;J.add(j0),R.push(c)}return R},[a,q0]),t1=Q1.length>0,e1=t1&&typeof V0==="function",__=t1&&typeof H0==="function",f_=Boolean(B0||L1.current),w1=!j&&typeof P0==="function"&&!f_,C1=!j&&typeof M0==="function",$_=!j&&typeof w0==="function"&&!P1,x_=!j&&(e1||__||w1||C1||$_),W1=H||"",z_=W&&F?` (${F})`:"",K1=z_.trim()?`${F}`:"",T_=typeof O?.hint_short==="string"?O.hint_short.trim():"",H_=[K1||null,T_||null].filter(Boolean).join(" • "),x4=[W1?`Current model: ${W1}${z_}`:null,O?.plan?`Plan: ${O.plan}`:null,T_||null,O?.primary?.reset_description||null,O?.secondary?.reset_description||null].filter(Boolean),p4=T0?"Switching model…":x4.join(" • ")||`Current model: ${W1}${z_} (tap to open model picker)`,y_=(J)=>{if(!J||typeof J!=="object")return;let R=J.model??J.current;if(typeof I==="function")I({model:R??null,thinking_level:J.thinking_level??null,supports_thinking:J.supports_thinking,provider_usage:J.provider_usage??null});if(R&&typeof h==="function")h(R)},b_=(J)=>{let R=J||$1.current;if(!R)return;R.style.height="auto",R.style.height=`${R.scrollHeight}px`,R.style.overflowY="hidden"},T4=(J)=>{if(!J.startsWith("/")||J.includes(`
`)){K0(!1),U0([]);return}let R=J.toLowerCase().split(" ")[0];if(R.length<1){K0(!1),U0([]);return}let c=DN.filter((j0)=>j0.name.startsWith(R)||j0.name.replace(/-/g,"").startsWith(R.replace(/-/g,"")));if(c.length>0&&!(c.length===1&&c[0].name===R))X0(!1),i([]),U0(c),_1(0),K0(!0);else K0(!1),U0([])},d_=(J)=>{let R=D0,c=R.indexOf(" "),j0=c>=0?R.slice(c):"",S0=J.name+j0;f0(S0),K0(!1),U0([]),requestAnimationFrame(()=>{let B1=$1.current;if(!B1)return;let A1=S0.length;B1.selectionStart=A1,B1.selectionEnd=A1,B1.focus()})},h4=(J)=>{if(i$(J)==null){X0(!1),i([]);return}let R=lZ(l1,J,{currentChatJid:q0});if(R.length>0&&!(R.length===1&&r$(R[0].agent_name).trim().toLowerCase()===String(J||"").trim().toLowerCase()))K0(!1),U0([]),i(R),k0(0),X0(!0);else X0(!1),i([])},i_=(J)=>{let R=r$(J?.agent_name);if(!R)return;f0(R),X0(!1),i([]),requestAnimationFrame(()=>{let c=$1.current;if(!c)return;let j0=R.length;c.selectionStart=j0,c.selectionEnd=j0,c.focus()})},r_=()=>{if(j||!e1&&!__&&!w1&&!C1&&!$_)return!1;return O1.current={value:"",updatedAt:0},b0(!1),K0(!1),U0([]),X0(!1),i([]),Z0(!0),!0},F_=(J)=>{if(J?.preventDefault?.(),J?.stopPropagation?.(),j||!e1&&!__&&!w1&&!C1&&!$_)return;if(A0){O1.current={value:"",updatedAt:0},Z0(!1);return}r_()},c4=(J)=>{let R=typeof J==="string"?J.trim():"";if(Z0(!1),!R||R===q0){requestAnimationFrame(()=>$1.current?.focus());return}V0?.(R)},l4=async(J)=>{let R=typeof J==="string"?J.trim():"";if(Z0(!1),!R||typeof H0!=="function"){requestAnimationFrame(()=>$1.current?.focus());return}try{await H0(R)}catch(c){console.warn("Failed to restore session:",c),requestAnimationFrame(()=>$1.current?.focus())}},z5=(J)=>{let c=(Array.isArray(J)?J:[]).findIndex((j0)=>!j0?.disabled);return c>=0?c:0},F1=g0(()=>{let J=[];for(let R of Q1){let c=Boolean(R?.archived_at),j0=typeof R?.agent_name==="string"?R.agent_name.trim():"",S0=typeof R?.chat_jid==="string"?R.chat_jid.trim():"";if(!j0||!S0)continue;J.push({type:"session",key:`session:${S0}`,label:`@${j0} — ${S0}${R?.is_active?" active":""}${c?" archived":""}`,chat:R,disabled:c?!__:!e1})}if(C1)J.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(w1)J.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:f_});if($_)J.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return J},[Q1,__,e1,C1,w1,$_,f_]),V4=async(J)=>{if(J?.preventDefault)J.preventDefault();if(J?.stopPropagation)J.stopPropagation();if(typeof P0!=="function"||B0||L1.current)return;L1.current=!0,Z0(!1);try{await P0()}catch(R){console.warn("Failed to rename session:",R)}finally{L1.current=!1}requestAnimationFrame(()=>$1.current?.focus())},n4=async()=>{if(typeof M0!=="function")return;Z0(!1);try{await M0()}catch(J){console.warn("Failed to create session:",J)}requestAnimationFrame(()=>$1.current?.focus())},P_=async()=>{if(typeof w0!=="function")return;Z0(!1);try{await w0(q0)}catch(J){console.warn("Failed to delete session:",J)}requestAnimationFrame(()=>$1.current?.focus())},j_=(J)=>{if(j)U1(J);else f0(J),T4(J),h4(J);requestAnimationFrame(()=>b_())},o_=(J)=>{let R=j?h0:D0,c=R&&!R.endsWith(`
`)?`
`:"",j0=`${R}${c}${J}`.trimStart();j_(j0)},y4=(J)=>{let R=J?.command?.model_label;if(R)return R;let c=J?.command?.message;if(typeof c==="string"){let j0=c.match(/•\s+([^\n]+?)\s+\(current\)/);if(j0?.[1])return j0[1].trim()}return null},P4=async(J)=>{if(j||T0)return;c0(!0);try{let R=await e4("default",J,null,[],null,q0),c=y4(R);y_({model:c??H??null,thinking_level:R?.command?.thinking_level,supports_thinking:R?.command?.supports_thinking});try{let j0=await A5(q0);if(j0)y_(j0)}catch{}return _?.(),!0}catch(R){return console.error("Failed to switch model:",R),alert("Failed to switch model: "+R.message),!1}finally{c0(!1)}},d4=async()=>{await P4("/cycle-model")},s_=async(J)=>{if(!J||T0)return;if(await P4(`/model ${J}`))b0(!1)},J_=(J)=>{if(!J||J.disabled)return;if(J.type==="session"){let R=J.chat;if(R?.archived_at)l4(R.chat_jid);else c4(R.chat_jid);return}if(J.type==="action"){if(J.action==="new"){n4();return}if(J.action==="rename"){V4();return}if(J.action==="delete")P_()}},H5=(J)=>{J.preventDefault(),J.stopPropagation(),O1.current={value:"",updatedAt:0},Z0(!1),b0((R)=>!R)},U4=async()=>{if(j)return;E?.(),await O_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},C4=(J)=>{if(J==="queue"||J==="steer"||J==="auto")return J;return e?"queue":void 0},O_=async(J,R,c={})=>{let{includeMedia:j0=!0,includeFileRefs:S0=!0,includeMessageRefs:B1=!0,clearAfterSubmit:A1=!0,recordHistory:R1=!0}=c||{},a_=typeof J==="string"?J:J&&typeof J?.target?.value==="string"?J.target.value:D0,S4=typeof a_==="string"?a_:"";if(!S4.trim()&&(j0?a0.length===0:!0)&&(S0?G.length===0:!0)&&(B1?V.length===0:!0))return;K0(!1),U0([]),X0(!1),i([]),Z0(!1),S1(null);let i4=j0?[...a0]:[],w4=S0?[...G]:[],n1=B1?[...V]:[],t_=S4.trim();if(R1&&t_){let L4=V1.current,I1=G_(L4.filter((F5)=>F5!==t_));if(I1.push(t_),I1.length>200)I1.splice(0,I1.length-200);V1.current=I1,h1(I1),k1.current=-1,s1.current=""}let i8=()=>{if(j0)m0([...i4]);if(S0)N0?.(w4);if(B1)I0?.(n1);f0(t_),requestAnimationFrame(()=>b_())};if(A1)f0(""),m0([]),X?.(),L?.();(async()=>{try{if(await n?.({content:t_,submitMode:R,fileRefs:w4,messageRefs:n1,mediaFiles:i4})){_?.();return}let I1=[];for(let Y_ of i4){let W4=await F6(Y_);I1.push(W4.id)}let F5=w4.length?`Files:
${w4.map((Y_)=>`- ${Y_}`).join(`
`)}`:"",r8=n1.length?`Referenced messages:
${n1.map((Y_)=>`- message:${Y_}`).join(`
`)}`:"",d5=I1.length?`Attachments:
${I1.map((Y_,W4)=>{let r4=i4[W4]?.name||`attachment-${W4+1}`;return`- attachment:${Y_} (${r4})`}).join(`
`)}`:"",o8=[t_,F5,r8,d5].filter(Boolean).join(`

`),R4=await e4("default",o8,null,I1,C4(R),q0);if(d?.(R4),R4?.command){y_({model:R4.command.model_label??H??null,thinking_level:R4.command.thinking_level,supports_thinking:R4.command.supports_thinking});try{let Y_=await A5(q0);if(Y_)y_(Y_)}catch{}}_?.()}catch(L4){if(A1)i8();let I1=L4?.message||"Failed to send message.";S1(I1),F0?.(I1),console.error("Failed to post:",L4)}})()},A=(J)=>{l?.(J)},x=T((J)=>{if(j||!O0&&!A0||J?.isComposing)return!1;let R=()=>{J.preventDefault?.(),J.stopPropagation?.()},c=()=>{O1.current={value:"",updatedAt:0}};if(J.key==="Escape"){if(R(),c(),O0)b0(!1);if(A0)Z0(!1);return!0}if(O0){if(J.key==="ArrowDown"){if(R(),c(),C.length>0)E0((j0)=>(j0+1)%C.length);return!0}if(J.key==="ArrowUp"){if(R(),c(),C.length>0)E0((j0)=>(j0-1+C.length)%C.length);return!0}if((J.key==="Enter"||J.key==="Tab")&&C.length>0)return R(),c(),s_(C[Math.max(0,Math.min(z0,C.length-1))]),!0;if(l$(J)&&C.length>0){R();let j0=n$(O1.current,J.key);O1.current=j0;let S0=d$(C,j0.value,z0,(B1)=>B1);if(S0>=0)E0(S0);return!0}}if(A0){if(J.key==="ArrowDown"){if(R(),c(),F1.length>0)j1((j0)=>(j0+1)%F1.length);return!0}if(J.key==="ArrowUp"){if(R(),c(),F1.length>0)j1((j0)=>(j0-1+F1.length)%F1.length);return!0}if((J.key==="Enter"||J.key==="Tab")&&F1.length>0)return R(),c(),J_(F1[Math.max(0,Math.min(i0,F1.length-1))]),!0;if(l$(J)&&F1.length>0){R();let j0=n$(O1.current,J.key);O1.current=j0;let S0=d$(F1,j0.value,i0,(B1)=>B1.label);if(S0>=0)j1(S0);return!0}}return!1},[j,O0,A0,C,z0,F1,i0,s_]),v=(J)=>{if(J.isComposing)return;if(j&&J.key==="Escape"){J.preventDefault(),U1(""),K?.();return}if(x(J))return;let R=$1.current?.value??(j?h0:D0);if(nZ(J,R,{searchMode:j,showSessionSwitcherButton:x_})){J.preventDefault(),r_();return}if(x0&&p.length>0){let c=$1.current?.value??(j?h0:D0);if(!String(c||"").match(/^@([a-zA-Z0-9_-]*)$/))X0(!1),i([]);else{if(J.key==="ArrowDown"){J.preventDefault(),k0((j0)=>(j0+1)%p.length);return}if(J.key==="ArrowUp"){J.preventDefault(),k0((j0)=>(j0-1+p.length)%p.length);return}if(J.key==="Tab"||J.key==="Enter"){J.preventDefault(),i_(p[J0]);return}if(J.key==="Escape"){J.preventDefault(),X0(!1),i([]);return}}}if(o&&s0.length>0){let c=$1.current?.value??(j?h0:D0);if(!String(c||"").startsWith("/"))K0(!1),U0([]);else{if(J.key==="ArrowDown"){J.preventDefault(),_1((j0)=>(j0+1)%s0.length);return}if(J.key==="ArrowUp"){J.preventDefault(),_1((j0)=>(j0-1+s0.length)%s0.length);return}if(J.key==="Tab"){J.preventDefault(),d_(s0[R0]);return}if(J.key==="Enter"&&!J.shiftKey){if(!R.includes(" ")){J.preventDefault();let S0=s0[R0];K0(!1),U0([]),O_(S0.name);return}}if(J.key==="Escape"){J.preventDefault(),K0(!1),U0([]);return}}}if(!j&&(J.key==="ArrowUp"||J.key==="ArrowDown")&&!J.metaKey&&!J.ctrlKey&&!J.altKey&&!J.shiftKey){let c=$1.current;if(!c)return;let j0=c.value||"",S0=c.selectionStart===0&&c.selectionEnd===0,B1=c.selectionStart===j0.length&&c.selectionEnd===j0.length;if(J.key==="ArrowUp"&&S0||J.key==="ArrowDown"&&B1){let A1=V1.current;if(!A1.length)return;J.preventDefault();let R1=k1.current;if(J.key==="ArrowUp"){if(R1===-1)s1.current=j0,R1=A1.length-1;else if(R1>0)R1-=1;k1.current=R1,j_(A1[R1]||"")}else{if(R1===-1)return;if(R1<A1.length-1)R1+=1,k1.current=R1,j_(A1[R1]||"");else k1.current=-1,j_(s1.current||""),s1.current=""}requestAnimationFrame(()=>{let a_=$1.current;if(!a_)return;let S4=a_.value.length;a_.selectionStart=S4,a_.selectionEnd=S4});return}}if(J.key==="Enter"&&!J.shiftKey&&(J.ctrlKey||J.metaKey)){if(J.preventDefault(),j){if(R.trim())Y?.(R.trim(),Z)}else O_(R,"steer");return}if(J.key==="Enter"&&!J.shiftKey)if(J.preventDefault(),j){if(R.trim())Y?.(R.trim(),Z)}else O_(R)},u=(J)=>{let R=Array.from(J||[]).filter((c)=>c instanceof File&&!String(c.name||"").startsWith(".DS_Store"));if(!R.length)return;m0((c)=>[...c,...R]),S1(null)},r=(J)=>{u(J.target.files),J.target.value=""},Q0=(J)=>{if(j)return;J.preventDefault(),J.stopPropagation(),X1.current+=1,o0(!0)},L0=(J)=>{if(j)return;if(J.preventDefault(),J.stopPropagation(),X1.current=Math.max(0,X1.current-1),X1.current===0)o0(!1)},W0=(J)=>{if(j)return;if(J.preventDefault(),J.stopPropagation(),J.dataTransfer)J.dataTransfer.dropEffect="copy";o0(!0)},$0=(J)=>{if(j)return;J.preventDefault(),J.stopPropagation(),X1.current=0,o0(!1),u(J.dataTransfer?.files||[])},u0=(J)=>{if(j)return;let R=J.clipboardData?.items;if(!R||!R.length)return;let c=[];for(let j0 of R){if(j0.kind!=="file")continue;let S0=j0.getAsFile?.();if(S0)c.push(S0)}if(c.length>0)J.preventDefault(),u(c)},M1=(J)=>{m0((R)=>R.filter((c,j0)=>j0!==J))},D_=()=>{S1(null),m0([]),X?.(),L?.()},Z_=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((J)=>{let{latitude:R,longitude:c,accuracy:j0}=J.coords,S0=`${R.toFixed(5)}, ${c.toFixed(5)}`,B1=Number.isFinite(j0)?` ±${Math.round(j0)}m`:"",A1=`https://maps.google.com/?q=${R},${c}`,R1=`Location: ${S0}${B1} ${A1}`;o_(R1)},(J)=>{let R=J?.message||"Unable to retrieve location.";alert(`Location error: ${R}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};g(()=>{if(!O0)return;O1.current={value:"",updatedAt:0},v1(!0),A5(q0).then((J)=>{let R=Array.isArray(J?.models)?J.models.filter((c)=>typeof c==="string"&&c.trim().length>0):[];R.sort((c,j0)=>c.localeCompare(j0,void 0,{sensitivity:"base"})),t(R),y_(J)}).catch((J)=>{console.warn("Failed to load model list:",J),t([])}).finally(()=>{v1(!1)})},[O0,H]),g(()=>{if(j)b0(!1),Z0(!1),K0(!1),U0([]),X0(!1),i([])},[j]),g(()=>{if(A0&&!x_)Z0(!1)},[A0,x_]),g(()=>{if(!O0)return;let J=C.findIndex((R)=>R===H);E0(J>=0?J:0)},[O0,C,H]),g(()=>{if(!A0)return;j1(z5(F1)),O1.current={value:"",updatedAt:0}},[A0,q0]),g(()=>{if(!O0)return;let J=(R)=>{let c=o1.current,j0=c_.current,S0=R.target;if(c&&c.contains(S0))return;if(j0&&j0.contains(S0))return;b0(!1)};return document.addEventListener("pointerdown",J),()=>document.removeEventListener("pointerdown",J)},[O0]),g(()=>{if(!A0)return;let J=(R)=>{let c=v_.current,j0=J1.current,S0=R.target;if(c&&c.contains(S0))return;if(j0&&j0.contains(S0))return;Z0(!1)};return document.addEventListener("pointerdown",J),()=>document.removeEventListener("pointerdown",J)},[A0]),g(()=>{if(j||!O0&&!A0)return;let J=(R)=>{x(R)};return document.addEventListener("keydown",J,!0),()=>document.removeEventListener("keydown",J,!0)},[j,O0,A0,x]),g(()=>{if(!O0)return;let J=o1.current;J?.focus?.(),J?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,z0,C]),g(()=>{if(!A0)return;let J=v_.current;J?.focus?.(),J?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[A0,i0,F1.length]),g(()=>{let J=()=>{let B1=p1.current?.clientWidth||0;k_((A1)=>A1===B1?A1:B1)};J();let R=p1.current,c=0,j0=()=>{if(c)cancelAnimationFrame(c);c=requestAnimationFrame(()=>{c=0,J()})},S0=null;if(R&&typeof ResizeObserver<"u")S0=new ResizeObserver(()=>j0()),S0.observe(R);if(typeof window<"u")window.addEventListener("resize",j0);return()=>{if(c)cancelAnimationFrame(c);if(S0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",j0)}},[j,H,H1?.agent_name,x_,D?.percent]);let n5=(J)=>{let R=J.target.value;if(S1(null),A0)Z0(!1);b_(J.target),j_(R)};return g(()=>{requestAnimationFrame(()=>b_())},[D0,h0,j]),g(()=>{if(!I_)return;f1(Date.now());let J=setInterval(()=>f1(Date.now()),1000);return()=>clearInterval(J)},[I_,Y0?.started_at,Y0?.startedAt]),g(()=>{if(j)return;h4(D0)},[l1,q0,D0,j]),z`
        <div class="compose-box">
            ${y0&&!j&&z`
                <${o$}
                    items=${w}
                    onInjectQueuedFollowup=${A}
                    onRemoveQueuedFollowup=${f}
                    onOpenFilePill=${k}
                />
            `}
            ${Y0&&z`
                <div
                    class=${`compose-inline-status${I_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${I4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${M4}</span>
                        ${Z1&&z`<span class="compose-inline-status-elapsed">${Z1}</span>`}
                    </div>
                    ${I4&&z`<div class="compose-inline-status-detail">${I4}</div>`}
                </div>
            `}
            ${r1&&z`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${r1}</div>
            `}
            <div
                class=${`compose-input-wrapper${p0?" drag-active":""}`}
                onDragEnter=${Q0}
                onDragOver=${W0}
                onDragLeave=${L0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${X4&&z`
                        <div class="compose-file-refs">
                            ${V.map((J)=>{return z`
                                    <${u_}
                                        key=${"msg-"+J}
                                        prefix="compose"
                                        label=${"msg:"+J}
                                        title=${"Message reference: "+J}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(J)}
                                    />
                                `})}
                            ${G.map((J)=>{let R=J.split("/").pop()||J;return z`
                                    <${u_}
                                        prefix="compose"
                                        label=${R}
                                        title=${J}
                                        onClick=${()=>k?.(J)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>N?.(J)}
                                    />
                                `})}
                            ${a0.map((J,R)=>{let c=J?.name||`attachment-${R+1}`;return z`
                                    <${u_}
                                        key=${c+R}
                                        prefix="compose"
                                        label=${c}
                                        title=${c}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>M1(R)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${D_}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof s==="function"&&z`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>s?.()}
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
                        ref=${$1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?h0:D0}
                        onInput=${n5}
                        onKeyDown=${v}
                        onPaste=${u0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${x0&&p.length>0&&z`
                        <div class="slash-autocomplete" ref=${h_}>
                            ${p.map((J,R)=>z`
                                <div
                                    key=${J.chat_jid||J.agent_name}
                                    class=${`slash-item${R===J0?" active":""}`}
                                    onMouseDown=${(c)=>{c.preventDefault(),i_(J)}}
                                    onMouseEnter=${()=>k0(R)}
                                >
                                    <span class="slash-name">@${J.agent_name}</span>
                                    <span class="slash-desc">${J.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${o&&s0.length>0&&z`
                        <div class="slash-autocomplete" ref=${m1}>
                            ${s0.map((J,R)=>z`
                                <div
                                    key=${J.name}
                                    class=${`slash-item${R===R0?" active":""}`}
                                    onMouseDown=${(c)=>{c.preventDefault(),d_(J)}}
                                    onMouseEnter=${()=>_1(R)}
                                >
                                    <span class="slash-name">${J.name}</span>
                                    <span class="slash-desc">${J.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&!j&&z`
                        <div class="compose-model-popup" ref=${o1} tabIndex="-1" onKeyDown=${x}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${q1&&z`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!q1&&C.length===0&&z`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!q1&&C.map((J,R)=>z`
                                    <button
                                        key=${J}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${z0===R?" active":""}${H===J?" current-model":""}`}
                                        onClick=${()=>{s_(J)}}
                                        disabled=${T0}
                                    >
                                        ${J}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{d4()}}
                                    disabled=${T0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${A0&&!j&&z`
                        <div class="compose-model-popup" ref=${v_} tabIndex="-1" onKeyDown=${x}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${z`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return WZ(H1,q0)})()}
                                    </div>
                                `}
                                ${!t1&&z`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${t1&&Q1.map((J,R)=>{let c=Boolean(J.archived_at),S0=J.chat_jid!==(J.root_chat_jid||J.chat_jid)&&!J.is_active&&!c&&typeof w0==="function",B1=v8(J,{currentChatJid:q0});return z`
                                        <div key=${J.chat_jid} class=${`compose-model-popup-item-row${c?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${c?" archived":""}${i0===R?" active":""}`}
                                                onClick=${()=>{if(c){l4(J.chat_jid);return}c4(J.chat_jid)}}
                                                disabled=${c?!__:!e1}
                                                title=${c?`Restore archived ${`@${J.agent_name}`}`:`Switch to ${`@${J.agent_name}`}`}
                                            >
                                                ${B1}
                                            </button>
                                            ${S0&&z`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${J.agent_name}`}
                                                    onClick=${(A1)=>{A1.stopPropagation(),Z0(!1),w0(J.chat_jid)}}
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
                            ${(C1||w1||$_)&&z`
                                <div class="compose-model-popup-actions">
                                    ${C1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${F1.findIndex((J)=>J.key==="action:new")===i0?" active":""}`}
                                            onClick=${()=>{n4()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${w1&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${F1.findIndex((J)=>J.key==="action:rename")===i0?" active":""}`}
                                            onClick=${(J)=>{V4(J)}}
                                            title="Rename the current branch handle"
                                            disabled=${f_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${$_&&z`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${F1.findIndex((J)=>J.key==="action:delete")===i0?" active":""}`}
                                            onClick=${()=>{P_()}}
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
                <div class="compose-footer" ref=${p1}>
                    ${!j&&H&&z`
                    <div class="compose-meta-row">
                        ${!j&&H&&z`
                            <div class="compose-model-meta">
                                <button
                                    ref=${c_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${p4}
                                    aria-label="Open model picker"
                                    onClick=${H5}
                                    disabled=${T0}
                                >
                                    ${T0?"Switching…":W1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!T0&&H_&&z`
                                        <span class="compose-model-usage-hint" title=${p4}>
                                            ${H_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&z`
                            <${AN} usage=${D} onCompact=${U4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${x_&&z`
                        ${H1?.agent_name&&z`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${H1.chat_jid||q0}
                                aria-label=${`Manage sessions for @${H1.agent_name}`}
                                onClick=${F_}
                            >@${H1.agent_name}</button>
                        `}
                        <button
                            ref=${J1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${A0?" active":""}`}
                            onClick=${F_}
                            title=${A0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${A0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&z`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(J)=>q?.(J.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?K:Q}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:z`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${l_&&!j&&z`
                        <button
                            class="icon-btn location-btn"
                            onClick=${Z_}
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
                    ${N4&&!j&&z`
                        <button
                            class=${`icon-btn notification-btn${W_?" active":""}`}
                            onClick=${b}
                            title=${D1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&z`
                        ${M&&B&&z`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${B}
                                title=${`Attach open file: ${M}`}
                                type="button"
                                disabled=${G.includes(M)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${r} />
                        </label>
                    `}
                    ${(G0!=="connected"||!j)&&z`
                        <div class="compose-send-stack">
                            ${G0!=="connected"&&z`
                                <span class="compose-connection-status connection-status ${G0}" title=${B_}>
                                    ${a1}
                                </span>
                            `}
                            ${!j&&z`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{O_()}}
                                    disabled=${!c1}
                                    title="Send (Enter)"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}function rZ({session:_,onClose:$,onInject:j,onRetry:Z}){let Y=y(null),q=y(null),Q=_?.thinking?f5(_.thinking):"",K=_?.answer?V_(_.answer,null,{sanitize:!1}):"";if(g(()=>{if(Y.current&&Q)G4(Y.current).catch(()=>{})},[Q]),g(()=>{if(q.current&&K)G4(q.current).catch(()=>{})},[K]),!_)return null;let G=_.status==="running",N=Boolean(String(_.answer||"").trim()),X=Boolean(String(_.thinking||"").trim()),V=g9(_),U=m9(_),L=!G&&N,H=G?"Thinking…":_.status==="error"?"Error":"Done";return z`
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

            ${_.question&&z`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&z`<div class="btw-block btw-error">${_.error}</div>`}
            ${X&&z`
                <details class="btw-block btw-thinking" open=${G?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:Q}}
                    ></div>
                </details>
            `}
            ${V&&z`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${q}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </div>
            `}

            ${U&&z`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&z`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!L}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function oZ({widget:_,onClose:$,onWidgetEvent:j}){let Z=y(null),Y=y(!1),q=g0(()=>jj(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(g(()=>{if(!_)return;let W=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[_,$]),g(()=>{Y.current=!1},[q]),g(()=>{if(!_)return;let W=Z.current;if(!W)return;let D=(h)=>{let I=P8(_),M=h==="widget.init"?T8(_):y8(_);try{W.name=I}catch{}try{W.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:h,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M},"*")}catch{}},E=()=>{D("widget.init"),D("widget.update")},S=()=>{Y.current=!0,E()};W.addEventListener("load",S);let b=[0,40,120,300,800].map((h)=>setTimeout(E,h));return()=>{W.removeEventListener("load",S),b.forEach((h)=>clearTimeout(h))}},[q,_?.widgetId,_?.toolCallId,_?.turnId]),g(()=>{if(!_)return;let W=Z.current;if(!W?.contentWindow)return;let D=P8(_),E=y8(_);try{W.name=D}catch{}try{W.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:E},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),g(()=>{if(!_)return;let W=(D)=>{let E=D?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let S=Z.current,P=U_(_),b=U_({widgetId:E.widgetId,toolCallId:E.toolCallId});if(b&&P&&b!==P)return;if(!b&&S?.contentWindow&&D.source!==S.contentWindow)return;j?.(E,_)};return window.addEventListener("message",W),()=>window.removeEventListener("message",W)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",G=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",N=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=X==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",L=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",H=!q,O=$j(_),F=t9(_);return z`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${G}
                onClick=${(W)=>W.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${K.toUpperCase()}</div>
                        <div class="floating-widget-title">${G}</div>
                        ${(N||L)&&z`
                            <div class="floating-widget-subtitle">${N||L}</div>
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
                    ${H?z`<div class="floating-widget-empty">${O}</div>`:z`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${G}
                                name=${P8(_)}
                                sandbox=${F}
                                referrerpolicy="no-referrer"
                                srcdoc=${q}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var sZ="PiClaw";function s$(_,$,j=!1){let Z=_||"PiClaw",Y=Z.charAt(0).toUpperCase(),q=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Q=Y.charCodeAt(0)%q.length,K=q[Q],G=Z.trim().toLowerCase(),N=typeof $==="string"?$.trim():"",X=N?N:null,V=j||G==="PiClaw".toLowerCase()||G==="pi";return{letter:Y,color:K,image:X||(V?"/static/icon-192.png":null)}}function aZ(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function tZ(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function eZ(_){if(!_)return null;if(typeof document<"u"){let q=document.documentElement,Q=q?.dataset?.colorTheme||"",K=q?.dataset?.tint||"",G=getComputedStyle(q).getPropertyValue("--accent-color")?.trim();if(G&&(K||Q&&Q!=="default"))return G}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let q=0;q<j.length;q+=1)Z=(Z*31+j.charCodeAt(q))%2147483647;let Y=Math.abs(Z)%$.length;return $[Y]}var IN=z`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function a$({status:_,draft:$,plan:j,thought:Z,pendingRequest:Y,intent:q,extensionPanels:Q=[],pendingPanelActions:K=new Set,onExtensionPanelAction:G,turnId:N,steerQueued:X,onPanelToggle:V,showCorePanels:U=!0,showExtensionPanels:L=!0}){let F=(o)=>{if(!o)return{text:"",totalLines:0,fullText:""};if(typeof o==="string"){let J0=o,k0=J0?J0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:J0,totalLines:k0,fullText:J0}}let K0=o.text||"",p=o.fullText||o.full_text||K0,i=Number.isFinite(o.totalLines)?o.totalLines:p?p.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:K0,totalLines:i,fullText:p}},W=160,D=(o)=>String(o||"").replace(/<\/?internal>/gi,""),E=(o)=>{if(!o)return 1;return Math.max(1,Math.ceil(o.length/160))},S=(o,K0,p)=>{let i=(o||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!i)return{text:"",omitted:0,totalLines:Number.isFinite(p)?p:0,visibleLines:0};let J0=i.split(`
`),k0=J0.length>K0?J0.slice(0,K0).join(`
`):i,x0=Number.isFinite(p)?p:J0.reduce((c0,O0)=>c0+E(O0),0),X0=k0?k0.split(`
`).reduce((c0,O0)=>c0+E(O0),0):0,T0=Math.max(x0-X0,0);return{text:k0,omitted:T0,totalLines:x0,visibleLines:X0}},P=F(j),b=F(Z),h=F($),I=Boolean(P.text)||P.totalLines>0,M=Boolean(b.text)||b.totalLines>0,B=Boolean(h.fullText?.trim()||h.text?.trim()),k=Boolean(_||B||I||M||Y||q),w=Array.isArray(Q)&&Q.length>0;if((!U||!k)&&(!L||!w))return null;let[l,f]=m(new Set),[n,d]=m(null),[s,e]=m(()=>Date.now()),a=(o)=>f((K0)=>{let p=new Set(K0),i=!p.has(o);if(i)p.add(o);else p.delete(o);if(typeof V==="function")V(o,i);return p});g(()=>{f(new Set),d(null)},[N]);let q0=D4(_);g(()=>{if(!q0)return;e(Date.now());let o=setInterval(()=>e(Date.now()),1000);return()=>clearInterval(o)},[q0,_?.started_at,_?.startedAt]);let G0=_?.turn_id||N,N0=eZ(G0),I0=X?"turn-dot turn-dot-queued":"turn-dot",F0=(o)=>o,V0=Boolean(_?.last_activity||_?.lastActivity),P0=(o)=>o==="warning"?"#f59e0b":o==="error"?"var(--danger-color)":o==="success"?"var(--success-color)":N0,B0=q?.kind||"info",M0=P0(B0),w0=P0(_?.kind||(q0?"warning":"info")),H0="",y0=_?.title,Y0=_?.status;if(_?.type==="plan")H0=y0?`Planning: ${y0}`:"Planning...";else if(_?.type==="tool_call")H0=y0?`Running: ${y0}`:"Running tool...";else if(_?.type==="tool_status")H0=y0?`${y0}: ${Y0||"Working..."}`:Y0||"Working...";else if(_?.type==="error")H0=y0||"Agent error";else H0=y0||Y0||"Working...";if(V0)H0="Last activity just now";let D0=({panelTitle:o,text:K0,fullText:p,totalLines:i,maxLines:J0,titleClass:k0,panelKey:x0})=>{let X0=l.has(x0),T0=p||K0||"",c0=x0==="thought"||x0==="draft"?D(T0):T0,O0=typeof J0==="number",b0=X0&&O0,A0=O0?S(c0,J0,i):{text:c0||"",omitted:0,totalLines:Number.isFinite(i)?i:0};if(!c0&&!(Number.isFinite(A0.totalLines)&&A0.totalLines>0))return null;let Z0=`agent-thinking-body${O0?" agent-thinking-body-collapsible":""}`,C=O0?`--agent-thinking-collapsed-lines: ${J0};`:"";return z`
            <div
                class="agent-thinking"
                data-expanded=${X0?"true":"false"}
                data-collapsible=${O0?"true":"false"}
                style=${N0?`--turn-color: ${N0};`:""}
            >
                <div class="agent-thinking-title ${k0||""}">
                    ${N0&&z`<span class=${I0} aria-hidden="true"></span>`}
                    ${o}
                    ${b0&&z`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${o} panel`}
                            onClick=${()=>a(x0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${Z0}
                    style=${C}
                    dangerouslySetInnerHTML=${{__html:f5(c0)}}
                />
                ${!X0&&A0.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>a(x0)}>
                        ▸ ${A0.omitted} more lines
                    </button>
                `}
                ${X0&&A0.omitted>0&&z`
                    <button class="agent-thinking-truncation" onClick=${()=>a(x0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},f0=Y?.tool_call?.title,h0=f0?`Awaiting approval: ${f0}`:"Awaiting approval",U1=q0?I8(_,s):null,a0=(o,K0,p=null)=>{let i=M8(o);return z`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${K0?`--turn-color: ${K0};`:""}
                title=${o?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${K0&&z`<span class=${I0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${i}</span>
                    ${p&&z`<span class="agent-status-elapsed">${p}</span>`}
                </div>
                ${o.detail&&z`<div class="agent-thinking-body">${o.detail}</div>`}
            </div>
        `},m0=(o,K0,p,i,J0,k0,x0,X0=8,T0=8)=>{let c0=Math.max(J0-i,0.000000001),O0=Math.max(K0-X0*2,1),b0=Math.max(p-T0*2,1),A0=Math.max(x0-k0,1),Z0=x0===k0?K0/2:X0+(o.run-k0)/A0*O0,C=T0+(b0-(o.value-i)/c0*b0);return{x:Z0,y:C}},p0=(o,K0,p,i,J0,k0,x0,X0=8,T0=8)=>{if(!Array.isArray(o)||o.length===0)return"";return o.map((c0,O0)=>{let{x:b0,y:A0}=m0(c0,K0,p,i,J0,k0,x0,X0,T0);return`${O0===0?"M":"L"} ${b0.toFixed(2)} ${A0.toFixed(2)}`}).join(" ")},o0=(o,K0="")=>{if(!Number.isFinite(o))return"—";return`${Math.abs(o)>=100?o.toFixed(0):o.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${K0}`},s0=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],U0=(o,K0)=>{let p=s0;if(!Array.isArray(p)||p.length===0)return"var(--accent-color)";if(p.length===1||!Number.isFinite(K0)||K0<=1)return p[0];let J0=Math.max(0,Math.min(Number.isFinite(o)?o:0,K0-1))/Math.max(1,K0-1)*(p.length-1),k0=Math.floor(J0),x0=Math.min(p.length-1,k0+1),X0=J0-k0,T0=p[k0],c0=p[x0];if(!c0||k0===x0||X0<=0.001)return T0;if(X0>=0.999)return c0;let O0=Math.round((1-X0)*1000)/10,b0=Math.round(X0*1000)/10;return`color-mix(in oklab, ${T0} ${O0}%, ${c0} ${b0}%)`},R0=(o,K0="autoresearch")=>{let p=Array.isArray(o)?o.map((Z0)=>({...Z0,points:Array.isArray(Z0?.points)?Z0.points.filter((C)=>Number.isFinite(C?.value)&&Number.isFinite(C?.run)):[]})).filter((Z0)=>Z0.points.length>0):[],i=p.map((Z0,C)=>({...Z0,color:U0(C,p.length)}));if(i.length===0)return null;let J0=320,k0=120,x0=i.flatMap((Z0)=>Z0.points),X0=x0.map((Z0)=>Z0.value),T0=x0.map((Z0)=>Z0.run),c0=Math.min(...X0),O0=Math.max(...X0),b0=Math.min(...T0),A0=Math.max(...T0);return z`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${i.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${J0} ${k0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${i.map((Z0)=>{let C=Z0?.key||Z0?.label||"series",t=n?.panelKey===K0&&n?.seriesKey===C;return z`
                                <g key=${C}>
                                    <path
                                        class=${`agent-series-chart-line${t?" is-hovered":""}`}
                                        d=${p0(Z0.points,J0,k0,c0,O0,b0,A0)}
                                        style=${`--agent-series-color: ${Z0.color};`}
                                        onMouseEnter=${()=>d({panelKey:K0,seriesKey:C})}
                                        onMouseLeave=${()=>d((z0)=>z0?.panelKey===K0&&z0?.seriesKey===C?null:z0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${i.flatMap((Z0)=>{let C=typeof Z0?.unit==="string"?Z0.unit:"",t=Z0?.key||Z0?.label||"series";return Z0.points.map((z0,E0)=>{let i0=m0(z0,J0,k0,c0,O0,b0,A0);return z`
                                    <button
                                        key=${`${t}-point-${E0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${Z0.color}; left:${i0.x/J0*100}%; top:${i0.y/k0*100}%;`}
                                        onMouseEnter=${()=>d({panelKey:K0,seriesKey:t,run:z0.run,value:z0.value,unit:C})}
                                        onMouseLeave=${()=>d((j1)=>j1?.panelKey===K0?null:j1)}
                                        onFocus=${()=>d({panelKey:K0,seriesKey:t,run:z0.run,value:z0.value,unit:C})}
                                        onBlur=${()=>d((j1)=>j1?.panelKey===K0?null:j1)}
                                        aria-label=${`${Z0?.label||"Series"} ${o0(z0.value,C)} at run ${z0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${i.map((Z0)=>{let C=Z0.points[Z0.points.length-1]?.value,t=typeof Z0?.unit==="string"?Z0.unit:"",z0=Z0?.key||Z0?.label||"series",E0=n?.panelKey===K0&&n?.seriesKey===z0?n:null,i0=E0&&Number.isFinite(E0.value)?E0.value:C,j1=E0&&typeof E0.unit==="string"?E0.unit:t,q1=E0&&Number.isFinite(E0.run)?E0.run:null;return z`
                            <div key=${`${z0}-legend`} class=${`agent-series-legend-item${E0?" is-hovered":""}`} style=${`--agent-series-color: ${Z0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${Z0.color};`}></span>
                                <span class="agent-series-legend-label">${Z0?.label||"Series"}</span>
                                ${q1!==null&&z`<span class="agent-series-legend-run">run ${q1}</span>`}
                                <span class="agent-series-legend-value">${o0(i0,j1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},_1=(o)=>{if(!o)return null;let K0=typeof o?.key==="string"?o.key:`panel-${Math.random()}`,p=l.has(K0),i=o?.title||"Extension status",J0=o?.collapsed_text||"",k0=String(o?.state||"").replace(/[-_]+/g," ").replace(/^./,(t)=>t.toUpperCase()),x0=P0(o?.state==="completed"?"success":o?.state==="failed"?"error":o?.state==="stopped"?"warning":"info"),X0=typeof o?.detail_markdown==="string"?o.detail_markdown.trim():"",T0=typeof o?.last_run_text==="string"?o.last_run_text.trim():"",c0=typeof o?.tmux_command==="string"?o.tmux_command.trim():"",O0=Array.isArray(o?.series)?o.series:[],b0=Array.isArray(o?.actions)?o.actions:[],A0=Boolean(X0||c0),Z0=Boolean(X0||O0.length>0||c0),C=[i,J0].filter(Boolean).join(" — ");return z`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${p?"true":"false"}
                style=${x0?`--turn-color: ${x0};`:""}
                title=${!p?C||i:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>Z0?a(K0):null}
                    >
                        ${x0&&z`<span class=${I0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${i}</span>
                        ${J0&&z`<span class="agent-thinking-title-meta">${J0}</span>`}
                    </button>
                    ${(b0.length>0||Z0&&!p)&&z`
                        <div class="agent-thinking-tools-inline">
                            ${b0.length>0&&z`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${b0.map((t)=>{let z0=`${K0}:${t?.key||""}`,E0=K?.has?.(z0);return z`
                                            <button
                                                key=${z0}
                                                class=${`agent-thinking-action-btn${t?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>G?.(o,t)}
                                                disabled=${Boolean(E0)}
                                            >
                                                ${E0?"Working…":t?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${Z0&&!p&&z`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${i}`}
                                    title="Expand details"
                                    onClick=${()=>a(K0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${Z0&&p&&z`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${i}`}
                        title="Collapse details"
                        onClick=${()=>a(K0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${p&&z`
                    <div class=${`agent-thinking-autoresearch-layout${A0?"":" chart-only"}`}>
                        ${A0&&z`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${X0&&z`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:f5(X0)}}
                                    />
                                `}
                                ${c0&&z`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${c0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>G?.(o,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${IN}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${O0.length>0?z`
                                <div class="agent-series-chart-stack">
                                    ${R0(O0,K0)}
                                    ${T0&&z`<div class="agent-series-chart-note">${T0}</div>`}
                                </div>
                            `:z`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return z`
        <div class="agent-status-panel">
            ${U&&q&&a0(q,M0)}
            ${L&&Array.isArray(Q)&&Q.map((o)=>_1(o))}
            ${U&&_?.type==="intent"&&a0(_,w0,U1)}
            ${U&&Y&&z`
                <div class="agent-status agent-status-request" aria-live="polite" style=${N0?`--turn-color: ${N0};`:""}>
                    <span class=${I0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${h0}</span>
                </div>
            `}
            ${U&&I&&D0({panelTitle:F0("Planning"),text:P.text,fullText:P.fullText,totalLines:P.totalLines,panelKey:"plan"})}
            ${U&&M&&D0({panelTitle:F0("Thoughts"),text:b.text,fullText:b.fullText,totalLines:b.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&B&&D0({panelTitle:F0("Draft"),text:h.text,fullText:h.fullText,totalLines:h.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&z`
                <div class=${`agent-status${V0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${N0?`--turn-color: ${N0};`:""}>
                    ${N0&&z`<span class=${I0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?z`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!V0&&z`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${H0}</span>
                </div>
            `}
        </div>
    `}function _Y({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Y,chat_jid:q}=_,Q=Z?.title||"Agent Request",K=Z?.kind||"other",G=Z?.rawInput||{},N=G.command||G.commands&&G.commands[0]||null,X=G.diff||null,V=G.fileName||G.path||null,U=Z?.description||G.description||G.explanation||null,H=(Array.isArray(Z?.locations)?Z.locations:[]).map((E)=>E?.path).filter((E)=>Boolean(E)),O=Array.from(new Set([V,...H].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Y});let F=async(E)=>{try{await Q8(j,E,q||null),$()}catch(S){console.error("Failed to respond to agent request:",S)}},W=async()=>{try{await O6(Q,`Auto-approved: ${Q}`),await Q8(j,"approved",q||null),$()}catch(E){console.error("Failed to add to whitelist:",E)}},D=Y&&Y.length>0;return z`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Q}</div>
                </div>
                ${(U||N||X||O.length>0)&&z`
                    <div class="agent-request-body">
                        ${U&&z`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${O.length>0&&z`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${O.map((E,S)=>z`<li key=${S}>${E}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${N&&z`
                            <pre class="agent-request-command">${N}</pre>
                        `}
                        ${X&&z`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${X}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${D?Y.map((E)=>z`
                            <button 
                                key=${E.optionId||E.id||String(E)}
                                class="agent-request-btn ${E.kind==="allow_once"||E.kind==="allow_always"?"primary":""}"
                                onClick=${()=>F(E.optionId||E.id||E)}
                            >
                                ${E.name||E.label||E.optionId||E.id||String(E)}
                            </button>
                        `):z`
                        <button class="agent-request-btn primary" onClick=${()=>F("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>F("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${W}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}var xN=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),TN=new Set(["text/markdown"]),yN=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),PN=new Set(["application/vnd.jgraph.mxfile"]);function h5(_){return typeof _==="string"?_.trim().toLowerCase():""}function CN(_){let $=h5(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function SN(_){let $=h5(_);return!!$&&$.endsWith(".pdf")}function wN(_){let $=h5(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function c5(_,$){let j=h5(_);if(CN($)||PN.has(j))return"drawio";if(SN($)||j==="application/pdf")return"pdf";if(wN($)||yN.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(xN.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function $Y(_){let $=h5(_);return TN.has($)}function jY(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function RN(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Y)=>`${Y}${Y}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function uN(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Y=Number(j[2]),q=Number(j[3]);if(![Z,Y,q].every((Q)=>Number.isFinite(Q)))return null;return{r:Z,g:Y,b:q}}function ZY(_){return RN(_)||uN(_)}function h8(_){let $=(q)=>{let Q=q/255;return Q<=0.03928?Q/12.92:((Q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Y=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Y}function vN(_,$){let j=Math.max(h8(_),h8($)),Z=Math.min(h8(_),h8($));return(j+0.05)/(Z+0.05)}function fN(_,$,j="#ffffff"){let Z=ZY(_);if(!Z)return j;let Y=j,q=-1;for(let Q of $){let K=ZY(Q);if(!K)continue;let G=vN(Z,K);if(G>q)Y=Q,q=G}return Y}function t$(){let _=getComputedStyle(document.documentElement),$=(H,O)=>{for(let F of H){let W=_.getPropertyValue(F).trim();if(W)return W}return O},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Y=$(["--bg-primary","--color-bg-primary"],"#ffffff"),q=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),G=$(["--success-color","--color-success"],"#00ba7c"),N=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),X=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),L=fN(K,[j,Y],j);return{fg:j,fgMuted:Z,bgPrimary:Y,bg:q,bgEmphasis:Q,accent:K,good:G,warning:N,attention:X,border:V,fontFamily:U,buttonTextColor:L}}function YY(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Y,good:q,warning:Q,attention:K,border:G,fontFamily:N}=t$();return{fontFamily:N,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:q,subtle:q},warning:{default:Q,subtle:Q},attention:{default:K,subtle:K}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Y,subtle:Y},good:{default:q,subtle:q},warning:{default:Q,subtle:Q},attention:{default:K,subtle:K}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:G},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var bN=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),qY=!1,c8=null,QY=!1;function e$(_){_.querySelector(".adaptive-card-notice")?.remove()}function gN(_,$,j="error"){e$(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function mN(_,$=(j)=>V_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function pN(_=($)=>V_($,null)){return($,j)=>{try{let Z=mN($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function hN(_){if(QY||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=pN(),QY=!0}async function cN(){if(qY)return;if(c8)return c8;return c8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{qY=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),c8}function lN(){return globalThis.AdaptiveCards}function nN(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function dN(_){return bN.has(_)}function $3(_){if(!Array.isArray(_))return[];return _.filter(nN)}function iN(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Y=_?.data??void 0;return{type:$,title:j,data:Y,url:Z,raw:_}}function _3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>_3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${_3(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function rN(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return _3($);return typeof $==="string"?$:String($)}function oN(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Y)=>{if(Array.isArray(Y))return Y.map((K)=>Z(K));if(!Y||typeof Y!=="object")return Y;let Q={...Y};if(typeof Q.id==="string"&&Q.id in j&&String(Q.type||"").startsWith("Input."))Q.value=rN(Q.type,j[Q.id],Q);for(let[K,G]of Object.entries(Q))if(Array.isArray(G)||G&&typeof G==="object")Q[K]=Z(G);return Q};return Z(_)}function sN(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function aN(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function tN(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Y=aN(_.completed_at||j?.submitted_at),q=[Z||null,Y||null].filter(Boolean).join(" · ")||null;return{label:$,detail:q}}async function KY(_,$,j){if(!dN($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await cN()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=lN();hN(Z);let Y=new Z.AdaptiveCard,q=t$();Y.hostConfig=new Z.HostConfig(YY());let Q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:oN($.payload,Q);Y.parse(K),Y.onExecuteAction=(X)=>{let V=iN(X);if(j?.onAction)e$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let L=U instanceof Error?U.message:String(U||"Action failed.");gN(_,L||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let G=Y.render();if(!G)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",q.buttonTextColor);let N=tN($);if(N){_.classList.add("adaptive-card-finished");let X=document.createElement("div");X.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=N.label,X.appendChild(V),N.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=N.detail,X.appendChild(U)}_.appendChild(X)}if(e$(_),_.appendChild(G),N)sN(G);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function l5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${l5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function GY(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:l5(j)})).filter(($)=>$.value)}function eN(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function j3(_){if(!Array.isArray(_))return[];return _.filter(eN)}function NY(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=l5(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Y=GY(j).map(({key:q,value:Q})=>`${q}: ${Q}`);return Y.length>0?`Card submission: ${$} — ${Y.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function XY(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=GY(_.data),Z=j.length>0?j.slice(0,2).map(({key:q,value:Q})=>`${q}: ${Q}`).join(", "):l5(_.data)||null,Y=j.length;return{title:$,summary:Z,fields:j,fieldCount:Y,submittedAt:_.submitted_at}}function B5({children:_,className:$=""}){let j=y(null);return g(()=>{if(typeof document>"u")return;let Z=document.createElement("div");if($)Z.className=$;return document.body.appendChild(Z),j.current=Z,()=>{try{H4(null,Z)}finally{if(Z.remove(),j.current===Z)j.current=null}}},[$]),D5(()=>{let Z=j.current;if(!Z)return;return H4(_,Z),()=>{H4(null,Z)}},[_]),null}function _X(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?E_($):null},{label:"Added",value:_?.created_at?g4(_.created_at):null}].filter((Z)=>Z.value)}function $X(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Y=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Y}&name=${Z}#media=${Y}&name=${Z}`;if(j==="office"){let q=A_(_);return`/office-viewer/?url=${encodeURIComponent(q)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Y}&name=${Z}&readonly=1#media=${Y}&name=${Z}&readonly=1`;return null}function VY({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Y=g0(()=>c5($?.content_type,Z),[$?.content_type,Z]),q=jY(Y),Q=g0(()=>$Y($?.content_type),[$?.content_type]),[K,G]=m(Y==="text"),[N,X]=m(""),[V,U]=m(null),L=y(null),H=g0(()=>_X($),[$]),O=g0(()=>$X(_,Z,Y),[_,Z,Y]),F=g0(()=>{if(!Q||!N)return"";return V_(N)},[Q,N]);return g(()=>{let W=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[j]),g(()=>{if(!L.current||!F)return;G4(L.current);return},[F]),g(()=>{let W=!1;async function D(){if(Y!=="text"){G(!1),U(null);return}G(!0),U(null);try{let E=await k6(_);if(!W)X(E)}catch{if(!W)U("Failed to load text preview.")}finally{if(!W)G(!1)}}return D(),()=>{W=!0}},[_,Y]),z`
        <${B5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(W)=>{W.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Z}</div>
                            <div class="attachment-preview-subtitle">${q}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${O&&z`
                                <a
                                    href=${O}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(W)=>W.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${A_(_)}
                                download=${Z}
                                class="attachment-preview-download"
                                onClick=${(W)=>W.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${K&&z`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!K&&V&&z`<div class="attachment-preview-state">${V}</div>`}
                        ${!K&&!V&&Y==="image"&&z`
                            <img class="attachment-preview-image" src=${A_(_)} alt=${Z} />
                        `}
                        ${!K&&!V&&(Y==="pdf"||Y==="office"||Y==="drawio")&&O&&z`
                            <iframe class="attachment-preview-frame" src=${O} title=${Z}></iframe>
                        `}
                        ${!K&&!V&&Y==="drawio"&&z`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!K&&!V&&Y==="text"&&Q&&z`
                            <div
                                ref=${L}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:F}}
                            />
                        `}
                        ${!K&&!V&&Y==="text"&&!Q&&z`
                            <pre class="attachment-preview-text">${N}</pre>
                        `}
                        ${!K&&!V&&Y==="unsupported"&&z`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${H.map((W)=>z`
                            <div class="attachment-preview-meta-item" key=${W.label}>
                                <span class="attachment-preview-meta-label">${W.label}</span>
                                <span class="attachment-preview-meta-value">${W.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${B5}>
    `}function UY({src:_,onClose:$}){return g(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),z`
        <${B5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${B5}>
    `}function jX({mediaId:_,onPreview:$}){let[j,Z]=m(null);if(g(()=>{_5(_).then(Z).catch(()=>{})},[_]),!j)return null;let Y=j.filename||"file",q=j.metadata?.size,Q=q?E_(q):"",G=c5(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return z`
        <div class="file-attachment" onClick=${(N)=>N.stopPropagation()}>
            <a href=${A_(_)} download=${Y} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Y}</span>
                    <span class="file-meta-row">
                        ${Q&&z`<span class="file-size">${Q}</span>`}
                        ${j.content_type&&z`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(N)=>{N.preventDefault(),N.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${G}
            </button>
        </div>
    `}function ZX({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Y]=m(null);g(()=>{if(!Number.isFinite(j))return;_5(j).then(Y).catch(()=>{});return},[j]);let q=Z?.filename||_.label||`attachment-${_.id}`,Q=Number.isFinite(j)?A_(j):null,G=c5(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return z`
        <span class="attachment-pill" title=${q}>
            ${Q?z`
                    <a href=${Q} download=${q} class="attachment-pill-main" onClick=${(N)=>N.stopPropagation()}>
                        <${u_}
                            prefix="post"
                            label=${_.label}
                            title=${q}
                        />
                    </a>
                `:z`
                    <${u_}
                        prefix="post"
                        label=${_.label}
                        title=${q}
                    />
                `}
            ${Number.isFinite(j)&&Z&&z`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${G}
                    onClick=${(N)=>{N.preventDefault(),N.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function l8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,Y=Z?g4(Z):null;return z`
        <div class="content-annotations">
            ${$&&$.length>0&&z`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&z`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Y&&z`
                <span class="content-annotation">Updated: ${Y}</span>
            `}
        </div>
    `}function YX({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?E_(_.size):"",Y=_.mime_type||"",q=KX(Y),Q=b4(_.uri);return z`
        <a
            href=${Q||"#"}
            class="resource-link"
            target=${Q?"_blank":void 0}
            rel=${Q?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${q}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&z`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Y&&z`<span>${Y}</span>`}
                    ${Z&&z`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function qX({block:_}){let[$,j]=m(!1),Z=_.uri||"Embedded resource",Y=_.text||"",q=Boolean(_.data),Q=_.mime_type||"";return z`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&z`
                ${Y&&z`<pre class="resource-embed-content">${Y}</pre>`}
                ${q&&z`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Q&&z`<span class="resource-embed-blob-meta">${Q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(K)=>{K.preventDefault(),K.stopPropagation();let G=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:Q||"application/octet-stream"}),N=URL.createObjectURL(G),X=document.createElement("a");X.href=N,X.download=Z.split("/").pop()||"resource",X.click(),URL.revokeObjectURL(N)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function QX({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=P$(_,$),Y=s9(_),q=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Q=Z?.title||_.title||_.name||"Generated widget",K=Z?.description||_.description||_.subtitle||"",G=_.open_label||"Open widget",N=(X)=>{if(X.preventDefault(),X.stopPropagation(),!Z)return;j?.(Z)};return z`
        <div class="generated-widget-launch" onClick=${(X)=>X.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${q?` • ${String(q).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Q}</div>
            </div>
            ${K&&z`<div class="generated-widget-launch-description">${K}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Y}
                    onClick=${N}
                    title=${Y?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${G}
                </button>
                <span class="generated-widget-launch-note">
                    ${Y?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function KX(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function GX({preview:_}){let $=b4(_.url),j=b4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Y=_.site_name;if(!Y&&$)try{Y=new URL($).hostname}catch{Y=$}return z`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(q)=>q.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Y||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&z`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function NX(_,$){return typeof _==="string"?_:""}var XX=1800,VX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,UX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,LX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function WX(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function BX(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((q)=>q.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Y=(q,Q)=>{let K=Q||"idle";if(q.dataset.copyState=K,K==="success")q.innerHTML=UX,q.setAttribute("aria-label","Copied"),q.setAttribute("title","Copied"),q.classList.add("is-success"),q.classList.remove("is-error");else if(K==="error")q.innerHTML=LX,q.setAttribute("aria-label","Copy failed"),q.setAttribute("title","Copy failed"),q.classList.add("is-error"),q.classList.remove("is-success");else q.innerHTML=VX,q.setAttribute("aria-label","Copy code"),q.setAttribute("title","Copy code"),q.classList.remove("is-success","is-error")};return $.forEach((q)=>{let Q=document.createElement("div");Q.className="post-code-block",q.parentNode?.insertBefore(Q,q),Q.appendChild(q);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",Y(K,"idle"),Q.appendChild(K);let G=async(N)=>{N.preventDefault(),N.stopPropagation();let V=q.querySelector("code")?.textContent||"",U=await WX(V);Y(K,U?"success":"error");let L=j.get(K);if(L)clearTimeout(L);let H=setTimeout(()=>{Y(K,"idle"),j.delete(K)},XX);j.set(K,H)};K.addEventListener("click",G),Z.push(()=>{K.removeEventListener("click",G);let N=j.get(K);if(N)clearTimeout(N);if(Q.parentNode)Q.parentNode.insertBefore(q,Q),Q.remove()})}),()=>{Z.forEach((q)=>q())}}function zX(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let N=0;N<j.length;N+=1)if(j[N].trim()==="Files:"&&j[N+1]&&/^\s*-\s+/.test(j[N+1])){Z=N;break}if(Z===-1)return{content:_,fileRefs:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let N=j[q];if(/^\s*-\s+/.test(N))Y.push(N.replace(/^\s*-\s+/,"").trim());else if(!N.trim())break;else break}if(Y.length===0)return{content:_,fileRefs:[]};let Q=j.slice(0,Z),K=j.slice(q),G=[...Q,...K].join(`
`);return G=G.replace(/\n{3,}/g,`

`).trim(),{content:G,fileRefs:Y}}function HX(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let N=0;N<j.length;N+=1)if(j[N].trim()==="Referenced messages:"&&j[N+1]&&/^\s*-\s+/.test(j[N+1])){Z=N;break}if(Z===-1)return{content:_,messageRefs:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let N=j[q];if(/^\s*-\s+/.test(N)){let V=N.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Y.push(V[1])}else if(!N.trim())break;else break}if(Y.length===0)return{content:_,messageRefs:[]};let Q=j.slice(0,Z),K=j.slice(q),G=[...Q,...K].join(`
`);return G=G.replace(/\n{3,}/g,`

`).trim(),{content:G,messageRefs:Y}}function FX(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let N=0;N<j.length;N+=1){let X=j[N].trim();if((X==="Images:"||X==="Attachments:")&&j[N+1]&&/^\s*-\s+/.test(j[N+1])){Z=N;break}}if(Z===-1)return{content:_,attachments:[]};let Y=[],q=Z+1;for(;q<j.length;q+=1){let N=j[q];if(/^\s*-\s+/.test(N)){let X=N.replace(/^\s*-\s+/,"").trim(),V=X.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||X.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let U=V[1],L=(V[2]||"").trim()||U;Y.push({id:U,label:L,raw:X})}else Y.push({id:null,label:X,raw:X})}else if(!N.trim())break;else break}if(Y.length===0)return{content:_,attachments:[]};let Q=j.slice(0,Z),K=j.slice(q),G=[...Q,...K].join(`
`);return G=G.replace(/\n{3,}/g,`

`).trim(),{content:G,attachments:Y}}function JX(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function OX(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(JX).sort((X,V)=>V.length-X.length),Y=new RegExp(`(${Z.join("|")})`,"gi"),q=new RegExp(`^(${Z.join("|")})$`,"i"),Q=new DOMParser().parseFromString(_,"text/html"),K=Q.createTreeWalker(Q.body,NodeFilter.SHOW_TEXT),G=[],N;while(N=K.nextNode())G.push(N);for(let X of G){let V=X.nodeValue;if(!V||!Y.test(V)){Y.lastIndex=0;continue}Y.lastIndex=0;let U=X.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let L=V.split(Y).filter((O)=>O!=="");if(L.length===0)continue;let H=Q.createDocumentFragment();for(let O of L)if(q.test(O)){let F=Q.createElement("mark");F.className="search-highlight-term",F.textContent=O,H.appendChild(F)}else H.appendChild(Q.createTextNode(O));X.parentNode.replaceChild(H,X)}return Q.body.innerHTML}function LY({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Y,agentName:q,agentAvatarUrl:Q,userName:K,userAvatarUrl:G,userAvatarBackground:N,onDelete:X,isThreadReply:V,isThreadPrev:U,isThreadNext:L,isRemoving:H,highlightQuery:O,onFileRef:F,onOpenWidget:W}){let[D,E]=m(null),S=y(null),P=_.data,b=P.type==="agent_response",h=K||"You",I=b?q||sZ:h,M=b?s$(q,Q,!0):s$(h,G),B=typeof N==="string"?N.trim().toLowerCase():"",k=!b&&M.image&&(B==="clear"||B==="transparent"),w=b&&Boolean(M.image),l=`background-color: ${k||w?"transparent":M.color}`,f=P.content_meta,n=Boolean(f?.truncated),d=Boolean(f?.preview),s=n&&!d,e=n?{originalLength:Number.isFinite(f?.original_length)?f.original_length:P.content?P.content.length:0,maxLength:Number.isFinite(f?.max_length)?f.max_length:0}:null,a=P.content_blocks||[],q0=P.media_ids||[],G0=NX(P.content,P.link_previews),{content:N0,fileRefs:I0}=zX(G0),{content:F0,messageRefs:V0}=HX(N0),{content:P0,attachments:B0}=FX(F0);G0=P0;let M0=$3(a),w0=j3(a),H0=M0.length===1&&typeof M0[0]?.fallback_text==="string"?M0[0].fallback_text.trim():"",y0=w0.length===1?NY(w0[0]).trim():"",Y0=Boolean(H0)&&G0?.trim()===H0||Boolean(y0)&&G0?.trim()===y0,D0=Boolean(G0)&&!s&&!Y0,f0=typeof O==="string"?O.trim():"",h0=g0(()=>{if(!G0||Y0)return"";let C=V_(G0,j);return f0?OX(C,f0):C},[G0,Y0,f0]),U1=(C,t)=>{C.stopPropagation(),E(A_(t))},[a0,m0]=m(null),p0=(C)=>{m0(C)},o0=(C)=>{C.stopPropagation(),X?.(_)},s0=(C,t)=>{let z0=new Set;if(!C||t.length===0)return{content:C,usedIds:z0};return{content:C.replace(/attachment:([^\s)"']+)/g,(i0,j1,q1,v1)=>{let i1=j1.replace(/^\/+/,""),r1=t.find((g1)=>g1.name&&g1.name.toLowerCase()===i1.toLowerCase()&&!z0.has(g1.id))||t.find((g1)=>!z0.has(g1.id));if(!r1)return i0;if(z0.add(r1.id),v1.slice(Math.max(0,q1-2),q1)==="](")return`/media/${r1.id}`;return r1.name||"attachment"}),usedIds:z0}},U0=[],R0=[],_1=[],o=[],K0=[],p=[],i=[],J0=0;if(a.length>0)a.forEach((C)=>{if(C?.type==="text"&&C.annotations)i.push(C.annotations);if(C?.type==="generated_widget")p.push(C);else if(C?.type==="resource_link")o.push(C);else if(C?.type==="resource")K0.push(C);else if(C?.type==="file"){let t=q0[J0++];if(t)R0.push(t),_1.push({id:t,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let t=q0[J0++];if(t){let z0=typeof C?.mime_type==="string"?C.mime_type:void 0;U0.push({id:t,annotations:C?.annotations,mimeType:z0}),_1.push({id:t,name:C?.name||C?.filename||C?.title})}}});else if(q0.length>0){let C=B0.length>0;q0.forEach((t,z0)=>{let E0=B0[z0]||null;if(_1.push({id:t,name:E0?.label||null}),C)R0.push(t);else U0.push({id:t,annotations:null})})}if(B0.length>0)B0.forEach((C)=>{if(!C?.id)return;let t=_1.find((z0)=>String(z0.id)===String(C.id));if(t&&!t.name)t.name=C.label});let{content:k0,usedIds:x0}=s0(G0,_1);G0=k0;let X0=U0.filter(({id:C})=>!x0.has(C)),T0=R0.filter((C)=>!x0.has(C)),c0=B0.length>0?B0.map((C,t)=>({id:C.id||`attachment-${t+1}`,label:C.label||`attachment-${t+1}`})):_1.map((C,t)=>({id:C.id,label:C.name||`attachment-${t+1}`})),O0=g0(()=>$3(a),[a]),b0=g0(()=>j3(a),[a]),A0=g0(()=>{return O0.map((C)=>`${C.card_id}:${C.state}`).join("|")},[O0]);g(()=>{if(!S.current)return;return G4(S.current),BX(S.current)},[h0]);let Z0=y(null);return g(()=>{if(!Z0.current||O0.length===0)return;let C=Z0.current;C.innerHTML="";for(let t of O0){let z0=document.createElement("div");C.appendChild(z0),KY(z0,t,{onAction:async(E0)=>{if(E0.type==="Action.OpenUrl"){let i0=b4(E0.url||"");if(!i0)throw Error("Invalid URL");window.open(i0,"_blank","noopener,noreferrer");return}if(E0.type==="Action.Submit"){await J6({post_id:_.id,thread_id:P.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:t.card_id,action:{type:E0.type,title:E0.title||"",data:E0.data}});return}console.warn("[post] unsupported adaptive card action:",E0.type,E0)}}).catch((E0)=>{console.error("[post] adaptive card render error:",E0),z0.textContent=t.fallback_text||"Card failed to render."})}},[A0,_.id]),z`
        <div id=${`post-${_.id}`} class="post ${b?"agent-post":""} ${V?"thread-reply":""} ${U?"thread-prev":""} ${L?"thread-next":""} ${H?"removing":""}" onClick=${$}>
            <div class="post-avatar ${b?"agent-avatar":""} ${M.image?"has-image":""}" style=${l}>
                ${M.image?z`<img src=${M.image} alt=${I} />`:M.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${o0}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${I}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${U7(_.timestamp)}</a>
                </div>
                ${s&&e&&z`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${b5(e.originalLength)} chars
                            ${e.maxLength?z` • Display limit: ${b5(e.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${d&&e&&z`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${b5(e.maxLength)} of ${b5(e.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(I0.length>0||V0.length>0||c0.length>0)&&z`
                    <div class="post-file-refs">
                        ${V0.map((C)=>{let t=(z0)=>{if(z0.preventDefault(),z0.stopPropagation(),Y)Y(C,_.chat_jid||null);else{let E0=document.getElementById("post-"+C);if(E0)E0.scrollIntoView({behavior:"smooth",block:"center"}),E0.classList.add("post-highlight"),setTimeout(()=>E0.classList.remove("post-highlight"),2000)}};return z`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${t}>
                                    <${u_}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${t}
                                    />
                                </a>
                            `})}
                        ${I0.map((C)=>{let t=C.split("/").pop()||C;return z`
                                <${u_}
                                    prefix="post"
                                    label=${t}
                                    title=${C}
                                    onClick=${()=>F?.(C)}
                                />
                            `})}
                        ${c0.map((C)=>z`
                            <${ZX}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${p0}
                            />
                        `)}
                    </div>
                `}
                ${D0&&z`
                    <div 
                        ref=${S}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:h0}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let t=C.target.dataset.hashtag;if(t)j?.(t)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),E(C.target.src)}}
                    />
                `}
                ${O0.length>0&&z`
                    <div ref=${Z0} class="post-adaptive-cards" />
                `}
                ${b0.length>0&&z`
                    <div class="post-adaptive-card-submissions">
                        ${b0.map((C,t)=>{let z0=XY(C),E0=`${C.card_id}-${t}`;return z`
                                <div key=${E0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${z0.title}</span>
                                        </div>
                                    </div>
                                    ${z0.fields.length>0&&z`
                                        <div class="adaptive-card-submission-fields">
                                            ${z0.fields.map((i0)=>z`
                                                <span class="adaptive-card-submission-field" title=${`${i0.key}: ${i0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${i0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${i0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${g4(z0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${p.length>0&&z`
                    <div class="generated-widget-launches">
                        ${p.map((C,t)=>z`
                            <${QX}
                                key=${C.widget_id||C.id||`${_.id}-widget-${t}`}
                                block=${C}
                                post=${_}
                                onOpenWidget=${W}
                            />
                        `)}
                    </div>
                `}
                ${i.length>0&&z`
                    ${i.map((C,t)=>z`
                        <${l8} key=${t} annotations=${C} />
                    `)}
                `}
                ${X0.length>0&&z`
                    <div class="media-preview">
                        ${X0.map(({id:C,mimeType:t})=>{let E0=typeof t==="string"&&t.toLowerCase().startsWith("image/svg")?A_(C):E6(C);return z`
                                <img 
                                    key=${C} 
                                    src=${E0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(i0)=>U1(i0,C)}
                                />
                            `})}
                    </div>
                `}
                ${X0.length>0&&z`
                    ${X0.map(({annotations:C},t)=>z`
                        ${C&&z`<${l8} key=${t} annotations=${C} />`}
                    `)}
                `}
                ${T0.length>0&&z`
                    <div class="file-attachments">
                        ${T0.map((C)=>z`
                            <${jX} key=${C} mediaId=${C} onPreview=${p0} />
                        `)}
                    </div>
                `}
                ${o.length>0&&z`
                    <div class="resource-links">
                        ${o.map((C,t)=>z`
                            <div key=${t}>
                                <${YX} block=${C} />
                                <${l8} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${K0.length>0&&z`
                    <div class="resource-embeds">
                        ${K0.map((C,t)=>z`
                            <div key=${t}>
                                <${qX} block=${C} />
                                <${l8} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${P.link_previews?.length>0&&z`
                    <div class="link-previews">
                        ${P.link_previews.map((C,t)=>z`
                            <${GX} key=${t} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&z`<${UY} src=${D} onClose=${()=>E(null)} />`}
        ${a0&&z`
            <${VY}
                mediaId=${a0.mediaId}
                info=${a0.info}
                onClose=${()=>m0(null)}
            />
        `}
    `}function WY({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Y,onMessageRef:q,onScrollToMessage:Q,onFileRef:K,onOpenWidget:G,emptyMessage:N,timelineRef:X,agents:V,user:U,onDeletePost:L,reverse:H=!0,removingPostIds:O,searchQuery:F}){let[W,D]=m(!1),E=y(null),S=typeof IntersectionObserver<"u",P=T(async()=>{if(!j||!$||W)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,W,j]),b=T((f)=>{let{scrollTop:n,scrollHeight:d,clientHeight:s}=f.target,e=H?d-s-n:n,a=Math.max(300,s);if(e<a)P()},[H,P]);g(()=>{if(!S)return;let f=E.current,n=X?.current;if(!f||!n)return;let d=300,s=new IntersectionObserver((e)=>{for(let a of e){if(!a.isIntersecting)continue;P()}},{root:n,rootMargin:`${d}px 0px ${d}px 0px`,threshold:0});return s.observe(f),()=>s.disconnect()},[S,$,j,X,P]);let h=y(P);if(h.current=P,g(()=>{if(S)return;if(!X?.current)return;let{scrollTop:f,scrollHeight:n,clientHeight:d}=X.current,s=H?n-d-f:f,e=Math.max(300,d);if(s<e)h.current?.()},[S,_,$,H,X]),g(()=>{if(!X?.current)return;if(!$||W)return;let{scrollTop:f,scrollHeight:n,clientHeight:d}=X.current,s=H?n-d-f:f,e=Math.max(300,d);if(n<=d+1||s<e)h.current?.()},[_,$,W,H,X]),!_)return z`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return z`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${N||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let I=_.slice().sort((f,n)=>f.id-n.id),M=(f)=>{let n=f?.data?.thread_id;if(n===null||n===void 0||n==="")return null;let d=Number(n);return Number.isFinite(d)?d:null},B=new Map;for(let f=0;f<I.length;f+=1){let n=I[f],d=Number(n?.id),s=M(n);if(s!==null){let e=B.get(s)||{anchorIndex:-1,replyIndexes:[]};e.replyIndexes.push(f),B.set(s,e)}else if(Number.isFinite(d)){let e=B.get(d)||{anchorIndex:-1,replyIndexes:[]};e.anchorIndex=f,B.set(d,e)}}let k=new Map;for(let[f,n]of B.entries()){let d=new Set;if(n.anchorIndex>=0)d.add(n.anchorIndex);for(let s of n.replyIndexes)d.add(s);k.set(f,Array.from(d).sort((s,e)=>s-e))}let w=I.map((f,n)=>{let d=M(f);if(d===null)return{hasThreadPrev:!1,hasThreadNext:!1};let s=k.get(d);if(!s||s.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let e=s.indexOf(n);if(e<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:e>0,hasThreadNext:e<s.length-1}}),l=z`<div class="timeline-sentinel" ref=${E}></div>`;return z`
        <div class="timeline ${H?"reverse":"normal"}" ref=${X} onScroll=${b}>
            <div class="timeline-content">
                ${H?l:null}
                ${I.map((f,n)=>{let d=Boolean(f.data?.thread_id&&f.data.thread_id!==f.id),s=O?.has?.(f.id),e=w[n]||{};return z`
                    <${LY}
                        key=${f.id}
                        post=${f}
                        isThreadReply=${d}
                        isThreadPrev=${e.hasThreadPrev}
                        isThreadNext=${e.hasThreadNext}
                        isRemoving=${s}
                        highlightQuery=${F}
                        agentName=${aZ(f.data?.agent_id,V||{})}
                        agentAvatarUrl=${tZ(f.data?.agent_id,V||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Z?.(f)}
                        onHashtagClick=${Y}
                        onMessageRef=${q}
                        onScrollToMessage=${Q}
                        onFileRef=${K}
                        onOpenWidget=${G}
                        onDelete=${L}
                    />
                `})}
                ${H?null:l}
            </div>
        </div>
    `}var n8="workspaceExplorerScale",DX=["compact","default","comfortable"],AX=new Set(DX),EX={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function BY(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return AX.has(j)?j:$}function Z3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function kX(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function MX(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function Y3(_={}){let $=kX(_),j=_.stored?BY(_.stored,$):$;return MX(j,_)}function zY(_){return EX[BY(_)]}function IX(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function q3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function HY(_,$,j={}){let Z=j.resolvePane;if(q3(_,Z))return!0;return IX($)}var xX=60000,DY=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function TX(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return q3($,(j)=>d0.resolve(j))}function AY(_,$,j,Z=0,Y=[]){if(!j&&DY(_))return Y;if(!_)return Y;if(Y.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let q of _.children)AY(q,$,j,Z+1,Y);return Y}function FY(_,$,j){if(!_)return"";let Z=[],Y=(q)=>{if(!j&&DY(q))return;if(Z.push(q.type==="dir"?`d:${q.path}`:`f:${q.path}`),q.children&&$?.has(q.path))for(let Q of q.children)Y(Q)};return Y(_),Z.join("|")}function N3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Y=j?new Map(j.map((K)=>[K?.path,K])):new Map,q=!j||j.length!==Z.length,Q=Z.map((K)=>{let G=N3(Y.get(K.path),K);if(G!==Y.get(K.path))q=!0;return G});return q?{...$,children:Q}:_}function K3(_,$,j){if(!_)return _;if(_.path===$)return N3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Y=_.children.map((q)=>{let Q=K3(q,$,j);if(Q!==q)Z=!0;return Q});return Z?{..._,children:Y}:_}var EY=4,Q3=14,yX=8,PX=16;function kY(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=kY(Z);return _.__bytes=j,j}function MY(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=EY)return Z;let Y=Array.isArray(_.children)?_.children:[],q=[];for(let K of Y){let G=Math.max(0,Number(K?.__bytes??K?.size??0));if(G<=0)continue;if(K.type==="dir")q.push({kind:"dir",node:K,size:G});else q.push({kind:"file",name:K.name,path:K.path,size:G})}q.sort((K,G)=>G.size-K.size);let Q=q;if(q.length>Q3){let K=q.slice(0,Q3-1),G=q.slice(Q3-1),N=G.reduce((X,V)=>X+V.size,0);K.push({kind:"other",name:`+${G.length} more`,path:`${Z.path}/[other]`,size:N}),Q=K}return Z.children=Q.map((K)=>{if(K.kind==="dir")return MY(K.node,$+1);return{name:K.name,path:K.path,size:K.size,children:[]}}),Z}function JY(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function IY(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Y=j?Math.max(30,70-$*10):Math.max(34,66-$*8),q=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Y}% ${q}%)`}function d8(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function X3(_,$,j,Z,Y,q){let Q=Math.PI*2-0.0001,K=q-Y>Q?Y+Q:q,G=d8(_,$,Z,Y),N=d8(_,$,Z,K),X=d8(_,$,j,K),V=d8(_,$,j,Y),U=K-Y>Math.PI?1:0;return[`M ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`L ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var xY={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function TY(_,$,j){let Z=[],Y=[],q=Math.max(0,Number($)||0),Q=(K,G,N,X)=>{let V=Array.isArray(K?.children)?K.children:[];if(!V.length)return;let U=Math.max(0,Number(K.size)||0);if(U<=0)return;let L=N-G,H=G;V.forEach((O,F)=>{let W=Math.max(0,Number(O.size)||0);if(W<=0)return;let D=W/U,E=H,S=F===V.length-1?N:H+L*D;if(H=S,S-E<0.003)return;let P=xY[X];if(P){let b=IY(E,X,j);if(Z.push({key:O.path,path:O.path,label:O.name,size:W,color:b,depth:X,startAngle:E,endAngle:S,innerRadius:P[0],outerRadius:P[1],d:X3(120,120,P[0],P[1],E,S)}),X===1)Y.push({key:O.path,name:O.name,size:W,pct:q>0?W/q*100:0,color:b})}if(X<EY)Q(O,E,S,X+1)})};return Q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Y}}function G3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Y=G3(Z,$);if(Y)return Y}return null}function yY(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Y=xY[1];if(!Y)return{segments:[],legend:[]};let q=-Math.PI/2,Q=Math.PI*3/2,K=IY(q,1,Z),N=`${$||"."}/[files]`;return{segments:[{key:N,path:N,label:_,size:j,color:K,depth:1,startAngle:q,endAngle:Q,innerRadius:Y[0],outerRadius:Y[1],d:X3(120,120,Y[0],Y[1],q,Q)}],legend:[{key:N,name:_,size:j,pct:100,color:K}]}}function OY(_,$=!1,j=!1){if(!_)return null;let Z=kY(_),Y=MY(_,0),q=Y.size||Z,{segments:Q,legend:K}=TY(Y,q,j);if(!Q.length&&q>0){let G=yY("[files]",Y.path,q,j);Q=G.segments,K=G.legend}return{root:Y,totalSize:q,segments:Q,legend:K,truncated:$,isDarkTheme:j}}function CX({payload:_}){if(!_)return null;let[$,j]=m(null),[Z,Y]=m(_?.root?.path||"."),[q,Q]=m(()=>[_?.root?.path||"."]),[K,G]=m(!1);g(()=>{let B=_?.root?.path||".";Y(B),Q([B]),j(null)},[_?.root?.path,_?.totalSize]),g(()=>{if(!Z)return;G(!0);let B=setTimeout(()=>G(!1),180);return()=>clearTimeout(B)},[Z]);let N=g0(()=>{return G3(_.root,Z)||_.root},[_?.root,Z]),X=N?.size||_.totalSize||0,{segments:V,legend:U}=g0(()=>{let B=TY(N,X,_.isDarkTheme);if(B.segments.length>0)return B;if(X<=0)return B;let k=N?.children?.length?"Total":"[files]";return yY(k,N?.path||_?.root?.path||".",X,_.isDarkTheme)},[N,X,_.isDarkTheme,_?.root?.path]),[L,H]=m(V),O=y(new Map),F=y(0);g(()=>{let B=O.current,k=new Map(V.map((n)=>[n.key,n])),w=performance.now(),l=220,f=(n)=>{let d=Math.min(1,(n-w)/220),s=d*(2-d),e=V.map((a)=>{let G0=B.get(a.key)||{startAngle:a.startAngle,endAngle:a.startAngle,innerRadius:a.innerRadius,outerRadius:a.innerRadius},N0=(B0,M0)=>B0+(M0-B0)*s,I0=N0(G0.startAngle,a.startAngle),F0=N0(G0.endAngle,a.endAngle),V0=N0(G0.innerRadius,a.innerRadius),P0=N0(G0.outerRadius,a.outerRadius);return{...a,d:X3(120,120,V0,P0,I0,F0)}});if(H(e),d<1)F.current=requestAnimationFrame(f)};if(F.current)cancelAnimationFrame(F.current);return F.current=requestAnimationFrame(f),O.current=k,()=>{if(F.current)cancelAnimationFrame(F.current)}},[V]);let W=L.length?L:V,D=X>0?E_(X):"0 B",E=N?.name||"",P=(E&&E!=="."?E:"Total")||"Total",b=D,h=q.length>1,I=(B)=>{if(!B?.path)return;let k=G3(_.root,B.path);if(!k||!Array.isArray(k.children)||k.children.length===0)return;Q((w)=>[...w,k.path]),Y(k.path),j(null)},M=()=>{if(!h)return;Q((B)=>{let k=B.slice(0,-1);return Y(k[k.length-1]||_?.root?.path||"."),k}),j(null)};return z`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${K?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${N?.path||_?.root?.path||"."}`}
                data-segments=${W.length}
                data-base-size=${X}>
                ${W.map((B)=>z`
                    <path
                        key=${B.key}
                        d=${B.d}
                        fill=${B.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===B.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(B)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(B)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>I(B)}
                    >
                        <title>${B.label} — ${E_(B.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${h?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${P}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${b}</text>
                </g>
            </svg>
            ${U.length>0&&z`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((B)=>z`
                        <div key=${B.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${B.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${B.name}>${B.name}</span>
                            <span class="workspace-folder-starburst-size">${E_(B.size)}</span>
                            <span class="workspace-folder-starburst-pct">${B.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&z`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function SX({mediaId:_}){let[$,j]=m(null);if(g(()=>{if(!_)return;_5(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Y=$.metadata?.size?E_($.metadata.size):"";return z`
        <a href=${A_(_)} download=${Z} class="file-attachment"
            onClick=${(q)=>q.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${Y&&z`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function PY({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Y,onOpenVncTab:q,onToggleTerminal:Q,terminalVisible:K=!1}){let[G,N]=m(null),[X,V]=m(new Set(["."])),[U,L]=m(null),[H,O]=m(null),[F,W]=m(""),[D,E]=m(null),[S,P]=m(null),[b,h]=m(!0),[I,M]=m(!1),[B,k]=m(null),[w,l]=m(()=>G5("workspaceShowHidden",!1)),[f,n]=m(!1),[d,s]=m(null),[e,a]=m(null),[q0,G0]=m(null),[N0,I0]=m(!1),[F0,V0]=m(null),[P0,B0]=m(()=>JY()),[M0,w0]=m(()=>Y3({stored:X_(n8),...Z3()})),[H0,y0]=m(!1),Y0=y(X),D0=y(""),f0=y(null),h0=y(0),U1=y(new Set),a0=y(null),m0=y(new Map),p0=y(_),o0=y(Z),s0=y(null),U0=y(null),R0=y(null),_1=y(null),o=y(null),K0=y(null),p=y("."),i=y(null),J0=y({path:null,dragging:!1,startX:0,startY:0}),k0=y({path:null,dragging:!1,startX:0,startY:0}),x0=y({path:null,timer:0}),X0=y(!1),T0=y(0),c0=y(new Map),O0=y(null),b0=y(null),A0=y(null),Z0=y(null),C=y(null),t=y(null),z0=y(w),E0=y($),i0=y(j??$),j1=y(0),q1=y(q0),v1=y(f),i1=y(d),k_=y(null),r1=y({x:0,y:0}),S1=y(0),g1=y(null),f1=y(U),$1=y(H),m1=y(null),h_=y(D);p0.current=_,o0.current=Z,g(()=>{Y0.current=X},[X]),g(()=>{z0.current=w},[w]),g(()=>{E0.current=$},[$]),g(()=>{i0.current=j??$},[j,$]),g(()=>{q1.current=q0},[q0]),g(()=>{if(typeof window>"u")return;let A=()=>{w0(Y3({stored:X_(n8),...Z3()}))};A();let x=()=>A(),v=()=>A(),u=($0)=>{if(!$0||$0.key===null||$0.key===n8)A()};window.addEventListener("resize",x),window.addEventListener("focus",v),window.addEventListener("storage",u);let r=window.matchMedia?.("(pointer: coarse)"),Q0=window.matchMedia?.("(hover: none)"),L0=($0,u0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",u0);else if($0.addListener)$0.addListener(u0)},W0=($0,u0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",u0);else if($0.removeListener)$0.removeListener(u0)};return L0(r,x),L0(Q0,x),()=>{window.removeEventListener("resize",x),window.removeEventListener("focus",v),window.removeEventListener("storage",u),W0(r,x),W0(Q0,x)}},[]),g(()=>{let A=(x)=>{let v=x?.detail?.path;if(!v)return;let u=v.split("/"),r=[];for(let Q0=1;Q0<u.length;Q0++)r.push(u.slice(0,Q0).join("/"));if(r.length)V((Q0)=>{let L0=new Set(Q0);L0.add(".");for(let W0 of r)L0.add(W0);return L0});L(v),requestAnimationFrame(()=>{let Q0=document.querySelector(`[data-path="${CSS.escape(v)}"]`);if(Q0)Q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",A),()=>window.removeEventListener("workspace-reveal-path",A)},[]),g(()=>{v1.current=f},[f]),g(()=>{i1.current=d},[d]),g(()=>{f1.current=U},[U]),g(()=>{$1.current=H},[H]),g(()=>{h_.current=D},[D]),g(()=>{if(typeof window>"u"||typeof document>"u")return;let A=()=>B0(JY());A();let x=window.matchMedia?.("(prefers-color-scheme: dark)"),v=()=>A();if(x?.addEventListener)x.addEventListener("change",v);else if(x?.addListener)x.addListener(v);let u=typeof MutationObserver<"u"?new MutationObserver(()=>A()):null;if(u?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)u?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(x?.removeEventListener)x.removeEventListener("change",v);else if(x?.removeListener)x.removeListener(v);u?.disconnect()}},[]),g(()=>{if(!H)return;let A=o.current;if(!A)return;let x=requestAnimationFrame(()=>{try{A.focus(),A.select()}catch{}});return()=>cancelAnimationFrame(x)},[H]),g(()=>{if(!H0)return;let A=(v)=>{let u=v?.target;if(!(u instanceof Element))return;if(C.current?.contains(u))return;if(t.current?.contains(u))return;y0(!1)},x=(v)=>{if(v?.key==="Escape")y0(!1),t.current?.focus?.()};return document.addEventListener("mousedown",A),document.addEventListener("touchstart",A,{passive:!0}),document.addEventListener("keydown",x),()=>{document.removeEventListener("mousedown",A),document.removeEventListener("touchstart",A),document.removeEventListener("keydown",x)}},[H0]);let o1=async(A,x={})=>{let v=Boolean(x?.autoOpen),u=String(A||"").trim();M(!0),E(null),P(null);try{let r=await k5(u,20000);if(v&&u&&HY(u,r,{resolvePane:(Q0)=>d0.resolve(Q0)}))return o0.current?.(u,r),r;return E(r),r}catch(r){let Q0={error:r.message||"Failed to load preview"};return E(Q0),Q0}finally{M(!1)}};s0.current=o1;let c_=async()=>{if(!E0.current)return;try{let A=await E5("",1,z0.current),x=FY(A.root,Y0.current,z0.current);if(x===D0.current){h(!1);return}if(D0.current=x,f0.current=A.root,!h0.current)h0.current=requestAnimationFrame(()=>{h0.current=0,N((v)=>N3(v,f0.current)),h(!1)})}catch(A){k(A.message||"Failed to load workspace"),h(!1)}},v_=async(A)=>{if(!A)return;if(U1.current.has(A))return;U1.current.add(A);try{let x=await E5(A,1,z0.current);N((v)=>K3(v,A,x.root))}catch(x){k(x.message||"Failed to load workspace")}finally{U1.current.delete(A)}};U0.current=v_;let J1=T(()=>{let A=U;if(!A)return".";let x=m0.current?.get(A);if(x&&x.type==="dir")return x.path;if(A==="."||!A.includes("/"))return".";let v=A.split("/");return v.pop(),v.join("/")||"."},[U]),p1=T((A)=>{let x=A?.closest?.(".workspace-row");if(!x)return null;let v=x.dataset.path,u=x.dataset.type;if(!v)return null;if(u==="dir")return v;if(v.includes("/")){let r=v.split("/");return r.pop(),r.join("/")||"."}return"."},[]),O1=T((A)=>{return p1(A?.target||null)},[p1]),X1=T((A)=>{q1.current=A,G0(A)},[]),L1=T(()=>{let A=x0.current;if(A?.timer)clearTimeout(A.timer);x0.current={path:null,timer:0}},[]),K_=T((A)=>{if(!A||A==="."){L1();return}let x=m0.current?.get(A);if(!x||x.type!=="dir"){L1();return}if(Y0.current?.has(A)){L1();return}if(x0.current?.path===A)return;L1();let v=setTimeout(()=>{x0.current={path:null,timer:0},U0.current?.(A),V((u)=>{let r=new Set(u);return r.add(A),r})},600);x0.current={path:A,timer:v}},[L1]),G_=T((A,x)=>{if(r1.current={x:A,y:x},S1.current)return;S1.current=requestAnimationFrame(()=>{S1.current=0;let v=k_.current;if(!v)return;let u=r1.current;v.style.transform=`translate(${u.x+12}px, ${u.y+12}px)`})},[]),y1=T((A)=>{if(!A)return;let v=(m0.current?.get(A)?.name||A.split("/").pop()||A).trim();if(!v)return;a({path:A,label:v})},[]),h1=T(()=>{if(a(null),S1.current)cancelAnimationFrame(S1.current),S1.current=0;if(k_.current)k_.current.style.transform="translate(-9999px, -9999px)"},[]),V1=T((A)=>{if(!A)return".";let x=m0.current?.get(A);if(x&&x.type==="dir")return x.path;if(A==="."||!A.includes("/"))return".";let v=A.split("/");return v.pop(),v.join("/")||"."},[]),k1=T(()=>{O(null),W("")},[]),s1=T((A)=>{if(!A)return;let v=(m0.current?.get(A)?.name||A.split("/").pop()||A).trim();if(!v||A===".")return;O(A),W(v)},[]),c1=T(async()=>{let A=$1.current;if(!A)return;let x=(F||"").trim();if(!x){k1();return}let v=m0.current?.get(A),u=(v?.name||A.split("/").pop()||A).trim();if(x===u){k1();return}try{let Q0=(await x6(A,x))?.path||A,L0=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(k1(),k(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:A,newPath:Q0,type:v?.type||"file"}})),v?.type==="dir")V((W0)=>{let $0=new Set;for(let u0 of W0)if(u0===A)$0.add(Q0);else if(u0.startsWith(`${A}/`))$0.add(`${Q0}${u0.slice(A.length)}`);else $0.add(u0);return $0});if(L(Q0),v?.type==="dir")E(null),M(!1),P(null);else s0.current?.(Q0);U0.current?.(L0)}catch(r){k(r?.message||"Failed to rename file")}},[k1,F]),l_=T(async(A)=>{let u=A||".";for(let r=0;r<50;r+=1){let L0=`untitled${r===0?"":`-${r}`}.md`;try{let $0=(await I6(u,L0,""))?.path||(u==="."?L0:`${u}/${L0}`);if(u&&u!==".")V((u0)=>new Set([...u0,u]));L($0),k(null),U0.current?.(u),s0.current?.($0);return}catch(W0){if(W0?.status===409||W0?.code==="file_exists")continue;k(W0?.message||"Failed to create file");return}}k("Failed to create file (untitled name already in use).")},[]),M_=T((A)=>{if(A?.stopPropagation?.(),N0)return;let x=V1(f1.current);l_(x)},[N0,V1,l_]);g(()=>{if(typeof window>"u")return;let A=(x)=>{let v=x?.detail?.updates||[];if(!Array.isArray(v)||v.length===0)return;N((W0)=>{let $0=W0;for(let u0 of v){if(!u0?.root)continue;if(!$0||u0.path==="."||!u0.path)$0=u0.root;else $0=K3($0,u0.path,u0.root)}if($0)D0.current=FY($0,Y0.current,z0.current);return h(!1),$0});let u=f1.current;if(Boolean(u)&&v.some((W0)=>{let $0=W0?.path||"";if(!$0||$0===".")return!0;return u===$0||u.startsWith(`${$0}/`)||$0.startsWith(`${u}/`)}))c0.current.clear();if(!u||!h_.current)return;let Q0=m0.current?.get(u);if(Q0&&Q0.type==="dir")return;if(v.some((W0)=>{let $0=W0?.path||"";if(!$0||$0===".")return!0;return u===$0||u.startsWith(`${$0}/`)}))s0.current?.(u)};return window.addEventListener("workspace-update",A),()=>window.removeEventListener("workspace-update",A)},[]),a0.current=c_;let n_=y(()=>{if(typeof window>"u")return;let A=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),x=i0.current??E0.current,v=document.visibilityState!=="hidden"&&(x||A.matches&&E0.current);M5(v,z0.current).catch(()=>{})}).current,L_=y(0),N4=y(()=>{if(L_.current)clearTimeout(L_.current);L_.current=setTimeout(()=>{L_.current=0,n_()},250)}).current;g(()=>{if(E0.current)a0.current?.();N4()},[$,j]),g(()=>{a0.current(),n_();let A=setInterval(()=>a0.current(),xX),x=R5("previewHeight",null),v=Number.isFinite(x)?Math.min(Math.max(x,80),600):280;if(T0.current=v,R0.current)R0.current.style.setProperty("--preview-height",`${v}px`);let u=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),r=()=>N4();if(u.addEventListener)u.addEventListener("change",r);else if(u.addListener)u.addListener(r);return document.addEventListener("visibilitychange",r),()=>{if(clearInterval(A),h0.current)cancelAnimationFrame(h0.current),h0.current=0;if(u.removeEventListener)u.removeEventListener("change",r);else if(u.removeListener)u.removeListener(r);if(document.removeEventListener("visibilitychange",r),L_.current)clearTimeout(L_.current),L_.current=0;if(i.current)clearTimeout(i.current),i.current=null;M5(!1,z0.current).catch(()=>{})}},[]);let W_=g0(()=>AY(G,X,w),[G,X,w]),I_=g0(()=>new Map(W_.map((A)=>[A.node.path,A.node])),[W_]),M4=g0(()=>zY(M0),[M0]);m0.current=I_;let Z1=(U?m0.current.get(U):null)?.type==="dir";g(()=>{if(!U||!Z1){V0(null),O0.current=null,b0.current=null;return}let A=U,x=`${w?"hidden":"visible"}:${U}`,v=c0.current,u=v.get(x);if(u?.root){v.delete(x),v.set(x,u);let L0=OY(u.root,Boolean(u.truncated),P0);if(L0)O0.current=L0,b0.current=U,V0({loading:!1,error:null,payload:L0});return}let r=O0.current,Q0=b0.current;V0({loading:!0,error:null,payload:Q0===U?r:null}),E5(U,yX,w).then((L0)=>{if(f1.current!==A)return;let W0={root:L0?.root,truncated:Boolean(L0?.truncated)};v.delete(x),v.set(x,W0);while(v.size>PX){let u0=v.keys().next().value;if(!u0)break;v.delete(u0)}let $0=OY(W0.root,W0.truncated,P0);O0.current=$0,b0.current=U,V0({loading:!1,error:null,payload:$0})}).catch((L0)=>{if(f1.current!==A)return;V0({loading:!1,error:L0?.message||"Failed to load folder size chart",payload:Q0===U?r:null})})},[U,Z1,w,P0]);let D1=Boolean(D&&D.kind==="text"&&!Z1&&(!D.size||D.size<=262144)),X4=D1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",a1=Boolean(U&&U!=="."),B_=Boolean(U&&!Z1),l1=Boolean(U&&!Z1),H1=U&&Z1?N8(U,w):null,P1=T(()=>y0(!1),[]),Q1=T(async(A)=>{P1();try{await A?.()}catch(x){console.warn("[workspace-explorer] Header menu action failed:",x)}},[P1]);g(()=>{let A=A0.current;if(Z0.current)Z0.current.dispose(),Z0.current=null;if(!A)return;if(A.innerHTML="",!U||Z1||!D||D.error)return;let x={path:U,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},v=d0.resolve(x)||d0.get("workspace-preview-default");if(!v)return;let u=v.mount(A,x);return Z0.current=u,()=>{if(Z0.current===u)u.dispose(),Z0.current=null;A.innerHTML=""}},[U,Z1,D]);let t1=(A)=>{let x=A?.target;if(x instanceof Element)return x;return x?.parentElement||null},e1=(A)=>{return Boolean(A?.closest?.(".workspace-node-icon, .workspace-label-text"))},__=y((A)=>{let x=t1(A),v=x?.closest?.("[data-path]");if(!v)return;let u=v.dataset.path;if(!u||u===".")return;let r=Boolean(x?.closest?.("button"))||Boolean(x?.closest?.("a"))||Boolean(x?.closest?.("input")),Q0=Boolean(x?.closest?.(".workspace-caret"));if(r||Q0)return;if($1.current===u)return;s1(u)}).current,f_=y((A)=>{if(X0.current){X0.current=!1;return}let x=t1(A),v=x?.closest?.("[data-path]");if(_1.current?.focus?.(),!v)return;let u=v.dataset.path,r=v.dataset.type,Q0=Boolean(x?.closest?.(".workspace-caret")),L0=Boolean(x?.closest?.("button"))||Boolean(x?.closest?.("a"))||Boolean(x?.closest?.("input")),W0=f1.current===u,$0=$1.current;if($0){if($0===u)return;k1()}let u0=r==="file"&&m1.current===u&&!Q0&&!L0;if(r==="dir"){if(m1.current=null,L(u),E(null),P(null),M(!1),!Y0.current.has(u))U0.current?.(u);if(W0&&!Q0)return;V((D_)=>{let Z_=new Set(D_);if(Z_.has(u))Z_.delete(u);else Z_.add(u);return Z_})}else{m1.current=null,L(u);let M1=m0.current.get(u);if(M1)p0.current?.(M1.path,M1);if(!L0&&!Q0&&TX(u))o0.current?.(u,h_.current);else{let Z_=!L0&&!Q0;s0.current?.(u,{autoOpen:Z_})}}}).current,w1=y(()=>{D0.current="",a0.current(),Array.from(Y0.current||[]).filter((x)=>x&&x!==".").forEach((x)=>U0.current?.(x))}).current,C1=y(()=>{m1.current=null,L(null),E(null),P(null),M(!1)}).current,$_=y(()=>{l((A)=>{let x=!A;if(typeof window<"u")Y1("workspaceShowHidden",String(x));return z0.current=x,M5(!0,x).catch(()=>{}),D0.current="",a0.current?.(),Array.from(Y0.current||[]).filter((u)=>u&&u!==".").forEach((u)=>U0.current?.(u)),x})}).current,x_=y((A)=>{if(t1(A)?.closest?.("[data-path]"))return;C1()}).current,W1=T(async(A)=>{if(!A)return;let x=A.split("/").pop()||A;if(!window.confirm(`Delete "${x}"? This cannot be undone.`))return;try{await y6(A);let u=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(f1.current===A)C1();U0.current?.(u),k(null)}catch(u){E((r)=>({...r||{},error:u.message||"Failed to delete file"}))}},[C1]),z_=T((A)=>{let x=_1.current;if(!x||!A||typeof CSS>"u"||typeof CSS.escape!=="function")return;x.querySelector(`[data-path="${CSS.escape(A)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),K1=T((A)=>{let x=W_;if(!x||x.length===0)return;let v=U?x.findIndex((u)=>u.node.path===U):-1;if(A.key==="ArrowDown"){A.preventDefault();let u=Math.min(v+1,x.length-1),r=x[u];if(!r)return;if(L(r.node.path),r.node.type!=="dir")p0.current?.(r.node.path,r.node),s0.current?.(r.node.path);else E(null),M(!1),P(null);z_(r.node.path);return}if(A.key==="ArrowUp"){A.preventDefault();let u=v<=0?0:v-1,r=x[u];if(!r)return;if(L(r.node.path),r.node.type!=="dir")p0.current?.(r.node.path,r.node),s0.current?.(r.node.path);else E(null),M(!1),P(null);z_(r.node.path);return}if(A.key==="ArrowRight"&&v>=0){let u=x[v];if(u?.node?.type==="dir"&&!X.has(u.node.path))A.preventDefault(),U0.current?.(u.node.path),V((r)=>new Set([...r,u.node.path]));return}if(A.key==="ArrowLeft"&&v>=0){let u=x[v];if(u?.node?.type==="dir"&&X.has(u.node.path))A.preventDefault(),V((r)=>{let Q0=new Set(r);return Q0.delete(u.node.path),Q0});return}if(A.key==="Enter"&&v>=0){A.preventDefault();let u=x[v];if(!u)return;let r=u.node.path;if(u.node.type==="dir"){if(!Y0.current.has(r))U0.current?.(r);V((L0)=>{let W0=new Set(L0);if(W0.has(r))W0.delete(r);else W0.add(r);return W0}),E(null),P(null),M(!1)}else p0.current?.(r,u.node),s0.current?.(r);return}if((A.key==="Delete"||A.key==="Backspace")&&v>=0){let u=x[v];if(!u||u.node.type==="dir")return;A.preventDefault(),W1(u.node.path);return}if(A.key==="Escape")A.preventDefault(),C1()},[C1,W1,X,W_,z_,U]),T_=T((A)=>{let x=t1(A),v=x?.closest?.(".workspace-row");if(!v)return;let u=v.dataset.type,r=v.dataset.path;if(!r||r===".")return;if($1.current===r)return;let Q0=A?.touches?.[0];if(!Q0)return;if(J0.current={path:e1(x)?r:null,dragging:!1,startX:Q0.clientX,startY:Q0.clientY},u!=="file")return;if(i.current)clearTimeout(i.current);i.current=setTimeout(()=>{if(i.current=null,J0.current?.dragging)return;W1(r)},600)},[W1]),H_=T(()=>{if(i.current)clearTimeout(i.current),i.current=null;let A=J0.current;if(A?.dragging&&A.path){let x=q1.current||J1(),v=g1.current;if(typeof v==="function")v(A.path,x)}J0.current={path:null,dragging:!1,startX:0,startY:0},j1.current=0,n(!1),s(null),X1(null),L1(),h1()},[J1,h1,X1,L1]),x4=T((A)=>{let x=J0.current,v=A?.touches?.[0];if(!v||!x?.path){if(i.current)clearTimeout(i.current),i.current=null;return}let u=Math.abs(v.clientX-x.startX),r=Math.abs(v.clientY-x.startY),Q0=u>8||r>8;if(Q0&&i.current)clearTimeout(i.current),i.current=null;if(!x.dragging&&Q0)x.dragging=!0,n(!0),s("move"),y1(x.path);if(x.dragging){A.preventDefault(),G_(v.clientX,v.clientY);let L0=document.elementFromPoint(v.clientX,v.clientY),W0=p1(L0)||J1();if(q1.current!==W0)X1(W0);K_(W0)}},[p1,J1,y1,G_,X1,K_]),p4=y((A)=>{A.preventDefault();let x=R0.current;if(!x)return;let v=A.clientY,u=T0.current||280,r=A.currentTarget;r.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Q0=v,L0=($0)=>{Q0=$0.clientY;let u0=x.clientHeight-80,M1=Math.min(Math.max(u-($0.clientY-v),80),u0);x.style.setProperty("--preview-height",`${M1}px`),T0.current=M1},W0=()=>{let $0=x.clientHeight-80,u0=Math.min(Math.max(u-(Q0-v),80),$0);T0.current=u0,r.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y1("previewHeight",String(Math.round(u0))),document.removeEventListener("mousemove",L0),document.removeEventListener("mouseup",W0)};document.addEventListener("mousemove",L0),document.addEventListener("mouseup",W0)}).current,y_=y((A)=>{A.preventDefault();let x=R0.current;if(!x)return;let v=A.touches[0];if(!v)return;let u=v.clientY,r=T0.current||280,Q0=A.currentTarget;Q0.classList.add("dragging"),document.body.style.userSelect="none";let L0=($0)=>{let u0=$0.touches[0];if(!u0)return;$0.preventDefault();let M1=x.clientHeight-80,D_=Math.min(Math.max(r-(u0.clientY-u),80),M1);x.style.setProperty("--preview-height",`${D_}px`),T0.current=D_},W0=()=>{Q0.classList.remove("dragging"),document.body.style.userSelect="",Y1("previewHeight",String(Math.round(T0.current||r))),document.removeEventListener("touchmove",L0),document.removeEventListener("touchend",W0),document.removeEventListener("touchcancel",W0)};document.addEventListener("touchmove",L0,{passive:!1}),document.addEventListener("touchend",W0),document.addEventListener("touchcancel",W0)}).current,b_=async()=>{if(!U)return;try{let A=await M6(U);if(A.media_id)P(A.media_id)}catch(A){E((x)=>({...x||{},error:A.message||"Failed to attach"}))}},T4=async()=>{if(!U||Z1)return;await W1(U)},d_=(A)=>{return Array.from(A?.dataTransfer?.types||[]).includes("Files")},h4=T((A)=>{if(!d_(A))return;if(A.preventDefault(),j1.current+=1,!v1.current)n(!0);s("upload");let x=O1(A)||J1();X1(x),K_(x)},[J1,O1,X1,K_]),i_=T((A)=>{if(!d_(A))return;if(A.preventDefault(),A.dataTransfer)A.dataTransfer.dropEffect="copy";if(!v1.current)n(!0);if(i1.current!=="upload")s("upload");let x=O1(A)||J1();if(q1.current!==x)X1(x);K_(x)},[J1,O1,X1,K_]),r_=T((A)=>{if(!d_(A))return;if(A.preventDefault(),j1.current=Math.max(0,j1.current-1),j1.current===0)n(!1),s(null),X1(null),L1()},[X1,L1]),F_=T(async(A,x=".")=>{let v=Array.from(A||[]);if(v.length===0)return;let u=x&&x!==""?x:".",r=u!=="."?u:"workspace root";I0(!0);try{let Q0=null;for(let L0 of v)try{Q0=await K8(L0,u)}catch(W0){let $0=W0?.status,u0=W0?.code;if($0===409||u0==="file_exists"){let M1=L0?.name||"file";if(!window.confirm(`"${M1}" already exists in ${r}. Overwrite?`))continue;Q0=await K8(L0,u,{overwrite:!0})}else throw W0}if(Q0?.path)m1.current=Q0.path,L(Q0.path),s0.current?.(Q0.path);U0.current?.(u)}catch(Q0){k(Q0.message||"Failed to upload file")}finally{I0(!1)}},[]),c4=T(async(A,x)=>{if(!A)return;let v=m0.current?.get(A);if(!v)return;let u=x&&x!==""?x:".",r=A.includes("/")?A.split("/").slice(0,-1).join("/")||".":".";if(u===r)return;try{let L0=(await T6(A,u))?.path||A;if(v.type==="dir")V((W0)=>{let $0=new Set;for(let u0 of W0)if(u0===A)$0.add(L0);else if(u0.startsWith(`${A}/`))$0.add(`${L0}${u0.slice(A.length)}`);else $0.add(u0);return $0});if(L(L0),v.type==="dir")E(null),M(!1),P(null);else s0.current?.(L0);U0.current?.(r),U0.current?.(u)}catch(Q0){k(Q0?.message||"Failed to move entry")}},[]);g1.current=c4;let l4=T(async(A)=>{if(!d_(A))return;A.preventDefault(),j1.current=0,n(!1),s(null),G0(null),L1();let x=Array.from(A?.dataTransfer?.files||[]);if(x.length===0)return;let v=q1.current||O1(A)||J1();await F_(x,v)},[J1,O1,F_]),z5=T((A)=>{if(A?.stopPropagation?.(),N0)return;let x=A?.currentTarget?.dataset?.uploadTarget||".";p.current=x,K0.current?.click()},[N0]),F1=T(()=>{if(N0)return;let A=f1.current,x=A?m0.current?.get(A):null;p.current=x?.type==="dir"?x.path:".",K0.current?.click()},[N0]),V4=T(()=>{Q1(()=>M_(null))},[Q1,M_]),n4=T(()=>{Q1(()=>F1())},[Q1,F1]),P_=T(()=>{Q1(()=>w1())},[Q1,w1]),j_=T(()=>{Q1(()=>$_())},[Q1,$_]),o_=T(()=>{if(!U||!D1)return;Q1(()=>o0.current?.(U,D))},[Q1,U,D1,D]),y4=T(()=>{if(!U||U===".")return;Q1(()=>s1(U))},[Q1,U,s1]),P4=T(()=>{if(!U||Z1)return;Q1(()=>T4())},[Q1,U,Z1,T4]),d4=T(()=>{if(!U||Z1)return;Q1(()=>b_())},[Q1,U,Z1,b_]),s_=T(()=>{if(!H1)return;if(P1(),typeof window<"u")window.open(H1,"_blank","noopener")},[P1,H1]),J_=T(()=>{P1(),Y?.()},[P1,Y]),H5=T(()=>{P1(),q?.()},[P1,q]),U4=T(()=>{P1(),Q?.()},[P1,Q]),C4=T((A)=>{if(!A||A.button!==0)return;let x=A.currentTarget;if(!x||!x.dataset)return;let v=x.dataset.path;if(!v||v===".")return;if($1.current===v)return;let u=t1(A);if(u?.closest?.("button, a, input, .workspace-caret"))return;if(!e1(u))return;A.preventDefault(),k0.current={path:v,dragging:!1,startX:A.clientX,startY:A.clientY};let r=(L0)=>{let W0=k0.current;if(!W0?.path)return;let $0=Math.abs(L0.clientX-W0.startX),u0=Math.abs(L0.clientY-W0.startY),M1=$0>4||u0>4;if(!W0.dragging&&M1)W0.dragging=!0,X0.current=!0,n(!0),s("move"),y1(W0.path),G_(L0.clientX,L0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(W0.dragging){L0.preventDefault(),G_(L0.clientX,L0.clientY);let D_=document.elementFromPoint(L0.clientX,L0.clientY),Z_=p1(D_)||J1();if(q1.current!==Z_)X1(Z_);K_(Z_)}},Q0=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",Q0);let L0=k0.current;if(L0?.dragging&&L0.path){let W0=q1.current||J1(),$0=g1.current;if(typeof $0==="function")$0(L0.path,W0)}k0.current={path:null,dragging:!1,startX:0,startY:0},j1.current=0,n(!1),s(null),X1(null),L1(),h1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{X0.current=!1},0)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",Q0)},[p1,J1,y1,G_,h1,X1,K_,L1]),O_=T(async(A)=>{let x=Array.from(A?.target?.files||[]);if(x.length===0)return;let v=p.current||".";if(await F_(x,v),p.current=".",A?.target)A.target.value=""},[F_]);return z`
        <aside
            class=${`workspace-sidebar${f?" workspace-drop-active":""}`}
            data-workspace-scale=${M0}
            ref=${R0}
            onDragEnter=${h4}
            onDragOver=${i_}
            onDragLeave=${r_}
            onDrop=${l4}
        >
            <input type="file" multiple style="display:none" ref=${K0} onChange=${O_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${t}
                            class=${`workspace-menu-button${H0?" active":""}`}
                            onClick=${(A)=>{A.stopPropagation(),y0((x)=>!x)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${H0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${H0&&z`
                            <div class="workspace-menu-dropdown" ref=${C} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${V4} disabled=${N0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${n4} disabled=${N0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${P_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${w?" active":""}`} role="menuitem" onClick=${j_}>
                                    ${w?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&z`<div class="workspace-menu-separator"></div>`}
                                ${U&&!Z1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${o_} disabled=${!D1}>Open in editor</button>
                                `}
                                ${a1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${y4}>Rename selected</button>
                                `}
                                ${l1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${d4}>Download selected file</button>
                                `}
                                ${H1&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${s_}>Download selected folder (zip)</button>
                                `}
                                ${B_&&z`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${P4}>Delete selected file</button>
                                `}

                                ${(Y||q||Q)&&z`<div class="workspace-menu-separator"></div>`}
                                ${Y&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${J_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${q&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${H5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${Q&&z`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${U4}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${M_} title="New file" disabled=${N0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${w1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${x_}>
                ${N0&&z`<div class="workspace-drop-hint">Uploading…</div>`}
                ${b&&z`<div class="workspace-loading">Loading…</div>`}
                ${B&&z`<div class="workspace-error">${B}</div>`}
                ${G&&z`
                    <div
                        class="workspace-tree-list"
                        ref=${_1}
                        tabIndex="0"
                        onClick=${f_}
                        onDblClick=${__}
                        onKeyDown=${K1}
                        onTouchStart=${T_}
                        onTouchEnd=${H_}
                        onTouchMove=${x4}
                        onTouchCancel=${H_}
                    >
                        ${W_.map(({node:A,depth:x})=>{let v=A.type==="dir",u=A.path===U,r=A.path===H,Q0=v&&X.has(A.path),L0=q0&&A.path===q0,W0=Array.isArray(A.children)&&A.children.length>0?A.children.length:Number(A.child_count)||0;return z`
                                <div
                                    key=${A.path}
                                    class=${`workspace-row${u?" selected":""}${L0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+x*M4.indentPx}px`}}
                                    data-path=${A.path}
                                    data-type=${A.type}
                                    onMouseDown=${C4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${v?Q0?z`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:z`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${v?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${v?z`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:z`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${r?z`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${o}
                                                value=${F}
                                                onInput=${($0)=>W($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),c1();else if($0.key==="Escape")$0.preventDefault(),k1()}}
                                                onBlur=${k1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:z`<span class="workspace-label"><span class="workspace-label-text">${A.name}</span></span>`}
                                    ${v&&!Q0&&W0>0&&z`
                                        <span class="workspace-count">${W0}</span>
                                    `}
                                    ${v&&z`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${A.path}
                                            title="Upload files to this folder"
                                            onClick=${z5}
                                            disabled=${N0}
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
            ${U&&z`
                <div class="workspace-preview-splitter-h" onMouseDown=${p4} onTouchStart=${y_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${M_} title="New file" disabled=${N0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!Z1&&z`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>D1&&o0.current?.(U,D)}
                                    title=${X4}
                                    disabled=${!D1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${T4}
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
                            ${Z1?z`
                                    <button class="workspace-download" onClick=${F1}
                                        title="Upload files to this folder" disabled=${N0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${N8(U,w)}
                                        title="Download folder as zip" onClick=${(A)=>A.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:z`<button class="workspace-download" onClick=${b_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${I&&z`<div class="workspace-loading">Loading preview…</div>`}
                    ${D?.error&&z`<div class="workspace-error">${D.error}</div>`}
                    ${Z1&&z`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${F0?.loading&&z`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${F0?.error&&z`<div class="workspace-error">${F0.error}</div>`}
                        ${F0?.payload&&F0.payload.segments?.length>0&&z`
                            <${CX} payload=${F0.payload} />
                        `}
                        ${F0?.payload&&(!F0.payload.segments||F0.payload.segments.length===0)&&z`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!Z1&&z`
                        <div class="workspace-preview-body" ref=${A0}></div>
                    `}
                    ${S&&z`
                        <div class="workspace-download-card">
                            <${SX} mediaId=${S} />
                        </div>
                    `}
                </div>
            `}
            ${e&&z`
                <div class="workspace-drag-ghost" ref=${k_}>${e.label}</div>
            `}
        </aside>
    `}var wX=new Set(["kanban-editor","mindmap-editor"]);function RX(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function CY(_,$,j){let Z=RX(_,$,j);return Z!=null&&wX.has(Z)}var uX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,vX=/\.(csv|tsv)$/i,fX=/\.pdf$/i,bX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,SY=/\.drawio(\.xml|\.svg|\.png)?$/i;function wY({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Y,onCloseAll:q,onTogglePin:Q,onTogglePreview:K,onEditSource:G,previewTabs:N,paneOverrides:X,onToggleDock:V,dockVisible:U,onToggleZen:L,zenMode:H,onPopOutTab:O}){let[F,W]=m(null),D=y(null);g(()=>{if(!F)return;let B=(k)=>{if(k.type==="keydown"&&k.key!=="Escape")return;W(null)};return document.addEventListener("click",B),document.addEventListener("keydown",B),()=>{document.removeEventListener("click",B),document.removeEventListener("keydown",B)}},[F]),g(()=>{let B=(k)=>{if(k.ctrlKey&&k.key==="Tab"){if(k.preventDefault(),!_.length)return;let w=_.findIndex((l)=>l.id===$);if(k.shiftKey){let l=_[(w-1+_.length)%_.length];j?.(l.id)}else{let l=_[(w+1)%_.length];j?.(l.id)}return}if((k.ctrlKey||k.metaKey)&&k.key==="w"){let w=document.querySelector(".editor-pane");if(w&&w.contains(document.activeElement)){if(k.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[_,$,j,Z]);let E=T((B,k)=>{if(B.button===1){B.preventDefault(),Z?.(k);return}if(B.button===0)j?.(k)},[j,Z]),S=T((B,k)=>{B.preventDefault(),W({id:k,x:B.clientX,y:B.clientY})},[]),P=T((B)=>{B.preventDefault(),B.stopPropagation()},[]),b=T((B,k)=>{B.preventDefault(),B.stopPropagation(),Z?.(k)},[Z]);g(()=>{if(!$||!D.current)return;let B=D.current.querySelector(".tab-item.active");if(B)B.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let h=T((B)=>{if(!(X instanceof Map))return null;return X.get(B)||null},[X]),I=g0(()=>_.find((B)=>B.id===F?.id)||null,[F?.id,_]),M=g0(()=>{let B=F?.id;if(!B)return!1;return CY(B,h(B),(k)=>d0.resolve(k))},[F?.id,h]);if(!_.length)return null;return z`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((B)=>z`
                <div
                    key=${B.id}
                    class=${`tab-item${B.id===$?" active":""}${B.dirty?" dirty":""}${B.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${B.id===$}
                    title=${B.path}
                    onMouseDown=${(k)=>E(k,B.id)}
                    onContextMenu=${(k)=>S(k,B.id)}
                >
                    ${B.pinned&&z`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${B.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${P}
                        onClick=${(k)=>b(k,B.id)}
                        title=${B.dirty?"Unsaved changes":"Close"}
                        aria-label=${B.dirty?"Unsaved changes":`Close ${B.label}`}
                    >
                        ${B.dirty?z`<span class="tab-dirty-dot" aria-hidden="true"></span>`:z`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&z`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${U?" active":""}`}
                    onClick=${V}
                    title=${`${U?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${U?"Hide":"Show"} terminal`}
                    aria-pressed=${U?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${L&&z`
                <button
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${L}
                    title=${`${H?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${H?"Exit":"Enter"} zen mode`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${H?z`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:z`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${F&&z`
            <div class="tab-context-menu" style=${{left:F.x+"px",top:F.y+"px"}}>
                <button onClick=${()=>{Z?.(F.id),W(null)}}>Close</button>
                <button onClick=${()=>{Y?.(F.id),W(null)}}>Close Others</button>
                <button onClick=${()=>{q?.(),W(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Q?.(F.id),W(null)}}>
                    ${I?.pinned?"Unpin":"Pin"}
                </button>
                ${M&&G&&z`
                    <button onClick=${()=>{G(F.id),W(null)}}>Edit Source</button>
                `}
                ${O&&z`
                    <button onClick=${()=>{let B=_.find((k)=>k.id===F.id);O(F.id,B?.label),W(null)}}>Open in Window</button>
                `}
                ${K&&/\.(md|mdx|markdown)$/i.test(F.id)&&z`
                    <hr />
                    <button onClick=${()=>{K(F.id),W(null)}}>
                        ${N?.has(F.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${uX.test(F.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/workspace/raw?path="+encodeURIComponent(F.id),k=F.id.split("/").pop()||"document",w="/office-viewer/?url="+encodeURIComponent(B)+"&name="+encodeURIComponent(k);window.open(w,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${vX.test(F.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/csv-viewer/?path="+encodeURIComponent(F.id);window.open(B,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${fX.test(F.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/workspace/raw?path="+encodeURIComponent(F.id);window.open(B,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${bX.test(F.id)&&!SY.test(F.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/image-viewer/?path="+encodeURIComponent(F.id);window.open(B,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${SY.test(F.id)&&z`
                    <hr />
                    <button onClick=${()=>{let B="/drawio/edit?path="+encodeURIComponent(F.id);window.open(B,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}function gX(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Z,zenMode:Y}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Z?" chat-only":""}${Y?" zen-mode":""}`}function RY(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Z,chatOnlyMode:Y,zenMode:q,isRenameBranchFormOpen:Q,closeRenameCurrentBranchForm:K,handleRenameCurrentBranch:G,renameBranchNameDraft:N,renameBranchNameInputRef:X,setRenameBranchNameDraft:V,renameBranchDraftState:U,isRenamingBranch:L,addFileRef:H,openEditor:O,openTerminalTab:F,openVncTab:W,hasDockPanes:D,toggleDock:E,dockVisible:S,handleSplitterMouseDown:P,handleSplitterTouchStart:b,showEditorPaneContainer:h,tabStripTabs:I,tabStripActiveId:M,handleTabActivate:B,handleTabClose:k,handleTabCloseOthers:w,handleTabCloseAll:l,handleTabTogglePin:f,handleTabTogglePreview:n,handleTabEditSource:d,previewTabs:s,tabPaneOverrides:e,toggleZenMode:a,handlePopOutPane:q0,isWebAppMode:G0,editorContainerRef:N0,editorInstanceRef:I0,handleDockSplitterMouseDown:F0,handleDockSplitterTouchStart:V0,TERMINAL_TAB_PATH:P0,dockContainerRef:B0,handleEditorSplitterMouseDown:M0,handleEditorSplitterTouchStart:w0,searchQuery:H0,isIOSDevice:y0,currentBranchRecord:Y0,currentChatJid:D0,currentChatBranches:f0,handleBranchPickerChange:h0,formatBranchPickerLabel:U1,openRenameCurrentBranchForm:a0,handlePruneCurrentBranch:m0,currentHashtag:p0,handleBackToTimeline:o0,activeSearchScopeLabel:s0,posts:U0,isMainTimelineView:R0,hasMore:_1,loadMore:o,timelineRef:K0,handleHashtagClick:p,addMessageRef:i,scrollToMessage:J0,openFileFromPill:k0,handleDeletePost:x0,handleOpenFloatingWidget:X0,agents:T0,userProfile:c0,removingPostIds:O0,agentStatus:b0,isCompactionStatus:A0,agentDraft:Z0,agentPlan:C,agentThought:t,pendingRequest:z0,intentToast:E0,currentTurnId:i0,steerQueued:j1,handlePanelToggle:q1,btwSession:v1,closeBtwPanel:i1,handleBtwRetry:k_,handleBtwInject:r1,floatingWidget:S1,handleCloseFloatingWidget:g1,handleFloatingWidgetEvent:f1,extensionStatusPanels:$1,pendingExtensionPanelActions:m1,handleExtensionPanelAction:h_,searchOpen:o1,followupQueueItems:c_,handleInjectQueuedFollowup:v_,handleRemoveQueuedFollowup:J1,viewStateRef:p1,loadPosts:O1,scrollToBottom:X1,searchScope:L1,handleSearch:K_,setSearchScope:G_,enterSearchMode:y1,exitSearchMode:h1,fileRefs:V1,removeFileRef:k1,clearFileRefs:s1,setFileRefsFromCompose:c1,messageRefs:l_,removeMessageRef:M_,clearMessageRefs:n_,setMessageRefsFromCompose:L_,handleCreateSessionFromCompose:N4,handleRestoreBranch:W_,attachActiveEditorFile:I_,followupQueueCount:M4,handleBtwIntercept:I4,handleMessageResponse:Z1,handleComposeSubmitError:D1,handlePopOutChat:X4,isComposeBoxAgentActive:a1,activeChatAgents:B_,connectionStatus:l1,activeModel:H1,activeModelUsage:P1,activeThinkingLevel:Q1,supportsThinking:t1,contextUsage:e1,notificationsEnabled:__,notificationPermission:f_,handleToggleNotifications:w1,setActiveModel:C1,applyModelState:$_,setPendingRequest:x_,pendingRequestRef:W1,toggleWorkspace:z_}=_;return z`
    <div class=${gX({workspaceOpen:j,editorOpen:Z,chatOnlyMode:Y,zenMode:q})} ref=${$}>
      ${Q&&z`
        <div class="rename-branch-overlay" onPointerDown=${(K1)=>{if(K1.target===K1.currentTarget)K()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(K1)=>{K1.preventDefault(),G(N)}}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${X}
              value=${N}
              onInput=${(K1)=>{let T_=K1.currentTarget?.value??"";V(String(T_))}}
              onKeyDown=${(K1)=>{if(K1.key==="Escape")K1.preventDefault(),K()}}
              autocomplete="off"
              placeholder="Handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${U.kind||"info"}`}>
              ${U.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${L||!U.canSubmit}>
                ${L?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${K}
                disabled=${L}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Y&&z`
        <${PY}
          onFileSelect=${H}
          visible=${j}
          active=${j||Z}
          onOpenEditor=${O}
          onOpenTerminalTab=${F}
          onOpenVncTab=${W}
          onToggleTerminal=${D?E:void 0}
          terminalVisible=${Boolean(D&&S)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${z_}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${P} onTouchStart=${b}></div>
      `}
      ${h&&z`
        <div class="editor-pane-container">
          ${q&&z`<div class="zen-hover-zone"></div>`}
          ${Z&&z`
            <${wY}
              tabs=${I}
              activeId=${M}
              onActivate=${B}
              onClose=${k}
              onCloseOthers=${w}
              onCloseAll=${l}
              onTogglePin=${f}
              onTogglePreview=${n}
              onEditSource=${d}
              previewTabs=${s}
              paneOverrides=${e}
              onToggleDock=${D?E:void 0}
              dockVisible=${D&&S}
              onToggleZen=${a}
              zenMode=${q}
              onPopOutTab=${G0?void 0:q0}
            />
          `}
          ${Z&&z`<div class="editor-pane-host" ref=${N0}></div>`}
          ${Z&&M&&s.has(M)&&z`
            <${g8}
              getContent=${()=>I0.current?.getContent?.()}
              path=${M}
              onClose=${()=>n(M)}
            />
          `}
          ${D&&S&&z`<div class="dock-splitter" onMouseDown=${F0} onTouchStart=${V0}></div>`}
          ${D&&z`<div class=${`dock-panel${S?"":" hidden"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!G0&&z`
                  <button class="dock-panel-action" onClick=${()=>q0(P0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${E} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="dock-panel-body" ref=${B0}></div>
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${M0} onTouchStart=${w0}></div>
      `}
      <div class="container">
        ${H0&&y0()&&z`<div class="search-results-spacer"></div>`}
        ${Y&&z`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${Y0?.agent_name?`@${Y0.agent_name}`:D0}
              </span>
              <span class="chat-window-header-subtitle">${Y0?.chat_jid||D0}</span>
            </div>
            <div class="chat-window-header-actions">
              ${f0.length>1&&z`
                <label class="chat-window-branch-picker-wrap">
                  <span class="chat-window-branch-picker-label">Branch</span>
                  <select
                    class="chat-window-branch-picker"
                    value=${D0}
                    onChange=${(K1)=>h0(K1.currentTarget.value)}
                  >
                    ${f0.map((K1)=>z`
                      <option key=${K1.chat_jid} value=${K1.chat_jid}>
                        ${U1(K1,{currentChatJid:D0})}
                      </option>
                    `)}
                  </select>
                </label>
              `}
              ${Y0?.chat_jid&&z`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${a0}
                  title=${L?"Renaming branch…":"Rename this branch"}
                  aria-label="Rename this branch"
                  disabled=${L}
                >
                  ${L?"Renaming…":"Rename"}
                </button>
              `}
              ${Y0?.chat_jid&&Y0.chat_jid!==(Y0.root_chat_jid||Y0.chat_jid)&&z`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${m0}
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
        ${(p0||H0)&&z`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${o0}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${p0?`#${p0}`:`Search: ${H0} · ${s0}`}</span>
          </div>
        `}
        <${WY}
          posts=${U0}
          hasMore=${R0?_1:!1}
          onLoadMore=${R0?o:void 0}
          timelineRef=${K0}
          onHashtagClick=${p}
          onMessageRef=${i}
          onScrollToMessage=${J0}
          onFileRef=${k0}
          onPostClick=${void 0}
          onDeletePost=${x0}
          onOpenWidget=${X0}
          emptyMessage=${p0?`No posts with #${p0}`:H0?`No results for "${H0}"`:void 0}
          agents=${T0}
          user=${c0}
          reverse=${R0}
          removingPostIds=${O0}
          searchQuery=${H0}
        />
        <${a$}
          status=${A0(b0)?null:b0}
          draft=${Z0}
          plan=${C}
          thought=${t}
          pendingRequest=${z0}
          intent=${E0}
          turnId=${i0}
          steerQueued=${j1}
          onPanelToggle=${q1}
          showExtensionPanels=${!1}
        />
        <${rZ}
          session=${v1}
          onClose=${i1}
          onRetry=${k_}
          onInject=${r1}
        />
        <${oZ}
          widget=${S1}
          onClose=${g1}
          onWidgetEvent=${f1}
        />
        <${a$}
          extensionPanels=${Array.from($1.values())}
          pendingPanelActions=${m1}
          onExtensionPanelAction=${h_}
          turnId=${i0}
          steerQueued=${j1}
          onPanelToggle=${q1}
          showCorePanels=${!1}
        />
        <${o$}
          items=${o1?[]:c_}
          onInjectQueuedFollowup=${v_}
          onRemoveQueuedFollowup=${J1}
          onOpenFilePill=${k0}
        />
        <${iZ}
          onPost=${()=>{let{searchQuery:K1,searchOpen:T_}=p1.current||{};if(!K1&&!T_)O1(),X1()}}
          onFocus=${X1}
          searchMode=${o1}
          searchScope=${L1}
          onSearch=${K_}
          onSearchScopeChange=${G_}
          onEnterSearch=${y1}
          onExitSearch=${h1}
          fileRefs=${V1}
          onRemoveFileRef=${k1}
          onClearFileRefs=${s1}
          onSetFileRefs=${c1}
          messageRefs=${l_}
          onRemoveMessageRef=${M_}
          onClearMessageRefs=${n_}
          onSetMessageRefs=${L_}
          onSwitchChat=${h0}
          onRenameSession=${G}
          isRenameSessionInProgress=${L}
          onCreateSession=${N4}
          onDeleteSession=${m0}
          onRestoreSession=${W_}
          activeEditorPath=${Y?null:M}
          onAttachEditorFile=${Y?void 0:I_}
          onOpenFilePill=${k0}
          followupQueueCount=${M4}
          followupQueueItems=${c_}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${v_}
          onRemoveQueuedFollowup=${J1}
          onSubmitIntercept=${I4}
          onMessageResponse=${Z1}
          onSubmitError=${D1}
          onPopOutChat=${G0?void 0:X4}
          isAgentActive=${a1}
          activeChatAgents=${B_}
          currentChatJid=${D0}
          connectionStatus=${l1}
          activeModel=${H1}
          modelUsage=${P1}
          thinkingLevel=${Q1}
          supportsThinking=${t1}
          contextUsage=${e1}
          notificationsEnabled=${__}
          notificationPermission=${f_}
          onToggleNotifications=${w1}
          onModelChange=${C1}
          onModelStateChange=${$_}
          statusNotice=${A0(b0)?b0:null}
        />
        <${_Y}
          request=${z0}
          onRespond=${()=>{x_(null),W1.current=null}}
        />
      </div>
    </div>
  `}var mX=FZ(),uY=V6,pX=L6,hX=z6,cX=D6,lX=A6,V3=H6,U3=d1(b1,"getAgentContext",null),nX=d1(b1,"getAutoresearchStatus",null),dX=d1(b1,"stopAutoresearch",{status:"ok"}),iX=d1(b1,"dismissAutoresearch",{status:"ok"}),vY=d1(b1,"getAgentModels",{current:null,models:[]}),fY=d1(b1,"getActiveChatAgents",{chats:[]}),L3=d1(b1,"getChatBranches",{chats:[]}),rX=d1(b1,"renameChatBranch",null),oX=d1(b1,"pruneChatBranch",null),sX=d1(b1,"restoreChatBranch",null),bY=d1(b1,"getAgentQueueState",{count:0}),gY=d1(b1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),mY=d1(b1,"removeAgentQueueItem",{removed:!1}),aX=d1(b1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});d0.register(C6);d0.register(V$);d0.register(X$);d0.register(U$);d0.register(L$);d0.register(W$);d0.register(z$);d0.register(H$);d0.register(J$);d0.register(A$);d0.register(E$);d0.register(j$);S6();d0.register(u6);d0.register(v6);function tX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:Q,branchLoaderMode:K,branchLoaderSourceChatJid:G}=g0(()=>AZ(_),[_]),[N,X]=m("disconnected"),[V,U]=m(()=>Z4()),[L,H]=m(null),[O,F]=m(null),[W,D]=m(!1),[E,S]=m("current"),[P,b]=m([]),[h,I]=m([]),[M,B]=m(null),{agentStatus:k,setAgentStatus:w,agentDraft:l,setAgentDraft:f,agentPlan:n,setAgentPlan:d,agentThought:s,setAgentThought:e,pendingRequest:a,setPendingRequest:q0,currentTurnId:G0,setCurrentTurnId:N0,steerQueuedTurnId:I0,setSteerQueuedTurnId:F0,lastAgentEventRef:V0,lastSilenceNoticeRef:P0,isAgentRunningRef:B0,draftBufferRef:M0,thoughtBufferRef:w0,pendingRequestRef:H0,stalledPostIdRef:y0,currentTurnIdRef:Y0,steerQueuedTurnIdRef:D0,thoughtExpandedRef:f0,draftExpandedRef:h0}=g7(),[U1,a0]=m({}),[m0,p0]=m(null),[o0,s0]=m(null),[U0,R0]=m(!1),[_1,o]=m(null),[K0,p]=m([]),[i,J0]=m([]),[k0,x0]=m(null),[X0,T0]=m(()=>new Map),[c0,O0]=m(()=>new Set),[b0,A0]=m([]),[Z0,C]=m(!1),[t,z0]=m(()=>DZ()),[E0,i0]=m(null),j1=y(new Set),q1=g0(()=>K0.find((_0)=>_0?.chat_jid===j)||null,[K0,j]),v1=g0(()=>i.find((_0)=>_0?.chat_jid===j)||q1||null,[q1,i,j]),i1=v1?.root_chat_jid||q1?.root_chat_jid||j,k_=OZ(E),[r1,S1]=m(()=>({status:K?"running":"idle",message:K?"Preparing a new chat branch…":""})),g1=b0.length,f1=y(new Set),$1=y([]),m1=y(new Set),h_=y(0),o1=y({inFlight:!1,lastAttemptAt:0,turnId:null});f1.current=new Set(b0.map((_0)=>_0.row_id)),$1.current=b0;let{notificationsEnabled:c_,notificationPermission:v_,toggleNotifications:J1,notify:p1}=f7(),[O1,X1]=m(()=>new Set),[L1,K_]=m(()=>G5("workspaceOpen",!0)),G_=y(null),{editorOpen:y1,tabStripTabs:h1,tabStripActiveId:V1,previewTabs:k1,tabPaneOverrides:s1,openEditor:c1,closeEditor:l_,handleTabClose:M_,handleTabActivate:n_,handleTabCloseOthers:L_,handleTabCloseAll:N4,handleTabTogglePin:W_,handleTabTogglePreview:I_,handleTabEditSource:M4,revealInExplorer:I4}=p7({onTabClosed:(_0)=>G_.current?.(_0)}),Z1=y(null),D1=y(null),X4=y(null),a1=y(null),B_=d0.getDockPanes().length>0,[l1,H1]=m(!1),P1=T(()=>H1((_0)=>!_0),[]),Q1=T(()=>{c1($5,{label:"Terminal"})},[c1]),t1=T(()=>{c1(K4,{label:"VNC"})},[c1]),e1=g0(()=>KZ(h1,V1),[V1,h1]),__=g0(()=>GZ(s1,V1),[s1,V1]),f_=g0(()=>NZ(Q,e1,q),[e1,Q,q]),w1=g0(()=>XZ(h1,k1,V1),[k1,V1,h1]),C1=g0(()=>VZ(q,K4),[q]),$_=g0(()=>UZ(q,$5,w1,C1),[C1,w1,q]),x_=LZ(Y,Z,y1,B_,l1),[W1,z_]=m(!1),K1=y(!1),T_=T(()=>{if(!y1||Z)return;if(K1.current=l1,l1)H1(!1);z_(!0)},[y1,Z,l1]),H_=T(()=>{if(!W1)return;if(z_(!1),K1.current)H1(!0),K1.current=!1},[W1]),x4=T(()=>{if(W1)H_();else T_()},[W1,T_,H_]);g(()=>{if(W1&&!y1)H_()},[W1,y1,H_]),g(()=>{if(!Y||!q)return;if(e0.getActiveId()===q)return;c1(q,Q?{label:Q}:void 0)},[c1,Q,Y,q]),g(()=>{let _0=Z1.current;if(!_0)return;if(D1.current)D1.current.dispose(),D1.current=null;let C0=V1;if(!C0)return;let l0={path:C0,mode:"edit"},E1=(__?d0.get(__):null)||d0.resolve(l0)||d0.get("editor");if(!E1){_0.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let r0=E1.mount(_0,l0);D1.current=r0,r0.onDirtyChange?.((x1)=>{e0.setDirty(C0,x1)}),r0.onSaveRequest?.(()=>{}),r0.onClose?.(()=>{l_()});let q_=e0.getViewState(C0);if(q_&&typeof r0.restoreViewState==="function")requestAnimationFrame(()=>r0.restoreViewState(q_));if(typeof r0.onViewStateChange==="function")r0.onViewStateChange((x1)=>{e0.saveViewState(C0,x1)});return requestAnimationFrame(()=>r0.focus()),()=>{if(D1.current===r0)r0.dispose(),D1.current=null}},[V1,__,l_]);let p4=T(async(_0)=>{let C0=typeof V1==="string"?V1.trim():"",l0=D1.current;if(!C0||!l0?.setContent)return;if(typeof l0.isDirty==="function"&&l0.isDirty())return;if(!(Array.isArray(_0)&&_0.length>0?_0.some((r0)=>{let q_=Array.isArray(r0?.changed_paths)?r0.changed_paths.map((u1)=>typeof u1==="string"?u1.trim():"").filter(Boolean):[];if(q_.length>0)return q_.some((u1)=>u1==="."||u1===C0);let x1=typeof r0?.path==="string"?r0.path.trim():"";return!x1||x1==="."||x1===C0}):!0))return;try{let r0=await k5(C0,1e6,"edit"),q_=typeof r0?.text==="string"?r0.text:"",x1=typeof r0?.mtime==="string"&&r0.mtime.trim()?r0.mtime.trim():new Date().toISOString();l0.setContent(q_,x1)}catch(r0){console.warn("[workspace_update] Failed to refresh active pane:",r0)}},[V1]);g(()=>{let _0=X4.current;if(a1.current)a1.current.dispose(),a1.current=null;if(!_0||!B_||!l1)return;let C0=d0.getDockPanes()[0];if(!C0){_0.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let l0=C0.mount(_0,{mode:"view"});return a1.current=l0,requestAnimationFrame(()=>l0.focus?.()),()=>{if(a1.current===l0)l0.dispose(),a1.current=null}},[B_,l1]);let[y_,b_]=m({name:"You",avatar_url:null,avatar_background:null}),T4=y(null),d_=y(!1),h4=y(!1),i_=y(!1),r_=y(null),F_=y(j),c4=y(new Map),l4=y(j),z5=y(0),F1=y(0),V4=y({}),n4=y({name:null,avatar_url:null}),P_=y({currentHashtag:null,searchQuery:null,searchOpen:!1}),j_=y(null),o_=y(null),y4=y(0),P4=y(0),d4=y(0),s_=y(null),J_=y(null),H5=y(null),U4=y(null),C4=y(0),O_=y({title:null,avatarBase:null}),A=y(null),x=y(!1),[v,u]=m(!1),r=y(0),[Q0,L0]=m(!1),[W0,$0]=m(""),u0=g0(()=>u8(W0,v1?.agent_name||""),[v1?.agent_name,W0]),M1=y(null);r7(30000),g(()=>{if(!Q0)return;requestAnimationFrame(()=>{if(Q0)M1.current?.focus(),M1.current?.select?.()})},[Q0]),g(()=>{return Z7()},[]),g(()=>{return rj(U)},[]),g(()=>{Y1("workspaceOpen",String(L1))},[L1]),g(()=>{return ZZ()},[]),g(()=>{if(!t){Y1(BTW_SESSION_KEY,"");return}Y1(BTW_SESSION_KEY,JSON.stringify({question:t.question||"",answer:t.answer||"",thinking:t.thinking||"",error:t.error||null,status:t.status||"success"}))},[t]),g(()=>{V4.current=U1||{}},[U1]),g(()=>{F_.current=j},[j]),g(()=>{n4.current=y_||{name:"You",avatar_url:null,avatar_background:null}},[y_]);let D_=T((_0,C0,l0=null)=>{if(typeof document>"u")return;let E1=(_0||"").trim()||"PiClaw";if(O_.current.title!==E1){document.title=E1;let S_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(S_&&S_.getAttribute("content")!==E1)S_.setAttribute("content",E1);O_.current.title=E1}let r0=document.getElementById("dynamic-favicon");if(!r0)return;let q_=r0.getAttribute("data-default")||r0.getAttribute("href")||"/favicon.ico",x1=C0||q_,u1=C0?`${x1}|${l0||""}`:x1;if(O_.current.avatarBase!==u1){let S_=C0?`${x1}${x1.includes("?")?"&":"?"}v=${l0||Date.now()}`:x1;r0.setAttribute("href",S_),O_.current.avatarBase=u1}},[]),{addFileRef:Z_,removeFileRef:n5,clearFileRefs:J,setFileRefsFromCompose:R,showIntentToast:c,openFileFromPill:j0,attachActiveEditorFile:S0,addMessageRef:B1,scrollToMessage:A1,removeMessageRef:R1,clearMessageRefs:a_,setMessageRefsFromCompose:S4,handleComposeSubmitError:i4}=Cj({setIntentToast:B,intentToastTimerRef:A,editorOpen:y1,openEditor:c1,resolvePane:(_0)=>d0.resolve(_0),tabStripActiveId:V1,setFileRefs:b,setMessageRefs:I,currentChatJid:j,getThread:U6,setPosts:C_});G_.current=n5;let w4=T((_0={})=>{let C0=Date.now();if(V0.current=C0,_0.running)B0.current=!0,C((l0)=>l0?l0:!0);if(_0.clearSilence)P0.current=0},[C]),n1=T(()=>{if(U4.current)clearTimeout(U4.current),U4.current=null;C4.current=0},[]);g(()=>()=>{n1()},[n1]);let t_=T(()=>{n1(),w((_0)=>{if(!_0)return _0;if(!(_0.last_activity||_0.lastActivity))return _0;let{last_activity:C0,lastActivity:l0,...E1}=_0;return E1})},[n1]),i8=T((_0)=>{if(!_0)return;n1();let C0=Date.now();C4.current=C0,w({type:_0.type||"active",last_activity:!0}),U4.current=setTimeout(()=>{if(C4.current!==C0)return;w((l0)=>{if(!l0||!(l0.last_activity||l0.lastActivity))return l0;return null})},n7)},[n1]),L4=T(()=>{B0.current=!1,C(!1),V0.current=null,P0.current=0,M0.current="",w0.current="",H0.current=null,J_.current=null,Y0.current=null,D0.current=null,r_.current=null,o1.current={inFlight:!1,lastAttemptAt:0,turnId:null},n1(),N0(null),F0(null),f0.current=!1,h0.current=!1},[n1,N0,F0,C]),I1=T((_0)=>{if(!a7({remainingQueueCount:_0,currentTurnId:Y0.current,isAgentTurnActive:Z0}))return;D0.current=null,F0(null)},[Z0,F0]),F5=T(()=>bZ({agentStatus:k,agentDraft:l,agentPlan:n,agentThought:s,pendingRequest:a,currentTurnId:G0,steerQueuedTurnId:I0,isAgentTurnActive:Z0,followupQueueItems:b0,activeModel:m0,activeThinkingLevel:o0,supportsThinking:U0,activeModelUsage:_1,contextUsage:k0,isAgentRunning:B0.current,wasAgentActive:i_.current,draftBuffer:M0.current,thoughtBuffer:w0.current,lastAgentEvent:V0.current,lastSilenceNotice:P0.current,lastAgentResponse:J_.current,currentTurnIdRef:Y0.current,steerQueuedTurnIdRef:D0.current,thoughtExpanded:f0.current,draftExpanded:h0.current,agentStatusRef:r_.current,silentRecovery:o1.current}),[m0,_1,o0,l,n,k,s,k0,G0,b0,Z0,a,I0,U0]),r8=T((_0)=>{gZ({snapshot:_0,clearLastActivityTimer:n1,refs:{isAgentRunningRef:B0,wasAgentActiveRef:i_,lastAgentEventRef:V0,lastSilenceNoticeRef:P0,draftBufferRef:M0,thoughtBufferRef:w0,pendingRequestRef:H0,lastAgentResponseRef:J_,currentTurnIdRef:Y0,steerQueuedTurnIdRef:D0,agentStatusRef:r_,silentRecoveryRef:o1,thoughtExpandedRef:f0,draftExpandedRef:h0},setters:{setIsAgentTurnActive:C,setAgentStatus:w,setAgentDraft:f,setAgentPlan:d,setAgentThought:e,setPendingRequest:q0,setCurrentTurnId:N0,setSteerQueuedTurnId:F0,setFollowupQueueItems:A0,setActiveModel:p0,setActiveThinkingLevel:s0,setSupportsThinking:R0,setActiveModelUsage:o,setContextUsage:x0}})},[n1,N0,A0,C,F0]),d5=T((_0)=>{if(!_0)return;if(Y0.current===_0)return;Y0.current=_0,o1.current={inFlight:!1,lastAttemptAt:0,turnId:_0},N0(_0),D0.current=null,F0(null),M0.current="",w0.current="",f({text:"",totalLines:0}),d(""),e({text:"",totalLines:0}),q0(null),H0.current=null,J_.current=null,f0.current=!1,h0.current=!1},[N0,F0]),o8=T((_0)=>{if(typeof document<"u"){let S_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&S_)return}let C0=J_.current;if(!C0||!C0.post)return;if(_0&&C0.turnId&&C0.turnId!==_0)return;let l0=C0.post;if(l0.id&&s_.current===l0.id)return;let E1=String(l0?.data?.content||"").trim();if(!E1)return;s_.current=l0.id||s_.current,J_.current=null;let r0=E1.replace(/\s+/g," ").slice(0,200),q_=V4.current||{},u1=(l0?.data?.agent_id?q_[l0.data.agent_id]:null)?.name||"Pi";p1(u1,r0)},[p1]),R4=T(async(_0,C0)=>{await s7({panelKey:_0,expanded:C0,currentTurnIdRef:Y0,thoughtExpandedRef:f0,draftExpandedRef:h0,setAgentThoughtVisibility:lX,getAgentThought:cX,thoughtBufferRef:w0,draftBufferRef:M0,setAgentThought:e,setAgentDraft:f})},[]),Y_=y(null),W4=T(()=>{let _0=j_.current;if(!_0)return;if(!(Math.abs(_0.scrollTop)>150))_0.scrollTop=0},[]);Y_.current=W4;let W3=T((_0)=>{let C0=j_.current;if(!C0||typeof _0!=="function"){_0?.();return}let{currentHashtag:l0,searchQuery:E1,searchOpen:r0}=P_.current||{},q_=!((E1||r0)&&!l0),x1=q_?C0.scrollHeight-C0.scrollTop:C0.scrollTop;_0(),requestAnimationFrame(()=>{let u1=j_.current;if(!u1)return;if(q_){let S_=Math.max(u1.scrollHeight-x1,0);u1.scrollTop=S_}else{let S_=Math.max(u1.scrollHeight-u1.clientHeight,0),Cq=Math.min(x1,S_);u1.scrollTop=Cq}})},[]),r4=T((_0)=>{let C0=j_.current;if(!C0||typeof _0!=="function"){_0?.();return}let l0=C0.scrollTop;_0(),requestAnimationFrame(()=>{let E1=j_.current;if(!E1)return;let r0=Math.max(E1.scrollHeight-E1.clientHeight,0);E1.scrollTop=Math.min(l0,r0)})},[]),B3=T((_0)=>Q9(_0,f1.current),[]),{posts:s8,setPosts:C_,hasMore:pY,setHasMore:z3,hasMoreRef:H3,loadPosts:e_,refreshTimeline:a8,loadMore:hY,loadMoreRef:F3}=b7({preserveTimelineScroll:W3,preserveTimelineScrollTop:r4,chatJid:j}),i5=g0(()=>B3(s8),[s8,b0,B3]),cY=T(()=>{let _0=y0.current;if(!_0)return;C_((C0)=>C0?C0.filter((l0)=>l0.id!==_0):C0),y0.current=null},[C_]),{handleSplitterMouseDown:lY,handleSplitterTouchStart:nY,handleEditorSplitterMouseDown:dY,handleEditorSplitterTouchStart:iY,handleDockSplitterMouseDown:rY,handleDockSplitterTouchStart:oY}=m7({appShellRef:o_,sidebarWidthRef:y4,editorWidthRef:P4,dockHeightRef:d4}),sY=T(()=>{_Z({isAgentRunningRef:B0,lastSilenceNoticeRef:P0,lastAgentEventRef:V0,currentTurnIdRef:Y0,thoughtExpandedRef:f0,draftExpandedRef:h0,draftBufferRef:M0,thoughtBufferRef:w0,pendingRequestRef:H0,lastAgentResponseRef:J_,stalledPostIdRef:y0,scrollToBottomRef:Y_,setCurrentTurnId:N0,setAgentDraft:f,setAgentPlan:d,setAgentThought:e,setPendingRequest:q0,setAgentStatus:w,setPosts:C_,dedupePosts:m5})},[N0]);g(()=>{P_.current={currentHashtag:L,searchQuery:O,searchOpen:W}},[L,O,W]);let{refreshQueueState:_4,refreshContextUsage:J5,refreshAutoresearchStatus:O5,refreshAgentStatus:J3,handleUiVersionDrift:aY,handleConnectionStatusChange:tY}=$Z({currentChatJid:j,activeChatJidRef:F_,queueRefreshGenRef:h_,dismissedQueueRowIdsRef:m1,getAgentQueueState:bY,setFollowupQueueItems:A0,clearQueuedSteerStateIfStale:I1,getAgentContext:U3,setContextUsage:x0,getAutoresearchStatus:nX,setExtensionStatusPanels:T0,setPendingExtensionPanelActions:O0,getAgentStatus:V3,wasAgentActiveRef:i_,viewStateRef:P_,refreshTimeline:a8,clearAgentRunState:L4,agentStatusRef:r_,pendingRequestRef:H0,thoughtBufferRef:w0,draftBufferRef:M0,setAgentStatus:w,setAgentDraft:f,setAgentPlan:d,setAgentThought:e,setPendingRequest:q0,setActiveTurn:d5,noteAgentActivity:w4,clearLastActivityFlag:t_,isAgentRunningRef:B0,currentTurnIdRef:Y0,silentRecoveryRef:o1,silenceRefreshMs:l7,lastAgentEventRef:V0,lastSilenceNoticeRef:P0,silenceWarningMs:h7,silenceFinalizeMs:c7,isCompactionStatus:D4,serverVersionContext:{currentAppAssetVersion:mX,staleUiVersionRef:T4,staleUiReloadScheduledRef:d_,tabStoreHasUnsaved:()=>e0.hasUnsaved(),isAgentRunningRef:B0,pendingRequestRef:H0,showIntentToast:c},setConnectionStatus:X,setPendingRequestForConnection:q0,hasConnectedOnceRef:h4}),eY=T(async(_0)=>{await Ij({hashtag:_0,setCurrentHashtag:H,setPosts:C_,loadPosts:e_})},[e_]),_q=T(async()=>{await xj({setCurrentHashtag:H,setSearchQuery:F,setPosts:C_,loadPosts:e_})},[e_]),$q=T(async(_0,C0=E)=>{await Tj({query:_0,scope:C0,currentChatJid:j,currentRootChatJid:i1,searchPosts:uY,setSearchScope:S,setSearchQuery:F,setCurrentHashtag:H,setPosts:C_,setHasMore:z3})},[j,i1,E]),jq=T(()=>{D(!0),F(null),H(null),S("current"),C_([])},[]),Zq=T(()=>{D(!1),F(null),e_()},[e_]),_V=T(()=>{},[]),Yq=!L&&!O&&!W,qq=T(async(_0)=>{await yj({post:_0,posts:i5,currentChatJid:j,deletePost:pX,preserveTimelineScrollTop:r4,setPosts:C_,setRemovingPostIds:X1,hasMoreRef:H3,loadMoreRef:F3})},[j,i5,r4]),{updateAgentProfile:Qq,updateUserProfile:Kq,applyModelState:O3,refreshModelState:$V,refreshActiveChatAgents:r5,refreshCurrentChatBranches:o5,refreshModelAndQueueState:D3}=v9({getAgents:hX,setAgents:a0,setUserProfile:b_,applyBranding:D_,readStoredNumber:R5,sidebarWidthRef:y4,appShellRef:o_,currentChatJid:j,currentRootChatJid:i1,getAgentModels:vY,getActiveChatAgents:fY,getChatBranches:L3,activeChatJidRef:F_,setActiveChatAgents:p,setCurrentChatBranches:J0,setActiveModel:p0,setActiveThinkingLevel:s0,setSupportsThinking:R0,setActiveModelUsage:o,agentsRef:V4,refreshQueueState:_4,refreshContextUsage:J5,refreshAutoresearchStatus:O5}),A3=Z0||k!==null,Gq=T((_0)=>{Jj({queuedItem:_0,followupQueueItemsRef:$1,dismissedQueueRowIdsRef:m1,currentChatJid:j,refreshQueueState:_4,setFollowupQueueItems:A0,showIntentToast:c,steerAgentQueueItem:gY,removeAgentQueueItem:mY})},[j,_4,A0,c]),Nq=T((_0)=>{Oj({queuedItem:_0,followupQueueItemsRef:$1,dismissedQueueRowIdsRef:m1,currentChatJid:j,refreshQueueState:_4,setFollowupQueueItems:A0,showIntentToast:c,clearQueuedSteerStateIfStale:I1,steerAgentQueueItem:gY,removeAgentQueueItem:mY})},[I1,j,_4,A0,c]),E3=T((_0)=>{F9({response:_0,refreshActiveChatAgents:r5,refreshCurrentChatBranches:o5,refreshContextUsage:J5,refreshAutoresearchStatus:O5,refreshQueueState:_4})},[r5,O5,o5,J5,_4]),{handleExtensionPanelAction:Xq,closeBtwPanel:Vq,handleBtwIntercept:Uq,handleBtwRetry:Lq,handleBtwInject:Wq,handleOpenFloatingWidget:Bq,handleCloseFloatingWidget:zq,handleFloatingWidgetEvent:Hq}=kj({currentChatJid:j,currentRootChatJid:i1,isComposeBoxAgentActive:A3,showIntentToast:c,setPendingExtensionPanelActions:O0,refreshAutoresearchStatus:O5,stopAutoresearch:dX,dismissAutoresearch:iX,streamSidePrompt:aX,btwAbortRef:H5,btwSession:t,setBtwSession:z0,sendAgentMessage:e4,handleMessageResponse:E3,dismissedLiveWidgetKeysRef:j1,setFloatingWidget:i0,getAgentStatus:V3,getAgentContext:U3,getAgentQueueState:bY,getAgentModels:vY,getActiveChatAgents:fY,getChatBranches:L3,getTimeline:u4,rawPosts:s8,activeChatAgents:K0,currentChatBranches:i,contextUsage:k0,followupQueueItemsRef:$1,activeModel:m0,activeThinkingLevel:o0,supportsThinking:U0,isAgentTurnActive:Z0}),{refreshCurrentView:Fq,applyLiveGeneratedWidgetUpdate:Jq}=Sj({currentChatJid:j,currentRootChatJid:i1,currentHashtag:L,searchQuery:O,searchScope:E,loadPosts:e_,searchPosts:uY,setPosts:C_,setHasMore:z3,scrollToBottom:W4,setExtensionStatusPanels:T0,setPendingExtensionPanelActions:O0,paneStateOwnerChatJidRef:l4,chatPaneStateByChatRef:c4,snapshotCurrentChatPaneState:F5,restoreChatPaneState:r8,dismissedQueueRowIdsRef:m1,refreshQueueState:_4,refreshAgentStatus:J3,refreshContextUsage:J5,viewStateRef:P_,refreshTimeline:a8,refreshModelAndQueueState:D3,setFloatingWidget:i0,dismissedLiveWidgetKeysRef:j1});sj({currentChatJid:j,posts:i5,scrollToMessage:A1,handleConnectionStatusChange:tY,loadPosts:e_,refreshCurrentView:Fq,updateAgentProfile:Qq,updateUserProfile:Kq,currentTurnIdRef:Y0,activeChatJidRef:F_,pendingRequestRef:H0,draftBufferRef:M0,thoughtBufferRef:w0,steerQueuedTurnIdRef:D0,thoughtExpandedRef:f0,draftExpandedRef:h0,draftThrottleRef:z5,thoughtThrottleRef:F1,viewStateRef:P_,followupQueueItemsRef:$1,dismissedQueueRowIdsRef:m1,scrollToBottomRef:Y_,hasMoreRef:H3,loadMoreRef:F3,lastAgentResponseRef:J_,wasAgentActiveRef:i_,setActiveTurn:d5,applyLiveGeneratedWidgetUpdate:Jq,setFloatingWidget:i0,clearLastActivityFlag:t_,handleUiVersionDrift:aY,setAgentStatus:w,setAgentDraft:f,setAgentPlan:d,setAgentThought:e,setPendingRequest:q0,clearAgentRunState:L4,getAgentStatus:V3,noteAgentActivity:w4,showLastActivity:i8,refreshTimeline:a8,refreshModelAndQueueState:D3,refreshActiveChatAgents:r5,refreshCurrentChatBranches:o5,notifyForFinalResponse:o8,setContextUsage:x0,refreshContextUsage:J5,refreshQueueState:_4,setFollowupQueueItems:A0,clearQueuedSteerStateIfStale:I1,setSteerQueuedTurnId:F0,applyModelState:O3,getAgentContext:U3,setExtensionStatusPanels:T0,setPendingExtensionPanelActions:O0,refreshActiveEditorFromWorkspace:p4,showIntentToast:c,removeStalledPost:cY,setPosts:C_,preserveTimelineScrollTop:r4,finalizeStalledResponse:sY,connectionStatus:N,agentStatus:k,refreshAgentStatus:J3,refreshAutoresearchStatus:O5});let{toggleWorkspace:Oq,handleBranchPickerChange:Dq,openRenameCurrentBranchForm:Aq,closeRenameCurrentBranchForm:Eq,handleRenameCurrentBranch:kq,handlePruneCurrentBranch:Mq,handleRestoreBranch:Iq,handleCreateSessionFromCompose:xq,handlePopOutPane:Tq,handlePopOutChat:yq}=vZ({setWorkspaceOpen:K_,currentChatJid:j,chatOnlyMode:Z,navigate:$,currentBranchRecord:v1,renameBranchInFlightRef:x,renameBranchLockUntilRef:r,getFormLock:JZ,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:L0,setIsRenamingBranch:u,renameChatBranch:rX,refreshActiveChatAgents:r5,refreshCurrentChatBranches:o5,showIntentToast:c,currentChatBranches:i,activeChatAgents:K0,pruneChatBranch:oX,restoreChatBranch:sX,branchLoaderMode:K,branchLoaderSourceChatJid:G,forkChatBranch:B6,setBranchLoaderState:S1,currentRootChatJid:i1,isWebAppMode:V,getActiveChatAgents:W6,getChatBranches:L3,setActiveChatAgents:p,setCurrentChatBranches:J0,openEditor:c1,tabStripActiveId:V1,editorInstanceRef:D1,dockInstanceRef:a1,terminalTabPath:$5,dockVisible:l1,resolveTab:(_0)=>e0.get(_0),closeTab:M_,setDockVisible:H1,editorOpen:y1,shellElement:o_.current,editorWidthRef:P4,dockHeightRef:d4,sidebarWidthRef:y4,readStoredNumber:R5});g(()=>{if(!B_||Z)return;return qZ(P1)},[P1,B_,Z]),g(()=>{if(Z)return;return QZ({toggleZenMode:x4,exitZenMode:H_,zenMode:W1,isZenModeActive:()=>W1})},[x4,H_,W1,Z]);let Pq=Boolean(I0&&I0===(k?.turn_id||G0)),k3=pZ({branchLoaderMode:K,panePopoutMode:Y});if(k3==="branch-loader")return hZ(r1);if(k3==="pane-popout")return cZ({appShellRef:o_,editorOpen:y1,hidePanePopoutControls:$_,panePopoutHasMenuActions:w1,panePopoutTitle:f_,tabStripTabs:h1,tabStripActiveId:V1,handleTabActivate:n_,previewTabs:k1,handleTabTogglePreview:I_,editorContainerRef:Z1,getPaneContent:()=>D1.current?.getContent?.(),panePopoutPath:q});return RY({appShellRef:o_,workspaceOpen:L1,editorOpen:y1,chatOnlyMode:Z,zenMode:W1,isRenameBranchFormOpen:Q0,closeRenameCurrentBranchForm:Eq,handleRenameCurrentBranch:kq,renameBranchNameDraft:W0,renameBranchNameInputRef:M1,setRenameBranchNameDraft:$0,renameBranchDraftState:u0,isRenamingBranch:v,addFileRef:Z_,openEditor:c1,openTerminalTab:Q1,openVncTab:t1,hasDockPanes:B_,toggleDock:P1,dockVisible:l1,handleSplitterMouseDown:lY,handleSplitterTouchStart:nY,showEditorPaneContainer:x_,tabStripTabs:h1,tabStripActiveId:V1,handleTabActivate:n_,handleTabClose:M_,handleTabCloseOthers:L_,handleTabCloseAll:N4,handleTabTogglePin:W_,handleTabTogglePreview:I_,handleTabEditSource:M4,previewTabs:k1,tabPaneOverrides:s1,toggleZenMode:x4,handlePopOutPane:Tq,isWebAppMode:V,editorContainerRef:Z1,editorInstanceRef:D1,handleDockSplitterMouseDown:rY,handleDockSplitterTouchStart:oY,TERMINAL_TAB_PATH:$5,dockContainerRef:X4,handleEditorSplitterMouseDown:dY,handleEditorSplitterTouchStart:iY,searchQuery:O,isIOSDevice:i7,currentBranchRecord:v1,currentChatJid:j,currentChatBranches:i,handleBranchPickerChange:Dq,formatBranchPickerLabel:v8,openRenameCurrentBranchForm:Aq,handlePruneCurrentBranch:Mq,currentHashtag:L,handleBackToTimeline:_q,activeSearchScopeLabel:k_,posts:i5,isMainTimelineView:Yq,hasMore:pY,loadMore:hY,timelineRef:j_,handleHashtagClick:eY,addMessageRef:B1,scrollToMessage:A1,openFileFromPill:j0,handleDeletePost:qq,handleOpenFloatingWidget:Bq,agents:U1,userProfile:y_,removingPostIds:O1,agentStatus:k,isCompactionStatus:D4,agentDraft:l,agentPlan:n,agentThought:s,pendingRequest:a,intentToast:M,currentTurnId:G0,steerQueued:Pq,handlePanelToggle:R4,btwSession:t,closeBtwPanel:Vq,handleBtwRetry:Lq,handleBtwInject:Wq,floatingWidget:E0,handleCloseFloatingWidget:zq,handleFloatingWidgetEvent:Hq,extensionStatusPanels:X0,pendingExtensionPanelActions:c0,handleExtensionPanelAction:Xq,searchOpen:W,followupQueueItems:b0,handleInjectQueuedFollowup:Gq,handleRemoveQueuedFollowup:Nq,viewStateRef:P_,loadPosts:e_,scrollToBottom:W4,searchScope:E,handleSearch:$q,setSearchScope:S,enterSearchMode:jq,exitSearchMode:Zq,fileRefs:P,removeFileRef:n5,clearFileRefs:J,setFileRefsFromCompose:R,messageRefs:h,removeMessageRef:R1,clearMessageRefs:a_,setMessageRefsFromCompose:S4,handleCreateSessionFromCompose:xq,handleRestoreBranch:Iq,attachActiveEditorFile:S0,followupQueueCount:g1,handleBtwIntercept:Uq,handleMessageResponse:E3,handleComposeSubmitError:i4,handlePopOutChat:yq,isComposeBoxAgentActive:A3,activeChatAgents:K0,connectionStatus:N,activeModel:m0,activeModelUsage:_1,activeThinkingLevel:o0,supportsThinking:U0,contextUsage:k0,notificationsEnabled:c_,notificationPermission:v_,handleToggleNotifications:J1,setActiveModel:p0,applyModelState:O3,setPendingRequest:q0,pendingRequestRef:H0,toggleWorkspace:Oq})}function eX(){let[_,$]=m(()=>typeof window>"u"?"http://localhost/":window.location.href);g(()=>{if(typeof window>"u")return;let Y=()=>$(window.location.href);return window.addEventListener("popstate",Y),()=>window.removeEventListener("popstate",Y)},[]);let j=T((Y,q={})=>{if(typeof window>"u")return;let{replace:Q=!1}=q||{},K=new URL(String(Y||""),window.location.href).toString();if(Q)window.history.replaceState(null,"",K);else window.history.pushState(null,"",K);$(window.location.href)},[]),Z=g0(()=>new URL(_).searchParams,[_]);return z`<${tX} locationParams=${Z} navigate=${j} />`}H4(z`<${eX} />`,document.getElementById("app"));

//# debugId=CF8CAB3C68F4E59C64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
