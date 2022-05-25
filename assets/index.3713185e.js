var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var i in r||(r={}))n.call(r,i)&&l(e,i,r[i]);if(t)for(var i of t(r))a.call(r,i)&&l(e,i,r[i]);return e},i=(e,l)=>{var r={};for(var i in e)n.call(e,i)&&l.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&t)for(var i of t(e))l.indexOf(i)<0&&a.call(e,i)&&(r[i]=e[i]);return r};import{q as o,I as c,B as s,a as m,L as d,r as p,R as u,F as g,b as x,w as f,$ as h,P as b,H as E,c as w,d as y,G as v,e as k,f as _,u as T,g as I,h as F,i as z,j as S,k as j,l as R,S as B,m as C,n as q,o as $}from"./vendor.0256225f.js";const P=o.nav`
    background: #000f1e;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`,M=o.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 960px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`,A=o(d)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`,O=o(c)`
    margin-right: -0.25rem;
`,N=o(s)`
    margin-left: 0.5rem;
    margin-right: -0.75rem;
`,L=o(m)`
    margin-right: 1rem;
`,D=o.div`
    display: none;

    @media screen and (max-width: 960px) {
        color: white;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`,H=o.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: ${({openMobileMenu:e})=>e?"flex":"none"};
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({openMobileMenu:e})=>e?0:"100%"};
        background: #000f1e;
    }
`,W=o.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 4px solid #4b59f7;
        transition: all 0.3s ease;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`,G=o(d)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }
    }
`,U=()=>{const[e,t]=p.exports.useState(!1),n=()=>t(!e);return u.createElement(u.Fragment,null,u.createElement(P,null,u.createElement(M,null,u.createElement(A,{to:"/home"},u.createElement(O,null),"Soroush",u.createElement(N,null),u.createElement(L,null)),u.createElement(D,{onClick:n},e?u.createElement(g,null):u.createElement(x,null)),u.createElement(H,{onClick:n,openMobileMenu:e},(e=>{let t=0;return e.map((e=>u.createElement(W,{key:t++},u.createElement(G,{to:`/${e.toLowerCase().replace(" ","-")}`},e))))})(["Home","Blog","Projects","Resume","Contact"])))))};var J=f((function({history:e}){return p.exports.useEffect((()=>{const t=e.listen((()=>{window.scrollTo(0,0)}));return()=>{t()}}),[]),null}));const K=h`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "DejaVu Sans Mono", monospace;
}

body {
    background: #222c47;
 }
`,V=o.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 15px;
    background: ${({disabled:e})=>e?"#c9c9c9":"#4b59f7"};
    white-space: nowrap;
    padding: 12px 64px;
    color: ${({disabled:e})=>e?"#474747":"#fff"};
    font-size: 20px;
    cursor: ${({disabled:e})=>e?"":"pointer"};

    &:hover {
        transition: all 0.4s east-out;
        background: ${({disabled:e})=>e?"#c9c9c9":"#0467fb"};
    }

    @media screen and (max-width: 768px) {
        height: 4rem;
    }
`,Q=({url:e,text:t,type:n,disabled:a,sameTab:l})=>{const r=()=>{l?window.open(e,"_self"):window.open(e)};return l&&"submit"!==n?u.createElement(d,{to:e,style:{textDecoration:"none"}},u.createElement(V,{type:"button"},t)):u.createElement(V,{type:n,onClick:e?r:void 0,disabled:a},t)};Q.propTypes={text:b.string,type:b.string,url:b.string,disabled:b.bool,sameTab:b.bool},Q.defaultProps={type:"button",sameTab:!1};const X=o.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 960px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`,Y=o.div`
    color: #fff;
    padding: ${({verticalPadding:e})=>e}px 0px;
    background: ${({darkTheme:e})=>e?"#000f1e":"#fff"};
