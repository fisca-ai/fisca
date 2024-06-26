import{j as A}from"./jsx-runtime.7faW4zRM.js";import{r as I}from"./index.DhYZZe0J.js";function M(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let T=M();function te(c){T=c}const ne=/[&<>"']/,pe=new RegExp(ne.source,"g"),se=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ue=new RegExp(se.source,"g"),fe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},W=c=>fe[c];function d(c,n){if(n){if(ne.test(c))return c.replace(pe,W)}else if(se.test(c))return c.replace(ue,W);return c}const ge=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function ke(c){return c.replace(ge,(n,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const de=/(^|[^\[])\^/g;function k(c,n){let e=typeof c=="string"?c:c.source;n=n||"";const t={replace:(r,i)=>{let s=typeof i=="string"?i:i.source;return s=s.replace(de,"$1"),e=e.replace(r,s),t},getRegex:()=>new RegExp(e,n)};return t}function J(c){try{c=encodeURI(c).replace(/%25/g,"%")}catch{return null}return c}const R={exec:()=>null};function V(c,n){const e=c.replace(/\|/g,(i,s,o)=>{let l=!1,h=s;for(;--h>=0&&o[h]==="\\";)l=!l;return l?"|":" |"}),t=e.split(/ \|/);let r=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),n)if(t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;r<t.length;r++)t[r]=t[r].trim().replace(/\\\|/g,"|");return t}function E(c,n,e){const t=c.length;if(t===0)return"";let r=0;for(;r<t;){const i=c.charAt(t-r-1);if(i===n&&!e)r++;else if(i!==n&&e)r++;else break}return c.slice(0,t-r)}function xe(c,n){if(c.indexOf(n[1])===-1)return-1;let e=0;for(let t=0;t<c.length;t++)if(c[t]==="\\")t++;else if(c[t]===n[0])e++;else if(c[t]===n[1]&&(e--,e<0))return t;return-1}function Y(c,n,e,t){const r=n.href,i=n.title?d(n.title):null,s=c[1].replace(/\\([\[\]])/g,"$1");if(c[0].charAt(0)!=="!"){t.state.inLink=!0;const o={type:"link",raw:e,href:r,title:i,text:s,tokens:t.inlineTokens(s)};return t.state.inLink=!1,o}return{type:"image",raw:e,href:r,title:i,text:d(s)}}function be(c,n){const e=c.match(/^(\s+)(?:```)/);if(e===null)return n;const t=e[1];return n.split(`
`).map(r=>{const i=r.match(/^\s+/);if(i===null)return r;const[s]=i;return s.length>=t.length?r.slice(t.length):r}).join(`
`)}class v{options;rules;lexer;constructor(n){this.options=n||T}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:E(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],r=be(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(/#$/.test(t)){const r=E(t,"#");(this.options.pedantic||!r||/ $/.test(r))&&(t=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:e[0]}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){let t=e[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);t=E(t.replace(/^ *>[ \t]?/gm,""),`
`);const r=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(t);return this.lexer.state.top=r,{type:"blockquote",raw:e[0],tokens:i,text:t}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const r=t.length>1,i={type:"list",raw:"",ordered:r,start:r?+t.slice(0,-1):"",loose:!1,items:[]};t=r?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=r?t:"[*+-]");const s=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",h=!1;for(;n;){let a=!1;if(!(e=s.exec(n))||this.rules.block.hr.test(n))break;o=e[0],n=n.substring(o.length);let u=e[2].split(`
`,1)[0].replace(/^\t+/,B=>" ".repeat(3*B.length)),p=n.split(`
`,1)[0],g=0;this.options.pedantic?(g=2,l=u.trimStart()):(g=e[2].search(/[^ ]/),g=g>4?1:g,l=u.slice(g),g+=e[1].length);let w=!1;if(!u&&/^ *$/.test(p)&&(o+=p+`
`,n=n.substring(p.length+1),a=!0),!a){const B=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),X=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),G=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),K=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;n;){const j=n.split(`
`,1)[0];if(p=j,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),G.test(p)||K.test(p)||B.test(p)||X.test(n))break;if(p.search(/[^ ]/)>=g||!p.trim())l+=`
`+p.slice(g);else{if(w||u.search(/[^ ]/)>=4||G.test(u)||K.test(u)||X.test(u))break;l+=`
`+p}!w&&!p.trim()&&(w=!0),o+=j+`
`,n=n.substring(j.length+1),u=p.slice(g)}}i.loose||(h?i.loose=!0:/\n *\n *$/.test(o)&&(h=!0));let x=null,y;this.options.gfm&&(x=/^\[[ xX]\] /.exec(l),x&&(y=x[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:o,task:!!x,checked:y,loose:!1,text:l,tokens:[]}),i.raw+=o}i.items[i.items.length-1].raw=o.trimEnd(),i.items[i.items.length-1].text=l.trimEnd(),i.raw=i.raw.trimEnd();for(let a=0;a<i.items.length;a++)if(this.lexer.state.top=!1,i.items[a].tokens=this.lexer.blockTokens(i.items[a].text,[]),!i.loose){const u=i.items[a].tokens.filter(g=>g.type==="space"),p=u.length>0&&u.some(g=>/\n.*\n/.test(g.raw));i.loose=p}if(i.loose)for(let a=0;a<i.items.length;a++)i.items[a].loose=!0;return i}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),r=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:r,title:i}}}table(n){const e=this.rules.block.table.exec(n);if(!e||!/[:|]/.test(e[2]))return;const t=V(e[1]),r=e[2].replace(/^\||\| *$/g,"").split("|"),i=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(t.length===r.length){for(const o of r)/^ *-+: *$/.test(o)?s.align.push("right"):/^ *:-+: *$/.test(o)?s.align.push("center"):/^ *:-+ *$/.test(o)?s.align.push("left"):s.align.push(null);for(const o of t)s.header.push({text:o,tokens:this.lexer.inline(o)});for(const o of i)s.rows.push(V(o,s.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return s}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:d(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const s=E(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{const s=xe(e[2],"()");if(s>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let r=e[2],i="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);s&&(r=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(t)?r=r.slice(1):r=r.slice(1,-1)),Y(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){const r=(t[2]||t[1]).replace(/\s+/g," "),i=e[r.toLowerCase()];if(!i){const s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return Y(t,i,t[0],this.lexer)}}emStrong(n,e,t=""){let r=this.rules.inline.emStrongLDelim.exec(n);if(!r||r[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(r[1]||r[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const s=[...r[0]].length-1;let o,l,h=s,a=0;const u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*n.length+s);(r=u.exec(e))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(l=[...o].length,r[3]||r[4]){h+=l;continue}else if((r[5]||r[6])&&s%3&&!((s+l)%3)){a+=l;continue}if(h-=l,h>0)continue;l=Math.min(l,l+h+a);const p=[...r[0]][0].length,g=n.slice(0,s+r.index+p+l);if(Math.min(s,l)%2){const x=g.slice(1,-1);return{type:"em",raw:g,text:x,tokens:this.lexer.inlineTokens(x)}}const w=g.slice(2,-2);return{type:"strong",raw:g,text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(/\n/g," ");const r=/[^ ]/.test(t),i=/^ /.test(t)&&/ $/.test(t);return r&&i&&(t=t.substring(1,t.length-1)),t=d(t,!0),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){const e=this.rules.inline.autolink.exec(n);if(e){let t,r;return e[2]==="@"?(t=d(e[1]),r="mailto:"+t):(t=d(e[1]),r=t),{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,r;if(e[2]==="@")t=d(e[0]),r="mailto:"+t;else{let i;do i=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(i!==e[0]);t=d(e[0]),e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:t,href:r,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){const e=this.rules.inline.text.exec(n);if(e){let t;return this.lexer.state.inRawBlock?t=e[0]:t=d(e[0]),{type:"text",raw:e[0],text:t}}}}const me=/^(?: *(?:\n|$))+/,we=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,ye=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,_=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,$e=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ie=/(?:[*+-]|\d{1,9}[.)])/,re=k(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ie).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Q=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Te=/^[^\n]+/,O=/(?!\s*\])(?:\\.|[^\[\]\\])+/,ze=k(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",O).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Re=k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ie).getRegex(),P="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",N=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,_e=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",N).replace("tag",P).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),le=k(Q).replace("hr",_).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",P).getRegex(),Se=k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",le).getRegex(),H={blockquote:Se,code:we,def:ze,fences:ye,heading:$e,hr:_,html:_e,lheading:re,list:Re,newline:me,paragraph:le,table:R,text:Te},ee=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",_).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",P).getRegex(),Ae={...H,table:ee,paragraph:k(Q).replace("hr",_).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ee).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",P).getRegex()},Ie={...H,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",N).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:R,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(Q).replace("hr",_).replace("heading",` *#{1,6} *[^
]`).replace("lheading",re).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},oe=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ee=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ae=/^( {2,}|\\)\n(?!\s*$)/,Le=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,S="\\p{P}\\p{S}",Ce=k(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,S).getRegex(),ve=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,qe=k(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,S).getRegex(),Ze=k("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,S).getRegex(),Pe=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,S).getRegex(),Be=k(/\\([punct])/,"gu").replace(/punct/g,S).getRegex(),je=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),De=k(N).replace("(?:-->|$)","-->").getRegex(),Me=k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",De).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),q=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Qe=k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",q).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ce=k(/^!?\[(label)\]\[(ref)\]/).replace("label",q).replace("ref",O).getRegex(),he=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",O).getRegex(),Oe=k("reflink|nolink(?!\\()","g").replace("reflink",ce).replace("nolink",he).getRegex(),F={_backpedal:R,anyPunctuation:Be,autolink:je,blockSkip:ve,br:ae,code:Ee,del:R,emStrongLDelim:qe,emStrongRDelimAst:Ze,emStrongRDelimUnd:Pe,escape:oe,link:Qe,nolink:he,punctuation:Ce,reflink:ce,reflinkSearch:Oe,tag:Me,text:Le,url:R},Ne={...F,link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",q).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",q).getRegex()},D={...F,escape:k(oe).replace("])","~|])").getRegex(),url:k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},He={...D,br:k(ae).replace("{2,}","*").getRegex(),text:k(D.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},L={normal:H,gfm:Ae,pedantic:Ie},z={normal:F,gfm:D,breaks:He,pedantic:Ne};class b{tokens;options;state;tokenizer;inlineQueue;constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||T,this.options.tokenizer=this.options.tokenizer||new v,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:L.normal,inline:z.normal};this.options.pedantic?(e.block=L.pedantic,e.inline=z.pedantic):this.options.gfm&&(e.block=L.gfm,this.options.breaks?e.inline=z.breaks:e.inline=z.gfm),this.tokenizer.rules=e}static get rules(){return{block:L,inline:z}}static lex(n,e){return new b(e).lex(n)}static lexInline(n,e){return new b(e).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,e=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(o,l,h)=>l+"    ".repeat(h.length));let t,r,i,s;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(t=o.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.space(n)){n=n.substring(t.raw.length),t.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(t);continue}if(t=this.tokenizer.code(n)){n=n.substring(t.raw.length),r=e[e.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+t.raw,r.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(t);continue}if(t=this.tokenizer.fences(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.heading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.hr(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.blockquote(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.list(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.html(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.def(n)){n=n.substring(t.raw.length),r=e[e.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+t.raw,r.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.lheading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(i=n,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=n.slice(1);let h;this.options.extensions.startBlock.forEach(a=>{h=a.call({lexer:this},l),typeof h=="number"&&h>=0&&(o=Math.min(o,h))}),o<1/0&&o>=0&&(i=n.substring(0,o+1))}if(this.state.top&&(t=this.tokenizer.paragraph(i))){r=e[e.length-1],s&&r.type==="paragraph"?(r.raw+=`
`+t.raw,r.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(t),s=i.length!==n.length,n=n.substring(t.raw.length);continue}if(t=this.tokenizer.text(n)){n=n.substring(t.raw.length),r=e[e.length-1],r&&r.type==="text"?(r.raw+=`
`+t.raw,r.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(t);continue}if(n){const o="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,e}inline(n,e=[]){return this.inlineQueue.push({src:n,tokens:e}),e}inlineTokens(n,e=[]){let t,r,i,s=n,o,l,h;if(this.tokens.links){const a=Object.keys(this.tokens.links);if(a.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)a.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,o.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(l||(h=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(a=>(t=a.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.escape(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.tag(n)){n=n.substring(t.raw.length),r=e[e.length-1],r&&t.type==="text"&&r.type==="text"?(r.raw+=t.raw,r.text+=t.text):e.push(t);continue}if(t=this.tokenizer.link(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(t.raw.length),r=e[e.length-1],r&&t.type==="text"&&r.type==="text"?(r.raw+=t.raw,r.text+=t.text):e.push(t);continue}if(t=this.tokenizer.emStrong(n,s,h)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.codespan(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.br(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.del(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.autolink(n)){n=n.substring(t.raw.length),e.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(n))){n=n.substring(t.raw.length),e.push(t);continue}if(i=n,this.options.extensions&&this.options.extensions.startInline){let a=1/0;const u=n.slice(1);let p;this.options.extensions.startInline.forEach(g=>{p=g.call({lexer:this},u),typeof p=="number"&&p>=0&&(a=Math.min(a,p))}),a<1/0&&a>=0&&(i=n.substring(0,a+1))}if(t=this.tokenizer.inlineText(i)){n=n.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(h=t.raw.slice(-1)),l=!0,r=e[e.length-1],r&&r.type==="text"?(r.raw+=t.raw,r.text+=t.text):e.push(t);continue}if(n){const a="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return e}}class Z{options;constructor(n){this.options=n||T}code(n,e,t){const r=(e||"").match(/^\S*/)?.[0];return n=n.replace(/\n$/,"")+`
`,r?'<pre><code class="language-'+d(r)+'">'+(t?n:d(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:d(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,e){return n}heading(n,e,t){return`<h${e}>${n}</h${e}>
`}hr(){return`<hr>
`}list(n,e,t){const r=e?"ol":"ul",i=e&&t!==1?' start="'+t+'"':"";return"<"+r+i+`>
`+n+"</"+r+`>
`}listitem(n,e,t){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+e+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,e){const t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,e,t){const r=J(n);if(r===null)return t;n=r;let i='<a href="'+n+'"';return e&&(i+=' title="'+e+'"'),i+=">"+t+"</a>",i}image(n,e,t){const r=J(n);if(r===null)return t;n=r;let i=`<img src="${n}" alt="${t}"`;return e&&(i+=` title="${e}"`),i+=">",i}text(n){return n}}class U{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,e,t){return""+t}image(n,e,t){return""+t}br(){return""}}class m{options;renderer;textRenderer;constructor(n){this.options=n||T,this.options.renderer=this.options.renderer||new Z,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new U}static parse(n,e){return new m(e).parse(n)}static parseInline(n,e){return new m(e).parseInline(n)}parse(n,e=!0){let t="";for(let r=0;r<n.length;r++){const i=n[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const s=i,o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){t+=o||"";continue}}switch(i.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{const s=i;t+=this.renderer.heading(this.parseInline(s.tokens),s.depth,ke(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{const s=i;t+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{const s=i;let o="",l="";for(let a=0;a<s.header.length;a++)l+=this.renderer.tablecell(this.parseInline(s.header[a].tokens),{header:!0,align:s.align[a]});o+=this.renderer.tablerow(l);let h="";for(let a=0;a<s.rows.length;a++){const u=s.rows[a];l="";for(let p=0;p<u.length;p++)l+=this.renderer.tablecell(this.parseInline(u[p].tokens),{header:!1,align:s.align[p]});h+=this.renderer.tablerow(l)}t+=this.renderer.table(o,h);continue}case"blockquote":{const s=i,o=this.parse(s.tokens);t+=this.renderer.blockquote(o);continue}case"list":{const s=i,o=s.ordered,l=s.start,h=s.loose;let a="";for(let u=0;u<s.items.length;u++){const p=s.items[u],g=p.checked,w=p.task;let x="";if(p.task){const y=this.renderer.checkbox(!!g);h?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=y+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=y+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:y+" "}):x+=y+" "}x+=this.parse(p.tokens,h),a+=this.renderer.listitem(x,w,!!g)}t+=this.renderer.list(a,o,l);continue}case"html":{const s=i;t+=this.renderer.html(s.text,s.block);continue}case"paragraph":{const s=i;t+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=i,o=s.tokens?this.parseInline(s.tokens):s.text;for(;r+1<n.length&&n[r+1].type==="text";)s=n[++r],o+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);t+=e?this.renderer.paragraph(o):o;continue}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return t}parseInline(n,e){e=e||this.renderer;let t="";for(let r=0;r<n.length;r++){const i=n[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){t+=s||"";continue}}switch(i.type){case"escape":{const s=i;t+=e.text(s.text);break}case"html":{const s=i;t+=e.html(s.text);break}case"link":{const s=i;t+=e.link(s.href,s.title,this.parseInline(s.tokens,e));break}case"image":{const s=i;t+=e.image(s.href,s.title,s.text);break}case"strong":{const s=i;t+=e.strong(this.parseInline(s.tokens,e));break}case"em":{const s=i;t+=e.em(this.parseInline(s.tokens,e));break}case"codespan":{const s=i;t+=e.codespan(s.text);break}case"br":{t+=e.br();break}case"del":{const s=i;t+=e.del(this.parseInline(s.tokens,e));break}case"text":{const s=i;t+=e.text(s.text);break}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return t}}class C{options;constructor(n){this.options=n||T}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}class Fe{defaults=M();options=this.setOptions;parse=this.#e(b.lex,m.parse);parseInline=this.#e(b.lexInline,m.parseInline);Parser=m;Renderer=Z;TextRenderer=U;Lexer=b;Tokenizer=v;Hooks=C;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(const r of n)switch(t=t.concat(e.call(this,r)),r.type){case"table":{const i=r;for(const s of i.header)t=t.concat(this.walkTokens(s.tokens,e));for(const s of i.rows)for(const o of s)t=t.concat(this.walkTokens(o.tokens,e));break}case"list":{const i=r;t=t.concat(this.walkTokens(i.items,e));break}default:{const i=r;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(s=>{const o=i[s].flat(1/0);t=t.concat(this.walkTokens(o,e))}):i.tokens&&(t=t.concat(this.walkTokens(i.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const r={...t};if(r.async=this.defaults.async||r.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const s=e.renderers[i.name];s?e.renderers[i.name]=function(...o){let l=i.renderer.apply(this,o);return l===!1&&(l=s.apply(this,o)),l}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=e[i.level];s?s.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),r.extensions=e),t.renderer){const i=this.defaults.renderer||new Z(this.defaults);for(const s in t.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(s==="options")continue;const o=s,l=t.renderer[o],h=i[o];i[o]=(...a)=>{let u=l.apply(i,a);return u===!1&&(u=h.apply(i,a)),u||""}}r.renderer=i}if(t.tokenizer){const i=this.defaults.tokenizer||new v(this.defaults);for(const s in t.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const o=s,l=t.tokenizer[o],h=i[o];i[o]=(...a)=>{let u=l.apply(i,a);return u===!1&&(u=h.apply(i,a)),u}}r.tokenizer=i}if(t.hooks){const i=this.defaults.hooks||new C;for(const s in t.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(s==="options")continue;const o=s,l=t.hooks[o],h=i[o];C.passThroughHooks.has(s)?i[o]=a=>{if(this.defaults.async)return Promise.resolve(l.call(i,a)).then(p=>h.call(i,p));const u=l.call(i,a);return h.call(i,u)}:i[o]=(...a)=>{let u=l.apply(i,a);return u===!1&&(u=h.apply(i,a)),u}}r.hooks=i}if(t.walkTokens){const i=this.defaults.walkTokens,s=t.walkTokens;r.walkTokens=function(o){let l=[];return l.push(s.call(this,o)),i&&(l=l.concat(i.call(this,o))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return b.lex(n,e??this.defaults)}parser(n,e){return m.parse(n,e??this.defaults)}#e(n,e){return(t,r)=>{const i={...r},s={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);const o=this.#t(!!s.silent,!!s.async);if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(t):t).then(l=>n(l,s)).then(l=>s.hooks?s.hooks.processAllTokens(l):l).then(l=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then(l=>e(l,s)).then(l=>s.hooks?s.hooks.postprocess(l):l).catch(o);try{s.hooks&&(t=s.hooks.preprocess(t));let l=n(t,s);s.hooks&&(l=s.hooks.processAllTokens(l)),s.walkTokens&&this.walkTokens(l,s.walkTokens);let h=e(l,s);return s.hooks&&(h=s.hooks.postprocess(h)),h}catch(l){return o(l)}}}#t(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const r="<p>An error occurred:</p><pre>"+d(t.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(t);throw t}}}const $=new Fe;function f(c,n){return $.parse(c,n)}f.options=f.setOptions=function(c){return $.setOptions(c),f.defaults=$.defaults,te(f.defaults),f};f.getDefaults=M;f.defaults=T;f.use=function(...c){return $.use(...c),f.defaults=$.defaults,te(f.defaults),f};f.walkTokens=function(c,n){return $.walkTokens(c,n)};f.parseInline=$.parseInline;f.Parser=m;f.parser=m.parse;f.Renderer=Z;f.TextRenderer=U;f.Lexer=b;f.lexer=b.lex;f.Tokenizer=v;f.Hooks=C;f.parse=f;f.options;f.setOptions;f.use;f.walkTokens;f.parseInline;m.parse;b.lex;const Ge=({children:c})=>{const[n,e]=I.useState(0),[t,r]=I.useState(!1),i=I.useRef([]);I.useEffect(()=>{t?i.current[n]?.focus():r(!0)},[n]);const s=Array.from(c.props.value.matchAll(/<div\s+data-name="([^"]+)"[^>]*>(.*?)<\/div>/gs),l=>({name:l[1],children:l[0]})),o=(l,h)=>{l.key==="Enter"||l.key===" "?e(h):l.key==="ArrowRight"?e((n+1)%s.length):l.key==="ArrowLeft"&&e((n-1+s.length)%s.length)};return A.jsxs("div",{className:"tab",children:[A.jsx("ul",{className:"tab-nav",children:s.map((l,h)=>A.jsx("li",{className:`tab-nav-item ${h===n&&"active"}`,role:"tab",tabIndex:h===n?0:-1,onKeyDown:a=>o(a,h),onClick:()=>e(h),ref:a=>i.current[h]=a,children:l.name},h))}),s.map((l,h)=>A.jsx("div",{className:n===h?"tab-content block px-5":"hidden",dangerouslySetInnerHTML:{__html:f.parse(l.children)}},h))]})};export{Ge as default};
