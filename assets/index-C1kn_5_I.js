import{m as Pe,w as Fe,_ as Se,r as u,T as Ce,g as Oe,s as Ee,a as $e,u as _e,i as ze,S as v,b as S,c as b,j as e,d as ne,e as D,R as Y,f as ie,h as Be,k as Le,l as Me}from"./index-Cq0OCUDh.js";var Ne=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Te=Pe(function(n){return Ne.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),Ie=Te,We=function(i){return i!=="theme"},de=function(i){return typeof i=="string"&&i.charCodeAt(0)>96?Ie:We},ce=function(i,a,r){var o;if(a){var x=a.shouldForwardProp;o=i.__emotion_forwardProp&&x?function(l){return i.__emotion_forwardProp(l)&&x(l)}:x}return typeof o!="function"&&r&&(o=i.__emotion_forwardProp),o},De=function(i){var a=i.cache,r=i.serialized,o=i.isStringTag;return $e(a,r,o),_e(function(){return ze(a,r,o)}),null},He=function n(i,a){var r=i.__emotion_real===i,o=r&&i.__emotion_base||i,x,l;a!==void 0&&(x=a.label,l=a.target);var d=ce(i,a,r),j=d||de(o),m=!j("as");return function(){var R=arguments,P=r&&i.__emotion_styles!==void 0?i.__emotion_styles.slice(0):[];if(x!==void 0&&P.push("label:"+x+";"),R[0]==null||R[0].raw===void 0)P.push.apply(P,R);else{var H=R[0];P.push(H[0]);for(var Z=R.length,M=1;M<Z;M++)P.push(R[M],H[M])}var y=Fe(function(g,B,X){var ee=m&&g.as||o,I="",le=[],U=g;if(g.theme==null){U={};for(var oe in g)U[oe]=g[oe];U.theme=u.useContext(Ce)}typeof g.className=="string"?I=Oe(B.registered,le,g.className):g.className!=null&&(I=g.className+" ");var ae=Ee(P.concat(le),B.registered,U);I+=B.key+"-"+ae.name,l!==void 0&&(I+=" "+l);var Re=m&&d===void 0?de(ee):j,q={};for(var V in g)m&&V==="as"||Re(V)&&(q[V]=g[V]);return q.className=I,X&&(q.ref=X),u.createElement(u.Fragment,null,u.createElement(De,{cache:B,serialized:ae,isStringTag:typeof ee=="string"}),u.createElement(ee,q))});return y.displayName=x!==void 0?x:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",y.defaultProps=i.defaultProps,y.__emotion_real=y,y.__emotion_base=o,y.__emotion_styles=P,y.__emotion_forwardProp=d,Object.defineProperty(y,"toString",{value:function(){return"."+l}}),y.withComponent=function(g,B){var X=n(g,Se({},a,B,{shouldForwardProp:ce(y,B,!0)}));return X.apply(void 0,P)},y}},Xe=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],s=He.bind(null);Xe.forEach(function(n){s[n]=s(n)});const F=s.ol`
  border: 1px solid;
  padding: 1em;
  padding-left: ${({theme:n})=>n.language==="ja"?"3.5em":"3em"};
  margin: 1em 0;
  & > li {
    list-style-type: ${({theme:n})=>n.language==="ja"?"i_ii_iii":"ga_na_da"};
  }
  & > li::marker {
    font-family: ${({theme:n})=>n.language==="ja"?v:S};
    font-weight: ${({theme:n})=>n.language==="ja"?"bold":"inherit"};
  }
`,Ue=s.fieldset`
  border: 1px solid;
  border-color: inherit;
  padding: 1em;
  margin: 1em 0;
  & > legend {
    margin: 0 auto;
    line-height: 1;
  }
`,qe=s.ol`
  padding-left: 2em;
  & > li {
    list-style-type: ${({theme:n})=>n.language==="ja"?"a_i_u":"g_n_d"};
  }
  & > li::marker {
    font-family: ${({theme:n})=>n.language==="ja"?v:S};
    font-weight: ${({theme:n})=>n.language==="ja"?"bold":"inherit"};
  }
`,Ve=s.span`
  letter-spacing: 1em;
`,c=({children:n})=>{const{language:i}=b();return e.jsxs(Ue,{children:[e.jsx("legend",{children:i==="ja"?"<例>":e.jsxs(e.Fragment,{children:["<",e.jsx(Ve,{children:"보"}),"기>"]})}),e.jsx(qe,{children:n})]})},O=s.span`
  font-family: ${({theme:n})=>n.language==="ja"?v:S};
  font-weight: ${({theme:n})=>n.language==="ja"?"bold":"inherit"};
`,Ge="ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ".split(""),Ke="アイウエオカキクケコサシスセソタチツテトナニヌネノ".split(""),se=({index:n})=>{const{language:i}=b();return e.jsx(O,{children:i==="ja"?Ke[n-1]:Ge[n-1]})},Je="(가),(나),(다),(라),(마),(바),(사),(아),(자),(차),(카),(타),(파),(하)".split(","),Ye="(Ⅰ),(Ⅱ),(Ⅲ),(Ⅳ),(Ⅴ),(Ⅵ),(Ⅶ),(Ⅷ),(Ⅸ),(Ⅹ)".split(","),ye=({index:n})=>{const{language:i}=b();return e.jsx(O,{children:i==="ja"?Ye[n-1]:Je[n-1]})},re="㉠㉡㉢㉣㉤㉥㉦㉧㉨㉩㉪㉫㉬㉭".split(""),W="ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓨⓩ".split(""),we=({index:n})=>{const{language:i}=b();return e.jsx(O,{children:i==="ko"?re[n-1]:W[n-1]})},Qe=s(O)`
  margin-right: ${({theme:n})=>n.language==="ko"?"0.2em":"0"};
  vertical-align: ${({theme:n})=>n.language==="ko"?"baseline":"-0.5em"};
  line-height: 1;
`,Ze=s.span`
  text-decoration: underline;
  text-underline-offset: 0.2em;
`,ve=({index:n,children:i})=>{const{language:a}=b();return e.jsxs("span",{children:[e.jsx(Qe,{children:a==="ko"?re[n-1]:W[n-1]}),e.jsx(Ze,{children:i})]})},Q=({items:n})=>{const{language:i}=b();return e.jsx(e.Fragment,{children:n.map((a,r)=>e.jsxs(u.Fragment,{children:[r>0&&(i==="ko"?", ":"、"),a]},r))})},J=e.jsx(ye,{index:1}),N=e.jsx(ye,{index:2}),f=e.jsx(se,{index:1}),A=e.jsx(se,{index:2}),C=e.jsx(se,{index:3}),E=e.jsx(Q,{items:[f,A]}),$=e.jsx(Q,{items:[f,C]}),_=e.jsx(Q,{items:[A,C]}),k=e.jsx(Q,{items:[f,A,C]}),t=({children:n})=>n?e.jsx(ve,{index:1,children:n}):e.jsx(we,{index:1}),p=({children:n})=>n?e.jsx(ve,{index:2,children:n}):e.jsx(we,{index:2}),en={index:1,score:2,content:{ko:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"다음은 마작의 역 A에 대한 자료이다."}),e.jsxs(F,{children:[e.jsx("li",{children:"A로 화료하기 위해서는 2에서 8까지의 수패만을 사용하여야 한다."}),e.jsxs("li",{children:["A의 명칭은 ",e.jsx(t,{children:"요구(么九)패"}),"를 사용하지 않음을 뜻한다."]}),e.jsxs("li",{children:["일반적으로 ",e.jsx(p,{children:"멘젠 상태"}),"가 아니더라도 A로 화료할 수 있다."]})]}),e.jsx("p",{children:"이에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은?"}),e.jsxs(c,{children:[e.jsx("li",{children:"A는 1판역이다."}),e.jsxs("li",{children:[J,"의 예로는 ‘동(東)’ 패가 있다."]}),e.jsxs("li",{children:["‘치’ 발성을 한 작사는 ",N," 상태이다."]})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"下の文は麻雀のある役「A」についての説明である。"}),e.jsxs(F,{children:[e.jsx("li",{children:"「A」でアガるためには2から8までの数牌だけを使うしかない。"}),e.jsxs("li",{children:["「A」の名称は",e.jsx(t,{children:"么九牌"}),"を使わないことを意味する。"]}),e.jsxs("li",{children:["一般的には",e.jsx(p,{children:"門前状態"}),"でなくても「A」でアガリができる。"]})]}),e.jsx("p",{children:"これについての説明として正しいものを、<例>の中から選べ。"}),e.jsxs(c,{children:[e.jsx("li",{children:"「A」は1翻役である。"}),e.jsxs("li",{children:[J,"の例としては「東」牌がある。"]}),e.jsxs("li",{children:["「チー」をした雀士は",N,"状態である。"]})]})]})},options:[,f,E,$,_,k],optionPerRow:3,answer:2},nn={index:2,score:2,content:{ko:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["다음은 패에 대한 자료이다. ",e.jsx(t,{}),"은 ‘4삭’과 ‘5삭’ 중 하나이다."]}),e.jsxs(F,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"은 슌쯔를 만드는 데에 사용할 수 있다."]}),e.jsxs("li",{children:[e.jsx(t,{}),"이 도라 표시패일 경우, ‘5삭’은 도라로 취급된다."]})]}),e.jsx("p",{children:"이에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은? (단, 도라 표시패는 1개이다.)"}),e.jsxs(c,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"은 ‘4삭’이다."]}),e.jsxs("li",{children:[J,"에서 만드는 슌쯔에는 ‘2삭’이 포함될 수 있다."]}),e.jsxs("li",{children:[N,"의 상황이 아니더라도 ‘5삭’ 4장 중 1장은 도라로 취급될 수 있다."]})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["下の文は牌についての説明である。",e.jsx(t,{}),"は「四索」または「五索」である。"]}),e.jsxs(F,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"は順子を作る時に使うことができる。"]}),e.jsxs("li",{children:[e.jsx(t,{}),"がドラ表示牌なら、「五索」はドラとして扱う。"]})]}),e.jsx("p",{children:"これについての説明として正しいものを、<例>の中から選べ。（ただし、ドラ表示牌は1つである。）"}),e.jsxs(c,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"は「四索」である。"]}),e.jsxs("li",{children:[J,"で作る順子には「二索」が含まれることができる。"]}),e.jsxs("li",{children:[N,"の状況でなくても「五索」4枚のうち1枚はドラとして扱われることができる。"]})]})]})},options:[,C,E,$,_,k],optionPerRow:3,answer:5},sn={index:3,score:2,content:{ko:e.jsx(e.Fragment,{children:e.jsx("p",{children:"다음 중 첫 친(親)을 나타내는 말로 옳은 것은?"})}),ja:e.jsx(e.Fragment,{children:e.jsx("p",{children:"次のうち、最初の親を表す言葉の読みとして正しいものを選べ。"})})},options:[,{ko:"킬로",ja:"チーズ"},{ko:"메가",ja:"チーニャ"},{ko:"기가",ja:"チーチャ"},{ko:"테라",ja:"チーター"},{ko:"페타",ja:"チートイツ"}],optionPerRow:3,answer:3},xe=s.p`
  border: 1px solid;
  padding: 1em;
  margin: 1em 0;
  text-indent: 1em;
`,rn=s.span`
  display: inline-block;
  float: right;
`,tn=s.span`
  display: block;
  clear: both;
`,h=({score:n})=>{const{language:i}=b();return e.jsxs(e.Fragment,{children:[e.jsx(rn,{children:e.jsxs(O,{children:["[",n,i==="ja"?"点":"점","]"]})}),e.jsx(tn,{})]})},ln={index:4,score:3,content:{ko:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"다음은 오프라인 대국 예절에 대한 글이다."}),e.jsxs(xe,{children:[e.jsx("p",{children:"오프라인 대국은 온라인 대국과는 다르게 대국의 흐름을 방해하는 반칙 행위가 발생할 수 있습니다. 경우에 따라서는 반칙을 한 작사에게 벌점을 부과하거나, 그 작사의 화료를 불가능하게 하는 등의 벌칙을 부과합니다."}),e.jsx("p",{children:"즐거운 오프라인 대국을 위해서는 서로 정중한 태도를 유지하는 것이 중요합니다."})]}),e.jsxs("p",{children:["위 글의 내용으로 보아 오프라인 대국에 임하는 작사의 태도로 가장 적절한 것은? ",e.jsx(h,{score:3})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"下の文章はオフライン対局におけるマナーについて述べたものである。"}),e.jsxs(xe,{children:[e.jsx("p",{children:"オフライン対局はオンライン対局とは異なり、対局の進行を妨げる反則行為が発生することがあります。場合によっては、反則をした雀士に対して罰点を科したり、その雀士の和了を不可能にするなどの罰則を課すこともあります。"}),e.jsx("p",{children:"楽しいオフライン対局のためには、互いに丁寧な態度を保つことが重要です。"})]}),e.jsxs("p",{children:["この文章の内容から考えて、オフライン対局に臨む雀士の態度として最も適切なものを選べ。",e.jsx(h,{score:3})]})]})},options:[,{ko:"대국 중에 오른쪽 작사와의 합의 하에 다른 작사 몰래 손패를 한 장씩 교환한다.",ja:"対局中に右隣の雀士と合意のうえで、他の雀士に内緒で手牌を一枚ずつ交換する。"},{ko:"자신의 패를 타패할 때 큰 소리가 나지 않도록 가볍게 내려놓는다.",ja:"自分の牌を打牌するとき、大きな音を立てないように軽く置く。"},{ko:"다른 작사에게 점수를 지불할 때 점수 교환에 즐거움을 가미하기 위해 점수봉을 하나씩 던진다.",ja:"他の雀士に点棒を支払うとき、点棒を一本ずつ投げて点数交換に楽しさを加える。"},{ko:"필요한 패를 계속 뽑아오지 못할 때 대국 중에 ‘백’ 패를 조심스레 조각해서 필요한 패를 제작한다.",ja:"必要な牌がなかなか引けないときは、対局中に「白」牌を削って必要な牌を作る。"},{ko:"다른 작사가 타패할 때마다 ‘론 위즐리’라고 외쳐 다른 작사들이 대국에 더 몰입할 수 있도록 돕는다.",ja:"他の雀士が打牌する毎回「ロン・ウィーズリー」と叫び、他の雀士が対局により集中できるよう助ける。"}],optionPerRow:1,answer:2},on={index:5,score:2,content:{ko:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"그림은 어떤 작사가 받은 배패이다. 이와 관련된 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은?"}),e.jsx("figure",{children:e.jsx("img",{src:"/images/12679m11349p9s127z@2x.png",alt:"12679m11349p9s127z"})}),e.jsxs(c,{children:[e.jsx("li",{children:"이 배패에는 자패가 모두 8장이 있다."}),e.jsx("li",{children:"현재 패산에는 ‘1통’이 2장 이하이다."}),e.jsx("li",{children:"이 작사는 1순에 유국을 선언할 수 없다."})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"図はある雀士が受け取った配牌である。これに関する説明として正しいものを、<例>の中から選べ。"}),e.jsx("figure",{children:e.jsx("img",{src:"/images/12679m11349p9s127z@2x.png",alt:"12679m11349p9s127z"})}),e.jsxs(c,{children:[e.jsx("li",{children:"この配牌には自牌がすべて8枚ある。"}),e.jsx("li",{children:"現在の牌山には「一筒」が2枚以下である。"}),e.jsx("li",{children:"この雀士は第一巡に流局を宣言することができない。"})]})]})},options:[,A,C,E,_,k],optionPerRow:3,answer:4},an={index:6,score:3,content:{ko:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"다음은 4인 리치 마작에 대한 자료이다."}),e.jsxs(F,{children:[e.jsxs("li",{children:["리치 마작의 패는 모두 34종류로, 총 ",e.jsx(t,{}),"장의 패를 사용한다."]}),e.jsx("li",{children:"리치 마작에서는 왕패 14장을 사용한다. 이 중 영상패 4장을 제외한 10장은 누구든 어떤 방법으로도 가져가지 못한다."})]}),e.jsxs("p",{children:["이에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은?"," ",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"은 136이다."]}),e.jsxs("li",{children:[N,"에도 불구하고 대국 중 ‘깡’ 발성으로 왕패의 개수가 영구히 줄어들 수 있다."]}),e.jsx("li",{children:"대국 중 아무 발성 없이 황패유국된 경우 패산의 마지막 패는 남가(南家)가 가져간다."})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"下の文章は四人リーチ麻雀に関する資料である。"}),e.jsxs(F,{children:[e.jsxs("li",{children:["リーチ麻雀の牌は全部で34種類あり、合計で",e.jsx(t,{}),"枚の牌を使用する。"]}),e.jsx("li",{children:"リーチ麻雀では王牌14枚を残す。このうち嶺上牌4枚を除いた10枚は、誰もいかなる方法でも取ることができない。"})]}),e.jsxs("p",{children:["これについての説明として正しいものを、<例>の中から選べ。",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"は136である。"]}),e.jsxs("li",{children:[N,"にもかかわらず、対局中の「槓（カン）」の発声によって王牌の枚数が永久に減少することがある。"]}),e.jsx("li",{children:"対局中に発声が一切なく荒牌平局となった場合、牌山の最後の牌は南家が取る。"})]})]})},options:[,f,E,$,_,k],optionPerRow:3,answer:3},he=s.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`,G=s.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  & > img {
    height: 4em;
  }
`,dn={index:7,score:2,content:{ko:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"그림은 마작에서 사용하는 패를 나타낸 것이다."}),e.jsxs(he,{children:[e.jsxs(G,{children:[e.jsx(t,{}),e.jsx("img",{src:"/images/z5@2x.png",alt:"5z"})]}),e.jsxs(G,{children:[e.jsx(p,{}),e.jsx("img",{src:"/images/z7@2x.png",alt:"7z"})]})]}),e.jsx("p",{children:"이에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은?"}),e.jsxs(c,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"에는 ",e.jsx(p,{}),"과 달리 아무것도 쓰여 있지 않아 원하는 패로 사용할 수 있다."]}),e.jsxs("li",{children:[e.jsx(t,{}),"이 도라 표시패에 있으면 ",e.jsx(p,{}),"이 도라가 된다."]}),e.jsxs("li",{children:[e.jsx(t,{})," 혹은 ",e.jsx(p,{}),"을 사용하여 자 400/친 700의 점수를 가지는 쯔모로 화료할 수 있다."]})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"図は麻雀で使用する牌を示したものである。"}),e.jsxs(he,{children:[e.jsxs(G,{children:[e.jsx(t,{}),e.jsx("img",{src:"/images/z5@2x.png",alt:"5z"})]}),e.jsxs(G,{children:[e.jsx(p,{}),e.jsx("img",{src:"/images/z7@2x.png",alt:"7z"})]})]}),e.jsx("p",{children:"これについての説明として正しいものを、<例>の中から選べ。"}),e.jsxs(c,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"には",e.jsx(p,{}),"と異なり何も図柄が書かれておらず、どの牌の代わりにもなる。"]}),e.jsxs("li",{children:[e.jsx(t,{}),"がドラ表示牌にあれば、",e.jsx(p,{}),"がドラになる。"]}),e.jsxs("li",{children:[e.jsx(t,{}),"または",e.jsx(p,{}),"を使用して、子400／親700の点数でツモ和了することができる。"]})]})]})},options:[,f,A,C,f,k],optionPerRow:3,answer:3},cn={index:8,score:2,content:{ko:e.jsx(e.Fragment,{children:e.jsx("p",{children:"다음 중 멘젠 상태에서 판 수가 가장 높은 역은?"})}),ja:e.jsx(e.Fragment,{children:e.jsx("p",{children:"門前の状態で翻数が最も高い役はどれか。次のうちから一つ選べ。"})})},options:[,{ko:"청일색(清一色)",ja:"清一色"},{ko:"준찬타(純全帯幺九, 순전대요구)",ja:"純全帯幺九"},{ko:"삼색동각(三色同刻)",ja:"三色同刻"},{ko:"창깡(搶槓)",ja:"搶槓"},{ko:"산깡쯔(三槓子)",ja:"三槓子"}],optionPerRow:2,answer:1},xn={index:9,score:2,content:{ko:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"<보기>는 마작 동아리 학생들이 역만 역 A에 대해 토론한 내용이다. 역 A의 이름으로 옳은 것은?"}),e.jsxs(c,{children:[e.jsx("li",{children:"A는 멘젠으로만 화료할 수 있어."}),e.jsx("li",{children:"A로 화료할 때 요구패를 사용할 수 있겠군."}),e.jsx("li",{children:"수패만을 사용해서 A로 화료할 수 있을 것 같아."})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"<例>は麻雀クラブの学生たちが役満である「A」について議論した内容である。 役「A」の名称として正しいものはどれか。次のうちから一つ選べ。"}),e.jsxs(c,{children:[e.jsx("li",{children:"「「A」は門前でしかアガリができない。」"}),e.jsx("li",{children:"「「A」でアガるとき、么九牌を使うことができる。」"}),e.jsx("li",{children:"「数牌だけを使ってAでアガリができるようだ。」"})]})]})},options:[,{ko:"구련보등(九蓮宝燈)",ja:"九蓮宝燈"},{ko:"국사무쌍(国士無双)",ja:"国士無双"},{ko:"녹일색(緑一色)",ja:"緑一色"},{ko:"대삼원(大三元)",ja:"大三元"},{ko:"청노두(清老頭)",ja:"清老頭"}],optionPerRow:1,answer:1},hn={index:10,score:3,content:{ko:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["<보기>는 작사들이 자신의 화료 점수를 계산한 것이다. 이 중 옳게 계산한 점수만을 있는 대로 고른 것은? (단, 본장에 의한 추가 점수는 고려하지 않는다.) ",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsx("li",{children:"자의 3판 60부 론 화료: 7,700점."}),e.jsx("li",{children:"친의 2판 90부 쯔모 화료: 2,900점 ALL."}),e.jsx("li",{children:"자의 1판 110부 론 화료: 3,900점."})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["<例>は雀士たちが自分のアガリ点を計算したものである。この中で正しく計算された点数だけを選べ。（ただし、本場による加点は考慮しないものとする。）",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsx("li",{children:"子の3翻60符 ロン：7,700"}),e.jsx("li",{children:"親の2翻90符 ツモ：2,900オール"}),e.jsx("li",{children:"子の1翻110符 ロン：3,900"})]})]})},options:[,A,C,E,$,k],optionPerRow:3,answer:3},jn={index:11,score:3,content:{ko:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["그림은 작사 A의 버림패이다. 이에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은? (단, 역만 화료는 고려하지 않는다.) ",e.jsx(h,{score:3})]}),e.jsx("figure",{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1929 1200",style:{minWidth:"50%",width:240},children:[e.jsx("image",{href:"/images/riichi1@2x.png",width:"1929",height:"1029"}),e.jsx("text",{x:"1498",y:"1100",fontSize:"140",textAnchor:"middle",fill:"inherit",children:re[0]})]})}),e.jsxs(c,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"은 A의 대기패가 아니다."]}),e.jsxs("li",{children:["A가 ",e.jsx(t,{})," 이후에 새로운 패를 타패하기 전에 화료한다면, A의 화료는 최소 2판 이상이다."]}),e.jsx("li",{children:"A가 화료하였다면, 그 화료에 한해 도라 표시패 아래의 뒷도라 표시패를 공개하여 추가적인 도라 표시패로 취급하게 된다."})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["下の図は雀士Aの捨て牌である。これに関する説明として正しいものを、<例>の中から選べ。（ただし、役満アガリは考慮しないものとする。）",e.jsx(h,{score:3})]}),e.jsx("figure",{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1929 1200",style:{minWidth:"50%",width:240},children:[e.jsx("image",{href:"/images/riichi1@2x.png",width:"1929",height:"1029"}),e.jsx("text",{x:"1498",y:"1100",fontSize:"140",textAnchor:"middle",fill:"inherit",strokeWidth:"10",fontWeight:"bold",fontFamily:v.join(", "),children:W[0]})]})}),e.jsxs(c,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"はAの待ち牌ではない。"]}),e.jsxs("li",{children:["Aが",e.jsx(t,{}),"の後、新しい牌を打牌する前にアガリした場合、Aのアガリは少なくとも2翻以上となる。"]}),e.jsx("li",{children:"Aがアガリしたならば、そのアガリに限りドラ表示牌の下にある裏ドラ表示牌を公開し、追加のドラ表示牌として扱う。"})]})]})},options:[,C,E,$,_,k],optionPerRow:3,answer:1},T=s.p`
  border: 1px solid;
  padding: 1em;
  margin: 1em 0;
  text-indent: 0 !important;
`,pn={index:12,score:3,content:{ko:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"다음은 A의 화료 직후의 대국자들의 대화 내용이다."}),e.jsxs(T,{children:["A: ",e.jsx(t,{}),"판 20부야.",e.jsx("br",{}),"B: 이걸 쯔모로 화료하는군.",e.jsx("br",{}),"C: 대기패의 종류가 2종이었구나.",e.jsx("br",{}),"D: 내 리치봉 돌려줘!"]}),e.jsxs("p",{children:["이에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은?"," ",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsx("li",{children:"A는 양면 대기로 화료하였다."}),e.jsxs("li",{children:[e.jsx(t,{}),"이 4일 경우, A의 화료는 만관이다."]}),e.jsx("li",{children:"A는 멘젠 상태로 화료하였다."})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"次はAのアガリ直後の対局者たちの会話である。"}),e.jsxs(T,{children:["Ａ「",e.jsx(t,{}),"翻20符だよ。」",e.jsx("br",{}),"Ｂ「これをツモでアガるのか。」",e.jsx("br",{}),"Ｃ「待ち牌は2種類だったのか。」",e.jsx("br",{}),"Ｄ「私のリーチ棒を返して！」"]}),e.jsxs("p",{children:["これについての説明として正しいものを、<例>の中から選べ。",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsx("li",{children:"Aは両面待ちでアガリした。"}),e.jsxs("li",{children:[e.jsx(t,{}),"が4の場合、Aのアガリは満貫である。"]}),e.jsx("li",{children:"Aは門前の状態でアガリした。"})]})]})},options:[,f,A,E,$,k],optionPerRow:3,answer:4},z=s.em`
  font-family: ${({theme:n})=>n.language==="ja"?v:S};
  font-weight: ${({theme:n})=>n.language==="ja"?"bold":"inherit"};
  text-decoration: ${({theme:n})=>n.language==="ko"?"underline":"inherit"};
  text-underline-offset: 0.2em;
`,mn={index:13,score:2,content:{ko:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["다음 역에 대한 설명 중 옳지 ",e.jsx(z,{children:"않은"})," 것은? (단, 역만 화료와 후리텐 상황은 고려하지 않는다.)"]})}),ja:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["次の役に関する記述のうち、",e.jsx(z,{children:"正しくないもの"}),"はどれか。次のうちから一つ選べ。（ただし、役満アガリおよびフリテンの状況は考慮しないものとする。）"]})})},options:[,{ko:"영상패가 아닌 패산의 가장 마지막 패로 쯔모 화료했다면 해저로월(海底撈月)이 추가된다.",ja:"嶺上牌ではなく、山の最後の牌でツモアガリした場合、「海底撈月」が加わる。"},{ko:"‘깡’ 선언 직후 가져온 영상패로 쯔모 화료했다면 영상개화(嶺上開花)가 추가된다.",ja:"「カン」を宣言した直後に引いた嶺上牌でツモアガリした場合、「嶺上開花」が加わる。"},{ko:"패산에 14장의 패가 남아 있을 때 론 화료했다면 하저로어(河底撈魚)가 추가된다.",ja:"王牌を含む山に14枚残っている時にロンアガリした場合、「河底撈魚」が加わる。"},{ko:"다른 작사의 가깡패가 나의 화료패였을 경우 깡을 무시하고 론 화료할 수 있으며, 이 경우 창깡(槍槓)이 추가된다.",ja:"他家の加槓をした牌が自分のアガリ牌であった場合、カンを無効としてロンアガリすることができ、その際「槍槓」が加わる。"},{ko:"자신이 처음 버린 패가 리치 선언패였다면 화료 시 더블 리치(ダブル立直)가 추가된다.",ja:"自分の第一巡に捨てた牌がリーチ宣言牌であった場合、アガリ時に「ダブルリーチ」が加わる。"}],optionPerRow:1,answer:5},gn={index:14,score:2,content:{ko:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["그림은 남2국 0본장에 멘젠 상태인 어떤 작사의 손패이다. 이 작사가 현재 손패에서 ‘3삭’으로 론 화료했을 때의 화료 점수로 ",e.jsx(z,{children:"불가능한"})," ","것은? (단, 이 작사의 손패에는 적도라가 존재하지 않는다.)"]}),e.jsx("figure",{children:e.jsx("img",{src:"/images/123m234456p4577s@2x.png",alt:"123m234456p4577s"})})]}),ja:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["図はは南2局0本場で門前の状態にある雀士の手牌である。この雀士が現在の手牌から「3索」でロンアガリした場合のアガリ点として、",e.jsx(z,{children:"不可能なもの"}),"はどれか。次のうちから一つ選べ。（ただし、この雀士の手牌には赤ドラは存在しないものとする。）"]}),e.jsx("figure",{children:e.jsx("img",{src:"/images/123m234456p4577s@2x.png",alt:"123m234456p4577s"})})]})},options:[,"2,900","3,900","5,800","7,700","9,600"],optionPerRow:5,answer:5},un=s.span`
  display: inline-flex;
  font-size: 90%;
  vertical-align: 0.6em;
  text-align: center;
  flex-direction: column;
  line-height: 1em;
  gap: 0.1em;
`,fn=s.span`
  display: block;
  padding: 0 0.2em;
`,bn=s.span`
  display: block;
  padding: 0 0.2em;
`,kn=s.span`
  display: block;
  border-top: 1px solid;
  margin: 0.1em 0;
`,je=({p:n,q:i})=>e.jsxs(un,{children:[e.jsx(fn,{children:n}),e.jsx(kn,{}),e.jsx(bn,{children:i})]}),yn={index:15,score:3,content:{ko:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"다음은 작사 A～D가 반장전으로 2회 대국한 결과 및 그에 따른 우마 점수를 순서 없이 나타낸 것이다. 순위에 따른 우마 증감은 1～4위 순으로 등차로 작아진다."}),e.jsxs(T,{children:["◦ 대국 1에서 C는 34,500점으로 종료하였다.",e.jsx("br",{}),"◦ 대국 2에서 A와 B는 같은 점수로 종료하였다.",e.jsx("br",{}),e.jsxs("table",{style:{marginTop:"1em"},children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"7em"}}),e.jsx("col",{style:{width:"4em"}}),e.jsx("col",{style:{width:"4em"}}),e.jsx("col",{style:{width:"4em"}}),e.jsx("col",{style:{width:"4em"}})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"작사"}),e.jsx("th",{children:"A"}),e.jsx("th",{children:"B"}),e.jsx("th",{children:"C"}),e.jsx("th",{children:"D"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"대국 1"}),e.jsx("td",{children:"−10.5"}),e.jsx("td",{children:e.jsx(t,{})}),e.jsx("td",{children:"39.5"}),e.jsx("td",{children:"−44.0"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"대국 2"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{children:"−38.0"}),e.jsx("td",{children:"−14.0"})]})]}),e.jsx("tfoot",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"우마 합 순위"}),e.jsx("td",{children:e.jsx(p,{})}),e.jsx("td",{}),e.jsx("td",{children:"3"}),e.jsx("td",{children:"4"})]})})]})]}),e.jsxs("p",{children:["이 자료에 대한 설명으로 옳은 것만을 <보기>에서 고른 것은? (단, 시작 점수와 반환 점수는 모두 25,000점이며, 대국에서의 동점은 석순제로 처리하였고, 우마 합의 동점은 없었다.) ",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsx("li",{children:"대국 1에서 D는 11,000점으로 종료하였다."}),e.jsxs("li",{children:[e.jsx(je,{p:e.jsx(t,{}),q:e.jsx(p,{})}),"은 15.0이다."]}),e.jsx("li",{children:"대국 2에서 들통이 일어났다."})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"次は雀士A〜Dが半荘戦で2回対局した結果およびそれに伴うポイント合を順位に関係なく示したものである。順位に応じたウマの増減は、1〜4位の順に等差で減少するものとする。"}),e.jsxs(T,{children:["◦ 第1戦でCは34,500点で終了した。",e.jsx("br",{}),"◦ 第2戦でAとBは同点で終了した。",e.jsx("br",{}),e.jsxs("table",{style:{marginTop:"1em"},children:[e.jsxs("colgroup",{children:[e.jsx("col",{style:{width:"7em"}}),e.jsx("col",{style:{width:"4em"}}),e.jsx("col",{style:{width:"4em"}}),e.jsx("col",{style:{width:"4em"}}),e.jsx("col",{style:{width:"4em"}})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"雀士"}),e.jsx("th",{children:"A"}),e.jsx("th",{children:"B"}),e.jsx("th",{children:"C"}),e.jsx("th",{children:"D"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"第1戦"}),e.jsx("td",{children:"−10.5"}),e.jsx("td",{children:e.jsx(t,{})}),e.jsx("td",{children:"39.5"}),e.jsx("td",{children:"−44.0"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"第2戦"}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{children:"−38.0"}),e.jsx("td",{children:"−14.0"})]})]}),e.jsx("tfoot",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"合計順位"}),e.jsx("td",{children:e.jsx(p,{})}),e.jsx("td",{}),e.jsx("td",{children:"3"}),e.jsx("td",{children:"4"})]})})]})]}),e.jsxs("p",{children:["これについての説明として正しいものを、<例>の中から選べ。（25,000点持ち、25,000点返し。対局での同点は席順で処理、ポイント合の同点はないものとする。）",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsx("li",{children:"第1戦でDは11,000点で終了した。"}),e.jsxs("li",{children:[e.jsx(je,{p:e.jsx(t,{}),q:e.jsx(p,{})}),"は15.0である。"]}),e.jsx("li",{children:"第2戦で飛びが起こった。"})]})]})},options:[,f,A,E,$,k],optionPerRow:3,answer:1},wn={index:16,score:2,content:{ko:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"다음은 1판역 A에 대한 자료이다."}),e.jsxs(F,{children:[e.jsx("li",{children:"A는 ‘론’으로 화료할 수 있으나, ‘치’를 한 상황에서는 A로 화료할 수 없다."}),e.jsx("li",{children:"A는 양면 대기로는 화료할 수 있으나, 변짱 대기로는 화료할 수 없다."})]}),e.jsx("p",{children:"이에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은?"}),e.jsxs(c,{children:[e.jsx("li",{children:"자패가 있을 경우에는 A로 화료할 수 없다."}),e.jsx("li",{children:"대기패가 한 종류일 경우에는 A로 화료할 수 없다."}),e.jsx("li",{children:"멘젠 상태가 아니면 A로 화료할 수 없다."})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"次は1翻役である「A」に関する資料である。"}),e.jsxs(F,{children:[e.jsx("li",{children:"「A」は「ロン」でアガリできるが、「チー」を行った場合はAでアガリができない。"}),e.jsx("li",{children:"「A」は両面待ちでアガリできるが、辺張待ちではアガリができない。"})]}),e.jsx("p",{children:"これについての説明として正しいものを、<例>の中から選べ。"}),e.jsxs(c,{children:[e.jsx("li",{children:"字牌がある場合、「A」でアガリができない。"}),e.jsx("li",{children:"待ち牌が1種類の場合、「A」でアガリができない。"}),e.jsx("li",{children:"門前でなければ、「A」でアガリができない。"})]})]})},options:[,f,C,E,_,k],optionPerRow:3,answer:2},vn={index:17,score:3,content:{ko:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"그림은 동1국 0본장에 서가(西家)가 친(親)을 론 화료한 상황을 나타낸 것이다. 이 대국 중에 ‘리치’를 선언한 작사는 없었으며, 이 작사의 화료로 들통이 발생하여 대국이 종료되었다. ⓐ는 ‘남(南)’, ‘백(白)’ ‘발(發)’, ‘중(中)’을 제외한 패 중 하나이다."}),e.jsx("figure",{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 5207 1002",children:[e.jsx("image",{href:"/images/z555777666z22_aa_z2@2x.png",width:"5207",height:"602"}),e.jsx("text",{x:"4305",y:"380",fontSize:"200",textAnchor:"middle",fill:"inherit",strokeWidth:"10",children:"ⓐ"}),e.jsx("text",{x:"4625",y:"380",fontSize:"200",textAnchor:"middle",fill:"inherit",strokeWidth:"10",children:"ⓐ"}),e.jsx("text",{x:"5045",y:"880",fontSize:"200",textAnchor:"middle",fill:"inherit",strokeWidth:"10",children:"론"})]})}),e.jsxs("p",{children:["이 그림에 대한 설명으로 옳은 것만을 <보기>에서 고른 것은? (단, 그림에서 ‘펑’은 왼쪽에서 오른쪽 순서로 일어났으며, 동점은 석순제로 처리한다.) ",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsx("li",{children:"ⓐ로 ‘9통’이 가능하다."}),e.jsx("li",{children:"북가(北家)는 2위로 종료하였다."}),e.jsx("li",{children:"남가(南家)와 북가(北家)의 순위 차이는 1이다."})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["下の図は東1局0本場において、南家が親からロンアガリした状況を示したものである。この対局中、リーチを宣言した雀士はいなかった。このアガリで飛びが発生し、対局は終了した。"," ",e.jsx(t,{}),"は「南」、「白」、「發」、「中」を除く牌のいずれかである。"]}),e.jsx("figure",{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 5207 1002",children:[e.jsx("image",{href:"/images/z555777666z22_aa_z2@2x.png",width:"5207",height:"602"}),e.jsx("text",{x:"4305",y:"380",fontSize:"200",textAnchor:"middle",fill:"inherit",fontWeight:"bold",fontFamily:v.join(", "),children:W[0]}),e.jsx("text",{x:"4625",y:"380",fontSize:"200",textAnchor:"middle",fill:"inherit",fontWeight:"bold",fontFamily:v.join(", "),children:W[0]}),e.jsx("text",{x:"5045",y:"880",fontSize:"200",textAnchor:"middle",fill:"inherit",children:"ロン"})]})}),e.jsxs("p",{children:["この図に関する説明として正しいものを、<例>の中から選べ。（ただし、図中の「ポン」は左から右の順で発生し、同点は席順で処理するものとする。）",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"には「九筒」が含まれる可能性がある。"]}),e.jsx("li",{children:"北家は2位で終了した。"}),e.jsx("li",{children:"南家と北家の順位差は1である。"})]})]})},options:[,f,A,$,_,k],optionPerRow:3,answer:4},An={index:18,score:3,content:{ko:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"다음은 서로 다른 종류의 패 A～C에 대한 자료이다."}),e.jsxs(F,{children:[e.jsx("li",{children:"A는 B의 스지이다."}),e.jsx("li",{children:"A와 C를 안커로 사용했을 때의 부수는 모두 8부이다."}),e.jsx("li",{children:"남가가 ‘깡’을 발성한 이후 서가가 B와 C를 모두 ‘펑’ 했을 때 서가가 화료 가능한 역만은 2종류이다."})]}),e.jsxs("p",{children:["이에 대한 설명으로 옳은 것만을 <보기>에서 있는 대로 고른 것은? (단, 헤아림 역만은 고려하지 않는다.)",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsx("li",{children:"A로 가능한 패는 3종류이다."}),e.jsx("li",{children:"B로 가능한 패는 2종류이다."}),e.jsx("li",{children:"C로 가능한 패는 1종류이다."})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"次は異なる牌A〜Cに関する記述である。"}),e.jsxs(F,{children:[e.jsx("li",{children:"AはBのスジである。"}),e.jsx("li",{children:"AとCを暗刻として使用した場合の符はそれぞれ8符となる。"}),e.jsx("li",{children:"南家が「カン」を発声した後、西家がBとCをそれぞれ「ポン」した場合、西家がアガリ可能な役は2種類である。"})]}),e.jsxs("p",{children:["これについての説明として正しいものを、<例>の中から選べ。（ただし、数え役満は考慮しないものとする。）",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsx("li",{children:"Aで可能な牌は3種類である。"}),e.jsx("li",{children:"Bで可能な牌は2種類である。"}),e.jsx("li",{children:"Cで可能な牌は1種類である。"})]})]})},options:[,f,A,C,_,k],optionPerRow:3,answer:4},K=s.b`
  font-weight: bold;
`,Rn={index:19,score:3,content:{ko:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["다음은 개척단 훈련소 디스코드의 대화 내용 중 일부이다. ",e.jsx(t,{}),"은 ‘쯔모’와 ‘론’ 중 하나이다."]}),e.jsxs(T,{children:[e.jsx(K,{children:"HN:"})," 이게 말이 돼? 오늘 작혼에서 ‘역만 준비’만 두 번 봤는데 한 번도 역만 화료를 못 했어.",e.jsx("br",{}),e.jsx(K,{children:"MAXFLOW:"})," 그래도 첫 번째 ‘역만 준비’는 ",e.jsx(t,{})," 화료했잖아.",e.jsx("br",{}),e.jsx(K,{children:"CCW:"})," 그 상황에서 1판 ",e.jsx(p,{}),"부로 화료한 건 조금 안타깝네.",e.jsx("br",{}),e.jsx(K,{children:"shiftpsh:"})," 두 번째 ‘역만 준비’ 상황에서는 샤보 대기로도, 양면 대기로도 화료할 수 있었겠구나."]}),e.jsxs("p",{children:["이 자료에 대한 설명으로 옳은 것만을 <보기>에서 고른 것은?",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"으로 ‘론’만이 가능하다."]}),e.jsxs("li",{children:[e.jsx(p,{}),"의 값으로 30이 가능하다."]}),e.jsx("li",{children:"두 번째 ‘역만 준비’ 상황에서 자패로 화료할 경우 역만 이상의 화료만이 가능하다."})]})]}),ja:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["次は開拓民訓練キャンプのDiscordの会話の一部である。",e.jsx(t,{}),"は「ツモ」または「ロン」のいずれかである。"]}),e.jsxs(T,{children:[e.jsx(O,{children:"HN"}),"「これってありえない？今日の役満チャンス、2回あったけど一度も役満でアガリできなかったよ。」",e.jsx("br",{}),e.jsx(O,{children:"MAXFLOW"}),"「でも、最初の役満チャンスは",e.jsx(t,{}),"でアガリしたじゃないか。」",e.jsx("br",{}),e.jsx(O,{children:"CCW"}),"「あの状況で1翻・",e.jsx(p,{}),"符でアガリしたのはちょっと残念だね。」",e.jsx("br",{}),e.jsx(O,{children:"shiftpsh"}),"「2回目の役満チャンスでは、シャボ待ちでも両面待ちでもアガリできたはずだ。」"]}),e.jsxs("p",{children:["これについての説明として正しいものを、<例>の中から選べ。",e.jsx(h,{score:3})]}),e.jsxs(c,{children:[e.jsxs("li",{children:[e.jsx(t,{}),"には「ロン」のみが可能である。"]}),e.jsxs("li",{children:[e.jsx(p,{}),"の値として30は可能である。"]}),e.jsx("li",{children:"2回目の役満チャンスの状況で字牌でアガリした場合、役満以上のアガリのみが可能である。"})]})]})},options:[,f,A,$,_,k],optionPerRow:3,answer:2},Pn={index:20,score:3,content:{ko:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["다음 중 동1국 0본장이 종료된 후 일어날 수 ",e.jsx(z,{children:"없는"})," 점수 교환은? (단, 대국 중에 ‘리치’를 선언한 작사는 없었다.)",e.jsx(h,{score:3})]})}),ja:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["次のうち、東1局0本場が終了した後に",e.jsx(z,{children:"発生し得ない"}),"点数のやり取りはどれか。次のうちから一つ選べ。（ただし、対局中にリーチを宣言した雀士はいなかったものとする。）",e.jsx(h,{score:3})]})})},options:[,{ko:"서→동 24,000; 북→동 72,000",ja:"南→東 24,000; 北→東 72,000"},{ko:"동→서 1,500; 남→서 800; 북→서 800",ja:"東→南 1,500; 東→西 800; 東→北 800"},{ko:"북→동 288,000; 북→남 4,500",ja:"北→東 288,000; 北→南 4,500"},{ko:"서→남 7,100",ja:"西→南 7,100"},{ko:"남→동 240,000; 남→서 96,000; 남→북 96,000",ja:"南→東 240,000; 南→西 96,000; 南→北 96,000"}],optionPerRow:1,answer:3},w=[en,nn,sn,ln,on,an,dn,cn,xn,hn,jn,pn,mn,gn,yn,wn,vn,An,Rn,Pn],Fn=s.p`
  border: 1px solid;
  padding: 1em;
  margin: 1em 0;
  text-indent: 0 !important;
`,Sn=s.span`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
  &:last-of-type {
    border-bottom: none;
  }
`,Cn=s.span`
  flex: 1;
  min-width: 0;
`,On=s.a`
  flex: 1;
  min-width: 0;
  color: inherit;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`,En=s.span`
  flex: 2;
  min-width: 0;
  text-align: right;
`,$n=[{name:{ko:"혼노두가될래요",ja:"混老頭になりたい"},role:{ko:"기획·출제·프로그래밍",ja:"企画・出題・プログラミング"},twitter:"honroutou_nya"},{name:{ko:"시프트",ja:"シフト"},role:{ko:"기획·출제·디자인·프로그래밍",ja:"企画・出題・デザイン・プログラミング"},twitter:"shiftpsh"},{name:{ko:"CCW",ja:"CCW"},role:{ko:"출제·검토",ja:"出題・検討"},twitter:"cu_2x_event"},{name:{ko:"MAXFLOW",ja:"MAXFLOW"},role:{ko:"출제·검토",ja:"出題・検討"}},{name:{ko:"비소라",ja:"VISORA"},role:{ko:"일본어역",ja:"日本語訳"}}],_n=()=>{const{language:n}=b();return e.jsx(Fn,{children:$n.map(({name:i,role:a,twitter:r})=>e.jsxs(Sn,{children:[r?e.jsxs(On,{href:`https://x.com/${r}`,target:"_blank",rel:"noopener noreferrer",children:[n==="ja"?i.ja:i.ko," @",r]}):e.jsx(Cn,{children:n==="ja"?i.ja:i.ko}),e.jsx(En,{children:n==="ja"?a.ja:a.ko})]},i.ja))})},pe="①②③④⑤⑥⑦⑧⑨⑩".split(""),me=s.div`
  font-family: ${({theme:n})=>(n.language==="ja"?v:ne).join(", ")};
  border: 1px solid black;
  padding: 1em;
`,zn=s.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 128px;
`,ge=s.button`
  font-family: ${({theme:n})=>(n.language==="ja"?D:S).join(", ")};
  font-size: 1.4em;
  letter-spacing: 0.5em;
  font-weight: bold;
  border: 1px solid black;
  padding: 16px;
  border-radius: 0;
  text-align: center;
  cursor: pointer;
  background-color: #e8e8e8;
  :not(:disabled):hover {
    background-color: #d0d0d0;
  }
`,Bn=s.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: ${({theme:n})=>(n.language==="ja"?D:S).join(", ")};
  border: 2px solid black;
  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: center;
  }
  tr:nth-child(5n) td {
    border-bottom: 2px solid black;
  }
  th {
    font-weight: bold;
    border-bottom: 2px solid black;
  }
`,Ln=s.a`
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,Mn=s.div`
  font-family: ${({theme:n})=>(n.language==="ja"?Y:ie).join(", ")};
  font-size: 1.2em;
  text-align: center;
  line-height: 1;
`,Nn=s.div`
  font-family: ${({theme:n})=>(n.language==="ja"?D:S).join(", ")};
  font-size: 1.2em;
  text-align: center;
  line-height: 1;
`,Tn=s.span`
  font-size: 2.4em;
  font-weight: bold;
  line-height: 1;
`,In=({onClickSubmit:n,answer:i,submitted:a})=>{const{language:r}=b(),o=u.useMemo(()=>i.reduce((l,d,j)=>d===w[j].answer-1?l+w[j].score:l,0),[i]),x=()=>{const l=i.map((j,m)=>j===w[m].answer-1?"✅":"❌").join(""),d=[r==="ko"?"2026학년도 개척단 훈련소 마작능력평가":"2026年度開拓民訓練キャンプ麻雀能力評価","",r==="ko"?`나의 점수: ${o}/50점`:`私の得点: ${o}/50点`,l.slice(0,10),l.slice(10,20),"",`https://riichi-ksat.colonizer.training/?lang=${r}`].join(`
`);navigator.clipboard.writeText(d).then(()=>{alert(r==="ko"?"점수 공유 텍스트가 클립보드에 복사되었습니다. X 등에 붙여넣어서 공유해 보세요!":"得点共有テキストがクリップボードにコピーされました。Xなどに貼り付けて共有してみてください！")})};return e.jsxs(zn,{children:[r==="ko"?e.jsxs(me,{children:["* 확인 사항",e.jsx("br",{}),"◦ 답안지의 해당란에 필요한 내용을 정확히 기입(표기)했는지 확인하시오."]}):e.jsxs(me,{children:["* 注意事項",e.jsx("br",{}),"◦ 解答用紙の該当欄に必要な内容を正確に記入（表記）したか確認しなさい。"]}),e.jsx(ge,{onClick:n,disabled:a,children:a?r==="ko"?"제출 완료":"提出完了":r==="ko"?"제출하기":"提出する"}),a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:64}}),e.jsx(Mn,{children:r==="ko"?"당신의 점수는":"あなたの得点は"}),e.jsxs(Nn,{children:[e.jsx(Tn,{children:o}),"/50",r==="ko"?"점":"点"]}),e.jsx(ge,{onClick:x,children:r==="ko"?"공유하기":"共有する"}),e.jsxs(Bn,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:r==="ko"?"문항 번호":"問題番号"}),e.jsx("th",{children:r==="ko"?"정답":"正答"}),e.jsx("th",{children:r==="ko"?"내 답안":"あなたの解答"}),e.jsx("th",{children:r==="ko"?"배점":"配点"})]})}),e.jsx("tbody",{children:i.map((l,d)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(Ln,{href:`#problem-${d+1}`,children:d+1})}),e.jsx("td",{style:{color:l===w[d].answer-1?"unset":"red",fontWeight:l===w[d].answer-1?"normal":"bold"},children:pe[w[d].answer-1]}),e.jsx("td",{style:{color:l===w[d].answer-1?"unset":"red",fontWeight:l===w[d].answer-1?"normal":"bold"},children:pe[l]}),e.jsx("td",{children:w[d].score})]},d))})]}),e.jsx(_n,{})]})]})},Ae=s.div`
  font-family: ${({theme:n})=>(n.language==="ja"?D:S).join(", ")};
  text-align: justify;
  font-feature-settings: ${({theme:n})=>n.language==="ja"?'"palt", "jp04", "jp83"':"inherit"};
`,Wn=s.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 32px);
  padding: 16px;
  gap: 32px;
  justify-content: center;