`,Z=o.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    text-align: ${({alignment:e})=>e};
    justify-content: ${({alignment:e})=>"center"===e?"center":""};
    flex-direction: ${({alignment:e})=>{switch(e){case"left":return"row";case"right":return"row-reverse";case"center":return""}}};

    @media screen and (max-width: 768px) {
        text-align: ${({alignment:e})=>"center"===e?"center":"left"};
    }
`,ee=o.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`,te=o.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`,ne=o.div`
    margin-bottom: 8px;
    font-size: ${({largeFont:e})=>e?"60px":"48px"};
    color: ${({darkTheme:e})=>e?"#F7F8FA":"#1C2237"};
`,ae=o.div`
    color: ${({darkTheme:e})=>e?"#A9B3C1":"#1C2237"};
    font-size: ${({largeFont:e})=>e?"22px":"18px"};
    letter-spacing: 1.4px;
    margin-bottom: 24px;
`,le=o.div`
    margin-bottom: 35px;
    font-size: 18px;
    color: ${({darkTheme:e})=>e?"#A9B3C1":"#1C2237"};
`,re=o.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`,ie=({darkTheme:e,alignment:t,header:n,subheader:a,description:l,image:r,alt:i,url:o,buttonText:c,sameTab:s,verticalPadding:m})=>u.createElement(u.Fragment,null,u.createElement(Y,{darkTheme:e,verticalPadding:m},u.createElement(X,null,u.createElement(Z,{alignment:t},u.createElement(ee,null,u.createElement(te,null,u.createElement(ne,{darkTheme:e,largeFont:!r,tabIndex:n?0:-1},n),u.createElement(ae,{darkTheme:e,largeFont:!r,tabIndex:a?0:-1},a),u.createElement(le,{darkTheme:e,largeFont:!r,tabIndex:l?0:-1},l),o&&u.createElement(Q,{url:o,text:c,sameTab:s,tabIndex:0}))),r&&u.createElement(ee,null,u.createElement(re,{src:r,alt:i,tabIndex:0}))))));ie.propTypes={darkTheme:b.bool,alignment:b.string,header:b.string,subheader:b.string,description:b.string,image:b.string,alt:b.string,url:b.string,buttonText:b.string,sameTab:b.bool,verticalPadding:b.number},ie.defaultProps={verticalPadding:120,sameTab:!1};const oe={darkTheme:!0,alignment:"center",header:"Hello",subheader:"Welcome to my website"},ce={darkTheme:!1,alignment:"left",header:"Who Am I?",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",image:"/assets/coding.7d6d00f7.svg",alt:"Me at my desk writing some code."},se={darkTheme:!0,alignment:"right",header:"What do I do?",description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",image:"/assets/walk.548cbed2.svg",alt:"Me taking a walk outside."},me={darkTheme:!1,alignment:"center",subheader:"Feel free to check out the other menu items above",description:"If you are hiring, feel free to view and download my resume below",verticalPadding:60,url:"/resume",buttonText:"Resume",sameTab:!0},de=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Homepage")),u.createElement(ie,r({},oe)),u.createElement(ie,r({},ce)),u.createElement(ie,r({},se)),u.createElement(ie,r({},me))),pe=o.div`
    border: 10px solid #000f1e;
    margin: 40px;
    text-align: center;
    width: 300px;
    overflow: hidden;
    background: #000f1e;
    border-radius: 15px;

    @media screen and (max-width: 1440px) {
        margin: 20px;
    }

    @media screen and (max-width: 768px) {
        margin: 0px;
        margin-bottom: 20px;
    }

    &:hover {
        background: #000f28;
        border-color: #000f28;
        transition: all 0.4s ease;
    }
`,ue=o.img`
    width: 100%;
`,ge=o.div`
    margin: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 20px;
    width: 100%;
    height: 100%;
    color: white;
`,xe=o.div`
    margin: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 14px;
    width: 100%;
    height: 100%;
    color: white;
`,fe=({image:e,title:t,description:n,url:a})=>u.createElement(u.Fragment,null,u.createElement(pe,null,u.createElement(d,{to:a,style:{textDecoration:"none"}},u.createElement(ue,{src:e}),u.createElement(ge,null,t),u.createElement(xe,null,n))));fe.propTypes={image:b.string,title:b.string,description:b.string,url:b.string};const he=o.table`
    margin: 2rem auto;
