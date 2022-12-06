import{s as i,o as a,c as e,w as t,a as d,b as s,t as o,d as l,r as n,F as f,e as c,f as u,i as m,g as r,p}from"./index.6293db25.js";import{_ as v}from"./my-video-card.696f9e15.js";import{r as g}from"./uni-app.es.232ee89d.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";var _=y({data(){return{apis:{getVideoInfo:()=>{let i={url:"https://api.bilibili.com/x/web-interface/view/detail",mapQuery:{bvid:this.bvid},mapCookies:{SESSDATA:this.loginUser.SESSDATA||""}};return this.PB.apiRoute("/api/bili/base/myHttpGet",i,"POST")}},loginUser:{},aid:null,bvid:null,videoInfo:null,videoPageList:[]}},onLoad(i){this.aid=i.aid,this.bvid=i.bvid,this.init()},onShow(){i().globalData.player&&i().globalData.player.destroyIt()},computed:{loadImg(){return i=>this.PB.loadImg(i)},shortNumForBoFang:()=>i=>i<1e4?i:(i/1e4).toFixed(1)+"万"},methods:{init(){this.loginUser=this.PB.getLoginUser(),this.PB.ajax(this.apis.getVideoInfo(),{cacheKey:this.bvid+"_getVideoInfo",cacheTime:10}).then((i=>{this.videoInfo=i.data,console.log("videoInfo:",this.videoInfo),this.getVideoPages(),console.log("videoPageList:",this.videoPageList),this.$nextTick((()=>{document.querySelectorAll(".my-cid-item")[0].focus()}),1)}))},getVideoPages(){if(this.videoInfo.View.season_id){let i=this.videoInfo.View.ugc_season.sections.flatMap((i=>i.episodes.map((i=>({aid:i.aid,bvid:i.bvid,cid:i.page.cid,title:i.page.part||i.title})))));i=i.sort(((i,a)=>a.cid-i.cid)),this.videoPageList=i.slice(0,50)}else this.videoPageList=this.videoInfo.View.pages.map((i=>({aid:this.aid,bvid:this.bvid,cid:i.cid,title:i.part||i.page})))},openUp(i){this.PB.navigateTo(`/pages/main/up/index?mid=${i}`)},openTag(i){},openDetail(i){this.PB.navigateTo(`/pages/main/video/detail?aid=${i.aid}&bvid=${i.bvid}`)},play(i){if(this.PB.isAndroid()){let a={aid:i.aid,cid:i.cid,bvid:i.bvid,title:this.videoInfo.View.title};AndroidMain.openVideo(JSON.stringify(a))}else this.PB.navigateTo(`/pages/main/video/play?aid=${i.aid}&cid=${i.cid}&bvid=${i.bvid}`)}}},[["render",function(i,y,_,b,h,I){const w=u,P=m,V=r,k=g(p("my-video-card"),v);return h.videoInfo?(a(),e(P,{key:0},{default:t((()=>[d(P,{class:"my-wrap"},{default:t((()=>[d(P,{class:"my-aid-wrap"},{default:t((()=>[d(P,{class:"my-aid-photo-banner"},{default:t((()=>[d(w,{class:"my-aid-photo-img",mode:"aspectFill",src:I.loadImg(h.videoInfo.View.pic)},null,8,["src"])])),_:1}),d(P,{class:"my-aid-info-banner"},{default:t((()=>[d(P,{class:"my-aid-info-title-banner"},{default:t((()=>[s(o(h.videoInfo.View.title),1)])),_:1}),d(P,{class:"my-aid-info-upinfo-banner"},{default:t((()=>[d(P,{class:"my-aid-info-upinfo-col"},{default:t((()=>[d(V,{class:"my-tip"},{default:t((()=>[s("UP主：")])),_:1}),d(V,{class:"my-aid-info-upinfo-name",onClick:y[0]||(y[0]=i=>I.openUp(h.videoInfo.View.owner.mid))},{default:t((()=>[s(o(h.videoInfo.View.owner.name),1)])),_:1})])),_:1}),d(P,{class:"my-aid-info-upinfo-col"},{default:t((()=>[d(V,{class:"my-tip"},{default:t((()=>[s("投稿时间：")])),_:1}),d(V,{class:"my-aid-info-upinfo-name"},{default:t((()=>[s(o(new Date(1e3*h.videoInfo.View.pubdate).toJSON()),1)])),_:1})])),_:1})])),_:1}),d(P,{class:"my-aid-info-uv-banner"},{default:t((()=>[d(P,{class:"my-aid-info-uv-col"},{default:t((()=>[d(V,{class:"my-tip"},{default:t((()=>[s("播放：")])),_:1}),d(V,{class:"my-aid-info-uv-bofang"},{default:t((()=>[s(o(I.shortNumForBoFang(h.videoInfo.View.stat.view)),1)])),_:1})])),_:1}),d(P,{class:"my-aid-info-uv-col"},{default:t((()=>[d(V,{class:"my-tip"},{default:t((()=>[s("弹幕：")])),_:1}),d(V,{class:"my-aid-info-uv-danmu"},{default:t((()=>[s(o(I.shortNumForBoFang(h.videoInfo.View.stat.danmaku)),1)])),_:1})])),_:1})])),_:1}),d(P,{class:"my-aid-info-tags-banner"},{default:t((()=>[d(P,null,{default:t((()=>[d(V,{class:"my-tip"},{default:t((()=>[s("标签：")])),_:1})])),_:1}),d(P,{class:"my-aid-info-tags-content"},{default:t((()=>[(a(!0),l(f,null,n(h.videoInfo.Tags,(i=>(a(),e(P,{key:i.tag_id,tabindex:"0",onClick:a=>I.openTag(i),class:"my-aid-info-tags-item"},{default:t((()=>[s(o(i.tag_name),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})])),_:1}),d(P,{class:"my-cid-wrap g-tabindex-noborder"},{default:t((()=>[d(P,null,{default:t((()=>[d(V,null,{default:t((()=>[s("分集")])),_:1})])),_:1}),d(P,{class:"my-cid-banner g-tabindex-noborder"},{default:t((()=>[(a(!0),l(f,null,n(h.videoPageList,((i,l)=>(a(),e(P,{class:"my-cid-item",tabindex:l+1,onClick:a=>I.play(i)},{default:t((()=>[d(V,{class:"my-cid-title"},{default:t((()=>[s(o(i.title),1)])),_:2},1024)])),_:2},1032,["tabindex","onClick"])))),256))])),_:1})])),_:1}),d(P,{class:"my-relevant-wrap"},{default:t((()=>[d(P,{class:"my-relevant-tip"},{default:t((()=>[d(V,null,{default:t((()=>[s("相关的")])),_:1})])),_:1}),d(P,{class:"my-relevant-banner g-tabindex-noborder","aria-hidden":"true",tabindex:"-1"},{default:t((()=>[(a(!0),l(f,null,n(h.videoInfo.Related,(i=>(a(),e(P,{key:i.aid,onClick:a=>I.openDetail(i),class:"my-relevant-item"},{default:t((()=>[d(k,{"img-src":i.pic,title:i.title,"up-name":i.owner.name,"stat-play":i.stat.view,"stat-danmaku":i.stat.danmaku},null,8,["img-src","title","up-name","stat-play","stat-danmaku"])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})])),_:1})):c("",!0)}],["__scopeId","data-v-4e260472"]]);export{_ as default};