`,ue=s.span`
  display: block;
  font-family: ${({theme:n})=>(n.language==="ja"?Y:ie).join(", ")};
  font-size: 1.4em;
  text-align: center;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,Dn=s.h1`
  font-family: ${({theme:n})=>(n.language==="ja"?Y:S).join(", ")};
  font-size: 2.5em;
  text-align: center;
  font-weight: ${({theme:n})=>n.language==="ja"?400:700};
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`,Hn=s.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`,Xn=s.span`
  font-size: 1.4em;
  font-family: ${({theme:n})=>(n.language==="ja"?D:S).join(", ")};
  font-weight: bold;
  text-align: center;
  border: 1px solid black;
  padding: 0 16px;
  border-radius: 1000px;
  word-break: keep-all;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`,Un=s.ul`
  font-family: ${({theme:n})=>(n.language==="ja"?v:ne).join(", ")};
  border: 1px solid black;
  padding: 2em 2em 2em 2.4em;
  list-style-type: '○ ';
  & > li {
    margin: 1em 0;
  }
  @media (max-width: 768px) {
    padding: 1em 1em 1em 2.4em;
  }
`,qn=s.span`
  font-family: ${({theme:n})=>(n.language==="ja"?v:ne).join(", ")};
  border: 1px solid black;
  padding: 1em;
  text-align: center;
  background-color: #e8e8e8;