`,be=({blogs:e})=>{let t=3;window.screen.width<=1024&&(t=2),window.screen.width<=768&&(t=1);let n=Math.ceil(e.length/t);return u.createElement(he,null,[...Array(n).keys()].map((()=>u.createElement("tr",null,[...Array(t).keys()].map((()=>{if(0!==e.length){let t=e.shift();return u.createElement("td",null,u.createElement(fe,r({},t)))}}))))))};be.propTypes={blogs:b.array},be.defaultProps={blogs:[]};const Ee=o.input`
    margin-top: 40px;
    width: 50%;
    height: 2.5rem;
    padding-left: 10px;
    padding-right: 10px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border: none;
    max-width: 500px;

    @media screen and (max-width: 960px) {
        width: 80%;
        margin-top: 20px;
    }
`,we=o.button`
    border: none;
    height: 2.5rem;
    width: 2.5rem;
    font-size: 20px;
    background-color: #00ff84;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    cursor: pointer;
    transform: translate(0px, 3px);
`,ye=o.div`
    text-align: center;
`,ve=({allItems:e,setResults:t})=>{const n=new w([...e],{keys:[{name:"title",weight:.4},{name:"tags",weight:.4},{name:"description",weight:.2}]});return u.createElement(u.Fragment,null,u.createElement(ye,null,u.createElement(Ee,{type:"text",placeholder:"Search",id:"searchInput",autoComplete:"off",onKeyPress:e=>{"Enter"===e.key&&(document.getElementById("searchButton").click(),document.getElementById("searchInput").blur())}}),u.createElement(we,{type:"button",id:"searchButton",onClick:()=>{t(n.search(document.getElementById("searchInput").value).map((e=>e.item)))}},u.createElement(y,null))))};ve.propTypes={setResults:b.func,allItems:b.array};const ke={title:"A bizarre way of evaluating infinite series",description:"By equating an arbitrary infinite series to a Taylor expansion of some unknown function, can we evaluate the infinite series by finding this unknown function? This is an idea I came up with when studying how Talor expansions work, and this blog post goes into the details of what I uncovered.",image:"/assets/pi.515da8b7.jpg",url:"blog/1",tags:["math","pi"]},_e=()=>{const e=[ke],[t,n]=p.exports.useState(e);return u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Blog")),u.createElement(ve,{allItems:e,setResults:n}),u.createElement(be,{blogs:t}))},Te=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Projects")));async function Ie(){return fetch("https://ss-personal-api.herokuapp.com/api/htmlStringResume").then((e=>e.json())).then((e=>e))}const Fe=o.div`
    margin: auto;
    width: 60%;
    max-width: 60rem;
    background: white;
    padding: 40px 60px;
    border-radius: 15px;
    margin-top: 20px;

    @media screen and (max-width: 960px) {
        width: 75%;
        padding: 10px;
    }

    @media screen and (max-width: 425px) {
        width: 90%;
        padding: 5px;
    }
`,ze=o.div`
    text-align: center;
    padding-top: 30px;
    font-size: 24px;
`,Se=o.div`
    color: #fff;
    padding-top: 40px;
    padding-bottom: 40px;
`,je=o.img`
    margin: 20px;
    max-width: 250px;
    transform: scale(${e=>e.scale}, ${e=>e.scale});
    cursor: pointer;

    // prevent image from being highlighted
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`,Re=o.div`
    margin: auto;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 960px) {
        width: 75%;
    }

    @media screen and (max-width: 425px) {
        width: 90%;
    }
`,Be=o(v)`
    font-size: 5rem;
    margin: 20px;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 3rem;
    }
`,Ce=o(k)`
    font-size: 5rem;
    margin: 20px;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 3rem;
    }
`,qe=o(_)`
    font-size: 5rem;
    margin: 20px;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        font-size: 4rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 3rem;
    }
