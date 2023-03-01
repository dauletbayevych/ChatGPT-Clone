(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="/assets/b-1bce4395.svg",c=document.querySelector("form"),a=document.querySelector("#chat_container");let u;function p(t){t.textContent="",u=setInterval(()=>{t.textContent+=".",t.textContent==="...."&&(t.textContent="")},300)}function m(t,n){let o=0,s=setInterval(()=>{o<n.length?(t.innerHTML+=n.charAt(o),o++):clearInterval(s)},20)}function g(){const t=Date.now(),o=Math.random().toString(16);return`id-${t}-${o}`}function l(t,n,o){return`
        <div class="wrapper ${t&&"ai"}">
            <div class="chat">
                <div class="profile">
                    <img
                      src=${d}
                      alt="${t?"bot":"user"}"
                    />
                </div>
                <div class="message" id=${o}>${n}</div>
            </div>
        </div>
    `}const f=async t=>{t.preventDefault();const n=new FormData(c);a.innerHTML+=l(!1,n.get("prompt")),c.reset();const o=g();a.innerHTML+=l(!0," ",o),a.scrollTop=a.scrollHeight;const s=document.getElementById(o);p(s);const e=await fetch("https://codex-chatgpt-o33z.onrender.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n.get("prompt")})});if(clearInterval(u),s.innerHTML=" ",e.ok){const i=(await e.json()).bot.trim();m(s,i)}else{const r=await e.text();s.innerHTML="Something went wrong",alert(r)}};c.addEventListener("submit",f);c.addEventListener("keyup",t=>{t.keyCode===13&&f(t)});
