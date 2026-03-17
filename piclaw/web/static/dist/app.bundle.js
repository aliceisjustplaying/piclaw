var B9=Object.defineProperty;var L9=(_)=>_;function Q9(_,$){this[_]=L9.bind(null,$)}var U9=(_,$)=>{for(var j in $)B9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:Q9.bind($,j)})};var F9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var l2,e_,q3,J9,i$,e1,O3,B3,L3,w4,E4,y4,H9,c2={},h2=[],D9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,n2=Array.isArray;function b$(_,$){for(var j in $)_[j]=$[j];return _}function P4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function Q3(_,$,j){var Z,N,z,K={};for(z in $)z=="key"?Z=$[z]:z=="ref"?N=$[z]:K[z]=$[z];if(arguments.length>2&&(K.children=arguments.length>3?l2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(z in _.defaultProps)K[z]===void 0&&(K[z]=_.defaultProps[z]);return m2(_,K,Z,N,null)}function m2(_,$,j,Z,N){var z={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++q3:N,__i:-1,__u:0};return N==null&&e_.vnode!=null&&e_.vnode(z),z}function d2(_){return _.children}function g2(_,$){this.props=_,this.context=$}function W2(_,$){if($==null)return _.__?W2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?W2(_):null}function E9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],z=b$({},$);z.__v=$.__v+1,e_.vnode&&e_.vnode(z),M4(_.__P,z,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?W2($):j,!!(32&$.__u),N),z.__v=$.__v,z.__.__k[z.__i]=z,H3(Z,z,N),$.__e=$.__=null,z.__e!=j&&U3(z)}}function U3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),U3(_)}function _3(_){(!_.__d&&(_.__d=!0)&&i$.push(_)&&!i2.__r++||e1!=e_.debounceRendering)&&((e1=e_.debounceRendering)||O3)(i2)}function i2(){try{for(var _,$=1;i$.length;)i$.length>$&&i$.sort(B3),_=i$.shift(),$=i$.length,E9(_)}finally{i$.length=i2.__r=0}}function F3(_,$,j,Z,N,z,K,W,q,V,L){var Y,U,M,m,v,R,E,F=Z&&Z.__k||h2,b=$.length;for(q=y9(j,$,F,q,b),Y=0;Y<b;Y++)(M=j.__k[Y])!=null&&(U=M.__i!=-1&&F[M.__i]||c2,M.__i=Y,R=M4(_,M,U,N,z,K,W,q,V,L),m=M.__e,M.ref&&U.ref!=M.ref&&(U.ref&&C4(U.ref,null,M),L.push(M.ref,M.__c||m,M)),v==null&&m!=null&&(v=m),(E=!!(4&M.__u))||U.__k===M.__k?q=J3(M,q,_,E):typeof M.type=="function"&&R!==void 0?q=R:m&&(q=m.nextSibling),M.__u&=-7);return j.__e=v,q}function y9(_,$,j,Z,N){var z,K,W,q,V,L=j.length,Y=L,U=0;for(_.__k=Array(N),z=0;z<N;z++)(K=$[z])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[z]=m2(null,K,null,null,null):n2(K)?K=_.__k[z]=m2(d2,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[z]=m2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[z]=K,q=z+U,K.__=_,K.__b=_.__b+1,W=null,(V=K.__i=k9(K,j,q,Y))!=-1&&(Y--,(W=j[V])&&(W.__u|=2)),W==null||W.__v==null?(V==-1&&(N>L?U--:N<L&&U++),typeof K.type!="function"&&(K.__u|=4)):V!=q&&(V==q-1?U--:V==q+1?U++:(V>q?U--:U++,K.__u|=4))):_.__k[z]=null;if(Y)for(z=0;z<L;z++)(W=j[z])!=null&&(2&W.__u)==0&&(W.__e==Z&&(Z=W2(W)),E3(W,W));return Z}function J3(_,$,j,Z){var N,z;if(typeof _.type=="function"){for(N=_.__k,z=0;N&&z<N.length;z++)N[z]&&(N[z].__=_,$=J3(N[z],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=W2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function k9(_,$,j,Z){var N,z,K,W=_.key,q=_.type,V=$[j],L=V!=null&&(2&V.__u)==0;if(V===null&&W==null||L&&W==V.key&&q==V.type)return j;if(Z>(L?1:0)){for(N=j-1,z=j+1;N>=0||z<$.length;)if((V=$[K=N>=0?N--:z++])!=null&&(2&V.__u)==0&&W==V.key&&q==V.type)return K}return-1}function $3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||D9.test($)?j:j+"px"}function u2(_,$,j,Z,N){var z,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||$3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||$3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")z=$!=($=$.replace(L3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+z]=j,j?Z?j.u=Z.u:(j.u=w4,_.addEventListener($,z?y4:E4,z)):_.removeEventListener($,z?y4:E4,z);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(W){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function j3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=w4++;else if($.t<j.u)return;return j(e_.event?e_.event($):$)}}}function M4(_,$,j,Z,N,z,K,W,q,V){var L,Y,U,M,m,v,R,E,F,b,C,i,l,$_,n,z_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(q=!!(32&j.__u),z=[W=$.__e=j.__e]),(L=e_.__b)&&L($);_:if(typeof z_=="function")try{if(E=$.props,F=z_.prototype&&z_.prototype.render,b=(L=z_.contextType)&&Z[L.__c],C=L?b?b.props.value:L.__:Z,j.__c?R=(Y=$.__c=j.__c).__=Y.__E:(F?$.__c=Y=new z_(E,C):($.__c=Y=new g2(E,C),Y.constructor=z_,Y.render=w9),b&&b.sub(Y),Y.state||(Y.state={}),Y.__n=Z,U=Y.__d=!0,Y.__h=[],Y._sb=[]),F&&Y.__s==null&&(Y.__s=Y.state),F&&z_.getDerivedStateFromProps!=null&&(Y.__s==Y.state&&(Y.__s=b$({},Y.__s)),b$(Y.__s,z_.getDerivedStateFromProps(E,Y.__s))),M=Y.props,m=Y.state,Y.__v=$,U)F&&z_.getDerivedStateFromProps==null&&Y.componentWillMount!=null&&Y.componentWillMount(),F&&Y.componentDidMount!=null&&Y.__h.push(Y.componentDidMount);else{if(F&&z_.getDerivedStateFromProps==null&&E!==M&&Y.componentWillReceiveProps!=null&&Y.componentWillReceiveProps(E,C),$.__v==j.__v||!Y.__e&&Y.shouldComponentUpdate!=null&&Y.shouldComponentUpdate(E,Y.__s,C)===!1){$.__v!=j.__v&&(Y.props=E,Y.state=Y.__s,Y.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(c){c&&(c.__=$)}),h2.push.apply(Y.__h,Y._sb),Y._sb=[],Y.__h.length&&K.push(Y);break _}Y.componentWillUpdate!=null&&Y.componentWillUpdate(E,Y.__s,C),F&&Y.componentDidUpdate!=null&&Y.__h.push(function(){Y.componentDidUpdate(M,m,v)})}if(Y.context=C,Y.props=E,Y.__P=_,Y.__e=!1,i=e_.__r,l=0,F)Y.state=Y.__s,Y.__d=!1,i&&i($),L=Y.render(Y.props,Y.state,Y.context),h2.push.apply(Y.__h,Y._sb),Y._sb=[];else do Y.__d=!1,i&&i($),L=Y.render(Y.props,Y.state,Y.context),Y.state=Y.__s;while(Y.__d&&++l<25);Y.state=Y.__s,Y.getChildContext!=null&&(Z=b$(b$({},Z),Y.getChildContext())),F&&!U&&Y.getSnapshotBeforeUpdate!=null&&(v=Y.getSnapshotBeforeUpdate(M,m)),$_=L!=null&&L.type===d2&&L.key==null?D3(L.props.children):L,W=F3(_,n2($_)?$_:[$_],$,j,Z,N,z,K,W,q,V),Y.base=$.__e,$.__u&=-161,Y.__h.length&&K.push(Y),R&&(Y.__E=Y.__=null)}catch(c){if($.__v=null,q||z!=null)if(c.then){for($.__u|=q?160:128;W&&W.nodeType==8&&W.nextSibling;)W=W.nextSibling;z[z.indexOf(W)]=null,$.__e=W}else{for(n=z.length;n--;)P4(z[n]);k4($)}else $.__e=j.__e,$.__k=j.__k,c.then||k4($);e_.__e(c,$,j)}else z==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):W=$.__e=A9(j.__e,$,j,Z,N,z,K,q,V);return(L=e_.diffed)&&L($),128&$.__u?void 0:W}function k4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(k4))}function H3(_,$,j){for(var Z=0;Z<j.length;Z++)C4(j[Z],j[++Z],j[++Z]);e_.__c&&e_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(z){z.call(N)})}catch(z){e_.__e(z,N.__v)}})}function D3(_){return typeof _!="object"||_==null||_.__b>0?_:n2(_)?_.map(D3):b$({},_)}function A9(_,$,j,Z,N,z,K,W,q){var V,L,Y,U,M,m,v,R=j.props||c2,E=$.props,F=$.type;if(F=="svg"?N="http://www.w3.org/2000/svg":F=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),z!=null){for(V=0;V<z.length;V++)if((M=z[V])&&"setAttribute"in M==!!F&&(F?M.localName==F:M.nodeType==3)){_=M,z[V]=null;break}}if(_==null){if(F==null)return document.createTextNode(E);_=document.createElementNS(N,F,E.is&&E),W&&(e_.__m&&e_.__m($,z),W=!1),z=null}if(F==null)R===E||W&&_.data==E||(_.data=E);else{if(z=z&&l2.call(_.childNodes),!W&&z!=null)for(R={},V=0;V<_.attributes.length;V++)R[(M=_.attributes[V]).name]=M.value;for(V in R)M=R[V],V=="dangerouslySetInnerHTML"?Y=M:V=="children"||(V in E)||V=="value"&&("defaultValue"in E)||V=="checked"&&("defaultChecked"in E)||u2(_,V,null,M,N);for(V in E)M=E[V],V=="children"?U=M:V=="dangerouslySetInnerHTML"?L=M:V=="value"?m=M:V=="checked"?v=M:W&&typeof M!="function"||R[V]===M||u2(_,V,M,R[V],N);if(L)W||Y&&(L.__html==Y.__html||L.__html==_.innerHTML)||(_.innerHTML=L.__html),$.__k=[];else if(Y&&(_.innerHTML=""),F3($.type=="template"?_.content:_,n2(U)?U:[U],$,j,Z,F=="foreignObject"?"http://www.w3.org/1999/xhtml":N,z,K,z?z[0]:j.__k&&W2(j,0),W,q),z!=null)for(V=z.length;V--;)P4(z[V]);W||(V="value",F=="progress"&&m==null?_.removeAttribute("value"):m!=null&&(m!==_[V]||F=="progress"&&!m||F=="option"&&m!=R[V])&&u2(_,V,m,R[V],N),V="checked",v!=null&&v!=_[V]&&u2(_,V,v,R[V],N))}return _}function C4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){e_.__e(N,j)}}function E3(_,$,j){var Z,N;if(e_.unmount&&e_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||C4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(z){e_.__e(z,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&E3(Z[N],$,j||typeof _.type!="function");j||P4(_.__e),_.__c=_.__=_.__e=void 0}function w9(_,$,j){return this.constructor(_,j)}function y3(_,$,j){var Z,N,z,K;$==document&&($=document.documentElement),e_.__&&e_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,z=[],K=[],M4($,_=(!Z&&j||$).__k=Q3(d2,null,[_]),N||c2,c2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?l2.call($.childNodes):null,z,!Z&&j?j:N?N.__e:$.firstChild,Z,K),H3(z,_,K)}l2=h2.slice,e_={__e:function(_,$,j,Z){for(var N,z,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((z=N.constructor)&&z.getDerivedStateFromError!=null&&(N.setState(z.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(W){_=W}throw _}},q3=0,J9=function(_){return _!=null&&_.constructor===void 0},g2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=b$({},this.state),typeof _=="function"&&(_=_(b$({},j),this.props)),_&&b$(j,_),_!=null&&this.__v&&($&&this._sb.push($),_3(this))},g2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),_3(this))},g2.prototype.render=d2,i$=[],O3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B3=function(_,$){return _.__v.__b-$.__v.__b},i2.__r=0,L3=/(PointerCapture)$|Capture$/i,w4=0,E4=j3(!1),y4=j3(!0),H9=0;var J2,O0,D4,Z3,H2=0,k3=[],q0=e_,N3=q0.__b,z3=q0.__r,K3=q0.diffed,Y3=q0.__c,G3=q0.unmount,W3=q0.__;function I4(_,$){q0.__h&&q0.__h(O0,_,H2||$),H2=0;var j=O0.__H||(O0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return H2=1,P9(w3,_)}function P9(_,$,j){var Z=I4(J2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):w3(void 0,$),function(W){var q=Z.__N?Z.__N[0]:Z.__[0],V=Z.t(q,W);q!==V&&(Z.__N=[V,Z.__[1]],Z.__c.setState({}))}],Z.__c=O0,!O0.__f)){var N=function(W,q,V){if(!Z.__c.__H)return!0;var L=Z.__c.__H.__.filter(function(U){return U.__c});if(L.every(function(U){return!U.__N}))return!z||z.call(this,W,q,V);var Y=Z.__c.props!==W;return L.some(function(U){if(U.__N){var M=U.__[0];U.__=U.__N,U.__N=void 0,M!==U.__[0]&&(Y=!0)}}),z&&z.call(this,W,q,V)||Y};O0.__f=!0;var{shouldComponentUpdate:z,componentWillUpdate:K}=O0;O0.componentWillUpdate=function(W,q,V){if(this.__e){var L=z;z=void 0,N(W,q,V),z=L}K&&K.call(this,W,q,V)},O0.shouldComponentUpdate=N}return Z.__N||Z.__}function f(_,$){var j=I4(J2++,3);!q0.__s&&A3(j.__H,$)&&(j.__=_,j.u=$,O0.__H.__h.push(j))}function D(_){return H2=5,a_(function(){return{current:_}},[])}function a_(_,$){var j=I4(J2++,7);return A3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function y(_,$){return H2=8,a_(function(){return _},$)}function M9(){for(var _;_=k3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(p2),$.__h.some(A4),$.__h=[]}catch(j){$.__h=[],q0.__e(j,_.__v)}}}q0.__b=function(_){O0=null,N3&&N3(_)},q0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),W3&&W3(_,$)},q0.__r=function(_){z3&&z3(_),J2=0;var $=(O0=_.__c).__H;$&&(D4===O0?($.__h=[],O0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(p2),$.__h.some(A4),$.__h=[],J2=0)),D4=O0},q0.diffed=function(_){K3&&K3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(k3.push($)!==1&&Z3===q0.requestAnimationFrame||((Z3=q0.requestAnimationFrame)||C9)(M9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),D4=O0=null},q0.__c=function(_,$){$.some(function(j){try{j.__h.some(p2),j.__h=j.__h.filter(function(Z){return!Z.__||A4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],q0.__e(Z,j.__v)}}),Y3&&Y3(_,$)},q0.unmount=function(_){G3&&G3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{p2(Z)}catch(N){$=N}}),j.__H=void 0,$&&q0.__e($,j.__v))};var X3=typeof requestAnimationFrame=="function";function C9(_){var $,j=function(){clearTimeout(Z),X3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);X3&&($=requestAnimationFrame(j))}function p2(_){var $=O0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),O0=$}function A4(_){var $=O0;_.__c=_.__(),O0=$}function A3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function w3(_,$){return typeof $=="function"?$(_):$}var P3=function(_,$,j,Z){var N;$[0]=0;for(var z=1;z<$.length;z++){var K=$[z++],W=$[z]?($[0]|=K?1:2,j[$[z++]]):$[++z];K===3?Z[0]=W:K===4?Z[1]=Object.assign(Z[1]||{},W):K===5?(Z[1]=Z[1]||{})[$[++z]]=W:K===6?Z[1][$[++z]]+=W+"":K?(N=_.apply(W,P3(_,W,j,["",null])),Z.push(N),W[0]?$[0]|=2:($[z-2]=0,$[z]=N)):Z.push(W)}return Z},V3=new Map;function I9(_){var $=V3.get(this);return $||($=new Map,V3.set(this,$)),($=P3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,z=1,K="",W="",q=[0],V=function(U){z===1&&(U||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?q.push(0,U,K):z===3&&(U||K)?(q.push(3,U,K),z=2):z===2&&K==="..."&&U?q.push(4,U,0):z===2&&K&&!U?q.push(5,0,!0,K):z>=5&&((K||!U&&z===5)&&(q.push(z,0,K,N),z=6),U&&(q.push(z,U,0,N),z=6)),K=""},L=0;L<j.length;L++){L&&(z===1&&V(),V(L));for(var Y=0;Y<j[L].length;Y++)Z=j[L][Y],z===1?Z==="<"?(V(),q=[q],z=3):K+=Z:z===4?K==="--"&&Z===">"?(z=1,K=""):K=Z+K[0]:W?Z===W?W="":K+=Z:Z==='"'||Z==="'"?W=Z:Z===">"?(V(),z=1):z&&(Z==="="?(z=5,N=K,K=""):Z==="/"&&(z<5||j[L][Y+1]===">")?(V(),z===3&&(q=q[0]),z=q,(q=q[0]).push(2,0,z),z=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(V(),z=2):K+=Z),z===3&&K==="!--"&&(z=4,q=q[0])}return V(),q}(_)),$),arguments,[])).length>1?$:$[0]}var B=I9.bind(Q3);var Y$={};U9(Y$,{uploadWorkspaceFile:()=>r2,uploadMedia:()=>u4,updateWorkspaceFile:()=>l9,submitAdaptiveCardAction:()=>m4,streamSidePrompt:()=>c9,steerAgentQueueItem:()=>p9,setWorkspaceVisibility:()=>k2,setAgentThoughtVisibility:()=>c4,sendPeerAgentMessage:()=>v9,sendAgentMessage:()=>X2,searchPosts:()=>S4,respondToAgentRequest:()=>o2,renameWorkspaceFile:()=>s4,renameChatBranch:()=>f9,removeAgentQueueItem:()=>g9,pruneChatBranch:()=>R9,moveWorkspaceEntry:()=>o4,getWorkspaceTree:()=>y2,getWorkspaceRawUrl:()=>a2,getWorkspaceFile:()=>l4,getWorkspaceDownloadUrl:()=>t2,getWorkspaceBranch:()=>i9,getTimeline:()=>D2,getThumbnailUrl:()=>h4,getThread:()=>x4,getPostsByHashtag:()=>b4,getMediaUrl:()=>K$,getMediaText:()=>i4,getMediaInfo:()=>V2,getMediaBlob:()=>h9,getChatBranches:()=>T9,getAgents:()=>R4,getAgentThought:()=>p4,getAgentStatus:()=>v4,getAgentQueueState:()=>m9,getAgentModels:()=>E2,getAgentContext:()=>u9,getActiveChatAgents:()=>f4,forkChatBranch:()=>s2,deleteWorkspaceFile:()=>r4,deletePost:()=>T4,createWorkspaceFile:()=>d4,createReply:()=>x9,createPost:()=>S9,attachWorkspaceFile:()=>n4,addToWhitelist:()=>g4,SSEClient:()=>e2});async function c_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function M3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let z of $)if(z.startsWith("event:"))j=z.slice(6).trim()||"message";else if(z.startsWith("data:"))Z.push(z.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function b9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:W}=await j.read();if(W)break;N+=Z.decode(K,{stream:!0});let q=N.split(`

`);N=q.pop()||"";for(let V of q){let L=M3(V);if(L)$(L.event,L.data)}}N+=Z.decode();let z=M3(N);if(z)$(z.event,z.data)}async function D2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return c_(Z)}async function b4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return c_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function S4(_,$=50,j=0,Z=null,N="current",z=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",W=N?`&scope=${encodeURIComponent(N)}`:"",q=z?`&root_chat_jid=${encodeURIComponent(z)}`:"";return c_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${W}${q}`)}async function x4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return c_(`/thread/${_}${j}`)}async function S9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return c_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function x9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return c_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function T4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return c_(N,{method:"DELETE"})}async function X2(_,$,j=null,Z=[],N=null,z=null){let K=z?`?chat_jid=${encodeURIComponent(z)}`:"";return c_(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function f4(){return c_("/agent/active-chats")}async function T9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/branches${$}`)}async function s2(_,$={}){return c_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function f9(_,$={}){return c_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function R9(_){return c_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function v9(_,$,j,Z="auto",N={}){let z={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return c_("/agent/peer-message",{method:"POST",body:JSON.stringify(z)})}async function R4(){return c_("/agent/roster")}async function v4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/status${$}`)}async function u9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/context${$}`)}async function m9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/queue-state${$}`)}async function g9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function p9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function E2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return c_(`/agent/models${$}`)}async function u4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function o2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function m4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function c9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let z=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(z.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await b9(j,(z,K)=>{if($.onEvent?.(z,K),z==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(z==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(z==="side_prompt_done")Z=K;else if(z==="side_prompt_error")N=K}),N){let z=Error(N?.error||"Side prompt failed");throw z.payload=N,z}return Z}async function g4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function p4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return c_(j)}async function c4(_,$,j){return c_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function K$(_){return`/media/${_}`}function h4(_){return`/media/${_}/thumbnail`}async function V2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function i4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function h9(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function y2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return c_(Z)}async function i9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return c_($)}async function l4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return c_(N)}async function l9(_,$){return c_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function n4(_){return c_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function r2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let z=N.toString(),K=z?`/workspace/upload?${z}`:"/workspace/upload",W=await fetch(""+K,{method:"POST",body:Z});if(!W.ok){let q=await W.json().catch(()=>({error:"Upload failed"})),V=Error(q.error||`HTTP ${W.status}`);throw V.status=W.status,V.code=q.code,V}return W.json()}async function d4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),z=Error(N.error||`HTTP ${Z.status}`);throw z.status=Z.status,z.code=N.code,z}return Z.json()}async function s4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function o4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function r4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return c_($,{method:"DELETE"})}async function k2(_,$=!1){return c_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function a2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function t2(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class e2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function G$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function N0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function q2(_,$=!1){let j=G$(_);if(j===null)return $;return j==="true"}function O2(_,$=null){let j=G$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function _4(_){return String(_||"").trim().toLowerCase()}function a4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return _4($[1]||"")}function C3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=_4(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function I3(_,$,j={}){let Z=a4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return C3(_).filter((z)=>{if(N&&z?.chat_jid===N)return!1;return _4(z?.agent_name).startsWith(Z)})}function t4(_){let $=_4(_);return $?`@${$} `:""}function b3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return C3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function S3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let z=460+N*68+(j?40:0);return Z>=z}function Q$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:z="Remove",icon:K="file"}){let W=`${_}-file-pill`,q=`${_}-file-name`,V=`${_}-file-remove`,L=K==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${W} title=${j||$} onClick=${N}>
      ${L}
      <span class=${q}>${$}</span>
      ${Z&&B`
        <button
          class=${V}
          onClick=${(Y)=>{Y.preventDefault(),Y.stopPropagation(),Z()}}
          title=${z}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var n9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function d9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${x3(j)} / ${x3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,z=7,K=2*Math.PI*7,W=$/100*K,q=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${q}
                    stroke-width="2.5"
                    stroke-dasharray=${`${W} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function x3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function T3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:z,onEnterSearch:K,onExitSearch:W,fileRefs:q=[],onRemoveFileRef:V,onClearFileRefs:L,messageRefs:Y=[],onRemoveMessageRef:U,onClearMessageRefs:M,activeModel:m=null,modelUsage:v=null,thinkingLevel:R=null,supportsThinking:E=!1,contextUsage:F=null,notificationsEnabled:b=!1,notificationPermission:C="default",onToggleNotifications:i,onModelChange:l,onModelStateChange:$_,activeEditorPath:n=null,onAttachEditorFile:z_,onOpenFilePill:c,followupQueueItems:q_=[],onInjectQueuedFollowup:n_,onRemoveQueuedFollowup:e,onSubmitIntercept:r,onMessageResponse:N_,onPopOutChat:j_,isAgentActive:L_=!1,activeChatAgents:d_=[],currentChatJid:Q_="web:default",connectionStatus:x_="connected",onSetFileRefs:U_,onSetMessageRefs:J_,onSubmitError:R_}){let[W_,C_]=T(""),[v_,D0]=T(""),[Y_,__]=T([]),[M_,X_]=T(!1),[E_,w_]=T([]),[$0,h_]=T(0),[j0,k_]=T(!1),[I_,b_]=T([]),[z0,f_]=T(0),[w0,G0]=T(!1),[W0,e0]=T(!1),[K0,S_]=T(!1),[Y0,s_]=T([]),[F0,P0]=T(!1),[o_,E0]=T(0),[M0,F_]=T(null),u_=D(null),n0=D(null),X$=D(null),S=D(null),s=D(null),K_=D(null),y_=D(0),m_=200,T_=(Q)=>{let I=new Set,x=[];for(let d of Q||[]){if(typeof d!=="string")continue;let V_=d.trim();if(!V_||I.has(V_))continue;I.add(V_),x.push(V_)}return x},m0=()=>{let Q=G$("piclaw_compose_history");if(!Q)return[];try{let I=JSON.parse(Q);if(!Array.isArray(I))return[];return T_(I)}catch{return[]}},T$=(Q)=>{N0("piclaw_compose_history",JSON.stringify(Q))},_$=D(m0()),V$=D(-1),B0=D(""),f$=W_.trim()||Y_.length>0||q.length>0||Y.length>0,L0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),y0=typeof window<"u"&&typeof Notification<"u",A$=typeof window<"u"?Boolean(window.isSecureContext):!1,x0=y0&&A$&&C!=="denied",Z2=C==="granted"&&b,g0=Z2?"Disable notifications":"Enable notifications",n$=Y_.length>0||q.length>0||Y.length>0,Z0=x_==="disconnected"?"Reconnecting":String(x_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(Q)=>Q.toUpperCase()),O$=x_==="disconnected"?"Reconnecting":`Connection: ${Z0}`,d0=b3(d_,{currentChatJid:Q_,limit:4}),C0=d0.length>0,I0=!j&&S3({footerWidth:o_,visibleAgentCount:d0.length,hasContextIndicator:Boolean(F&&F.percent!=null)}),T0=m||"",B$=E&&R?` (${R})`:"",w$=B$.trim()?`${R}`:"",R$=typeof v?.hint_short==="string"?v.hint_short.trim():"",v$=[w$||null,R$||null].filter(Boolean).join(" • "),J0=[T0?`Current model: ${T0}${B$}`:null,v?.plan?`Plan: ${v.plan}`:null,R$||null,v?.primary?.reset_description||null,v?.secondary?.reset_description||null].filter(Boolean),P$=W0?"Switching model…":J0.join(" • ")||`Current model: ${T0}${B$} (tap to open model picker)`,p0=(Q)=>{if(!Q||typeof Q!=="object")return;let I=Q.model??Q.current;if(typeof $_==="function")$_({model:I??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(I&&typeof l==="function")l(I)},Q0=(Q)=>{let I=Q||u_.current;if(!I)return;I.style.height="auto",I.style.height=`${I.scrollHeight}px`,I.style.overflowY="hidden"},c0=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let x=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let g_=0;g_<x.length;g_+=1)if(x[g_].trim()==="Files:"&&x[g_+1]&&/^\s*-\s+/.test(x[g_+1])){d=g_;break}if(d===-1)return{content:Q,fileRefs:[]};let V_=[],A_=d+1;for(;A_<x.length;A_+=1){let g_=x[A_];if(/^\s*-\s+/.test(g_))V_.push(g_.replace(/^\s*-\s+/,"").trim());else if(!g_.trim())break;else break}if(V_.length===0)return{content:Q,fileRefs:[]};let P_=x.slice(0,d),G_=x.slice(A_);return{content:[...P_,...G_].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:V_}},N2=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let x=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let g_=0;g_<x.length;g_+=1)if(x[g_].trim()==="Referenced messages:"&&x[g_+1]&&/^\s*-\s+/.test(x[g_+1])){d=g_;break}if(d===-1)return{content:Q,messageRefs:[]};let V_=[],A_=d+1;for(;A_<x.length;A_+=1){let g_=x[A_];if(/^\s*-\s+/.test(g_)){let h0=g_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(h0)V_.push(h0[1])}else if(!g_.trim())break;else break}if(V_.length===0)return{content:Q,messageRefs:[]};let P_=x.slice(0,d),G_=x.slice(A_);return{content:[...P_,...G_].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:V_}},f0=(Q)=>{let I=c0(Q||""),x=N2(I.content||"");return{text:x.content||"",fileRefs:I.fileRefs,messageRefs:x.messageRefs}},z2=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){k_(!1),w_([]);return}let I=Q.toLowerCase().split(" ")[0];if(I.length<1){k_(!1),w_([]);return}let x=n9.filter((d)=>d.name.startsWith(I)||d.name.replace(/-/g,"").startsWith(I.replace(/-/g,"")));if(x.length>0&&!(x.length===1&&x[0].name===I))G0(!1),b_([]),w_(x),h_(0),k_(!0);else k_(!1),w_([])},F$=(Q)=>{let I=W_,x=I.indexOf(" "),d=x>=0?I.slice(x):"",V_=Q.name+d;C_(V_),k_(!1),w_([]),requestAnimationFrame(()=>{let A_=u_.current;if(!A_)return;let P_=V_.length;A_.selectionStart=P_,A_.selectionEnd=P_,A_.focus()})},u$=(Q)=>{if(a4(Q)==null){G0(!1),b_([]);return}let I=I3(d_,Q,{currentChatJid:Q_});if(I.length>0&&!(I.length===1&&t4(I[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))k_(!1),w_([]),b_(I),f_(0),G0(!0);else G0(!1),b_([])},m$=(Q)=>{let I=t4(Q?.agent_name);if(!I)return;C_(I),G0(!1),b_([]),requestAnimationFrame(()=>{let x=u_.current;if(!x)return;let d=I.length;x.selectionStart=d,x.selectionEnd=d,x.focus()})},M$=(Q)=>{if(j)D0(Q);else C_(Q),z2(Q),u$(Q);requestAnimationFrame(()=>Q0())},i_=(Q)=>{let I=j?v_:W_,x=I&&!I.endsWith(`
`)?`
`:"",d=`${I}${x}${Q}`.trimStart();M$(d)},b0=(Q)=>{let I=Q?.command?.model_label;if(I)return I;let x=Q?.command?.message;if(typeof x==="string"){let d=x.match(/•\s+([^\n]+?)\s+\(current\)/);if(d?.[1])return d[1].trim()}return null},R0=async(Q)=>{if(j||W0)return;e0(!0);try{let I=await X2("default",Q,null,[],null,Q_),x=b0(I);p0({model:x??m??null,thinking_level:I?.command?.thinking_level,supports_thinking:I?.command?.supports_thinking});try{let d=await E2(Q_);if(d)p0(d)}catch{}return _?.(),!0}catch(I){return console.error("Failed to switch model:",I),alert("Failed to switch model: "+I.message),!1}finally{e0(!1)}},d$=async()=>{await R0("/cycle-model")},s$=async(Q)=>{if(!Q||W0)return;if(await R0(`/model ${Q}`))S_(!1)},o$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),S_((I)=>!I)},J$=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return L_?"queue":null},k0=async(Q,I,x={})=>{let{includeMedia:d=!0,includeFileRefs:V_=!0,includeMessageRefs:A_=!0,clearAfterSubmit:P_=!0,recordHistory:G_=!0}=x||{},Z$=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:W_,g_=typeof Z$==="string"?Z$:"";if(!g_.trim()&&(d?Y_.length===0:!0)&&(V_?q.length===0:!0)&&(A_?Y.length===0:!0))return;k_(!1),w_([]),G0(!1),b_([]),F_(null);let h0=d?[...Y_]:[],E$=V_?[...q]:[],c$=A_?[...Y]:[],y$=g_.trim();if(G_&&y$){let I$=_$.current,r_=T_(I$.filter((S0)=>S0!==y$));if(r_.push(y$),r_.length>200)r_.splice(0,r_.length-200);_$.current=r_,T$(r_),V$.current=-1,B0.current=""}let t$=()=>{if(d)__([...h0]);if(V_)U_?.(E$);if(A_)J_?.(c$);C_(y$),requestAnimationFrame(()=>Q0())};if(P_)C_(""),__([]),L?.(),M?.();(async()=>{try{if(await r?.({content:y$,submitMode:I,fileRefs:E$,messageRefs:c$,mediaFiles:h0})){_?.();return}let r_=[];for(let v0 of h0){let L$=await u4(v0);r_.push(L$.id)}let S0=E$.length?`Files:
${E$.map((v0)=>`- ${v0}`).join(`
`)}`:"",h$=c$.length?`Referenced messages:
${c$.map((v0)=>`- message:${v0}`).join(`
`)}`:"",K2=r_.length?`Images:
${r_.map((v0,L$)=>{let r0=h0[L$]?.name||`attachment-${L$+1}`;return`- attachment:${v0} (${r0})`}).join(`
`)}`:"",o0=[y$,S0,h$,K2].filter(Boolean).join(`

`),i0=await X2("default",o0,null,r_,J$(I),Q_);if(N_?.(i0),i0?.command){p0({model:i0.command.model_label??m??null,thinking_level:i0.command.thinking_level,supports_thinking:i0.command.supports_thinking});try{let v0=await E2(Q_);if(v0)p0(v0)}catch{}}_?.()}catch(I$){if(P_)t$();let r_=I$?.message||"Failed to send message.";F_(r_),R_?.(r_),console.error("Failed to post:",I$)}})()},X0=(Q)=>{n_?.(Q)},U0=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),D0(""),W?.();return}if(w0&&I_.length>0){let I=u_.current?.value??(j?v_:W_);if(!String(I||"").match(/^@([a-zA-Z0-9_-]*)$/))G0(!1),b_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),f_((x)=>(x+1)%I_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),f_((x)=>(x-1+I_.length)%I_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),m$(I_[z0]);return}if(Q.key==="Escape"){Q.preventDefault(),G0(!1),b_([]);return}}}if(j0&&E_.length>0){let I=u_.current?.value??(j?v_:W_);if(!String(I||"").startsWith("/"))k_(!1),w_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),h_((x)=>(x+1)%E_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),h_((x)=>(x-1+E_.length)%E_.length);return}if(Q.key==="Tab"){Q.preventDefault(),F$(E_[$0]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(u_.current?.value??(j?v_:W_)).includes(" ")){Q.preventDefault();let V_=E_[$0];k_(!1),w_([]),k0(V_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),k_(!1),w_([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let I=u_.current;if(!I)return;let x=I.value||"",d=I.selectionStart===0&&I.selectionEnd===0,V_=I.selectionStart===x.length&&I.selectionEnd===x.length;if(Q.key==="ArrowUp"&&d||Q.key==="ArrowDown"&&V_){let A_=_$.current;if(!A_.length)return;Q.preventDefault();let P_=V$.current;if(Q.key==="ArrowUp"){if(P_===-1)B0.current=x,P_=A_.length-1;else if(P_>0)P_-=1;V$.current=P_,M$(A_[P_]||"")}else{if(P_===-1)return;if(P_<A_.length-1)P_+=1,V$.current=P_,M$(A_[P_]||"");else V$.current=-1,M$(B0.current||""),B0.current=""}requestAnimationFrame(()=>{let G_=u_.current;if(!G_)return;let Z$=G_.value.length;G_.selectionStart=Z$,G_.selectionEnd=Z$});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let I=u_.current?.value??(j?v_:W_);if(j){if(I.trim())N?.(I.trim(),Z)}else k0(I,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let I=u_.current?.value??(j?v_:W_);if(j){if(I.trim())N?.(I.trim(),Z)}else k0(I)}},s0=(Q)=>{let I=Array.from(Q||[]).filter((x)=>x&&x.type&&x.type.startsWith("image/"));if(!I.length)return;__((x)=>[...x,...I]),F_(null)},C$=(Q)=>{s0(Q.target.files),Q.target.value=""},r$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),y_.current+=1,X_(!0)},H$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),y_.current=Math.max(0,y_.current-1),y_.current===0)X_(!1)},$$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";X_(!0)},g$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),y_.current=0,X_(!1),s0(Q.dataTransfer?.files||[])},j$=(Q)=>{if(j)return;let I=Q.clipboardData?.items;if(!I||!I.length)return;let x=[];for(let d of I){if(d.kind!=="file")continue;let V_=d.getAsFile?.();if(V_)x.push(V_)}if(x.length>0)Q.preventDefault(),s0(x)},A0=(Q)=>{__((I)=>I.filter((x,d)=>d!==Q))},D$=()=>{F_(null),__([]),L?.(),M?.()},a$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:I,longitude:x,accuracy:d}=Q.coords,V_=`${I.toFixed(5)}, ${x.toFixed(5)}`,A_=Number.isFinite(d)?` ±${Math.round(d)}m`:"",P_=`https://maps.google.com/?q=${I},${x}`,G_=`Location: ${V_}${A_} ${P_}`;i_(G_)},(Q)=>{let I=Q?.message||"Unable to retrieve location.";alert(`Location error: ${I}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};f(()=>{if(!K0)return;P0(!0),E2(Q_).then((Q)=>{let I=Array.isArray(Q?.models)?Q.models.filter((x)=>typeof x==="string"&&x.trim().length>0):[];I.sort((x,d)=>x.localeCompare(d,void 0,{sensitivity:"base"})),s_(I),p0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),s_([])}).finally(()=>{P0(!1)})},[K0,m]),f(()=>{if(j)S_(!1),k_(!1),w_([]),G0(!1),b_([])},[j]),f(()=>{if(!K0)return;let Q=(I)=>{let x=S.current,d=s.current,V_=I.target;if(x&&x.contains(V_))return;if(d&&d.contains(V_))return;S_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[K0]),f(()=>{let Q=()=>{let A_=K_.current?.clientWidth||0;E0((P_)=>P_===A_?P_:A_)};Q();let I=K_.current,x=0,d=()=>{if(x)cancelAnimationFrame(x);x=requestAnimationFrame(()=>{x=0,Q()})},V_=null;if(I&&typeof ResizeObserver<"u")V_=new ResizeObserver(()=>d()),V_.observe(I);if(typeof window<"u")window.addEventListener("resize",d);return()=>{if(x)cancelAnimationFrame(x);if(V_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",d)}},[j,m,d0.length,F?.percent]);let p$=(Q)=>{let I=Q.target.value;F_(null),Q0(Q.target),M$(I)};return f(()=>{requestAnimationFrame(()=>Q0())},[W_,v_,j]),f(()=>{if(j)return;u$(W_)},[d_,Q_,W_,j]),B`
        <div class="compose-box">
            ${!j&&q_.length>0&&B`
                <div class="compose-queue-stack">
                    ${q_.map((Q)=>{let I=typeof Q?.content==="string"?Q.content:"",x=f0(I);if(!x.text.trim()&&x.fileRefs.length===0&&x.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${I}>
                                    ${x.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${x.text}</div>
                                    `}
                                    ${(x.messageRefs.length>0||x.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${x.messageRefs.map((d)=>B`
                                                <${Q$}
                                                    key=${"queue-msg-"+d}
                                                    prefix="compose"
                                                    label=${"msg:"+d}
                                                    title=${"Message reference: "+d}
                                                    icon="message"
                                                />
                                            `)}
                                            ${x.fileRefs.map((d)=>{let V_=d.split("/").pop()||d;return B`
                                                    <${Q$}
                                                        key=${"queue-file-"+d}
                                                        prefix="compose"
                                                        label=${V_}
                                                        title=${d}
                                                        onClick=${()=>c?.(d)}
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
                                        onClick=${()=>X0(Q)}
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
                                        onClick=${()=>e?.(Q)}
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
            `}
            <div
                class=${`compose-input-wrapper${M_?" drag-active":""}`}
                onDragEnter=${r$}
                onDragOver=${$$}
                onDragLeave=${H$}
                onDrop=${g$}
            >
                ${x_!=="connected"&&B`
                    <span class="compose-connection-status connection-status ${x_}" title=${O$}>
                        ${Z0}
                    </span>
                `}
                <div class="compose-input-main">
                    ${M0&&!n$&&B`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${M0}</div>
                    `}
                    ${n$&&B`
                        <div class="compose-file-refs">
                            ${M0&&B`
                                <div class="compose-submit-error" role="status" aria-live="polite">${M0}</div>
                            `}
                            ${Y.map((Q)=>{return B`
                                    <${Q$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(Q)}
                                    />
                                `})}
                            ${q.map((Q)=>{let I=Q.split("/").pop()||Q;return B`
                                    <${Q$}
                                        prefix="compose"
                                        label=${I}
                                        title=${Q}
                                        onClick=${()=>c?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(Q)}
                                    />
                                `})}
                            ${Y_.map((Q,I)=>{let x=Q?.name||`attachment-${I+1}`;return B`
                                    <${Q$}
                                        key=${x+I}
                                        prefix="compose"
                                        label=${x}
                                        title=${x}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>A0(I)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${D$}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof j_==="function"&&B`
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
                        ref=${u_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?v_:W_}
                        onInput=${p$}
                        onKeyDown=${U0}
                        onPaste=${j$}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${w0&&I_.length>0&&B`
                        <div class="slash-autocomplete" ref=${X$}>
                            ${I_.map((Q,I)=>B`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${I===z0?" active":""}`}
                                    onMouseDown=${(x)=>{x.preventDefault(),m$(Q)}}
                                    onMouseEnter=${()=>f_(I)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.display_name||Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${j0&&E_.length>0&&B`
                        <div class="slash-autocomplete" ref=${n0}>
                            ${E_.map((Q,I)=>B`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${I===$0?" active":""}`}
                                    onMouseDown=${(x)=>{x.preventDefault(),F$(Q)}}
                                    onMouseEnter=${()=>h_(I)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${K0&&!j&&B`
                        <div class="compose-model-popup" ref=${S}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${F0&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!F0&&Y0.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!F0&&Y0.map((Q)=>B`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===Q?" active":""}`}
                                        onClick=${()=>{s$(Q)}}
                                        disabled=${W0}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{d$()}}
                                    disabled=${W0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${K_}>
                    ${!j&&m&&B`
                    <div class="compose-meta-row">
                        ${!j&&m&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${s}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${P$}
                                    aria-label="Open model picker"
                                    onClick=${o$}
                                    disabled=${W0}
                                >
                                    ${W0?"Switching…":T0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!W0&&v$&&B`
                                        <span class="compose-model-usage-hint" title=${P$}>
                                            ${v$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${I0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${d0.map((Q)=>B`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>m$(Q)}
                                    title=${`${Q.display_name||Q.chat_jid||"Active agent"} — insert @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&F&&F.percent!=null&&B`
                        <${d9} usage=${F} />
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(Q)=>z?.(Q.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?W:K}
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
                    ${L0&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${a$}
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
                    ${x0&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${Z2?" active":""}`}
                            onClick=${i}
                            title=${g0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${n&&z_&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${z_}
                                title=${`Attach open file: ${n}`}
                                type="button"
                                disabled=${q.includes(n)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${C$} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{k0()}}
                            disabled=${!f$}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var v3="piclaw_theme",$1="piclaw_tint",w2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},u3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},f3={default:{label:"Default",mode:"auto",light:w2,dark:u3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},s9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],e$={theme:"default",tint:null},m3="light",e4=!1;function j1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function L2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((z)=>z+z).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function o9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let z=parseInt(N[1],10),K=parseInt(N[2],10),W=parseInt(N[3],10);if(![z,K,W].every((V)=>Number.isFinite(V)))return null;let q=`#${[z,K,W].map((V)=>V.toString(16).padStart(2,"0")).join("")}`;return{r:z,g:K,b:W,hex:q}}function g3(_){return L2(_)||o9(_)}function A2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),z=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${z})`}function _1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function r9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*z+0.0722*K}function a9(_){return r9(_)>0.4?"#000000":"#ffffff"}function p3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Z1(_){return f3[_]||f3.default}function t9(_){return _.mode==="auto"?p3():_.mode}function c3(_,$){let j=Z1(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||w2}function h3(_,$,j){let Z=g3($);if(!Z)return _;let N=L2(_.bgPrimary),z=L2(_.bgSecondary),K=L2(_.bgHover),W=L2(_.borderColor);if(!N||!z||!K||!W)return _;let V=L2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:A2(N,Z,0.08),bgSecondary:A2(z,Z,0.12),bgHover:A2(K,Z,0.16),borderColor:A2(W,Z,0.08),accent:Z.hex,accentHover:V?A2(Z,V,0.18):Z.hex}}function e9(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=g3(Z),z=N?_1(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?_1(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",W=N?_1(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",q=N?a9(N):$==="dark"?"#000000":"#ffffff",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":W,"--accent-contrast-text":q,"--danger-color":_.danger||w2.danger,"--success-color":_.success||w2.success,"--search-highlight-color":z||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([L,Y])=>{if(Y)j.style.setProperty(L,Y)})}function _7(){if(typeof document>"u")return;let _=document.documentElement;s9.forEach(($)=>_.style.removeProperty($))}function B2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function R3(_){let $=j1(e$?.theme||"default"),j=e$?.tint?String(e$.tint).trim():null,Z=c3($,_);if($==="default"&&j)Z=h3(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?u3.bgPrimary:w2.bgPrimary}function $7(_,$){if(typeof document>"u")return;let j=B2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=B2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",R3("light"));let N=B2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",R3("dark"));let z=B2("msapplication-TileColor");if(z&&_)z.setAttribute("content",_);let K=B2("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let W=B2("apple-mobile-web-app-status-bar-style");if(W)W.setAttribute("content",$==="dark"?"black-translucent":"default")}function j7(){if(typeof window>"u")return;let _={...e$,mode:m3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function N1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=j1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=Z1(j),z=t9(N),K=c3(j,z);e$={theme:j,tint:Z},m3=z;let W=document.documentElement;W.dataset.theme=z,W.dataset.colorTheme=j,W.dataset.tint=Z?String(Z):"",W.style.colorScheme=z;let q=K;if(j==="default"&&Z)q=h3(K,Z,z);if(j==="default"&&!Z)_7();else e9(q,z);if($7(q.bgPrimary,z),j7(),$.persist!==!1)if(N0(v3,j),Z)N0($1,Z);else N0($1,"")}function $4(){if(Z1(e$.theme).mode!=="auto")return;N1(e$,{persist:!1})}function i3(){if(typeof window>"u")return()=>{};let _=j1(G$(v3)||"default"),$=G$($1),j=$?$.trim():null;if(N1({theme:_,tint:j},{persist:!1}),window.matchMedia&&!e4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",$4);else if(Z.addListener)Z.addListener($4);return e4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",$4);else if(Z.removeListener)Z.removeListener($4);e4=!1}}return()=>{}}function l3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;N1({theme:j||"default",tint:Z},{persist:!0})}function n3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return p3()}var j4=/#(\w+)/g,Z7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),N7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),z7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),K7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},Y7=new Set(["http:","https:","mailto:",""]);function z1(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function _2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!Y7.has(Z.protocol))return null;return Z.href}catch{return null}}function d3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),z;while(z=N.nextNode())Z.push(z);for(let K of Z){let W=K.tagName.toLowerCase();if(!N7.has(W)){let V=K.parentNode;if(!V)continue;while(K.firstChild)V.insertBefore(K.firstChild,K);V.removeChild(K);continue}let q=K7[W]||new Set;for(let V of Array.from(K.attributes)){let L=V.name.toLowerCase(),Y=V.value;if(L.startsWith("on")){K.removeAttribute(V.name);continue}if(L.startsWith("data-")||L.startsWith("aria-"))continue;if(q.has(L)||z7.has(L)){if(L==="href"){let U=_2(Y);if(!U)K.removeAttribute(V.name);else if(K.setAttribute(V.name,U),W==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(L==="src"){let U=W==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(Y):Y,M=_2(U,{allowDataImage:W==="img"});if(!M)K.removeAttribute(V.name);else K.setAttribute(V.name,M)}continue}K.removeAttribute(V.name)}}return j.body.innerHTML}function s3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function Z4(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=s3(j);if(N===j)break;j=N}return j}function G7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],z=!1,K=[];for(let W of j){if(!z&&W.trim().match(/^```mermaid\s*$/i)){z=!0,K=[];continue}if(z&&W.trim().match(/^```\s*$/)){let q=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${q}@@`),z=!1,K=[];continue}if(z)K.push(W);else N.push(W)}if(z)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function W7(_){if(!_)return _;return Z4(_,5)}function X7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function V7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function q7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),z=$[N]??"",K=W7(z);return`<div class="mermaid-container" data-mermaid="${X7(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function o3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var O7={span:new Set(["title","class","lang","dir"])};function B7(_,$){let j=O7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,z;while(z=N.exec($)){let K=(z[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let W=z[2]??z[3]??z[4]??"";Z.push(` ${K}="${z1(W)}"`)}return Z.join("")}function r3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),z=N?Z.slice(1).trim():Z,W=z.endsWith("/")?z.slice(0,-1).trim():z,[q=""]=W.split(/\s+/,1),V=q.toLowerCase();if(!V||!Z7.has(V))return $;if(V==="br")return N?"":"<br>";if(N)return`</${V}>`;let L=W.slice(q.length).trim(),Y=B7(V,L);return`<${V}${Y}>`})}function a3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function t3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(z)=>z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let z=Z(N.nodeValue);if(z!==N.nodeValue)N.nodeValue=z}return $.body.innerHTML}function L7(_){if(!window.katex)return _;let $=(K)=>s3(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let W=[],q=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(V)=>{let L=W.length;return W.push(V),`@@CODE_BLOCK_${L}@@`});return q=q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(V)=>{let L=W.length;return W.push(V),`@@CODE_INLINE_${L}@@`}),{html:q,blocks:W}},Z=(K,W)=>{if(!W.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(q,V)=>{let L=Number(V);return W[L]??""})},N=j(_),z=N.html;return z=z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,W,q)=>{try{let V=katex.renderToString($(q.trim()),{displayMode:!0,throwOnError:!1});return`${W}${V}`}catch(V){return`<span class="math-error" title="${z1(V.message)}">${K}</span>`}}),z=z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,W,q)=>{if(/\s$/.test(q))return K;try{let V=katex.renderToString($(q),{displayMode:!1,throwOnError:!1});return`${W}${V}`}catch(V){return`${W}<span class="math-error" title="${z1(V.message)}">$${q}$</span>`}}),Z(z,N.blocks)}function Q7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let z of Z){let K=z.nodeValue;if(!K)continue;if(j4.lastIndex=0,!j4.test(K))continue;j4.lastIndex=0;let W=z.parentElement;if(W&&(W.closest("a")||W.closest("code")||W.closest("pre")))continue;let q=K.split(j4);if(q.length<=1)continue;let V=$.createDocumentFragment();q.forEach((L,Y)=>{if(Y%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",L),U.textContent=`#${L}`,V.appendChild(U)}else V.appendChild($.createTextNode(L))}),z.parentNode?.replaceChild(V,z)}return $.body.innerHTML}function U7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let z of j){if(!N&&z.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&z.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(z)}return Z.join(`
`)}function t0(_,$,j={}){if(!_)return"";let Z=U7(_),{text:N,blocks:z}=G7(Z),K=Z4(N,2),q=o3(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),V=r3(q),L=window.marked?marked.parse(V,{headerIds:!1,mangle:!1}):V.replace(/\n/g,"<br>");return L=a3(L),L=t3(L),L=L7(L),L=Q7(L),L=q7(L,z),L=d3(L,j),L}function N4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=Z4($,2),N=o3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=r3(N),K=window.marked?marked.parse(z):z.replace(/\n/g,"<br>");return K=a3(K),K=t3(K),K=d3(K),K}async function S$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=n3()==="dark"?j["tokyo-night"]:j["github-light"],z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of z)try{let W=K.dataset.mermaid,q=V7(W||""),V=Z4(q,2),L=await $(V,{...N,transparent:!0});K.innerHTML=L,K.removeAttribute("data-mermaid")}catch(W){console.error("Mermaid render error:",W);let q=document.createElement("pre");q.className="mermaid-error",q.textContent=`Diagram error: ${W.message}`,K.innerHTML="",K.appendChild(q),K.removeAttribute("data-mermaid")}}function e3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function _6(_){return String(_||"").trim()||"web:default"}function $6(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function j6(_){if(!_)return!1;return _.status!=="running"}function Z6(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function N6({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),z=D(null),K=_?.thinking?N4(_.thinking):"",W=_?.answer?t0(_.answer,null,{sanitize:!1}):"";if(f(()=>{if(N.current&&K)S$(N.current).catch(()=>{})},[K]),f(()=>{if(z.current&&W)S$(z.current).catch(()=>{})},[W]),!_)return null;let q=_.status==="running",V=Boolean(String(_.answer||"").trim()),L=Boolean(String(_.thinking||"").trim()),Y=$6(_),U=j6(_),M=!q&&V,m=q?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${m}</span>
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
                <details class="btw-block btw-thinking" open=${q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${Y&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${z}
                        dangerouslySetInnerHTML=${{__html:W}}
                    ></div>
                </div>
            `}

            ${U&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!M}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var z6="PiClaw";function K1(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%z.length,W=z[K],q=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",L=V?V:null,Y=j||q==="PiClaw".toLowerCase()||q==="pi";return{letter:N,color:W,image:L||(Y?"/static/icon-192.png":null)}}function K6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function Y6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function G6(_){if(!_)return null;if(typeof document<"u"){let z=document.documentElement,K=z?.dataset?.colorTheme||"",W=z?.dataset?.tint||"",q=getComputedStyle(z).getPropertyValue("--accent-color")?.trim();if(q&&(W||K&&K!=="default"))return q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let z=0;z<j.length;z+=1)Z=(Z*31+j.charCodeAt(z))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function F7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function P2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function W6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return P2(_)?"Compacting context":"Working..."}function J7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function X6(_,$=Date.now()){let j=F7(_);if(j===null)return null;return J7(Math.max(0,$-j))}function V6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:z,turnId:K,steerQueued:W,onPanelToggle:q}){let Y=(__)=>{if(!__)return{text:"",totalLines:0,fullText:""};if(typeof __==="string"){let w_=__,$0=w_?w_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:w_,totalLines:$0,fullText:w_}}let M_=__.text||"",X_=__.fullText||__.full_text||M_,E_=Number.isFinite(__.totalLines)?__.totalLines:X_?X_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:M_,totalLines:E_,fullText:X_}},U=160,M=(__)=>String(__||"").replace(/<\/?internal>/gi,""),m=(__)=>{if(!__)return 1;return Math.max(1,Math.ceil(__.length/160))},v=(__,M_,X_)=>{let E_=(__||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!E_)return{text:"",omitted:0,totalLines:Number.isFinite(X_)?X_:0,visibleLines:0};let w_=E_.split(`
`),$0=w_.length>M_?w_.slice(0,M_).join(`
`):E_,h_=Number.isFinite(X_)?X_:w_.reduce((I_,b_)=>I_+m(b_),0),j0=$0?$0.split(`
`).reduce((I_,b_)=>I_+m(b_),0):0,k_=Math.max(h_-j0,0);return{text:$0,omitted:k_,totalLines:h_,visibleLines:j0}},R=Y(j),E=Y(Z),F=Y($),b=Boolean(R.text)||R.totalLines>0,C=Boolean(E.text)||E.totalLines>0,i=Boolean(F.fullText?.trim()||F.text?.trim());if(!_&&!i&&!b&&!C&&!N&&!z)return null;let[l,$_]=T(new Set),[n,z_]=T(()=>Date.now()),c=(__)=>$_((M_)=>{let X_=new Set(M_),E_=!X_.has(__);if(E_)X_.add(__);else X_.delete(__);if(typeof q==="function")q(__,E_);return X_});f(()=>{$_(new Set)},[K]);let q_=P2(_);f(()=>{if(!q_)return;z_(Date.now());let __=setInterval(()=>z_(Date.now()),1000);return()=>clearInterval(__)},[q_,_?.started_at,_?.startedAt]);let n_=_?.turn_id||K,e=G6(n_),r=W?"turn-dot turn-dot-queued":"turn-dot",N_=(__)=>__,j_=Boolean(_?.last_activity||_?.lastActivity),L_=(__)=>__==="warning"?"#f59e0b":__==="error"?"var(--danger-color)":__==="success"?"var(--success-color)":e,d_=z?.kind||"info",Q_=L_(d_),x_=L_(_?.kind||(q_?"warning":"info")),U_="",J_=_?.title,R_=_?.status;if(_?.type==="plan")U_=J_?`Planning: ${J_}`:"Planning...";else if(_?.type==="tool_call")U_=J_?`Running: ${J_}`:"Running tool...";else if(_?.type==="tool_status")U_=J_?`${J_}: ${R_||"Working..."}`:R_||"Working...";else if(_?.type==="error")U_=J_||"Agent error";else U_=J_||R_||"Working...";if(j_)U_="Last activity just now";let W_=({panelTitle:__,text:M_,fullText:X_,totalLines:E_,maxLines:w_,titleClass:$0,panelKey:h_})=>{let j0=l.has(h_),k_=X_||M_||"",I_=h_==="thought"||h_==="draft"?M(k_):k_,b_=typeof w_==="number",z0=j0&&b_,f_=b_?v(I_,w_,E_):{text:I_||"",omitted:0,totalLines:Number.isFinite(E_)?E_:0};if(!I_&&!(Number.isFinite(f_.totalLines)&&f_.totalLines>0))return null;let w0=`agent-thinking-body${b_?" agent-thinking-body-collapsible":""}`,G0=b_?`--agent-thinking-collapsed-lines: ${w_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${j0?"true":"false"}
                data-collapsible=${b_?"true":"false"}
                style=${e?`--turn-color: ${e};`:""}
            >
                <div class="agent-thinking-title ${$0||""}">
                    ${e&&B`<span class=${r} aria-hidden="true"></span>`}
                    ${__}
                    ${z0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${__} panel`}
                            onClick=${()=>c(h_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${w0}
                    style=${G0}
                    dangerouslySetInnerHTML=${{__html:N4(I_)}}
                />
                ${!j0&&f_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>c(h_)}>
                        ▸ ${f_.omitted} more lines
                    </button>
                `}
                ${j0&&f_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>c(h_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},C_=N?.tool_call?.title,v_=C_?`Awaiting approval: ${C_}`:"Awaiting approval",D0=q_?X6(_,n):null,Y_=(__,M_,X_=null)=>{let E_=W6(__);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${M_?`--turn-color: ${M_};`:""}
                title=${__?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${M_&&B`<span class=${r} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${E_}</span>
                    ${X_&&B`<span class="agent-status-elapsed">${X_}</span>`}
                </div>
                ${__.detail&&B`<div class="agent-thinking-body">${__.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${z&&Y_(z,Q_)}
            ${_?.type==="intent"&&Y_(_,x_,D0)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${e?`--turn-color: ${e};`:""}>
                    <span class=${r} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${v_}</span>
                </div>
            `}
            ${b&&W_({panelTitle:N_("Planning"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,panelKey:"plan"})}
            ${C&&W_({panelTitle:N_("Thoughts"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${i&&W_({panelTitle:N_("Draft"),text:F.text,fullText:F.fullText,totalLines:F.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${j_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${e?`--turn-color: ${e};`:""}>
                    ${e&&B`<span class=${r} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!j_&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${U_}</span>
                </div>
            `}
        </div>
    `}function q6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:z}=_,K=Z?.title||"Agent Request",W=Z?.kind||"other",q=Z?.rawInput||{},V=q.command||q.commands&&q.commands[0]||null,L=q.diff||null,Y=q.fileName||q.path||null,U=Z?.description||q.description||q.explanation||null,m=(Array.isArray(Z?.locations)?Z.locations:[]).map((b)=>b?.path).filter((b)=>Boolean(b)),v=Array.from(new Set([Y,...m].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let R=async(b)=>{try{await o2(j,b,z||null),$()}catch(C){console.error("Failed to respond to agent request:",C)}},E=async()=>{try{await g4(K,`Auto-approved: ${K}`),await o2(j,"approved",z||null),$()}catch(b){console.error("Failed to add to whitelist:",b)}},F=N&&N.length>0;return B`
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
                ${(U||V||L||v.length>0)&&B`
                    <div class="agent-request-body">
                        ${U&&B`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${v.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${v.map((b,C)=>B`<li key=${C}>${b}</li>`)}
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
                    ${F?N.map((b)=>B`
                            <button 
                                key=${b.optionId||b.id||String(b)}
                                class="agent-request-btn ${b.kind==="allow_once"||b.kind==="allow_always"?"primary":""}"
                                onClick=${()=>R(b.optionId||b.id||b)}
                            >
                                ${b.name||b.label||b.optionId||b.id||String(b)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>R("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>R("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${E}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function O6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,z=86400000;if(Z<z){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*z){let q=$.toLocaleDateString(void 0,{weekday:"short"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${V}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),W=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${W}`}function M2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function W$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function $2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var H7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),D7=new Set(["text/markdown"]),E7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),y7=new Set(["application/vnd.jgraph.mxfile"]);function C2(_){return typeof _==="string"?_.trim().toLowerCase():""}function k7(_){let $=C2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function A7(_){let $=C2(_);return!!$&&$.endsWith(".pdf")}function w7(_){let $=C2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function I2(_,$){let j=C2(_);if(k7($)||y7.has(j))return"drawio";if(A7($)||j==="application/pdf")return"pdf";if(w7($)||E7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(H7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function B6(_){let $=C2(_);return D7.has($)}function L6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function P7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function M7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),z=Number(j[3]);if(![Z,N,z].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:z}}function Q6(_){return P7(_)||M7(_)}function z4(_){let $=(z)=>{let K=z/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function C7(_,$){let j=Math.max(z4(_),z4($)),Z=Math.min(z4(_),z4($));return(j+0.05)/(Z+0.05)}function I7(_,$,j="#ffffff"){let Z=Q6(_);if(!Z)return j;let N=j,z=-1;for(let K of $){let W=Q6(K);if(!W)continue;let q=C7(Z,W);if(q>z)N=K,z=q}return N}function Y1(){let _=getComputedStyle(document.documentElement),$=(m,v)=>{for(let R of m){let E=_.getPropertyValue(R).trim();if(E)return E}return v},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),W=$(["--accent-color","--color-accent"],"#1d9bf0"),q=$(["--success-color","--color-success"],"#00ba7c"),V=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),L=$(["--danger-color","--color-error"],"#f4212e"),Y=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),M=I7(W,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:z,bgEmphasis:K,accent:W,good:q,warning:V,attention:L,border:Y,fontFamily:U,buttonTextColor:M}}function U6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:z,warning:K,attention:W,border:q,fontFamily:V}=Y1();return{fontFamily:V,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:W,subtle:W}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:W,subtle:W}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var b7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),F6=!1,K4=null,J6=!1;function G1(_){_.querySelector(".adaptive-card-notice")?.remove()}function S7(_,$,j="error"){G1(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function x7(_,$=(j)=>t0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function T7(_=($)=>t0($,null)){return($,j)=>{try{let Z=x7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function f7(_){if(J6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=T7(),J6=!0}async function R7(){if(F6)return;if(K4)return K4;return K4=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{F6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),K4}function v7(){return globalThis.AdaptiveCards}function u7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function m7(_){return b7.has(_)}function X1(_){if(!Array.isArray(_))return[];return _.filter(u7)}function g7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,z=_?.data??$?.data;return{type:j,title:Z,data:z,url:N,raw:_}}function W1(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>W1($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${W1(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function p7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return W1($);return typeof $==="string"?$:String($)}function c7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((W)=>Z(W));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=p7(K.type,j[K.id],K);for(let[W,q]of Object.entries(K))if(Array.isArray(q)||q&&typeof q==="object")K[W]=Z(q);return K};return Z(_)}function h7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function i7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function l7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=i7(_.completed_at||j?.submitted_at),z=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:z}}async function H6(_,$,j){if(!m7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await R7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=v7();f7(Z);let N=new Z.AdaptiveCard,z=Y1();N.hostConfig=new Z.HostConfig(U6());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,W=$.state==="active"?$.payload:c7($.payload,K);N.parse(W),N.onExecuteAction=(L)=>{let Y=g7(L);if(j?.onAction)G1(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(Y)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let M=U instanceof Error?U.message:String(U||"Action failed.");S7(_,M||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",Y)};let q=N.render();if(!q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",z.buttonTextColor);let V=l7($);if(V){_.classList.add("adaptive-card-finished");let L=document.createElement("div");L.className=`adaptive-card-status adaptive-card-status-${$.state}`;let Y=document.createElement("span");if(Y.className="adaptive-card-status-label",Y.textContent=V.label,L.appendChild(Y),V.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=V.detail,L.appendChild(U)}_.appendChild(L)}if(G1(_),_.appendChild(q),V)h7(q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function b2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>b2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${b2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function D6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:b2(j)})).filter(($)=>$.value)}function n7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function V1(_){if(!Array.isArray(_))return[];return _.filter(n7)}function E6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=b2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=D6(j).slice(0,4).map(({key:z,value:K})=>`${z}: ${K}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function y6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=D6(_.data),Z=j.length>0?j.slice(0,2).map(({key:q,value:V})=>`${q}: ${V}`).join(", "):b2(_.data)||null,N=j.length,z=j.slice(0,4),K=j.slice(4),W=K.length;return{title:$,summary:Z,fields:z,hiddenFields:K,fieldCount:N,hiddenFieldCount:W,submittedAt:_.submitted_at}}function d7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?W$($):null},{label:"Added",value:_?.created_at?$2(_.created_at):null}].filter((Z)=>Z.value)}function s7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let z=K$(_);return`/office-viewer/?url=${encodeURIComponent(z)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function k6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=a_(()=>I2($?.content_type,Z),[$?.content_type,Z]),z=L6(N),K=a_(()=>B6($?.content_type),[$?.content_type]),[W,q]=T(N==="text"),[V,L]=T(""),[Y,U]=T(null),M=D(null),m=a_(()=>d7($),[$]),v=a_(()=>s7(_,Z,N),[_,Z,N]),R=a_(()=>{if(!K||!V)return"";return t0(V)},[K,V]);return f(()=>{let E=(F)=>{if(F.key==="Escape")j()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[j]),f(()=>{if(!M.current||!R)return;S$(M.current);return},[R]),f(()=>{let E=!1;async function F(){if(N!=="text"){q(!1),U(null);return}q(!0),U(null);try{let b=await i4(_);if(!E)L(b)}catch{if(!E)U("Failed to load text preview.")}finally{if(!E)q(!1)}}return F(),()=>{E=!0}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(E)=>{E.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${z}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${v&&B`
                            <a
                                href=${v}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(E)=>E.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${K$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(E)=>E.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${W&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!W&&Y&&B`<div class="attachment-preview-state">${Y}</div>`}
                    ${!W&&!Y&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${K$(_)} alt=${Z} />
                    `}
                    ${!W&&!Y&&(N==="pdf"||N==="office"||N==="drawio")&&v&&B`
                        <iframe class="attachment-preview-frame" src=${v} title=${Z}></iframe>
                    `}
                    ${!W&&!Y&&N==="drawio"&&B`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!W&&!Y&&N==="text"&&K&&B`
                        <div
                            ref=${M}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:R}}
                        />
                    `}
                    ${!W&&!Y&&N==="text"&&!K&&B`
                        <pre class="attachment-preview-text">${V}</pre>
                    `}
                    ${!W&&!Y&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${m.map((E)=>B`
                        <div class="attachment-preview-meta-item" key=${E.label}>
                            <span class="attachment-preview-meta-label">${E.label}</span>
                            <span class="attachment-preview-meta-value">${E.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function A6({src:_,onClose:$}){return f(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function o7({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(f(()=>{V2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",z=j.metadata?.size,K=z?W$(z):"",q=I2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(V)=>V.stopPropagation()}>
            <a href=${K$(_)} download=${N} class="file-attachment-main">
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
                ${q}
            </button>
        </div>
    `}function r7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);f(()=>{if(!Number.isFinite(j))return;V2(j).then(N).catch(()=>{});return},[j]);let z=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?K$(j):null,q=I2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${z}>
            ${K?B`
                    <a href=${K} download=${z} class="attachment-pill-main" onClick=${(V)=>V.stopPropagation()}>
                        <${Q$}
                            prefix="post"
                            label=${_.label}
                            title=${z}
                        />
                    </a>
                `:B`
                    <${Q$}
                        prefix="post"
                        label=${_.label}
                        title=${z}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${q}
                    onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Y4({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?$2(Z):null;return B`
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
    `}function a7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?W$(_.size):"",N=_.mime_type||"",z=e7(N),K=_2(_.uri);return B`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(W)=>W.stopPropagation()}>
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
    `}function t7({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",z=Boolean(_.data),K=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${z&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&B`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(W)=>{W.preventDefault(),W.stopPropagation();let q=new Blob([Uint8Array.from(atob(_.data),(Y)=>Y.charCodeAt(0))],{type:K||"application/octet-stream"}),V=URL.createObjectURL(q),L=document.createElement("a");L.href=V,L.download=Z.split("/").pop()||"resource",L.click(),URL.revokeObjectURL(V)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function e7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function _5({preview:_}){let $=_2(_.url),j=_2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
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
    `}function $5(_,$){return typeof _==="string"?_:""}var j5=1800,Z5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,N5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,z5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function K5(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function Y5(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((z)=>z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(z,K)=>{let W=K||"idle";if(z.dataset.copyState=W,W==="success")z.innerHTML=N5,z.setAttribute("aria-label","Copied"),z.setAttribute("title","Copied"),z.classList.add("is-success"),z.classList.remove("is-error");else if(W==="error")z.innerHTML=z5,z.setAttribute("aria-label","Copy failed"),z.setAttribute("title","Copy failed"),z.classList.add("is-error"),z.classList.remove("is-success");else z.innerHTML=Z5,z.setAttribute("aria-label","Copy code"),z.setAttribute("title","Copy code"),z.classList.remove("is-success","is-error")};return $.forEach((z)=>{let K=document.createElement("div");K.className="post-code-block",z.parentNode?.insertBefore(K,z),K.appendChild(z);let W=document.createElement("button");W.type="button",W.className="post-code-copy-btn",N(W,"idle"),K.appendChild(W);let q=async(V)=>{V.preventDefault(),V.stopPropagation();let Y=z.querySelector("code")?.textContent||"",U=await K5(Y);N(W,U?"success":"error");let M=j.get(W);if(M)clearTimeout(M);let m=setTimeout(()=>{N(W,"idle"),j.delete(W)},j5);j.set(W,m)};W.addEventListener("click",q),Z.push(()=>{W.removeEventListener("click",q);let V=j.get(W);if(V)clearTimeout(V);if(K.parentNode)K.parentNode.insertBefore(z,K),K.remove()})}),()=>{Z.forEach((z)=>z())}}function G5(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V))N.push(V.replace(/^\s*-\s+/,"").trim());else if(!V.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,Z),W=j.slice(z),q=[...K,...W].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,fileRefs:N}}function W5(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V)){let Y=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Y)N.push(Y[1])}else if(!V.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,Z),W=j.slice(z),q=[...K,...W].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,messageRefs:N}}function X5(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Images:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,attachments:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V)){let L=V.replace(/^\s*-\s+/,"").trim(),Y=L.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||L.match(/^attachment:([^\s]+)\s+(.+)$/i);if(Y){let U=Y[1],M=(Y[2]||"").trim()||U;N.push({id:U,label:M,raw:L})}else N.push({id:null,label:L,raw:L})}else if(!V.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),W=j.slice(z),q=[...K,...W].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,attachments:N}}function V5(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function q5(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(V5).sort((L,Y)=>Y.length-L.length),N=new RegExp(`(${Z.join("|")})`,"gi"),z=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),W=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),q=[],V;while(V=W.nextNode())q.push(V);for(let L of q){let Y=L.nodeValue;if(!Y||!N.test(Y)){N.lastIndex=0;continue}N.lastIndex=0;let U=L.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let M=Y.split(N).filter((v)=>v!=="");if(M.length===0)continue;let m=K.createDocumentFragment();for(let v of M)if(z.test(v)){let R=K.createElement("mark");R.className="search-highlight-term",R.textContent=v,m.appendChild(R)}else m.appendChild(K.createTextNode(v));L.parentNode.replaceChild(m,L)}return K.body.innerHTML}function w6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:z,agentAvatarUrl:K,userName:W,userAvatarUrl:q,userAvatarBackground:V,onDelete:L,isThreadReply:Y,isThreadPrev:U,isThreadNext:M,isRemoving:m,highlightQuery:v,onFileRef:R}){let[E,F]=T(null),[b,C]=T(()=>new Set),i=D(null),l=_.data,$_=l.type==="agent_response",n=W||"You",z_=$_?z||z6:n,c=$_?K1(z,K,!0):K1(n,q),q_=typeof V==="string"?V.trim().toLowerCase():"",n_=!$_&&c.image&&(q_==="clear"||q_==="transparent"),e=$_&&Boolean(c.image),r=`background-color: ${n_||e?"transparent":c.color}`,N_=l.content_meta,j_=Boolean(N_?.truncated),L_=Boolean(N_?.preview),d_=j_&&!L_,Q_=j_?{originalLength:Number.isFinite(N_?.original_length)?N_.original_length:l.content?l.content.length:0,maxLength:Number.isFinite(N_?.max_length)?N_.max_length:0}:null,x_=l.content_blocks||[],U_=l.media_ids||[],J_=$5(l.content,l.link_previews),{content:R_,fileRefs:W_}=G5(J_),{content:C_,messageRefs:v_}=W5(R_),{content:D0,attachments:Y_}=X5(C_);J_=D0;let __=X1(x_),M_=V1(x_),X_=__.length===1&&typeof __[0]?.fallback_text==="string"?__[0].fallback_text.trim():"",E_=M_.length===1?E6(M_[0]).trim():"",w_=Boolean(X_)&&J_?.trim()===X_||Boolean(E_)&&J_?.trim()===E_,$0=Boolean(J_)&&!d_&&!w_,h_=typeof v==="string"?v.trim():"",j0=a_(()=>{if(!J_||w_)return"";let S=t0(J_,j);return h_?q5(S,h_):S},[J_,w_,h_]),k_=(S,s)=>{S.stopPropagation(),F(K$(s))},[I_,b_]=T(null),z0=(S)=>{b_(S)},f_=(S)=>{S.stopPropagation(),L?.(_)},w0=(S)=>{C((s)=>{let K_=new Set(s);if(K_.has(S))K_.delete(S);else K_.add(S);return K_})},G0=(S,s)=>{let K_=new Set;if(!S||s.length===0)return{content:S,usedIds:K_};return{content:S.replace(/attachment:([^\s)"']+)/g,(m_,T_,m0,T$)=>{let _$=T_.replace(/^\/+/,""),B0=s.find((L0)=>L0.name&&L0.name.toLowerCase()===_$.toLowerCase()&&!K_.has(L0.id))||s.find((L0)=>!K_.has(L0.id));if(!B0)return m_;if(K_.add(B0.id),T$.slice(Math.max(0,m0-2),m0)==="](")return`/media/${B0.id}`;return B0.name||"attachment"}),usedIds:K_}},W0=[],e0=[],K0=[],S_=[],Y0=[],s_=[],F0=0;if(x_.length>0)x_.forEach((S)=>{if(S?.type==="text"&&S.annotations)s_.push(S.annotations);if(S?.type==="resource_link")S_.push(S);else if(S?.type==="resource")Y0.push(S);else if(S?.type==="file"){let s=U_[F0++];if(s)e0.push(s),K0.push({id:s,name:S?.name||S?.filename||S?.title})}else if(S?.type==="image"||!S?.type){let s=U_[F0++];if(s){let K_=typeof S?.mime_type==="string"?S.mime_type:void 0;W0.push({id:s,annotations:S?.annotations,mimeType:K_}),K0.push({id:s,name:S?.name||S?.filename||S?.title})}}});else if(U_.length>0)U_.forEach((S)=>{W0.push({id:S,annotations:null}),K0.push({id:S,name:null})});if(Y_.length>0)Y_.forEach((S)=>{if(!S?.id)return;let s=K0.find((K_)=>String(K_.id)===String(S.id));if(s&&!s.name)s.name=S.label});let{content:P0,usedIds:o_}=G0(J_,K0);J_=P0;let E0=W0.filter(({id:S})=>!o_.has(S)),M0=e0.filter((S)=>!o_.has(S)),F_=Y_.length>0?Y_.map((S,s)=>({id:S.id||`attachment-${s+1}`,label:S.label||`attachment-${s+1}`})):K0.map((S,s)=>({id:S.id,label:S.name||`attachment-${s+1}`})),u_=a_(()=>X1(x_),[x_]),n0=a_(()=>V1(x_),[x_]);f(()=>{if(!i.current)return;return S$(i.current),Y5(i.current)},[j0]);let X$=D(null);return f(()=>{if(!X$.current||u_.length===0)return;let S=X$.current;S.innerHTML="";for(let s of u_){let K_=document.createElement("div");S.appendChild(K_),H6(K_,s,{onAction:async(y_)=>{if(y_.type==="Action.OpenUrl"){let m_=_2(y_.url||"");if(!m_)throw Error("Invalid URL");window.open(m_,"_blank","noopener,noreferrer");return}if(y_.type==="Action.Submit"){await m4({post_id:_.id,thread_id:l.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:s.card_id,action:{type:y_.type,title:y_.title||"",data:y_.data}});return}console.warn("[post] unsupported adaptive card action:",y_.type,y_)}}).catch((y_)=>{console.error("[post] adaptive card render error:",y_),K_.textContent=s.fallback_text||"Card failed to render."})}},[u_,l.thread_id,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${$_?"agent-post":""} ${Y?"thread-reply":""} ${U?"thread-prev":""} ${M?"thread-next":""} ${m?"removing":""}" onClick=${$}>
            <div class="post-avatar ${$_?"agent-avatar":""} ${c.image?"has-image":""}" style=${r}>
                ${c.image?B`<img src=${c.image} alt=${z_} />`:c.letter}
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
                    <span class="post-author">${z_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(S)=>{if(S.preventDefault(),S.stopPropagation(),Z)Z(_.id)}}>${O6(_.timestamp)}</a>
                </div>
                ${d_&&Q_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${M2(Q_.originalLength)} chars
                            ${Q_.maxLength?B` • Display limit: ${M2(Q_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${L_&&Q_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${M2(Q_.maxLength)} of ${M2(Q_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(W_.length>0||v_.length>0||F_.length>0)&&B`
                    <div class="post-file-refs">
                        ${v_.map((S)=>{let s=(K_)=>{if(K_.preventDefault(),K_.stopPropagation(),N)N(S,_.chat_jid||null);else{let y_=document.getElementById("post-"+S);if(y_)y_.scrollIntoView({behavior:"smooth",block:"center"}),y_.classList.add("post-highlight"),setTimeout(()=>y_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${S}`} class="post-msg-pill-link" onClick=${s}>
                                    <${Q$}
                                        prefix="post"
                                        label=${"msg:"+S}
                                        title=${"Message "+S}
                                        icon="message"
                                        onClick=${s}
                                    />
                                </a>
                            `})}
                        ${W_.map((S)=>{let s=S.split("/").pop()||S;return B`
                                <${Q$}
                                    prefix="post"
                                    label=${s}
                                    title=${S}
                                    onClick=${()=>R?.(S)}
                                />
                            `})}
                        ${F_.map((S)=>B`
                            <${r7}
                                key=${S.id}
                                attachment=${S}
                                onPreview=${z0}
                            />
                        `)}
                    </div>
                `}
                ${$0&&B`
                    <div 
                        ref=${i}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:j0}}
                        onClick=${(S)=>{if(S.target.classList.contains("hashtag")){S.preventDefault(),S.stopPropagation();let s=S.target.dataset.hashtag;if(s)j?.(s)}else if(S.target.tagName==="IMG")S.preventDefault(),S.stopPropagation(),F(S.target.src)}}
                    />
                `}
                ${u_.length>0&&B`
                    <div ref=${X$} class="post-adaptive-cards" />
                `}
                ${n0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${n0.map((S,s)=>{let K_=y6(S),y_=`${S.card_id}-${s}`,m_=b.has(y_);return B`
                                <div key=${y_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${K_.title}</span>
                                        </div>
                                    </div>
                                    ${K_.summary&&B`
                                        <div class="adaptive-card-submission-summary">${K_.summary}</div>
                                    `}
                                    ${K_.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${K_.fields.map((T_)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${T_.key}: ${T_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${T_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${T_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    ${K_.hiddenFieldCount>0&&B`
                                        <button
                                            type="button"
                                            class="adaptive-card-submission-toggle"
                                            aria-expanded=${m_?"true":"false"}
                                            onClick=${(T_)=>{T_.preventDefault(),T_.stopPropagation(),w0(y_)}}
                                        >
                                            ${m_?`Hide ${K_.hiddenFieldCount} more`:`Show ${K_.hiddenFieldCount} more`}
                                        </button>
                                    `}
                                    ${m_&&K_.hiddenFields.length>0&&B`
                                        <div class="adaptive-card-submission-fields adaptive-card-submission-fields-extra">
                                            ${K_.hiddenFields.map((T_)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${T_.key}: ${T_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${T_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${T_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${$2(K_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${s_.length>0&&B`
                    ${s_.map((S,s)=>B`
                        <${Y4} key=${s} annotations=${S} />
                    `)}
                `}
                ${E0.length>0&&B`
                    <div class="media-preview">
                        ${E0.map(({id:S,mimeType:s})=>{let y_=typeof s==="string"&&s.toLowerCase().startsWith("image/svg")?K$(S):h4(S);return B`
                                <img 
                                    key=${S} 
                                    src=${y_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(m_)=>k_(m_,S)}
                                />
                            `})}
                    </div>
                `}
                ${E0.length>0&&B`
                    ${E0.map(({annotations:S},s)=>B`
                        ${S&&B`<${Y4} key=${s} annotations=${S} />`}
                    `)}
                `}
                ${M0.length>0&&B`
                    <div class="file-attachments">
                        ${M0.map((S)=>B`
                            <${o7} key=${S} mediaId=${S} onPreview=${z0} />
                        `)}
                    </div>
                `}
                ${S_.length>0&&B`
                    <div class="resource-links">
                        ${S_.map((S,s)=>B`
                            <div key=${s}>
                                <${a7} block=${S} />
                                <${Y4} annotations=${S.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y0.length>0&&B`
                    <div class="resource-embeds">
                        ${Y0.map((S,s)=>B`
                            <div key=${s}>
                                <${t7} block=${S} />
                                <${Y4} annotations=${S.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${l.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${l.link_previews.map((S,s)=>B`
                            <${_5} key=${s} preview=${S} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${E&&B`<${A6} src=${E} onClose=${()=>F(null)} />`}
        ${I_&&B`
            <${k6}
                mediaId=${I_.mediaId}
                info=${I_.info}
                onClose=${()=>b_(null)}
            />
        `}
    `}function P6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:z,onScrollToMessage:K,onFileRef:W,emptyMessage:q,timelineRef:V,agents:L,user:Y,onDeletePost:U,reverse:M=!0,removingPostIds:m,searchQuery:v}){let[R,E]=T(!1),F=D(null),b=typeof IntersectionObserver<"u",C=y(async()=>{if(!j||!$||R)return;E(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{E(!1)}},[$,R,j]),i=y((e)=>{let{scrollTop:r,scrollHeight:N_,clientHeight:j_}=e.target,L_=M?N_-j_-r:r,d_=Math.max(300,j_);if(L_<d_)C()},[M,C]);f(()=>{if(!b)return;let e=F.current,r=V?.current;if(!e||!r)return;let N_=300,j_=new IntersectionObserver((L_)=>{for(let d_ of L_){if(!d_.isIntersecting)continue;C()}},{root:r,rootMargin:`${N_}px 0px ${N_}px 0px`,threshold:0});return j_.observe(e),()=>j_.disconnect()},[b,$,j,V,C]);let l=D(C);if(l.current=C,f(()=>{if(b)return;if(!V?.current)return;let{scrollTop:e,scrollHeight:r,clientHeight:N_}=V.current,j_=M?r-N_-e:e,L_=Math.max(300,N_);if(j_<L_)l.current?.()},[b,_,$,M,V]),f(()=>{if(!V?.current)return;if(!$||R)return;let{scrollTop:e,scrollHeight:r,clientHeight:N_}=V.current,j_=M?r-N_-e:e,L_=Math.max(300,N_);if(r<=N_+1||j_<L_)l.current?.()},[_,$,R,M,V]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let $_=_.slice().sort((e,r)=>e.id-r.id),n=(e)=>{let r=e?.data?.thread_id;if(r===null||r===void 0||r==="")return null;let N_=Number(r);return Number.isFinite(N_)?N_:null},z_=new Map;for(let e=0;e<$_.length;e+=1){let r=$_[e],N_=Number(r?.id),j_=n(r);if(j_!==null){let L_=z_.get(j_)||{anchorIndex:-1,replyIndexes:[]};L_.replyIndexes.push(e),z_.set(j_,L_)}else if(Number.isFinite(N_)){let L_=z_.get(N_)||{anchorIndex:-1,replyIndexes:[]};L_.anchorIndex=e,z_.set(N_,L_)}}let c=new Map;for(let[e,r]of z_.entries()){let N_=new Set;if(r.anchorIndex>=0)N_.add(r.anchorIndex);for(let j_ of r.replyIndexes)N_.add(j_);c.set(e,Array.from(N_).sort((j_,L_)=>j_-L_))}let q_=$_.map((e,r)=>{let N_=n(e);if(N_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let j_=c.get(N_);if(!j_||j_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let L_=j_.indexOf(r);if(L_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:L_>0,hasThreadNext:L_<j_.length-1}}),n_=B`<div class="timeline-sentinel" ref=${F}></div>`;return B`
        <div class="timeline ${M?"reverse":"normal"}" ref=${V} onScroll=${i}>
            <div class="timeline-content">
                ${M?n_:null}
                ${$_.map((e,r)=>{let N_=Boolean(e.data?.thread_id&&e.data.thread_id!==e.id),j_=m?.has?.(e.id),L_=q_[r]||{};return B`
                    <${w6}
                        key=${e.id}
                        post=${e}
                        isThreadReply=${N_}
                        isThreadPrev=${L_.hasThreadPrev}
                        isThreadNext=${L_.hasThreadNext}
                        isRemoving=${j_}
                        highlightQuery=${v}
                        agentName=${K6(e.data?.agent_id,L||{})}
                        agentAvatarUrl=${Y6(e.data?.agent_id,L||{})}
                        userName=${Y?.name||Y?.user_name}
                        userAvatarUrl=${Y?.avatar_url||Y?.avatarUrl||Y?.avatar}
                        userAvatarBackground=${Y?.avatar_background||Y?.avatarBackground}
                        onClick=${()=>Z?.(e)}
                        onHashtagClick=${N}
                        onMessageRef=${z}
                        onScrollToMessage=${K}
                        onFileRef=${W}
                        onDelete=${U}
                    />
                `})}
                ${M?null:n_}
            </div>
        </div>
    `}class M6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let z=N===!0?0:typeof N==="number"?N:0;if(z>j)j=z,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var _0=new M6;var G4=null,q1=null;function C6(){if(q1)return Promise.resolve(q1);if(!G4)G4=import("/static/dist/editor.bundle.js").then((_)=>{return q1=_,_}).catch((_)=>{throw G4=null,_});return G4}class I6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await C6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var O1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new I6(_,$)}};function B1(){C6().catch(()=>{})}var Q1="piclaw://terminal";var O5={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},B5={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},W4=null,L1=null;function L5(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Q5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,z)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!L5(K))return $(N,z);if(N instanceof Request)return $(new Request(j,N));return $(j,z)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function U5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!W4)W4=Q5(()=>Promise.resolve($.init?.())).catch((j)=>{throw W4=null,j});return await W4,$}async function F5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!L1)L1=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await L1}async function J5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function H5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function D5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function x$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function E5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function b6(){let _=D5(),$=_?B5:O5,j=x$("--bg-primary",_?"#000000":"#ffffff"),Z=x$("--text-primary",_?"#e7e9ea":"#0f1419"),N=x$("--text-secondary",_?"#71767b":"#536471"),z=x$("--accent-color","#1d9bf0"),K=x$("--danger-color",_?"#ff7b72":"#cf222e"),W=x$("--success-color",_?"#7ee787":"#1a7f37"),q=x$("--bg-hover",_?"#1d1f23":"#e8ebed"),V=x$("--border-color",_?"#2f3336":"#eff3f4"),L=x$("--accent-soft-strong",E5(z,_?"47":"33"));return{background:j,foreground:Z,cursor:z,cursorAccent:j,selectionBackground:L,selectionForeground:Z,black:q,red:K,green:W,yellow:$.yellow,blue:z,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:V}}class U1{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,z=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(z)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await U5();if(await F5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:b6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=b6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await J5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(H5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var F1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new U1(_,$)}},J1={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new U1(_,$)}};function l$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function y5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,z=Z?.[2]||"",K=Z?.[3]||"",W=String($||"").split("/").slice(0,-1).join("/"),V=N.startsWith("/")?N:`${W?`${W}/`:""}${N}`,L=[];for(let U of V.split("/")){if(!U||U===".")continue;if(U===".."){if(L.length>0)L.pop();continue}L.push(U)}let Y=L.join("/");return`${a2(Y)}${z}${K}`}function S2(_){return _?.preview||null}function k5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function A5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function w5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${l$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${l$(W$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${l$($2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${l$(A5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${l$(k5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${l$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function P5(_){let $=S2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=w5(_,$);if($.kind==="image"){let Z=$.url||($.path?a2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${l$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=t0($.text||"",null,{rewriteImageSrc:(N)=>y5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${l$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class H1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=P5(this.context)}getContent(){let _=S2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=S2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var D1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=S2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new H1(_,$)}},E1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return S2(_)||_?.path?1:!1},mount(_,$){return new H1(_,$)}};var M5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),C5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},I5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function x6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function S6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class T6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=x6(j),z=I5[N]||"\uD83D\uDCC4",K=C5[N]||"Office Document",W=document.createElement("div");W.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",W.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${z}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${S6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${S6(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(W);let q=W.querySelector("#ov-open-tab");if(q)q.addEventListener("click",()=>{let V=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y1={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=x6(_?.path);if(!$||!M5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new T6(_,$);return new f6(_,$)}};var b5=/\.(csv|tsv)$/i;class R6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k1={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!b5.test($))return!1;return 55},mount(_,$){return new R6(_,$)}};var S5=/\.pdf$/i;function x5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${x5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#pdf-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class u6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var A1={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!S5.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new v6(_,$);return new u6(_,$)}};var T5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function w1(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${w1(N)}" alt="${w1(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${w1(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let W=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(W)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var P1={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!T5.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new m6(_,$);return new g6(_,$)}};function f5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function R5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var M1='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function p6(_){let $=String(_||"").trim();return $?$:M1}function v5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function u5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function m5(_,$="*"){try{let j=(z)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...z}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let z=Z.prototype.saveData;Z.prototype.saveData=function(K,W,q,V,L,Y){try{if(K&&q!=null&&j({filename:K,format:W,data:q,mimeType:V,base64Encoded:Boolean(L),defaultMode:Y}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return z.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let z=N.prototype.exportFile;N.prototype.exportFile=function(K,W,q,V,L,Y){try{if(W&&j({filename:W,data:K,mimeType:q,base64Encoded:Boolean(V),mode:L,folderId:Y}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return z.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function c6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${u5(j)}`}class h6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${R5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#drawio-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class i6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=v5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let z=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(m5(this.iframe.contentWindow))return;setTimeout(z,250)};z()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=M1,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await c6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await c6(_,"image/png");else this.xmlData=p6(await _.text());else if(_.status===404)this.xmlData=M1;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?p6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var C1={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!f5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new h6(_,$);return new i6(_,$)}};class l6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var l_=new l6;var X4="workspaceExplorerScale",g5=["compact","default","comfortable"],p5=new Set(g5),c5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function n6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return p5.has(j)?j:$}function I1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function h5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function i5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function b1(_={}){let $=h5(_),j=_.stored?n6(_.stored,$):$;return i5(j,_)}function d6(_){return c5[n6(_)]}var l5=60000,a6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function t6(_,$,j,Z=0,N=[]){if(!j&&a6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let z of _.children)t6(z,$,j,Z+1,N);return N}function s6(_,$,j){if(!_)return"";let Z=[],N=(z)=>{if(!j&&a6(z))return;if(Z.push(z.type==="dir"?`d:${z.path}`:`f:${z.path}`),z.children&&$?.has(z.path))for(let K of z.children)N(K)};return N(_),Z.join("|")}function f1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((W)=>[W?.path,W])):new Map,z=!j||j.length!==Z.length,K=Z.map((W)=>{let q=f1(N.get(W.path),W);if(q!==N.get(W.path))z=!0;return q});return z?{...$,children:K}:_}function x1(_,$,j){if(!_)return _;if(_.path===$)return f1(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((z)=>{let K=x1(z,$,j);if(K!==z)Z=!0;return K});return Z?{..._,children:N}:_}var e6=4,S1=14,n5=8,d5=16;function _8(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=_8(Z);return _.__bytes=j,j}function $8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=e6)return Z;let N=Array.isArray(_.children)?_.children:[],z=[];for(let W of N){let q=Math.max(0,Number(W?.__bytes??W?.size??0));if(q<=0)continue;if(W.type==="dir")z.push({kind:"dir",node:W,size:q});else z.push({kind:"file",name:W.name,path:W.path,size:q})}z.sort((W,q)=>q.size-W.size);let K=z;if(z.length>S1){let W=z.slice(0,S1-1),q=z.slice(S1-1),V=q.reduce((L,Y)=>L+Y.size,0);W.push({kind:"other",name:`+${q.length} more`,path:`${Z.path}/[other]`,size:V}),K=W}return Z.children=K.map((W)=>{if(W.kind==="dir")return $8(W.node,$+1);return{name:W.name,path:W.path,size:W.size,children:[]}}),Z}function o6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function j8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),z=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${z}%)`}function V4(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function R1(_,$,j,Z,N,z){let K=Math.PI*2-0.0001,W=z-N>K?N+K:z,q=V4(_,$,Z,N),V=V4(_,$,Z,W),L=V4(_,$,j,W),Y=V4(_,$,j,N),U=W-N>Math.PI?1:0;return[`M ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`L ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${Y.x.toFixed(3)} ${Y.y.toFixed(3)}`,"Z"].join(" ")}var Z8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function N8(_,$,j){let Z=[],N=[],z=Math.max(0,Number($)||0),K=(W,q,V,L)=>{let Y=Array.isArray(W?.children)?W.children:[];if(!Y.length)return;let U=Math.max(0,Number(W.size)||0);if(U<=0)return;let M=V-q,m=q;Y.forEach((v,R)=>{let E=Math.max(0,Number(v.size)||0);if(E<=0)return;let F=E/U,b=m,C=R===Y.length-1?V:m+M*F;if(m=C,C-b<0.003)return;let i=Z8[L];if(i){let l=j8(b,L,j);if(Z.push({key:v.path,path:v.path,label:v.name,size:E,color:l,depth:L,startAngle:b,endAngle:C,innerRadius:i[0],outerRadius:i[1],d:R1(120,120,i[0],i[1],b,C)}),L===1)N.push({key:v.path,name:v.name,size:E,pct:z>0?E/z*100:0,color:l})}if(L<e6)K(v,b,C,L+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function T1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=T1(Z,$);if(N)return N}return null}function z8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=Z8[1];if(!N)return{segments:[],legend:[]};let z=-Math.PI/2,K=Math.PI*3/2,W=j8(z,1,Z),V=`${$||"."}/[files]`;return{segments:[{key:V,path:V,label:_,size:j,color:W,depth:1,startAngle:z,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:R1(120,120,N[0],N[1],z,K)}],legend:[{key:V,name:_,size:j,pct:100,color:W}]}}function r6(_,$=!1,j=!1){if(!_)return null;let Z=_8(_),N=$8(_,0),z=N.size||Z,{segments:K,legend:W}=N8(N,z,j);if(!K.length&&z>0){let q=z8("[files]",N.path,z,j);K=q.segments,W=q.legend}return{root:N,totalSize:z,segments:K,legend:W,truncated:$,isDarkTheme:j}}function s5({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[z,K]=T(()=>[_?.root?.path||"."]),[W,q]=T(!1);f(()=>{let c=_?.root?.path||".";N(c),K([c]),j(null)},[_?.root?.path,_?.totalSize]),f(()=>{if(!Z)return;q(!0);let c=setTimeout(()=>q(!1),180);return()=>clearTimeout(c)},[Z]);let V=a_(()=>{return T1(_.root,Z)||_.root},[_?.root,Z]),L=V?.size||_.totalSize||0,{segments:Y,legend:U}=a_(()=>{let c=N8(V,L,_.isDarkTheme);if(c.segments.length>0)return c;if(L<=0)return c;let q_=V?.children?.length?"Total":"[files]";return z8(q_,V?.path||_?.root?.path||".",L,_.isDarkTheme)},[V,L,_.isDarkTheme,_?.root?.path]),[M,m]=T(Y),v=D(new Map),R=D(0);f(()=>{let c=v.current,q_=new Map(Y.map((N_)=>[N_.key,N_])),n_=performance.now(),e=220,r=(N_)=>{let j_=Math.min(1,(N_-n_)/220),L_=j_*(2-j_),d_=Y.map((Q_)=>{let U_=c.get(Q_.key)||{startAngle:Q_.startAngle,endAngle:Q_.startAngle,innerRadius:Q_.innerRadius,outerRadius:Q_.innerRadius},J_=(D0,Y_)=>D0+(Y_-D0)*L_,R_=J_(U_.startAngle,Q_.startAngle),W_=J_(U_.endAngle,Q_.endAngle),C_=J_(U_.innerRadius,Q_.innerRadius),v_=J_(U_.outerRadius,Q_.outerRadius);return{...Q_,d:R1(120,120,C_,v_,R_,W_)}});if(m(d_),j_<1)R.current=requestAnimationFrame(r)};if(R.current)cancelAnimationFrame(R.current);return R.current=requestAnimationFrame(r),v.current=q_,()=>{if(R.current)cancelAnimationFrame(R.current)}},[Y]);let E=M.length?M:Y,F=L>0?W$(L):"0 B",b=V?.name||"",i=(b&&b!=="."?b:"Total")||"Total",l=F,$_=z.length>1,n=(c)=>{if(!c?.path)return;let q_=T1(_.root,c.path);if(!q_||!Array.isArray(q_.children)||q_.children.length===0)return;K((n_)=>[...n_,q_.path]),N(q_.path),j(null)},z_=()=>{if(!$_)return;K((c)=>{let q_=c.slice(0,-1);return N(q_[q_.length-1]||_?.root?.path||"."),q_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${W?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${V?.path||_?.root?.path||"."}`}
                data-segments=${E.length}
                data-base-size=${L}>
                ${E.map((c)=>B`
                    <path
                        key=${c.key}
                        d=${c.d}
                        fill=${c.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===c.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(c)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(c)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>n(c)}
                    >
                        <title>${c.label} — ${W$(c.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${$_?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${i}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${l}</text>
                </g>
            </svg>
            ${U.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((c)=>B`
                        <div key=${c.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${c.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${c.name}>${c.name}</span>
                            <span class="workspace-folder-starburst-size">${W$(c.size)}</span>
                            <span class="workspace-folder-starburst-pct">${c.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function o5({mediaId:_}){let[$,j]=T(null);if(f(()=>{if(!_)return;V2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?W$($.metadata.size):"";return B`
        <a href=${K$(_)} download=${Z} class="file-attachment"
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
    `}function K8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:z,terminalVisible:K=!1}){let[W,q]=T(null),[V,L]=T(new Set(["."])),[Y,U]=T(null),[M,m]=T(null),[v,R]=T(""),[E,F]=T(null),[b,C]=T(null),[i,l]=T(!0),[$_,n]=T(!1),[z_,c]=T(null),[q_,n_]=T(()=>q2("workspaceShowHidden",!1)),[e,r]=T(!1),[N_,j_]=T(null),[L_,d_]=T(null),[Q_,x_]=T(null),[U_,J_]=T(!1),[R_,W_]=T(null),[C_,v_]=T(()=>o6()),[D0,Y_]=T(()=>b1({stored:G$(X4),...I1()})),[__,M_]=T(!1),X_=D(V),E_=D(""),w_=D(null),$0=D(0),h_=D(new Set),j0=D(null),k_=D(new Map),I_=D(_),b_=D(Z),z0=D(null),f_=D(null),w0=D(null),G0=D(null),W0=D(null),e0=D(null),K0=D("."),S_=D(null),Y0=D({path:null,dragging:!1,startX:0,startY:0}),s_=D({path:null,dragging:!1,startX:0,startY:0}),F0=D({path:null,timer:0}),P0=D(!1),o_=D(0),E0=D(new Map),M0=D(null),F_=D(null),u_=D(null),n0=D(null),X$=D(null),S=D(null),s=D(q_),K_=D($),y_=D(j??$),m_=D(0),T_=D(Q_),m0=D(e),T$=D(N_),_$=D(null),V$=D({x:0,y:0}),B0=D(0),f$=D(null),L0=D(Y),y0=D(M),A$=D(null),q$=D(null),x0=D(E);I_.current=_,b_.current=Z,f(()=>{X_.current=V},[V]),f(()=>{s.current=q_},[q_]),f(()=>{K_.current=$},[$]),f(()=>{y_.current=j??$},[j,$]),f(()=>{T_.current=Q_},[Q_]),f(()=>{if(typeof window>"u")return;let O=()=>{Y_(b1({stored:G$(X4),...I1()}))};O();let J=()=>O(),A=()=>O(),k=(u)=>{if(!u||u.key===null||u.key===X4)O()};window.addEventListener("resize",J),window.addEventListener("focus",A),window.addEventListener("storage",k);let g=window.matchMedia?.("(pointer: coarse)"),o=window.matchMedia?.("(hover: none)"),a=(u,O_)=>{if(!u)return;if(u.addEventListener)u.addEventListener("change",O_);else if(u.addListener)u.addListener(O_)},t=(u,O_)=>{if(!u)return;if(u.removeEventListener)u.removeEventListener("change",O_);else if(u.removeListener)u.removeListener(O_)};return a(g,J),a(o,J),()=>{window.removeEventListener("resize",J),window.removeEventListener("focus",A),window.removeEventListener("storage",k),t(g,J),t(o,J)}},[]),f(()=>{let O=(J)=>{let A=J?.detail?.path;if(!A)return;let k=A.split("/"),g=[];for(let o=1;o<k.length;o++)g.push(k.slice(0,o).join("/"));if(g.length)L((o)=>{let a=new Set(o);a.add(".");for(let t of g)a.add(t);return a});U(A),requestAnimationFrame(()=>{let o=document.querySelector(`[data-path="${CSS.escape(A)}"]`);if(o)o.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",O),()=>window.removeEventListener("workspace-reveal-path",O)},[]),f(()=>{m0.current=e},[e]),f(()=>{T$.current=N_},[N_]),f(()=>{L0.current=Y},[Y]),f(()=>{y0.current=M},[M]),f(()=>{x0.current=E},[E]),f(()=>{if(typeof window>"u"||typeof document>"u")return;let O=()=>v_(o6());O();let J=window.matchMedia?.("(prefers-color-scheme: dark)"),A=()=>O();if(J?.addEventListener)J.addEventListener("change",A);else if(J?.addListener)J.addListener(A);let k=typeof MutationObserver<"u"?new MutationObserver(()=>O()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(J?.removeEventListener)J.removeEventListener("change",A);else if(J?.removeListener)J.removeListener(A);k?.disconnect()}},[]),f(()=>{if(!M)return;let O=W0.current;if(!O)return;let J=requestAnimationFrame(()=>{try{O.focus(),O.select()}catch{}});return()=>cancelAnimationFrame(J)},[M]),f(()=>{if(!__)return;let O=(A)=>{let k=A?.target;if(!(k instanceof Element))return;if(X$.current?.contains(k))return;if(S.current?.contains(k))return;M_(!1)},J=(A)=>{if(A?.key==="Escape")M_(!1),S.current?.focus?.()};return document.addEventListener("mousedown",O),document.addEventListener("touchstart",O,{passive:!0}),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("touchstart",O),document.removeEventListener("keydown",J)}},[__]);let Z2=async(O)=>{n(!0),F(null),C(null);try{let J=await l4(O,20000);F(J)}catch(J){F({error:J.message||"Failed to load preview"})}finally{n(!1)}};z0.current=Z2;let g0=async()=>{if(!K_.current)return;try{let O=await y2("",1,s.current),J=s6(O.root,X_.current,s.current);if(J===E_.current){l(!1);return}if(E_.current=J,w_.current=O.root,!$0.current)$0.current=requestAnimationFrame(()=>{$0.current=0,q((A)=>f1(A,w_.current)),l(!1)})}catch(O){c(O.message||"Failed to load workspace"),l(!1)}},n$=async(O)=>{if(!O)return;if(h_.current.has(O))return;h_.current.add(O);try{let J=await y2(O,1,s.current);q((A)=>x1(A,O,J.root))}catch(J){c(J.message||"Failed to load workspace")}finally{h_.current.delete(O)}};f_.current=n$;let Z0=y(()=>{let O=Y;if(!O)return".";let J=k_.current?.get(O);if(J&&J.type==="dir")return J.path;if(O==="."||!O.includes("/"))return".";let A=O.split("/");return A.pop(),A.join("/")||"."},[Y]),O$=y((O)=>{let J=O?.closest?.(".workspace-row");if(!J)return null;let A=J.dataset.path,k=J.dataset.type;if(!A)return null;if(k==="dir")return A;if(A.includes("/")){let g=A.split("/");return g.pop(),g.join("/")||"."}return"."},[]),d0=y((O)=>{return O$(O?.target||null)},[O$]),C0=y((O)=>{T_.current=O,x_(O)},[]),I0=y(()=>{let O=F0.current;if(O?.timer)clearTimeout(O.timer);F0.current={path:null,timer:0}},[]),T0=y((O)=>{if(!O||O==="."){I0();return}let J=k_.current?.get(O);if(!J||J.type!=="dir"){I0();return}if(X_.current?.has(O)){I0();return}if(F0.current?.path===O)return;I0();let A=setTimeout(()=>{F0.current={path:null,timer:0},f_.current?.(O),L((k)=>{let g=new Set(k);return g.add(O),g})},600);F0.current={path:O,timer:A}},[I0]),B$=y((O,J)=>{if(V$.current={x:O,y:J},B0.current)return;B0.current=requestAnimationFrame(()=>{B0.current=0;let A=_$.current;if(!A)return;let k=V$.current;A.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),w$=y((O)=>{if(!O)return;let A=(k_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!A)return;d_({path:O,label:A})},[]),R$=y(()=>{if(d_(null),B0.current)cancelAnimationFrame(B0.current),B0.current=0;if(_$.current)_$.current.style.transform="translate(-9999px, -9999px)"},[]),v$=y((O)=>{if(!O)return".";let J=k_.current?.get(O);if(J&&J.type==="dir")return J.path;if(O==="."||!O.includes("/"))return".";let A=O.split("/");return A.pop(),A.join("/")||"."},[]),J0=y(()=>{m(null),R("")},[]),P$=y((O)=>{if(!O)return;let A=(k_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!A||O===".")return;m(O),R(A)},[]),p0=y(async()=>{let O=y0.current;if(!O)return;let J=(v||"").trim();if(!J){J0();return}let A=k_.current?.get(O),k=(A?.name||O.split("/").pop()||O).trim();if(J===k){J0();return}try{let o=(await s4(O,J))?.path||O,a=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(J0(),c(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:O,newPath:o,type:A?.type||"file"}})),A?.type==="dir")L((t)=>{let u=new Set;for(let O_ of t)if(O_===O)u.add(o);else if(O_.startsWith(`${O}/`))u.add(`${o}${O_.slice(O.length)}`);else u.add(O_);return u});if(U(o),A?.type==="dir")F(null),n(!1),C(null);else z0.current?.(o);f_.current?.(a)}catch(g){c(g?.message||"Failed to rename file")}},[J0,v]),Q0=y(async(O)=>{let k=O||".";for(let g=0;g<50;g+=1){let a=`untitled${g===0?"":`-${g}`}.md`;try{let u=(await d4(k,a,""))?.path||(k==="."?a:`${k}/${a}`);if(k&&k!==".")L((O_)=>new Set([...O_,k]));U(u),c(null),f_.current?.(k),z0.current?.(u);return}catch(t){if(t?.status===409||t?.code==="file_exists")continue;c(t?.message||"Failed to create file");return}}c("Failed to create file (untitled name already in use).")},[]),c0=y((O)=>{if(O?.stopPropagation?.(),U_)return;let J=v$(L0.current);Q0(J)},[U_,v$,Q0]);f(()=>{if(typeof window>"u")return;let O=(J)=>{let A=J?.detail?.updates||[];if(!Array.isArray(A)||A.length===0)return;q((t)=>{let u=t;for(let O_ of A){if(!O_?.root)continue;if(!u||O_.path==="."||!O_.path)u=O_.root;else u=x1(u,O_.path,O_.root)}if(u)E_.current=s6(u,X_.current,s.current);return l(!1),u});let k=L0.current;if(Boolean(k)&&A.some((t)=>{let u=t?.path||"";if(!u||u===".")return!0;return k===u||k.startsWith(`${u}/`)||u.startsWith(`${k}/`)}))E0.current.clear();if(!k||!x0.current)return;let o=k_.current?.get(k);if(o&&o.type==="dir")return;if(A.some((t)=>{let u=t?.path||"";if(!u||u===".")return!0;return k===u||k.startsWith(`${u}/`)}))z0.current?.(k)};return window.addEventListener("workspace-update",O),()=>window.removeEventListener("workspace-update",O)},[]),j0.current=g0;let N2=D(()=>{if(typeof window>"u")return;let O=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),J=y_.current??K_.current,A=document.visibilityState!=="hidden"&&(J||O.matches&&K_.current);k2(A,s.current).catch(()=>{})}).current,f0=D(0),z2=D(()=>{if(f0.current)clearTimeout(f0.current);f0.current=setTimeout(()=>{f0.current=0,N2()},250)}).current;f(()=>{if(K_.current)j0.current?.();z2()},[$,j]),f(()=>{j0.current(),N2();let O=setInterval(()=>j0.current(),l5),J=O2("previewHeight",null),A=Number.isFinite(J)?Math.min(Math.max(J,80),600):280;if(o_.current=A,w0.current)w0.current.style.setProperty("--preview-height",`${A}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),g=()=>z2();if(k.addEventListener)k.addEventListener("change",g);else if(k.addListener)k.addListener(g);return document.addEventListener("visibilitychange",g),()=>{if(clearInterval(O),$0.current)cancelAnimationFrame($0.current),$0.current=0;if(k.removeEventListener)k.removeEventListener("change",g);else if(k.removeListener)k.removeListener(g);if(document.removeEventListener("visibilitychange",g),f0.current)clearTimeout(f0.current),f0.current=0;if(S_.current)clearTimeout(S_.current),S_.current=null;k2(!1,s.current).catch(()=>{})}},[]);let F$=a_(()=>t6(W,V,q_),[W,V,q_]),u$=a_(()=>new Map(F$.map((O)=>[O.node.path,O.node])),[F$]),m$=a_(()=>d6(D0),[D0]);k_.current=u$;let i_=(Y?k_.current.get(Y):null)?.type==="dir";f(()=>{if(!Y||!i_){W_(null),M0.current=null,F_.current=null;return}let O=Y,J=`${q_?"hidden":"visible"}:${Y}`,A=E0.current,k=A.get(J);if(k?.root){A.delete(J),A.set(J,k);let a=r6(k.root,Boolean(k.truncated),C_);if(a)M0.current=a,F_.current=Y,W_({loading:!1,error:null,payload:a});return}let g=M0.current,o=F_.current;W_({loading:!0,error:null,payload:o===Y?g:null}),y2(Y,n5,q_).then((a)=>{if(L0.current!==O)return;let t={root:a?.root,truncated:Boolean(a?.truncated)};A.delete(J),A.set(J,t);while(A.size>d5){let O_=A.keys().next().value;if(!O_)break;A.delete(O_)}let u=r6(t.root,t.truncated,C_);M0.current=u,F_.current=Y,W_({loading:!1,error:null,payload:u})}).catch((a)=>{if(L0.current!==O)return;W_({loading:!1,error:a?.message||"Failed to load folder size chart",payload:o===Y?g:null})})},[Y,i_,q_,C_]);let b0=Boolean(E&&E.kind==="text"&&!i_&&(!E.size||E.size<=262144)),R0=b0?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",d$=Boolean(Y&&Y!=="."),s$=Boolean(Y&&!i_),o$=Boolean(Y&&!i_),J$=Y&&i_?t2(Y,q_):null,k0=y(()=>M_(!1),[]),X0=y(async(O)=>{k0();try{await O?.()}catch{}},[k0]);f(()=>{let O=u_.current;if(n0.current)n0.current.dispose(),n0.current=null;if(!O)return;if(O.innerHTML="",!Y||i_||!E||E.error)return;let J={path:Y,content:typeof E.text==="string"?E.text:void 0,mtime:E.mtime,size:E.size,preview:E,mode:"view"},A=_0.resolve(J)||_0.get("workspace-preview-default");if(!A)return;let k=A.mount(O,J);return n0.current=k,()=>{if(n0.current===k)k.dispose(),n0.current=null;O.innerHTML=""}},[Y,i_,E]);let U0=(O)=>{let J=O?.target;if(J instanceof Element)return J;return J?.parentElement||null},s0=(O)=>{return Boolean(O?.closest?.(".workspace-node-icon, .workspace-label-text"))},C$=D((O)=>{if(q$.current)clearTimeout(q$.current),q$.current=null;let A=U0(O)?.closest?.("[data-path]");if(!A)return;let k=A.dataset.path;if(A.dataset.type==="dir"||!k)return;if(y0.current===k)J0();b_.current?.(k)}).current,r$=D((O)=>{if(P0.current){P0.current=!1;return}let J=U0(O),A=J?.closest?.("[data-path]");if(G0.current?.focus?.(),!A)return;let k=A.dataset.path,g=A.dataset.type,o=Boolean(J?.closest?.(".workspace-caret")),a=Boolean(J?.closest?.("button"))||Boolean(J?.closest?.("a"))||Boolean(J?.closest?.("input")),t=L0.current===k,u=y0.current;if(u){if(u===k)return;J0()}let O_=g==="file"&&A$.current===k&&!o&&!a;if(t&&!o&&!a&&k!=="."&&!O_){if(q$.current)clearTimeout(q$.current);q$.current=setTimeout(()=>{q$.current=null,P$(k)},350);return}if(g==="dir"){if(A$.current=null,U(k),F(null),C(null),n(!1),!X_.current.has(k))f_.current?.(k);if(t&&!o)return;L((k$)=>{let V0=new Set(k$);if(V0.has(k))V0.delete(k);else V0.add(k);return V0})}else{A$.current=null,U(k);let H0=k_.current.get(k);if(H0)I_.current?.(H0.path,H0);z0.current?.(k)}}).current,H$=D(()=>{E_.current="",j0.current(),Array.from(X_.current||[]).filter((J)=>J&&J!==".").forEach((J)=>f_.current?.(J))}).current,$$=D(()=>{A$.current=null,U(null),F(null),C(null),n(!1)}).current,g$=D(()=>{n_((O)=>{let J=!O;if(typeof window<"u")N0("workspaceShowHidden",String(J));return s.current=J,k2(!0,J).catch(()=>{}),E_.current="",j0.current?.(),Array.from(X_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>f_.current?.(k)),J})}).current,j$=D((O)=>{if(U0(O)?.closest?.("[data-path]"))return;$$()}).current,A0=y(async(O)=>{if(!O)return;let J=O.split("/").pop()||O;if(!window.confirm(`Delete "${J}"? This cannot be undone.`))return;try{await r4(O);let k=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(L0.current===O)$$();f_.current?.(k),c(null)}catch(k){F((g)=>({...g||{},error:k.message||"Failed to delete file"}))}},[$$]),D$=y((O)=>{let J=G0.current;if(!J||!O||typeof CSS>"u"||typeof CSS.escape!=="function")return;J.querySelector(`[data-path="${CSS.escape(O)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),a$=y((O)=>{let J=F$;if(!J||J.length===0)return;let A=Y?J.findIndex((k)=>k.node.path===Y):-1;if(O.key==="ArrowDown"){O.preventDefault();let k=Math.min(A+1,J.length-1),g=J[k];if(!g)return;if(U(g.node.path),g.node.type!=="dir")I_.current?.(g.node.path,g.node),z0.current?.(g.node.path);else F(null),n(!1),C(null);D$(g.node.path);return}if(O.key==="ArrowUp"){O.preventDefault();let k=A<=0?0:A-1,g=J[k];if(!g)return;if(U(g.node.path),g.node.type!=="dir")I_.current?.(g.node.path,g.node),z0.current?.(g.node.path);else F(null),n(!1),C(null);D$(g.node.path);return}if(O.key==="ArrowRight"&&A>=0){let k=J[A];if(k?.node?.type==="dir"&&!V.has(k.node.path))O.preventDefault(),f_.current?.(k.node.path),L((g)=>new Set([...g,k.node.path]));return}if(O.key==="ArrowLeft"&&A>=0){let k=J[A];if(k?.node?.type==="dir"&&V.has(k.node.path))O.preventDefault(),L((g)=>{let o=new Set(g);return o.delete(k.node.path),o});return}if(O.key==="Enter"&&A>=0){O.preventDefault();let k=J[A];if(!k)return;let g=k.node.path;if(k.node.type==="dir"){if(!X_.current.has(g))f_.current?.(g);L((a)=>{let t=new Set(a);if(t.has(g))t.delete(g);else t.add(g);return t}),F(null),C(null),n(!1)}else I_.current?.(g,k.node),z0.current?.(g);return}if((O.key==="Delete"||O.key==="Backspace")&&A>=0){let k=J[A];if(!k||k.node.type==="dir")return;O.preventDefault(),A0(k.node.path);return}if(O.key==="Escape")O.preventDefault(),$$()},[$$,A0,V,F$,D$,Y]),p$=y((O)=>{let J=U0(O),A=J?.closest?.(".workspace-row");if(!A)return;let k=A.dataset.type,g=A.dataset.path;if(!g||g===".")return;if(y0.current===g)return;let o=O?.touches?.[0];if(!o)return;if(Y0.current={path:s0(J)?g:null,dragging:!1,startX:o.clientX,startY:o.clientY},k!=="file")return;if(S_.current)clearTimeout(S_.current);S_.current=setTimeout(()=>{if(S_.current=null,Y0.current?.dragging)return;A0(g)},600)},[A0]),Q=y(()=>{if(S_.current)clearTimeout(S_.current),S_.current=null;let O=Y0.current;if(O?.dragging&&O.path){let J=T_.current||Z0(),A=f$.current;if(typeof A==="function")A(O.path,J)}Y0.current={path:null,dragging:!1,startX:0,startY:0},m_.current=0,r(!1),j_(null),C0(null),I0(),R$()},[Z0,R$,C0,I0]),I=y((O)=>{let J=Y0.current,A=O?.touches?.[0];if(!A||!J?.path){if(S_.current)clearTimeout(S_.current),S_.current=null;return}let k=Math.abs(A.clientX-J.startX),g=Math.abs(A.clientY-J.startY),o=k>8||g>8;if(o&&S_.current)clearTimeout(S_.current),S_.current=null;if(!J.dragging&&o)J.dragging=!0,r(!0),j_("move"),w$(J.path);if(J.dragging){O.preventDefault(),B$(A.clientX,A.clientY);let a=document.elementFromPoint(A.clientX,A.clientY),t=O$(a)||Z0();if(T_.current!==t)C0(t);T0(t)}},[O$,Z0,w$,B$,C0,T0]),x=D((O)=>{O.preventDefault();let J=w0.current;if(!J)return;let A=O.clientY,k=o_.current||280,g=O.currentTarget;g.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let o=A,a=(u)=>{o=u.clientY;let O_=J.clientHeight-80,H0=Math.min(Math.max(k-(u.clientY-A),80),O_);J.style.setProperty("--preview-height",`${H0}px`),o_.current=H0},t=()=>{let u=J.clientHeight-80,O_=Math.min(Math.max(k-(o-A),80),u);o_.current=O_,g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",N0("previewHeight",String(Math.round(O_))),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",t)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",t)}).current,d=D((O)=>{O.preventDefault();let J=w0.current;if(!J)return;let A=O.touches[0];if(!A)return;let k=A.clientY,g=o_.current||280,o=O.currentTarget;o.classList.add("dragging"),document.body.style.userSelect="none";let a=(u)=>{let O_=u.touches[0];if(!O_)return;u.preventDefault();let H0=J.clientHeight-80,k$=Math.min(Math.max(g-(O_.clientY-k),80),H0);J.style.setProperty("--preview-height",`${k$}px`),o_.current=k$},t=()=>{o.classList.remove("dragging"),document.body.style.userSelect="",N0("previewHeight",String(Math.round(o_.current||g))),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",t),document.removeEventListener("touchcancel",t)};document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",t),document.addEventListener("touchcancel",t)}).current,V_=async()=>{if(!Y)return;try{let O=await n4(Y);if(O.media_id)C(O.media_id)}catch(O){F((J)=>({...J||{},error:O.message||"Failed to attach"}))}},A_=async()=>{if(!Y||i_)return;await A0(Y)},P_=(O)=>{return Array.from(O?.dataTransfer?.types||[]).includes("Files")},G_=y((O)=>{if(!P_(O))return;if(O.preventDefault(),m_.current+=1,!m0.current)r(!0);j_("upload");let J=d0(O)||Z0();C0(J),T0(J)},[Z0,d0,C0,T0]),Z$=y((O)=>{if(!P_(O))return;if(O.preventDefault(),O.dataTransfer)O.dataTransfer.dropEffect="copy";if(!m0.current)r(!0);if(T$.current!=="upload")j_("upload");let J=d0(O)||Z0();if(T_.current!==J)C0(J);T0(J)},[Z0,d0,C0,T0]),g_=y((O)=>{if(!P_(O))return;if(O.preventDefault(),m_.current=Math.max(0,m_.current-1),m_.current===0)r(!1),j_(null),C0(null),I0()},[C0,I0]),h0=y(async(O,J=".")=>{let A=Array.from(O||[]);if(A.length===0)return;let k=J&&J!==""?J:".",g=k!=="."?k:"workspace root";J_(!0);try{let o=null;for(let a of A)try{o=await r2(a,k)}catch(t){let u=t?.status,O_=t?.code;if(u===409||O_==="file_exists"){let H0=a?.name||"file";if(!window.confirm(`"${H0}" already exists in ${g}. Overwrite?`))continue;o=await r2(a,k,{overwrite:!0})}else throw t}if(o?.path)A$.current=o.path,U(o.path),z0.current?.(o.path);f_.current?.(k)}catch(o){c(o.message||"Failed to upload file")}finally{J_(!1)}},[]),E$=y(async(O,J)=>{if(!O)return;let A=k_.current?.get(O);if(!A)return;let k=J&&J!==""?J:".",g=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(k===g)return;try{let a=(await o4(O,k))?.path||O;if(A.type==="dir")L((t)=>{let u=new Set;for(let O_ of t)if(O_===O)u.add(a);else if(O_.startsWith(`${O}/`))u.add(`${a}${O_.slice(O.length)}`);else u.add(O_);return u});if(U(a),A.type==="dir")F(null),n(!1),C(null);else z0.current?.(a);f_.current?.(g),f_.current?.(k)}catch(o){c(o?.message||"Failed to move entry")}},[]);f$.current=E$;let c$=y(async(O)=>{if(!P_(O))return;O.preventDefault(),m_.current=0,r(!1),j_(null),x_(null),I0();let J=Array.from(O?.dataTransfer?.files||[]);if(J.length===0)return;let A=T_.current||d0(O)||Z0();await h0(J,A)},[Z0,d0,h0]),y$=y((O)=>{if(O?.stopPropagation?.(),U_)return;let J=O?.currentTarget?.dataset?.uploadTarget||".";K0.current=J,e0.current?.click()},[U_]),t$=y(()=>{if(U_)return;let O=L0.current,J=O?k_.current?.get(O):null;K0.current=J?.type==="dir"?J.path:".",e0.current?.click()},[U_]),I$=y(()=>{X0(()=>c0(null))},[X0,c0]),r_=y(()=>{X0(()=>t$())},[X0,t$]),S0=y(()=>{X0(()=>H$())},[X0,H$]),h$=y(()=>{X0(()=>g$())},[X0,g$]),K2=y(()=>{if(!Y||!b0)return;X0(()=>b_.current?.(Y,E))},[X0,Y,b0,E]),o0=y(()=>{if(!Y||Y===".")return;X0(()=>P$(Y))},[X0,Y,P$]),i0=y(()=>{if(!Y||i_)return;X0(()=>A_())},[X0,Y,i_,A_]),v0=y(()=>{if(!Y||i_)return;X0(()=>V_())},[X0,Y,i_,V_]),L$=y(()=>{if(!J$)return;if(k0(),typeof window<"u")window.open(J$,"_blank","noopener")},[k0,J$]),Q2=y(()=>{k0(),N?.()},[k0,N]),r0=y(()=>{k0(),z?.()},[k0,z]),f2=y((O)=>{if(!O||O.button!==0)return;let J=O.currentTarget;if(!J||!J.dataset)return;let A=J.dataset.path;if(!A||A===".")return;if(y0.current===A)return;let k=U0(O);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!s0(k))return;O.preventDefault(),s_.current={path:A,dragging:!1,startX:O.clientX,startY:O.clientY};let g=(a)=>{let t=s_.current;if(!t?.path)return;let u=Math.abs(a.clientX-t.startX),O_=Math.abs(a.clientY-t.startY),H0=u>4||O_>4;if(!t.dragging&&H0)t.dragging=!0,P0.current=!0,r(!0),j_("move"),w$(t.path),B$(a.clientX,a.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(t.dragging){a.preventDefault(),B$(a.clientX,a.clientY);let k$=document.elementFromPoint(a.clientX,a.clientY),V0=O$(k$)||Z0();if(T_.current!==V0)C0(V0);T0(V0)}},o=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",o);let a=s_.current;if(a?.dragging&&a.path){let t=T_.current||Z0(),u=f$.current;if(typeof u==="function")u(a.path,t)}s_.current={path:null,dragging:!1,startX:0,startY:0},m_.current=0,r(!1),j_(null),C0(null),I0(),R$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{P0.current=!1},0)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",o)},[O$,Z0,w$,B$,R$,C0,T0,I0]),q4=y(async(O)=>{let J=Array.from(O?.target?.files||[]);if(J.length===0)return;let A=K0.current||".";if(await h0(J,A),K0.current=".",O?.target)O.target.value=""},[h0]);return B`
        <aside
            class=${`workspace-sidebar${e?" workspace-drop-active":""}`}
            data-workspace-scale=${D0}
            ref=${w0}
            onDragEnter=${G_}
            onDragOver=${Z$}
            onDragLeave=${g_}
            onDrop=${c$}
        >
            <input type="file" multiple style="display:none" ref=${e0} onChange=${q4} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <span>Workspace</span>
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${S}
                            class=${`workspace-menu-button${__?" active":""}`}
                            onClick=${(O)=>{O.stopPropagation(),M_((J)=>!J)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${__?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${__&&B`
                            <div class="workspace-menu-dropdown" ref=${X$} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${I$} disabled=${U_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${r_} disabled=${U_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${S0}>Refresh tree</button>
                                <button class=${`workspace-menu-item${q_?" active":""}`} role="menuitem" onClick=${h$}>
                                    ${q_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${Y&&B`<div class="workspace-menu-separator"></div>`}
                                ${Y&&!i_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${K2} disabled=${!b0}>Open in editor</button>
                                `}
                                ${d$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${o0}>Rename selected</button>
                                `}
                                ${o$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${v0}>Download selected file</button>
                                `}
                                ${J$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L$}>Download selected folder (zip)</button>
                                `}
                                ${s$&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${i0}>Delete selected file</button>
                                `}

                                ${(N||z)&&B`<div class="workspace-menu-separator"></div>`}
                                ${N&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${z&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${r0}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${c0} title="New file" disabled=${U_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${H$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${j$}>
                ${U_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${i&&B`<div class="workspace-loading">Loading…</div>`}
                ${z_&&B`<div class="workspace-error">${z_}</div>`}
                ${W&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${G0}
                        tabIndex="0"
                        onClick=${r$}
                        onDblClick=${C$}
                        onKeyDown=${a$}
                        onTouchStart=${p$}
                        onTouchEnd=${Q}
                        onTouchMove=${I}
                        onTouchCancel=${Q}
                    >
                        ${F$.map(({node:O,depth:J})=>{let A=O.type==="dir",k=O.path===Y,g=O.path===M,o=A&&V.has(O.path),a=Q_&&O.path===Q_,t=Array.isArray(O.children)&&O.children.length>0?O.children.length:Number(O.child_count)||0;return B`
                                <div
                                    key=${O.path}
                                    class=${`workspace-row${k?" selected":""}${a?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+J*m$.indentPx}px`}}
                                    data-path=${O.path}
                                    data-type=${O.type}
                                    onMouseDown=${f2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${A?o?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${A?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${A?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${g?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${W0}
                                                value=${v}
                                                onInput=${(u)=>R(u?.target?.value||"")}
                                                onKeyDown=${(u)=>{if(u.key==="Enter")u.preventDefault(),p0();else if(u.key==="Escape")u.preventDefault(),J0()}}
                                                onBlur=${J0}
                                                onClick=${(u)=>u.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${O.name}</span></span>`}
                                    ${A&&!o&&t>0&&B`
                                        <span class="workspace-count">${t}</span>
                                    `}
                                    ${A&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${O.path}
                                            title="Upload files to this folder"
                                            onClick=${y$}
                                            disabled=${U_}
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
            ${Y&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${x} onTouchStart=${d}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${Y}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${c0} title="New file" disabled=${U_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!i_&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>b0&&b_.current?.(Y,E)}
                                    title=${R0}
                                    disabled=${!b0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${A_}
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
                            ${i_?B`
                                    <button class="workspace-download" onClick=${t$}
                                        title="Upload files to this folder" disabled=${U_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${t2(Y,q_)}
                                        title="Download folder as zip" onClick=${(O)=>O.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${V_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${$_&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&B`<div class="workspace-error">${E.error}</div>`}
                    ${i_&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${R_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${R_?.error&&B`<div class="workspace-error">${R_.error}</div>`}
                        ${R_?.payload&&R_.payload.segments?.length>0&&B`
                            <${s5} payload=${R_.payload} />
                        `}
                        ${R_?.payload&&(!R_.payload.segments||R_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!i_&&B`
                        <div class="workspace-preview-body" ref=${u_}></div>
                    `}
                    ${b&&B`
                        <div class="workspace-download-card">
                            <${o5} mediaId=${b} />
                        </div>
                    `}
                </div>
            `}
            ${L_&&B`
                <div class="workspace-drag-ghost" ref=${_$}>${L_.label}</div>
            `}
        </aside>
    `}var r5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,a5=/\.(csv|tsv)$/i,t5=/\.pdf$/i,e5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,Y8=/\.drawio(\.xml|\.svg|\.png)?$/i;function G8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:z,onTogglePin:K,onTogglePreview:W,previewTabs:q,onToggleDock:V,dockVisible:L}){let[Y,U]=T(null),M=D(null);f(()=>{if(!Y)return;let F=(b)=>{if(b.type==="keydown"&&b.key!=="Escape")return;U(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[Y]),f(()=>{let F=(b)=>{if(b.ctrlKey&&b.key==="Tab"){if(b.preventDefault(),!_.length)return;let C=_.findIndex((i)=>i.id===$);if(b.shiftKey){let i=_[(C-1+_.length)%_.length];j?.(i.id)}else{let i=_[(C+1)%_.length];j?.(i.id)}return}if((b.ctrlKey||b.metaKey)&&b.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(b.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let m=y((F,b)=>{if(F.button===1){F.preventDefault(),Z?.(b);return}if(F.button===0)j?.(b)},[j,Z]),v=y((F,b)=>{F.preventDefault(),U({id:b,x:F.clientX,y:F.clientY})},[]),R=y((F)=>{F.preventDefault(),F.stopPropagation()},[]),E=y((F,b)=>{F.preventDefault(),F.stopPropagation(),Z?.(b)},[Z]);if(f(()=>{if(!$||!M.current)return;let F=M.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${M} role="tablist">
            ${_.map((F)=>B`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(b)=>m(b,F.id)}
                    onContextMenu=${(b)=>v(b,F.id)}
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
                        onMouseDown=${R}
                        onClick=${(b)=>E(b,F.id)}
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
        ${Y&&B`
            <div class="tab-context-menu" style=${{left:Y.x+"px",top:Y.y+"px"}}>
                <button onClick=${()=>{Z?.(Y.id),U(null)}}>Close</button>
                <button onClick=${()=>{N?.(Y.id),U(null)}}>Close Others</button>
                <button onClick=${()=>{z?.(),U(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(Y.id),U(null)}}>
                    ${_.find((F)=>F.id===Y.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${W&&/\.(md|mdx|markdown)$/i.test(Y.id)&&B`
                    <hr />
                    <button onClick=${()=>{W(Y.id),U(null)}}>
                        ${q?.has(Y.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${r5.test(Y.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(Y.id),b=Y.id.split("/").pop()||"document",C="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(b);window.open(C,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${a5.test(Y.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/csv-viewer/?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${t5.test(Y.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${e5.test(Y.id)&&!Y8.test(Y.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/image-viewer/?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
                ${Y8.test(Y.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(Y.id);window.open(F,"_blank","noopener"),U(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var _j=400,v1=60,W8=220,u1="mdPreviewHeight";function $j(){try{let _=localStorage.getItem(u1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=v1?$:W8}catch{return W8}}function X8({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[z,K]=T($j),W=D(null),q=D(null),V=D(""),L=D(_);return L.current=_,f(()=>{let M=()=>{let v=L.current?.()||"";if(v===V.current)return;V.current=v;try{let R=t0(v,null,{sanitize:!1});N(R)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};M();let m=setInterval(M,_j);return()=>clearInterval(m)},[]),f(()=>{if(W.current&&Z)S$(W.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(M)=>{M.preventDefault();let m=M.clientY,v=q.current?.offsetHeight||z,R=q.current?.parentElement,E=R?R.offsetHeight*0.7:500,F=M.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let b=(i)=>{let l=Math.min(Math.max(v-(i.clientY-m),v1),E);K(l)},C=()=>{F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(u1,String(Math.round(q.current?.offsetHeight||z)))}catch{}document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",C)}}
            onTouchStart=${(M)=>{M.preventDefault();let m=M.touches[0];if(!m)return;let v=m.clientY,R=q.current?.offsetHeight||z,E=q.current?.parentElement,F=E?E.offsetHeight*0.7:500,b=M.currentTarget;b.classList.add("dragging"),document.body.style.userSelect="none";let C=(l)=>{let $_=l.touches[0];if(!$_)return;l.preventDefault();let n=Math.min(Math.max(R-($_.clientY-v),v1),F);K(n)},i=()=>{b.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(u1,String(Math.round(q.current?.offsetHeight||z)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}}
        ></div>
        <div class="md-preview-panel" ref=${q} style=${{height:z+"px"}}>
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
                ref=${W}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function V8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let z=D(_);z.current=_;let K=D($);K.current=$;let W=D(j);W.current=j;let q=D(Z);q.current=Z,f(()=>{W.current();let V=new e2((Y,U)=>z.current(Y,U),(Y)=>K.current(Y),{chatJid:N});V.connect();let L=()=>{V.reconnectIfNeeded();let Y=typeof document<"u"?document:null;if(!Y||Y.visibilityState==="visible")q.current?.()};return window.addEventListener("focus",L),document.addEventListener("visibilitychange",L),()=>{window.removeEventListener("focus",L),document.removeEventListener("visibilitychange",L),V.disconnect()}},[N])}function q8(){let[_,$]=T(!1),[j,Z]=T("default"),N=D(!1);f(()=>{let q=q2("notificationsEnabled",!1);if(N.current=q,$(q),typeof Notification<"u")Z(Notification.permission)},[]),f(()=>{N.current=_},[_]);let z=y(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let q=Notification.requestPermission();if(q&&typeof q.then==="function")return q;return Promise.resolve(q)}catch{return Promise.resolve("default")}},[]),K=y(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let V=await z();if(Z(V||"default"),V!=="granted"){N.current=!1,$(!1),N0("notificationsEnabled","false");return}}let q=!N.current;N.current=q,$(q),N0("notificationsEnabled",String(q))},[z]),W=y((q,V)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let L=new Notification(q,{body:V});return L.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:W}}var x2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function O8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[z,K]=T(!1),W=D(!1),q=D(null),V=D(!1),L=D(null),Y=D(null),U=D(0);f(()=>{W.current=z},[z]),f(()=>{Y.current=Z},[Z]),f(()=>{U.current+=1,Y.current=null,L.current=null,V.current=!1,W.current=!1,N(null),K(!1)},[j]);let M=y(async(R=null)=>{let E=U.current;try{if(R){let F=await b4(R,50,0,j);if(E!==U.current)return;N(F.posts),K(!1)}else{let F=await D2(10,null,j);if(E!==U.current)return;N(F.posts),K(F.has_more)}}catch(F){if(E!==U.current)return;console.error("Failed to load posts:",F)}},[j]),m=y(async()=>{let R=U.current;try{let E=await D2(10,null,j);if(R!==U.current)return;N((F)=>{if(!F||F.length===0)return E.posts;return x2([...E.posts,...F])}),K((F)=>F||E.has_more)}catch(E){if(R!==U.current)return;console.error("Failed to refresh timeline:",E)}},[j]),v=y(async(R={})=>{let E=U.current,F=Y.current;if(!F||F.length===0)return;if(V.current)return;let{preserveScroll:b=!0,preserveMode:C="top",allowRepeat:i=!1}=R,l=(z_)=>{if(!b){z_();return}if(C==="top")$(z_);else _(z_)},n=F.slice().sort((z_,c)=>z_.id-c.id)[0]?.id;if(!Number.isFinite(n))return;if(!i&&L.current===n)return;V.current=!0,L.current=n;try{let z_=await D2(10,n,j);if(E!==U.current)return;if(z_.posts.length>0)l(()=>{N((c)=>x2([...z_.posts,...c||[]])),K(z_.has_more)});else K(!1)}catch(z_){if(E!==U.current)return;console.error("Failed to load more posts:",z_)}finally{if(E===U.current)V.current=!1}},[j,_,$]);return f(()=>{q.current=v},[v]),{posts:Z,setPosts:N,hasMore:z,setHasMore:K,hasMoreRef:W,loadPosts:M,refreshTimeline:m,loadMore:v,loadMoreRef:q,loadingMoreRef:V,lastBeforeIdRef:L}}function B8(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,z]=T(""),[K,W]=T({text:"",totalLines:0}),[q,V]=T(null),[L,Y]=T(null),[U,M]=T(null),m=D(null),v=D(0),R=D(!1),E=D(""),F=D(""),b=D(null),C=D(null),i=D(null),l=D(null),$_=D(!1),n=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:z,agentThought:K,setAgentThought:W,pendingRequest:q,setPendingRequest:V,currentTurnId:L,setCurrentTurnId:Y,steerQueuedTurnId:U,setSteerQueuedTurnId:M,lastAgentEventRef:m,lastSilenceNoticeRef:v,isAgentRunningRef:R,draftBufferRef:E,thoughtBufferRef:F,pendingRequestRef:b,stalledPostIdRef:C,currentTurnIdRef:i,steerQueuedTurnIdRef:l,thoughtExpandedRef:$_,draftExpandedRef:n}}function L8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((L)=>{L.preventDefault();let Y=_.current;if(!Y)return;let U=L.clientX,M=$.current||280,m=L.currentTarget;m.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=U,R=(F)=>{v=F.clientX;let b=Math.min(Math.max(M+(F.clientX-U),160),600);Y.style.setProperty("--sidebar-width",`${b}px`),$.current=b},E=()=>{let F=Math.min(Math.max(M+(v-U),160),600);$.current=F,m.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",N0("sidebarWidth",String(Math.round(F))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,z=D((L)=>{L.preventDefault();let Y=_.current;if(!Y)return;let U=L.touches[0];if(!U)return;let M=U.clientX,m=$.current||280,v=L.currentTarget;v.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let R=(F)=>{let b=F.touches[0];if(!b)return;F.preventDefault();let C=Math.min(Math.max(m+(b.clientX-M),160),600);Y.style.setProperty("--sidebar-width",`${C}px`),$.current=C},E=()=>{v.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.userSelect="",N0("sidebarWidth",String(Math.round($.current||m))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,K=D((L)=>{L.preventDefault();let Y=_.current;if(!Y)return;let U=L.clientX,M=j.current||$.current||280,m=L.currentTarget;m.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=U,R=(F)=>{v=F.clientX;let b=Math.min(Math.max(M+(F.clientX-U),200),800);Y.style.setProperty("--editor-width",`${b}px`),j.current=b},E=()=>{let F=Math.min(Math.max(M+(v-U),200),800);j.current=F,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",N0("editorWidth",String(Math.round(F))),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,W=D((L)=>{L.preventDefault();let Y=_.current;if(!Y)return;let U=L.touches[0];if(!U)return;let M=U.clientX,m=j.current||$.current||280,v=L.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(F)=>{let b=F.touches[0];if(!b)return;F.preventDefault();let C=Math.min(Math.max(m+(b.clientX-M),200),800);Y.style.setProperty("--editor-width",`${C}px`),j.current=C},E=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",N0("editorWidth",String(Math.round(j.current||m))),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,q=D((L)=>{L.preventDefault();let Y=_.current;if(!Y)return;let U=L.clientY,M=Z?.current||200,m=L.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let v=U,R=(F)=>{v=F.clientY;let b=Math.min(Math.max(M-(F.clientY-U),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${b}px`),Z)Z.current=b;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{let F=Math.min(Math.max(M-(v-U),100),window.innerHeight*0.5);if(Z)Z.current=F;m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",N0("dockHeight",String(Math.round(F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",E)}).current,V=D((L)=>{L.preventDefault();let Y=_.current;if(!Y)return;let U=L.touches[0];if(!U)return;let M=U.clientY,m=Z?.current||200,v=L.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let R=(F)=>{let b=F.touches[0];if(!b)return;F.preventDefault();let C=Math.min(Math.max(m-(b.clientY-M),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",N0("dockHeight",String(Math.round(Z?.current||m))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",R),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",R,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:W,handleDockSplitterMouseDown:q,handleDockSplitterTouchStart:V}}function Q8({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=T(()=>l_.getTabs()),[N,z]=T(()=>l_.getActiveId()),[K,W]=T(()=>l_.getTabs().length>0);f(()=>{return l_.onChange((C,i)=>{Z(C),z(i),W(C.length>0)})},[]);let[q,V]=T(()=>new Set),L=y((C)=>{V((i)=>{let l=new Set(i);if(l.has(C))l.delete(C);else l.add(C);return l})},[]),Y=y((C)=>{V((i)=>{if(!i.has(C))return i;let l=new Set(i);return l.delete(C),l})},[]),U=y((C,i={})=>{if(!C)return;let l={path:C,mode:"edit"};try{if(!_0.resolve(l)){if(!_0.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(n){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,n)}let $_=typeof i?.label==="string"&&i.label.trim()?i.label.trim():void 0;l_.open(C,$_)},[]),M=y(()=>{let C=l_.getActiveId();if(C){let i=l_.get(C);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}l_.close(C),Y(C),$.current?.(C)}},[Y]),m=y((C)=>{let i=l_.get(C);if(i?.dirty){if(!window.confirm(`"${i.label}" has unsaved changes. Close anyway?`))return}l_.close(C),Y(C),$.current?.(C)},[Y]),v=y((C)=>{l_.activate(C)},[]),R=y((C)=>{let i=l_.getTabs().filter((n)=>n.id!==C&&!n.pinned),l=i.filter((n)=>n.dirty).length;if(l>0){if(!window.confirm(`${l} unsaved tab${l>1?"s":""} will be closed. Continue?`))return}let $_=i.map((n)=>n.id);l_.closeOthers(C),$_.forEach((n)=>{Y(n),$.current?.(n)})},[Y]),E=y(()=>{let C=l_.getTabs().filter(($_)=>!$_.pinned),i=C.filter(($_)=>$_.dirty).length;if(i>0){if(!window.confirm(`${i} unsaved tab${i>1?"s":""} will be closed. Continue?`))return}let l=C.map(($_)=>$_.id);l_.closeAll(),l.forEach(($_)=>{Y($_),$.current?.($_)})},[Y]),F=y((C)=>{l_.togglePin(C)},[]),b=y(()=>{let C=l_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return f(()=>{let C=(i)=>{let{oldPath:l,newPath:$_,type:n}=i.detail||{};if(!l||!$_)return;if(n==="dir"){for(let z_ of l_.getTabs())if(z_.path===l||z_.path.startsWith(`${l}/`)){let c=`${$_}${z_.path.slice(l.length)}`;l_.rename(z_.id,c)}}else l_.rename(l,$_)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),f(()=>{let C=(i)=>{if(l_.hasUnsaved())i.preventDefault(),i.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:q,openEditor:U,closeEditor:M,handleTabClose:m,handleTabActivate:v,handleTabCloseOthers:R,handleTabCloseAll:E,handleTabTogglePin:F,handleTabTogglePreview:L,revealInExplorer:b}}function m1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],z=Number(N);return Number.isFinite(z)?z:$}catch{return $}}var g1=m1("warning",30000),U8=m1("finalize",120000),p1=m1("refresh",30000),F8=30000;function J8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function H8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function D8(_=30000){let[,$]=T(0);f(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function c1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function E8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function j2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function h1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),z=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(z||N>1||K)}function y8(_,$={}){if(j2($))return null;if(h1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:jj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function k8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function A8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function w8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function P8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function T2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function M8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function jj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function i1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function l1(_){return String(_||"").trim()||"web:default"}function C8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function I8(_={}){return j2(_)&&h1(_)}function Zj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Nj(_={},$={}){if(!I8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=Zj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function b8(_={}){if(!I8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,z=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let Y of N)$.clearTimeout?.(Y);N.clear()},K=()=>{Z=0,Nj({window:$,document:j})},W=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},q=()=>{W();for(let Y of[80,220,420]){let U=$.setTimeout?.(()=>{N.delete(U),W()},Y);if(U!=null)N.add(U)}},V=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;q()},L=$.visualViewport;return q(),$.addEventListener("focus",q),$.addEventListener("pageshow",q),$.addEventListener("resize",q),$.addEventListener("orientationchange",q),j.addEventListener("visibilitychange",V),j.addEventListener("focusin",q,!0),L?.addEventListener?.("resize",q),L?.addEventListener?.("scroll",q),()=>{z(),$.removeEventListener("focus",q),$.removeEventListener("pageshow",q),$.removeEventListener("resize",q),$.removeEventListener("orientationchange",q),j.removeEventListener("visibilitychange",V),j.removeEventListener("focusin",q,!0),L?.removeEventListener?.("resize",q),L?.removeEventListener?.("scroll",q)}}function zj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function U$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:zj($,j)}var Kj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function S8(_){return Kj.has(String(_||"").trim())}function Yj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function x8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Yj(_),{detail:Z})),!0}var Gj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function T8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(j2({window:j,navigator:Z}))};N();let K=Gj.map((W)=>{try{return j.matchMedia?.(W)??null}catch{return null}}).filter(Boolean).map((W)=>{if(typeof W.addEventListener==="function")return W.addEventListener("change",N),()=>W.removeEventListener("change",N);if(typeof W.addListener==="function")return W.addListener(N),()=>W.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let W of K)W();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function f8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var d1="piclaw_btw_session";function Wj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Xj(){let _=G$(d1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",z=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?z||"BTW stream interrupted. You can retry.":z,model:null,status:K}}catch{return null}}var R8=S4,v8=T4,Vj=R4,u8=p4,m8=c4,g8=v4,n1=U$(Y$,"getAgentContext",null),qj=U$(Y$,"getAgentModels",{current:null,models:[]}),Oj=U$(Y$,"getActiveChatAgents",{chats:[]}),p8=U$(Y$,"getChatBranches",{chats:[]}),Bj=U$(Y$,"renameChatBranch",null),Lj=U$(Y$,"pruneChatBranch",null),Qj=U$(Y$,"getAgentQueueState",{count:0}),Uj=U$(Y$,"steerAgentQueueItem",{removed:!1,queued:"steer"}),Fj=U$(Y$,"removeAgentQueueItem",{removed:!1}),Jj=U$(Y$,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});_0.register(O1);_0.register(E1);_0.register(D1);_0.register(y1);_0.register(k1);_0.register(A1);_0.register(P1);_0.register(C1);B1();_0.register(F1);_0.register(J1);function Hj({locationParams:_}){let $=a_(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),j=a_(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Z=a_(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),N=a_(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():$},[$,_]),[z,K]=T("disconnected"),[W,q]=T(()=>j2()),[V,L]=T(null),[Y,U]=T(null),[M,m]=T(!1),[v,R]=T("current"),[E,F]=T([]),[b,C]=T([]),[i,l]=T(null),{agentStatus:$_,setAgentStatus:n,agentDraft:z_,setAgentDraft:c,agentPlan:q_,setAgentPlan:n_,agentThought:e,setAgentThought:r,pendingRequest:N_,setPendingRequest:j_,currentTurnId:L_,setCurrentTurnId:d_,steerQueuedTurnId:Q_,setSteerQueuedTurnId:x_,lastAgentEventRef:U_,lastSilenceNoticeRef:J_,isAgentRunningRef:R_,draftBufferRef:W_,thoughtBufferRef:C_,pendingRequestRef:v_,stalledPostIdRef:D0,currentTurnIdRef:Y_,steerQueuedTurnIdRef:__,thoughtExpandedRef:M_,draftExpandedRef:X_}=B8(),[E_,w_]=T({}),[$0,h_]=T(null),[j0,k_]=T(null),[I_,b_]=T(!1),[z0,f_]=T(null),[w0,G0]=T([]),[W0,e0]=T([]),[K0,S_]=T(null),[Y0,s_]=T([]),[F0,P0]=T(!1),[o_,E0]=T(()=>Xj()),M0=a_(()=>w0.find((X)=>X?.chat_jid===$)||null,[w0,$]),F_=a_(()=>W0.find((X)=>X?.chat_jid===$)||M0||null,[M0,W0,$]),u_=F_?.root_chat_jid||M0?.root_chat_jid||$,n0=Wj(v),[X$,S]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),s=Y0.length,K_=D(new Set),y_=D([]),m_=D(new Set),T_=D(0),m0=D({inFlight:!1,lastAttemptAt:0,turnId:null});K_.current=new Set(Y0.map((X)=>X.row_id)),y_.current=Y0;let{notificationsEnabled:T$,notificationPermission:_$,toggleNotifications:V$,notify:B0}=q8(),[f$,L0]=T(()=>new Set),[y0,A$]=T(()=>q2("workspaceOpen",!0)),q$=D(null),{editorOpen:x0,tabStripTabs:Z2,tabStripActiveId:g0,previewTabs:n$,openEditor:Z0,closeEditor:O$,handleTabClose:d0,handleTabActivate:C0,handleTabCloseOthers:I0,handleTabCloseAll:T0,handleTabTogglePin:B$,handleTabTogglePreview:w$,revealInExplorer:R$}=Q8({onTabClosed:(X)=>q$.current?.(X)}),v$=D(null),J0=D(null),P$=D(null),p0=D(null),Q0=_0.getDockPanes().length>0,[c0,N2]=T(!1),f0=y(()=>N2((X)=>!X),[]),z2=y(()=>{Z0(Q1,{label:"Terminal"})},[Z0]),F$=!j&&(x0||Q0&&c0);f(()=>{let X=v$.current;if(!X)return;if(J0.current)J0.current.dispose(),J0.current=null;let G=g0;if(!G)return;let H={path:G,mode:"edit"},P=_0.resolve(H)||_0.get("editor");if(!P){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let w=P.mount(X,H);J0.current=w,w.onDirtyChange?.((Z_)=>{l_.setDirty(G,Z_)}),w.onSaveRequest?.(()=>{}),w.onClose?.(()=>{O$()});let p=l_.getViewState(G);if(p&&typeof w.restoreViewState==="function")requestAnimationFrame(()=>w.restoreViewState(p));if(typeof w.onViewStateChange==="function")w.onViewStateChange((Z_)=>{l_.saveViewState(G,Z_)});return requestAnimationFrame(()=>w.focus()),()=>{if(J0.current===w)w.dispose(),J0.current=null}},[g0,O$]),f(()=>{let X=(G)=>{let H=G.detail?.path;if(H)Z0(H)};return document.addEventListener("office-viewer:open-tab",X),document.addEventListener("drawio:open-tab",X),document.addEventListener("pdf-viewer:open-tab",X),document.addEventListener("image-viewer:open-tab",X),()=>{document.removeEventListener("office-viewer:open-tab",X),document.removeEventListener("drawio:open-tab",X),document.removeEventListener("pdf-viewer:open-tab",X),document.removeEventListener("image-viewer:open-tab",X)}},[Z0]),f(()=>{let X=P$.current;if(p0.current)p0.current.dispose(),p0.current=null;if(!X||!Q0||!c0)return;let G=_0.getDockPanes()[0];if(!G){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let H=G.mount(X,{mode:"view"});return p0.current=H,requestAnimationFrame(()=>H.focus?.()),()=>{if(p0.current===H)H.dispose(),p0.current=null}},[Q0,c0]);let[u$,m$]=T({name:"You",avatar_url:null,avatar_background:null}),M$=D(!1),i_=D(!1),b0=D(null),R0=D($),d$=D(new Map),s$=D($),o$=D(0),J$=D(0),k0=D({}),X0=D({name:null,avatar_url:null}),U0=D({currentHashtag:null,searchQuery:null}),s0=D(null),C$=D(null),r$=D(0),H$=D(0),$$=D(0),g$=D(null),j$=D(null),A0=D(null),D$=D(null),a$=D(0),p$=D({title:null,avatarBase:null}),Q=D(null),I=y(()=>{if(Q.current)clearTimeout(Q.current),Q.current=null;l(null)},[]);D8(30000),f(()=>{return i3()},[]),f(()=>{return T8(q)},[]),f(()=>{N0("workspaceOpen",String(y0))},[y0]),f(()=>{return b8()},[]),f(()=>{return()=>{I()}},[I]),f(()=>{if(!o_){N0(d1,"");return}N0(d1,JSON.stringify({question:o_.question||"",answer:o_.answer||"",thinking:o_.thinking||"",error:o_.error||null,status:o_.status||"success"}))},[o_]),f(()=>{k0.current=E_||{}},[E_]),f(()=>{R0.current=$},[$]),f(()=>{X0.current=u$||{name:"You",avatar_url:null,avatar_background:null}},[u$]);let x=y((X,G,H=null)=>{if(typeof document>"u")return;let P=(X||"").trim()||"PiClaw";if(p$.current.title!==P){document.title=P;let h=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(h&&h.getAttribute("content")!==P)h.setAttribute("content",P);p$.current.title=P}let w=document.getElementById("dynamic-favicon");if(!w)return;let p=w.getAttribute("data-default")||w.getAttribute("href")||"/favicon.ico",Z_=G||p,H_=G?`${Z_}|${H||""}`:Z_;if(p$.current.avatarBase!==H_){let h=G?`${Z_}${Z_.includes("?")?"&":"?"}v=${H||Date.now()}`:Z_;w.setAttribute("href",h),p$.current.avatarBase=H_}},[]),d=y((X)=>{if(!X)return;F((G)=>G.includes(X)?G:[...G,X])},[]),V_=y((X)=>{F((G)=>G.filter((H)=>H!==X))},[]);q$.current=V_;let A_=y(()=>{F([])},[]),P_=y((X)=>{if(!Array.isArray(X)){F([]);return}let G=[],H=new Set;for(let P of X){if(typeof P!=="string"||!P.trim())continue;let w=P.trim();if(H.has(w))continue;H.add(w),G.push(w)}F(G)},[]),G_=y((X,G=null,H="info",P=3000)=>{I(),l({title:X,detail:G||null,kind:H||"info"}),Q.current=setTimeout(()=>{l((w)=>w?.title===X?null:w)},P)},[I]),Z$=y((X)=>{let G=E8(X,{editorOpen:x0,resolvePane:(H)=>_0.resolve(H)});if(G.kind==="open"){Z0(G.path);return}if(G.kind==="toast")G_(G.title,G.detail,G.level)},[x0,Z0,G_]),g_=y(()=>{let X=g0;if(X)d(X)},[g0,d]),h0=y((X)=>{if(!X)return;C((G)=>G.includes(X)?G:[...G,X])},[]),E$=y(async(X,G=null)=>{let H=(w)=>{w.scrollIntoView({behavior:"smooth",block:"center"}),w.classList.add("post-highlight"),setTimeout(()=>w.classList.remove("post-highlight"),2000)},P=document.getElementById("post-"+X);if(P){H(P);return}try{let w=typeof G==="string"&&G.trim()?G.trim():$,Z_=(await x4(X,w))?.thread?.[0];if(!Z_)return;u((H_)=>{if(!H_)return[Z_];if(H_.some((h)=>h.id===Z_.id))return H_;return[...H_,Z_]}),requestAnimationFrame(()=>{setTimeout(()=>{let H_=document.getElementById("post-"+X);if(H_)H(H_)},50)})}catch(w){console.error("[scrollToMessage] Failed to fetch message",X,w)}},[$]),c$=y((X)=>{C((G)=>G.filter((H)=>H!==X))},[]),y$=y(()=>{C([])},[]),t$=y((X)=>{if(!Array.isArray(X)){C([]);return}let G=[],H=new Set;for(let P of X){if(typeof P!=="string"||!P.trim())continue;let w=P.trim();if(H.has(w))continue;H.add(w),G.push(w)}C(G)},[]),I$=y((X)=>{let G=typeof X==="string"&&X.trim()?X.trim():"Could not send your message.";G_("Compose failed",G,"error",5000)},[G_]),r_=y((X={})=>{let G=Date.now();if(U_.current=G,X.running)R_.current=!0,P0((H)=>H?H:!0);if(X.clearSilence)J_.current=0},[P0]),S0=y(()=>{if(D$.current)clearTimeout(D$.current),D$.current=null;a$.current=0},[]);f(()=>()=>{S0()},[S0]);let h$=y(()=>{S0(),n((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:G,lastActivity:H,...P}=X;return P})},[S0]),K2=y((X)=>{if(!X)return;S0();let G=Date.now();a$.current=G,n({type:X.type||"active",last_activity:!0}),D$.current=setTimeout(()=>{if(a$.current!==G)return;n((H)=>{if(!H||!(H.last_activity||H.lastActivity))return H;return null})},F8)},[S0]),o0=y(()=>{R_.current=!1,P0(!1),U_.current=null,J_.current=0,W_.current="",C_.current="",v_.current=null,j$.current=null,Y_.current=null,__.current=null,b0.current=null,m0.current={inFlight:!1,lastAttemptAt:0,turnId:null},S0(),d_(null),x_(null),M_.current=!1,X_.current=!1},[S0,d_,x_,P0]),i0=y((X)=>{if(!C8({remainingQueueCount:X,currentTurnId:Y_.current,isAgentTurnActive:F0}))return;__.current=null,x_(null)},[F0,x_]),v0=y(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),L$=y(()=>({agentStatus:$_,agentDraft:z_?{...z_}:{text:"",totalLines:0},agentPlan:q_||"",agentThought:e?{...e}:{text:"",totalLines:0},pendingRequest:N_,currentTurnId:L_,steerQueuedTurnId:Q_,isAgentTurnActive:Boolean(F0),followupQueueItems:Array.isArray(Y0)?Y0.map((X)=>({...X})):[],activeModel:$0,activeThinkingLevel:j0,supportsThinking:Boolean(I_),activeModelUsage:z0,contextUsage:K0,isAgentRunning:Boolean(R_.current),wasAgentActive:Boolean(i_.current),draftBuffer:W_.current||"",thoughtBuffer:C_.current||"",lastAgentEvent:U_.current||null,lastSilenceNotice:J_.current||0,lastAgentResponse:j$.current||null,currentTurnIdRef:Y_.current||null,steerQueuedTurnIdRef:__.current||null,thoughtExpanded:Boolean(M_.current),draftExpanded:Boolean(X_.current),agentStatusRef:b0.current||null,silentRecovery:{...m0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[$0,z0,j0,z_,q_,$_,e,K0,L_,Y0,F0,N_,Q_,I_]),Q2=y((X)=>{let G=X||v0();S0(),R_.current=Boolean(G.isAgentRunning),i_.current=Boolean(G.wasAgentActive),P0(Boolean(G.isAgentTurnActive)),U_.current=G.lastAgentEvent||null,J_.current=Number(G.lastSilenceNotice||0),W_.current=G.draftBuffer||"",C_.current=G.thoughtBuffer||"",v_.current=G.pendingRequest||null,j$.current=G.lastAgentResponse||null,Y_.current=G.currentTurnIdRef||null,__.current=G.steerQueuedTurnIdRef||null,b0.current=G.agentStatusRef||null,m0.current=G.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},M_.current=Boolean(G.thoughtExpanded),X_.current=Boolean(G.draftExpanded),n(G.agentStatus||null),c(G.agentDraft?{...G.agentDraft}:{text:"",totalLines:0}),n_(G.agentPlan||""),r(G.agentThought?{...G.agentThought}:{text:"",totalLines:0}),j_(G.pendingRequest||null),d_(G.currentTurnId||null),x_(G.steerQueuedTurnId||null),s_(Array.isArray(G.followupQueueItems)?G.followupQueueItems.map((H)=>({...H})):[]),h_(G.activeModel||null),k_(G.activeThinkingLevel||null),b_(Boolean(G.supportsThinking)),f_(G.activeModelUsage??null),S_(G.contextUsage??null)},[S0,v0,d_,s_,P0,x_]),r0=y((X)=>{if(!X)return;if(Y_.current===X)return;Y_.current=X,m0.current={inFlight:!1,lastAttemptAt:0,turnId:X},d_(X),__.current=null,x_(null),W_.current="",C_.current="",c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null),v_.current=null,j$.current=null,M_.current=!1,X_.current=!1},[d_,x_]),f2=y((X)=>{if(typeof document<"u"){let h=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&h)return}let G=j$.current;if(!G||!G.post)return;if(X&&G.turnId&&G.turnId!==X)return;let H=G.post;if(H.id&&g$.current===H.id)return;let P=String(H?.data?.content||"").trim();if(!P)return;g$.current=H.id||g$.current,j$.current=null;let w=P.replace(/\s+/g," ").slice(0,200),p=k0.current||{},H_=(H?.data?.agent_id?p[H.data.agent_id]:null)?.name||"Pi";B0(H_,w)},[B0]),q4=y(async(X,G)=>{if(X!=="thought"&&X!=="draft")return;let H=Y_.current;if(X==="thought"){if(M_.current=G,H)try{await m8(H,"thought",G)}catch(P){console.warn("Failed to update thought visibility:",P)}if(!G)return;try{let P=H?await u8(H,"thought"):null;if(P?.text)C_.current=P.text;r((w)=>({...w||{text:"",totalLines:0},fullText:C_.current||w?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:w?.totalLines||0}))}catch(P){console.warn("Failed to fetch full thought:",P)}return}if(X_.current=G,H)try{await m8(H,"draft",G)}catch(P){console.warn("Failed to update draft visibility:",P)}if(!G)return;try{let P=H?await u8(H,"draft"):null;if(P?.text)W_.current=P.text;c((w)=>({...w||{text:"",totalLines:0},fullText:W_.current||w?.fullText||"",totalLines:Number.isFinite(P?.total_lines)?P.total_lines:w?.totalLines||0}))}catch(P){console.warn("Failed to fetch full draft:",P)}},[]),O=D(null),J=y(()=>{let X=s0.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);O.current=J;let A=y((X)=>{let G=s0.current;if(!G||typeof X!=="function"){X?.();return}let{currentHashtag:H,searchQuery:P}=U0.current||{},w=!(P&&!H),p=w?G.scrollHeight-G.scrollTop:G.scrollTop;X(),requestAnimationFrame(()=>{let Z_=s0.current;if(!Z_)return;if(w){let H_=Math.max(Z_.scrollHeight-p,0);Z_.scrollTop=H_}else{let H_=Math.max(Z_.scrollHeight-Z_.clientHeight,0),h=Math.min(p,H_);Z_.scrollTop=h}})},[]),k=y((X)=>{let G=s0.current;if(!G||typeof X!=="function"){X?.();return}let H=G.scrollTop;X(),requestAnimationFrame(()=>{let P=s0.current;if(!P)return;let w=Math.max(P.scrollHeight-P.clientHeight,0);P.scrollTop=Math.min(H,w)})},[]),g="Queued as a follow-up (one-at-a-time).",o="⁣",a=y((X)=>{if(!X||!Array.isArray(X))return X;let G=K_.current,H=new Set(G),P=X.filter((w)=>{if(H.has(w?.id))return!1;if(w?.data?.is_bot_message){let p=w?.data?.content;if(p===g||p===o)return!1}return!0});return P.length===X.length?X:P},[]),{posts:t,setPosts:u,hasMore:O_,setHasMore:H0,hasMoreRef:k$,loadPosts:V0,refreshTimeline:u0,loadMore:c8,loadMoreRef:O4}=O8({preserveTimelineScroll:A,preserveTimelineScrollTop:k,chatJid:$}),Y2=a_(()=>a(t),[t,Y0,a]),R2=y(()=>{let X=D0.current;if(!X)return;u((G)=>G?G.filter((H)=>H.id!==X):G),D0.current=null},[u]),{handleSplitterMouseDown:h8,handleSplitterTouchStart:i8,handleEditorSplitterMouseDown:l8,handleEditorSplitterTouchStart:n8,handleDockSplitterMouseDown:d8,handleDockSplitterTouchStart:s8}=L8({appShellRef:C$,sidebarWidthRef:r$,editorWidthRef:H$,dockHeightRef:$$}),s1=y(()=>{if(!R_.current)return;R_.current=!1,J_.current=0,U_.current=null,Y_.current=null,d_(null),M_.current=!1,X_.current=!1;let X=(W_.current||"").trim();if(W_.current="",C_.current="",c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null),v_.current=null,j$.current=null,!X){n({type:"error",title:"Response stalled - No content received"});return}let H=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,P=Date.now(),w=new Date().toISOString(),p={id:P,timestamp:w,data:{type:"agent_response",content:H,agent_id:"default",is_local_stall:!0}};D0.current=P,u((Z_)=>Z_?x2([...Z_,p]):[p]),O.current?.(),n(null)},[d_]);f(()=>{U0.current={currentHashtag:V,searchQuery:Y}},[V,Y]);let p_=y(()=>{let X=++T_.current,G=$;Qj(G).then((H)=>{if(X!==T_.current)return;if(R0.current!==G)return;let P=m_.current,w=Array.isArray(H?.items)?H.items.map((p)=>({...p})).filter((p)=>!P.has(p.row_id)):[];if(w.length){s_((p)=>{if(p.length===w.length&&p.every((Z_,H_)=>Z_.row_id===w[H_].row_id))return p;return w});return}P.clear(),i0(0),s_((p)=>p.length===0?p:[])}).catch(()=>{if(X!==T_.current)return;if(R0.current!==G)return;s_((H)=>H.length===0?H:[])})},[i0,$,s_]),N$=y(async()=>{let X=$;try{let G=await n1(X);if(R0.current!==X)return;if(G)S_(G)}catch(G){if(R0.current!==X)return;console.warn("Failed to fetch agent context:",G)}},[$]),z$=y(async()=>{let X=$;try{let G=await g8(X);if(R0.current!==X)return null;if(!G||G.status!=="active"||!G.data){if(i_.current){let{currentHashtag:w,searchQuery:p}=U0.current||{};if(!w&&!p)u0()}return i_.current=!1,o0(),b0.current=null,n(null),c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null),v_.current=null,G??null}i_.current=!0;let H=G.data;b0.current=H;let P=H.turn_id||H.turnId;if(P)r0(P);if(r_({running:!0,clearSilence:!0}),h$(),n(H),G.thought&&G.thought.text)r((w)=>{if(w&&w.text&&w.text.length>=G.thought.text.length)return w;return C_.current=G.thought.text,{text:G.thought.text,totalLines:G.thought.totalLines||0}});if(G.draft&&G.draft.text)c((w)=>{if(w&&w.text&&w.text.length>=G.draft.text.length)return w;return W_.current=G.draft.text,{text:G.draft.text,totalLines:G.draft.totalLines||0}});return G}catch(G){return console.warn("Failed to fetch agent status:",G),null}},[o0,h$,r_,u0,r0]),B4=y(async()=>{if(!R_.current)return null;if(v_.current)return null;let X=Y_.current||null,G=m0.current,H=Date.now();if(G.inFlight)return null;if(G.turnId===X&&H-G.lastAttemptAt<p1)return null;G.inFlight=!0,G.lastAttemptAt=H,G.turnId=X;try{let{currentHashtag:P,searchQuery:w}=U0.current||{};if(!P&&!w)await u0();return await p_(),await z$()}finally{G.inFlight=!1}},[z$,p_,u0]);f(()=>{let X=Math.min(1000,Math.max(100,Math.floor(g1/2))),G=setInterval(()=>{if(!R_.current)return;if(v_.current)return;let H=U_.current;if(!H)return;let P=Date.now(),w=P-H,p=P2(b0.current);if(w>=U8){if(!p)n({type:"waiting",title:"Re-syncing after a quiet period…"});B4();return}if(w>=g1){if(P-J_.current>=p1){if(!p){let Z_=Math.floor(w/1000);n({type:"waiting",title:`Waiting for model… No events for ${Z_}s`})}J_.current=P,B4()}}},X);return()=>clearInterval(G)},[B4]);let o8=y((X)=>{if(K(X),X!=="connected"){n(null),c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null),v_.current=null,o0();return}if(!M$.current){M$.current=!0,z$(),N$();return}let{currentHashtag:G,searchQuery:H}=U0.current;if(!G&&!H)u0();z$(),p_(),N$()},[o0,u0,z$,p_,N$]),r8=y(async(X)=>{L(X),u(null),await V0(X)},[V0]),a8=y(async()=>{L(null),U(null),u(null),await V0()},[V0]),t8=y(async(X,G=v)=>{if(!X||!X.trim())return;let H=G==="root"||G==="all"?G:"current";R(H),U(X.trim()),L(null),u(null);try{let P=await R8(X.trim(),50,0,$,H,u_);u(P.results),H0(!1)}catch(P){console.error("Failed to search:",P),u([])}},[$,u_,v]),e8=y(()=>{m(!0),U(null),L(null),R("current"),u([])},[]),_9=y(()=>{m(!1),U(null),V0()},[V0]),Ej=y(()=>{},[]),$9=y(async(X)=>{if(!X)return;let G=X.id,H=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():$,P=Y2?.filter((p)=>p?.data?.thread_id===G&&p?.id!==G).length||0;if(P>0){if(!window.confirm(`Delete this message and its ${P} replies?`))return}let w=(p)=>{if(!p.length)return;L0((H_)=>{let h=new Set(H_);return p.forEach((B_)=>h.add(B_)),h}),setTimeout(()=>{if(k(()=>{u((H_)=>H_?H_.filter((h)=>!p.includes(h.id)):H_)}),L0((H_)=>{let h=new Set(H_);return p.forEach((B_)=>h.delete(B_)),h}),k$.current)O4.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let p=await v8(G,P>0,H);if(p?.ids?.length)w(p.ids)}catch(p){let Z_=p?.message||"";if(P===0&&Z_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let h=await v8(G,!0,H);if(h?.ids?.length)w(h.ids);return}console.error("Failed to delete post:",p),alert(`Failed to delete message: ${Z_}`)}},[$,Y2,k]),o1=y(async()=>{try{let X=await Vj();w_(J8(X));let G=X?.user||{};m$((P)=>{let w=typeof G.name==="string"&&G.name.trim()?G.name.trim():"You",p=typeof G.avatar_url==="string"?G.avatar_url.trim():null,Z_=typeof G.avatar_background==="string"&&G.avatar_background.trim()?G.avatar_background.trim():null;if(P.name===w&&P.avatar_url===p&&P.avatar_background===Z_)return P;return{name:w,avatar_url:p,avatar_background:Z_}});let H=(X?.agents||[]).find((P)=>P.id==="default");x(H?.name,H?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=$,G=await n1(X);if(R0.current!==X)return;if(G)S_(G)}catch{}},[x,$]);f(()=>{o1();let X=O2("sidebarWidth",null),G=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(r$.current=G,C$.current)C$.current.style.setProperty("--sidebar-width",`${G}px`)},[o1]);let L4=F0||$_!==null,r1=y((X)=>{if(!X||typeof X!=="object")return;let G=X.agent_id;if(!G)return;let{agent_name:H,agent_avatar:P}=X;if(!H&&P===void 0)return;let w=k0.current?.[G]||{id:G},p=w.name||null,Z_=w.avatar_url??w.avatarUrl??w.avatar??null,H_=!1,h=!1;if(H&&H!==w.name)p=H,h=!0;if(P!==void 0){let B_=typeof P==="string"?P.trim():null,t_=typeof Z_==="string"?Z_.trim():null,D_=B_||null;if(D_!==(t_||null))Z_=D_,H_=!0}if(!h&&!H_)return;if(w_((B_)=>{let D_={...B_[G]||{id:G}};if(h)D_.name=p;if(H_)D_.avatar_url=Z_;return{...B_,[G]:D_}}),G==="default")x(p,Z_,H_?Date.now():null)},[x]),a1=y((X)=>{if(!X||typeof X!=="object")return;let G=X.user_name??X.userName,H=X.user_avatar??X.userAvatar,P=X.user_avatar_background??X.userAvatarBackground;if(G===void 0&&H===void 0&&P===void 0)return;m$((w)=>{let p=typeof G==="string"&&G.trim()?G.trim():w.name||"You",Z_=H===void 0?w.avatar_url:typeof H==="string"&&H.trim()?H.trim():null,H_=P===void 0?w.avatar_background:typeof P==="string"&&P.trim()?P.trim():null;if(w.name===p&&w.avatar_url===Z_&&w.avatar_background===H_)return w;return{name:p,avatar_url:Z_,avatar_background:H_}})},[]),Q4=y((X)=>{if(!X||typeof X!=="object")return;let G=X.model??X.current;if(G!==void 0)h_(G);if(X.thinking_level!==void 0)k_(X.thinking_level??null);if(X.supports_thinking!==void 0)b_(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)f_(X.provider_usage??null)},[]),U2=y(()=>{let X=$;qj(X).then((G)=>{if(R0.current!==X)return;if(G)Q4(G)}).catch(()=>{})},[Q4,$]),a0=y(()=>{Oj().then((X)=>{let G=Array.isArray(X?.chats)?X.chats.filter((H)=>H&&typeof H.agent_name==="string"&&H.agent_name.trim()):[];G0(G)}).catch(()=>{})},[]),l0=y(()=>{p8(u_).then((X)=>{let G=Array.isArray(X?.chats)?X.chats.filter((H)=>H&&typeof H.chat_jid==="string"&&typeof H.agent_name==="string"):[];e0(G)}).catch(()=>{})},[u_]),j9=y((X)=>{let G=X?.row_id;if(G==null)return;m_.current.add(G),s_((H)=>H.filter((P)=>P?.row_id!==G)),Uj(G,l1($)).then(()=>{p_()}).catch((H)=>{console.warn("[queue] Failed to steer queued item:",H),G_("Failed to steer message","The queued message could not be sent as steering.","warning"),m_.current.delete(G),p_()})},[$,p_,s_,G_]),Z9=y((X)=>{let G=X?.row_id;if(G==null)return;let H=y_.current.filter((P)=>P?.row_id!==G).length;m_.current.add(G),i0(H),s_((P)=>P.filter((w)=>w?.row_id!==G)),Fj(G,l1($)).then(()=>{p_()}).catch((P)=>{console.warn("[queue] Failed to remove queued item:",P),G_("Failed to remove message","The queued message could not be removed.","warning"),m_.current.delete(G),p_()})},[i0,$,p_,s_,G_]),U4=y((X)=>{if(!X||typeof X!=="object")return;if(a0(),l0(),X?.queued==="followup"||X?.queued==="steer"){p_();return}let G=X?.command;if(G&&typeof G==="object"&&(G?.queued_followup||G?.queued_steer))p_()},[a0,l0,p_]),F4=y(()=>{if(A0.current)A0.current.abort(),A0.current=null;E0(null)},[]),v2=y(async(X)=>{let G=String(X||"").trim();if(!G)return G_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(A0.current)A0.current.abort();let H=new AbortController;A0.current=H,E0({question:G,answer:"",thinking:"",error:null,model:null,status:"running"});try{let P=await Jj(G,{signal:H.signal,chatJid:_6($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(w,p)=>{if(w==="side_prompt_start")E0((Z_)=>Z_?{...Z_,status:"running"}:Z_)},onThinkingDelta:(w)=>{E0((p)=>p?{...p,thinking:`${p.thinking||""}${w||""}`}:p)},onTextDelta:(w)=>{E0((p)=>p?{...p,answer:`${p.answer||""}${w||""}`}:p)}});if(A0.current!==H)return!0;E0((w)=>w?{...w,answer:P?.result||w.answer||"",thinking:P?.thinking||w.thinking||"",model:P?.model||null,status:"success",error:null}:w)}catch(P){if(H.signal.aborted)return!0;E0((w)=>w?{...w,status:"error",error:P?.payload?.error||P?.message||"BTW request failed."}:w)}finally{if(A0.current===H)A0.current=null}return!0},[$,G_]),N9=y(async({content:X})=>{let G=e3(X);if(!G)return!1;if(G.type==="help")return G_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(G.type==="clear")return F4(),G_("BTW cleared","Closed the side conversation panel.","info"),!0;if(G.type==="ask")return await v2(G.question),!0;return!1},[F4,v2,G_]),z9=y(()=>{if(o_?.question)v2(o_.question)},[o_,v2]),K9=y(async()=>{let X=Z6(o_);if(!X)return;try{let G=await X2("default",X,null,[],L4?"queue":null,$);U4(G),G_(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(G){G_("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning")}},[o_,U4,L4,G_]),F2=y(()=>{U2(),a0(),l0(),p_(),N$()},[U2,a0,l0,p_,N$]);f(()=>{F2();let X=setInterval(()=>{U2(),a0(),l0(),p_()},60000);return()=>clearInterval(X)},[F2,U2,a0,l0,p_]),f(()=>{l0()},[l0]),f(()=>{let X=!1;if(u(null),V)return V0(V),()=>{X=!0};if(Y)return R8(Y,50,0,$,v,u_).then((G)=>{if(X)return;u(G.results),H0(!1)}).catch((G)=>{if(X)return;console.error("Failed to search:",G),u([]),H0(!1)}),()=>{X=!0};return V0(),()=>{X=!0}},[$,V,Y,v,u_,V0,H0,u]),f(()=>{let X=s$.current||$;d$.current.set(X,L$())},[$,L$]),f(()=>{let X=s$.current||$;if(X===$)return;d$.current.set(X,L$()),s$.current=$,m_.current.clear(),Q2(d$.current.get($)||null),p_(),z$(),N$()},[$,z$,N$,p_,Q2,L$]);let Y9=y(()=>{let{currentHashtag:X,searchQuery:G}=U0.current||{};if(!X&&!G)u0();F2()},[F2,u0]),J4=y((X,G)=>{let H=G?.turn_id,P=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null,p=P?P===$:X==="connected"||X==="workspace_update";if(p)r1(G),a1(G);if(X==="ui_theme"){l3(G);return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))h$()}if(X==="connected"){n(null),c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null),v_.current=null,o0();let h=$;g8(h).then((D_)=>{if(R0.current!==h)return;if(!D_||D_.status!=="active"||!D_.data)return;let G2=D_.data,t1=G2.turn_id||G2.turnId;if(t1)r0(t1);if(r_({clearSilence:!0}),K2(G2),D_.thought&&D_.thought.text)C_.current=D_.thought.text,r({text:D_.thought.text,totalLines:D_.thought.totalLines||0});if(D_.draft&&D_.draft.text)W_.current=D_.draft.text,c({text:D_.draft.text,totalLines:D_.draft.totalLines||0})}).catch((D_)=>{console.warn("Failed to fetch agent status:",D_)});let{currentHashtag:B_,searchQuery:t_}=U0.current||{};if(!B_&&!t_)u0();F2();return}if(X==="agent_status"){if(!p){if(G?.type==="done"||G?.type==="error")a0(),l0();return}if(G.type==="done"||G.type==="error"){if(H&&Y_.current&&H!==Y_.current)return;if(G.type==="done"){f2(H||Y_.current);let{currentHashtag:h,searchQuery:B_}=U0.current||{};if(!h&&!B_)u0();if(G.context_usage)S_(G.context_usage)}if(i_.current=!1,o0(),m_.current.clear(),a0(),p_(),c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null),G.type==="error")n({type:"error",title:G.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(H)r0(H);if(r_({running:!0,clearSilence:!0}),G.type==="thinking")W_.current="",C_.current="",c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0});b0.current=G,n((h)=>{if(h&&h.type===G.type&&h.title===G.title)return h;return G})}return}if(X==="agent_steer_queued"){if(!p)return;if(H&&Y_.current&&H!==Y_.current)return;let h=H||Y_.current;if(!h)return;__.current=h,x_(h);return}if(X==="agent_followup_queued"){if(!p)return;let h=G?.row_id,B_=G?.content;if(h!=null&&typeof B_==="string"&&B_.trim())s_((t_)=>{if(t_.some((D_)=>D_?.row_id===h))return t_;return[...t_,{row_id:h,content:B_,timestamp:G?.timestamp||null,thread_id:G?.thread_id??null}]});p_();return}if(X==="agent_followup_consumed"){if(!p)return;let h=G?.row_id;if(h!=null){let B_=y_.current.filter((t_)=>t_.row_id!==h).length;i0(B_),s_((t_)=>t_.filter((D_)=>D_.row_id!==h))}p_(),u0();return}if(X==="agent_followup_removed"){if(!p)return;let h=G?.row_id;if(h!=null){let B_=y_.current.filter((t_)=>t_.row_id!==h).length;m_.current.add(h),i0(B_),s_((t_)=>t_.filter((D_)=>D_.row_id!==h))}p_();return}if(X==="agent_draft_delta"){if(!p)return;if(H&&Y_.current&&H!==Y_.current)return;if(H&&!Y_.current)r0(H);if(r_({running:!0,clearSilence:!0}),G?.reset)W_.current="";if(G?.delta)W_.current+=G.delta;let h=Date.now();if(!o$.current||h-o$.current>=100){o$.current=h;let B_=W_.current,t_=c1(B_);if(X_.current)c((D_)=>({text:D_?.text||"",totalLines:t_,fullText:B_}));else c({text:B_,totalLines:t_})}return}if(X==="agent_draft"){if(!p)return;if(H&&Y_.current&&H!==Y_.current)return;if(H&&!Y_.current)r0(H);r_({running:!0,clearSilence:!0});let h=G.text||"",B_=G.mode||(G.kind==="plan"?"replace":"append"),t_=Number.isFinite(G.total_lines)?G.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(G.kind==="plan")if(B_==="replace")n_(h);else n_((D_)=>(D_||"")+h);else if(!X_.current)W_.current=h,c({text:h,totalLines:t_});return}if(X==="agent_thought_delta"){if(!p)return;if(H&&Y_.current&&H!==Y_.current)return;if(H&&!Y_.current)r0(H);if(r_({running:!0,clearSilence:!0}),G?.reset)C_.current="";if(typeof G?.delta==="string")C_.current+=G.delta;let h=Date.now();if(M_.current&&(!J$.current||h-J$.current>=100)){J$.current=h;let B_=C_.current;r((t_)=>({text:t_?.text||"",totalLines:c1(B_),fullText:B_}))}return}if(X==="agent_thought"){if(!p)return;if(H&&Y_.current&&H!==Y_.current)return;if(H&&!Y_.current)r0(H);r_({running:!0,clearSilence:!0});let h=G.text||"",B_=Number.isFinite(G.total_lines)?G.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!M_.current)C_.current=h,r({text:h,totalLines:B_});return}if(X==="model_changed"){if(!p)return;if(G?.model!==void 0)h_(G.model);if(G?.thinking_level!==void 0)k_(G.thinking_level??null);if(G?.supports_thinking!==void 0)b_(Boolean(G.supports_thinking));let h=$;n1(h).then((B_)=>{if(R0.current!==h)return;if(B_)S_(B_)}).catch(()=>{});return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:G}));return}if(S8(X)){if(!p)return;if(x8(X,G),X==="extension_ui_notify"&&typeof G?.message==="string")G_(G.message,null,G?.type||"info");if(X==="extension_ui_error"&&typeof G?.error==="string")G_("Extension UI error",G.error,"error",5000);return}let{currentHashtag:Z_,searchQuery:H_}=U0.current;if(X==="agent_response"){if(!p)return;R2(),j$.current={post:G,turnId:Y_.current}}if(!Z_&&!H_&&p&&(X==="new_post"||X==="new_reply"||X==="agent_response"))u((h)=>{if(!h)return[G];if(h.some((B_)=>B_.id===G.id))return h;return[...h,G]}),O.current?.();if(X==="interaction_updated"){if(!p)return;u((h)=>{if(!h)return h;if(!h.some((B_)=>B_.id===G.id))return h;return h.map((B_)=>B_.id===G.id?G:B_)})}if(X==="interaction_deleted"){if(!p)return;let h=G?.ids||[];if(h.length){k(()=>{u((D_)=>D_?D_.filter((G2)=>!h.includes(G2.id)):D_)});let{currentHashtag:B_,searchQuery:t_}=U0.current;if(k$.current&&!B_&&!t_)O4.current?.({preserveScroll:!0,preserveMode:"top"})}}},[o0,h$,$,O4,r_,f2,k,a0,l0,u0,R2,r0,K2,r1,a1,U2,p_,s_]);f(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=J4,X.reset=()=>{R2(),o0(),n(null),c({text:"",totalLines:0}),n_(""),r({text:"",totalLines:0}),j_(null)},X.finalize=()=>s1(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[o0,s1,J4,R2]),V8({handleSseEvent:J4,handleConnectionStatusChange:o8,loadPosts:V0,onWake:Y9,chatJid:$}),f(()=>{if(!Y2||Y2.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let G=X.slice(5);E$(G),history.replaceState(null,"",location.pathname+location.search)},[Y2,E$]);let H4=$_!==null;f(()=>{if(z!=="connected")return;let G=setInterval(()=>{let{currentHashtag:H,searchQuery:P}=U0.current||{},w=!H&&!P;if(H4){if(w)u0();p_(),z$(),N$()}else{if(w)u0();z$(),N$()}},H4?15000:60000);return()=>clearInterval(G)},[z,H4,z$,N$,p_,u0]),f(()=>{return f8(()=>{z$(),N$(),p_()})},[z$,N$,p_]);let G9=y(()=>{A$((X)=>!X)},[]),W9=y((X)=>{if(typeof window>"u")return;let G=String(X||"").trim();if(!G||G===$)return;let H=T2(window.location.href,G,{chatOnly:j});window.location.assign(H)},[j,$]),X9=y(async()=>{if(typeof window>"u"||!F_?.chat_jid)return;let X=F_.agent_name||"",G=F_.display_name||"",H=window.prompt("Branch display name",G);if(H===null)return;let P=window.prompt("Agent handle (without @)",X);if(P===null)return;try{let w=await Bj(F_.chat_jid,{displayName:H,agentName:P});await Promise.allSettled([a0(),l0()]);let p=w?.branch?.agent_name||String(P||"").trim()||X;G_("Branch renamed",`This chat is now @${p}.`,"info",3500)}catch(w){let p=w instanceof Error?w.message:String(w||"Could not rename branch.");G_("Could not rename branch",p||"Could not rename branch.","warning",5000)}},[F_,a0,l0,G_]),V9=y(async()=>{if(typeof window>"u"||!F_?.chat_jid)return;if(F_.chat_jid===(F_.root_chat_jid||F_.chat_jid)){G_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let G=F_.display_name||`@${F_.agent_name||F_.chat_jid}`;if(!window.confirm(`Prune ${G}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Lj(F_.chat_jid),await Promise.allSettled([a0(),l0()]);let P=F_.root_chat_jid||"web:default";G_("Branch pruned",`${G} has been archived.`,"info",3000);let w=T2(window.location.href,P,{chatOnly:j});window.location.assign(w)}catch(P){let w=P instanceof Error?P.message:String(P||"Could not prune branch.");G_("Could not prune branch",w||"Could not prune branch.","warning",5000)}},[j,F_,a0,l0,G_]);f(()=>{if(!Z||typeof window>"u")return;let X=!1;return(async()=>{try{S({status:"running",message:"Preparing a new chat branch…"});let G=await s2(N);if(X)return;let H=G?.branch,P=typeof H?.chat_jid==="string"&&H.chat_jid.trim()?H.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");let w=T2(window.location.href,P,{chatOnly:!0});window.location.replace(w)}catch(G){if(X)return;S({status:"error",message:i1(G)})}})(),()=>{X=!0}},[Z,N]);let q9=y(async()=>{if(typeof window>"u"||W)return;let X=y8($);if(!X){G_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let H=M8(window.location.href,$,{chatOnly:!0});if(!window.open(H,X.target))G_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let G=k8(X);if(!G){G_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}A8(G,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let P=(await s2($))?.branch,w=typeof P?.chat_jid==="string"&&P.chat_jid.trim()?P.chat_jid.trim():null;if(!w)throw Error("Branch fork did not return a chat id.");try{let Z_=await f4();G0(Array.isArray(Z_?.chats)?Z_.chats:[])}catch{}try{let Z_=await p8(u_);e0(Array.isArray(Z_?.chats)?Z_.chats:[])}catch{}let p=T2(window.location.href,w,{chatOnly:!0});w8(G,p)}catch(H){P8(G),G_("Could not open branch window",i1(H),"error",5000)}},[$,u_,W,G_]);f(()=>{if(!x0)return;if(typeof window>"u")return;let X=C$.current;if(!X)return;if(!H$.current){let G=O2("editorWidth",null),H=r$.current||280;H$.current=Number.isFinite(G)?G:H}if(X.style.setProperty("--editor-width",`${H$.current}px`),!$$.current){let G=O2("dockHeight",null);$$.current=Number.isFinite(G)?G:200}X.style.setProperty("--dock-height",`${$$.current}px`)},[x0]),f(()=>{if(!Q0||j)return;let X=(G)=>{if(G.ctrlKey&&G.key==="`")G.preventDefault(),f0()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[f0,Q0,j]);let O9=Boolean(Q_&&Q_===($_?.turn_id||L_));if(Z)return B`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${X$.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${X$.message}</p>
                    </div>
                </div>
            </div>
        `;return B`
        <div class=${`app-shell${y0?"":" workspace-collapsed"}${x0?" editor-open":""}${j?" chat-only":""}`} ref=${C$}>
            ${!j&&B`
                <${K8}
                    onFileSelect=${d}
                    visible=${y0}
                    active=${y0||x0}
                    onOpenEditor=${Z0}
                    onOpenTerminalTab=${z2}
                    onToggleTerminal=${Q0?f0:void 0}
                    terminalVisible=${Boolean(Q0&&c0)}
                />
                <button
                    class=${`workspace-toggle-tab${y0?" open":" closed"}`}
                    onClick=${G9}
                    title=${y0?"Hide workspace":"Show workspace"}
                    aria-label=${y0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${h8} onTouchStart=${i8}></div>
            `}
            ${F$&&B`
                <div class="editor-pane-container">
                    ${x0&&B`
                        <${G8}
                            tabs=${Z2}
                            activeId=${g0}
                            onActivate=${C0}
                            onClose=${d0}
                            onCloseOthers=${I0}
                            onCloseAll=${T0}
                            onTogglePin=${B$}
                            onTogglePreview=${w$}
                            previewTabs=${n$}
                            onToggleDock=${Q0?f0:void 0}
                            dockVisible=${Q0&&c0}
                        />
                    `}
                    ${x0&&B`<div class="editor-pane-host" ref=${v$}></div>`}
                    ${x0&&g0&&n$.has(g0)&&B`
                        <${X8}
                            getContent=${()=>J0.current?.getContent?.()}
                            path=${g0}
                            onClose=${()=>w$(g0)}
                        />
                    `}
                    ${Q0&&c0&&B`<div class="dock-splitter" onMouseDown=${d8} onTouchStart=${s8}></div>`}
                    ${Q0&&B`<div class=${`dock-panel${c0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${f0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${P$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${l8} onTouchStart=${n8}></div>
            `}
            <div class="container">
                ${Y&&H8()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${F_?.display_name||F_?.agent_name?`@${F_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${F_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${W0.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(X)=>W9(X.currentTarget.value)}
                                    >
                                        ${W0.map((X)=>B`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${`@${X.agent_name}${X.display_name?` — ${X.display_name}`:""}${X.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${F_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${X9}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${F_?.chat_jid&&F_.chat_jid!==(F_.root_chat_jid||F_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${V9}
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
                ${(V||Y)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${a8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${V?`#${V}`:`Search: ${Y} · ${n0}`}</span>
                    </div>
                `}
                <${P6}
                    posts=${Y2}
                    hasMore=${O_}
                    onLoadMore=${c8}
                    timelineRef=${s0}
                    onHashtagClick=${r8}
                    onMessageRef=${h0}
                    onScrollToMessage=${E$}
                    onFileRef=${Z$}
                    onPostClick=${void 0}
                    onDeletePost=${$9}
                    emptyMessage=${V?`No posts with #${V}`:Y?`No results for "${Y}"`:void 0}
                    agents=${E_}
                    user=${u$}
                    reverse=${!(Y&&!V)}
                    removingPostIds=${f$}
                    searchQuery=${Y}
                />
                <${V6}
                    status=${$_}
                    draft=${z_}
                    plan=${q_}
                    thought=${e}
                    pendingRequest=${N_}
                    intent=${i}
                    turnId=${L_}
                    steerQueued=${O9}
                    onPanelToggle=${q4}
                />
                <${N6}
                    session=${o_}
                    onClose=${F4}
                    onRetry=${z9}
                    onInject=${K9}
                />
                <${T3}
                    onPost=${()=>{V0(),J()}}
                    onFocus=${J}
                    searchMode=${M}
                    searchScope=${v}
                    onSearch=${t8}
                    onSearchScopeChange=${R}
                    onEnterSearch=${e8}
                    onExitSearch=${_9}
                    fileRefs=${E}
                    onRemoveFileRef=${V_}
                    onClearFileRefs=${A_}
                    onSetFileRefs=${P_}
                    messageRefs=${b}
                    onRemoveMessageRef=${c$}
                    onClearMessageRefs=${y$}
                    onSetMessageRefs=${t$}
                    activeEditorPath=${j?null:g0}
                    onAttachEditorFile=${j?void 0:g_}
                    onOpenFilePill=${Z$}
                    followupQueueCount=${s}
                    followupQueueItems=${Y0}
                    onInjectQueuedFollowup=${j9}
                    onRemoveQueuedFollowup=${Z9}
                    onSubmitIntercept=${N9}
                    onMessageResponse=${U4}
                    onSubmitError=${I$}
                    onPopOutChat=${W?void 0:q9}
                    isAgentActive=${L4}
                    activeChatAgents=${w0}
                    currentChatJid=${$}
                    connectionStatus=${z}
                    activeModel=${$0}
                    modelUsage=${z0}
                    thinkingLevel=${j0}
                    supportsThinking=${I_}
                    contextUsage=${K0}
                    notificationsEnabled=${T$}
                    notificationPermission=${_$}
                    onToggleNotifications=${V$}
                    onModelChange=${h_}
                    onModelStateChange=${Q4}
                />
                <${q6}
                    request=${N_}
                    onRespond=${()=>{j_(null),v_.current=null}}
                />
            </div>
        </div>
    `}function Dj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${Hj} locationParams=${_} />`}y3(B`<${Dj} />`,document.getElementById("app"));

//# debugId=75817ABE822D633B64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