`,$e=o.div`
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
`,Pe=()=>{window.open("https://www.linkedin.com/in/ssaberan/","_blank").focus()},Me=()=>{window.open("https://github.com/ssaberan","_blank").focus()},Ae=()=>{window.open("https://ss-personal-api.herokuapp.com/api/pdfResume")},Oe=()=>{const[e,t]=p.exports.useState("1");return u.createElement(je,{src:"/assets/profile.0c1f39b9.svg",scale:e,onClick:()=>{t("0.98"),setTimeout((()=>{t("1")}),100)}})},Ne=()=>{const{data:e}=T({promiseFn:Ie});return u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Resume")),u.createElement(Se,null,u.createElement(Re,null,u.createElement(Oe,null),u.createElement($e,null,u.createElement(Be,{onClick:Pe,title:"Open my LinkedIn page in a new tab"}),u.createElement(Ce,{onClick:Me,title:"Open my Github page in a new tab"}),u.createElement(qe,{onClick:Ae,title:"Download my resume"}))),(null==e?void 0:e.resume)?u.createElement(Fe,{dangerouslySetInnerHTML:{__html:null==e?void 0:e.resume},tabIndex:0}):u.createElement(ze,null,u.createElement(I.Bars,null))))},Le=o.input`
    margin: auto;
    display: block;
    width: 100%;
    height: 2.5rem;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 15px;
    border: none;
`,De=o.label`
    margin: auto;
    display: block;
    width: 100%;
    margin-bottom: 5px;
    font-size: 22px;
`,He=o.label`
    margin: auto;
    display: block;
    width: 100%;
    color: red;
    margin-top: 5px;
`,We=e=>{var t=e,{label:n}=t,a=i(t,["label"]);const[l,r]=F(a);return u.createElement(u.Fragment,null,u.createElement(De,null,n),u.createElement(Le,{name:l.name,value:l.value,onChange:l.onChange,onBlur:l.onBlur}),r.touched&&r.error?u.createElement(He,null,r.error):null)};We.propTypes={label:b.string};const Ge=o.textarea`
    margin: auto;
    display: block;
    width: 100%;
    height: 12rem;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    border-radius: 15px;
    border: none;
`,Ue=o.label`
    margin: auto;
    display: block;
    width: 100%;
    margin-bottom: 5px;
    font-size: 22px;
`,Je=o.label`
    margin: auto;
    display: block;
    width: 100%;
    color: red;
    margin-top: 5px;
`,Ke=e=>{var t=e,{label:n,rows:a}=t,l=i(t,["label","rows"]);const[r,o]=F(l);return u.createElement(u.Fragment,null,u.createElement(Ue,null,n),u.createElement(Ge,{name:r.name,value:r.value,onChange:r.onChange,onBlur:r.onBlur,rows:a}),o.touched&&o.error?u.createElement(Je,null,o.error):null)};Ke.propTypes={label:b.string,rows:b.number};const Ve=e=>{const t={};return e.name.trim()||(t.name="A name is required to submit"),e.subject.trim()||(t.subject="A subject is required to submit"),e.message.trim()||(t.message="A message is required to submit"),t},Qe=e=>!!(e.name.trim()&&e.subject.trim()&&e.message.trim());const Xe=o.div`
    display: block;
    margin: auto;
    text-align: center;
    color: white;
    padding: 20px;
`,Ye=o.img`
    padding: 0;
    display: block;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
`;const Ze=o.div`
    display: block;
    margin: auto;
    text-align: center;
    color: white;
    padding: 20px;
`,et=o.img`
    padding: 0;
    display: block;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
`,tt=o(z)`
    display: block;
    text-align: center;
    width: 40%;
    margin: auto;
    padding-top: 2rem;
    padding-bottom: 5rem;
    color: #fff;

    @media screen and (max-width: 768px) {
        width: 60%;
    }

    @media screen and (max-width: 425px) {
        width: 90%;
    }
`,nt=o.div`
    margin: 50px 0px;
