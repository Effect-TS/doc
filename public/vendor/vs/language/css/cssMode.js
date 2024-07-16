/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 5.5.3(9db1fbf7f5de0088e9ab57efe2106cf22af1abc3)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define("vs/language/css/cssMode", ["require","require"],(require)=>{
"use strict";var moduleExports=(()=>{var Tt=Object.create;var X=Object.defineProperty;var _t=Object.getOwnPropertyDescriptor;var Ct=Object.getOwnPropertyNames;var bt=Object.getPrototypeOf,wt=Object.prototype.hasOwnProperty;var Et=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,i)=>(typeof require<"u"?require:n)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Rt=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),Pt=(e,n)=>{for(var i in n)X(e,i,{get:n[i],enumerable:!0})},z=(e,n,i,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of Ct(n))!wt.call(e,t)&&t!==i&&X(e,t,{get:()=>n[t],enumerable:!(r=_t(n,t))||r.enumerable});return e},he=(e,n,i)=>(z(e,n,"default"),i&&z(i,n,"default")),me=(e,n,i)=>(i=e!=null?Tt(bt(e)):{},z(n||!e||!e.__esModule?X(i,"default",{value:e,enumerable:!0}):i,e)),Lt=e=>z(X({},"__esModule",{value:!0}),e);var ye=Rt((Qt,xe)=>{var Wt=me(Et("vs/editor/editor.api"));xe.exports=Wt});var Bt={};Pt(Bt,{CompletionAdapter:()=>D,DefinitionAdapter:()=>A,DiagnosticsAdapter:()=>W,DocumentColorAdapter:()=>N,DocumentFormattingEditProvider:()=>U,DocumentHighlightAdapter:()=>F,DocumentLinkAdapter:()=>fe,DocumentRangeFormattingEditProvider:()=>H,DocumentSymbolAdapter:()=>j,FoldingRangeAdapter:()=>O,HoverAdapter:()=>S,ReferenceAdapter:()=>M,RenameAdapter:()=>K,SelectionRangeAdapter:()=>V,WorkerManager:()=>_,fromPosition:()=>k,fromRange:()=>pe,setupMode:()=>$t,toRange:()=>y,toTextEdit:()=>P});var d={};he(d,me(ye()));var Dt=2*60*1e3,_=class{constructor(n){this._defaults=n,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;Date.now()-this._lastUsedTime>Dt&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=d.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...n){let i;return this._getClient().then(r=>{i=r}).then(r=>{if(this._worker)return this._worker.withSyncedResources(n)}).then(r=>i)}};var ve;(function(e){function n(i){return typeof i=="string"}e.is=n})(ve||(ve={}));var Z;(function(e){function n(i){return typeof i=="string"}e.is=n})(Z||(Z={}));var Ie;(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647;function n(i){return typeof i=="number"&&e.MIN_VALUE<=i&&i<=e.MAX_VALUE}e.is=n})(Ie||(Ie={}));var $;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647;function n(i){return typeof i=="number"&&e.MIN_VALUE<=i&&i<=e.MAX_VALUE}e.is=n})($||($={}));var I;(function(e){function n(r,t){return r===Number.MAX_VALUE&&(r=$.MAX_VALUE),t===Number.MAX_VALUE&&(t=$.MAX_VALUE),{line:r,character:t}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&a.uinteger(t.line)&&a.uinteger(t.character)}e.is=i})(I||(I={}));var h;(function(e){function n(r,t,o,s){if(a.uinteger(r)&&a.uinteger(t)&&a.uinteger(o)&&a.uinteger(s))return{start:I.create(r,t),end:I.create(o,s)};if(I.is(r)&&I.is(t))return{start:r,end:t};throw new Error(`Range#create called with invalid arguments[${r}, ${t}, ${o}, ${s}]`)}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&I.is(t.start)&&I.is(t.end)}e.is=i})(h||(h={}));var B;(function(e){function n(r,t){return{uri:r,range:t}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&h.is(t.range)&&(a.string(t.uri)||a.undefined(t.uri))}e.is=i})(B||(B={}));var ke;(function(e){function n(r,t,o,s){return{targetUri:r,targetRange:t,targetSelectionRange:o,originSelectionRange:s}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&h.is(t.targetRange)&&a.string(t.targetUri)&&h.is(t.targetSelectionRange)&&(h.is(t.originSelectionRange)||a.undefined(t.originSelectionRange))}e.is=i})(ke||(ke={}));var ee;(function(e){function n(r,t,o,s){return{red:r,green:t,blue:o,alpha:s}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&a.numberRange(t.red,0,1)&&a.numberRange(t.green,0,1)&&a.numberRange(t.blue,0,1)&&a.numberRange(t.alpha,0,1)}e.is=i})(ee||(ee={}));var Te;(function(e){function n(r,t){return{range:r,color:t}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&h.is(t.range)&&ee.is(t.color)}e.is=i})(Te||(Te={}));var _e;(function(e){function n(r,t,o){return{label:r,textEdit:t,additionalTextEdits:o}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&a.string(t.label)&&(a.undefined(t.textEdit)||w.is(t))&&(a.undefined(t.additionalTextEdits)||a.typedArray(t.additionalTextEdits,w.is))}e.is=i})(_e||(_e={}));var C;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(C||(C={}));var Ce;(function(e){function n(r,t,o,s,u,g){let f={startLine:r,endLine:t};return a.defined(o)&&(f.startCharacter=o),a.defined(s)&&(f.endCharacter=s),a.defined(u)&&(f.kind=u),a.defined(g)&&(f.collapsedText=g),f}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&a.uinteger(t.startLine)&&a.uinteger(t.startLine)&&(a.undefined(t.startCharacter)||a.uinteger(t.startCharacter))&&(a.undefined(t.endCharacter)||a.uinteger(t.endCharacter))&&(a.undefined(t.kind)||a.string(t.kind))}e.is=i})(Ce||(Ce={}));var te;(function(e){function n(r,t){return{location:r,message:t}}e.create=n;function i(r){let t=r;return a.defined(t)&&B.is(t.location)&&a.string(t.message)}e.is=i})(te||(te={}));var T;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(T||(T={}));var be;(function(e){e.Unnecessary=1,e.Deprecated=2})(be||(be={}));var we;(function(e){function n(i){let r=i;return a.objectLiteral(r)&&a.string(r.href)}e.is=n})(we||(we={}));var q;(function(e){function n(r,t,o,s,u,g){let f={range:r,message:t};return a.defined(o)&&(f.severity=o),a.defined(s)&&(f.code=s),a.defined(u)&&(f.source=u),a.defined(g)&&(f.relatedInformation=g),f}e.create=n;function i(r){var t;let o=r;return a.defined(o)&&h.is(o.range)&&a.string(o.message)&&(a.number(o.severity)||a.undefined(o.severity))&&(a.integer(o.code)||a.string(o.code)||a.undefined(o.code))&&(a.undefined(o.codeDescription)||a.string((t=o.codeDescription)===null||t===void 0?void 0:t.href))&&(a.string(o.source)||a.undefined(o.source))&&(a.undefined(o.relatedInformation)||a.typedArray(o.relatedInformation,te.is))}e.is=i})(q||(q={}));var b;(function(e){function n(r,t,...o){let s={title:r,command:t};return a.defined(o)&&o.length>0&&(s.arguments=o),s}e.create=n;function i(r){let t=r;return a.defined(t)&&a.string(t.title)&&a.string(t.command)}e.is=i})(b||(b={}));var w;(function(e){function n(o,s){return{range:o,newText:s}}e.replace=n;function i(o,s){return{range:{start:o,end:o},newText:s}}e.insert=i;function r(o){return{range:o,newText:""}}e.del=r;function t(o){let s=o;return a.objectLiteral(s)&&a.string(s.newText)&&h.is(s.range)}e.is=t})(w||(w={}));var ne;(function(e){function n(r,t,o){let s={label:r};return t!==void 0&&(s.needsConfirmation=t),o!==void 0&&(s.description=o),s}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&a.string(t.label)&&(a.boolean(t.needsConfirmation)||t.needsConfirmation===void 0)&&(a.string(t.description)||t.description===void 0)}e.is=i})(ne||(ne={}));var E;(function(e){function n(i){let r=i;return a.string(r)}e.is=n})(E||(E={}));var Ee;(function(e){function n(o,s,u){return{range:o,newText:s,annotationId:u}}e.replace=n;function i(o,s,u){return{range:{start:o,end:o},newText:s,annotationId:u}}e.insert=i;function r(o,s){return{range:o,newText:"",annotationId:s}}e.del=r;function t(o){let s=o;return w.is(s)&&(ne.is(s.annotationId)||E.is(s.annotationId))}e.is=t})(Ee||(Ee={}));var re;(function(e){function n(r,t){return{textDocument:r,edits:t}}e.create=n;function i(r){let t=r;return a.defined(t)&&ue.is(t.textDocument)&&Array.isArray(t.edits)}e.is=i})(re||(re={}));var ie;(function(e){function n(r,t,o){let s={kind:"create",uri:r};return t!==void 0&&(t.overwrite!==void 0||t.ignoreIfExists!==void 0)&&(s.options=t),o!==void 0&&(s.annotationId=o),s}e.create=n;function i(r){let t=r;return t&&t.kind==="create"&&a.string(t.uri)&&(t.options===void 0||(t.options.overwrite===void 0||a.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||a.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||E.is(t.annotationId))}e.is=i})(ie||(ie={}));var oe;(function(e){function n(r,t,o,s){let u={kind:"rename",oldUri:r,newUri:t};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(u.options=o),s!==void 0&&(u.annotationId=s),u}e.create=n;function i(r){let t=r;return t&&t.kind==="rename"&&a.string(t.oldUri)&&a.string(t.newUri)&&(t.options===void 0||(t.options.overwrite===void 0||a.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||a.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||E.is(t.annotationId))}e.is=i})(oe||(oe={}));var se;(function(e){function n(r,t,o){let s={kind:"delete",uri:r};return t!==void 0&&(t.recursive!==void 0||t.ignoreIfNotExists!==void 0)&&(s.options=t),o!==void 0&&(s.annotationId=o),s}e.create=n;function i(r){let t=r;return t&&t.kind==="delete"&&a.string(t.uri)&&(t.options===void 0||(t.options.recursive===void 0||a.boolean(t.options.recursive))&&(t.options.ignoreIfNotExists===void 0||a.boolean(t.options.ignoreIfNotExists)))&&(t.annotationId===void 0||E.is(t.annotationId))}e.is=i})(se||(se={}));var ae;(function(e){function n(i){let r=i;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(t=>a.string(t.kind)?ie.is(t)||oe.is(t)||se.is(t):re.is(t)))}e.is=n})(ae||(ae={}));var Re;(function(e){function n(r){return{uri:r}}e.create=n;function i(r){let t=r;return a.defined(t)&&a.string(t.uri)}e.is=i})(Re||(Re={}));var Pe;(function(e){function n(r,t){return{uri:r,version:t}}e.create=n;function i(r){let t=r;return a.defined(t)&&a.string(t.uri)&&a.integer(t.version)}e.is=i})(Pe||(Pe={}));var ue;(function(e){function n(r,t){return{uri:r,version:t}}e.create=n;function i(r){let t=r;return a.defined(t)&&a.string(t.uri)&&(t.version===null||a.integer(t.version))}e.is=i})(ue||(ue={}));var Le;(function(e){function n(r,t,o,s){return{uri:r,languageId:t,version:o,text:s}}e.create=n;function i(r){let t=r;return a.defined(t)&&a.string(t.uri)&&a.string(t.languageId)&&a.integer(t.version)&&a.string(t.text)}e.is=i})(Le||(Le={}));var de;(function(e){e.PlainText="plaintext",e.Markdown="markdown";function n(i){let r=i;return r===e.PlainText||r===e.Markdown}e.is=n})(de||(de={}));var L;(function(e){function n(i){let r=i;return a.objectLiteral(i)&&de.is(r.kind)&&a.string(r.value)}e.is=n})(L||(L={}));var m;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(m||(m={}));var Q;(function(e){e.PlainText=1,e.Snippet=2})(Q||(Q={}));var We;(function(e){e.Deprecated=1})(We||(We={}));var De;(function(e){function n(r,t,o){return{newText:r,insert:t,replace:o}}e.create=n;function i(r){let t=r;return t&&a.string(t.newText)&&h.is(t.insert)&&h.is(t.replace)}e.is=i})(De||(De={}));var Se;(function(e){e.asIs=1,e.adjustIndentation=2})(Se||(Se={}));var Fe;(function(e){function n(i){let r=i;return r&&(a.string(r.detail)||r.detail===void 0)&&(a.string(r.description)||r.description===void 0)}e.is=n})(Fe||(Fe={}));var Ae;(function(e){function n(i){return{label:i}}e.create=n})(Ae||(Ae={}));var Me;(function(e){function n(i,r){return{items:i||[],isIncomplete:!!r}}e.create=n})(Me||(Me={}));var G;(function(e){function n(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=n;function i(r){let t=r;return a.string(t)||a.objectLiteral(t)&&a.string(t.language)&&a.string(t.value)}e.is=i})(G||(G={}));var Ke;(function(e){function n(i){let r=i;return!!r&&a.objectLiteral(r)&&(L.is(r.contents)||G.is(r.contents)||a.typedArray(r.contents,G.is))&&(i.range===void 0||h.is(i.range))}e.is=n})(Ke||(Ke={}));var je;(function(e){function n(i,r){return r?{label:i,documentation:r}:{label:i}}e.create=n})(je||(je={}));var Ue;(function(e){function n(i,r,...t){let o={label:i};return a.defined(r)&&(o.documentation=r),a.defined(t)?o.parameters=t:o.parameters=[],o}e.create=n})(Ue||(Ue={}));var R;(function(e){e.Text=1,e.Read=2,e.Write=3})(R||(R={}));var He;(function(e){function n(i,r){let t={range:i};return a.number(r)&&(t.kind=r),t}e.create=n})(He||(He={}));var x;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(x||(x={}));var Ne;(function(e){e.Deprecated=1})(Ne||(Ne={}));var Oe;(function(e){function n(i,r,t,o,s){let u={name:i,kind:r,location:{uri:o,range:t}};return s&&(u.containerName=s),u}e.create=n})(Oe||(Oe={}));var Ve;(function(e){function n(i,r,t,o){return o!==void 0?{name:i,kind:r,location:{uri:t,range:o}}:{name:i,kind:r,location:{uri:t}}}e.create=n})(Ve||(Ve={}));var ze;(function(e){function n(r,t,o,s,u,g){let f={name:r,detail:t,kind:o,range:s,selectionRange:u};return g!==void 0&&(f.children=g),f}e.create=n;function i(r){let t=r;return t&&a.string(t.name)&&a.number(t.kind)&&h.is(t.range)&&h.is(t.selectionRange)&&(t.detail===void 0||a.string(t.detail))&&(t.deprecated===void 0||a.boolean(t.deprecated))&&(t.children===void 0||Array.isArray(t.children))&&(t.tags===void 0||Array.isArray(t.tags))}e.is=i})(ze||(ze={}));var Xe;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(Xe||(Xe={}));var J;(function(e){e.Invoked=1,e.Automatic=2})(J||(J={}));var $e;(function(e){function n(r,t,o){let s={diagnostics:r};return t!=null&&(s.only=t),o!=null&&(s.triggerKind=o),s}e.create=n;function i(r){let t=r;return a.defined(t)&&a.typedArray(t.diagnostics,q.is)&&(t.only===void 0||a.typedArray(t.only,a.string))&&(t.triggerKind===void 0||t.triggerKind===J.Invoked||t.triggerKind===J.Automatic)}e.is=i})($e||($e={}));var Be;(function(e){function n(r,t,o){let s={title:r},u=!0;return typeof t=="string"?(u=!1,s.kind=t):b.is(t)?s.command=t:s.edit=t,u&&o!==void 0&&(s.kind=o),s}e.create=n;function i(r){let t=r;return t&&a.string(t.title)&&(t.diagnostics===void 0||a.typedArray(t.diagnostics,q.is))&&(t.kind===void 0||a.string(t.kind))&&(t.edit!==void 0||t.command!==void 0)&&(t.command===void 0||b.is(t.command))&&(t.isPreferred===void 0||a.boolean(t.isPreferred))&&(t.edit===void 0||ae.is(t.edit))}e.is=i})(Be||(Be={}));var qe;(function(e){function n(r,t){let o={range:r};return a.defined(t)&&(o.data=t),o}e.create=n;function i(r){let t=r;return a.defined(t)&&h.is(t.range)&&(a.undefined(t.command)||b.is(t.command))}e.is=i})(qe||(qe={}));var Qe;(function(e){function n(r,t){return{tabSize:r,insertSpaces:t}}e.create=n;function i(r){let t=r;return a.defined(t)&&a.uinteger(t.tabSize)&&a.boolean(t.insertSpaces)}e.is=i})(Qe||(Qe={}));var Ge;(function(e){function n(r,t,o){return{range:r,target:t,data:o}}e.create=n;function i(r){let t=r;return a.defined(t)&&h.is(t.range)&&(a.undefined(t.target)||a.string(t.target))}e.is=i})(Ge||(Ge={}));var Je;(function(e){function n(r,t){return{range:r,parent:t}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&h.is(t.range)&&(t.parent===void 0||e.is(t.parent))}e.is=i})(Je||(Je={}));var Ye;(function(e){e.namespace="namespace",e.type="type",e.class="class",e.enum="enum",e.interface="interface",e.struct="struct",e.typeParameter="typeParameter",e.parameter="parameter",e.variable="variable",e.property="property",e.enumMember="enumMember",e.event="event",e.function="function",e.method="method",e.macro="macro",e.keyword="keyword",e.modifier="modifier",e.comment="comment",e.string="string",e.number="number",e.regexp="regexp",e.operator="operator",e.decorator="decorator"})(Ye||(Ye={}));var Ze;(function(e){e.declaration="declaration",e.definition="definition",e.readonly="readonly",e.static="static",e.deprecated="deprecated",e.abstract="abstract",e.async="async",e.modification="modification",e.documentation="documentation",e.defaultLibrary="defaultLibrary"})(Ze||(Ze={}));var et;(function(e){function n(i){let r=i;return a.objectLiteral(r)&&(r.resultId===void 0||typeof r.resultId=="string")&&Array.isArray(r.data)&&(r.data.length===0||typeof r.data[0]=="number")}e.is=n})(et||(et={}));var tt;(function(e){function n(r,t){return{range:r,text:t}}e.create=n;function i(r){let t=r;return t!=null&&h.is(t.range)&&a.string(t.text)}e.is=i})(tt||(tt={}));var nt;(function(e){function n(r,t,o){return{range:r,variableName:t,caseSensitiveLookup:o}}e.create=n;function i(r){let t=r;return t!=null&&h.is(t.range)&&a.boolean(t.caseSensitiveLookup)&&(a.string(t.variableName)||t.variableName===void 0)}e.is=i})(nt||(nt={}));var rt;(function(e){function n(r,t){return{range:r,expression:t}}e.create=n;function i(r){let t=r;return t!=null&&h.is(t.range)&&(a.string(t.expression)||t.expression===void 0)}e.is=i})(rt||(rt={}));var it;(function(e){function n(r,t){return{frameId:r,stoppedLocation:t}}e.create=n;function i(r){let t=r;return a.defined(t)&&h.is(r.stoppedLocation)}e.is=i})(it||(it={}));var ce;(function(e){e.Type=1,e.Parameter=2;function n(i){return i===1||i===2}e.is=n})(ce||(ce={}));var le;(function(e){function n(r){return{value:r}}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&(t.tooltip===void 0||a.string(t.tooltip)||L.is(t.tooltip))&&(t.location===void 0||B.is(t.location))&&(t.command===void 0||b.is(t.command))}e.is=i})(le||(le={}));var ot;(function(e){function n(r,t,o){let s={position:r,label:t};return o!==void 0&&(s.kind=o),s}e.create=n;function i(r){let t=r;return a.objectLiteral(t)&&I.is(t.position)&&(a.string(t.label)||a.typedArray(t.label,le.is))&&(t.kind===void 0||ce.is(t.kind))&&t.textEdits===void 0||a.typedArray(t.textEdits,w.is)&&(t.tooltip===void 0||a.string(t.tooltip)||L.is(t.tooltip))&&(t.paddingLeft===void 0||a.boolean(t.paddingLeft))&&(t.paddingRight===void 0||a.boolean(t.paddingRight))}e.is=i})(ot||(ot={}));var st;(function(e){function n(i){return{kind:"snippet",value:i}}e.createSnippet=n})(st||(st={}));var at;(function(e){function n(i,r,t,o){return{insertText:i,filterText:r,range:t,command:o}}e.create=n})(at||(at={}));var ut;(function(e){function n(i){return{items:i}}e.create=n})(ut||(ut={}));var dt;(function(e){e.Invoked=0,e.Automatic=1})(dt||(dt={}));var ct;(function(e){function n(i,r){return{range:i,text:r}}e.create=n})(ct||(ct={}));var lt;(function(e){function n(i,r){return{triggerKind:i,selectedCompletionInfo:r}}e.create=n})(lt||(lt={}));var gt;(function(e){function n(i){let r=i;return a.objectLiteral(r)&&Z.is(r.uri)&&a.string(r.name)}e.is=n})(gt||(gt={}));var ft;(function(e){function n(o,s,u,g){return new ge(o,s,u,g)}e.create=n;function i(o){let s=o;return!!(a.defined(s)&&a.string(s.uri)&&(a.undefined(s.languageId)||a.string(s.languageId))&&a.uinteger(s.lineCount)&&a.func(s.getText)&&a.func(s.positionAt)&&a.func(s.offsetAt))}e.is=i;function r(o,s){let u=o.getText(),g=t(s,(l,p)=>{let v=l.range.start.line-p.range.start.line;return v===0?l.range.start.character-p.range.start.character:v}),f=u.length;for(let l=g.length-1;l>=0;l--){let p=g[l],v=o.offsetAt(p.range.start),c=o.offsetAt(p.range.end);if(c<=f)u=u.substring(0,v)+p.newText+u.substring(c,u.length);else throw new Error("Overlapping edit");f=v}return u}e.applyEdits=r;function t(o,s){if(o.length<=1)return o;let u=o.length/2|0,g=o.slice(0,u),f=o.slice(u);t(g,s),t(f,s);let l=0,p=0,v=0;for(;l<g.length&&p<f.length;)s(g[l],f[p])<=0?o[v++]=g[l++]:o[v++]=f[p++];for(;l<g.length;)o[v++]=g[l++];for(;p<f.length;)o[v++]=f[p++];return o}})(ft||(ft={}));var ge=class{constructor(n,i,r,t){this._uri=n,this._languageId=i,this._version=r,this._content=t,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(n){if(n){let i=this.offsetAt(n.start),r=this.offsetAt(n.end);return this._content.substring(i,r)}return this._content}update(n,i){this._content=n.text,this._version=i,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let n=[],i=this._content,r=!0;for(let t=0;t<i.length;t++){r&&(n.push(t),r=!1);let o=i.charAt(t);r=o==="\r"||o===`
`,o==="\r"&&t+1<i.length&&i.charAt(t+1)===`
`&&t++}r&&i.length>0&&n.push(i.length),this._lineOffsets=n}return this._lineOffsets}positionAt(n){n=Math.max(Math.min(n,this._content.length),0);let i=this.getLineOffsets(),r=0,t=i.length;if(t===0)return I.create(0,n);for(;r<t;){let s=Math.floor((r+t)/2);i[s]>n?t=s:r=s+1}let o=r-1;return I.create(o,n-i[o])}offsetAt(n){let i=this.getLineOffsets();if(n.line>=i.length)return this._content.length;if(n.line<0)return 0;let r=i[n.line],t=n.line+1<i.length?i[n.line+1]:this._content.length;return Math.max(Math.min(r+n.character,t),r)}get lineCount(){return this.getLineOffsets().length}},a;(function(e){let n=Object.prototype.toString;function i(c){return typeof c<"u"}e.defined=i;function r(c){return typeof c>"u"}e.undefined=r;function t(c){return c===!0||c===!1}e.boolean=t;function o(c){return n.call(c)==="[object String]"}e.string=o;function s(c){return n.call(c)==="[object Number]"}e.number=s;function u(c,Y,kt){return n.call(c)==="[object Number]"&&Y<=c&&c<=kt}e.numberRange=u;function g(c){return n.call(c)==="[object Number]"&&-2147483648<=c&&c<=2147483647}e.integer=g;function f(c){return n.call(c)==="[object Number]"&&0<=c&&c<=2147483647}e.uinteger=f;function l(c){return n.call(c)==="[object Function]"}e.func=l;function p(c){return c!==null&&typeof c=="object"}e.objectLiteral=p;function v(c,Y){return Array.isArray(c)&&c.every(Y)}e.typedArray=v})(a||(a={}));var W=class{constructor(n,i,r){this._languageId=n;this._worker=i;this._disposables=[];this._listener=Object.create(null);let t=s=>{let u=s.getLanguageId();if(u!==this._languageId)return;let g;this._listener[s.uri.toString()]=s.onDidChangeContent(()=>{window.clearTimeout(g),g=window.setTimeout(()=>this._doValidate(s.uri,u),500)}),this._doValidate(s.uri,u)},o=s=>{d.editor.setModelMarkers(s,this._languageId,[]);let u=s.uri.toString(),g=this._listener[u];g&&(g.dispose(),delete this._listener[u])};this._disposables.push(d.editor.onDidCreateModel(t)),this._disposables.push(d.editor.onWillDisposeModel(o)),this._disposables.push(d.editor.onDidChangeModelLanguage(s=>{o(s.model),t(s.model)})),this._disposables.push(r(s=>{d.editor.getModels().forEach(u=>{u.getLanguageId()===this._languageId&&(o(u),t(u))})})),this._disposables.push({dispose:()=>{d.editor.getModels().forEach(o);for(let s in this._listener)this._listener[s].dispose()}}),d.editor.getModels().forEach(t)}dispose(){this._disposables.forEach(n=>n&&n.dispose()),this._disposables.length=0}_doValidate(n,i){this._worker(n).then(r=>r.doValidation(n.toString())).then(r=>{let t=r.map(s=>At(n,s)),o=d.editor.getModel(n);o&&o.getLanguageId()===i&&d.editor.setModelMarkers(o,i,t)}).then(void 0,r=>{console.error(r)})}};function Ft(e){switch(e){case T.Error:return d.MarkerSeverity.Error;case T.Warning:return d.MarkerSeverity.Warning;case T.Information:return d.MarkerSeverity.Info;case T.Hint:return d.MarkerSeverity.Hint;default:return d.MarkerSeverity.Info}}function At(e,n){let i=typeof n.code=="number"?String(n.code):n.code;return{severity:Ft(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:i,source:n.source}}var D=class{constructor(n,i){this._worker=n;this._triggerCharacters=i}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(n,i,r,t){let o=n.uri;return this._worker(o).then(s=>s.doComplete(o.toString(),k(i))).then(s=>{if(!s)return;let u=n.getWordUntilPosition(i),g=new d.Range(i.lineNumber,u.startColumn,i.lineNumber,u.endColumn),f=s.items.map(l=>{let p={label:l.label,insertText:l.insertText||l.label,sortText:l.sortText,filterText:l.filterText,documentation:l.documentation,detail:l.detail,command:jt(l.command),range:g,kind:Kt(l.kind)};return l.textEdit&&(Mt(l.textEdit)?p.range={insert:y(l.textEdit.insert),replace:y(l.textEdit.replace)}:p.range=y(l.textEdit.range),p.insertText=l.textEdit.newText),l.additionalTextEdits&&(p.additionalTextEdits=l.additionalTextEdits.map(P)),l.insertTextFormat===Q.Snippet&&(p.insertTextRules=d.languages.CompletionItemInsertTextRule.InsertAsSnippet),p});return{isIncomplete:s.isIncomplete,suggestions:f}})}};function k(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function pe(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function y(e){if(e)return new d.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function Mt(e){return typeof e.insert<"u"&&typeof e.replace<"u"}function Kt(e){let n=d.languages.CompletionItemKind;switch(e){case m.Text:return n.Text;case m.Method:return n.Method;case m.Function:return n.Function;case m.Constructor:return n.Constructor;case m.Field:return n.Field;case m.Variable:return n.Variable;case m.Class:return n.Class;case m.Interface:return n.Interface;case m.Module:return n.Module;case m.Property:return n.Property;case m.Unit:return n.Unit;case m.Value:return n.Value;case m.Enum:return n.Enum;case m.Keyword:return n.Keyword;case m.Snippet:return n.Snippet;case m.Color:return n.Color;case m.File:return n.File;case m.Reference:return n.Reference}return n.Property}function P(e){if(e)return{range:y(e.range),text:e.newText}}function jt(e){return e&&e.command==="editor.action.triggerSuggest"?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var S=class{constructor(n){this._worker=n}provideHover(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.doHover(t.toString(),k(i))).then(o=>{if(o)return{range:y(o.range),contents:Ht(o.contents)}})}};function Ut(e){return e&&typeof e=="object"&&typeof e.kind=="string"}function pt(e){return typeof e=="string"?{value:e}:Ut(e)?e.kind==="plaintext"?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+`
`+e.value+"\n```\n"}}function Ht(e){if(e)return Array.isArray(e)?e.map(pt):[pt(e)]}var F=class{constructor(n){this._worker=n}provideDocumentHighlights(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.findDocumentHighlights(t.toString(),k(i))).then(o=>{if(o)return o.map(s=>({range:y(s.range),kind:Nt(s.kind)}))})}};function Nt(e){switch(e){case R.Read:return d.languages.DocumentHighlightKind.Read;case R.Write:return d.languages.DocumentHighlightKind.Write;case R.Text:return d.languages.DocumentHighlightKind.Text}return d.languages.DocumentHighlightKind.Text}var A=class{constructor(n){this._worker=n}provideDefinition(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.findDefinition(t.toString(),k(i))).then(o=>{if(o)return[ht(o)]})}};function ht(e){return{uri:d.Uri.parse(e.uri),range:y(e.range)}}var M=class{constructor(n){this._worker=n}provideReferences(n,i,r,t){let o=n.uri;return this._worker(o).then(s=>s.findReferences(o.toString(),k(i))).then(s=>{if(s)return s.map(ht)})}},K=class{constructor(n){this._worker=n}provideRenameEdits(n,i,r,t){let o=n.uri;return this._worker(o).then(s=>s.doRename(o.toString(),k(i),r)).then(s=>Ot(s))}};function Ot(e){if(!e||!e.changes)return;let n=[];for(let i in e.changes){let r=d.Uri.parse(i);for(let t of e.changes[i])n.push({resource:r,versionId:void 0,textEdit:{range:y(t.range),text:t.newText}})}return{edits:n}}var j=class{constructor(n){this._worker=n}provideDocumentSymbols(n,i){let r=n.uri;return this._worker(r).then(t=>t.findDocumentSymbols(r.toString())).then(t=>{if(t)return t.map(o=>Vt(o)?mt(o):{name:o.name,detail:"",containerName:o.containerName,kind:xt(o.kind),range:y(o.location.range),selectionRange:y(o.location.range),tags:[]})})}};function Vt(e){return"children"in e}function mt(e){return{name:e.name,detail:e.detail??"",kind:xt(e.kind),range:y(e.range),selectionRange:y(e.selectionRange),tags:e.tags??[],children:(e.children??[]).map(n=>mt(n))}}function xt(e){let n=d.languages.SymbolKind;switch(e){case x.File:return n.File;case x.Module:return n.Module;case x.Namespace:return n.Namespace;case x.Package:return n.Package;case x.Class:return n.Class;case x.Method:return n.Method;case x.Property:return n.Property;case x.Field:return n.Field;case x.Constructor:return n.Constructor;case x.Enum:return n.Enum;case x.Interface:return n.Interface;case x.Function:return n.Function;case x.Variable:return n.Variable;case x.Constant:return n.Constant;case x.String:return n.String;case x.Number:return n.Number;case x.Boolean:return n.Boolean;case x.Array:return n.Array}return n.Function}var fe=class{constructor(n){this._worker=n}provideLinks(n,i){let r=n.uri;return this._worker(r).then(t=>t.findDocumentLinks(r.toString())).then(t=>{if(t)return{links:t.map(o=>({range:y(o.range),url:o.target}))}})}},U=class{constructor(n){this._worker=n}provideDocumentFormattingEdits(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.format(t.toString(),null,yt(i)).then(s=>{if(!(!s||s.length===0))return s.map(P)}))}},H=class{constructor(n){this._worker=n;this.canFormatMultipleRanges=!1}provideDocumentRangeFormattingEdits(n,i,r,t){let o=n.uri;return this._worker(o).then(s=>s.format(o.toString(),pe(i),yt(r)).then(u=>{if(!(!u||u.length===0))return u.map(P)}))}};function yt(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var N=class{constructor(n){this._worker=n}provideDocumentColors(n,i){let r=n.uri;return this._worker(r).then(t=>t.findDocumentColors(r.toString())).then(t=>{if(t)return t.map(o=>({color:o.color,range:y(o.range)}))})}provideColorPresentations(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.getColorPresentations(t.toString(),i.color,pe(i.range))).then(o=>{if(o)return o.map(s=>{let u={label:s.label};return s.textEdit&&(u.textEdit=P(s.textEdit)),s.additionalTextEdits&&(u.additionalTextEdits=s.additionalTextEdits.map(P)),u})})}},O=class{constructor(n){this._worker=n}provideFoldingRanges(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.getFoldingRanges(t.toString(),i)).then(o=>{if(o)return o.map(s=>{let u={start:s.startLine+1,end:s.endLine+1};return typeof s.kind<"u"&&(u.kind=zt(s.kind)),u})})}};function zt(e){switch(e){case C.Comment:return d.languages.FoldingRangeKind.Comment;case C.Imports:return d.languages.FoldingRangeKind.Imports;case C.Region:return d.languages.FoldingRangeKind.Region}}var V=class{constructor(n){this._worker=n}provideSelectionRanges(n,i,r){let t=n.uri;return this._worker(t).then(o=>o.getSelectionRanges(t.toString(),i.map(k))).then(o=>{if(o)return o.map(s=>{let u=[];for(;s;)u.push({range:y(s.range)}),s=s.parent;return u})})}};function $t(e){let n=[],i=[],r=new _(e);n.push(r);let t=(...s)=>r.getLanguageServiceWorker(...s);function o(){let{languageId:s,modeConfiguration:u}=e;It(i),u.completionItems&&i.push(d.languages.registerCompletionItemProvider(s,new D(t,["/","-",":"]))),u.hovers&&i.push(d.languages.registerHoverProvider(s,new S(t))),u.documentHighlights&&i.push(d.languages.registerDocumentHighlightProvider(s,new F(t))),u.definitions&&i.push(d.languages.registerDefinitionProvider(s,new A(t))),u.references&&i.push(d.languages.registerReferenceProvider(s,new M(t))),u.documentSymbols&&i.push(d.languages.registerDocumentSymbolProvider(s,new j(t))),u.rename&&i.push(d.languages.registerRenameProvider(s,new K(t))),u.colors&&i.push(d.languages.registerColorProvider(s,new N(t))),u.foldingRanges&&i.push(d.languages.registerFoldingRangeProvider(s,new O(t))),u.diagnostics&&i.push(new W(s,t,e.onDidChange)),u.selectionRanges&&i.push(d.languages.registerSelectionRangeProvider(s,new V(t))),u.documentFormattingEdits&&i.push(d.languages.registerDocumentFormattingEditProvider(s,new U(t))),u.documentRangeFormattingEdits&&i.push(d.languages.registerDocumentRangeFormattingEditProvider(s,new H(t)))}return o(),n.push(vt(i)),vt(n)}function vt(e){return{dispose:()=>It(e)}}function It(e){for(;e.length;)e.pop().dispose()}return Lt(Bt);})();
return moduleExports;
});