`,fe=s.a`
  color: inherit;

  @media (max-width: 768px) {
    font-size: 80%;
  }
`,Vn=()=>{const{language:n}=b();return e.jsx(Ae,{children:e.jsxs(Wn,{id:"information",children:[e.jsxs(Hn,{children:[e.jsx(Xn,{children:n==="ja"?"第1時限":"제 1교시"}),e.jsx("div",{style:{flexGrow:1}}),e.jsx(fe,{href:"/?lang=ko",children:"한국어판"}),e.jsx(fe,{href:"/?lang=ja",children:"日本語版"})]}),e.jsx(ue,{children:n==="ja"?"2026年度開拓民訓練キャンプ麻雀能力評価試験問題":"2026학년도 개척단 훈련소 마작능력평가 문제지"}),e.jsx(Dn,{children:n==="ja"?"リーチ麻雀科目":"리치 마작 영역"}),e.jsxs(Un,{children:[e.jsx("li",{children:n==="ko"?e.jsx(e.Fragment,{children:"문항에 따라 배점이 다릅니다. 3점 문항에는 점수가 표시되어 있습니다. 점수 표시가 없는 문항은 모두 2점입니다."}):e.jsx(e.Fragment,{children:"問題によって配点が異なります。3点問題には点数が表示されています。点数表示のない問題はすべて2点です。"})}),e.jsx("li",{children:n==="ko"?e.jsxs(e.Fragment,{children:["별도로 명시되어 있지 않은 경우,"," ",e.jsx(z,{style:{fontFamily:"inherit"},children:"<작혼: 리치 마작>의 4인 등급전에서의 규칙을 적용하여 문제를 해결"}),"하시오."]}):e.jsxs(e.Fragment,{children:["特に明示されていない場合、",e.jsx(z,{children:"『雀魂』の4人段位戦でのルールを適用して問題を解決"}),"しなさい。"]})})]}),e.jsx(qn,{children:n==="ko"?"※ 시험을 시작하려면 아래로 스크롤하시오.":"※ 試験を開始するには下にスクロールしなさい。"}),e.jsx(ue,{children:n==="ja"?"開拓民訓練キャンプ":"개척단 훈련소"})]})})},L="#1e67a2",Gn="#eb028c",Kn=s.div`
  width: 240px;
  max-width: 100%;
  border: 2px solid ${L};
  border-radius: 16px;
  margin: 32px auto;
  font-family: ${({theme:n})=>(n.language==="ja"?Y:ie).join(", ")};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  user-select: none;
