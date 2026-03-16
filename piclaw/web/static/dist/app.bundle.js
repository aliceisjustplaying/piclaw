var $9=Object.defineProperty;var j9=(_)=>_;function Z9(_,$){this[_]=j9.bind(null,$)}var N9=(_,$)=>{for(var j in $)$9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:Z9.bind($,j)})};var z9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var w2,n_,a1,K9,E$,v1,t1,e1,_3,V4,z4,K4,Y9,E2={},k2=[],G9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,A2=Array.isArray;function H$(_,$){for(var j in $)_[j]=$[j];return _}function W4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function $3(_,$,j){var Z,N,z,K={};for(z in $)z=="key"?Z=$[z]:z=="ref"?N=$[z]:K[z]=$[z];if(arguments.length>2&&(K.children=arguments.length>3?w2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(z in _.defaultProps)K[z]===void 0&&(K[z]=_.defaultProps[z]);return H2(_,K,Z,N,null)}function H2(_,$,j,Z,N){var z={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++a1:N,__i:-1,__u:0};return N==null&&n_.vnode!=null&&n_.vnode(z),z}function P2(_){return _.children}function J2(_,$){this.props=_,this.context=$}function c$(_,$){if($==null)return _.__?c$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?c$(_):null}function V9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],z=H$({},$);z.__v=$.__v+1,n_.vnode&&n_.vnode(z),X4(_.__P,z,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?c$($):j,!!(32&$.__u),N),z.__v=$.__v,z.__.__k[z.__i]=z,z3(Z,z,N),$.__e=$.__=null,z.__e!=j&&j3(z)}}function j3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),j3(_)}function m1(_){(!_.__d&&(_.__d=!0)&&E$.push(_)&&!y2.__r++||v1!=n_.debounceRendering)&&((v1=n_.debounceRendering)||t1)(y2)}function y2(){try{for(var _,$=1;E$.length;)E$.length>$&&E$.sort(e1),_=E$.shift(),$=E$.length,V9(_)}finally{E$.length=y2.__r=0}}function Z3(_,$,j,Z,N,z,K,G,W,V,L){var q,H,y,S,R,v,x,F=Z&&Z.__k||k2,w=$.length;for(W=W9(j,$,F,W,w),q=0;q<w;q++)(y=j.__k[q])!=null&&(H=y.__i!=-1&&F[y.__i]||E2,y.__i=q,v=X4(_,y,H,N,z,K,G,W,V,L),S=y.__e,y.ref&&H.ref!=y.ref&&(H.ref&&q4(H.ref,null,y),L.push(y.ref,y.__c||S,y)),R==null&&S!=null&&(R=S),(x=!!(4&y.__u))||H.__k===y.__k?W=N3(y,W,_,x):typeof y.type=="function"&&v!==void 0?W=v:S&&(W=S.nextSibling),y.__u&=-7);return j.__e=R,W}function W9(_,$,j,Z,N){var z,K,G,W,V,L=j.length,q=L,H=0;for(_.__k=Array(N),z=0;z<N;z++)(K=$[z])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[z]=H2(null,K,null,null,null):A2(K)?K=_.__k[z]=H2(P2,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[z]=H2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[z]=K,W=z+H,K.__=_,K.__b=_.__b+1,G=null,(V=K.__i=X9(K,j,W,q))!=-1&&(q--,(G=j[V])&&(G.__u|=2)),G==null||G.__v==null?(V==-1&&(N>L?H--:N<L&&H++),typeof K.type!="function"&&(K.__u|=4)):V!=W&&(V==W-1?H--:V==W+1?H++:(V>W?H--:H++,K.__u|=4))):_.__k[z]=null;if(q)for(z=0;z<L;z++)(G=j[z])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=c$(G)),Y3(G,G));return Z}function N3(_,$,j,Z){var N,z;if(typeof _.type=="function"){for(N=_.__k,z=0;N&&z<N.length;z++)N[z]&&(N[z].__=_,$=N3(N[z],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=c$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function X9(_,$,j,Z){var N,z,K,G=_.key,W=_.type,V=$[j],L=V!=null&&(2&V.__u)==0;if(V===null&&G==null||L&&G==V.key&&W==V.type)return j;if(Z>(L?1:0)){for(N=j-1,z=j+1;N>=0||z<$.length;)if((V=$[K=N>=0?N--:z++])!=null&&(2&V.__u)==0&&G==V.key&&W==V.type)return K}return-1}function g1(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||G9.test($)?j:j+"px"}function F2(_,$,j,Z,N){var z,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||g1(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||g1(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")z=$!=($=$.replace(_3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+z]=j,j?Z?j.u=Z.u:(j.u=V4,_.addEventListener($,z?K4:z4,z)):_.removeEventListener($,z?K4:z4,z);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function c1(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=V4++;else if($.t<j.u)return;return j(n_.event?n_.event($):$)}}}function X4(_,$,j,Z,N,z,K,G,W,V){var L,q,H,y,S,R,v,x,F,w,b,h,__,t,l,z_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(W=!!(32&j.__u),z=[G=$.__e=j.__e]),(L=n_.__b)&&L($);_:if(typeof z_=="function")try{if(x=$.props,F=z_.prototype&&z_.prototype.render,w=(L=z_.contextType)&&Z[L.__c],b=L?w?w.props.value:L.__:Z,j.__c?v=(q=$.__c=j.__c).__=q.__E:(F?$.__c=q=new z_(x,b):($.__c=q=new J2(x,b),q.constructor=z_,q.render=O9),w&&w.sub(q),q.state||(q.state={}),q.__n=Z,H=q.__d=!0,q.__h=[],q._sb=[]),F&&q.__s==null&&(q.__s=q.state),F&&z_.getDerivedStateFromProps!=null&&(q.__s==q.state&&(q.__s=H$({},q.__s)),H$(q.__s,z_.getDerivedStateFromProps(x,q.__s))),y=q.props,S=q.state,q.__v=$,H)F&&z_.getDerivedStateFromProps==null&&q.componentWillMount!=null&&q.componentWillMount(),F&&q.componentDidMount!=null&&q.__h.push(q.componentDidMount);else{if(F&&z_.getDerivedStateFromProps==null&&x!==y&&q.componentWillReceiveProps!=null&&q.componentWillReceiveProps(x,b),$.__v==j.__v||!q.__e&&q.shouldComponentUpdate!=null&&q.shouldComponentUpdate(x,q.__s,b)===!1){$.__v!=j.__v&&(q.props=x,q.state=q.__s,q.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),k2.push.apply(q.__h,q._sb),q._sb=[],q.__h.length&&K.push(q);break _}q.componentWillUpdate!=null&&q.componentWillUpdate(x,q.__s,b),F&&q.componentDidUpdate!=null&&q.__h.push(function(){q.componentDidUpdate(y,S,R)})}if(q.context=b,q.props=x,q.__P=_,q.__e=!1,h=n_.__r,__=0,F)q.state=q.__s,q.__d=!1,h&&h($),L=q.render(q.props,q.state,q.context),k2.push.apply(q.__h,q._sb),q._sb=[];else do q.__d=!1,h&&h($),L=q.render(q.props,q.state,q.context),q.state=q.__s;while(q.__d&&++__<25);q.state=q.__s,q.getChildContext!=null&&(Z=H$(H$({},Z),q.getChildContext())),F&&!H&&q.getSnapshotBeforeUpdate!=null&&(R=q.getSnapshotBeforeUpdate(y,S)),t=L!=null&&L.type===P2&&L.key==null?K3(L.props.children):L,G=Z3(_,A2(t)?t:[t],$,j,Z,N,z,K,G,W,V),q.base=$.__e,$.__u&=-161,q.__h.length&&K.push(q),v&&(q.__E=q.__=null)}catch(i){if($.__v=null,W||z!=null)if(i.then){for($.__u|=W?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;z[z.indexOf(G)]=null,$.__e=G}else{for(l=z.length;l--;)W4(z[l]);Y4($)}else $.__e=j.__e,$.__k=j.__k,i.then||Y4($);n_.__e(i,$,j)}else z==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=q9(j.__e,$,j,Z,N,z,K,W,V);return(L=n_.diffed)&&L($),128&$.__u?void 0:G}function Y4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(Y4))}function z3(_,$,j){for(var Z=0;Z<j.length;Z++)q4(j[Z],j[++Z],j[++Z]);n_.__c&&n_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(z){z.call(N)})}catch(z){n_.__e(z,N.__v)}})}function K3(_){return typeof _!="object"||_==null||_.__b>0?_:A2(_)?_.map(K3):H$({},_)}function q9(_,$,j,Z,N,z,K,G,W){var V,L,q,H,y,S,R,v=j.props||E2,x=$.props,F=$.type;if(F=="svg"?N="http://www.w3.org/2000/svg":F=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),z!=null){for(V=0;V<z.length;V++)if((y=z[V])&&"setAttribute"in y==!!F&&(F?y.localName==F:y.nodeType==3)){_=y,z[V]=null;break}}if(_==null){if(F==null)return document.createTextNode(x);_=document.createElementNS(N,F,x.is&&x),G&&(n_.__m&&n_.__m($,z),G=!1),z=null}if(F==null)v===x||G&&_.data==x||(_.data=x);else{if(z=z&&w2.call(_.childNodes),!G&&z!=null)for(v={},V=0;V<_.attributes.length;V++)v[(y=_.attributes[V]).name]=y.value;for(V in v)y=v[V],V=="dangerouslySetInnerHTML"?q=y:V=="children"||(V in x)||V=="value"&&("defaultValue"in x)||V=="checked"&&("defaultChecked"in x)||F2(_,V,null,y,N);for(V in x)y=x[V],V=="children"?H=y:V=="dangerouslySetInnerHTML"?L=y:V=="value"?S=y:V=="checked"?R=y:G&&typeof y!="function"||v[V]===y||F2(_,V,y,v[V],N);if(L)G||q&&(L.__html==q.__html||L.__html==_.innerHTML)||(_.innerHTML=L.__html),$.__k=[];else if(q&&(_.innerHTML=""),Z3($.type=="template"?_.content:_,A2(H)?H:[H],$,j,Z,F=="foreignObject"?"http://www.w3.org/1999/xhtml":N,z,K,z?z[0]:j.__k&&c$(j,0),G,W),z!=null)for(V=z.length;V--;)W4(z[V]);G||(V="value",F=="progress"&&S==null?_.removeAttribute("value"):S!=null&&(S!==_[V]||F=="progress"&&!S||F=="option"&&S!=v[V])&&F2(_,V,S,v[V],N),V="checked",R!=null&&R!=_[V]&&F2(_,V,R,v[V],N))}return _}function q4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){n_.__e(N,j)}}function Y3(_,$,j){var Z,N;if(n_.unmount&&n_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||q4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(z){n_.__e(z,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&Y3(Z[N],$,j||typeof _.type!="function");j||W4(_.__e),_.__c=_.__=_.__e=void 0}function O9(_,$,j){return this.constructor(_,j)}function G3(_,$,j){var Z,N,z,K;$==document&&($=document.documentElement),n_.__&&n_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,z=[],K=[],X4($,_=(!Z&&j||$).__k=$3(P2,null,[_]),N||E2,E2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?w2.call($.childNodes):null,z,!Z&&j?j:N?N.__e:$.firstChild,Z,K),z3(z,_,K)}w2=k2.slice,n_={__e:function(_,$,j,Z){for(var N,z,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((z=N.constructor)&&z.getDerivedStateFromError!=null&&(N.setState(z.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(G){_=G}throw _}},a1=0,K9=function(_){return _!=null&&_.constructor===void 0},J2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=H$({},this.state),typeof _=="function"&&(_=_(H$({},j),this.props)),_&&H$(j,_),_!=null&&this.__v&&($&&this._sb.push($),m1(this))},J2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),m1(this))},J2.prototype.render=P2,E$=[],t1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e1=function(_,$){return _.__v.__b-$.__v.__b},y2.__r=0,_3=/(PointerCapture)$|Capture$/i,V4=0,z4=c1(!1),K4=c1(!0),Y9=0;var $2,X0,N4,p1,j2=0,V3=[],W0=n_,h1=W0.__b,i1=W0.__r,l1=W0.diffed,n1=W0.__c,d1=W0.unmount,s1=W0.__;function O4(_,$){W0.__h&&W0.__h(X0,_,j2||$),j2=0;var j=X0.__H||(X0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function f(_){return j2=1,L9(X3,_)}function L9(_,$,j){var Z=O4($2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):X3(void 0,$),function(G){var W=Z.__N?Z.__N[0]:Z.__[0],V=Z.t(W,G);W!==V&&(Z.__N=[V,Z.__[1]],Z.__c.setState({}))}],Z.__c=X0,!X0.__f)){var N=function(G,W,V){if(!Z.__c.__H)return!0;var L=Z.__c.__H.__.filter(function(H){return H.__c});if(L.every(function(H){return!H.__N}))return!z||z.call(this,G,W,V);var q=Z.__c.props!==G;return L.some(function(H){if(H.__N){var y=H.__[0];H.__=H.__N,H.__N=void 0,y!==H.__[0]&&(q=!0)}}),z&&z.call(this,G,W,V)||q};X0.__f=!0;var{shouldComponentUpdate:z,componentWillUpdate:K}=X0;X0.componentWillUpdate=function(G,W,V){if(this.__e){var L=z;z=void 0,N(G,W,V),z=L}K&&K.call(this,G,W,V)},X0.shouldComponentUpdate=N}return Z.__N||Z.__}function u(_,$){var j=O4($2++,3);!W0.__s&&W3(j.__H,$)&&(j.__=_,j.u=$,X0.__H.__h.push(j))}function D(_){return j2=5,d_(function(){return{current:_}},[])}function d_(_,$){var j=O4($2++,7);return W3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function M(_,$){return j2=8,d_(function(){return _},$)}function B9(){for(var _;_=V3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(D2),$.__h.some(G4),$.__h=[]}catch(j){$.__h=[],W0.__e(j,_.__v)}}}W0.__b=function(_){X0=null,h1&&h1(_)},W0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),s1&&s1(_,$)},W0.__r=function(_){i1&&i1(_),$2=0;var $=(X0=_.__c).__H;$&&(N4===X0?($.__h=[],X0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(D2),$.__h.some(G4),$.__h=[],$2=0)),N4=X0},W0.diffed=function(_){l1&&l1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(V3.push($)!==1&&p1===W0.requestAnimationFrame||((p1=W0.requestAnimationFrame)||U9)(B9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),N4=X0=null},W0.__c=function(_,$){$.some(function(j){try{j.__h.some(D2),j.__h=j.__h.filter(function(Z){return!Z.__||G4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],W0.__e(Z,j.__v)}}),n1&&n1(_,$)},W0.unmount=function(_){d1&&d1(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{D2(Z)}catch(N){$=N}}),j.__H=void 0,$&&W0.__e($,j.__v))};var o1=typeof requestAnimationFrame=="function";function U9(_){var $,j=function(){clearTimeout(Z),o1&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);o1&&($=requestAnimationFrame(j))}function D2(_){var $=X0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),X0=$}function G4(_){var $=X0;_.__c=_.__(),X0=$}function W3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function X3(_,$){return typeof $=="function"?$(_):$}var q3=function(_,$,j,Z){var N;$[0]=0;for(var z=1;z<$.length;z++){var K=$[z++],G=$[z]?($[0]|=K?1:2,j[$[z++]]):$[++z];K===3?Z[0]=G:K===4?Z[1]=Object.assign(Z[1]||{},G):K===5?(Z[1]=Z[1]||{})[$[++z]]=G:K===6?Z[1][$[++z]]+=G+"":K?(N=_.apply(G,q3(_,G,j,["",null])),Z.push(N),G[0]?$[0]|=2:($[z-2]=0,$[z]=N)):Z.push(G)}return Z},r1=new Map;function Q9(_){var $=r1.get(this);return $||($=new Map,r1.set(this,$)),($=q3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,z=1,K="",G="",W=[0],V=function(H){z===1&&(H||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?W.push(0,H,K):z===3&&(H||K)?(W.push(3,H,K),z=2):z===2&&K==="..."&&H?W.push(4,H,0):z===2&&K&&!H?W.push(5,0,!0,K):z>=5&&((K||!H&&z===5)&&(W.push(z,0,K,N),z=6),H&&(W.push(z,H,0,N),z=6)),K=""},L=0;L<j.length;L++){L&&(z===1&&V(),V(L));for(var q=0;q<j[L].length;q++)Z=j[L][q],z===1?Z==="<"?(V(),W=[W],z=3):K+=Z:z===4?K==="--"&&Z===">"?(z=1,K=""):K=Z+K[0]:G?Z===G?G="":K+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(V(),z=1):z&&(Z==="="?(z=5,N=K,K=""):Z==="/"&&(z<5||j[L][q+1]===">")?(V(),z===3&&(W=W[0]),z=W,(W=W[0]).push(2,0,z),z=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(V(),z=2):K+=Z),z===3&&K==="!--"&&(z=4,W=W[0])}return V(),W}(_)),$),arguments,[])).length>1?$:$[0]}var B=Q9.bind($3);var l0={};N9(l0,{uploadWorkspaceFile:()=>C2,uploadMedia:()=>D4,updateWorkspaceFile:()=>I9,submitAdaptiveCardAction:()=>E4,streamSidePrompt:()=>b9,steerAgentQueueItem:()=>M9,setWorkspaceVisibility:()=>K2,setAgentThoughtVisibility:()=>w4,sendPeerAgentMessage:()=>y9,sendAgentMessage:()=>p$,searchPosts:()=>B4,respondToAgentRequest:()=>b2,renameWorkspaceFile:()=>x4,renameChatBranch:()=>E9,removeAgentQueueItem:()=>P9,pruneChatBranch:()=>k9,moveWorkspaceEntry:()=>S4,getWorkspaceTree:()=>z2,getWorkspaceRawUrl:()=>I2,getWorkspaceFile:()=>b4,getWorkspaceDownloadUrl:()=>f4,getWorkspaceBranch:()=>C9,getTimeline:()=>Z2,getThumbnailUrl:()=>A4,getThread:()=>U4,getPostsByHashtag:()=>L4,getMediaUrl:()=>j$,getMediaText:()=>P4,getMediaInfo:()=>h$,getMediaBlob:()=>M4,getChatBranches:()=>D9,getAgents:()=>H4,getAgentThought:()=>y4,getAgentStatus:()=>J4,getAgentQueueState:()=>A9,getAgentModels:()=>N2,getAgentContext:()=>w9,getActiveChatAgents:()=>F4,forkChatBranch:()=>M2,deleteWorkspaceFile:()=>T4,deletePost:()=>Q4,createWorkspaceFile:()=>I4,createReply:()=>J9,createPost:()=>H9,attachWorkspaceFile:()=>C4,addToWhitelist:()=>k4,SSEClient:()=>x2});async function u_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function O3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let z of $)if(z.startsWith("event:"))j=z.slice(6).trim()||"message";else if(z.startsWith("data:"))Z.push(z.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function F9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:G}=await j.read();if(G)break;N+=Z.decode(K,{stream:!0});let W=N.split(`

`);N=W.pop()||"";for(let V of W){let L=O3(V);if(L)$(L.event,L.data)}}N+=Z.decode();let z=O3(N);if(z)$(z.event,z.data)}async function Z2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return u_(Z)}async function L4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return u_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function B4(_,$=50,j=0,Z=null,N="current",z=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=N?`&scope=${encodeURIComponent(N)}`:"",W=z?`&root_chat_jid=${encodeURIComponent(z)}`:"";return u_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${G}${W}`)}async function U4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return u_(`/thread/${_}${j}`)}async function H9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return u_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function J9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return u_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function Q4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return u_(N,{method:"DELETE"})}async function p$(_,$,j=null,Z=[],N=null,z=null){let K=z?`?chat_jid=${encodeURIComponent(z)}`:"";return u_(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function F4(){return u_("/agent/active-chats")}async function D9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/branches${$}`)}async function M2(_,$={}){return u_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function E9(_,$={}){return u_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function k9(_){return u_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function y9(_,$,j,Z="auto",N={}){let z={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return u_("/agent/peer-message",{method:"POST",body:JSON.stringify(z)})}async function H4(){return u_("/agent/roster")}async function J4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/status${$}`)}async function w9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/context${$}`)}async function A9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/queue-state${$}`)}async function P9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function M9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function N2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return u_(`/agent/models${$}`)}async function D4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function b2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function E4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function b9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let z=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(z.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await F9(j,(z,K)=>{if($.onEvent?.(z,K),z==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(z==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(z==="side_prompt_done")Z=K;else if(z==="side_prompt_error")N=K}),N){let z=Error(N?.error||"Side prompt failed");throw z.payload=N,z}return Z}async function k4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function y4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return u_(j)}async function w4(_,$,j){return u_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function j$(_){return`/media/${_}`}function A4(_){return`/media/${_}/thumbnail`}async function h$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function P4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function M4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function z2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return u_(Z)}async function C9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return u_($)}async function b4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return u_(N)}async function I9(_,$){return u_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function C4(_){return u_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function C2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let z=N.toString(),K=z?`/workspace/upload?${z}`:"/workspace/upload",G=await fetch(""+K,{method:"POST",body:Z});if(!G.ok){let W=await G.json().catch(()=>({error:"Upload failed"})),V=Error(W.error||`HTTP ${G.status}`);throw V.status=G.status,V.code=W.code,V}return G.json()}async function I4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),z=Error(N.error||`HTTP ${Z.status}`);throw z.status=Z.status,z.code=N.code,z}return Z.json()}async function x4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function S4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function T4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return u_($,{method:"DELETE"})}async function K2(_,$=!1){return u_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function I2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function f4(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class x2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function n0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function r_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function i$(_,$=!1){let j=n0(_);if(j===null)return $;return j==="true"}function l$(_,$=null){let j=n0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function S2(_){return String(_||"").trim().toLowerCase()}function R4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return S2($[1]||"")}function L3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=S2(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function B3(_,$,j={}){let Z=R4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return L3(_).filter((z)=>{if(N&&z?.chat_jid===N)return!1;return S2(z?.agent_name).startsWith(Z)})}function u4(_){let $=S2(_);return $?`@${$} `:""}function U3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return L3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function Q3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let z=460+N*68+(j?40:0);return Z>=z}function Z$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:z="Remove",icon:K="file"}){let G=`${_}-file-pill`,W=`${_}-file-name`,V=`${_}-file-remove`,L=K==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${G} title=${j||$} onClick=${N}>
      ${L}
      <span class=${W}>${$}</span>
      ${Z&&B`
        <button
          class=${V}
          onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),Z()}}
          title=${z}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var x9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function S9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${F3(j)} / ${F3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,z=7,K=2*Math.PI*7,G=$/100*K,W=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${W}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function F3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function H3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:z,onEnterSearch:K,onExitSearch:G,fileRefs:W=[],onRemoveFileRef:V,onClearFileRefs:L,messageRefs:q=[],onRemoveMessageRef:H,onClearMessageRefs:y,activeModel:S=null,modelUsage:R=null,thinkingLevel:v=null,supportsThinking:x=!1,contextUsage:F=null,notificationsEnabled:w=!1,notificationPermission:b="default",onToggleNotifications:h,onModelChange:__,onModelStateChange:t,activeEditorPath:l=null,onAttachEditorFile:z_,onOpenFilePill:i,followupQueueItems:B_=[],onInjectQueuedFollowup:T_,onRemoveQueuedFollowup:o,onSubmitIntercept:$_,onMessageResponse:K_,onPopOutChat:Z_,isAgentActive:W_=!1,activeChatAgents:O_=[],currentChatJid:k_="web:default"}){let[G_,A_]=f(""),[U_,j0]=f(""),[y_,v_]=f([]),[x_,t_]=f(!1),[Y_,a]=f([]),[w_,X_]=f(0),[D_,Q_]=f(!1),[p_,F_]=f([]),[P_,_0]=f(0),[e_,f_]=f(!1),[z0,K0]=f(!1),[C_,$0]=f(!1),[Q0,E0]=f([]),[F0,q0]=f(!1),[k0,s_]=f(0),m_=D(null),b0=D(null),i_=D(null),o_=D(null),y0=D(null),E_=D(null),C=D(0),e=200,M_=(U)=>{let I=new Set,T=[];for(let d of U||[]){if(typeof d!=="string")continue;let V_=d.trim();if(!V_||I.has(V_))continue;I.add(V_),T.push(V_)}return T},h_=()=>{let U=n0("piclaw_compose_history");if(!U)return[];try{let I=JSON.parse(U);if(!Array.isArray(I))return[];return M_(I)}catch{return[]}},w0=(U)=>{r_("piclaw_compose_history",JSON.stringify(U))},s0=D(h_()),Y0=D(-1),O0=D(""),H0=G_.trim()||y_.length>0||W.length>0||q.length>0,A0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),C0=typeof window<"u"&&typeof Notification<"u",c0=typeof window<"u"?Boolean(window.isSecureContext):!1,T$=C0&&c0&&b!=="denied",f$=b==="granted"&&w,R$=f$?"Disable notifications":"Enable notifications",g_=U3(O_,{currentChatJid:k_,limit:4}),X$=g_.length>0,r0=!j&&Q3({footerWidth:k0,visibleAgentCount:g_.length,hasContextIndicator:Boolean(F&&F.percent!=null)}),S_=S||"",L0=x&&v?` (${v})`:"",Z0=L0.trim()?`${v}`:"",a0=typeof R?.hint_short==="string"?R.hint_short.trim():"",T0=[Z0||null,a0||null].filter(Boolean).join(" • "),q$=[S_?`Current model: ${S_}${L0}`:null,R?.plan?`Plan: ${R.plan}`:null,a0||null,R?.primary?.reset_description||null,R?.secondary?.reset_description||null].filter(Boolean),y$=z0?"Switching model…":q$.join(" • ")||`Current model: ${S_}${L0} (tap to open model picker)`,J0=(U)=>{if(!U||typeof U!=="object")return;let I=U.model??U.current;if(typeof t==="function")t({model:I??null,thinking_level:U.thinking_level??null,supports_thinking:U.supports_thinking,provider_usage:U.provider_usage??null});if(I&&typeof __==="function")__(I)},w$=(U)=>{let I=U||m_.current;if(!I)return;I.style.height="auto",I.style.height=`${I.scrollHeight}px`,I.style.overflowY="hidden"},s$=(U)=>{if(!U)return{content:U,fileRefs:[]};let T=U.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let I_=0;I_<T.length;I_+=1)if(T[I_].trim()==="Files:"&&T[I_+1]&&/^\s*-\s+/.test(T[I_+1])){d=I_;break}if(d===-1)return{content:U,fileRefs:[]};let V_=[],L_=d+1;for(;L_<T.length;L_+=1){let I_=T[L_];if(/^\s*-\s+/.test(I_))V_.push(I_.replace(/^\s*-\s+/,"").trim());else if(!I_.trim())break;else break}if(V_.length===0)return{content:U,fileRefs:[]};let b_=T.slice(0,d),N0=T.slice(L_);return{content:[...b_,...N0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:V_}},u$=(U)=>{if(!U)return{content:U,messageRefs:[]};let T=U.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let I_=0;I_<T.length;I_+=1)if(T[I_].trim()==="Referenced messages:"&&T[I_+1]&&/^\s*-\s+/.test(T[I_+1])){d=I_;break}if(d===-1)return{content:U,messageRefs:[]};let V_=[],L_=d+1;for(;L_<T.length;L_+=1){let I_=T[L_];if(/^\s*-\s+/.test(I_)){let v0=I_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(v0)V_.push(v0[1])}else if(!I_.trim())break;else break}if(V_.length===0)return{content:U,messageRefs:[]};let b_=T.slice(0,d),N0=T.slice(L_);return{content:[...b_,...N0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:V_}},A$=(U)=>{let I=s$(U||""),T=u$(I.content||"");return{text:T.content||"",fileRefs:I.fileRefs,messageRefs:T.messageRefs}},o$=(U)=>{if(!U.startsWith("/")||U.includes(`
`)){Q_(!1),a([]);return}let I=U.toLowerCase().split(" ")[0];if(I.length<1){Q_(!1),a([]);return}let T=x9.filter((d)=>d.name.startsWith(I)||d.name.replace(/-/g,"").startsWith(I.replace(/-/g,"")));if(T.length>0&&!(T.length===1&&T[0].name===I))f_(!1),F_([]),a(T),X_(0),Q_(!0);else Q_(!1),a([])},f0=(U)=>{let I=G_,T=I.indexOf(" "),d=T>=0?I.slice(T):"",V_=U.name+d;A_(V_),Q_(!1),a([]),requestAnimationFrame(()=>{let L_=m_.current;if(!L_)return;let b_=V_.length;L_.selectionStart=b_,L_.selectionEnd=b_,L_.focus()})},R0=(U)=>{if(R4(U)==null){f_(!1),F_([]);return}let I=B3(O_,U,{currentChatJid:k_});if(I.length>0&&!(I.length===1&&u4(I[0].agent_name).trim().toLowerCase()===String(U||"").trim().toLowerCase()))Q_(!1),a([]),F_(I),_0(0),f_(!0);else f_(!1),F_([])},p0=(U)=>{let I=u4(U?.agent_name);if(!I)return;A_(I),f_(!1),F_([]),requestAnimationFrame(()=>{let T=m_.current;if(!T)return;let d=I.length;T.selectionStart=d,T.selectionEnd=d,T.focus()})},I0=(U)=>{if(j)j0(U);else A_(U),o$(U),R0(U);requestAnimationFrame(()=>w$())},u0=(U)=>{let I=j?U_:G_,T=I&&!I.endsWith(`
`)?`
`:"",d=`${I}${T}${U}`.trimStart();I0(d)},O$=(U)=>{let I=U?.command?.model_label;if(I)return I;let T=U?.command?.message;if(typeof T==="string"){let d=T.match(/•\s+([^\n]+?)\s+\(current\)/);if(d?.[1])return d[1].trim()}return null},P0=async(U)=>{if(j||z0)return;K0(!0);try{let I=await p$("default",U,null,[],null,k_),T=O$(I);J0({model:T??S??null,thinking_level:I?.command?.thinking_level,supports_thinking:I?.command?.supports_thinking});try{let d=await N2(k_);if(d)J0(d)}catch{}return _?.(),!0}catch(I){return console.error("Failed to switch model:",I),alert("Failed to switch model: "+I.message),!1}finally{K0(!1)}},z$=async()=>{await P0("/cycle-model")},r$=async(U)=>{if(!U||z0)return;if(await P0(`/model ${U}`))$0(!1)},t0=(U)=>{U.preventDefault(),U.stopPropagation(),$0((I)=>!I)},P$=(U)=>{if(U==="queue"||U==="steer"||U==="auto")return U;return W_?"queue":null},L$=async(U,I,T={})=>{let{includeMedia:d=!0,includeFileRefs:V_=!0,includeMessageRefs:L_=!0,clearAfterSubmit:b_=!0,recordHistory:N0=!0}=T||{},x0=typeof U==="string"?U:U&&typeof U?.target?.value==="string"?U.target.value:G_,I_=typeof x0==="string"?x0:"";if(!I_.trim()&&(d?y_.length===0:!0)&&(V_?W.length===0:!0)&&(L_?q.length===0:!0))return;Q_(!1),a([]),f_(!1),F_([]);let v0=d?[...y_]:[],G$=V_?[...W]:[],Q$=L_?[...q]:[],V$=I_.trim();if(N0&&V$){let O=s0.current,Q=M_(O.filter((E)=>E!==V$));if(Q.push(V$),Q.length>200)Q.splice(0,Q.length-200);s0.current=Q,w0(Q),Y0.current=-1,O0.current=""}if(b_)A_(""),v_([]),L?.(),y?.();(async()=>{try{if(await $_?.({content:V$,submitMode:I,fileRefs:G$,messageRefs:Q$,mediaFiles:v0})){_?.();return}let Q=[];for(let n of v0){let g=await D4(n);Q.push(g.id)}let E=G$.length?`Files:
${G$.map((n)=>`- ${n}`).join(`
`)}`:"",k=Q$.length?`Referenced messages:
${Q$.map((n)=>`- message:${n}`).join(`
`)}`:"",m=Q.length?`Images:
${Q.map((n,g)=>{let V0=v0[g]?.name||`image-${g+1}`;return`- attachment:${n} (${V0})`}).join(`
`)}`:"",s=[V$,E,k,m].filter(Boolean).join(`

`),r=await p$("default",s,null,Q,P$(I),k_);if(K_?.(r),r?.command){J0({model:r.command.model_label??S??null,thinking_level:r.command.thinking_level,supports_thinking:r.command.supports_thinking});try{let n=await N2(k_);if(n)J0(n)}catch{}}_?.()}catch(O){console.error("Failed to post:",O)}})()},K$=(U)=>{T_?.(U)},e0=(U)=>{if(U.isComposing)return;if(j&&U.key==="Escape"){U.preventDefault(),j0(""),G?.();return}if(e_&&p_.length>0){let I=m_.current?.value??(j?U_:G_);if(!String(I||"").match(/^@([a-zA-Z0-9_-]*)$/))f_(!1),F_([]);else{if(U.key==="ArrowDown"){U.preventDefault(),_0((T)=>(T+1)%p_.length);return}if(U.key==="ArrowUp"){U.preventDefault(),_0((T)=>(T-1+p_.length)%p_.length);return}if(U.key==="Tab"||U.key==="Enter"){U.preventDefault(),p0(p_[P_]);return}if(U.key==="Escape"){U.preventDefault(),f_(!1),F_([]);return}}}if(D_&&Y_.length>0){let I=m_.current?.value??(j?U_:G_);if(!String(I||"").startsWith("/"))Q_(!1),a([]);else{if(U.key==="ArrowDown"){U.preventDefault(),X_((T)=>(T+1)%Y_.length);return}if(U.key==="ArrowUp"){U.preventDefault(),X_((T)=>(T-1+Y_.length)%Y_.length);return}if(U.key==="Tab"){U.preventDefault(),f0(Y_[w_]);return}if(U.key==="Enter"&&!U.shiftKey){if(!(m_.current?.value??(j?U_:G_)).includes(" ")){U.preventDefault();let V_=Y_[w_];Q_(!1),a([]),L$(V_.name);return}}if(U.key==="Escape"){U.preventDefault(),Q_(!1),a([]);return}}}if(!j&&(U.key==="ArrowUp"||U.key==="ArrowDown")&&!U.metaKey&&!U.ctrlKey&&!U.altKey&&!U.shiftKey){let I=m_.current;if(!I)return;let T=I.value||"",d=I.selectionStart===0&&I.selectionEnd===0,V_=I.selectionStart===T.length&&I.selectionEnd===T.length;if(U.key==="ArrowUp"&&d||U.key==="ArrowDown"&&V_){let L_=s0.current;if(!L_.length)return;U.preventDefault();let b_=Y0.current;if(U.key==="ArrowUp"){if(b_===-1)O0.current=T,b_=L_.length-1;else if(b_>0)b_-=1;Y0.current=b_,I0(L_[b_]||"")}else{if(b_===-1)return;if(b_<L_.length-1)b_+=1,Y0.current=b_,I0(L_[b_]||"");else Y0.current=-1,I0(O0.current||""),O0.current=""}requestAnimationFrame(()=>{let N0=m_.current;if(!N0)return;let x0=N0.value.length;N0.selectionStart=x0,N0.selectionEnd=x0});return}}if(U.key==="Enter"&&!U.shiftKey&&(U.ctrlKey||U.metaKey)){U.preventDefault();let I=m_.current?.value??(j?U_:G_);if(j){if(I.trim())N?.(I.trim(),Z)}else L$(I,"steer");return}if(U.key==="Enter"&&!U.shiftKey){U.preventDefault();let I=m_.current?.value??(j?U_:G_);if(j){if(I.trim())N?.(I.trim(),Z)}else L$(I)}},G0=(U)=>{let I=Array.from(U||[]).filter((T)=>T&&T.type&&T.type.startsWith("image/"));if(!I.length)return;v_((T)=>[...T,...I])},M$=(U)=>{G0(U.target.files),U.target.value=""},b$=(U)=>{if(j)return;U.preventDefault(),U.stopPropagation(),C.current+=1,t_(!0)},_$=(U)=>{if(j)return;if(U.preventDefault(),U.stopPropagation(),C.current=Math.max(0,C.current-1),C.current===0)t_(!1)},B$=(U)=>{if(j)return;if(U.preventDefault(),U.stopPropagation(),U.dataTransfer)U.dataTransfer.dropEffect="copy";t_(!0)},C$=(U)=>{if(j)return;U.preventDefault(),U.stopPropagation(),C.current=0,t_(!1),G0(U.dataTransfer?.files||[])},a$=(U)=>{if(j)return;let I=U.clipboardData?.items;if(!I||!I.length)return;let T=[];for(let d of I){if(d.kind!=="file")continue;let V_=d.getAsFile?.();if(V_)T.push(V_)}if(T.length>0)U.preventDefault(),G0(T)},D0=(U)=>{v_((I)=>I.filter((T,d)=>d!==U))},Y$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((U)=>{let{latitude:I,longitude:T,accuracy:d}=U.coords,V_=`${I.toFixed(5)}, ${T.toFixed(5)}`,L_=Number.isFinite(d)?` ±${Math.round(d)}m`:"",b_=`https://maps.google.com/?q=${I},${T}`,N0=`Location: ${V_}${L_} ${b_}`;u0(N0)},(U)=>{let I=U?.message||"Unable to retrieve location.";alert(`Location error: ${I}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!C_)return;q0(!0),N2(k_).then((U)=>{let I=Array.isArray(U?.models)?U.models.filter((T)=>typeof T==="string"&&T.trim().length>0):[];I.sort((T,d)=>T.localeCompare(d,void 0,{sensitivity:"base"})),E0(I),J0(U)}).catch((U)=>{console.warn("Failed to load model list:",U),E0([])}).finally(()=>{q0(!1)})},[C_,S]),u(()=>{if(j)$0(!1),Q_(!1),a([]),f_(!1),F_([])},[j]),u(()=>{if(!C_)return;let U=(I)=>{let T=o_.current,d=y0.current,V_=I.target;if(T&&T.contains(V_))return;if(d&&d.contains(V_))return;$0(!1)};return document.addEventListener("pointerdown",U),()=>document.removeEventListener("pointerdown",U)},[C_]),u(()=>{let U=()=>{let L_=E_.current?.clientWidth||0;s_((b_)=>b_===L_?b_:L_)};U();let I=E_.current,T=0,d=()=>{if(T)cancelAnimationFrame(T);T=requestAnimationFrame(()=>{T=0,U()})},V_=null;if(I&&typeof ResizeObserver<"u")V_=new ResizeObserver(()=>d()),V_.observe(I);if(typeof window<"u")window.addEventListener("resize",d);return()=>{if(T)cancelAnimationFrame(T);if(V_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",d)}},[j,S,g_.length,F?.percent]);let U$=(U)=>{let I=U.target.value;w$(U.target),I0(I)};return u(()=>{requestAnimationFrame(()=>w$())},[G_,U_,j]),u(()=>{if(j)return;R0(G_)},[O_,k_,G_,j]),B`
        <div class="compose-box">
            ${!j&&B_.length>0&&B`
                <div class="compose-queue-stack">
                    ${B_.map((U)=>{let I=typeof U?.content==="string"?U.content:"",T=A$(I);if(!T.text.trim()&&T.fileRefs.length===0&&T.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${I}>
                                    ${T.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${T.text}</div>
                                    `}
                                    ${(T.messageRefs.length>0||T.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${T.messageRefs.map((d)=>B`
                                                <${Z$}
                                                    key=${"queue-msg-"+d}
                                                    prefix="compose"
                                                    label=${"msg:"+d}
                                                    title=${"Message reference: "+d}
                                                    icon="message"
                                                />
                                            `)}
                                            ${T.fileRefs.map((d)=>{let V_=d.split("/").pop()||d;return B`
                                                    <${Z$}
                                                        key=${"queue-file-"+d}
                                                        prefix="compose"
                                                        label=${V_}
                                                        title=${d}
                                                        onClick=${()=>i?.(d)}
                                                    />
                                                `})}
                                        </div>
                                    `}
                                </div>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>K$(U)}
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
                                    onClick=${()=>o?.(U)}
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
                class=${`compose-input-wrapper${x_?" drag-active":""}`}
                onDragEnter=${b$}
                onDragOver=${B$}
                onDragLeave=${_$}
                onDrop=${C$}
            >
                <div class="compose-input-main">
                    ${(W.length>0||y_.length>0||q.length>0)&&B`
                        <div class="compose-file-refs">
                            ${q.map((U)=>{return B`
                                    <${Z$}
                                        key=${"msg-"+U}
                                        prefix="compose"
                                        label=${"msg:"+U}
                                        title=${"Message reference: "+U}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(U)}
                                    />
                                `})}
                            ${W.map((U)=>{let I=U.split("/").pop()||U;return B`
                                    <${Z$}
                                        prefix="compose"
                                        label=${I}
                                        title=${U}
                                        onClick=${()=>i?.(U)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(U)}
                                    />
                                `})}
                            ${y_.map((U,I)=>{let T=U?.name||`image-${I+1}`;return B`
                                    <${Z$}
                                        key=${T+I}
                                        prefix="compose"
                                        label=${T}
                                        title=${T}
                                        removeTitle="Remove image"
                                        onRemove=${()=>D0(I)}
                                    />
                                `})}
                        </div>
                    `}
                    ${!j&&typeof Z_==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>Z_?.()}
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
                        ref=${m_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?U_:G_}
                        onInput=${U$}
                        onKeyDown=${e0}
                        onPaste=${a$}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${e_&&p_.length>0&&B`
                        <div class="slash-autocomplete" ref=${i_}>
                            ${p_.map((U,I)=>B`
                                <div
                                    key=${U.chat_jid||U.agent_name}
                                    class=${`slash-item${I===P_?" active":""}`}
                                    onMouseDown=${(T)=>{T.preventDefault(),p0(U)}}
                                    onMouseEnter=${()=>_0(I)}
                                >
                                    <span class="slash-name">@${U.agent_name}</span>
                                    <span class="slash-desc">${U.display_name||U.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${D_&&Y_.length>0&&B`
                        <div class="slash-autocomplete" ref=${b0}>
                            ${Y_.map((U,I)=>B`
                                <div
                                    key=${U.name}
                                    class=${`slash-item${I===w_?" active":""}`}
                                    onMouseDown=${(T)=>{T.preventDefault(),f0(U)}}
                                    onMouseEnter=${()=>X_(I)}
                                >
                                    <span class="slash-name">${U.name}</span>
                                    <span class="slash-desc">${U.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${C_&&!j&&B`
                        <div class="compose-model-popup" ref=${o_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${F0&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!F0&&Q0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!F0&&Q0.map((U)=>B`
                                    <button
                                        key=${U}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${S===U?" active":""}`}
                                        onClick=${()=>{r$(U)}}
                                        disabled=${z0}
                                    >
                                        ${U}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{z$()}}
                                    disabled=${z0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${E_}>
                    ${!j&&S&&B`
                    <div class="compose-meta-row">
                        ${!j&&S&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${y0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${y$}
                                    aria-label="Open model picker"
                                    onClick=${t0}
                                    disabled=${z0}
                                >
                                    ${z0?"Switching…":S_}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!z0&&T0&&B`
                                        <span class="compose-model-usage-hint" title=${y$}>
                                            ${T0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${r0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${g_.map((U)=>B`
                                <button
                                    key=${U.chat_jid||U.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${U.is_active?" active":""}`}
                                    onClick=${()=>p0(U)}
                                    title=${`${U.display_name||U.chat_jid||"Active agent"} — insert @${U.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${U.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&F&&F.percent!=null&&B`
                        <${S9} usage=${F} />
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(U)=>z?.(U.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?G:K}
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
                    ${A0&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${Y$}
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
                    ${T$&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${f$?" active":""}`}
                            onClick=${h}
                            title=${R$}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${l&&z_&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${z_}
                                title=${`Attach open file: ${l}`}
                                type="button"
                                disabled=${W.includes(l)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${M$} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{L$()}}
                            disabled=${!H0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var D3="piclaw_theme",g4="piclaw_tint",R2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},T9={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},J3={default:{label:"Default",mode:"auto",light:R2,dark:T9},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},f9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],u2={theme:"default",tint:null},E3="light",v4=!1;function k3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function n$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((z)=>z+z).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function R9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let z=parseInt(N[1],10),K=parseInt(N[2],10),G=parseInt(N[3],10);if(![z,K,G].every((V)=>Number.isFinite(V)))return null;let W=`#${[z,K,G].map((V)=>V.toString(16).padStart(2,"0")).join("")}`;return{r:z,g:K,b:G,hex:W}}function y3(_){return n$(_)||R9(_)}function Y2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),z=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${z})`}function m4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function u9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*z+0.0722*K}function v9(_){return u9(_)>0.4?"#000000":"#ffffff"}function w3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function c4(_){return J3[_]||J3.default}function m9(_){return _.mode==="auto"?w3():_.mode}function g9(_,$){let j=c4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||R2}function c9(_,$,j){let Z=y3($);if(!Z)return _;let N=n$(_.bgPrimary),z=n$(_.bgSecondary),K=n$(_.bgHover),G=n$(_.borderColor);if(!N||!z||!K||!G)return _;let V=n$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:Y2(N,Z,0.08),bgSecondary:Y2(z,Z,0.12),bgHover:Y2(K,Z,0.16),borderColor:Y2(G,Z,0.08),accent:Z.hex,accentHover:V?Y2(Z,V,0.18):Z.hex}}function p9(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=y3(Z),z=N?m4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?m4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=N?m4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",W=N?v9(N):$==="dark"?"#000000":"#ffffff",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":G,"--accent-contrast-text":W,"--danger-color":_.danger||R2.danger,"--success-color":_.success||R2.success,"--search-highlight-color":z||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([L,q])=>{if(q)j.style.setProperty(L,q)})}function h9(){if(typeof document>"u")return;let _=document.documentElement;f9.forEach(($)=>_.style.removeProperty($))}function T2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function i9(_,$){if(typeof document>"u")return;let j=T2("theme-color");if(j&&_)j.setAttribute("content",_);let Z=T2("msapplication-TileColor");if(Z&&_)Z.setAttribute("content",_);let N=T2("msapplication-navbutton-color");if(N&&_)N.setAttribute("content",_);let z=T2("apple-mobile-web-app-status-bar-style");if(z)z.setAttribute("content",$==="dark"?"black-translucent":"default")}function l9(){if(typeof window>"u")return;let _={...u2,mode:E3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function p4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=k3(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=c4(j),z=m9(N),K=g9(j,z);u2={theme:j,tint:Z},E3=z;let G=document.documentElement;G.dataset.theme=z,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=z;let W=K;if(j==="default"&&Z)W=c9(K,Z,z);if(j==="default"&&!Z)h9();else p9(W,z);if(i9(W.bgPrimary,z),l9(),$.persist!==!1)if(r_(D3,j),Z)r_(g4,Z);else r_(g4,"")}function f2(){if(c4(u2.theme).mode!=="auto")return;p4(u2,{persist:!1})}function A3(){if(typeof window>"u")return()=>{};let _=k3(n0(D3)||"default"),$=n0(g4),j=$?$.trim():null;if(p4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!v4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",f2);else if(Z.addListener)Z.addListener(f2);return v4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",f2);else if(Z.removeListener)Z.removeListener(f2);v4=!1}}return()=>{}}function P3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;p4({theme:j||"default",tint:Z},{persist:!0})}function M3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return w3()}var v2=/#(\w+)/g,n9=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),d9=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),s9=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),o9={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},r9=new Set(["http:","https:","mailto:",""]);function b3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function I$(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!r9.has(Z.protocol))return null;return Z.href}catch{return null}}function C3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),z;while(z=N.nextNode())Z.push(z);for(let K of Z){let G=K.tagName.toLowerCase();if(!d9.has(G)){let V=K.parentNode;if(!V)continue;while(K.firstChild)V.insertBefore(K.firstChild,K);V.removeChild(K);continue}let W=o9[G]||new Set;for(let V of Array.from(K.attributes)){let L=V.name.toLowerCase(),q=V.value;if(L.startsWith("on")){K.removeAttribute(V.name);continue}if(L.startsWith("data-")||L.startsWith("aria-"))continue;if(W.has(L)||s9.has(L)){if(L==="href"){let H=I$(q);if(!H)K.removeAttribute(V.name);else if(K.setAttribute(V.name,H),G==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(L==="src"){let H=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(q):q,y=I$(H,{allowDataImage:G==="img"});if(!y)K.removeAttribute(V.name);else K.setAttribute(V.name,y)}continue}K.removeAttribute(V.name)}}return j.body.innerHTML}function I3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function m2(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=I3(j);if(N===j)break;j=N}return j}function a9(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],z=!1,K=[];for(let G of j){if(!z&&G.trim().match(/^```mermaid\s*$/i)){z=!0,K=[];continue}if(z&&G.trim().match(/^```\s*$/)){let W=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${W}@@`),z=!1,K=[];continue}if(z)K.push(G);else N.push(G)}if(z)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function t9(_){if(!_)return _;return m2(_,5)}function e9(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function _7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function $7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),z=$[N]??"",K=t9(z);return`<div class="mermaid-container" data-mermaid="${e9(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function x3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function S3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),z=N?Z.slice(1).trim():Z,W=(z.endsWith("/")?z.slice(0,-1).trim():z).split(/\s+/)[0]?.toLowerCase();if(!W||!n9.has(W))return $;if(W==="br")return N?"":"<br>";if(N)return`</${W}>`;return`<${W}>`})}function T3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function f3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(z)=>z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let z=Z(N.nodeValue);if(z!==N.nodeValue)N.nodeValue=z}return $.body.innerHTML}function j7(_){if(!window.katex)return _;let $=(K)=>I3(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let G=[],W=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(V)=>{let L=G.length;return G.push(V),`@@CODE_BLOCK_${L}@@`});return W=W.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(V)=>{let L=G.length;return G.push(V),`@@CODE_INLINE_${L}@@`}),{html:W,blocks:G}},Z=(K,G)=>{if(!G.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(W,V)=>{let L=Number(V);return G[L]??""})},N=j(_),z=N.html;return z=z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,G,W)=>{try{let V=katex.renderToString($(W.trim()),{displayMode:!0,throwOnError:!1});return`${G}${V}`}catch(V){return`<span class="math-error" title="${b3(V.message)}">${K}</span>`}}),z=z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,G,W)=>{if(/\s$/.test(W))return K;try{let V=katex.renderToString($(W),{displayMode:!1,throwOnError:!1});return`${G}${V}`}catch(V){return`${G}<span class="math-error" title="${b3(V.message)}">$${W}$</span>`}}),Z(z,N.blocks)}function Z7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let z of Z){let K=z.nodeValue;if(!K)continue;if(v2.lastIndex=0,!v2.test(K))continue;v2.lastIndex=0;let G=z.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let W=K.split(v2);if(W.length<=1)continue;let V=$.createDocumentFragment();W.forEach((L,q)=>{if(q%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",L),H.textContent=`#${L}`,V.appendChild(H)}else V.appendChild($.createTextNode(L))}),z.parentNode?.replaceChild(V,z)}return $.body.innerHTML}function N7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let z of j){if(!N&&z.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&z.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(z)}return Z.join(`
`)}function g0(_,$,j={}){if(!_)return"";let Z=N7(_),{text:N,blocks:z}=a9(Z),K=m2(N,2),W=x3(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),V=S3(W),L=window.marked?marked.parse(V,{headerIds:!1,mangle:!1}):V.replace(/\n/g,"<br>");return L=T3(L),L=f3(L),L=j7(L),L=Z7(L),L=$7(L,z),L=C3(L,j),L}function g2(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=m2($,2),N=x3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=S3(N),K=window.marked?marked.parse(z):z.replace(/\n/g,"<br>");return K=T3(K),K=f3(K),K=C3(K),K}async function J$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=M3()==="dark"?j["tokyo-night"]:j["github-light"],z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of z)try{let G=K.dataset.mermaid,W=_7(G||""),V=m2(W,2),L=await $(V,{...N,transparent:!0});K.innerHTML=L,K.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let W=document.createElement("pre");W.className="mermaid-error",W.textContent=`Diagram error: ${G.message}`,K.innerHTML="",K.appendChild(W),K.removeAttribute("data-mermaid")}}function R3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function u3(_){return String(_||"").trim()||"web:default"}function v3(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function m3(_){if(!_)return!1;return _.status!=="running"}function g3(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function c3({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),z=D(null),K=_?.thinking?g2(_.thinking):"",G=_?.answer?g0(_.answer,null,{sanitize:!1}):"";if(u(()=>{if(N.current&&K)J$(N.current).catch(()=>{})},[K]),u(()=>{if(z.current&&G)J$(z.current).catch(()=>{})},[G]),!_)return null;let W=_.status==="running",V=Boolean(String(_.answer||"").trim()),L=Boolean(String(_.thinking||"").trim()),q=v3(_),H=m3(_),y=!W&&V,S=W?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${S}</span>
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
            ${L&&B`
                <details class="btw-block btw-thinking" open=${W?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${q&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${z}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${H&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!y}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var p3="PiClaw";function h4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%z.length,G=z[K],W=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",L=V?V:null,q=j||W==="PiClaw".toLowerCase()||W==="pi";return{letter:N,color:G,image:L||(q?"/static/icon-192.png":null)}}function h3(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function i3(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function l3(_){if(!_)return null;if(typeof document<"u"){let z=document.documentElement,K=z?.dataset?.colorTheme||"",G=z?.dataset?.tint||"",W=getComputedStyle(z).getPropertyValue("--accent-color")?.trim();if(W&&(G||K&&K!=="default"))return W}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let z=0;z<j.length;z+=1)Z=(Z*31+j.charCodeAt(z))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function z7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function G2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function n3(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return G2(_)?"Compacting context":"Working..."}function K7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function d3(_,$=Date.now()){let j=z7(_);if(j===null)return null;return K7(Math.max(0,$-j))}function s3({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:z,turnId:K,steerQueued:G,onPanelToggle:W}){let q=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let Q_=a,p_=Q_?Q_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Q_,totalLines:p_,fullText:Q_}}let w_=a.text||"",X_=a.fullText||a.full_text||w_,D_=Number.isFinite(a.totalLines)?a.totalLines:X_?X_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:w_,totalLines:D_,fullText:X_}},H=160,y=(a)=>String(a||"").replace(/<\/?internal>/gi,""),S=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},R=(a,w_,X_)=>{let D_=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!D_)return{text:"",omitted:0,totalLines:Number.isFinite(X_)?X_:0,visibleLines:0};let Q_=D_.split(`
`),p_=Q_.length>w_?Q_.slice(0,w_).join(`
`):D_,F_=Number.isFinite(X_)?X_:Q_.reduce((e_,f_)=>e_+S(f_),0),P_=p_?p_.split(`
`).reduce((e_,f_)=>e_+S(f_),0):0,_0=Math.max(F_-P_,0);return{text:p_,omitted:_0,totalLines:F_,visibleLines:P_}},v=q(j),x=q(Z),F=q($),w=Boolean(v.text)||v.totalLines>0,b=Boolean(x.text)||x.totalLines>0,h=Boolean(F.fullText?.trim()||F.text?.trim());if(!_&&!h&&!w&&!b&&!N&&!z)return null;let[__,t]=f(new Set),[l,z_]=f(()=>Date.now()),i=(a)=>t((w_)=>{let X_=new Set(w_),D_=!X_.has(a);if(D_)X_.add(a);else X_.delete(a);if(typeof W==="function")W(a,D_);return X_});u(()=>{t(new Set)},[K]);let B_=G2(_);u(()=>{if(!B_)return;z_(Date.now());let a=setInterval(()=>z_(Date.now()),1000);return()=>clearInterval(a)},[B_,_?.started_at,_?.startedAt]);let T_=_?.turn_id||K,o=l3(T_),$_=G?"turn-dot turn-dot-queued":"turn-dot",K_=(a)=>a,Z_=Boolean(_?.last_activity||_?.lastActivity),W_=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":o,O_=z?.kind||"info",k_=W_(O_),G_=W_(_?.kind||(B_?"warning":"info")),A_="",U_=_?.title,j0=_?.status;if(_?.type==="plan")A_=U_?`Planning: ${U_}`:"Planning...";else if(_?.type==="tool_call")A_=U_?`Running: ${U_}`:"Running tool...";else if(_?.type==="tool_status")A_=U_?`${U_}: ${j0||"Working..."}`:j0||"Working...";else if(_?.type==="error")A_=U_||"Agent error";else A_=U_||j0||"Working...";if(Z_)A_="Last activity just now";let y_=({panelTitle:a,text:w_,fullText:X_,totalLines:D_,maxLines:Q_,titleClass:p_,panelKey:F_})=>{let P_=__.has(F_),_0=X_||w_||"",e_=F_==="thought"||F_==="draft"?y(_0):_0,f_=typeof Q_==="number",z0=P_&&f_,K0=f_?R(e_,Q_,D_):{text:e_||"",omitted:0,totalLines:Number.isFinite(D_)?D_:0};if(!e_&&!(Number.isFinite(K0.totalLines)&&K0.totalLines>0))return null;let C_=`agent-thinking-body${f_?" agent-thinking-body-collapsible":""}`,$0=f_?`--agent-thinking-collapsed-lines: ${Q_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${P_?"true":"false"}
                data-collapsible=${f_?"true":"false"}
                style=${o?`--turn-color: ${o};`:""}
            >
                <div class="agent-thinking-title ${p_||""}">
                    ${o&&B`<span class=${$_} aria-hidden="true"></span>`}
                    ${a}
                    ${z0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>i(F_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${C_}
                    style=${$0}
                    dangerouslySetInnerHTML=${{__html:g2(e_)}}
                />
                ${!P_&&K0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>i(F_)}>
                        ▸ ${K0.omitted} more lines
                    </button>
                `}
                ${P_&&K0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>i(F_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},v_=N?.tool_call?.title,x_=v_?`Awaiting approval: ${v_}`:"Awaiting approval",t_=B_?d3(_,l):null,Y_=(a,w_,X_=null)=>{let D_=n3(a);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${w_?`--turn-color: ${w_};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${w_&&B`<span class=${$_} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${D_}</span>
                    ${X_&&B`<span class="agent-status-elapsed">${X_}</span>`}
                </div>
                ${a.detail&&B`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${z&&Y_(z,k_)}
            ${_?.type==="intent"&&Y_(_,G_,t_)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${o?`--turn-color: ${o};`:""}>
                    <span class=${$_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${x_}</span>
                </div>
            `}
            ${w&&y_({panelTitle:K_("Planning"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,panelKey:"plan"})}
            ${b&&y_({panelTitle:K_("Thoughts"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${h&&y_({panelTitle:K_("Draft"),text:F.text,fullText:F.fullText,totalLines:F.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${Z_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${o?`--turn-color: ${o};`:""}>
                    ${o&&B`<span class=${$_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!Z_&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${A_}</span>
                </div>
            `}
        </div>
    `}function o3({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:z}=_,K=Z?.title||"Agent Request",G=Z?.kind||"other",W=Z?.rawInput||{},V=W.command||W.commands&&W.commands[0]||null,L=W.diff||null,q=W.fileName||W.path||null,H=Z?.description||W.description||W.explanation||null,S=(Array.isArray(Z?.locations)?Z.locations:[]).map((w)=>w?.path).filter((w)=>Boolean(w)),R=Array.from(new Set([q,...S].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let v=async(w)=>{try{await b2(j,w,z||null),$()}catch(b){console.error("Failed to respond to agent request:",b)}},x=async()=>{try{await k4(K,`Auto-approved: ${K}`),await b2(j,"approved",z||null),$()}catch(w){console.error("Failed to add to whitelist:",w)}},F=N&&N.length>0;return B`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${K}</div>
                </div>
                ${(H||V||L||R.length>0)&&B`
                    <div class="agent-request-body">
                        ${H&&B`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${R.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${R.map((w,b)=>B`<li key=${b}>${w}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&B`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${L&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${L}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${F?N.map((w)=>B`
                            <button 
                                key=${w.optionId||w.id||String(w)}
                                class="agent-request-btn ${w.kind==="allow_once"||w.kind==="allow_always"?"primary":""}"
                                onClick=${()=>v(w.optionId||w.id||w)}
                            >
                                ${w.name||w.label||w.optionId||w.id||String(w)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>v("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>v("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${x}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function r3({status:_}){if(_==="connected")return null;return B`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function a3(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,z=86400000;if(Z<z){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*z){let W=$.toLocaleDateString(void 0,{weekday:"short"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${W} ${V}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}function V2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function d0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function x$(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var Y7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),G7=new Set(["text/markdown"]);function W2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(Y7.has($)||$.startsWith("text/"))return"text";return"unsupported"}function t3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return G7.has($)}function e3(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function V7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function W7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),z=Number(j[3]);if(![Z,N,z].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:z}}function _6(_){return V7(_)||W7(_)}function c2(_){let $=(z)=>{let K=z/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function X7(_,$){let j=Math.max(c2(_),c2($)),Z=Math.min(c2(_),c2($));return(j+0.05)/(Z+0.05)}function q7(_,$,j="#ffffff"){let Z=_6(_);if(!Z)return j;let N=j,z=-1;for(let K of $){let G=_6(K);if(!G)continue;let W=X7(Z,G);if(W>z)N=K,z=W}return N}function i4(){let _=getComputedStyle(document.documentElement),$=(S,R)=>{for(let v of S){let x=_.getPropertyValue(v).trim();if(x)return x}return R},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),W=$(["--success-color","--color-success"],"#00ba7c"),V=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),L=$(["--danger-color","--color-error"],"#f4212e"),q=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),y=q7(G,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:z,bgEmphasis:K,accent:G,good:W,warning:V,attention:L,border:q,fontFamily:H,buttonTextColor:y}}function $6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:z,warning:K,attention:G,border:W,fontFamily:V}=i4();return{fontFamily:V,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:W},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var O7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),j6=!1,p2=null,Z6=!1;function l4(_){_.querySelector(".adaptive-card-notice")?.remove()}function L7(_,$,j="error"){l4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function B7(_,$=(j)=>g0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function U7(_=($)=>g0($,null)){return($,j)=>{try{let Z=B7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function Q7(_){if(Z6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=U7(),Z6=!0}async function F7(){if(j6)return;if(p2)return p2;return p2=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{j6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),p2}function H7(){return globalThis.AdaptiveCards}function J7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function D7(_){return O7.has(_)}function d4(_){if(!Array.isArray(_))return[];return _.filter(J7)}function E7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,z=_?.data??$?.data;return{type:j,title:Z,data:z,url:N,raw:_}}function n4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>n4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${n4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function k7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return n4($);return typeof $==="string"?$:String($)}function y7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((G)=>Z(G));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=k7(K.type,j[K.id],K);for(let[G,W]of Object.entries(K))if(Array.isArray(W)||W&&typeof W==="object")K[G]=Z(W);return K};return Z(_)}function w7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function A7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function P7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=A7(_.completed_at||j?.submitted_at),z=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:z}}async function N6(_,$,j){if(!D7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await F7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=H7();Q7(Z);let N=new Z.AdaptiveCard,z=i4();N.hostConfig=new Z.HostConfig($6());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:y7($.payload,K);N.parse(G),N.onExecuteAction=(L)=>{let q=E7(L);if(j?.onAction)l4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(q)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let y=H instanceof Error?H.message:String(H||"Action failed.");L7(_,y||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",q)};let W=N.render();if(!W)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",z.buttonTextColor);let V=P7($);if(V){_.classList.add("adaptive-card-finished");let L=document.createElement("div");L.className=`adaptive-card-status adaptive-card-status-${$.state}`;let q=document.createElement("span");if(q.className="adaptive-card-status-label",q.textContent=V.label,L.appendChild(q),V.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=V.detail,L.appendChild(H)}_.appendChild(L)}if(l4(_),_.appendChild(W),V)w7(W);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function d$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>d$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${d$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function M7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function s4(_){if(!Array.isArray(_))return[];return _.filter(M7)}function z6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=d$(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=Object.entries(j).filter(([N])=>!N.startsWith("__")).map(([N,z])=>({key:N,value:d$(z)})).filter((N)=>N.value).slice(0,4).map(({key:N,value:z})=>`${N}: ${z}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function K6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([N])=>!N.startsWith("__")).map(([N,z])=>({key:N,value:d$(z)})).filter((N)=>N.value).slice(0,4):[],Z=j.length>0?j.map(({key:N,value:z})=>`${N}: ${z}`).join(", "):d$(_.data)||null;return{title:$,summary:Z,fields:j,submittedAt:_.submitted_at}}function b7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?d0($):null},{label:"Added",value:_?.created_at?x$(_.created_at):null}].filter((Z)=>Z.value)}function Y6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=d_(()=>W2($?.content_type),[$?.content_type]),z=e3(N),K=d_(()=>t3($?.content_type),[$?.content_type]),[G,W]=f(N==="text"||N==="pdf"),[V,L]=f(""),[q,H]=f(null),[y,S]=f(null),R=D(null),v=d_(()=>b7($),[$]),x=d_(()=>{if(!K||!V)return"";return g0(V)},[K,V]);return u(()=>{let F=(w)=>{if(w.key==="Escape")j()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[j]),u(()=>{if(!R.current||!x)return;J$(R.current);return},[x]),u(()=>{let F=!1,w=null;async function b(){if(N==="text"){W(!0),S(null);try{let h=await P4(_);if(!F)L(h)}catch{if(!F)S("Failed to load text preview.")}finally{if(!F)W(!1)}return}if(N==="pdf"){W(!0),S(null);try{let h=await M4(_);if(w=URL.createObjectURL(h),!F)H(w)}catch{if(!F)S("Failed to load PDF preview.")}finally{if(!F)W(!1)}return}W(!1)}return b(),()=>{if(F=!0,w)URL.revokeObjectURL(w)}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(F)=>{F.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${z}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${j$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(F)=>F.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${G&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&y&&B`<div class="attachment-preview-state">${y}</div>`}
                    ${!G&&!y&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${j$(_)} alt=${Z} />
                    `}
                    ${!G&&!y&&N==="pdf"&&q&&B`
                        <iframe class="attachment-preview-frame" src=${q} title=${Z}></iframe>
                    `}
                    ${!G&&!y&&N==="text"&&K&&B`
                        <div
                            ref=${R}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:x}}
                        />
                    `}
                    ${!G&&!y&&N==="text"&&!K&&B`
                        <pre class="attachment-preview-text">${V}</pre>
                    `}
                    ${!G&&!y&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${v.map((F)=>B`
                        <div class="attachment-preview-meta-item" key=${F.label}>
                            <span class="attachment-preview-meta-label">${F.label}</span>
                            <span class="attachment-preview-meta-value">${F.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function G6({src:_,onClose:$}){return u(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function C7({mediaId:_,onPreview:$}){let[j,Z]=f(null);if(u(()=>{h$(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",z=j.metadata?.size,K=z?d0(z):"",W=W2(j.content_type)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(V)=>V.stopPropagation()}>
            <a href=${j$(_)} download=${N} class="file-attachment-main">
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
                        ${K&&B`<span class="file-size">${K}</span>`}
                        ${j.content_type&&B`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${W}
            </button>
        </div>
    `}function I7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=f(null);u(()=>{if(!Number.isFinite(j))return;h$(j).then(N).catch(()=>{});return},[j]);let z=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?j$(j):null,W=W2(Z?.content_type)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${z}>
            ${K?B`
                    <a href=${K} download=${z} class="attachment-pill-main" onClick=${(V)=>V.stopPropagation()}>
                        <${Z$}
                            prefix="post"
                            label=${_.label}
                            title=${z}
                        />
                    </a>
                `:B`
                    <${Z$}
                        prefix="post"
                        label=${_.label}
                        title=${z}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${W}
                    onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function h2({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?x$(Z):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&B`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function x7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?d0(_.size):"",N=_.mime_type||"",z=T7(N),K=I$(_.uri);return B`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${z}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&B`<span>${N}</span>`}
                    ${Z&&B`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function S7({block:_}){let[$,j]=f(!1),Z=_.uri||"Embedded resource",N=_.text||"",z=Boolean(_.data),K=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${z&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&B`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let W=new Blob([Uint8Array.from(atob(_.data),(q)=>q.charCodeAt(0))],{type:K||"application/octet-stream"}),V=URL.createObjectURL(W),L=document.createElement("a");L.href=V,L.download=Z.split("/").pop()||"resource",L.click(),URL.revokeObjectURL(V)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function T7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function f7({preview:_}){let $=I$(_.url),j=I$(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(z)=>z.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function R7(_,$){return typeof _==="string"?_:""}var u7=1800,v7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,m7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,g7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function c7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function p7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((z)=>z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(z,K)=>{let G=K||"idle";if(z.dataset.copyState=G,G==="success")z.innerHTML=m7,z.setAttribute("aria-label","Copied"),z.setAttribute("title","Copied"),z.classList.add("is-success"),z.classList.remove("is-error");else if(G==="error")z.innerHTML=g7,z.setAttribute("aria-label","Copy failed"),z.setAttribute("title","Copy failed"),z.classList.add("is-error"),z.classList.remove("is-success");else z.innerHTML=v7,z.setAttribute("aria-label","Copy code"),z.setAttribute("title","Copy code"),z.classList.remove("is-success","is-error")};return $.forEach((z)=>{let K=document.createElement("div");K.className="post-code-block",z.parentNode?.insertBefore(K,z),K.appendChild(z);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",N(G,"idle"),K.appendChild(G);let W=async(V)=>{V.preventDefault(),V.stopPropagation();let q=z.querySelector("code")?.textContent||"",H=await c7(q);N(G,H?"success":"error");let y=j.get(G);if(y)clearTimeout(y);let S=setTimeout(()=>{N(G,"idle"),j.delete(G)},u7);j.set(G,S)};G.addEventListener("click",W),Z.push(()=>{G.removeEventListener("click",W);let V=j.get(G);if(V)clearTimeout(V);if(K.parentNode)K.parentNode.insertBefore(z,K),K.remove()})}),()=>{Z.forEach((z)=>z())}}function h7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V))N.push(V.replace(/^\s*-\s+/,"").trim());else if(!V.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,Z),G=j.slice(z),W=[...K,...G].join(`
`);return W=W.replace(/\n{3,}/g,`

`).trim(),{content:W,fileRefs:N}}function i7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V)){let q=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(q)N.push(q[1])}else if(!V.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,Z),G=j.slice(z),W=[...K,...G].join(`
`);return W=W.replace(/\n{3,}/g,`

`).trim(),{content:W,messageRefs:N}}function l7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Images:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,attachments:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V)){let L=V.replace(/^\s*-\s+/,"").trim(),q=L.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||L.match(/^attachment:([^\s]+)\s+(.+)$/i);if(q){let H=q[1],y=(q[2]||"").trim()||H;N.push({id:H,label:y,raw:L})}else N.push({id:null,label:L,raw:L})}else if(!V.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),G=j.slice(z),W=[...K,...G].join(`
`);return W=W.replace(/\n{3,}/g,`

`).trim(),{content:W,attachments:N}}function n7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function d7(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(n7).sort((L,q)=>q.length-L.length),N=new RegExp(`(${Z.join("|")})`,"gi"),z=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),G=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),W=[],V;while(V=G.nextNode())W.push(V);for(let L of W){let q=L.nodeValue;if(!q||!N.test(q)){N.lastIndex=0;continue}N.lastIndex=0;let H=L.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let y=q.split(N).filter((R)=>R!=="");if(y.length===0)continue;let S=K.createDocumentFragment();for(let R of y)if(z.test(R)){let v=K.createElement("mark");v.className="search-highlight-term",v.textContent=R,S.appendChild(v)}else S.appendChild(K.createTextNode(R));L.parentNode.replaceChild(S,L)}return K.body.innerHTML}function V6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:z,agentAvatarUrl:K,userName:G,userAvatarUrl:W,userAvatarBackground:V,onDelete:L,isThreadReply:q,isThreadPrev:H,isThreadNext:y,isRemoving:S,highlightQuery:R,onFileRef:v}){let[x,F]=f(null),w=D(null),b=_.data,h=b.type==="agent_response",__=G||"You",t=h?z||p3:__,l=h?h4(z,K,!0):h4(__,W),z_=typeof V==="string"?V.trim().toLowerCase():"",i=!h&&l.image&&(z_==="clear"||z_==="transparent"),B_=h&&Boolean(l.image),T_=`background-color: ${i||B_?"transparent":l.color}`,o=b.content_meta,$_=Boolean(o?.truncated),K_=Boolean(o?.preview),Z_=$_&&!K_,W_=$_?{originalLength:Number.isFinite(o?.original_length)?o.original_length:b.content?b.content.length:0,maxLength:Number.isFinite(o?.max_length)?o.max_length:0}:null,O_=b.content_blocks||[],k_=b.media_ids||[],G_=R7(b.content,b.link_previews),{content:A_,fileRefs:U_}=h7(G_),{content:j0,messageRefs:y_}=i7(A_),{content:v_,attachments:x_}=l7(j0);G_=v_;let t_=d4(O_),Y_=s4(O_),a=t_.length===1&&typeof t_[0]?.fallback_text==="string"?t_[0].fallback_text.trim():"",w_=Y_.length===1?z6(Y_[0]).trim():"",X_=Boolean(a)&&G_?.trim()===a||Boolean(w_)&&G_?.trim()===w_,D_=Boolean(G_)&&!Z_&&!X_,Q_=typeof R==="string"?R.trim():"",p_=d_(()=>{if(!G_||X_)return"";let C=g0(G_,j);return Q_?d7(C,Q_):C},[G_,X_,Q_]),F_=(C,e)=>{C.stopPropagation(),F(j$(e))},[P_,_0]=f(null),e_=(C)=>{_0(C)},f_=(C)=>{C.stopPropagation(),L?.(_)},z0=(C,e)=>{let M_=new Set;if(!C||e.length===0)return{content:C,usedIds:M_};return{content:C.replace(/attachment:([^\s)"']+)/g,(w0,s0,Y0,O0)=>{let H0=s0.replace(/^\/+/,""),C0=e.find((o0)=>o0.name&&o0.name.toLowerCase()===H0.toLowerCase()&&!M_.has(o0.id))||e.find((o0)=>!M_.has(o0.id));if(!C0)return w0;if(M_.add(C0.id),O0.slice(Math.max(0,Y0-2),Y0)==="](")return`/media/${C0.id}`;return C0.name||"attachment"}),usedIds:M_}},K0=[],C_=[],$0=[],Q0=[],E0=[],F0=[],q0=0;if(O_.length>0)O_.forEach((C)=>{if(C?.type==="text"&&C.annotations)F0.push(C.annotations);if(C?.type==="resource_link")Q0.push(C);else if(C?.type==="resource")E0.push(C);else if(C?.type==="file"){let e=k_[q0++];if(e)C_.push(e),$0.push({id:e,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let e=k_[q0++];if(e){let M_=typeof C?.mime_type==="string"?C.mime_type:void 0;K0.push({id:e,annotations:C?.annotations,mimeType:M_}),$0.push({id:e,name:C?.name||C?.filename||C?.title})}}});else if(k_.length>0)k_.forEach((C)=>{K0.push({id:C,annotations:null}),$0.push({id:C,name:null})});if(x_.length>0)x_.forEach((C)=>{if(!C?.id)return;let e=$0.find((M_)=>String(M_.id)===String(C.id));if(e&&!e.name)e.name=C.label});let{content:k0,usedIds:s_}=z0(G_,$0);G_=k0;let m_=K0.filter(({id:C})=>!s_.has(C)),b0=C_.filter((C)=>!s_.has(C)),i_=x_.length>0?x_.map((C,e)=>({id:C.id||`attachment-${e+1}`,label:C.label||`attachment-${e+1}`})):$0.map((C,e)=>({id:C.id,label:C.name||`attachment-${e+1}`})),o_=d_(()=>d4(O_),[O_]),y0=d_(()=>s4(O_),[O_]);u(()=>{if(!w.current)return;return J$(w.current),p7(w.current)},[p_]);let E_=D(null);return u(()=>{if(!E_.current||o_.length===0)return;let C=E_.current;C.innerHTML="";for(let e of o_){let M_=document.createElement("div");C.appendChild(M_),N6(M_,e,{onAction:async(h_)=>{if(h_.type==="Action.OpenUrl"){let w0=I$(h_.url||"");if(!w0)throw Error("Invalid URL");window.open(w0,"_blank","noopener,noreferrer");return}if(h_.type==="Action.Submit"){await E4({post_id:_.id,thread_id:b.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:h_.type,title:h_.title||"",data:h_.data}});return}console.warn("[post] unsupported adaptive card action:",h_.type,h_)}}).catch((h_)=>{console.error("[post] adaptive card render error:",h_),M_.textContent=e.fallback_text||"Card failed to render."})}},[o_,b.thread_id,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${h?"agent-post":""} ${q?"thread-reply":""} ${H?"thread-prev":""} ${y?"thread-next":""} ${S?"removing":""}" onClick=${$}>
            <div class="post-avatar ${h?"agent-avatar":""} ${l.image?"has-image":""}" style=${T_}>
                ${l.image?B`<img src=${l.image} alt=${t} />`:l.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${f_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${t}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${a3(_.timestamp)}</a>
                </div>
                ${Z_&&W_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${V2(W_.originalLength)} chars
                            ${W_.maxLength?B` • Display limit: ${V2(W_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${K_&&W_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${V2(W_.maxLength)} of ${V2(W_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(U_.length>0||y_.length>0||i_.length>0)&&B`
                    <div class="post-file-refs">
                        ${y_.map((C)=>{let e=(M_)=>{if(M_.preventDefault(),M_.stopPropagation(),N)N(C,_.chat_jid||null);else{let h_=document.getElementById("post-"+C);if(h_)h_.scrollIntoView({behavior:"smooth",block:"center"}),h_.classList.add("post-highlight"),setTimeout(()=>h_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${e}>
                                    <${Z$}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${U_.map((C)=>{let e=C.split("/").pop()||C;return B`
                                <${Z$}
                                    prefix="post"
                                    label=${e}
                                    title=${C}
                                    onClick=${()=>v?.(C)}
                                />
                            `})}
                        ${i_.map((C)=>B`
                            <${I7}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${e_}
                            />
                        `)}
                    </div>
                `}
                ${D_&&B`
                    <div 
                        ref=${w}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:p_}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let e=C.target.dataset.hashtag;if(e)j?.(e)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),F(C.target.src)}}
                    />
                `}
                ${o_.length>0&&B`
                    <div ref=${E_} class="post-adaptive-cards" />
                `}
                ${y0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${y0.map((C,e)=>{let M_=K6(C);return B`
                                <div key=${`${C.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${M_.title}</span>
                                    </div>
                                    ${M_.summary&&B`
                                        <div class="adaptive-card-submission-summary">${M_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${x$(M_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${F0.length>0&&B`
                    ${F0.map((C,e)=>B`
                        <${h2} key=${e} annotations=${C} />
                    `)}
                `}
                ${m_.length>0&&B`
                    <div class="media-preview">
                        ${m_.map(({id:C,mimeType:e})=>{let h_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?j$(C):A4(C);return B`
                                <img 
                                    key=${C} 
                                    src=${h_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(w0)=>F_(w0,C)}
                                />
                            `})}
                    </div>
                `}
                ${m_.length>0&&B`
                    ${m_.map(({annotations:C},e)=>B`
                        ${C&&B`<${h2} key=${e} annotations=${C} />`}
                    `)}
                `}
                ${b0.length>0&&B`
                    <div class="file-attachments">
                        ${b0.map((C)=>B`
                            <${C7} key=${C} mediaId=${C} onPreview=${e_} />
                        `)}
                    </div>
                `}
                ${Q0.length>0&&B`
                    <div class="resource-links">
                        ${Q0.map((C,e)=>B`
                            <div key=${e}>
                                <${x7} block=${C} />
                                <${h2} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${E0.length>0&&B`
                    <div class="resource-embeds">
                        ${E0.map((C,e)=>B`
                            <div key=${e}>
                                <${S7} block=${C} />
                                <${h2} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${b.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${b.link_previews.map((C,e)=>B`
                            <${f7} key=${e} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${x&&B`<${G6} src=${x} onClose=${()=>F(null)} />`}
        ${P_&&B`
            <${Y6}
                mediaId=${P_.mediaId}
                info=${P_.info}
                onClose=${()=>_0(null)}
            />
        `}
    `}function W6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:z,onScrollToMessage:K,onFileRef:G,emptyMessage:W,timelineRef:V,agents:L,user:q,onDeletePost:H,reverse:y=!0,removingPostIds:S,searchQuery:R}){let[v,x]=f(!1),F=D(null),w=typeof IntersectionObserver<"u",b=M(async()=>{if(!j||!$||v)return;x(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{x(!1)}},[$,v,j]),h=M((o)=>{let{scrollTop:$_,scrollHeight:K_,clientHeight:Z_}=o.target,W_=y?K_-Z_-$_:$_,O_=Math.max(300,Z_);if(W_<O_)b()},[y,b]);u(()=>{if(!w)return;let o=F.current,$_=V?.current;if(!o||!$_)return;let K_=300,Z_=new IntersectionObserver((W_)=>{for(let O_ of W_){if(!O_.isIntersecting)continue;b()}},{root:$_,rootMargin:`${K_}px 0px ${K_}px 0px`,threshold:0});return Z_.observe(o),()=>Z_.disconnect()},[w,$,j,V,b]);let __=D(b);if(__.current=b,u(()=>{if(w)return;if(!V?.current)return;let{scrollTop:o,scrollHeight:$_,clientHeight:K_}=V.current,Z_=y?$_-K_-o:o,W_=Math.max(300,K_);if(Z_<W_)__.current?.()},[w,_,$,y,V]),u(()=>{if(!V?.current)return;if(!$||v)return;let{scrollTop:o,scrollHeight:$_,clientHeight:K_}=V.current,Z_=y?$_-K_-o:o,W_=Math.max(300,K_);if($_<=K_+1||Z_<W_)__.current?.()},[_,$,v,y,V]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${W||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((o,$_)=>o.id-$_.id),l=(o)=>{let $_=o?.data?.thread_id;if($_===null||$_===void 0||$_==="")return null;let K_=Number($_);return Number.isFinite(K_)?K_:null},z_=new Map;for(let o=0;o<t.length;o+=1){let $_=t[o],K_=Number($_?.id),Z_=l($_);if(Z_!==null){let W_=z_.get(Z_)||{anchorIndex:-1,replyIndexes:[]};W_.replyIndexes.push(o),z_.set(Z_,W_)}else if(Number.isFinite(K_)){let W_=z_.get(K_)||{anchorIndex:-1,replyIndexes:[]};W_.anchorIndex=o,z_.set(K_,W_)}}let i=new Map;for(let[o,$_]of z_.entries()){let K_=new Set;if($_.anchorIndex>=0)K_.add($_.anchorIndex);for(let Z_ of $_.replyIndexes)K_.add(Z_);i.set(o,Array.from(K_).sort((Z_,W_)=>Z_-W_))}let B_=t.map((o,$_)=>{let K_=l(o);if(K_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Z_=i.get(K_);if(!Z_||Z_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let W_=Z_.indexOf($_);if(W_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:W_>0,hasThreadNext:W_<Z_.length-1}}),T_=B`<div class="timeline-sentinel" ref=${F}></div>`;return B`
        <div class="timeline ${y?"reverse":"normal"}" ref=${V} onScroll=${h}>
            <div class="timeline-content">
                ${y?T_:null}
                ${t.map((o,$_)=>{let K_=Boolean(o.data?.thread_id&&o.data.thread_id!==o.id),Z_=S?.has?.(o.id),W_=B_[$_]||{};return B`
                    <${V6}
                        key=${o.id}
                        post=${o}
                        isThreadReply=${K_}
                        isThreadPrev=${W_.hasThreadPrev}
                        isThreadNext=${W_.hasThreadNext}
                        isRemoving=${Z_}
                        highlightQuery=${R}
                        agentName=${h3(o.data?.agent_id,L||{})}
                        agentAvatarUrl=${i3(o.data?.agent_id,L||{})}
                        userName=${q?.name||q?.user_name}
                        userAvatarUrl=${q?.avatar_url||q?.avatarUrl||q?.avatar}
                        userAvatarBackground=${q?.avatar_background||q?.avatarBackground}
                        onClick=${()=>Z?.(o)}
                        onHashtagClick=${N}
                        onMessageRef=${z}
                        onScrollToMessage=${K}
                        onFileRef=${G}
                        onDelete=${H}
                    />
                `})}
                ${y?null:T_}
            </div>
        </div>
    `}class X6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let z=N===!0?0:typeof N==="number"?N:0;if(z>j)j=z,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var a_=new X6;var i2=null,o4=null;function q6(){if(o4)return Promise.resolve(o4);if(!i2)i2=import("/static/dist/editor.bundle.js").then((_)=>{return o4=_,_}).catch((_)=>{throw i2=null,_});return i2}class O6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await q6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var r4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new O6(_,$)}};function a4(){q6().catch(()=>{})}var s7={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},o7={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},l2=null,t4=null;function r7(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function a7(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,z)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!r7(K))return $(N,z);if(N instanceof Request)return $(new Request(j,N));return $(j,z)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function t7(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!l2)l2=a7(()=>Promise.resolve($.init?.())).catch((j)=>{throw l2=null,j});return await l2,$}async function e7(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!t4)t4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await t4}async function _5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function $5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function j5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function D$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Z5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function L6(){let _=j5(),$=_?o7:s7,j=D$("--bg-primary",_?"#000000":"#ffffff"),Z=D$("--text-primary",_?"#e7e9ea":"#0f1419"),N=D$("--text-secondary",_?"#71767b":"#536471"),z=D$("--accent-color","#1d9bf0"),K=D$("--danger-color",_?"#ff7b72":"#cf222e"),G=D$("--success-color",_?"#7ee787":"#1a7f37"),W=D$("--bg-hover",_?"#1d1f23":"#e8ebed"),V=D$("--border-color",_?"#2f3336":"#eff3f4"),L=D$("--accent-soft-strong",Z5(z,_?"47":"33"));return{background:j,foreground:Z,cursor:z,cursorAccent:j,selectionBackground:L,selectionForeground:Z,black:W,red:K,green:G,yellow:$.yellow,blue:z,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:V}}class B6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,z=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(z)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await t7();if(await e7(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:L6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=L6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await _5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket($5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var e4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new B6(_,$)}};function k$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function N5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,z=Z?.[2]||"",K=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),V=N.startsWith("/")?N:`${G?`${G}/`:""}${N}`,L=[];for(let H of V.split("/")){if(!H||H===".")continue;if(H===".."){if(L.length>0)L.pop();continue}L.push(H)}let q=L.join("/");return`${I2(q)}${z}${K}`}function X2(_){return _?.preview||null}function z5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function K5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function Y5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${k$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${k$(d0($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${k$(x$($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${k$(K5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${k$(z5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${k$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function G5(_){let $=X2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=Y5(_,$);if($.kind==="image"){let Z=$.url||($.path?I2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${k$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=g0($.text||"",null,{rewriteImageSrc:(N)=>N5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${k$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class _1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=G5(this.context)}getContent(){let _=X2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=X2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var $1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=X2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new _1(_,$)}},j1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return X2(_)||_?.path?1:!1},mount(_,$){return new _1(_,$)}};var V5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),W5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},X5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function Q6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function U6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class F6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=Q6(j),z=X5[N]||"\uD83D\uDCC4",K=W5[N]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${z}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${U6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${U6(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let W=G.querySelector("#ov-open-tab");if(W)W.addEventListener("click",()=>{let V=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class H6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var Z1={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=Q6(_?.path);if(!$||!V5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new F6(_,$);return new H6(_,$)}};var q5=/\.(csv|tsv)$/i;class J6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var N1={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!q5.test($))return!1;return 55},mount(_,$){return new J6(_,$)}};var O5=/\.pdf$/i;class D6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var z1={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!O5.test($))return!1;return 52},mount(_,$){return new D6(_,$)}};var L5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;class E6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var K1={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!L5.test($))return!1;return 48},mount(_,$){return new E6(_,$)}};function B5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function U5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var Y1='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function k6(_){let $=String(_||"").trim();return $?$:Y1}function Q5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function F5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function H5(_,$="*"){try{let j=(z)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...z}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let z=Z.prototype.saveData;Z.prototype.saveData=function(K,G,W,V,L,q){try{if(K&&W!=null&&j({filename:K,format:G,data:W,mimeType:V,base64Encoded:Boolean(L),defaultMode:q}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return z.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let z=N.prototype.exportFile;N.prototype.exportFile=function(K,G,W,V,L,q){try{if(G&&j({filename:G,data:K,mimeType:W,base64Encoded:Boolean(V),mode:L,folderId:q}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return z.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function y6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${F5(j)}`}class w6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${U5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#drawio-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class A6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=Q5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let z=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(H5(this.iframe.contentWindow))return;setTimeout(z,250)};z()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=Y1,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await y6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await y6(_,"image/png");else this.xmlData=k6(await _.text());else if(_.status===404)this.xmlData=Y1;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?k6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var G1={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!B5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new w6(_,$);return new A6(_,$)}};class P6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var c_=new P6;var n2="workspaceExplorerScale",J5=["compact","default","comfortable"],D5=new Set(J5),E5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function M6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return D5.has(j)?j:$}function V1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function k5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function y5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function W1(_={}){let $=k5(_),j=_.stored?M6(_.stored,$):$;return y5(j,_)}function b6(_){return E5[M6(_)]}var w5=60000,S6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function T6(_,$,j,Z=0,N=[]){if(!j&&S6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let z of _.children)T6(z,$,j,Z+1,N);return N}function C6(_,$,j){if(!_)return"";let Z=[],N=(z)=>{if(!j&&S6(z))return;if(Z.push(z.type==="dir"?`d:${z.path}`:`f:${z.path}`),z.children&&$?.has(z.path))for(let K of z.children)N(K)};return N(_),Z.join("|")}function L1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((G)=>[G?.path,G])):new Map,z=!j||j.length!==Z.length,K=Z.map((G)=>{let W=L1(N.get(G.path),G);if(W!==N.get(G.path))z=!0;return W});return z?{...$,children:K}:_}function q1(_,$,j){if(!_)return _;if(_.path===$)return L1(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((z)=>{let K=q1(z,$,j);if(K!==z)Z=!0;return K});return Z?{..._,children:N}:_}var f6=4,X1=14,A5=8,P5=16;function R6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=R6(Z);return _.__bytes=j,j}function u6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=f6)return Z;let N=Array.isArray(_.children)?_.children:[],z=[];for(let G of N){let W=Math.max(0,Number(G?.__bytes??G?.size??0));if(W<=0)continue;if(G.type==="dir")z.push({kind:"dir",node:G,size:W});else z.push({kind:"file",name:G.name,path:G.path,size:W})}z.sort((G,W)=>W.size-G.size);let K=z;if(z.length>X1){let G=z.slice(0,X1-1),W=z.slice(X1-1),V=W.reduce((L,q)=>L+q.size,0);G.push({kind:"other",name:`+${W.length} more`,path:`${Z.path}/[other]`,size:V}),K=G}return Z.children=K.map((G)=>{if(G.kind==="dir")return u6(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function I6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function v6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),z=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${z}%)`}function d2(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function B1(_,$,j,Z,N,z){let K=Math.PI*2-0.0001,G=z-N>K?N+K:z,W=d2(_,$,Z,N),V=d2(_,$,Z,G),L=d2(_,$,j,G),q=d2(_,$,j,N),H=G-N>Math.PI?1:0;return[`M ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`L ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,"Z"].join(" ")}var m6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function g6(_,$,j){let Z=[],N=[],z=Math.max(0,Number($)||0),K=(G,W,V,L)=>{let q=Array.isArray(G?.children)?G.children:[];if(!q.length)return;let H=Math.max(0,Number(G.size)||0);if(H<=0)return;let y=V-W,S=W;q.forEach((R,v)=>{let x=Math.max(0,Number(R.size)||0);if(x<=0)return;let F=x/H,w=S,b=v===q.length-1?V:S+y*F;if(S=b,b-w<0.003)return;let h=m6[L];if(h){let __=v6(w,L,j);if(Z.push({key:R.path,path:R.path,label:R.name,size:x,color:__,depth:L,startAngle:w,endAngle:b,innerRadius:h[0],outerRadius:h[1],d:B1(120,120,h[0],h[1],w,b)}),L===1)N.push({key:R.path,name:R.name,size:x,pct:z>0?x/z*100:0,color:__})}if(L<f6)K(R,w,b,L+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function O1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=O1(Z,$);if(N)return N}return null}function c6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=m6[1];if(!N)return{segments:[],legend:[]};let z=-Math.PI/2,K=Math.PI*3/2,G=v6(z,1,Z),V=`${$||"."}/[files]`;return{segments:[{key:V,path:V,label:_,size:j,color:G,depth:1,startAngle:z,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:B1(120,120,N[0],N[1],z,K)}],legend:[{key:V,name:_,size:j,pct:100,color:G}]}}function x6(_,$=!1,j=!1){if(!_)return null;let Z=R6(_),N=u6(_,0),z=N.size||Z,{segments:K,legend:G}=g6(N,z,j);if(!K.length&&z>0){let W=c6("[files]",N.path,z,j);K=W.segments,G=W.legend}return{root:N,totalSize:z,segments:K,legend:G,truncated:$,isDarkTheme:j}}function M5({payload:_}){if(!_)return null;let[$,j]=f(null),[Z,N]=f(_?.root?.path||"."),[z,K]=f(()=>[_?.root?.path||"."]),[G,W]=f(!1);u(()=>{let i=_?.root?.path||".";N(i),K([i]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!Z)return;W(!0);let i=setTimeout(()=>W(!1),180);return()=>clearTimeout(i)},[Z]);let V=d_(()=>{return O1(_.root,Z)||_.root},[_?.root,Z]),L=V?.size||_.totalSize||0,{segments:q,legend:H}=d_(()=>{let i=g6(V,L,_.isDarkTheme);if(i.segments.length>0)return i;if(L<=0)return i;let B_=V?.children?.length?"Total":"[files]";return c6(B_,V?.path||_?.root?.path||".",L,_.isDarkTheme)},[V,L,_.isDarkTheme,_?.root?.path]),[y,S]=f(q),R=D(new Map),v=D(0);u(()=>{let i=R.current,B_=new Map(q.map((K_)=>[K_.key,K_])),T_=performance.now(),o=220,$_=(K_)=>{let Z_=Math.min(1,(K_-T_)/220),W_=Z_*(2-Z_),O_=q.map((k_)=>{let A_=i.get(k_.key)||{startAngle:k_.startAngle,endAngle:k_.startAngle,innerRadius:k_.innerRadius,outerRadius:k_.innerRadius},U_=(t_,Y_)=>t_+(Y_-t_)*W_,j0=U_(A_.startAngle,k_.startAngle),y_=U_(A_.endAngle,k_.endAngle),v_=U_(A_.innerRadius,k_.innerRadius),x_=U_(A_.outerRadius,k_.outerRadius);return{...k_,d:B1(120,120,v_,x_,j0,y_)}});if(S(O_),Z_<1)v.current=requestAnimationFrame($_)};if(v.current)cancelAnimationFrame(v.current);return v.current=requestAnimationFrame($_),R.current=B_,()=>{if(v.current)cancelAnimationFrame(v.current)}},[q]);let x=y.length?y:q,F=L>0?d0(L):"0 B",w=V?.name||"",h=(w&&w!=="."?w:"Total")||"Total",__=F,t=z.length>1,l=(i)=>{if(!i?.path)return;let B_=O1(_.root,i.path);if(!B_||!Array.isArray(B_.children)||B_.children.length===0)return;K((T_)=>[...T_,B_.path]),N(B_.path),j(null)},z_=()=>{if(!t)return;K((i)=>{let B_=i.slice(0,-1);return N(B_[B_.length-1]||_?.root?.path||"."),B_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${V?.path||_?.root?.path||"."}`}
                data-segments=${x.length}
                data-base-size=${L}>
                ${x.map((i)=>B`
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
                    onClick=${z_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${h}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${__}</text>
                </g>
            </svg>
            ${H.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((i)=>B`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${d0(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function b5({mediaId:_}){let[$,j]=f(null);if(u(()=>{if(!_)return;h$(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?d0($.metadata.size):"";return B`
        <a href=${j$(_)} download=${Z} class="file-attachment"
            onClick=${(z)=>z.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&B`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function p6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z}){let[N,z]=f(null),[K,G]=f(new Set(["."])),[W,V]=f(null),[L,q]=f(null),[H,y]=f(""),[S,R]=f(null),[v,x]=f(null),[F,w]=f(!0),[b,h]=f(!1),[__,t]=f(null),[l,z_]=f(()=>i$("workspaceShowHidden",!1)),[i,B_]=f(!1),[T_,o]=f(null),[$_,K_]=f(null),[Z_,W_]=f(null),[O_,k_]=f(!1),[G_,A_]=f(null),[U_,j0]=f(()=>I6()),[y_,v_]=f(()=>W1({stored:n0(n2),...V1()})),x_=D(K),t_=D(""),Y_=D(null),a=D(0),w_=D(new Set),X_=D(null),D_=D(new Map),Q_=D(_),p_=D(Z),F_=D(null),P_=D(null),_0=D(null),e_=D(null),f_=D(null),z0=D(null),K0=D("."),C_=D(null),$0=D({path:null,dragging:!1,startX:0,startY:0}),Q0=D({path:null,dragging:!1,startX:0,startY:0}),E0=D({path:null,timer:0}),F0=D(!1),q0=D(0),k0=D(new Map),s_=D(null),m_=D(null),b0=D(null),i_=D(null),o_=D(l),y0=D($),E_=D(j??$),C=D(0),e=D(Z_),M_=D(i),h_=D(T_),w0=D(null),s0=D({x:0,y:0}),Y0=D(0),O0=D(null),H0=D(W),A0=D(L),C0=D(null),c0=D(null),o0=D(S);Q_.current=_,p_.current=Z,u(()=>{x_.current=K},[K]),u(()=>{o_.current=l},[l]),u(()=>{y0.current=$},[$]),u(()=>{E_.current=j??$},[j,$]),u(()=>{e.current=Z_},[Z_]),u(()=>{if(typeof window>"u")return;let O=()=>{v_(W1({stored:n0(n2),...V1()}))};O();let Q=()=>O(),E=()=>O(),k=(g)=>{if(!g||g.key===null||g.key===n2)O()};window.addEventListener("resize",Q),window.addEventListener("focus",E),window.addEventListener("storage",k);let m=window.matchMedia?.("(pointer: coarse)"),s=window.matchMedia?.("(hover: none)"),r=(g,N_)=>{if(!g)return;if(g.addEventListener)g.addEventListener("change",N_);else if(g.addListener)g.addListener(N_)},n=(g,N_)=>{if(!g)return;if(g.removeEventListener)g.removeEventListener("change",N_);else if(g.removeListener)g.removeListener(N_)};return r(m,Q),r(s,Q),()=>{window.removeEventListener("resize",Q),window.removeEventListener("focus",E),window.removeEventListener("storage",k),n(m,Q),n(s,Q)}},[]),u(()=>{let O=(Q)=>{let E=Q?.detail?.path;if(!E)return;let k=E.split("/"),m=[];for(let s=1;s<k.length;s++)m.push(k.slice(0,s).join("/"));if(m.length)G((s)=>{let r=new Set(s);r.add(".");for(let n of m)r.add(n);return r});V(E),requestAnimationFrame(()=>{let s=document.querySelector(`[data-path="${CSS.escape(E)}"]`);if(s)s.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",O),()=>window.removeEventListener("workspace-reveal-path",O)},[]),u(()=>{M_.current=i},[i]),u(()=>{h_.current=T_},[T_]),u(()=>{H0.current=W},[W]),u(()=>{A0.current=L},[L]),u(()=>{o0.current=S},[S]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let O=()=>j0(I6());O();let Q=window.matchMedia?.("(prefers-color-scheme: dark)"),E=()=>O();if(Q?.addEventListener)Q.addEventListener("change",E);else if(Q?.addListener)Q.addListener(E);let k=typeof MutationObserver<"u"?new MutationObserver(()=>O()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(Q?.removeEventListener)Q.removeEventListener("change",E);else if(Q?.removeListener)Q.removeListener(E);k?.disconnect()}},[]),u(()=>{if(!L)return;let O=f_.current;if(!O)return;let Q=requestAnimationFrame(()=>{try{O.focus(),O.select()}catch{}});return()=>cancelAnimationFrame(Q)},[L]);let T$=async(O)=>{h(!0),R(null),x(null);try{let Q=await b4(O,20000);R(Q)}catch(Q){R({error:Q.message||"Failed to load preview"})}finally{h(!1)}};F_.current=T$;let f$=async()=>{if(!y0.current)return;try{let O=await z2("",1,o_.current),Q=C6(O.root,x_.current,o_.current);if(Q===t_.current){w(!1);return}if(t_.current=Q,Y_.current=O.root,!a.current)a.current=requestAnimationFrame(()=>{a.current=0,z((E)=>L1(E,Y_.current)),w(!1)})}catch(O){t(O.message||"Failed to load workspace"),w(!1)}},R$=async(O)=>{if(!O)return;if(w_.current.has(O))return;w_.current.add(O);try{let Q=await z2(O,1,o_.current);z((E)=>q1(E,O,Q.root))}catch(Q){t(Q.message||"Failed to load workspace")}finally{w_.current.delete(O)}};P_.current=R$;let g_=M(()=>{let O=W;if(!O)return".";let Q=D_.current?.get(O);if(Q&&Q.type==="dir")return Q.path;if(O==="."||!O.includes("/"))return".";let E=O.split("/");return E.pop(),E.join("/")||"."},[W]),X$=M((O)=>{let Q=O?.closest?.(".workspace-row");if(!Q)return null;let E=Q.dataset.path,k=Q.dataset.type;if(!E)return null;if(k==="dir")return E;if(E.includes("/")){let m=E.split("/");return m.pop(),m.join("/")||"."}return"."},[]),r0=M((O)=>{return X$(O?.target||null)},[X$]),S_=M((O)=>{e.current=O,W_(O)},[]),L0=M(()=>{let O=E0.current;if(O?.timer)clearTimeout(O.timer);E0.current={path:null,timer:0}},[]),Z0=M((O)=>{if(!O||O==="."){L0();return}let Q=D_.current?.get(O);if(!Q||Q.type!=="dir"){L0();return}if(x_.current?.has(O)){L0();return}if(E0.current?.path===O)return;L0();let E=setTimeout(()=>{E0.current={path:null,timer:0},P_.current?.(O),G((k)=>{let m=new Set(k);return m.add(O),m})},600);E0.current={path:O,timer:E}},[L0]),a0=M((O,Q)=>{if(s0.current={x:O,y:Q},Y0.current)return;Y0.current=requestAnimationFrame(()=>{Y0.current=0;let E=w0.current;if(!E)return;let k=s0.current;E.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),T0=M((O)=>{if(!O)return;let E=(D_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!E)return;K_({path:O,label:E})},[]),q$=M(()=>{if(K_(null),Y0.current)cancelAnimationFrame(Y0.current),Y0.current=0;if(w0.current)w0.current.style.transform="translate(-9999px, -9999px)"},[]),y$=M((O)=>{if(!O)return".";let Q=D_.current?.get(O);if(Q&&Q.type==="dir")return Q.path;if(O==="."||!O.includes("/"))return".";let E=O.split("/");return E.pop(),E.join("/")||"."},[]),J0=M(()=>{q(null),y("")},[]),w$=M((O)=>{if(!O)return;let E=(D_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!E||O===".")return;q(O),y(E)},[]),s$=M(async()=>{let O=A0.current;if(!O)return;let Q=(H||"").trim();if(!Q){J0();return}let E=D_.current?.get(O),k=(E?.name||O.split("/").pop()||O).trim();if(Q===k){J0();return}try{let s=(await x4(O,Q))?.path||O,r=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(J0(),t(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:O,newPath:s,type:E?.type||"file"}})),E?.type==="dir")G((n)=>{let g=new Set;for(let N_ of n)if(N_===O)g.add(s);else if(N_.startsWith(`${O}/`))g.add(`${s}${N_.slice(O.length)}`);else g.add(N_);return g});if(V(s),E?.type==="dir")R(null),h(!1),x(null);else F_.current?.(s);P_.current?.(r)}catch(m){t(m?.message||"Failed to rename file")}},[J0,H]),u$=M(async(O)=>{let k=O||".";for(let m=0;m<50;m+=1){let r=`untitled${m===0?"":`-${m}`}.md`;try{let g=(await I4(k,r,""))?.path||(k==="."?r:`${k}/${r}`);if(k&&k!==".")G((N_)=>new Set([...N_,k]));V(g),t(null),P_.current?.(k),F_.current?.(g);return}catch(n){if(n?.status===409||n?.code==="file_exists")continue;t(n?.message||"Failed to create file");return}}t("Failed to create file (untitled name already in use).")},[]),A$=M((O)=>{if(O?.stopPropagation?.(),O_)return;let Q=y$(H0.current);u$(Q)},[O_,y$,u$]);u(()=>{if(typeof window>"u")return;let O=(Q)=>{let E=Q?.detail?.updates||[];if(!Array.isArray(E)||E.length===0)return;z((n)=>{let g=n;for(let N_ of E){if(!N_?.root)continue;if(!g||N_.path==="."||!N_.path)g=N_.root;else g=q1(g,N_.path,N_.root)}if(g)t_.current=C6(g,x_.current,o_.current);return w(!1),g});let k=H0.current;if(Boolean(k)&&E.some((n)=>{let g=n?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)||g.startsWith(`${k}/`)}))k0.current.clear();if(!k||!o0.current)return;let s=D_.current?.get(k);if(s&&s.type==="dir")return;if(E.some((n)=>{let g=n?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)}))F_.current?.(k)};return window.addEventListener("workspace-update",O),()=>window.removeEventListener("workspace-update",O)},[]),X_.current=f$;let o$=D(()=>{if(typeof window>"u")return;let O=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),Q=E_.current??y0.current,E=document.visibilityState!=="hidden"&&(Q||O.matches&&y0.current);K2(E,o_.current).catch(()=>{})}).current,f0=D(0),R0=D(()=>{if(f0.current)clearTimeout(f0.current);f0.current=setTimeout(()=>{f0.current=0,o$()},250)}).current;u(()=>{if(y0.current)X_.current?.();R0()},[$,j]),u(()=>{X_.current(),o$();let O=setInterval(()=>X_.current(),w5),Q=l$("previewHeight",null),E=Number.isFinite(Q)?Math.min(Math.max(Q,80),600):280;if(q0.current=E,_0.current)_0.current.style.setProperty("--preview-height",`${E}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=()=>R0();if(k.addEventListener)k.addEventListener("change",m);else if(k.addListener)k.addListener(m);return document.addEventListener("visibilitychange",m),()=>{if(clearInterval(O),a.current)cancelAnimationFrame(a.current),a.current=0;if(k.removeEventListener)k.removeEventListener("change",m);else if(k.removeListener)k.removeListener(m);if(document.removeEventListener("visibilitychange",m),f0.current)clearTimeout(f0.current),f0.current=0;if(C_.current)clearTimeout(C_.current),C_.current=null;K2(!1,o_.current).catch(()=>{})}},[]);let p0=d_(()=>T6(N,K,l),[N,K,l]),I0=d_(()=>new Map(p0.map((O)=>[O.node.path,O.node])),[p0]),u0=d_(()=>b6(y_),[y_]);D_.current=I0;let P0=(W?D_.current.get(W):null)?.type==="dir";u(()=>{if(!W||!P0){A_(null),s_.current=null,m_.current=null;return}let O=W,Q=`${l?"hidden":"visible"}:${W}`,E=k0.current,k=E.get(Q);if(k?.root){E.delete(Q),E.set(Q,k);let r=x6(k.root,Boolean(k.truncated),U_);if(r)s_.current=r,m_.current=W,A_({loading:!1,error:null,payload:r});return}let m=s_.current,s=m_.current;A_({loading:!0,error:null,payload:s===W?m:null}),z2(W,A5,l).then((r)=>{if(H0.current!==O)return;let n={root:r?.root,truncated:Boolean(r?.truncated)};E.delete(Q),E.set(Q,n);while(E.size>P5){let N_=E.keys().next().value;if(!N_)break;E.delete(N_)}let g=x6(n.root,n.truncated,U_);s_.current=g,m_.current=W,A_({loading:!1,error:null,payload:g})}).catch((r)=>{if(H0.current!==O)return;A_({loading:!1,error:r?.message||"Failed to load folder size chart",payload:s===W?m:null})})},[W,P0,l,U_]);let z$=Boolean(S&&S.kind==="text"&&!P0&&(!S.size||S.size<=262144)),r$=z$?"Open in editor":S?.size>262144?"File too large to edit":"File is not editable";u(()=>{let O=b0.current;if(i_.current)i_.current.dispose(),i_.current=null;if(!O)return;if(O.innerHTML="",!W||P0||!S||S.error)return;let Q={path:W,content:typeof S.text==="string"?S.text:void 0,mtime:S.mtime,size:S.size,preview:S,mode:"view"},E=a_.resolve(Q)||a_.get("workspace-preview-default");if(!E)return;let k=E.mount(O,Q);return i_.current=k,()=>{if(i_.current===k)k.dispose(),i_.current=null;O.innerHTML=""}},[W,P0,S]);let t0=(O)=>{let Q=O?.target;if(Q instanceof Element)return Q;return Q?.parentElement||null},P$=(O)=>{return Boolean(O?.closest?.(".workspace-node-icon, .workspace-label-text"))},L$=D((O)=>{if(c0.current)clearTimeout(c0.current),c0.current=null;let E=t0(O)?.closest?.("[data-path]");if(!E)return;let k=E.dataset.path;if(E.dataset.type==="dir"||!k)return;if(A0.current===k)J0();p_.current?.(k)}).current,K$=D((O)=>{if(F0.current){F0.current=!1;return}let Q=t0(O),E=Q?.closest?.("[data-path]");if(e_.current?.focus?.(),!E)return;let k=E.dataset.path,m=E.dataset.type,s=Boolean(Q?.closest?.(".workspace-caret")),r=Boolean(Q?.closest?.("button"))||Boolean(Q?.closest?.("a"))||Boolean(Q?.closest?.("input")),n=H0.current===k,g=A0.current;if(g){if(g===k)return;J0()}let N_=m==="file"&&C0.current===k&&!s&&!r;if(n&&!s&&!r&&k!=="."&&!N_){if(c0.current)clearTimeout(c0.current);c0.current=setTimeout(()=>{c0.current=null,w$(k)},350);return}if(m==="dir"){if(C0.current=null,V(k),R(null),x(null),h(!1),!x_.current.has(k))P_.current?.(k);if(n&&!s)return;G((W$)=>{let B0=new Set(W$);if(B0.has(k))B0.delete(k);else B0.add(k);return B0})}else{C0.current=null,V(k);let V0=D_.current.get(k);if(V0)Q_.current?.(V0.path,V0);F_.current?.(k)}}).current,e0=D(()=>{t_.current="",X_.current(),Array.from(x_.current||[]).filter((Q)=>Q&&Q!==".").forEach((Q)=>P_.current?.(Q))}).current,G0=D(()=>{C0.current=null,V(null),R(null),x(null),h(!1)}).current,M$=D(()=>{z_((O)=>{let Q=!O;if(typeof window<"u")r_("workspaceShowHidden",String(Q));return o_.current=Q,K2(!0,Q).catch(()=>{}),t_.current="",X_.current?.(),Array.from(x_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>P_.current?.(k)),Q})}).current,b$=D((O)=>{if(t0(O)?.closest?.("[data-path]"))return;G0()}).current,_$=M(async(O)=>{if(!O)return;let Q=O.split("/").pop()||O;if(!window.confirm(`Delete "${Q}"? This cannot be undone.`))return;try{await T4(O);let k=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(H0.current===O)G0();P_.current?.(k),t(null)}catch(k){R((m)=>({...m||{},error:k.message||"Failed to delete file"}))}},[G0]),B$=M((O)=>{let Q=e_.current;if(!Q||!O||typeof CSS>"u"||typeof CSS.escape!=="function")return;Q.querySelector(`[data-path="${CSS.escape(O)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),C$=M((O)=>{let Q=p0;if(!Q||Q.length===0)return;let E=W?Q.findIndex((k)=>k.node.path===W):-1;if(O.key==="ArrowDown"){O.preventDefault();let k=Math.min(E+1,Q.length-1),m=Q[k];if(!m)return;if(V(m.node.path),m.node.type!=="dir")Q_.current?.(m.node.path,m.node),F_.current?.(m.node.path);else R(null),h(!1),x(null);B$(m.node.path);return}if(O.key==="ArrowUp"){O.preventDefault();let k=E<=0?0:E-1,m=Q[k];if(!m)return;if(V(m.node.path),m.node.type!=="dir")Q_.current?.(m.node.path,m.node),F_.current?.(m.node.path);else R(null),h(!1),x(null);B$(m.node.path);return}if(O.key==="ArrowRight"&&E>=0){let k=Q[E];if(k?.node?.type==="dir"&&!K.has(k.node.path))O.preventDefault(),P_.current?.(k.node.path),G((m)=>new Set([...m,k.node.path]));return}if(O.key==="ArrowLeft"&&E>=0){let k=Q[E];if(k?.node?.type==="dir"&&K.has(k.node.path))O.preventDefault(),G((m)=>{let s=new Set(m);return s.delete(k.node.path),s});return}if(O.key==="Enter"&&E>=0){O.preventDefault();let k=Q[E];if(!k)return;let m=k.node.path;if(k.node.type==="dir"){if(!x_.current.has(m))P_.current?.(m);G((r)=>{let n=new Set(r);if(n.has(m))n.delete(m);else n.add(m);return n}),R(null),x(null),h(!1)}else Q_.current?.(m,k.node),F_.current?.(m);return}if((O.key==="Delete"||O.key==="Backspace")&&E>=0){let k=Q[E];if(!k||k.node.type==="dir")return;O.preventDefault(),_$(k.node.path);return}if(O.key==="Escape")O.preventDefault(),G0()},[G0,_$,K,p0,B$,W]),a$=M((O)=>{let Q=t0(O),E=Q?.closest?.(".workspace-row");if(!E)return;let k=E.dataset.type,m=E.dataset.path;if(!m||m===".")return;if(A0.current===m)return;let s=O?.touches?.[0];if(!s)return;if($0.current={path:P$(Q)?m:null,dragging:!1,startX:s.clientX,startY:s.clientY},k!=="file")return;if(C_.current)clearTimeout(C_.current);C_.current=setTimeout(()=>{if(C_.current=null,$0.current?.dragging)return;_$(m)},600)},[_$]),D0=M(()=>{if(C_.current)clearTimeout(C_.current),C_.current=null;let O=$0.current;if(O?.dragging&&O.path){let Q=e.current||g_(),E=O0.current;if(typeof E==="function")E(O.path,Q)}$0.current={path:null,dragging:!1,startX:0,startY:0},C.current=0,B_(!1),o(null),S_(null),L0(),q$()},[g_,q$,S_,L0]),Y$=M((O)=>{let Q=$0.current,E=O?.touches?.[0];if(!E||!Q?.path){if(C_.current)clearTimeout(C_.current),C_.current=null;return}let k=Math.abs(E.clientX-Q.startX),m=Math.abs(E.clientY-Q.startY),s=k>8||m>8;if(s&&C_.current)clearTimeout(C_.current),C_.current=null;if(!Q.dragging&&s)Q.dragging=!0,B_(!0),o("move"),T0(Q.path);if(Q.dragging){O.preventDefault(),a0(E.clientX,E.clientY);let r=document.elementFromPoint(E.clientX,E.clientY),n=X$(r)||g_();if(e.current!==n)S_(n);Z0(n)}},[X$,g_,T0,a0,S_,Z0]),U$=D((O)=>{O.preventDefault();let Q=_0.current;if(!Q)return;let E=O.clientY,k=q0.current||280,m=O.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let s=E,r=(g)=>{s=g.clientY;let N_=Q.clientHeight-80,V0=Math.min(Math.max(k-(g.clientY-E),80),N_);Q.style.setProperty("--preview-height",`${V0}px`),q0.current=V0},n=()=>{let g=Q.clientHeight-80,N_=Math.min(Math.max(k-(s-E),80),g);q0.current=N_,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("previewHeight",String(Math.round(N_))),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",n)}).current,U=D((O)=>{O.preventDefault();let Q=_0.current;if(!Q)return;let E=O.touches[0];if(!E)return;let k=E.clientY,m=q0.current||280,s=O.currentTarget;s.classList.add("dragging"),document.body.style.userSelect="none";let r=(g)=>{let N_=g.touches[0];if(!N_)return;g.preventDefault();let V0=Q.clientHeight-80,W$=Math.min(Math.max(m-(N_.clientY-k),80),V0);Q.style.setProperty("--preview-height",`${W$}px`),q0.current=W$},n=()=>{s.classList.remove("dragging"),document.body.style.userSelect="",r_("previewHeight",String(Math.round(q0.current||m))),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",n),document.removeEventListener("touchcancel",n)};document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",n),document.addEventListener("touchcancel",n)}).current,I=async()=>{if(!W)return;try{let O=await C4(W);if(O.media_id)x(O.media_id)}catch(O){R((Q)=>({...Q||{},error:O.message||"Failed to attach"}))}},T=async()=>{if(!W||P0)return;await _$(W)},d=(O)=>{return Array.from(O?.dataTransfer?.types||[]).includes("Files")},V_=M((O)=>{if(!d(O))return;if(O.preventDefault(),C.current+=1,!M_.current)B_(!0);o("upload");let Q=r0(O)||g_();S_(Q),Z0(Q)},[g_,r0,S_,Z0]),L_=M((O)=>{if(!d(O))return;if(O.preventDefault(),O.dataTransfer)O.dataTransfer.dropEffect="copy";if(!M_.current)B_(!0);if(h_.current!=="upload")o("upload");let Q=r0(O)||g_();if(e.current!==Q)S_(Q);Z0(Q)},[g_,r0,S_,Z0]),b_=M((O)=>{if(!d(O))return;if(O.preventDefault(),C.current=Math.max(0,C.current-1),C.current===0)B_(!1),o(null),S_(null),L0()},[S_,L0]),N0=M(async(O,Q=".")=>{let E=Array.from(O||[]);if(E.length===0)return;let k=Q&&Q!==""?Q:".",m=k!=="."?k:"workspace root";k_(!0);try{let s=null;for(let r of E)try{s=await C2(r,k)}catch(n){let g=n?.status,N_=n?.code;if(g===409||N_==="file_exists"){let V0=r?.name||"file";if(!window.confirm(`"${V0}" already exists in ${m}. Overwrite?`))continue;s=await C2(r,k,{overwrite:!0})}else throw n}if(s?.path)C0.current=s.path,V(s.path),F_.current?.(s.path);P_.current?.(k)}catch(s){t(s.message||"Failed to upload file")}finally{k_(!1)}},[]),x0=M(async(O,Q)=>{if(!O)return;let E=D_.current?.get(O);if(!E)return;let k=Q&&Q!==""?Q:".",m=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(k===m)return;try{let r=(await S4(O,k))?.path||O;if(E.type==="dir")G((n)=>{let g=new Set;for(let N_ of n)if(N_===O)g.add(r);else if(N_.startsWith(`${O}/`))g.add(`${r}${N_.slice(O.length)}`);else g.add(N_);return g});if(V(r),E.type==="dir")R(null),h(!1),x(null);else F_.current?.(r);P_.current?.(m),P_.current?.(k)}catch(s){t(s?.message||"Failed to move entry")}},[]);O0.current=x0;let I_=M(async(O)=>{if(!d(O))return;O.preventDefault(),C.current=0,B_(!1),o(null),W_(null),L0();let Q=Array.from(O?.dataTransfer?.files||[]);if(Q.length===0)return;let E=e.current||r0(O)||g_();await N0(Q,E)},[g_,r0,N0]),v0=M((O)=>{if(O?.stopPropagation?.(),O_)return;let Q=O?.currentTarget?.dataset?.uploadTarget||".";K0.current=Q,z0.current?.click()},[O_]),G$=M(()=>{if(O_)return;let O=H0.current,Q=O?D_.current?.get(O):null;K0.current=Q?.type==="dir"?Q.path:".",z0.current?.click()},[O_]),Q$=M((O)=>{if(!O||O.button!==0)return;let Q=O.currentTarget;if(!Q||!Q.dataset)return;let E=Q.dataset.path;if(!E||E===".")return;if(A0.current===E)return;let k=t0(O);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!P$(k))return;O.preventDefault(),Q0.current={path:E,dragging:!1,startX:O.clientX,startY:O.clientY};let m=(r)=>{let n=Q0.current;if(!n?.path)return;let g=Math.abs(r.clientX-n.startX),N_=Math.abs(r.clientY-n.startY),V0=g>4||N_>4;if(!n.dragging&&V0)n.dragging=!0,F0.current=!0,B_(!0),o("move"),T0(n.path),a0(r.clientX,r.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(n.dragging){r.preventDefault(),a0(r.clientX,r.clientY);let W$=document.elementFromPoint(r.clientX,r.clientY),B0=X$(W$)||g_();if(e.current!==B0)S_(B0);Z0(B0)}},s=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",s);let r=Q0.current;if(r?.dragging&&r.path){let n=e.current||g_(),g=O0.current;if(typeof g==="function")g(r.path,n)}Q0.current={path:null,dragging:!1,startX:0,startY:0},C.current=0,B_(!1),o(null),S_(null),L0(),q$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{F0.current=!1},0)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",s)},[X$,g_,T0,a0,q$,S_,Z0,L0]),V$=M(async(O)=>{let Q=Array.from(O?.target?.files||[]);if(Q.length===0)return;let E=K0.current||".";if(await N0(Q,E),K0.current=".",O?.target)O.target.value=""},[N0]);return B`
        <aside
            class=${`workspace-sidebar${i?" workspace-drop-active":""}`}
            data-workspace-scale=${y_}
            ref=${_0}
            onDragEnter=${V_}
            onDragOver=${L_}
            onDragLeave=${b_}
            onDrop=${I_}
        >
            <input type="file" multiple style="display:none" ref=${z0} onChange=${V$} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${A$} title="New file" disabled=${O_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${e0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${l?" active":""}`}
                        onClick=${M$}
                        title=${l?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!l&&B`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${b$}>
                ${O_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${F&&B`<div class="workspace-loading">Loading…</div>`}
                ${__&&B`<div class="workspace-error">${__}</div>`}
                ${N&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${e_}
                        tabIndex="0"
                        onClick=${K$}
                        onDblClick=${L$}
                        onKeyDown=${C$}
                        onTouchStart=${a$}
                        onTouchEnd=${D0}
                        onTouchMove=${Y$}
                        onTouchCancel=${D0}
                    >
                        ${p0.map(({node:O,depth:Q})=>{let E=O.type==="dir",k=O.path===W,m=O.path===L,s=E&&K.has(O.path),r=Z_&&O.path===Z_,n=Array.isArray(O.children)&&O.children.length>0?O.children.length:Number(O.child_count)||0;return B`
                                <div
                                    key=${O.path}
                                    class=${`workspace-row${k?" selected":""}${r?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+Q*u0.indentPx}px`}}
                                    data-path=${O.path}
                                    data-type=${O.type}
                                    onMouseDown=${Q$}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${E?s?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${E?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${E?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${m?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${f_}
                                                value=${H}
                                                onInput=${(g)=>y(g?.target?.value||"")}
                                                onKeyDown=${(g)=>{if(g.key==="Enter")g.preventDefault(),s$();else if(g.key==="Escape")g.preventDefault(),J0()}}
                                                onBlur=${J0}
                                                onClick=${(g)=>g.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${O.name}</span></span>`}
                                    ${E&&!s&&n>0&&B`
                                        <span class="workspace-count">${n}</span>
                                    `}
                                    ${E&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${O.path}
                                            title="Upload files to this folder"
                                            onClick=${v0}
                                            disabled=${O_}
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
            ${W&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${U$} onTouchStart=${U}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${W}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${A$} title="New file" disabled=${O_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!P0&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>z$&&p_.current?.(W,S)}
                                    title=${r$}
                                    disabled=${!z$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${T}
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
                            ${P0?B`
                                    <button class="workspace-download" onClick=${G$}
                                        title="Upload files to this folder" disabled=${O_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${f4(W,l)}
                                        title="Download folder as zip" onClick=${(O)=>O.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${I} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${b&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${S?.error&&B`<div class="workspace-error">${S.error}</div>`}
                    ${P0&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${G_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${G_?.error&&B`<div class="workspace-error">${G_.error}</div>`}
                        ${G_?.payload&&G_.payload.segments?.length>0&&B`
                            <${M5} payload=${G_.payload} />
                        `}
                        ${G_?.payload&&(!G_.payload.segments||G_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${S&&!S.error&&!P0&&B`
                        <div class="workspace-preview-body" ref=${b0}></div>
                    `}
                    ${v&&B`
                        <div class="workspace-download-card">
                            <${b5} mediaId=${v} />
                        </div>
                    `}
                </div>
            `}
            ${$_&&B`
                <div class="workspace-drag-ghost" ref=${w0}>${$_.label}</div>
            `}
        </aside>
    `}var C5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,I5=/\.(csv|tsv)$/i,x5=/\.pdf$/i,S5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,h6=/\.drawio(\.xml|\.svg|\.png)?$/i;function i6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:z,onTogglePin:K,onTogglePreview:G,previewTabs:W,onToggleDock:V,dockVisible:L}){let[q,H]=f(null),y=D(null);u(()=>{if(!q)return;let F=(w)=>{if(w.type==="keydown"&&w.key!=="Escape")return;H(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[q]),u(()=>{let F=(w)=>{if(w.ctrlKey&&w.key==="Tab"){if(w.preventDefault(),!_.length)return;let b=_.findIndex((h)=>h.id===$);if(w.shiftKey){let h=_[(b-1+_.length)%_.length];j?.(h.id)}else{let h=_[(b+1)%_.length];j?.(h.id)}return}if((w.ctrlKey||w.metaKey)&&w.key==="w"){let b=document.querySelector(".editor-pane");if(b&&b.contains(document.activeElement)){if(w.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let S=M((F,w)=>{if(F.button===1){F.preventDefault(),Z?.(w);return}if(F.button===0)j?.(w)},[j,Z]),R=M((F,w)=>{F.preventDefault(),H({id:w,x:F.clientX,y:F.clientY})},[]),v=M((F)=>{F.preventDefault(),F.stopPropagation()},[]),x=M((F,w)=>{F.preventDefault(),F.stopPropagation(),Z?.(w)},[Z]);if(u(()=>{if(!$||!y.current)return;let F=y.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${y} role="tablist">
            ${_.map((F)=>B`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(w)=>S(w,F.id)}
                    onContextMenu=${(w)=>R(w,F.id)}
                >
                    ${F.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${F.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${v}
                        onClick=${(w)=>x(w,F.id)}
                        title=${F.dirty?"Unsaved changes":"Close"}
                        aria-label=${F.dirty?"Unsaved changes":`Close ${F.label}`}
                    >
                        ${F.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${L?" active":""}`}
                    onClick=${V}
                    title=${`${L?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${L?"Hide":"Show"} terminal`}
                    aria-pressed=${L?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${q&&B`
            <div class="tab-context-menu" style=${{left:q.x+"px",top:q.y+"px"}}>
                <button onClick=${()=>{Z?.(q.id),H(null)}}>Close</button>
                <button onClick=${()=>{N?.(q.id),H(null)}}>Close Others</button>
                <button onClick=${()=>{z?.(),H(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(q.id),H(null)}}>
                    ${_.find((F)=>F.id===q.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{G(q.id),H(null)}}>
                        ${W?.has(q.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${C5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(q.id),w=q.id.split("/").pop()||"document",b="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(w);window.open(b,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${I5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/csv-viewer/?path="+encodeURIComponent(q.id);window.open(F,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${x5.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/pdf-viewer/?path="+encodeURIComponent(q.id);window.open(F,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${S5.test(q.id)&&!h6.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/image-viewer/?path="+encodeURIComponent(q.id);window.open(F,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${h6.test(q.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(q.id);window.open(F,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var T5=400,U1=60,l6=220,Q1="mdPreviewHeight";function f5(){try{let _=localStorage.getItem(Q1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=U1?$:l6}catch{return l6}}function n6({getContent:_,path:$,onClose:j}){let[Z,N]=f(""),[z,K]=f(f5),G=D(null),W=D(null),V=D(""),L=D(_);return L.current=_,u(()=>{let y=()=>{let R=L.current?.()||"";if(R===V.current)return;V.current=R;try{let v=g0(R,null,{sanitize:!1});N(v)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};y();let S=setInterval(y,T5);return()=>clearInterval(S)},[]),u(()=>{if(G.current&&Z)J$(G.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(y)=>{y.preventDefault();let S=y.clientY,R=W.current?.offsetHeight||z,v=W.current?.parentElement,x=v?v.offsetHeight*0.7:500,F=y.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let w=(h)=>{let __=Math.min(Math.max(R-(h.clientY-S),U1),x);K(__)},b=()=>{F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(Q1,String(Math.round(W.current?.offsetHeight||z)))}catch{}document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",b)};document.addEventListener("mousemove",w),document.addEventListener("mouseup",b)}}
            onTouchStart=${(y)=>{y.preventDefault();let S=y.touches[0];if(!S)return;let R=S.clientY,v=W.current?.offsetHeight||z,x=W.current?.parentElement,F=x?x.offsetHeight*0.7:500,w=y.currentTarget;w.classList.add("dragging"),document.body.style.userSelect="none";let b=(__)=>{let t=__.touches[0];if(!t)return;__.preventDefault();let l=Math.min(Math.max(v-(t.clientY-R),U1),F);K(l)},h=()=>{w.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(Q1,String(Math.round(W.current?.offsetHeight||z)))}catch{}document.removeEventListener("touchmove",b),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)};document.addEventListener("touchmove",b,{passive:!1}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h)}}
        ></div>
        <div class="md-preview-panel" ref=${W} style=${{height:z+"px"}}>
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
                ref=${G}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function d6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let z=D(_);z.current=_;let K=D($);K.current=$;let G=D(j);G.current=j;let W=D(Z);W.current=Z,u(()=>{G.current();let V=new x2((q,H)=>z.current(q,H),(q)=>K.current(q),{chatJid:N});V.connect();let L=()=>{V.reconnectIfNeeded();let q=typeof document<"u"?document:null;if(!q||q.visibilityState==="visible")W.current?.()};return window.addEventListener("focus",L),document.addEventListener("visibilitychange",L),()=>{window.removeEventListener("focus",L),document.removeEventListener("visibilitychange",L),V.disconnect()}},[N])}function s6(){let[_,$]=f(!1),[j,Z]=f("default"),N=D(!1);u(()=>{let W=i$("notificationsEnabled",!1);if(N.current=W,$(W),typeof Notification<"u")Z(Notification.permission)},[]),u(()=>{N.current=_},[_]);let z=M(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let W=Notification.requestPermission();if(W&&typeof W.then==="function")return W;return Promise.resolve(W)}catch{return Promise.resolve("default")}},[]),K=M(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let V=await z();if(Z(V||"default"),V!=="granted"){N.current=!1,$(!1),r_("notificationsEnabled","false");return}}let W=!N.current;N.current=W,$(W),r_("notificationsEnabled",String(W))},[z]),G=M((W,V)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let L=new Notification(W,{body:V});return L.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:G}}var q2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function o6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=f(null),[z,K]=f(!1),G=D(!1),W=D(null),V=D(!1),L=D(null),q=D(null),H=D(0);u(()=>{G.current=z},[z]),u(()=>{q.current=Z},[Z]),u(()=>{H.current+=1,q.current=null,L.current=null,V.current=!1,G.current=!1,N(null),K(!1)},[j]);let y=M(async(v=null)=>{let x=H.current;try{if(v){let F=await L4(v,50,0,j);if(x!==H.current)return;N(F.posts),K(!1)}else{let F=await Z2(10,null,j);if(x!==H.current)return;N(F.posts),K(F.has_more)}}catch(F){if(x!==H.current)return;console.error("Failed to load posts:",F)}},[j]),S=M(async()=>{let v=H.current;try{let x=await Z2(10,null,j);if(v!==H.current)return;N((F)=>{if(!F||F.length===0)return x.posts;return q2([...x.posts,...F])}),K((F)=>F||x.has_more)}catch(x){if(v!==H.current)return;console.error("Failed to refresh timeline:",x)}},[j]),R=M(async(v={})=>{let x=H.current,F=q.current;if(!F||F.length===0)return;if(V.current)return;let{preserveScroll:w=!0,preserveMode:b="top",allowRepeat:h=!1}=v,__=(z_)=>{if(!w){z_();return}if(b==="top")$(z_);else _(z_)},l=F.slice().sort((z_,i)=>z_.id-i.id)[0]?.id;if(!Number.isFinite(l))return;if(!h&&L.current===l)return;V.current=!0,L.current=l;try{let z_=await Z2(10,l,j);if(x!==H.current)return;if(z_.posts.length>0)__(()=>{N((i)=>q2([...z_.posts,...i||[]])),K(z_.has_more)});else K(!1)}catch(z_){if(x!==H.current)return;console.error("Failed to load more posts:",z_)}finally{if(x===H.current)V.current=!1}},[j,_,$]);return u(()=>{W.current=R},[R]),{posts:Z,setPosts:N,hasMore:z,setHasMore:K,hasMoreRef:G,loadPosts:y,refreshTimeline:S,loadMore:R,loadMoreRef:W,loadingMoreRef:V,lastBeforeIdRef:L}}function r6(){let[_,$]=f(null),[j,Z]=f({text:"",totalLines:0}),[N,z]=f(""),[K,G]=f({text:"",totalLines:0}),[W,V]=f(null),[L,q]=f(null),[H,y]=f(null),S=D(null),R=D(0),v=D(!1),x=D(""),F=D(""),w=D(null),b=D(null),h=D(null),__=D(null),t=D(!1),l=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:z,agentThought:K,setAgentThought:G,pendingRequest:W,setPendingRequest:V,currentTurnId:L,setCurrentTurnId:q,steerQueuedTurnId:H,setSteerQueuedTurnId:y,lastAgentEventRef:S,lastSilenceNoticeRef:R,isAgentRunningRef:v,draftBufferRef:x,thoughtBufferRef:F,pendingRequestRef:w,stalledPostIdRef:b,currentTurnIdRef:h,steerQueuedTurnIdRef:__,thoughtExpandedRef:t,draftExpandedRef:l}}function a6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientX,y=$.current||280,S=L.currentTarget;S.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let R=H,v=(F)=>{R=F.clientX;let w=Math.min(Math.max(y+(F.clientX-H),160),600);q.style.setProperty("--sidebar-width",`${w}px`),$.current=w},x=()=>{let F=Math.min(Math.max(y+(R-H),160),600);$.current=F,S.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",r_("sidebarWidth",String(Math.round(F))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",x)}).current,z=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let y=H.clientX,S=$.current||280,R=L.currentTarget;R.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let v=(F)=>{let w=F.touches[0];if(!w)return;F.preventDefault();let b=Math.min(Math.max(S+(w.clientX-y),160),600);q.style.setProperty("--sidebar-width",`${b}px`),$.current=b},x=()=>{R.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.userSelect="",r_("sidebarWidth",String(Math.round($.current||S))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current,K=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientX,y=j.current||$.current||280,S=L.currentTarget;S.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let R=H,v=(F)=>{R=F.clientX;let w=Math.min(Math.max(y+(F.clientX-H),200),800);q.style.setProperty("--editor-width",`${w}px`),j.current=w},x=()=>{let F=Math.min(Math.max(y+(R-H),200),800);j.current=F,S.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("editorWidth",String(Math.round(F))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",x)}).current,G=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let y=H.clientX,S=j.current||$.current||280,R=L.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let v=(F)=>{let w=F.touches[0];if(!w)return;F.preventDefault();let b=Math.min(Math.max(S+(w.clientX-y),200),800);q.style.setProperty("--editor-width",`${b}px`),j.current=b},x=()=>{R.classList.remove("dragging"),document.body.style.userSelect="",r_("editorWidth",String(Math.round(j.current||S))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current,W=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.clientY,y=Z?.current||200,S=L.currentTarget;S.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let R=H,v=(F)=>{R=F.clientY;let w=Math.min(Math.max(y-(F.clientY-H),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${w}px`),Z)Z.current=w;window.dispatchEvent(new CustomEvent("dock-resize"))},x=()=>{let F=Math.min(Math.max(y-(R-H),100),window.innerHeight*0.5);if(Z)Z.current=F;S.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("dockHeight",String(Math.round(F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",x)}).current,V=D((L)=>{L.preventDefault();let q=_.current;if(!q)return;let H=L.touches[0];if(!H)return;let y=H.clientY,S=Z?.current||200,R=L.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let v=(F)=>{let w=F.touches[0];if(!w)return;F.preventDefault();let b=Math.min(Math.max(S-(w.clientY-y),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${b}px`),Z)Z.current=b;window.dispatchEvent(new CustomEvent("dock-resize"))},x=()=>{R.classList.remove("dragging"),document.body.style.userSelect="",r_("dockHeight",String(Math.round(Z?.current||S))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:W,handleDockSplitterTouchStart:V}}function t6({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=f(()=>c_.getTabs()),[N,z]=f(()=>c_.getActiveId()),[K,G]=f(()=>c_.getTabs().length>0);u(()=>{return c_.onChange((b,h)=>{Z(b),z(h),G(b.length>0)})},[]);let[W,V]=f(()=>new Set),L=M((b)=>{V((h)=>{let __=new Set(h);if(__.has(b))__.delete(b);else __.add(b);return __})},[]),q=M((b)=>{V((h)=>{if(!h.has(b))return h;let __=new Set(h);return __.delete(b),__})},[]),H=M((b)=>{if(!b)return;let h={path:b,mode:"edit"};try{if(!a_.resolve(h)){if(!a_.get("editor")){console.warn(`[openEditor] No pane handler for: ${b}`);return}}}catch(__){console.warn(`[openEditor] paneRegistry.resolve() error for "${b}":`,__)}c_.open(b)},[]),y=M(()=>{let b=c_.getActiveId();if(b){let h=c_.get(b);if(h?.dirty){if(!window.confirm(`"${h.label}" has unsaved changes. Close anyway?`))return}c_.close(b),q(b),$.current?.(b)}},[q]),S=M((b)=>{let h=c_.get(b);if(h?.dirty){if(!window.confirm(`"${h.label}" has unsaved changes. Close anyway?`))return}c_.close(b),q(b),$.current?.(b)},[q]),R=M((b)=>{c_.activate(b)},[]),v=M((b)=>{let h=c_.getTabs().filter((l)=>l.id!==b&&!l.pinned),__=h.filter((l)=>l.dirty).length;if(__>0){if(!window.confirm(`${__} unsaved tab${__>1?"s":""} will be closed. Continue?`))return}let t=h.map((l)=>l.id);c_.closeOthers(b),t.forEach((l)=>{q(l),$.current?.(l)})},[q]),x=M(()=>{let b=c_.getTabs().filter((t)=>!t.pinned),h=b.filter((t)=>t.dirty).length;if(h>0){if(!window.confirm(`${h} unsaved tab${h>1?"s":""} will be closed. Continue?`))return}let __=b.map((t)=>t.id);c_.closeAll(),__.forEach((t)=>{q(t),$.current?.(t)})},[q]),F=M((b)=>{c_.togglePin(b)},[]),w=M(()=>{let b=c_.getActiveId();if(b)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:b}}))},[]);return u(()=>{let b=(h)=>{let{oldPath:__,newPath:t,type:l}=h.detail||{};if(!__||!t)return;if(l==="dir"){for(let z_ of c_.getTabs())if(z_.path===__||z_.path.startsWith(`${__}/`)){let i=`${t}${z_.path.slice(__.length)}`;c_.rename(z_.id,i)}}else c_.rename(__,t)};return window.addEventListener("workspace-file-renamed",b),()=>window.removeEventListener("workspace-file-renamed",b)},[]),u(()=>{let b=(h)=>{if(c_.hasUnsaved())h.preventDefault(),h.returnValue=""};return window.addEventListener("beforeunload",b),()=>window.removeEventListener("beforeunload",b)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:W,openEditor:H,closeEditor:y,handleTabClose:S,handleTabActivate:R,handleTabCloseOthers:v,handleTabCloseAll:x,handleTabTogglePin:F,handleTabTogglePreview:L,revealInExplorer:w}}function F1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],z=Number(N);return Number.isFinite(z)?z:$}catch{return $}}var H1=F1("warning",30000),e6=F1("finalize",120000),J1=F1("refresh",30000),_8=30000;function $8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function j8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Z8(_=30000){let[,$]=f(0);u(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function D1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function N8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function S$(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function E1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),z=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(z||N>1||K)}function z8(_,$={}){if(S$($))return null;if(E1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:R5(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function K8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function Y8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function G8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function V8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function O2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function W8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function R5(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function k1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function y1(_){return String(_||"").trim()||"web:default"}function X8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function q8(_={}){return S$(_)&&E1(_)}function u5(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function v5(_={},$={}){if(!q8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=u5({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function O8(_={}){if(!q8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,z=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let q of N)$.clearTimeout?.(q);N.clear()},K=()=>{Z=0,v5({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},W=()=>{G();for(let q of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),G()},q);if(H!=null)N.add(H)}},V=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;W()},L=$.visualViewport;return W(),$.addEventListener("focus",W),$.addEventListener("pageshow",W),$.addEventListener("resize",W),$.addEventListener("orientationchange",W),j.addEventListener("visibilitychange",V),j.addEventListener("focusin",W,!0),L?.addEventListener?.("resize",W),L?.addEventListener?.("scroll",W),()=>{z(),$.removeEventListener("focus",W),$.removeEventListener("pageshow",W),$.removeEventListener("resize",W),$.removeEventListener("orientationchange",W),j.removeEventListener("visibilitychange",V),j.removeEventListener("focusin",W,!0),L?.removeEventListener?.("resize",W),L?.removeEventListener?.("scroll",W)}}function m5(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function N$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:m5($,j)}var g5=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function L8(_){return g5.has(String(_||"").trim())}function c5(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function B8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(c5(_),{detail:Z})),!0}var p5=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function U8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(S$({window:j,navigator:Z}))};N();let K=p5.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",N),()=>G.removeEventListener("change",N);if(typeof G.addListener==="function")return G.addListener(N),()=>G.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let G of K)G();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function Q8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var A1="piclaw_btw_session";function h5(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function i5(){let _=n0(A1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",z=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?z||"BTW stream interrupted. You can retry.":z,model:null,status:K}}catch{return null}}var F8=B4,H8=Q4,l5=H4,J8=y4,D8=w4,E8=J4,w1=N$(l0,"getAgentContext",null),n5=N$(l0,"getAgentModels",{current:null,models:[]}),d5=N$(l0,"getActiveChatAgents",{chats:[]}),k8=N$(l0,"getChatBranches",{chats:[]}),s5=N$(l0,"renameChatBranch",null),o5=N$(l0,"pruneChatBranch",null),r5=N$(l0,"getAgentQueueState",{count:0}),a5=N$(l0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),t5=N$(l0,"removeAgentQueueItem",{removed:!1}),e5=N$(l0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});a_.register(r4);a_.register(j1);a_.register($1);a_.register(Z1);a_.register(N1);a_.register(z1);a_.register(K1);a_.register(G1);a4();a_.register(e4);function _j({locationParams:_}){let $=d_(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),j=d_(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Z=d_(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),N=d_(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():$},[$,_]),[z,K]=f("disconnected"),[G,W]=f(()=>S$()),[V,L]=f(null),[q,H]=f(null),[y,S]=f(!1),[R,v]=f("current"),[x,F]=f([]),[w,b]=f([]),[h,__]=f(null),{agentStatus:t,setAgentStatus:l,agentDraft:z_,setAgentDraft:i,agentPlan:B_,setAgentPlan:T_,agentThought:o,setAgentThought:$_,pendingRequest:K_,setPendingRequest:Z_,currentTurnId:W_,setCurrentTurnId:O_,steerQueuedTurnId:k_,setSteerQueuedTurnId:G_,lastAgentEventRef:A_,lastSilenceNoticeRef:U_,isAgentRunningRef:j0,draftBufferRef:y_,thoughtBufferRef:v_,pendingRequestRef:x_,stalledPostIdRef:t_,currentTurnIdRef:Y_,steerQueuedTurnIdRef:a,thoughtExpandedRef:w_,draftExpandedRef:X_}=r6(),[D_,Q_]=f({}),[p_,F_]=f(null),[P_,_0]=f(null),[e_,f_]=f(!1),[z0,K0]=f(null),[C_,$0]=f([]),[Q0,E0]=f([]),[F0,q0]=f(null),[k0,s_]=f([]),[m_,b0]=f(!1),[i_,o_]=f(()=>i5()),y0=d_(()=>C_.find((X)=>X?.chat_jid===$)||null,[C_,$]),E_=d_(()=>Q0.find((X)=>X?.chat_jid===$)||y0||null,[y0,Q0,$]),C=E_?.root_chat_jid||y0?.root_chat_jid||$,e=h5(R),[M_,h_]=f(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),w0=k0.length,s0=D(new Set),Y0=D([]),O0=D(new Set),H0=D(0),A0=D({inFlight:!1,lastAttemptAt:0,turnId:null});s0.current=new Set(k0.map((X)=>X.row_id)),Y0.current=k0;let{notificationsEnabled:C0,notificationPermission:c0,toggleNotifications:o0,notify:T$}=s6(),[f$,R$]=f(()=>new Set),[g_,X$]=f(()=>i$("workspaceOpen",!0)),r0=D(null),{editorOpen:S_,tabStripTabs:L0,tabStripActiveId:Z0,previewTabs:a0,openEditor:T0,closeEditor:q$,handleTabClose:y$,handleTabActivate:J0,handleTabCloseOthers:w$,handleTabCloseAll:s$,handleTabTogglePin:u$,handleTabTogglePreview:A$,revealInExplorer:o$}=t6({onTabClosed:(X)=>r0.current?.(X)}),f0=D(null),R0=D(null),p0=D(null),I0=D(null),u0=a_.getDockPanes().length>0,[O$,P0]=f(!1),z$=M(()=>P0((X)=>!X),[]),r$=!j&&(S_||u0&&O$);u(()=>{let X=f0.current;if(!X)return;if(R0.current)R0.current.dispose(),R0.current=null;let Y=Z0;if(!Y)return;let J={path:Y,mode:"edit"},P=a_.resolve(J)||a_.get("editor");if(!P){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let A=P.mount(X,J);R0.current=A,A.onDirtyChange?.((j_)=>{c_.setDirty(Y,j_)}),A.onSaveRequest?.(()=>{}),A.onClose?.(()=>{q$()});let c=c_.getViewState(Y);if(c&&typeof A.restoreViewState==="function")requestAnimationFrame(()=>A.restoreViewState(c));if(typeof A.onViewStateChange==="function")A.onViewStateChange((j_)=>{c_.saveViewState(Y,j_)});return requestAnimationFrame(()=>A.focus()),()=>{if(R0.current===A)A.dispose(),R0.current=null}},[Z0,q$]),u(()=>{let X=(Y)=>{let J=Y.detail?.path;if(J)T0(J)};return document.addEventListener("office-viewer:open-tab",X),document.addEventListener("drawio:open-tab",X),()=>{document.removeEventListener("office-viewer:open-tab",X),document.removeEventListener("drawio:open-tab",X)}},[T0]),u(()=>{let X=p0.current;if(I0.current)I0.current.dispose(),I0.current=null;if(!X||!u0||!O$)return;let Y=a_.getDockPanes()[0];if(!Y){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=Y.mount(X,{mode:"view"});return I0.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(I0.current===J)J.dispose(),I0.current=null}},[u0,O$]);let[t0,P$]=f({name:"You",avatar_url:null,avatar_background:null}),L$=D(!1),K$=D(!1),e0=D(null),G0=D($),M$=D(new Map),b$=D($),_$=D(0),B$=D(0),C$=D({}),a$=D({name:null,avatar_url:null}),D0=D({currentHashtag:null,searchQuery:null}),Y$=D(null),U$=D(null),U=D(0),I=D(0),T=D(0),d=D(null),V_=D(null),L_=D(null),b_=D(null),N0=D(0),x0=D({title:null,avatarBase:null}),I_=D(null),v0=M(()=>{if(I_.current)clearTimeout(I_.current),I_.current=null;__(null)},[]);Z8(30000),u(()=>{return A3()},[]),u(()=>{return U8(W)},[]),u(()=>{r_("workspaceOpen",String(g_))},[g_]),u(()=>{return O8()},[]),u(()=>{return()=>{v0()}},[v0]),u(()=>{if(!i_){r_(A1,"");return}r_(A1,JSON.stringify({question:i_.question||"",answer:i_.answer||"",thinking:i_.thinking||"",error:i_.error||null,status:i_.status||"success"}))},[i_]),u(()=>{C$.current=D_||{}},[D_]),u(()=>{G0.current=$},[$]),u(()=>{a$.current=t0||{name:"You",avatar_url:null,avatar_background:null}},[t0]);let G$=M((X,Y,J=null)=>{if(typeof document>"u")return;let P=(X||"").trim()||"PiClaw";if(x0.current.title!==P){document.title=P;let p=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(p&&p.getAttribute("content")!==P)p.setAttribute("content",P);x0.current.title=P}let A=document.getElementById("dynamic-favicon");if(!A)return;let c=A.getAttribute("data-default")||A.getAttribute("href")||"/favicon.ico",j_=Y||c,H_=Y?`${j_}|${J||""}`:j_;if(x0.current.avatarBase!==H_){let p=Y?`${j_}${j_.includes("?")?"&":"?"}v=${J||Date.now()}`:j_;A.setAttribute("href",p),x0.current.avatarBase=H_}},[]),Q$=M((X)=>{if(!X)return;F((Y)=>Y.includes(X)?Y:[...Y,X])},[]),V$=M((X)=>{F((Y)=>Y.filter((J)=>J!==X))},[]);r0.current=V$;let O=M(()=>{F([])},[]),Q=M((X,Y=null,J="info",P=3000)=>{v0(),__({title:X,detail:Y||null,kind:J||"info"}),I_.current=setTimeout(()=>{__((A)=>A?.title===X?null:A)},P)},[v0]),E=M((X)=>{let Y=N8(X,{editorOpen:S_,resolvePane:(J)=>a_.resolve(J)});if(Y.kind==="open"){T0(Y.path);return}if(Y.kind==="toast")Q(Y.title,Y.detail,Y.level)},[S_,T0,Q]),k=M(()=>{let X=Z0;if(X)Q$(X)},[Z0,Q$]),m=M((X)=>{if(!X)return;b((Y)=>Y.includes(X)?Y:[...Y,X])},[]),s=M(async(X,Y=null)=>{let J=(A)=>{A.scrollIntoView({behavior:"smooth",block:"center"}),A.classList.add("post-highlight"),setTimeout(()=>A.classList.remove("post-highlight"),2000)},P=document.getElementById("post-"+X);if(P){J(P);return}try{let A=typeof Y==="string"&&Y.trim()?Y.trim():$,j_=(await U4(X,A))?.thread?.[0];if(!j_)return;U0((H_)=>{if(!H_)return[j_];if(H_.some((p)=>p.id===j_.id))return H_;return[...H_,j_]}),requestAnimationFrame(()=>{setTimeout(()=>{let H_=document.getElementById("post-"+X);if(H_)J(H_)},50)})}catch(A){console.error("[scrollToMessage] Failed to fetch message",X,A)}},[$]),r=M((X)=>{b((Y)=>Y.filter((J)=>J!==X))},[]),n=M(()=>{b([])},[]),g=M((X={})=>{let Y=Date.now();if(A_.current=Y,X.running)j0.current=!0,b0((J)=>J?J:!0);if(X.clearSilence)U_.current=0},[b0]),N_=M(()=>{if(b_.current)clearTimeout(b_.current),b_.current=null;N0.current=0},[]);u(()=>()=>{N_()},[N_]);let V0=M(()=>{N_(),l((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:Y,lastActivity:J,...P}=X;return P})},[N_]),W$=M((X)=>{if(!X)return;N_();let Y=Date.now();N0.current=Y,l({type:X.type||"active",last_activity:!0}),b_.current=setTimeout(()=>{if(N0.current!==Y)return;l((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},_8)},[N_]),B0=M(()=>{j0.current=!1,b0(!1),A_.current=null,U_.current=0,y_.current="",v_.current="",x_.current=null,V_.current=null,Y_.current=null,a.current=null,e0.current=null,A0.current={inFlight:!1,lastAttemptAt:0,turnId:null},N_(),O_(null),G_(null),w_.current=!1,X_.current=!1},[N_,O_,G_,b0]),v$=M((X)=>{if(!X8({remainingQueueCount:X,currentTurnId:Y_.current,isAgentTurnActive:m_}))return;a.current=null,G_(null)},[m_,G_]),P1=M(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),L2=M(()=>({agentStatus:t,agentDraft:z_?{...z_}:{text:"",totalLines:0},agentPlan:B_||"",agentThought:o?{...o}:{text:"",totalLines:0},pendingRequest:K_,currentTurnId:W_,steerQueuedTurnId:k_,isAgentTurnActive:Boolean(m_),followupQueueItems:Array.isArray(k0)?k0.map((X)=>({...X})):[],activeModel:p_,activeThinkingLevel:P_,supportsThinking:Boolean(e_),activeModelUsage:z0,contextUsage:F0,isAgentRunning:Boolean(j0.current),wasAgentActive:Boolean(K$.current),draftBuffer:y_.current||"",thoughtBuffer:v_.current||"",lastAgentEvent:A_.current||null,lastSilenceNotice:U_.current||0,lastAgentResponse:V_.current||null,currentTurnIdRef:Y_.current||null,steerQueuedTurnIdRef:a.current||null,thoughtExpanded:Boolean(w_.current),draftExpanded:Boolean(X_.current),agentStatusRef:e0.current||null,silentRecovery:{...A0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[p_,z0,P_,z_,B_,t,o,F0,W_,k0,m_,K_,k_,e_]),M1=M((X)=>{let Y=X||P1();N_(),j0.current=Boolean(Y.isAgentRunning),K$.current=Boolean(Y.wasAgentActive),b0(Boolean(Y.isAgentTurnActive)),A_.current=Y.lastAgentEvent||null,U_.current=Number(Y.lastSilenceNotice||0),y_.current=Y.draftBuffer||"",v_.current=Y.thoughtBuffer||"",x_.current=Y.pendingRequest||null,V_.current=Y.lastAgentResponse||null,Y_.current=Y.currentTurnIdRef||null,a.current=Y.steerQueuedTurnIdRef||null,e0.current=Y.agentStatusRef||null,A0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},w_.current=Boolean(Y.thoughtExpanded),X_.current=Boolean(Y.draftExpanded),l(Y.agentStatus||null),i(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),T_(Y.agentPlan||""),$_(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),Z_(Y.pendingRequest||null),O_(Y.currentTurnId||null),G_(Y.steerQueuedTurnId||null),s_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((J)=>({...J})):[]),F_(Y.activeModel||null),_0(Y.activeThinkingLevel||null),f_(Boolean(Y.supportsThinking)),K0(Y.activeModelUsage??null),q0(Y.contextUsage??null)},[N_,P1,O_,s_,b0,G_]),F$=M((X)=>{if(!X)return;if(Y_.current===X)return;Y_.current=X,A0.current={inFlight:!1,lastAttemptAt:0,turnId:X},O_(X),a.current=null,G_(null),y_.current="",v_.current="",i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null),x_.current=null,V_.current=null,w_.current=!1,X_.current=!1},[O_,G_]),b1=M((X)=>{if(typeof document<"u"){let p=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&p)return}let Y=V_.current;if(!Y||!Y.post)return;if(X&&Y.turnId&&Y.turnId!==X)return;let J=Y.post;if(J.id&&d.current===J.id)return;let P=String(J?.data?.content||"").trim();if(!P)return;d.current=J.id||d.current,V_.current=null;let A=P.replace(/\s+/g," ").slice(0,200),c=C$.current||{},H_=(J?.data?.agent_id?c[J.data.agent_id]:null)?.name||"Pi";T$(H_,A)},[T$]),y8=M(async(X,Y)=>{if(X!=="thought"&&X!=="draft")return;let J=Y_.current;if(X==="thought"){if(w_.current=Y,J)try{await D8(J,"thought",Y)}catch(P){console.warn("Failed to update thought visibility:",P)}if(!Y)return;try{let P=J?await J8(J,"thought"):null;if(P?.text)v_.current=P.text;$_((A)=>({...A||{text:"",totalLines:0},fullText:v_.current||A?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:A?.totalLines||0}))}catch(P){console.warn("Failed to fetch full thought:",P)}return}if(X_.current=Y,J)try{await D8(J,"draft",Y)}catch(P){console.warn("Failed to update draft visibility:",P)}if(!Y)return;try{let P=J?await J8(J,"draft"):null;if(P?.text)y_.current=P.text;i((A)=>({...A||{text:"",totalLines:0},fullText:y_.current||A?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:A?.totalLines||0}))}catch(P){console.warn("Failed to fetch full draft:",P)}},[]),s2=D(null),o2=M(()=>{let X=Y$.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);s2.current=o2;let w8=M((X)=>{let Y=Y$.current;if(!Y||typeof X!=="function"){X?.();return}let{currentHashtag:J,searchQuery:P}=D0.current||{},A=!(P&&!J),c=A?Y.scrollHeight-Y.scrollTop:Y.scrollTop;X(),requestAnimationFrame(()=>{let j_=Y$.current;if(!j_)return;if(A){let H_=Math.max(j_.scrollHeight-c,0);j_.scrollTop=H_}else{let H_=Math.max(j_.scrollHeight-j_.clientHeight,0),p=Math.min(c,H_);j_.scrollTop=p}})},[]),t$=M((X)=>{let Y=Y$.current;if(!Y||typeof X!=="function"){X?.();return}let J=Y.scrollTop;X(),requestAnimationFrame(()=>{let P=Y$.current;if(!P)return;let A=Math.max(P.scrollHeight-P.clientHeight,0);P.scrollTop=Math.min(J,A)})},[]),A8="Queued as a follow-up (one-at-a-time).",P8="⁣",C1=M((X)=>{if(!X||!Array.isArray(X))return X;let Y=s0.current,J=new Set(Y),P=X.filter((A)=>{if(J.has(A?.id))return!1;if(A?.data?.is_bot_message){let c=A?.data?.content;if(c===A8||c===P8)return!1}return!0});return P.length===X.length?X:P},[]),{posts:I1,setPosts:U0,hasMore:M8,setHasMore:B2,hasMoreRef:x1,loadPosts:$$,refreshTimeline:M0,loadMore:b8,loadMoreRef:r2}=o6({preserveTimelineScroll:w8,preserveTimelineScrollTop:t$,chatJid:$}),m$=d_(()=>C1(I1),[I1,k0,C1]),U2=M(()=>{let X=t_.current;if(!X)return;U0((Y)=>Y?Y.filter((J)=>J.id!==X):Y),t_.current=null},[U0]),{handleSplitterMouseDown:C8,handleSplitterTouchStart:I8,handleEditorSplitterMouseDown:x8,handleEditorSplitterTouchStart:S8,handleDockSplitterMouseDown:T8,handleDockSplitterTouchStart:f8}=a6({appShellRef:U$,sidebarWidthRef:U,editorWidthRef:I,dockHeightRef:T}),S1=M(()=>{if(!j0.current)return;j0.current=!1,U_.current=0,A_.current=null,Y_.current=null,O_(null),w_.current=!1,X_.current=!1;let X=(y_.current||"").trim();if(y_.current="",v_.current="",i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null),x_.current=null,V_.current=null,!X){l({type:"error",title:"Response stalled - No content received"});return}let J=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,P=Date.now(),A=new Date().toISOString(),c={id:P,timestamp:A,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};t_.current=P,U0((j_)=>j_?q2([...j_,c]):[c]),s2.current?.(),l(null)},[O_]);u(()=>{D0.current={currentHashtag:V,searchQuery:q}},[V,q]);let R_=M(()=>{let X=++H0.current,Y=$;r5(Y).then((J)=>{if(X!==H0.current)return;if(G0.current!==Y)return;let P=O0.current,A=Array.isArray(J?.items)?J.items.map((c)=>({...c})).filter((c)=>!P.has(c.row_id)):[];if(A.length){s_((c)=>{if(c.length===A.length&&c.every((j_,H_)=>j_.row_id===A[H_].row_id))return c;return A});return}P.clear(),v$(0),s_((c)=>c.length===0?c:[])}).catch(()=>{if(X!==H0.current)return;if(G0.current!==Y)return;s_((J)=>J.length===0?J:[])})},[v$,$,s_]),h0=M(async()=>{let X=$;try{let Y=await w1(X);if(G0.current!==X)return;if(Y)q0(Y)}catch(Y){if(G0.current!==X)return;console.warn("Failed to fetch agent context:",Y)}},[$]),i0=M(async()=>{let X=$;try{let Y=await E8(X);if(G0.current!==X)return null;if(!Y||Y.status!=="active"||!Y.data){if(K$.current){let{currentHashtag:A,searchQuery:c}=D0.current||{};if(!A&&!c)M0()}return K$.current=!1,B0(),e0.current=null,l(null),i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null),x_.current=null,Y??null}K$.current=!0;let J=Y.data;e0.current=J;let P=J.turn_id||J.turnId;if(P)F$(P);if(g({running:!0,clearSilence:!0}),V0(),l(J),Y.thought&&Y.thought.text)$_((A)=>{if(A&&A.text&&A.text.length>=Y.thought.text.length)return A;return v_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)i((A)=>{if(A&&A.text&&A.text.length>=Y.draft.text.length)return A;return y_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[B0,V0,g,M0,F$]),a2=M(async()=>{if(!j0.current)return null;if(x_.current)return null;let X=Y_.current||null,Y=A0.current,J=Date.now();if(Y.inFlight)return null;if(Y.turnId===X&&J-Y.lastAttemptAt<J1)return null;Y.inFlight=!0,Y.lastAttemptAt=J,Y.turnId=X;try{let{currentHashtag:P,searchQuery:A}=D0.current||{};if(!P&&!A)await M0();return await R_(),await i0()}finally{Y.inFlight=!1}},[i0,R_,M0]);u(()=>{let X=Math.min(1000,Math.max(100,Math.floor(H1/2))),Y=setInterval(()=>{if(!j0.current)return;if(x_.current)return;let J=A_.current;if(!J)return;let P=Date.now(),A=P-J,c=G2(e0.current);if(A>=e6){if(!c)l({type:"waiting",title:"Re-syncing after a quiet period…"});a2();return}if(A>=H1){if(P-U_.current>=J1){if(!c){let j_=Math.floor(A/1000);l({type:"waiting",title:`Waiting for model… No events for ${j_}s`})}U_.current=P,a2()}}},X);return()=>clearInterval(Y)},[a2]);let R8=M((X)=>{if(K(X),X!=="connected"){l(null),i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null),x_.current=null,B0();return}if(!L$.current){L$.current=!0,i0(),h0();return}let{currentHashtag:Y,searchQuery:J}=D0.current;if(!Y&&!J)M0();i0(),R_(),h0()},[B0,M0,i0,R_,h0]),u8=M(async(X)=>{L(X),U0(null),await $$(X)},[$$]),v8=M(async()=>{L(null),H(null),U0(null),await $$()},[$$]),m8=M(async(X,Y=R)=>{if(!X||!X.trim())return;let J=Y==="root"||Y==="all"?Y:"current";v(J),H(X.trim()),L(null),U0(null);try{let P=await F8(X.trim(),50,0,$,J,C);U0(P.results),B2(!1)}catch(P){console.error("Failed to search:",P),U0([])}},[$,C,R]),g8=M(()=>{S(!0),H(null),L(null),v("current"),U0([])},[]),c8=M(()=>{S(!1),H(null),$$()},[$$]),jj=M(()=>{},[]),p8=M(async(X)=>{if(!X)return;let Y=X.id,J=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():$,P=m$?.filter((c)=>c?.data?.thread_id===Y&&c?.id!==Y).length||0;if(P>0){if(!window.confirm(`Delete this message and its ${P} replies?`))return}let A=(c)=>{if(!c.length)return;R$((H_)=>{let p=new Set(H_);return c.forEach((q_)=>p.add(q_)),p}),setTimeout(()=>{if(t$(()=>{U0((H_)=>H_?H_.filter((p)=>!c.includes(p.id)):H_)}),R$((H_)=>{let p=new Set(H_);return c.forEach((q_)=>p.delete(q_)),p}),x1.current)r2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let c=await H8(Y,P>0,J);if(c?.ids?.length)A(c.ids)}catch(c){let j_=c?.message||"";if(P===0&&j_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let p=await H8(Y,!0,J);if(p?.ids?.length)A(p.ids);return}console.error("Failed to delete post:",c),alert(`Failed to delete message: ${j_}`)}},[$,m$,t$]),T1=M(async()=>{try{let X=await l5();Q_($8(X));let Y=X?.user||{};P$((P)=>{let A=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",c=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,j_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(P.name===A&&P.avatar_url===c&&P.avatar_background===j_)return P;return{name:A,avatar_url:c,avatar_background:j_}});let J=(X?.agents||[]).find((P)=>P.id==="default");G$(J?.name,J?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=$,Y=await w1(X);if(G0.current!==X)return;if(Y)q0(Y)}catch{}},[G$,$]);u(()=>{T1();let X=l$("sidebarWidth",null),Y=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(U.current=Y,U$.current)U$.current.style.setProperty("--sidebar-width",`${Y}px`)},[T1]);let t2=m_||t!==null,f1=M((X)=>{if(!X||typeof X!=="object")return;let Y=X.agent_id;if(!Y)return;let{agent_name:J,agent_avatar:P}=X;if(!J&&P===void 0)return;let A=C$.current?.[Y]||{id:Y},c=A.name||null,j_=A.avatar_url??A.avatarUrl??A.avatar??null,H_=!1,p=!1;if(J&&J!==A.name)c=J,p=!0;if(P!==void 0){let q_=typeof P==="string"?P.trim():null,l_=typeof j_==="string"?j_.trim():null,J_=q_||null;if(J_!==(l_||null))j_=J_,H_=!0}if(!p&&!H_)return;if(Q_((q_)=>{let J_={...q_[Y]||{id:Y}};if(p)J_.name=c;if(H_)J_.avatar_url=j_;return{...q_,[Y]:J_}}),Y==="default")G$(c,j_,H_?Date.now():null)},[G$]),R1=M((X)=>{if(!X||typeof X!=="object")return;let Y=X.user_name??X.userName,J=X.user_avatar??X.userAvatar,P=X.user_avatar_background??X.userAvatarBackground;if(Y===void 0&&J===void 0&&P===void 0)return;P$((A)=>{let c=typeof Y==="string"&&Y.trim()?Y.trim():A.name||"You",j_=J===void 0?A.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,H_=P===void 0?A.avatar_background:typeof P==="string"&&P.trim()?P.trim():null;if(A.name===c&&A.avatar_url===j_&&A.avatar_background===H_)return A;return{name:c,avatar_url:j_,avatar_background:H_}})},[]),e2=M((X)=>{if(!X||typeof X!=="object")return;let Y=X.model??X.current;if(Y!==void 0)F_(Y);if(X.thinking_level!==void 0)_0(X.thinking_level??null);if(X.supports_thinking!==void 0)f_(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)K0(X.provider_usage??null)},[]),e$=M(()=>{let X=$;n5(X).then((Y)=>{if(G0.current!==X)return;if(Y)e2(Y)}).catch(()=>{})},[e2,$]),m0=M(()=>{d5().then((X)=>{let Y=Array.isArray(X?.chats)?X.chats.filter((J)=>J&&typeof J.agent_name==="string"&&J.agent_name.trim()):[];$0(Y)}).catch(()=>{})},[]),S0=M(()=>{k8(C).then((X)=>{let Y=Array.isArray(X?.chats)?X.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];E0(Y)}).catch(()=>{})},[C]),h8=M((X)=>{let Y=X?.row_id;if(Y==null)return;O0.current.add(Y),s_((J)=>J.filter((P)=>P?.row_id!==Y)),a5(Y,y1($)).then(()=>{R_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),Q("Failed to steer message","The queued message could not be sent as steering.","warning"),O0.current.delete(Y),R_()})},[$,R_,s_,Q]),i8=M((X)=>{let Y=X?.row_id;if(Y==null)return;let J=Y0.current.filter((P)=>P?.row_id!==Y).length;O0.current.add(Y),v$(J),s_((P)=>P.filter((A)=>A?.row_id!==Y)),t5(Y,y1($)).then(()=>{R_()}).catch((P)=>{console.warn("[queue] Failed to remove queued item:",P),Q("Failed to remove message","The queued message could not be removed.","warning"),O0.current.delete(Y),R_()})},[v$,$,R_,s_,Q]),_4=M((X)=>{if(!X||typeof X!=="object")return;if(m0(),S0(),X?.queued==="followup"||X?.queued==="steer"){R_();return}let Y=X?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))R_()},[m0,S0,R_]),$4=M(()=>{if(L_.current)L_.current.abort(),L_.current=null;o_(null)},[]),Q2=M(async(X)=>{let Y=String(X||"").trim();if(!Y)return Q("BTW needs a question","Usage: /btw <question>","warning"),!0;if(L_.current)L_.current.abort();let J=new AbortController;L_.current=J,o_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let P=await e5(Y,{signal:J.signal,chatJid:u3($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(A,c)=>{if(A==="side_prompt_start")o_((j_)=>j_?{...j_,status:"running"}:j_)},onThinkingDelta:(A)=>{o_((c)=>c?{...c,thinking:`${c.thinking||""}${A||""}`}:c)},onTextDelta:(A)=>{o_((c)=>c?{...c,answer:`${c.answer||""}${A||""}`}:c)}});if(L_.current!==J)return!0;o_((A)=>A?{...A,answer:P?.result||A.answer||"",thinking:P?.thinking||A.thinking||"",model:P?.model||null,status:"success",error:null}:A)}catch(P){if(J.signal.aborted)return!0;o_((A)=>A?{...A,status:"error",error:P?.payload?.error||P?.message||"BTW request failed."}:A)}finally{if(L_.current===J)L_.current=null}return!0},[$,Q]),l8=M(async({content:X})=>{let Y=R3(X);if(!Y)return!1;if(Y.type==="help")return Q("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return $4(),Q("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Q2(Y.question),!0;return!1},[$4,Q2,Q]),n8=M(()=>{if(i_?.question)Q2(i_.question)},[i_,Q2]),d8=M(async()=>{let X=g3(i_);if(!X)return;try{let Y=await p$("default",X,null,[],t2?"queue":null,$);_4(Y),Q(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){Q("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[i_,_4,t2,Q]),_2=M(()=>{e$(),m0(),S0(),R_(),h0()},[e$,m0,S0,R_,h0]);u(()=>{_2();let X=setInterval(()=>{e$(),m0(),S0(),R_()},60000);return()=>clearInterval(X)},[_2,e$,m0,S0,R_]),u(()=>{S0()},[S0]),u(()=>{let X=!1;if(U0(null),V)return $$(V),()=>{X=!0};if(q)return F8(q,50,0,$,R,C).then((Y)=>{if(X)return;U0(Y.results),B2(!1)}).catch((Y)=>{if(X)return;console.error("Failed to search:",Y),U0([]),B2(!1)}),()=>{X=!0};return $$(),()=>{X=!0}},[$,V,q,R,C,$$,B2,U0]),u(()=>{let X=b$.current||$;M$.current.set(X,L2())},[$,L2]),u(()=>{let X=b$.current||$;if(X===$)return;M$.current.set(X,L2()),b$.current=$,O0.current.clear(),M1(M$.current.get($)||null),R_(),i0(),h0()},[$,i0,h0,R_,M1,L2]);let s8=M(()=>{let{currentHashtag:X,searchQuery:Y}=D0.current||{};if(!X&&!Y)M0();_2()},[_2,M0]),j4=M((X,Y)=>{let J=Y?.turn_id,P=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,c=P?P===$:X==="connected"||X==="workspace_update";if(c)f1(Y),R1(Y);if(X==="ui_theme"){P3(Y);return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))V0()}if(X==="connected"){l(null),i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null),x_.current=null,B0();let p=$;E8(p).then((J_)=>{if(G0.current!==p)return;if(!J_||J_.status!=="active"||!J_.data)return;let g$=J_.data,u1=g$.turn_id||g$.turnId;if(u1)F$(u1);if(g({clearSilence:!0}),W$(g$),J_.thought&&J_.thought.text)v_.current=J_.thought.text,$_({text:J_.thought.text,totalLines:J_.thought.totalLines||0});if(J_.draft&&J_.draft.text)y_.current=J_.draft.text,i({text:J_.draft.text,totalLines:J_.draft.totalLines||0})}).catch((J_)=>{console.warn("Failed to fetch agent status:",J_)});let{currentHashtag:q_,searchQuery:l_}=D0.current||{};if(!q_&&!l_)M0();_2();return}if(X==="agent_status"){if(!c){if(Y?.type==="done"||Y?.type==="error")m0(),S0();return}if(Y.type==="done"||Y.type==="error"){if(J&&Y_.current&&J!==Y_.current)return;if(Y.type==="done"){b1(J||Y_.current);let{currentHashtag:p,searchQuery:q_}=D0.current||{};if(!p&&!q_)M0();if(Y.context_usage)q0(Y.context_usage)}if(K$.current=!1,B0(),O0.current.clear(),m0(),R_(),i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null),Y.type==="error")l({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(J)F$(J);if(g({running:!0,clearSilence:!0}),Y.type==="thinking")y_.current="",v_.current="",i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0});e0.current=Y,l((p)=>{if(p&&p.type===Y.type&&p.title===Y.title)return p;return Y})}return}if(X==="agent_steer_queued"){if(!c)return;if(J&&Y_.current&&J!==Y_.current)return;let p=J||Y_.current;if(!p)return;a.current=p,G_(p);return}if(X==="agent_followup_queued"){if(!c)return;let p=Y?.row_id,q_=Y?.content;if(p!=null&&typeof q_==="string"&&q_.trim())s_((l_)=>{if(l_.some((J_)=>J_?.row_id===p))return l_;return[...l_,{row_id:p,content:q_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});R_();return}if(X==="agent_followup_consumed"){if(!c)return;let p=Y?.row_id;if(p!=null){let q_=Y0.current.filter((l_)=>l_.row_id!==p).length;v$(q_),s_((l_)=>l_.filter((J_)=>J_.row_id!==p))}R_(),M0();return}if(X==="agent_followup_removed"){if(!c)return;let p=Y?.row_id;if(p!=null){let q_=Y0.current.filter((l_)=>l_.row_id!==p).length;O0.current.add(p),v$(q_),s_((l_)=>l_.filter((J_)=>J_.row_id!==p))}R_();return}if(X==="agent_draft_delta"){if(!c)return;if(J&&Y_.current&&J!==Y_.current)return;if(J&&!Y_.current)F$(J);if(g({running:!0,clearSilence:!0}),Y?.reset)y_.current="";if(Y?.delta)y_.current+=Y.delta;let p=Date.now();if(!_$.current||p-_$.current>=100){_$.current=p;let q_=y_.current,l_=D1(q_);if(X_.current)i((J_)=>({text:J_?.text||"",totalLines:l_,fullText:q_}));else i({text:q_,totalLines:l_})}return}if(X==="agent_draft"){if(!c)return;if(J&&Y_.current&&J!==Y_.current)return;if(J&&!Y_.current)F$(J);g({running:!0,clearSilence:!0});let p=Y.text||"",q_=Y.mode||(Y.kind==="plan"?"replace":"append"),l_=Number.isFinite(Y.total_lines)?Y.total_lines:p?p.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(q_==="replace")T_(p);else T_((J_)=>(J_||"")+p);else if(!X_.current)y_.current=p,i({text:p,totalLines:l_});return}if(X==="agent_thought_delta"){if(!c)return;if(J&&Y_.current&&J!==Y_.current)return;if(J&&!Y_.current)F$(J);if(g({running:!0,clearSilence:!0}),Y?.reset)v_.current="";if(typeof Y?.delta==="string")v_.current+=Y.delta;let p=Date.now();if(w_.current&&(!B$.current||p-B$.current>=100)){B$.current=p;let q_=v_.current;$_((l_)=>({text:l_?.text||"",totalLines:D1(q_),fullText:q_}))}return}if(X==="agent_thought"){if(!c)return;if(J&&Y_.current&&J!==Y_.current)return;if(J&&!Y_.current)F$(J);g({running:!0,clearSilence:!0});let p=Y.text||"",q_=Number.isFinite(Y.total_lines)?Y.total_lines:p?p.replace(/\r\n/g,`
`).split(`
`).length:0;if(!w_.current)v_.current=p,$_({text:p,totalLines:q_});return}if(X==="model_changed"){if(!c)return;if(Y?.model!==void 0)F_(Y.model);if(Y?.thinking_level!==void 0)_0(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)f_(Boolean(Y.supports_thinking));let p=$;w1(p).then((q_)=>{if(G0.current!==p)return;if(q_)q0(q_)}).catch(()=>{});return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}if(L8(X)){if(!c)return;if(B8(X,Y),X==="extension_ui_notify"&&typeof Y?.message==="string")Q(Y.message,null,Y?.type||"info");if(X==="extension_ui_error"&&typeof Y?.error==="string")Q("Extension UI error",Y.error,"error",5000);return}let{currentHashtag:j_,searchQuery:H_}=D0.current;if(X==="agent_response"){if(!c)return;U2(),V_.current={post:Y,turnId:Y_.current}}if(!j_&&!H_&&c&&(X==="new_post"||X==="new_reply"||X==="agent_response"))U0((p)=>{if(!p)return[Y];if(p.some((q_)=>q_.id===Y.id))return p;return[...p,Y]}),s2.current?.();if(X==="interaction_updated"){if(!c)return;U0((p)=>{if(!p)return p;if(!p.some((q_)=>q_.id===Y.id))return p;return p.map((q_)=>q_.id===Y.id?Y:q_)})}if(X==="interaction_deleted"){if(!c)return;let p=Y?.ids||[];if(p.length){t$(()=>{U0((J_)=>J_?J_.filter((g$)=>!p.includes(g$.id)):J_)});let{currentHashtag:q_,searchQuery:l_}=D0.current;if(x1.current&&!q_&&!l_)r2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[B0,V0,$,r2,g,b1,t$,m0,S0,M0,U2,F$,W$,f1,R1,e$,R_,s_]);u(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=j4,X.reset=()=>{U2(),B0(),l(null),i({text:"",totalLines:0}),T_(""),$_({text:"",totalLines:0}),Z_(null)},X.finalize=()=>S1(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[B0,S1,j4,U2]),d6({handleSseEvent:j4,handleConnectionStatusChange:R8,loadPosts:$$,onWake:s8,chatJid:$}),u(()=>{if(!m$||m$.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let Y=X.slice(5);s(Y),history.replaceState(null,"",location.pathname+location.search)},[m$,s]);let Z4=t!==null;u(()=>{if(z!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:J,searchQuery:P}=D0.current||{},A=!J&&!P;if(Z4){if(A)M0();R_(),i0(),h0()}else{if(A)M0();i0(),h0()}},Z4?15000:60000);return()=>clearInterval(Y)},[z,Z4,i0,h0,R_,M0]),u(()=>{return Q8(()=>{i0(),h0(),R_()})},[i0,h0,R_]);let o8=M(()=>{X$((X)=>!X)},[]),r8=M((X)=>{if(typeof window>"u")return;let Y=String(X||"").trim();if(!Y||Y===$)return;let J=O2(window.location.href,Y,{chatOnly:j});window.location.assign(J)},[j,$]),a8=M(async()=>{if(typeof window>"u"||!E_?.chat_jid)return;let X=E_.agent_name||"",Y=E_.display_name||"",J=window.prompt("Branch display name",Y);if(J===null)return;let P=window.prompt("Agent handle (without @)",X);if(P===null)return;try{let A=await s5(E_.chat_jid,{displayName:J,agentName:P});await Promise.allSettled([m0(),S0()]);let c=A?.branch?.agent_name||String(P||"").trim()||X;Q("Branch renamed",`This chat is now @${c}.`,"info",3500)}catch(A){let c=A instanceof Error?A.message:String(A||"Could not rename branch.");Q("Could not rename branch",c||"Could not rename branch.","warning",5000)}},[E_,m0,S0,Q]),t8=M(async()=>{if(typeof window>"u"||!E_?.chat_jid)return;if(E_.chat_jid===(E_.root_chat_jid||E_.chat_jid)){Q("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=E_.display_name||`@${E_.agent_name||E_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await o5(E_.chat_jid),await Promise.allSettled([m0(),S0()]);let P=E_.root_chat_jid||"web:default";Q("Branch pruned",`${Y} has been archived.`,"info",3000);let A=O2(window.location.href,P,{chatOnly:j});window.location.assign(A)}catch(P){let A=P instanceof Error?P.message:String(P||"Could not prune branch.");Q("Could not prune branch",A||"Could not prune branch.","warning",5000)}},[j,E_,m0,S0,Q]);u(()=>{if(!Z||typeof window>"u")return;let X=!1;return(async()=>{try{h_({status:"running",message:"Preparing a new chat branch…"});let Y=await M2(N);if(X)return;let J=Y?.branch,P=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");let A=O2(window.location.href,P,{chatOnly:!0});window.location.replace(A)}catch(Y){if(X)return;h_({status:"error",message:k1(Y)})}})(),()=>{X=!0}},[Z,N]);let e8=M(async()=>{if(typeof window>"u"||G)return;let X=z8($);if(!X){Q("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let J=W8(window.location.href,$,{chatOnly:!0});if(!window.open(J,X.target))Q("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=K8(X);if(!Y){Q("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}Y8(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let P=(await M2($))?.branch,A=typeof P?.chat_jid==="string"&&P.chat_jid.trim()?P.chat_jid.trim():null;if(!A)throw Error("Branch fork did not return a chat id.");try{let j_=await F4();$0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}try{let j_=await k8(C);E0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}let c=O2(window.location.href,A,{chatOnly:!0});G8(Y,c)}catch(J){V8(Y),Q("Could not open branch window",k1(J),"error",5000)}},[$,C,G,Q]);u(()=>{if(!S_)return;if(typeof window>"u")return;let X=U$.current;if(!X)return;if(!I.current){let Y=l$("editorWidth",null),J=U.current||280;I.current=Number.isFinite(Y)?Y:J}if(X.style.setProperty("--editor-width",`${I.current}px`),!T.current){let Y=l$("dockHeight",null);T.current=Number.isFinite(Y)?Y:200}X.style.setProperty("--dock-height",`${T.current}px`)},[S_]),u(()=>{if(!u0||j)return;let X=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),z$()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[z$,u0,j]);let _9=Boolean(k_&&k_===(t?.turn_id||W_));if(Z)return B`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${M_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${M_.message}</p>
                    </div>
                </div>
            </div>
        `;return B`
        <div class=${`app-shell${g_?"":" workspace-collapsed"}${S_?" editor-open":""}${j?" chat-only":""}`} ref=${U$}>
            ${!j&&B`
                <${p6}
                    onFileSelect=${Q$}
                    visible=${g_}
                    active=${g_||S_}
                    onOpenEditor=${T0}
                />
                <button
                    class=${`workspace-toggle-tab${g_?" open":" closed"}`}
                    onClick=${o8}
                    title=${g_?"Hide workspace":"Show workspace"}
                    aria-label=${g_?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${C8} onTouchStart=${I8}></div>
            `}
            ${r$&&B`
                <div class="editor-pane-container">
                    ${S_&&B`
                        <${i6}
                            tabs=${L0}
                            activeId=${Z0}
                            onActivate=${J0}
                            onClose=${y$}
                            onCloseOthers=${w$}
                            onCloseAll=${s$}
                            onTogglePin=${u$}
                            onTogglePreview=${A$}
                            previewTabs=${a0}
                            onToggleDock=${u0?z$:void 0}
                            dockVisible=${u0&&O$}
                        />
                    `}
                    ${S_&&B`<div class="editor-pane-host" ref=${f0}></div>`}
                    ${S_&&Z0&&a0.has(Z0)&&B`
                        <${n6}
                            getContent=${()=>R0.current?.getContent?.()}
                            path=${Z0}
                            onClose=${()=>A$(Z0)}
                        />
                    `}
                    ${u0&&O$&&B`<div class="dock-splitter" onMouseDown=${T8} onTouchStart=${f8}></div>`}
                    ${u0&&B`<div class=${`dock-panel${O$?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${z$} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${p0}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${x8} onTouchStart=${S8}></div>
            `}
            <div class="container">
                ${q&&j8()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${E_?.display_name||E_?.agent_name?`@${E_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${E_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${Q0.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(X)=>r8(X.currentTarget.value)}
                                    >
                                        ${Q0.map((X)=>B`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${`@${X.agent_name}${X.display_name?` — ${X.display_name}`:""}${X.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${E_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${a8}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${E_?.chat_jid&&E_.chat_jid!==(E_.root_chat_jid||E_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${t8}
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
                ${(V||q)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${v8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${V?`#${V}`:`Search: ${q} · ${e}`}</span>
                    </div>
                `}
                <${W6}
                    posts=${m$}
                    hasMore=${M8}
                    onLoadMore=${b8}
                    timelineRef=${Y$}
                    onHashtagClick=${u8}
                    onMessageRef=${m}
                    onScrollToMessage=${s}
                    onFileRef=${E}
                    onPostClick=${void 0}
                    onDeletePost=${p8}
                    emptyMessage=${V?`No posts with #${V}`:q?`No results for "${q}"`:void 0}
                    agents=${D_}
                    user=${t0}
                    reverse=${!(q&&!V)}
                    removingPostIds=${f$}
                    searchQuery=${q}
                />
                <${s3}
                    status=${t}
                    draft=${z_}
                    plan=${B_}
                    thought=${o}
                    pendingRequest=${K_}
                    intent=${h}
                    turnId=${W_}
                    steerQueued=${_9}
                    onPanelToggle=${y8}
                />
                <${c3}
                    session=${i_}
                    onClose=${$4}
                    onRetry=${n8}
                    onInject=${d8}
                />
                <${H3}
                    onPost=${()=>{$$(),o2()}}
                    onFocus=${o2}
                    searchMode=${y}
                    searchScope=${R}
                    onSearch=${m8}
                    onSearchScopeChange=${v}
                    onEnterSearch=${g8}
                    onExitSearch=${c8}
                    fileRefs=${x}
                    onRemoveFileRef=${V$}
                    onClearFileRefs=${O}
                    messageRefs=${w}
                    onRemoveMessageRef=${r}
                    onClearMessageRefs=${n}
                    activeEditorPath=${j?null:Z0}
                    onAttachEditorFile=${j?void 0:k}
                    onOpenFilePill=${E}
                    followupQueueCount=${w0}
                    followupQueueItems=${k0}
                    onInjectQueuedFollowup=${h8}
                    onRemoveQueuedFollowup=${i8}
                    onSubmitIntercept=${l8}
                    onMessageResponse=${_4}
                    onPopOutChat=${G?void 0:e8}
                    isAgentActive=${t2}
                    activeChatAgents=${C_}
                    currentChatJid=${$}
                    activeModel=${p_}
                    modelUsage=${z0}
                    thinkingLevel=${P_}
                    supportsThinking=${e_}
                    contextUsage=${F0}
                    notificationsEnabled=${C0}
                    notificationPermission=${c0}
                    onToggleNotifications=${o0}
                    onModelChange=${F_}
                    onModelStateChange=${e2}
                />
                <${r3} status=${z} />
                <${o3}
                    request=${K_}
                    onRespond=${()=>{Z_(null),x_.current=null}}
                />
            </div>
        </div>
    `}function $j(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${_j} locationParams=${_} />`}G3(B`<${$j} />`,document.getElementById("app"));

//# debugId=E1F8EAEB9032785864756E2164756E21
//# sourceMappingURL=app.bundle.js.map
