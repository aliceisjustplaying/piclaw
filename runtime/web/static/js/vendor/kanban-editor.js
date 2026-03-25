(()=>{var{h:l,render:u}=preact,{useState:V,useEffect:f,useCallback:g,useRef:m}=preactHooks,Z=htm.bind(l),L=null,I=null,R=null,E=0,B=null;function S(j){if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${j}-${crypto.randomUUID()}`;return`${j}-${Date.now()}-${Math.random().toString(36).slice(2,11)}`}var D={grip:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>`,plus:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,plusCircle:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,trash:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,archive:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>`,restore:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,moreVertical:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>`,check:Z`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,x:Z`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`};function i(j){if(!j.startsWith(`---
`))return j;let q=j.indexOf(`
---
`,4);return q===-1?j:j.slice(q+5)}function r(j){let q=j.indexOf("%% kanban:settings");if(q===-1)return{settings:{},content:j};let H=j.indexOf("```",q);if(H===-1)return{settings:{},content:j};let J=j.indexOf("```",H+3);if(J===-1)return{settings:{},content:j};let P=j.slice(H+3,J).trim(),$={};try{$=JSON.parse(P)}catch{}let Q=j.indexOf("%%",J+3),N=Q===-1?J+3:Q+2,z=`${j.slice(0,q).trimEnd()}
${j.slice(N).trimStart()}`.trim();return{settings:$,content:z}}function v(j){if(j.startsWith("\\#")||j.startsWith("\\---"))return j;if(j.startsWith("#")||j.startsWith("---"))return`\\${j}`;return j}function h(j){if(j.startsWith("\\#")||j.startsWith("\\---"))return j.slice(1);return j}function s(j){let q={lanes:[],archive:[],settings:{}},H=i(j),J=r(H);q.settings=J.settings,H=J.content;let P=H.split(/\n---\n/);if(q.lanes=c(P[0]),P.length>1){let $=P.slice(1).join(`
---
`),N=c($).find((z)=>z.title.toLowerCase()==="archive");if(N)q.archive=N.cards}return q}function c(j){let q=[],H=j.split(/(?=^## )/gm).filter((J)=>J.trim());for(let J of H){let P=J.split(`
`),$=P[0].match(/^## (.+)$/);if(!$)continue;let Q={id:S("lane"),title:$[1].trim(),cards:[]},N=null,z="";for(let U=1;U<P.length;U++){let F=P[U],K=F.match(/^- \[(.)\] (.*)$/);if(K){if(N)N.title=z.trim(),Q.cards.push(N);N={id:S("card"),title:h(K[2]),checkChar:K[1],checked:K[1]!==" "},z=h(K[2])}else if(N&&F.match(/^\s+\S/))z+=`
`+h(F.replace(/^\s+/,""))}if(N)N.title=z.trim(),Q.cards.push(N);q.push(Q)}return q}function p(j){let q=["---","","kanban-plugin: board","","---",""];for(let H of j.lanes){q.push(`## ${H.title}`,"");for(let J of H.cards){let P=`[${J.checked?J.checkChar!==" "?J.checkChar:"x":" "}]`,$=J.title.split(`
`);q.push(`- ${P} ${v($[0])}`);for(let Q=1;Q<$.length;Q++)q.push(`  ${v($[Q])}`)}q.push("")}if(j.archive.length>0){q.push("---","","## Archive","");for(let H of j.archive){let J=H.title.split(`
`);q.push(`- [${H.checked?"x":" "}] ${v(J[0])}`);for(let P=1;P<J.length;P++)q.push(`  ${v(J[P])}`)}q.push("")}if(Object.keys(j.settings).length>0)q.push("%% kanban:settings","```",JSON.stringify(j.settings),"```","%%");return q.join(`
`)}function d({checked:j,onChange:q}){return Z`
    <div class="kanban-plugin__item-prefix-button-wrapper">
      <button class="kanban-plugin__item-checkbox ${j?"is-checked":""}"
        onClick=${(H)=>{H.stopPropagation(),q()}}>
        ${j?D.check:""}
      </button>
    </div>`}function a({onArchive:j,isEditing:q,onCancelEdit:H}){return Z`
    <div class="kanban-plugin__item-postfix-button-wrapper">
      ${q?Z`
        <button class="kanban-plugin__item-postfix-button is-enabled"
          onClick=${(J)=>{J.stopPropagation(),H()}} title="Cancel">${D.x}</button>
      `:Z`
        <button class="kanban-plugin__item-postfix-button"
          onClick=${(J)=>{J.stopPropagation(),j()}} title="Archive">${D.moreVertical}</button>
      `}
    </div>`}function n({card:j,laneId:q,cardIndex:H,onUpdate:J,onDelete:P,onArchive:$}){let[Q,N]=V(!1),[z,U]=V(j.title),F=m(null);f(()=>{if(Q&&F.current)F.current.focus(),F.current.setSelectionRange(F.current.value.length,F.current.value.length),F.current.style.height="auto",F.current.style.height=F.current.scrollHeight+"px"},[Q]);let K=(W)=>{B={card:j,fromLaneId:q,fromIndex:H},W.dataTransfer.effectAllowed="move",W.dataTransfer.setData("text/plain",j.id),setTimeout(()=>{W.target.classList.add("is-dragging")},0)},M=(W)=>{B=null,W.target.classList.remove("is-dragging")},w=()=>{J({...j,checked:!j.checked,checkChar:j.checked?" ":"x"})},A=()=>{if(z.trim())J({...j,title:z.trim()});N(!1)},T=(W)=>{if(W.key==="Enter"&&!W.shiftKey)W.preventDefault(),A();else if(W.key==="Escape")U(j.title),N(!1)},_=(W)=>{U(W.target.value),W.target.style.height="auto",W.target.style.height=W.target.scrollHeight+"px"},k=()=>{U(j.title),N(!1)};return Z`
    <div class="kanban-plugin__item-wrapper">
      <div class="kanban-plugin__item ${j.checked?"is-complete":""} ${Q?"is-editing":""}"
        draggable=${!Q}
        onKeyDown=${(W)=>{if((W.ctrlKey||W.metaKey)&&W.key.toLowerCase()==="e")W.preventDefault(),N(!0);if((W.ctrlKey||W.metaKey)&&W.key.toLowerCase()==="d")W.preventDefault(),P(j);if((W.ctrlKey||W.metaKey)&&W.key.toLowerCase()==="a")W.preventDefault(),$(j)}}
        onDragStart=${K} onDragEnd=${M}
        onDblClick=${()=>!Q&&N(!0)} tabindex="0">
        <div class="kanban-plugin__item-content-wrapper">
          <div class="kanban-plugin__item-title-wrapper">
            <${d} checked=${j.checked} onChange=${w} />
            ${Q?Z`
              <textarea ref=${F} class="kanban-plugin__item-edit-textarea"
                value=${z} onInput=${_}
                onBlur=${()=>{if(Q)A()}}
                onKeyDown=${T} />
            `:Z`<div class="kanban-plugin__item-title">${j.title}</div>`}
            <${a} isEditing=${Q}
              onArchive=${()=>$(j)} onCancelEdit=${k} />
          </div>
        </div>
      </div>
    </div>`}function t({onAdd:j,onCancel:q}){let[H,J]=V(""),P=m(null);f(()=>{P.current?.focus()},[]);let $=()=>{if(H.trim())j(H.trim()),J("")};return Z`
    <div class="kanban-plugin__item-form">
      <div class="kanban-plugin__item-input-wrapper">
        <textarea ref=${P} placeholder="Card title..." value=${H}
          onInput=${(N)=>J(N.target.value)} onKeyDown=${(N)=>{if(N.key==="Enter"&&!N.shiftKey)N.preventDefault(),$();else if(N.key==="Escape")q()}} rows="2" />
      </div>
      <div class="kanban-plugin__item-input-actions">
        <button class="kanban-plugin__item-action-add" onClick=${$}>Add card</button>
        <button class="kanban-plugin__item-action-cancel" onClick=${q}>Cancel</button>
      </div>
    </div>`}function e({lane:j,onUpdate:q,onDelete:H,onAddCard:J,onUpdateCard:P,onDeleteCard:$,onArchiveCard:Q,onMoveCard:N}){let[z,U]=V(!1),[F,K]=V(j.title),[M,w]=V(!1),[A,T]=V(!1),_=m(null);f(()=>{if(z&&_.current)_.current.focus(),_.current.select()},[z]);let k=(y)=>{if(y.preventDefault(),B)y.dataTransfer.dropEffect="move",T(!0)},W=(y)=>{let G=y.currentTarget.getBoundingClientRect();if(y.clientX<G.left||y.clientX>G.right||y.clientY<G.top||y.clientY>G.bottom)T(!1)},b=(y)=>{if(y.preventDefault(),T(!1),B)N(B.card,B.fromLaneId,j.id);B=null},x=()=>{if(F.trim())q({...j,title:F.trim()});U(!1)},C=(y)=>{J(j.id,y),w(!1)};return Z`
    <div class="kanban-plugin__lane-wrapper">
      <div class="kanban-plugin__lane ${A?"is-dropping":""}"
        onDragOver=${k} onDragLeave=${W} onDrop=${b}>
        <div class="kanban-plugin__lane-header-wrapper">
          <div class="kanban-plugin__lane-grip">${D.grip}</div>
          <div class="kanban-plugin__lane-title">
            ${z?Z`
              <input ref=${_} class="kanban-plugin__lane-title-input" value=${F}
                onInput=${(y)=>K(y.target.value)}
                onBlur=${()=>{if(z)x()}}
                onKeyDown=${(y)=>{if(y.key==="Enter")x();if(y.key==="Escape")K(j.title),U(!1)}} />
            `:Z`
              <div class="kanban-plugin__lane-title-text" onDblClick=${()=>U(!0)} title=${j.title}>${j.title}</div>
              <div class="kanban-plugin__lane-title-count">${j.cards.length}</div>
            `}
          </div>
          <div class="kanban-plugin__lane-settings-button-wrapper">
            <button class="kanban-plugin__lane-settings-button" onClick=${()=>w(!0)} title="Add card">${D.plusCircle}</button>
            <button class="kanban-plugin__lane-settings-button" onClick=${()=>H(j)} title="More options">${D.moreVertical}</button>
          </div>
        </div>
        <div class="kanban-plugin__lane-items">
          ${j.cards.map((y,G)=>Z`
            <${n} key=${y.id} card=${y} laneId=${j.id} cardIndex=${G}
              onUpdate=${(X)=>P(j.id,X)}
              onDelete=${(X)=>$(j.id,X)}
              onArchive=${Q} />`)}
        </div>
        ${M?Z`<${t} onAdd=${C} onCancel=${()=>w(!1)} />`:Z`<div class="kanban-plugin__item-button-wrapper">
              <button class="kanban-plugin__new-item-button" onClick=${()=>w(!0)}>${D.plus} Add a card</button>
            </div>`}
      </div>
    </div>`}function jj({onAdd:j,onCancel:q}){let[H,J]=V(""),P=m(null);f(()=>{P.current?.focus()},[]);let $=()=>{if(H.trim())j(H.trim())};return Z`
    <div class="kanban-plugin__lane-form-wrapper">
      <input ref=${P} class="kanban-plugin__lane-input" placeholder="Enter lane title..." value=${H}
        onInput=${(Q)=>J(Q.target.value)}
        onKeyDown=${(Q)=>{if(Q.key==="Enter")Q.preventDefault(),$();else if(Q.key==="Escape")q()}} />
      <div class="kanban-plugin__lane-input-actions">
        <button class="kanban-plugin__lane-action-add" onClick=${$}>Add lane</button>
        <button class="kanban-plugin__lane-action-cancel" onClick=${q}>Cancel</button>
      </div>
    </div>`}function qj({cards:j,onRestore:q}){let[H,J]=V(!0);if(j.length===0)return null;return Z`
    <div class="kanban-plugin__archive">
      <div class="kanban-plugin__archive-header">
        <h3>${D.archive} Archive (${j.length})</h3>
        <button class="kanban-plugin__archive-toggle" onClick=${()=>J(!H)}>${H?"Hide":"Show"}</button>
      </div>
      ${H&&Z`
        <div class="kanban-plugin__archive-cards">
          ${j.map((P)=>Z`
            <div class="kanban-plugin__archive-card" key=${P.id}>
              <span class="kanban-plugin__archive-card-title">${P.title.split(`
`)[0]}</span>
              <button onClick=${()=>q(P)} title="Restore">${D.restore}</button>
            </div>`)}
        </div>`}
    </div>`}function Gj({initialContent:j}){let[q,H]=V(()=>s(j??"")),[J,P]=V(!1),[$,Q]=V([]),[N,z]=V([]),[U,F]=V(E);f(()=>{let G=setInterval(()=>{if(E!==U){if(F(E),R!==null)H(s(R)),R=null}},100);return()=>clearInterval(G)},[U]);let K=g((G)=>{H(G),Q((X)=>q?[...X,q]:X),z([]),I?.(p(G))},[q]),M=g(()=>{if(!q||$.length===0)return;let G=$[$.length-1];Q($.slice(0,-1)),z((X)=>[...X,q]),H(G),I?.(p(G))},[q,$]),w=g(()=>{if(!q||N.length===0)return;let G=N[N.length-1];z(N.slice(0,-1)),Q((X)=>[...X,q]),H(G),I?.(p(G))},[q,N]);f(()=>{let G=L;if(!G)return;let X=(Y)=>{if(!(Y.ctrlKey||Y.metaKey))return;if(Y.key.toLowerCase()==="z")Y.preventDefault(),Y.shiftKey?w():M();else if(Y.key.toLowerCase()==="y")Y.preventDefault(),w()};return G.addEventListener("keydown",X),()=>G.removeEventListener("keydown",X)},[M,w]);let A=(G)=>{if(!q)return;K({...q,lanes:[...q.lanes,{id:S("lane"),title:G,cards:[]}]}),P(!1)},T=(G)=>{if(!q)return;K({...q,lanes:q.lanes.map((X)=>X.id===G.id?G:X)})},_=(G)=>{if(!q)return;K({...q,lanes:q.lanes.filter((X)=>X.id!==G.id)})},k=(G,X)=>{if(!q)return;let Y={id:S("card"),title:X,checked:!1,checkChar:" "};K({...q,lanes:q.lanes.map((O)=>O.id===G?{...O,cards:[...O.cards,Y]}:O)})},W=(G,X)=>{if(!q)return;K({...q,lanes:q.lanes.map((Y)=>Y.id===G?{...Y,cards:Y.cards.map((O)=>O.id===X.id?X:O)}:Y)})},b=(G,X)=>{if(!q)return;K({...q,lanes:q.lanes.map((Y)=>Y.id===G?{...Y,cards:Y.cards.filter((O)=>O.id!==X.id)}:Y)})},x=(G)=>{if(!q)return;K({...q,lanes:q.lanes.map((X)=>({...X,cards:X.cards.filter((Y)=>Y.id!==G.id)})),archive:[...q.archive,{...G,checked:!0}]})},C=(G,X,Y)=>{if(!q)return;K({...q,lanes:q.lanes.map((O)=>{if(O.id===X)return{...O,cards:O.cards.filter((o)=>o.id!==G.id)};if(O.id===Y)return{...O,cards:[...O.cards,G]};return O})})},y=(G)=>{if(!q)return;if(q.lanes.length===0){K({...q,lanes:[{id:S("lane"),title:"Restored",cards:[{...G,checked:!1}]}],archive:q.archive.filter((Y)=>Y.id!==G.id)});return}let X=q.lanes[0];K({...q,lanes:q.lanes.map((Y)=>Y.id===X.id?{...Y,cards:[...Y.cards,{...G,checked:!1}]}:Y),archive:q.archive.filter((Y)=>Y.id!==G.id)})};if(!q)return Z`<div class="loading">Loading...</div>`;return Z`
    <div class="kanban-plugin" tabindex="-1">
      <div class="kanban-plugin__search-wrapper">
        <button onClick=${()=>P(!0)}>${D.plus} Add lane</button>
        <button class="secondary" onClick=${M} disabled=${$.length===0} title="Undo (Ctrl+Z)">Undo</button>
        <button class="secondary" onClick=${w} disabled=${N.length===0} title="Redo (Ctrl+Y)">Redo</button>
      </div>
      <div class="kanban-plugin__board"><div>
        ${q.lanes.map((G)=>Z`
          <${e} key=${G.id} lane=${G} onUpdate=${T} onDelete=${_}
            onAddCard=${k} onUpdateCard=${W} onDeleteCard=${b}
            onArchiveCard=${x} onMoveCard=${C} />`)}
        ${J&&Z`<${jj} onAdd=${A} onCancel=${()=>P(!1)} />`}
      </div></div>
      <${qj} cards=${q.archive} onRestore=${y} />
    </div>`}window.__kanbanEditor={mount(j,q){if(L=j,I=q.onEdit,B=null,R=null,!q.isDark)j.classList.add("light");u(Z`<${Gj} initialContent=${q.content} />`,j)},update(j){R=j,E++},setTheme(j){L?.classList.toggle("light",!j)},destroy(){if(L)u(null,L);L=null,I=null,R=null,B=null}};})();