`,be=s.div`
  display: flex;
`,te=s.a`
  flex: 1;
  display: block;
  text-align: center;
  padding: 8px 0;
  border-right: 1px solid ${L};
  color: ${L};
  background-color: #dde0ef;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 768px) {
    border-right: none;
  }
`,Jn=s.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    display: none;
  }
`,Yn=s(te)`
  font-weight: bold;
  border-bottom: 1px solid ${L};
`,Qn=s(te)`
  flex: 4;
  font-weight: bold;
  border-right: none;
  border-bottom: 1px solid ${L};
  cursor: default;
  @media (max-width: 768px) {
    display: none;
  }
`,ke=s.span`
  letter-spacing: 2em;
`,Zn=s.div`
  color: ${Gn};
  font-size: 80%;
  line-height: 1.5em;
  width: 1em;
  text-align: center;
  border: 1px solid;
  border-radius: 1.5em;
  ${({selected:n})=>n?`
    background-color: black;
    color: white;
    border-color: black;
    font-weight: bold;
  `:""}
  cursor: pointer;
`,ei=({answers:n,onAnswerChange:i})=>{const{language:a}=b();return e.jsxs(Kn,{children:[e.jsxs(be,{children:[e.jsx(Yn,{href:"#information",children:a==="ko"?"문번":"問題"}),e.jsx(Qn,{children:a==="ko"?e.jsxs(e.Fragment,{children:[e.jsx(ke,{children:"답"}),"란"]}):e.jsxs(e.Fragment,{children:[e.jsx(ke,{children:"解"}),"答"]})})]}),n.map((r,o)=>e.jsxs(be,{children:[e.jsx(te,{href:`#problem-${o+1}`,style:o%5===4?{fontWeight:"bold",borderBottom:o===19?"unset":`1px solid ${L}`}:{fontSize:"90%"},tabIndex:0,children:o+1}),e.jsx(Jn,{style:o%5===4?{borderBottom:o===19?"unset":`1px solid ${L}`}:void 0,children:[1,2,3,4,5].map(x=>e.jsx(Zn,{selected:r+1===x,onClick:()=>i(o+1,x-1),tabIndex:0,children:r+1===x?e.jsx(e.Fragment,{children:" "}):x},x))})]},o))]})};/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var ni={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=(n,i,a,r)=>{const o=u.forwardRef(({color:x="currentColor",size:l=24,stroke:d=2,title:j,className:m,children:R,...P},H)=>u.createElement("svg",{ref:H,...ni[n],width:l,height:l,className:["tabler-icon",`tabler-icon-${i}`,m].join(" "),strokeWidth:d,stroke:x,...P},[j&&u.createElement("title",{key:"svg-title"},j),...r.map(([Z,M])=>u.createElement(Z,M)),...Array.isArray(R)?R:[R]]));return o.displayName=`${a}`,o};/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]],ri=ii("outline","check","Check",si),ti=s.span`
  display: block;
  text-indent: -1em;
  padding-left: 1em;
  user-select: none;
  cursor: pointer;
  text-decoration: ${({active:n})=>n?"underline":"none"};
  text-underline-offset: 0.4em;
  text-decoration-thickness: 0.15em;
  &:hover {
    text-decoration: ${({active:n})=>n?"underline":"dashed underline"};
    text-underline-offset: ${({active:n})=>"0.4em"};
    text-decoration-thickness: ${({active:n})=>n?"0.15em":"0.1em"};
  }
`,li=s.span`
  display: inline;
  position: relative;
  width: 1em;
`,oi=s.span`
  position: absolute;
  top: -0.5em;
  left: 0.3em;
  color: red;
  font-size: 2em;
`,ai="①②③④⑤⑥⑦⑧⑨⑩".split(""),di=({index:n,children:i,active:a,onClick:r})=>e.jsxs(ti,{onClick:r,active:a,tabIndex:0,children:[e.jsxs(li,{children:[ai[n],a&&e.jsx(oi,{children:e.jsx(ri,{size:"1em",strokeWidth:1.5,color:"red"})})]})," ",i]}),ci=s.h2`
  display: inline;
  font-size: 1.2em;
  font-weight: bold;
`,xi=s.h2`
  display: inline;
  font-family: ${v.join(", ")};
  font-weight: bold;
`,hi=({index:n})=>{const{language:i}=b();return i==="ko"?e.jsxs(ci,{children:[n,". "]}):e.jsxs(xi,{children:["問 ",n," "]})},ji=s.div`
  margin: 1em 0;
  display: grid;
`,pi=s.div`
  & > p {
    margin: 1em 0;
    text-indent: 1em;
  }
  & > p:first-of-type {
    display: inline;
    margin-top: 0;
    text-indent: 0;
  }
  & img,
  & svg {
    filter: grayscale(1);
  }
  & > figure {
    margin: 1em 0;
    text-align: center;
    & img,
    & svg {
      max-width: 90%;
      height: auto;
    }
  }
  & table {
    margin: 0 auto;
    border-collapse: collapse;
    & tr {
      & > th,
      & > td {
        border: 1px solid;
        padding: 0.2em 0.5em;
        text-align: center;
      }
    }
  }
`,mi=({problem:n,lang:i,answer:a,onAnswerChange:r})=>{const{lang:o}=Be(),x=e.jsxs(pi,{id:`problem-${n.index}`,children:[e.jsx(hi,{index:n.index}),n.content[i||o],e.jsx(ji,{style:{gridTemplateColumns:`repeat(${n.optionPerRow}, 1fr)`},children:n.options.filter(l=>l).map((l,d)=>e.jsx(di,{index:d,active:a===d,onClick:()=>r(d),children:l&&typeof l=="object"&&"ko"in l?l[i||o]:l},d))})]});return i?e.jsx(Le,{theme:{language:i},children:e.jsx(Ae,{children:x})}):x};Me.initialize("G-Q6XMB86VEX");const gi=s.div`
  width: 100%;
  height: 100vh;
  display: flex;
`,ui=s.div`
  flex: 3;
  min-width: 0;
  height: 100%;
  overflow: auto;
  background-color: #f9f9f9;
  scroll-behavior: smooth;
  scroll-padding: 16px 0;
`,fi=s.div`
  flex: 0 0 280px;
  min-width: 0;
  height: 100%;
  overflow: auto;
  background-color: #f8f8e0;
  padding: 0 8px;

  @media (max-width: 1120px) {
    flex: 1 0 0;
  }
  @media (max-width: 768px) {
    flex: 0 0 64px;
  }
`,bi=s.div`
  max-width: 800px;
  padding: 0 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;function yi(){const{language:n}=b(),[i,a]=u.useState(!1),[r,o]=u.useState(new Array(w.length).fill(-1));u.useEffect(()=>{document.documentElement.lang=n,document.title=n==="ko"?"리치 마작 영역":"リーチ麻雀領域"},[n]);const x=()=>{if(i)return;const l=r.map((j,m)=>j===-1?m+1:null).filter(j=>j!==null);l.length>0&&!window.confirm(n==="ko"?`다음 문제의 답안이 작성되지 않았습니다.
${l.join(", ")}

계속하시겠습니까?`:`次の問題の解答が記入されていません。
${l.join(", ")}

続行しますか？`)||!window.confirm(n==="ko"?"제출한 답안은 수정할 수 없습니다. 제출하시겠습니까?":"提出した解答は修正できません。提出しますか？")||a(!0)};return e.jsxs(gi,{children:[e.jsx(fi,{children:e.jsx(ei,{answers:r,onAnswerChange:(l,d)=>{i||o(j=>{const m=[...j];return m[l-1]=d,m})}})}),e.jsx(ui,{children:e.jsxs(bi,{children:[e.jsx(Vn,{}),w.map(l=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{borderBottom:"1px solid #e0e0e0"}}),e.jsx(mi,{problem:l,answer:r[l.index-1],onAnswerChange:d=>{i||o(j=>{const m=[...j];return m[l.index-1]=d,m})}})]},l.index)),e.jsx("div",{style:{borderBottom:"1px solid #e0e0e0"}}),e.jsx(In,{onClickSubmit:x,answer:r,submitted:i})]})})]})}export{yi as component};