`,at=()=>{const[e,t]=p.exports.useState("form"),n=e=>{e.preventDefault(),j.sendForm("service_wuk7fha","template_iwcxr0f",e.target,"user_L5iDeh6WPPpM7T9mHslFG").then((e=>{console.log(e.text),t("sent")}),(e=>{console.log(e.text),t("error")}))};return"sent"===e?u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Email Sent")),u.createElement(Xe,null,u.createElement("h1",null,"Sent!"),u.createElement(Ye,{src:"/assets/sent.5c48c0c5.svg"}))):"error"===e?u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Email Sent")),u.createElement(Ze,null,u.createElement("h1",null,"Oh No! It looks like the email failed to send!"),u.createElement("h3",null,"I'm working on fixing the issue. Until then, you can email me at ssaberan96@gmail.com."),u.createElement(et,{src:"/assets/error.7aca0d6e.svg"}))):u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Contact Form")),u.createElement(S,{initialValues:{name:"",subject:"",message:""},validate:Ve},(({values:e})=>u.createElement(tt,{onSubmit:n,autoComplete:"off"},u.createElement("h1",null,"Contact Form"),u.createElement("h3",null,"Send an email to Soroush"),u.createElement(nt,null,u.createElement(We,{name:"name",label:"Name"})),u.createElement(nt,null,u.createElement(We,{name:"subject",label:"Subject"})),u.createElement(nt,null,u.createElement(Ke,{name:"message",label:"Message"})),u.createElement(Q,{type:"submit",text:"Send",disabled:!Qe(e)})))))},lt=u.createElement("a",{href:"https://en.wikipedia.org/wiki/Basel_problem",target:"_blank",rel:"noreferrer"},"*"),rt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f",title:"f"}),it=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;a",title:"a"}),ot=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(a)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^{n}",title:"f(a)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(a)}{n!}(x-a)^{n}"}),ct=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;S",title:"S"}),st=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}",title:"\\sum_{n=1}^{\\infty}\\frac{1}{n^{2}}"}),mt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\frac{1}{n^{2}}=f^{(n-1)}(a)\\frac{(x-a)^{n-1}}{(n-1)!}\\;&space;for\\;&space;n&space;\\in&space;\\mathbb{N}",title:"\\frac{1}{n^{2}}=f^{(n-1)}(a)\\frac{(x-a)^{n-1}}{(n-1)!}\\; for\\; n \\in \\mathbb{N}"}),dt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;x",title:"x"}),pt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;x=2",title:"x=2"}),ut=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;a=1",title:"a=1"}),gt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\frac{1}{n^{2}}=f^{(n-1)}(1)\\frac{1}{(n-1)!}\\;&space;for\\;&space;n\\in&space;\\mathbb{N}",title:"\\frac{1}{n^{2}}=f^{(n-1)}(1)\\frac{1}{(n-1)!}\\; for\\; n\\in \\mathbb{N}"}),xt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f^{(n)}(1)",title:"f^{(n)}(1)"}),ft=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f^{(n)}(1)=\\frac{n!}{(n&plus;1)^{2}}\\;&space;for\\;&space;n\\in&space;\\mathbb{N}\\cup\\{0\\}",title:"f^{(n)}(1)=\\frac{n!}{(n+1)^{2}}\\; for\\; n\\in \\mathbb{N}\\cup\\{0\\}"}),ht=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;x=1",title:"x=1"}),bt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(1)}{n!}(x-1)^{n}",title:"f(x)=\\sum_{n=0}^{\\infty}\\frac{f^{(n)}(1)}{n!}(x-1)^{n}"}),Et=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f^{(n)}(1)=\\frac{n!}{(n&plus;1)^{2}}",title:"f^{(n)}(1)=\\frac{n!}{(n+1)^{2}}"}),wt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(x)=\\sum_{n=0}^{\\infty}\\frac{\\frac{n!}{(n&plus;1)^{2}}}{n!}(x-1)^{n}=\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n&plus;1)^{2}}",title:"f(x)=\\sum_{n=0}^{\\infty}\\frac{\\frac{n!}{(n+1)^{2}}}{n!}(x-1)^{n}=\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n+1)^{2}}"}),yt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}",title:"\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}"}),vt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n&plus;1)^{2}}",title:"\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n+1)^{2}}"}),kt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}\\Rightarrow",title:"\\sum_{n=0}^{\\infty}t^{n}=\\frac{1}{1-t}\\Rightarrow"}),_t=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\int_{0}^{x}\\sum_{n=0}^{\\infty}t^{n}dt=\\int_{0}^{x}\\frac{1}{1-t}dt\\Rightarrow",title:"\\int_{0}^{x}\\sum_{n=0}^{\\infty}t^{n}dt=\\int_{0}^{x}\\frac{1}{1-t}dt\\Rightarrow"}),Tt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n&plus;1}}{n&plus;1}=ln(1-x)\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n+1}}{n+1}=ln(1-x)\\Rightarrow"}),It=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n&plus;1}=\\frac{ln(1-x)}{x}\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n}}{n+1}=\\frac{ln(1-x)}{x}\\Rightarrow"}),Ft=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\int_{0}^{x}\\sum_{n=0}^{\\infty}\\frac{t^{n}}{n&plus;1}dt=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\int_{0}^{x}\\sum_{n=0}^{\\infty}\\frac{t^{n}}{n+1}dt=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),zt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n&plus;1}}{(n&plus;1)^{2}}=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n+1}}{(n+1)^{2}}=\\int_{0}^{x}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),St=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n&plus;1}}{(n&plus;1)^{2}}=\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n+1}}{(n+1)^{2}}=\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),jt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n&plus;1)^{2}}=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow",title:"\\sum_{n=0}^{\\infty}\\frac{(x-1)^{n}}{(n+1)^{2}}=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt\\Rightarrow"}),Rt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?f(x)=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt",title:"f(x)=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt"}),Bt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;f(x)=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt",title:"f(x)=\\frac{1}{x-1}\\int_{0}^{x-1}\\frac{ln(1-t)}{t}dt"}),Ct=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\frac{\\pi^{2}}{6}",title:"\\frac{\\pi^{2}}{6}"}),qt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;-\\frac{\\pi^{2}}{6}",title:"-\\frac{\\pi^{2}}{6}"}),$t=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;1=-1",title:"1=-1"}),Pt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\sum_{n=0}^{\\infty}\\frac{x^{n&plus;1}}{n&plus;1}=ln(1-x)",title:"\\sum_{n=0}^{\\infty}\\frac{x^{n+1}}{n+1}=ln(1-x)"}),Mt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;\\frac{1}{1-t}",title:"\\frac{1}{1-t}"}),At=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;0",title:"0"}),Ot=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;t",title:"t"}),Nt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;-ln(1-t)",title:"-ln(1-t)"}),Lt=u.createElement("img",{src:"https://latex.codecogs.com/gif.latex?\\inline&space;ln(1-t)",title:"ln(1-t)"}),Dt=o.div`
    margin: auto;
    max-width: 60rem;
    padding: 40px 60px;
    background: white;
    border-radius: 20px;

    @media screen and (max-width: 960px) {
        padding: 40px 30px;
    }

    @media screen and (max-width: 425px) {
        padding: 40px 10px;
    }
