(function () {
  const SLIDE_W = 13004800;
  const SLIDE_H = 7315200;

  const slides = [
    {
      background: "#ffffff",
      elements: [
        { type: "image", x: 0, y: 1224282, w: 13011150, h: 6090918, src: "./media/image3.jpeg" },
        { type: "line", x: 19_050, y: 3673938, w: 13_011_150, h: 0, color: "rgba(255,255,255,0.42)", stroke: 12700 },
        { type: "line", x: 19_050, y: 6093063, w: 13_011_150, h: 0, color: "rgba(255,255,255,0.42)", stroke: 12700 },
        { type: "line", x: 1_344_280, y: 1_252_857, w: 0, h: 6_336_810, color: "rgba(255,255,255,0.42)", stroke: 12700 },
        { type: "line", x: 7_754_760, y: 1_252_857, w: 0, h: 6_336_810, color: "rgba(255,255,255,0.42)", stroke: 12700 },
        { type: "line", x: 15_384_809, y: 1_252_857, w: 0, h: 6_336_810, color: "rgba(255,255,255,0.42)", stroke: 12700 },
        { type: "image", x: 11_366_054, y: 503_204, w: 153_158, h: 153_158, src: "./media/image1.png" },
        { type: "text", x: 4_868_195, y: 588_924, w: 736_921, h: 198_120, align: "left", fontSize: 1200, fontFamily: "思源宋体 Bold, Songti SC, serif", fontWeight: 700, color: "#000000", html: "<p>首页</p>" },
        { type: "text", x: 6_505_575, y: 560_733, w: 736_921, h: 198_120, align: "left", fontSize: 1200, fontFamily: "思源宋体, Songti SC, serif", color: "#000000", html: "<p>代表作品</p>" },
        { type: "text", x: 8_462_146, y: 560_733, w: 736_921, h: 198_120, align: "left", fontSize: 1200, fontFamily: "思源宋体, Songti SC, serif", color: "#000000", underline: true, html: "<p>联络</p>" },
        { type: "text", x: 1_247_651, y: 1_720_000, w: 4_800_061, h: 3_100_000, align: "left", fontSize: 5600, fontFamily: "Microsoft YaHei, 微软雅黑, sans-serif", color: "#ffffff", letterSpacing: 120, lineHeightPts: 6200, html: "<p>欢迎来到</p><p>顾家龙</p><p>作品分享</p>" },
        { type: "text", x: 3_633_279, y: 6_067_701, w: 4_828_866, h: 724_062, align: "center", fontSize: 4487, fontFamily: "思源黑体, PingFang SC, sans-serif", color: "#ffffff", lineHeightPts: 5833, html: "<p>2026</p>" },
        { type: "text", x: 9_865_446, y: 5_164_000, w: 1_634_676, h: 2_579_090, align: "left", fontSize: 2547, fontFamily: "Montserrat Light, Arial, sans-serif", color: "#ffffff", lineHeightPts: 3311, rotate: -90, html: "<p>WELCOME TO MY PERSONAL WORK WEBSITE</p>" },
        { type: "text", x: 1_004_396, y: 259_115, w: 2_177_504, h: 737_345, align: "left", html: "<p><span style='font-size:20pt;font-weight:600;color:#000'>顾家龙作品网站</span></p><p><span style='font-size:14pt;font-weight:600;color:#000'>达人合作&amp;信息流案例</span></p>" }
      ]
    },
    {
      background: "#ffffff",
      elements: [
        { type: "image", x: 7_557_385, y: 1_001_770, w: 4_655_365, h: 5_449_091, src: "./media/image4.jpeg" },
        { type: "text", x: 917_746, y: 520_951, w: 3_248_483, h: 601_980, align: "left", fontSize: 3335, fontFamily: "字由点字典黑 Bold, PingFang SC, sans-serif", color: "#000000", html: "<p>达人营销成就</p>" },
        { type: "text", x: 10_334_425, y: 628_383, w: 1_945_205, h: 456_448, align: "right", fontSize: 2000, fontFamily: "字由点字典黑 Light, PingFang SC, sans-serif", color: "#000000", html: "<p>最近经历</p>" },
        { type: "text", x: 917_746, y: 1_720_000, w: 6_150_000, h: 5_300_000, align: "left", html: "<p><span style='font-size:16pt;font-weight:700'>从 0 到 1</span><span style='font-size:15pt;font-weight:300'> 开拓 TikTok Spark Ads &amp; IG FB 达人投放 </span><span style='font-size:16pt;font-weight:300'>增加新链路：</span></p><p><span style='font-size:14pt;font-weight:300'>主导 3 人协作团队；覆盖达人拓展→脚本/创意沟通→发布定稿→</span></p><p><span style='font-size:14pt;font-weight:300'>数据反馈→复盘迭代全流程。</span></p><p><span style='font-size:14pt;font-weight:300'>2025 Q4（10–12月）达人广告+素材投放累计消耗 </span><span style='font-size:14pt;font-weight:700'>$720K</span><span style='font-size:14pt;font-weight:300'>，</span></p><p><span style='font-size:14pt;font-weight:300'>支撑持续放量与投放稳定性。</span></p><p><span style='font-size:14pt;font-weight:300'>爆款规模化结果：</span></p><p><span style='font-size:14pt;font-weight:300'>达人 IG 共创</span><span style='font-size:14pt;font-weight:700'>千万级</span><span style='font-size:14pt;font-weight:300'>播放爆款案例：</span><span style='font-size:14pt;font-weight:700'>20M / 15M / 13M</span><span style='font-size:14pt;font-weight:300'> 播放；</span></p><p><span style='font-size:14pt;font-weight:300'>达人共创三百万级+播放爆款案例：IG 5 个+、TikTok 8 个+</span></p><p><span style='font-size:14pt;font-weight:300'>创意落地专家：搭建“创意测试→素材标签→复用放量”机制，</span></p><p><span style='font-size:14pt;font-weight:300'>沉淀软植入高潜素材结构并形成可复用脚本模板；</span></p><p><span style='font-size:14pt;font-weight:300'>同口径对比 </span><span style='font-size:14pt;font-weight:700'>ROI</span><span style='font-size:14pt;font-weight:300'> 相对提升约 5%，</span><span style='font-size:14pt;font-weight:700'>CPI</span><span style='font-size:14pt;font-weight:300'> 同步优化且更稳定，</span></p><p><span style='font-size:14pt;font-weight:300'>支撑持续放量与创意迭代。</span></p>" }
      ]
    },
    {
      background: "#447A89",
      elements: [
        { type: "image", x: 4_517_678, y: 690_262, w: 7_741_302, h: 2_196_594, src: "./media/image9.png" },
        { type: "image", x: 6_505_575, y: 3_397_606, w: 1_353_312, h: 2_926_080, src: "./media/image5.jpeg" },
        { type: "image", x: 7_858_887, y: 3_397_606, w: 1_345_997, h: 2_926_080, src: "./media/image6.jpeg" },
        { type: "image", x: 9_204_884, y: 3_397_606, w: 1_353_312, h: 2_926_080, src: "./media/image7.jpeg" },
        { type: "image", x: 10_558_196, y: 3_397_606, w: 1_700_784, h: 2_926_080, src: "./media/image8.jpeg" },
        { type: "text", x: 2_020_000, y: 2_600_000, w: 4_500_000, h: 900_000, align: "left", fontSize: 3600, fontFamily: "Microsoft YaHei, 微软雅黑, sans-serif", fontWeight: 700, color: "#ffffff", html: "<p>达人爆款</p>" },
        { type: "text", x: 2_000_000, y: 3_700_000, w: 4_700_000, h: 900_000, align: "left", fontSize: 2800, fontFamily: "Microsoft YaHei, 微软雅黑, sans-serif", fontWeight: 600, color: "#ffffff", html: "<p>三个千万级</p>" },
        { type: "text", x: 2_000_000, y: 4_700_000, w: 5_200_000, h: 900_000, align: "left", fontSize: 2800, fontFamily: "Microsoft YaHei, 微软雅黑, sans-serif", fontWeight: 600, color: "#ffffff", html: "<p>十五个百万级</p>" }
      ]
    },
    {
      background: "#447A89",
      elements: [
        { type: "video", x: 7537896, y: 911873, w: 1473530, h: 2619608, poster: "./media/image10.jpeg", src: "./media/VAHC2uQVsAM.mp4" },
        { type: "video", x: 2444847, y: 859718, w: 1516987, h: 2696866, poster: "./media/image11.jpeg", src: "./media/VAHC2mHkWwE.mp4" },
        { type: "video", x: 5826575, y: 886769, w: 1501771, h: 2669816, poster: "./media/image12.jpeg", src: "./media/VAHC2rVBPIU.mp4" },
        { type: "video", x: 774978, y: 859718, w: 1516987, h: 2696866, poster: "./media/image13.jpeg", src: "./media/VAHC2nquILw.mp4" },
        { type: "video", x: 774978, y: 3657600, w: 1516987, h: 2696866, poster: "./media/image14.jpeg", src: "./media/VAHC2mG9EF8.mp4" },
        { type: "video", x: 4114234, y: 886769, w: 1501771, h: 2669816, poster: "./media/image15.jpeg", src: "./media/VAHC2iWhrvI.mp4" },
        { type: "video", x: 5826575, y: 3742877, w: 1501771, h: 2669816, poster: "./media/image16.jpeg", src: "./media/VAHC2up3wSI.mp4" },
        { type: "video", x: 7537896, y: 3760261, w: 1491993, h: 2652432, poster: "./media/image17.jpeg", src: "./media/VAHC2o5N8wg.mp4" },
        { type: "video", x: 2444847, y: 3657600, w: 1512709, h: 2689260, poster: "./media/image18.jpeg", src: "./media/VAHC2osTfn0.mp4" },
        { type: "video", x: 4114234, y: 3742877, w: 1464740, h: 2603983, poster: "./media/image19.jpeg", src: "./media/VAHC2uttYbM.mp4" },
        { type: "line", x: 9426972, y: 859974, w: 110436, h: 5723706, color: "#ffffff", stroke: 28575 },
        { type: "text", x: 9951744, y: 2780000, w: 2541538, h: 1450000, align: "center", fontSize: 2700, fontFamily: "Microsoft YaHei, 微软雅黑, sans-serif", color: "#ffffff", lineHeightPts: 3600, html: "<p>达人合作案例</p><p>作品一览</p>" }
      ]
    },
    {
      background: "#ffffff",
      elements: [
        { type: "image", x: 0, y: 0, w: 13011150, h: 7315200, src: "./media/image20.jpeg" }
      ]
    },
    {
      background: "#ffffff",
      elements: [
        { type: "video", x: 552077, y: 1335126, w: 2446592, h: 4349496, poster: "./media/image21.jpeg", src: "./media/VAHCr3E8sMQ.mp4" },
        { type: "video", x: 3246346, y: 1353053, w: 2441550, h: 4340533, poster: "./media/image22.jpeg", src: "./media/VAHCr51VWQ4.mp4" },
        { type: "video", x: 5935572, y: 1353053, w: 2436508, h: 4331569, poster: "./media/image23.jpeg", src: "./media/VAHCr_efv6A.mp4" },
        { type: "video", x: 8625477, y: 1344090, w: 3833595, h: 2156397, poster: "./media/image24.jpeg", src: "./media/VAHCoHmq_HQ.mp4" },
        { type: "video", x: 8625477, y: 3671277, w: 3833595, h: 2156397, poster: "./media/image25.jpeg", src: "./media/VAHCr34Qn5w.mp4" },
        { type: "text", x: 552077, y: 506986, w: 5200000, h: 700000, align: "left", fontSize: 2800, fontFamily: "Microsoft YaHei, 微软雅黑, sans-serif", color: "#000000", html: "<p>Dating信息流作品一览</p>" }
      ]
    },
    {
      background: "#ffffff",
      elements: [
        { type: "video", x: 4906029, y: 1425847, w: 2742013, h: 2742013, poster: "./media/image26.jpeg", src: "./media/VAHC2vzrzlE.mp4" },
        { type: "video", x: 3008446, y: 1428065, w: 1557370, h: 2832106, poster: "./media/image27.jpeg", src: "./media/VAHC2sJcdKo.mp4" },
        { type: "video", x: 3008446, y: 4379582, w: 1554446, h: 2763460, poster: "./media/image28.jpeg", src: "./media/VAHC2vTHWes.mp4" },
        { type: "video", x: 1280742, y: 4379582, w: 1554446, h: 2763460, poster: "./media/image29.jpeg", src: "./media/VAHC2lfhi14.mp4" },
        { type: "video", x: 8241520, y: 1445602, w: 1507828, h: 2742013, poster: "./media/image30.jpeg", src: "./media/VAHC2vcR0zk.mp4" },
        { type: "video", x: 1280742, y: 1428065, w: 1557370, h: 2832106, poster: "./media/image31.jpeg", src: "./media/VAHC2j0B3uI.mp4" },
        { type: "video", x: 9960700, y: 4319174, w: 1561102, h: 2775293, poster: "./media/image32.jpeg", src: "./media/VAHC2kmwDbs.mp4" },
        { type: "video", x: 8199572, y: 4339310, w: 1549776, h: 2755157, poster: "./media/image33.jpeg", src: "./media/VAHC2khpTJw.mp4" },
        { type: "video", x: 4761696, y: 4339310, w: 1572429, h: 2795429, poster: "./media/image34.jpeg", src: "./media/VAHC2mkLID8.mp4" },
        { type: "video", x: 6505575, y: 4339310, w: 1572429, h: 2795429, poster: "./media/image35.jpeg", src: "./media/VAHC2qjz-v4.mp4" },
        { type: "video", x: 9941910, y: 1498631, w: 1512554, h: 2688984, poster: "./media/image36.jpeg", src: "./media/VAHC2sbGvqI.mp4" },
        { type: "text", x: 0, y: 360000, w: 13004800, h: 600000, align: "center", html: "<p><span style='font-size:22pt;font-weight:300'>Sora2 pro专家 验证 多个跑通模型 单条 AI 素材</span></p>" },
        { type: "text", x: 8250000, y: 980000, w: 3600000, h: 700000, align: "left", html: "<p><span style='font-size:24pt;font-weight:600;color:#d84646'>月</span><span style='font-size:20pt;font-weight:300;color:#000'>消耗最高12万美刀</span></p>" }
      ]
    },
    {
      background: "#ffffff",
      elements: [
        { type: "image", x: 0, y: 0, w: 13004800, h: 7315200, src: "./media/image37.png", href: "https://www.xinpianchang.com/u10482737?channel=copyLink&from=webShare" },
        { type: "text", x: 4972382, y: 486034, w: 4409117, h: 433822, align: "center", fontSize: 2200, fontFamily: "Microsoft YaHei, 微软雅黑, sans-serif", color: "#ffffff", html: "<p>作品跳转入口</p>" },
        { type: "image", x: 6400000, y: 900000, w: 200000, h: 200000, src: "./media/image2.svg", href: "https://www.xinpianchang.com/u10482737?channel=copyLink&from=webShare" }
      ]
    },
    {
      background: "#ffffff",
      elements: [
        { type: "image", x: 0, y: 0, w: 13004800, h: 7315200, src: "./media/image38.png" }
      ]
    },
    {
      background: "#ffffff",
      elements: [
        { type: "image", x: 0, y: 0, w: 13011150, h: 7318772, src: "./media/image39.png" }
      ]
    },
    {
      background: "#ffffff",
      elements: [
        { type: "image", x: 5745041, y: 2649122, w: 3944938, h: 3944938, src: "./media/image40.jpeg" },
        { type: "image", x: 9662145, y: 591410, w: 2807923, h: 3411735, src: "./media/image41.jpeg" },
        { type: "image", x: 9689979, y: 3623295, w: 2780088, h: 3432657, src: "./media/image42.jpeg" },
        { type: "text", x: 5020998, y: 1211030, w: 4508209, h: 565351, align: "left", fontSize: 3335, fontFamily: "字由点字典黑 Light, PingFang SC, sans-serif", color: "#000000", html: "<p>Work Contact</p>" },
        { type: "text", x: 1223459, y: 2000252, w: 2080594, h: 392908, align: "left", fontSize: 1800, fontFamily: "字由点字典黑 Light, PingFang SC, sans-serif", color: "#000000", html: "<p>微信/WeChat:</p>" },
        { type: "text", x: 1219222, y: 2345743, w: 2697527, h: 540083, align: "left", fontSize: 2400, fontFamily: "字由点字典黑 Light, PingFang SC, sans-serif", color: "#000000", html: "<p>longagnol</p>" },
        { type: "text", x: 1223459, y: 3354276, w: 2080594, h: 392908, align: "left", fontSize: 1800, fontFamily: "字由点字典黑 Light, PingFang SC, sans-serif", color: "#000000", html: "<p>电话/Phone:</p>" },
        { type: "text", x: 1223459, y: 3716068, w: 3180260, h: 540083, align: "left", fontSize: 2400, fontFamily: "字由点字典黑 Light, PingFang SC, sans-serif", color: "#000000", html: "<p>13437837343</p>" },
        { type: "text", x: 1223459, y: 4661945, w: 2080594, h: 392908, align: "left", fontSize: 1800, fontFamily: "字由点字典黑 Light, PingFang SC, sans-serif", color: "#000000", html: "<p>邮箱/Email:</p>" },
        { type: "text", x: 1219222, y: 5044499, w: 5403528, h: 523573, align: "left", fontSize: 2400, fontFamily: "字由点字典黑 Light, PingFang SC, sans-serif", color: "#000000", html: "<p>794027087@qq.com</p>" }
      ]
    }
  ];

  function px(value, total) {
    return `${(value / total) * 100}%`;
  }

  function pointFromPpt(value) {
    return value / 100;
  }

  function createText(element) {
    const node = document.createElement("div");
    node.className = "slide-element slide-text";
    node.style.left = px(element.x, SLIDE_W);
    node.style.top = px(element.y, SLIDE_H);
    node.style.width = px(element.w, SLIDE_W);
    node.style.height = px(element.h, SLIDE_H);
    node.style.textAlign = element.align || "left";
    node.style.color = element.color || "#000";
    node.style.fontFamily = element.fontFamily || 'inherit';
    if (element.fontSize) node.style.fontSize = `${pointFromPpt(element.fontSize)}pt`;
    if (element.fontWeight) node.style.fontWeight = String(element.fontWeight);
    if (element.lineHeightPts) node.style.lineHeight = `${pointFromPpt(element.lineHeightPts)}pt`;
    if (element.letterSpacing) node.style.letterSpacing = `${element.letterSpacing / 100}pt`;
    if (element.noWrap !== false) node.style.whiteSpace = "normal";
    if (element.underline) node.style.textDecoration = "underline";
    if (element.rotate) {
      node.style.transform = `rotate(${element.rotate}deg)`;
      node.style.transformOrigin = "top left";
    }
    node.innerHTML = element.html;
    return node;
  }

  function createImage(element) {
    const wrap = document.createElement(element.href ? "a" : "div");
    wrap.className = "slide-element";
    wrap.style.left = px(element.x, SLIDE_W);
    wrap.style.top = px(element.y, SLIDE_H);
    wrap.style.width = px(element.w, SLIDE_W);
    wrap.style.height = px(element.h, SLIDE_H);
    if (element.href) {
      wrap.href = element.href;
      wrap.target = "_blank";
      wrap.rel = "noreferrer";
      wrap.classList.add("slide-link");
    }
    const img = document.createElement("img");
    img.className = "slide-image";
    img.src = element.src;
    img.alt = "";
    wrap.appendChild(img);
    return wrap;
  }

  function createVideo(element) {
    const wrap = document.createElement("div");
    wrap.className = "slide-element";
    wrap.style.left = px(element.x, SLIDE_W);
    wrap.style.top = px(element.y, SLIDE_H);
    wrap.style.width = px(element.w, SLIDE_W);
    wrap.style.height = px(element.h, SLIDE_H);
    const img = document.createElement("img");
    img.className = "slide-image";
    img.src = element.poster;
    img.alt = "";
    wrap.appendChild(img);
    return wrap;
  }

  function createLine(element) {
    const line = document.createElement("div");
    line.className = "slide-element";
    line.style.left = px(element.x, SLIDE_W);
    line.style.top = px(element.y, SLIDE_H);
    line.style.width = px(Math.max(element.w, element.stroke), SLIDE_W);
    line.style.height = px(Math.max(element.h, element.stroke), SLIDE_H);
    if (element.h === 0) {
      line.style.borderTop = `${(element.stroke / 12700).toFixed(2)}pt solid ${element.color}`;
    } else if (element.w === 0) {
      line.style.borderLeft = `${(element.stroke / 12700).toFixed(2)}pt solid ${element.color}`;
    } else {
      line.style.background = element.color;
    }
    return line;
  }

  function createElement(element) {
    if (element.type === "text") return createText(element);
    if (element.type === "image") return createImage(element);
    if (element.type === "video") return createVideo(element);
    if (element.type === "line") return createLine(element);
    return document.createElement("div");
  }

  const root = document.getElementById("ppt-root");

  slides.forEach((slide) => {
    const frame = document.createElement("section");
    frame.className = "slide-frame";

    const surface = document.createElement("div");
    surface.className = "slide-surface";
    surface.style.background = slide.background;

    slide.elements.forEach((element) => {
      surface.appendChild(createElement(element));
    });

    frame.appendChild(surface);
    root.appendChild(frame);
  });
})();
