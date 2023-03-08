(()=>{"use strict";class e{constructor(e,t,n,a,i,r){this.frequency=e,this.id=t,this.difficulty=n,this.problemUrl=a,this.problemName=i,this.acceptance=r}}class t extends e{constructor(e,t,n,a,i,r,s,l){super(e,t,n,a,i,r),this.companyName=s,this.duration=l}}class n{constructor(e,t,n){this.url=n,this.duration=e,this.company=t}}class a{constructor(){this.data={}}getKeys(){return Object.keys(this.data)}getList(e){return e in this.data?this.data[e]:[]}}class i extends a{push(e,t){if(e in this.data)return void this.data[e].push(t);let n=[];n.push(t),this.data[e]=n}}class r extends a{push(e,t){if(e in this.data)return void this.data[e].push(t);let n=new s;n.push(t),this.data[e]=n}}class s extends Array{sort(e,t=!1){(new e).sort(this,t)}}class l{static getContainerBackgroundColor(){switch(document.body.classList.contains("chakra-ui-dark")){case!0:return"#151515";case!1:return"#f3f3f3"}}static getComplementaryColor(){switch(document.body.classList.contains("chakra-ui-dark")){case!0:return"#282828";case!1:return"#dcdcdc"}}static COLOR_ACCENT="#62C555";static BACKGROUND_CONTAINER_COLOR="#101010";static SUB_BACKGROUND_CONTAINER_COLOR="#282828";static TEXT_COLOR="#dcdcdc";static TEXT_COLOR_SELECTED="#7d7d7d"}class o{constructor(){this.elementModifier=[]}injectFunctionToTargetElement(e){this.elementModifier.push(e)}modifyElement(){this.modifyActiveElement(),this.addObserverToCompaniesSection()}modifyActiveElement(){let e=document.getElementsByClassName("swiper-slide-active"),t=e[e.length-1].getElementsByTagName("a");for(let e=0;e<=t.length-1;e++){let n=t[e].href.split("/"),a=n[n.length-1],i=t[e];null==i.getAttribute("company-name")&&i.setAttribute("company-name",a),i.href="javascript:void(0)";for(let e=0;e<=this.elementModifier.length-1;e++)this.elementModifier[e](i);this.onModifyElementSuccess(i)}}onModifyElementSuccess(e){let t=e.getElementsByTagName("span");t[t.length-1].style.backgroundColor=l.COLOR_ACCENT}addObserverToCompaniesSection(){var e=document.getElementsByClassName("mt-0")[0];const t=new MutationObserver((()=>{this.modifyActiveElement()}));e?t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}):window.setTimeout((()=>{this.addObserverToCompaniesSection()}),500)}}class c{getValue(e,t){return e[t]}doSwap(e,t){return e>t}swap(e,t,n){let a=e[t];e[t]=e[n],e[n]=a}partition(e,t,n,a){let i=this.getValue(e,n),r=t-1;for(let s=t;s<=n-1;s++){let t=this.getValue(e,s),n=this.doSwap(t,i);a&&(n=!n),n&&(r++,this.swap(e,r,s))}return this.swap(e,r+1,n),r+1}sort(e,t=!1){this.quickSort(e,0,e.length-1,t)}quickSort(e,t,n,a){if(null==n&&null==t&&(n=e.length-1,t=0),t<n){let i=this.partition(e,t,n,a);this.quickSort(e,t,i-1,a),this.quickSort(e,i+1,n,a)}}}class d extends c{getValue(e,t){return e[t].acceptance}}class h extends c{getValue(e,t){return e[t].difficulty}doSwap(e,t){let n=["Easy","Medium","Hard"];return n.indexOf(e)<n.indexOf(t)}}class m extends c{getValue(e,t){return parseInt(e[t].id)}}class u extends c{getValue(e,t){return e[t].problemName}doSwap(e,t){let n="abcdefghijklmnopqrstuvwxyz",a=e[0].toLowerCase(),i=t[0].toLowerCase();return n.indexOf(a)<n.indexOf(i)}}class g extends c{getValue(e,t){return e[t].frequency}}class p{static generateTextElement(e){let t=document.createElement("div"),n=document.createElement("h3");return n.textContent=e,n.style="\n        text-align: center;\n        ",t.appendChild(n),t}static generateProblemIdElement(e){let t=p.generateTextElement(e);return t.style="\n       width: 5%\n       ",t}static generateProblemFrequencyElement(e){let t=document.createElement("div");t.setAttribute("title",String(Math.round(100*e))+"%"),t.style=`\n        display: flex;\n        height: 1rem;\n        overflow: hidden;\n        font-size: .75rem;\n        background-color: ${l.getComplementaryColor()}; \n        border-radius: 0.5rem;\n        margin-top: auto;\n        margin-bottom: auto;\n        width:10%; \n        `;let n=document.createElement("div");return n.style=`\n        border-radius: 0.5rem;\n        height:100%; \n        width:${100*e}%; \n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        overflow: hidden;\n        color: #fff;\n        background-color: ${l.COLOR_ACCENT};\n        `,t.appendChild(n),t}static generateProblemNameElement(e,t){let n=document.createElement("div"),a=document.createElement("a");return a.href=t,a.textContent=e,n.appendChild(a),n.style="\n        width: 50%\n        ",n}static generateProblemDifficultyElement(e){let t=p.generateTextElement(e);switch(t.style="\n        width: 12%\n        ",e){case"Hard":t.children[0].style.color="red";break;case"Medium":t.children[0].style.color="orange";break;case"Easy":t.children[0].style.color="green"}return t}static generateProblemAcceptanceElement(e){let t=p.generateTextElement(e);return t.style="\n        width: 10%\n        ",t}static generateRowElement(){let e=document.createElement("div");return e.style=`\n        display:flex;\n        border-top: solid 1px ${l.getComplementaryColor()};\n        `,e}static generateTableContentElement(e){let t=document.createElement("div");for(let n=0;n<=e.length-1;n++){let a=p.generateRowElement(),i=e[n].frequency,r=e[n].id,s=e[n].difficulty,l=e[n].problemUrl,o=e[n].problemName,c=String(Math.round(100*e[n].acceptance))+"%";a.appendChild(p.generateProblemIdElement(r)),a.appendChild(p.generateProblemNameElement(o,l)),a.appendChild(p.generateProblemAcceptanceElement(c)),a.appendChild(p.generateProblemDifficultyElement(s)),a.appendChild(p.generateProblemFrequencyElement(i)),t.append(a)}return t.id="table-content",t}static generateDurationElement(e){let t=document.createElement("button");return t.innerText=e,t.style=" \n        width:auto; \n        margin-right: 2%; \n        ",t.setAttribute("duration",e),t.addEventListener("select",(()=>{t.classList.add("selected-duration-button"),t.classList.remove("unselected-duration-button")})),t.addEventListener("unselect",(()=>{t.classList.add("unselected-duration-button"),t.classList.remove("selected-duration-button")})),t.classList.add("unselected-duration-button"),t}static generateTitleElement(e){let t=document.createElement("h2");return t.innerText=e,t.style="\n        font-size:1.5em;",t}}class b{constructor(){this.tableId="table-content",this.shownData=[],this.currentlySortedBy="",this.isReverseSorted=!1,this.parentDiv=document.createElement("div"),this.durationData={},this.currentlySelectedDuration=void 0}setShownData(e){return this.shownData=e,this}buildTitleRow(e){let t=p.generateRowElement();return t.style.justifyContent="center",t.appendChild(p.generateTitleElement(e)),this.parentDiv.appendChild(t),this}addDurationData(e,t){this.durationData[e]=t}buildDurationsRow(){let e=p.generateRowElement();for(let t in this.durationData){let n=p.generateDurationElement(t);if(n.classList.add("clickable"),n.addEventListener("click",this.onDurationButtonClicked),e.appendChild(n),null==this.currentlySelectedDuration){this.currentlySelectedDuration=n;let e=new Event("select");this.currentlySelectedDuration.dispatchEvent(e)}}return this.parentDiv.appendChild(e),this}buildHeaderRow(){let e=p.generateRowElement(),t=p.generateProblemIdElement("#"),n=p.generateProblemNameElement("Title","javascript:void(0)"),a=p.generateProblemAcceptanceElement("Acceptance"),i=p.generateProblemDifficultyElement("Difficulty"),r=p.generateProblemAcceptanceElement("Frequency");return t.firstChild.classList.add("clickable"),n.firstChild.classList.add("clickable"),a.firstChild.classList.add("clickable"),i.firstChild.classList.add("clickable"),r.firstChild.classList.add("clickable"),t.firstChild.classList.add("default-text-color"),n.firstChild.classList.add("default-text-color"),a.firstChild.classList.add("default-text-color"),i.firstChild.classList.add("default-text-color"),r.firstChild.classList.add("default-text-color"),t.addEventListener("click",this.getOnHeaderClickedFunction(m).bind(this)),n.addEventListener("click",this.getOnHeaderClickedFunction(u).bind(this)),a.addEventListener("click",this.getOnHeaderClickedFunction(d).bind(this)),i.addEventListener("click",this.getOnHeaderClickedFunction(h).bind(this)),r.addEventListener("click",this.getOnHeaderClickedFunction(g).bind(this)),e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(i),e.appendChild(r),this.parentDiv.appendChild(e),this}buildTable(e=u){this.shownData.sort(e),this.currentlySortedBy=e.name,this.isReverseSorted=!1;let t=p.generateTableContentElement(this.shownData);return this.parentDiv.appendChild(t),this}getResult(){return this.parentDiv}onDurationButtonClicked=e=>{let t=new Event("select");e.currentTarget.dispatchEvent(t);let n=new Event("unselect");this.currentlySelectedDuration.dispatchEvent(n),this.currentlySelectedDuration=e.currentTarget,this.shownData=this.durationData[e.currentTarget.getAttribute("duration")],this.swapContentTableElement(this.shownData)};getOnHeaderClickedFunction(e){return()=>{e.name==this.currentlySortedBy?(this.shownData.sort(e,!this.isReverseSorted),this.isReverseSorted=!this.isReverseSorted):(this.shownData.sort(e),this.currentlySortedBy=e.name,this.isReverseSorted=!1),this.swapContentTableElement(this.shownData)}}swapContentTableElement=e=>{null!=document.getElementById(this.tableId)&&document.getElementById(this.tableId).remove();let t=p.generateTableContentElement(e);this.parentDiv.appendChild(t)}}class f{constructor(){if(f._instance)throw new Error("Modal Manager Have been instantiated");f._instance=this,this.modal=this.createModal(),this.modalContentBox=this.createModalContentBox(),this.appendToModal(this.modalContentBox),this.appendModal(document.body)}createModalContentBox(){let e=document.createElement("div");return e.style=`\n        background-color: ${l.getContainerBackgroundColor()};\n        margin-top:1%; \n        margin-left: auto;\n        margin-right: auto;\n        padding: 20px;\n        max-width: 80%;\n        min-width: 60%\n        mid-height: 15%; \n        border-radius:15px; \n        `,e}getModalContentBox(){return this.modalContentBox}appendModal(e){e.appendChild(this.modal)}appendToModal(e){this.modal.appendChild(e)}appendToContainer(e){this.modalContentBox.appendChild(e)}showLoadingIcon(){let e=document.createElement("div");e.classList.add("loading-logo"),this.modalContentBox.appendChild(e)}createCloseButton(){let e=document.createElement("span");return e.style=" \n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n        cursor: pointer;\n        ",e.innerText="x",e.addEventListener("click",resetModal),e}createModal(){let e=document.createElement("div");return e.style=" \n        display: none; \n        position: fixed; \n        z-index: 32;\n        left: 0;\n        top: 0;\n        width: 100%; \n        height: 100%; \n        overflow: auto; \n        ",window.addEventListener("click",this.onModalClicked),e.id="CompanyModal",e}openModal(){this.modal.style.display=""}closeModal(){this.modal.style.display="none"}clearModalContent(){for(;null!=this.modalContentBox.firstChild;)this.modalContentBox.firstChild.remove()}onModalClicked=e=>{e.target==this.modal&&this.resetModal()};resetModal=()=>{this.closeModal(),this.clearModalContent()}}let C=new f;class y{static API_KEY="AIzaSyDDAE3rf1fjLGKM0FUHQeTcsmS6fCQjtDs";static SHEETS_ID="1hW-bfeFKSkEDzfjaDMjDQmgsupEZz3gysXpG0mrf6QE";static TESTING_SHEETS_ID="1TJUhILyqBYsXWaPSUGwN1EvzBFeRNg1MgXH_SVqjQJo";static getUrl(e){return`https://sheets.googleapis.com/v4/spreadsheets/${y.SHEETS_ID}/values/${e}?key=${y.API_KEY}`}}class E{constructor(){this.cachedData={}}fetchData(){return this.fetchProblemFrequencyData()}async fetchProblemFrequencyData(){let e=y.getUrl("Problem!A:B"),t=await fetch(e),n=await t.json();return this.parseProblemFrequencyData(n.values)}parseProblemFrequencyData(e){let t={};for(let n=0;n<=e.length-1;n++){let a=e[n][0],i=e[n][1];t[a]=i,this.cachedData[a]=n}return t}fetchPremiumProblem(e){return this.fetchProblemData(e)}async fetchProblemData(e){if(e in this.cachedData==0)return new Promise(((e,t)=>e("<h1>No data</h1>")));let t="Problem!K"+this.cachedData[e],n=y.getUrl(t),a=await fetch(n);return(await a.json()).values[0]}}class T{constructor(){this.companyPageTableData={},this.cachedData={},this.tableDataFetched=!1,this.fetchCompanyPageTable()}fetchData(e){return 0==this.tableDataFetched?this.fetchCompanyPageTable().then((t=>this.fetchCompanyProblemData(e))):this.fetchCompanyProblemData(e)}fetchCompanyPageTable(){let e=y.getUrl("CompaniesProblem_Map!A:C");return fetch(e).then((e=>e.json())).then((e=>{this.parseCompanyPageTableData(e.values)})).then(this.tableDataFetched=!0)}fetchCompanyProblemData(e){if(e in this.cachedData)return new Promise(((t,n)=>t(this.cachedData[e])));if(e in this.companyPageTableData==0)return new Promise(((e,t)=>e(new r)));let t=`CompaniesProblem!A${this.companyPageTableData[e][0]}:I${this.companyPageTableData[e][1]}`,n=y.getUrl(t);return fetch(n).then((e=>e.json())).then((t=>this.parseCompanyProblemData(e,t.values)))}parseCompanyPageTableData(e){for(let t=1;t<=e.length-1;t++){let n=e[t][0],a=e[t][1],i=e[t][2];this.companyPageTableData[n]=[a,i]}return this.companyPageTableData}parseCompanyProblemData(e,n){let a=new r;for(let e=0;e<=n.length-1;e++){let i=n[e][2],r=n[e][1],s=n[e][7],l=n[e][6],o=n[e][4],c=n[e][5],d=n[e][0],h=n[e][3],m=new t(i,r,s,l,o,c,d,h);a.push(h,m)}return this.cachedData[e]=a,a}}class v{fetchData(e){let t=`${e}!A2:F`,n=y.getUrl(t);return fetch(n).then((e=>e.json())).then((e=>this.parseTopQuestionData(e.values)))}parseTopQuestionData(t){let n=new s;for(let a=0;a<=t.length-1;a++){let i=t[a][0],r=t[a][1],s=t[a][2],l=t[a][3],o=t[a][4],c=t[a][5],d=new e(r,i,c,o,s,l);n.push(d)}return n}}class w{constructor(){this.map={},this.mapFetched=!1,this.fetchtProblemTagsMap()}fetchData(e){return this.mapFetched?this.fetchProblemTag(e):this.fetchtProblemTagsMap().then((t=>this.fetchProblemTag(e)))}fetchProblemTag(e){if(!(e in this.map))return new Promise(((e,t)=>e(new i)));let t=`ProblemCompaniesTags!A${this.map[e][0]}:C${this.map[e][1]}`,n=y.getUrl(t);return fetch(n).then((e=>e.json())).then((e=>this.parseProblemTagData(e.values)))}parseProblemTagData(e){let t=new i;for(let a=0;a<=e.length-1;a++){let i=e[a][0],r=e[a][1],s=e[a][2],l=new n;l.duration=r,l.company=s,l.url=i,t.push(r,l)}return this.cachedData=t,t}fetchtProblemTagsMap(){let e=y.getUrl("ProblemCompaniesTags_Map!A:C");return fetch(e).then((e=>e.json())).then((e=>this.setProblemTagMap(e.values)))}setProblemTagMap(e){for(let t=0;t<=e.length-1;t++){let n=e[t][0],a=e[t][1],i=e[t][2];this.map[n]=[a,i]}this.mapFetched=!0}}class M{constructor(){this.elementModifier=[]}modifyElement(){this.observer=new MutationObserver((()=>{this.modifyActiveElement()})),this.modifyActiveElement(),this.addObserverToProblemTable()}injectFunctionToTargetElement(e){this.elementModifier.push(e)}modifyActiveElement=()=>{this.disconnectObserverToProblemTable();let e=document.querySelector('[role="rowgroup"]').querySelectorAll('[role="row"]');for(let t=0;t<=e.length-1;t++){let n=e[t].querySelectorAll('[role="cell"]')[1].textContent.split(".")[0];e[t].setAttribute("problem-id",String(n));let a=e[t].getElementsByTagName("rect").length>0;e[t].setAttribute("is-premium",a);for(let n=0;n<=this.elementModifier.length-1;n++)this.elementModifier[n](e[t])}this.addObserverToProblemTable()};disconnectObserverToProblemTable(){this.observer.disconnect()}addObserverToProblemTable(){let e=document.querySelector('[role="table"]');this.observer.observe(e,{childList:!0,subtree:!0})}}class D{constructor(){this.elementModifier=new M,this.dataFetcher=new E,this.containerManager=C,this.isFetching=!1}onFetchSuccess(){this.elementModifier.injectFunctionToTargetElement(D.removeProgressbarUnlockButton),this.elementModifier.injectFunctionToTargetElement(this.insertInnerProgressbar),this.elementModifier.injectFunctionToTargetElement(this.modifyPremiumProblemHref),this.elementModifier.modifyElement()}modifyPremiumProblemHref=e=>{if("true"==e.getAttribute("is-premium")){let t=e.getAttribute("problem-id"),n=e.getElementsByTagName("a")[0];n.href="javascript:void(0)",n.style.color=l.COLOR_ACCENT,n.addEventListener("click",(()=>{this.onPremiumProblemClicked(t)}))}};unlock(){this.dataFetcher.fetchData().then((e=>{this.problemData=e})).then(this.onFetchSuccess.bind(this)).catch((e=>console.log(this,e)))}onPremiumProblemClicked=e=>{this.isFetching||(this.isFetching=!0,this.containerManager.clearModalContent(),this.containerManager.openModal(),this.containerManager.showLoadingIcon(),this.dataFetcher.fetchPremiumProblem(parseInt(e)).then((e=>this.onProblemFetchSuccess(e))).then(this.isFetching=!1))};onProblemFetchSuccess(e){let t=this.containerManager.getModalContentBox();this.containerManager.clearModalContent();let n=String(e).replaceAll("<strong>","<br><strong>");t.innerHTML=n;let a=t.getElementsByTagName("pre");for(let e=0;e<=a.length-1;e++)a[e].style="\n            border-radius: 0.5rem;\n            font-family: Menlo,sans-serif;\n            font-size: .875rem;\n            line-height: 1.25rem;\n            margin-bottom: 1rem;\n            margin-top: 1rem;\n            padding: 1rem;\n    "}removeLockLogo(e){let t=e.querySelectorAll('[role="cell"]');t[0].getElementsByTagName("svg")[0].remove(),t[1].getElementsByTagName("svg")[0].remove()}insertInnerProgressbar=e=>{let t=e.querySelectorAll('[role="cell"]'),n=t[t.length-1],a=e.getAttribute("problem-id"),i=this.problemData[a];null==i&&(i=0),i*=100;let r="inner-progressbar",s=n.getElementsByClassName(r),o=n.getElementsByClassName("rounded-l-lg")[0];s.length>0&&s[0].remove(),o.setAttribute("title",`${Math.round(i)}%`);let c=function(e){let t=document.createElement("div");return t.style=`\n    background-color: ${l.COLOR_ACCENT};\n    width: ${e}%;\n    height: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n    border-top-left-radius: 0.5rem;\n    `,t}(i);c.classList.add(r),o.appendChild(c)};static removeProgressbarUnlockButton(e){let t=e.querySelectorAll('[role="cell"]'),n=t[t.length-1],a=n.getElementsByTagName("svg")[0],i=n.getElementsByClassName("rounded-r-lg")[0],r=n.getElementsByClassName("rounded-l-lg")[0];null!=a&&a.remove(),null!=i&&i.remove(),null!=r&&(r.style="\n            border-bottom-right-radius: 0.5rem;\n            overflow: hidden; \n            border-top-right-radius: 0.5rem\n            ")}}class P{constructor(){this.elementModifier=[]}injectFunctionToTargetElement(e){this.elementModifier.push(e)}modifyElement(){this.observer=new MutationObserver((()=>{this.modifyLockedElement()})),this.modifyLockedElement(),this.addObsersverToFoldout()}addObsersverToFoldout(){let e=document.getElementsByClassName("space-y-1.5")[0];this.observer.observe(e,{childList:!0,subtree:!0})}modifyLockedElement=()=>{let e=document.getElementsByClassName("space-y-1.5")[0],t=e.children;for(let n=0;n<=t.length-2;n++){let a=t[n].getElementsByTagName("svg");if(a.length>0){t[n].getElementsByTagName("a")[0].href="javascript:void(0)";let i=t[n].textContent.replaceAll(" ","");t[n].setAttribute("item",i),t[n].style.color=l.COLOR_ACCENT,a[0].remove();let r=t[n],s=t[n].cloneNode(!0);e.replaceChild(s,r);for(let e=0;e<=this.elementModifier.length-1;e++)this.elementModifier[e](s)}}};disconnectObserverToFoldout(){this.observer.disconnect()}}class L{constructor(){this.tagButtonListener=[]}modifyElement(){document.getElementsByClassName("overflow-x-auto")[0]?(this.isDescriptionTabActive()&&this.modifyCompaniesTagButton(),this.addObserverToLeftTab()):window.setTimeout((()=>{this.modifyElement()}),500)}addObserverToLeftTab(){let e=document.getElementsByClassName("overflow-x-auto")[0];new MutationObserver((()=>{this.isDescriptionTabActive()&&this.modifyCompaniesTagButton()})).observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]})}isDescriptionTabActive(){return"Description"==document.getElementsByClassName("overflow-x-auto")[0].getElementsByClassName("bg-layer-1")[0].textContent}modifyCompaniesTagButton(){let e=document.getElementsByClassName("pt-3")[0];if(!e)return void window.setTimeout((()=>{this.modifyCompaniesTagButton.bind(this)()}),500);let t=e.getElementsByTagName("svg")[0],n=t.parentElement;t.remove();let a=n.cloneNode(!0);n.parentElement.replaceChild(a,n),a.style.backgroundColor=l.COLOR_ACCENT,a.style.color="black";for(let e=0;e<=this.tagButtonListener.length-1;e++)a.addEventListener("click",this.tagButtonListener[e])}addTagButtonOnClickListener(e){this.tagButtonListener.push(e)}}class B{static generateHeader(e){let t=document.createElement("h3");return t.classList.add("default-text-color"),t.textContent=e,t}static generateTag(e){let t=document.createElement("div");return t.style="\n        min-width:7%;\n        margin-right: 3%;\n        margin-bottom: 1%;\n        max-width:15%; \n        text-align:center; \n        border-radius: 21px;\n        ",t.classList.add("sub-title-text-color"),t.textContent=e,t}static generateRow(){let e=document.createElement("div");return e.style="\n        display:flex;\n        flex-wrap: wrap;\n        border-top: solid 1px darkgrey;\n\n        ",e}}class F{constructor(){this.parentDiv=document.createElement("div")}buildHeader(e){let t=B.generateRow();return t.style.justifyContent="center",t.appendChild(B.generateHeader(e)),this.parentDiv.appendChild(t),this}getResult(){return this.parentDiv}buildTagsBox(e){let t=B.generateRow();for(let n=0;n<=e.length-1;n++){let a=B.generateTag(e[n].company);t.appendChild(a)}return this.parentDiv.appendChild(t),this}}!function(e){for(const t in e)if(window.location.href.includes(t)){let n=e[t];for(let e=0;e<=n.length-1;e++)try{(new n[e]).unlock()}catch(t){console.log(n[e].constructor.name+" Error "+t)}break}}({"https://leetcode.com/problemset":[D,class{constructor(){this.elementModifier=new o,this.dataFetcher=new T,this.containerManager=C,this.isFetching=!1}unlock(){this.elementModifier.injectFunctionToTargetElement(this.getFunctionToBeInjected()),this.elementModifier.modifyElement()}getFunctionToBeInjected(){return e=>{e.addEventListener("click",this.onCompanyButtonClick)}}onCompanyButtonClick=e=>{if(this.isFetching)return;this.isFetching=!0;let t=e.currentTarget.getAttribute("company-name"),n=e.currentTarget.getElementsByClassName("text-label-2")[0].textContent;this.containerManager.clearModalContent(),this.containerManager.openModal(),this.containerManager.showLoadingIcon(),this.dataFetcher.fetchData(t).then((e=>this.onFetchSuccess(e,n))).then((e=>{this.isFetching=!1})).catch((e=>{this.isFetching=!1}))};onFetchSuccess(e,t){let n=this.containerManager.getModalContentBox(),a=new b(e),i=e.getKeys();for(let t=0;t<=i.length-1;t++)a.addDurationData(i[t],e.getList(i[t]));a.buildTitleRow(t),a.buildDurationsRow(),a.setShownData(e.getList(i[0])),a.buildHeaderRow(),a.buildTable(),this.containerManager.clearModalContent(),n.appendChild(a.getResult())}},class{constructor(){this.elementModifier=new P,this.dataFetcher=new v,this.containerManager=C,this.isFetching=!1}unlock(){this.elementModifier.injectFunctionToTargetElement(this.getFunctionToBeInjected()),this.elementModifier.modifyElement()}onTopProblemClicked=e=>{if(this.isFetching)return;this.isFetching=!0;let t=e.currentTarget.getAttribute("item"),n=e.currentTarget.getElementsByClassName("font-medium")[0].textContent;this.containerManager.clearModalContent(),this.containerManager.openModal(),this.containerManager.showLoadingIcon(),this.dataFetcher.fetchData(t).then((e=>this.onFetchSuccess(e,n))).then((e=>{this.isFetching=!1})).catch((e=>{console.log(this,"Fetch Error"+e),this.isFetching=!1}))};onFetchSuccess(e,t){let n=new b;n.setShownData(e),n.buildTitleRow(t),n.buildHeaderRow(),n.buildTable();let a=n.getResult();this.containerManager.clearModalContent(),this.containerManager.getModalContentBox().appendChild(a)}getFunctionToBeInjected(){return e=>{e.addEventListener("click",this.onTopProblemClicked)}}}],"https://leetcode.com/problem-list":[D],"https://leetcode.com/problems":[class{constructor(){this.elementModifier=new L,this.dataFetcher=new w,this.containerManager=C,this.isFetching=!1}onTagButtonClicked=()=>{if(this.isFetching)return;this.isFetching=!0;let e=document.URL.split("/")[4];this.containerManager.clearModalContent(),this.containerManager.openModal(),this.containerManager.showLoadingIcon(),this.dataFetcher.fetchData(e).then((e=>this.onFetchSucces(e))).then((e=>{this.isFetching=!1})).catch((e=>{console.log(this,e),this.isFetching=!1}))};unlock(){this.elementModifier.modifyElement(),this.elementModifier.addTagButtonOnClickListener(this.onTagButtonClicked)}onFetchSucces=e=>{let t=e.getKeys(),n=new F;for(let a=0;a<=t.length-1;a++)n.buildHeader(t[a]),n.buildTagsBox(e.getList(t[a]));let a=this.containerManager.getModalContentBox();this.containerManager.clearModalContent(),a.appendChild(n.getResult())}}]})})();