`,Ht=o.div`
    color: white;
    margin: auto;
    max-width: 60rem;
    padding: 40px 60px;

    @media screen and (max-width: 960px) {
        padding: 40px 30px;
    }

    @media screen and (max-width: 425px) {
        padding: 40px 10px;
    }
`,Wt=()=>u.createElement(u.Fragment,null,u.createElement(E,null,u.createElement("title",null,"Blog Post 1")),u.createElement(Ht,null,u.createElement("h1",null,"A bizarre way of evaluating infinite series"),u.createElement("br",null),u.createElement("h3",null,"Posted on July 4th, 2021 by Soroush Saberan")),u.createElement(Dt,null,u.createElement(u.Fragment,null,u.createElement("p",null,"Given a function ",rt," that is infinitely differentiable around a point ",it,", we can derive the Taylor expansion of ",rt," around ",it," ","as follows:"),u.createElement("br",null),u.createElement("p",null,ot),u.createElement("br",null),u.createElement("p",null,"However, is the reverse also possible to derive? In other words, given an infinite series ",ct,", can we find a function ",rt," such that the Taylor expansion of ",rt," around some infinitely differentiable point ",it," is ",ct,"? If this is possible, we might be able to use the resulting function to evaluate ",ct,"."),u.createElement("br",null),u.createElement("p",null,"When investigating this, I decided to use this idea to attempt to solve the famous Basel problem in a new, bizarre way. First proposed in 1650, and solved by Leonhard Eulor in 1734",lt,", the Basel problem asks to evaluate the following:"),u.createElement("br",null),u.createElement("p",null,st),u.createElement("br",null),u.createElement("p",null,"Lets call this infinite sum ",ct,". So if we treat ",ct," as a Taylor expansion of some unknown function ",rt,", then we can write each term in ",ct," as follows:"),u.createElement("br",null),u.createElement("p",null,mt),u.createElement("br",null),u.createElement("p",null,"Our choice for ",dt," and ",it," is arbitrary, so lets choose values that simplify the problem. If we let ",pt," and ",ut,", we get the following:"),u.createElement("br",null),u.createElement("p",null,gt),u.createElement("br",null),u.createElement("p",null,"Rearranging the terms to isolate ",xt," gives us:"),u.createElement("br",null),u.createElement("p",null,ft),u.createElement("br",null),u.createElement("p",null,"So given the requirement above, what is ",rt,"?"),u.createElement("br",null),u.createElement("p",null,"If you take the Taylor expansion of ",rt," centered around ",ht,", you get the following:"),u.createElement("br",null),u.createElement("p",null,bt),u.createElement("br",null),u.createElement("p",null,"Substituting for ",Et," yields:"),u.createElement("br",null),u.createElement("p",null,wt),u.createElement("br",null),u.createElement("p",null,"Now use the formula, ",yt,". We want to manipulate the left side of this equation until it becomes ",vt,". Then whatever is on the right side will be ",rt,":"),u.createElement("br",null),u.createElement("p",null,kt),u.createElement("br",null),u.createElement("p",null,_t),u.createElement("br",null),u.createElement("p",null,Tt),u.createElement("br",null),u.createElement("p",null,It),u.createElement("br",null),u.createElement("p",null,Ft),u.createElement("br",null),u.createElement("p",null,zt),u.createElement("br",null),u.createElement("p",null,St),u.createElement("br",null),u.createElement("p",null,jt),u.createElement("br",null),u.createElement("p",null,"So we get that"),u.createElement("br",null),u.createElement("p",null,Rt),u.createElement("br",null),u.createElement("p",null,"is the value for ",rt," when ",pt," we were looking for, thus showing that it is possible to derive a function from its Taylor expansion for ",u.createElement("i",null,"some")," series ",ct," around ",u.createElement("i",null,"some")," ","infinitely differentiable point (in this case ",ut,")."),u.createElement("br",null),u.createElement("p",null,"Except for one not-so-minor detail..."),u.createElement("br",null),u.createElement("p",null,"Assuming I did everything right, if we plug ",pt," into"," ",Bt,", we should expect to get the answer to the Basel problem, which was confirmed to be ",Ct," by Leonhard Eulor in 1734",lt,". However, doing so yields"," ",qt," for whatever reason, meaning I made a mistake in my math somewhere (or that ",$t," haha). Maybe someday I will revisit this and find where I went wrong."),u.createElement("br",null),u.createElement("hr",null),u.createElement("br",null),u.createElement("p",null,u.createElement("strong",null,"Update on July 18th, 2021:")," After reading this blog post, Khristrian Decastro has pointed out that my mistake was in the step where I say:"),u.createElement("br",null),u.createElement("p",null,_t),u.createElement("br",null),u.createElement("p",null,Pt),u.createElement("br",null),u.createElement("p",null,"The integral of ",Mt," from ",At," to ",dt," with respect to ",Ot," ","is actually equal to ",Nt,", ",u.createElement("i",null,"not")," ",Lt,". This is where the erronious negative sign came from in my solution to the Basel problem."))));function Gt(){return u.createElement(R,null,u.createElement(K,null),u.createElement(J,null),u.createElement(U,null),u.createElement(B,null,u.createElement(C,{path:"/",to:"/home",exact:!0,component:de}),u.createElement(q,{path:"/home",exact:!0,component:de}),u.createElement(q,{path:"/blog",exact:!0,component:_e}),u.createElement(q,{path:"/projects",exact:!0,component:Te}),u.createElement(q,{path:"/resume",exact:!0,component:Ne}),u.createElement(q,{path:"/contact",exact:!0,component:at}),u.createElement(q,{path:"/blog/1",exact:!0,component:Wt})))}$.render(u.createElement(Gt,null),document.getElementById("root"));
