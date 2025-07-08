// project-detail.js

// 1. 项目数据对象
const projectData = {
  "art-pixel": {
    title: "Art Pixel",
    images: [
      "images/projects/art-pixel/Art Pixel-1.png",
      "images/projects/art-pixel/Art Pixel-2.png",
      "images/projects/art-pixel/Art Pixel-3.png",
      "images/projects/art-pixel/Art Pixel-4.png",
      "images/projects/art-pixel/Art Pixel-5.png",
      "images/projects/art-pixel/Art Pixel-6.png",
      "images/projects/art-pixel/Art Pixel-7.png",
      "images/projects/art-pixel/Art Pixel-8.png",
      "images/projects/art-pixel/Art Pixel-9.png",
      "images/projects/art-pixel/Art Pixel-10.png",
      "images/projects/art-pixel/Art Pixel-11.png",
      "images/projects/art-pixel/Art Pixel-12.png",
      "images/projects/art-pixel/Art Pixel-13.png",
      "images/projects/art-pixel/Art Pixel-14.png",
      "images/projects/art-pixel/Art Pixel-15.png",
      "images/projects/art-pixel/Art Pixel-16.png",
      "images/projects/art-pixel/Art Pixel-17.png",
      "images/projects/art-pixel/Art Pixel-18.png",
      "images/projects/art-pixel/Art Pixel-19.png",
      "images/projects/art-pixel/Art Pixel-20.png",
    ],
  },
  "funny-school": {
    title: "Funny School",
    images: [
      "images/projects/funny-school/乐哉校园1.png",
      "images/projects/funny-school/乐哉校园2.png",
      "images/projects/funny-school/乐哉校园3.png",
      "images/projects/funny-school/乐哉校园4.png",
      "images/projects/funny-school/乐哉校园5.png",
      "images/projects/funny-school/乐哉校园6.png",
      "images/projects/funny-school/乐哉校园7.png",
      "images/projects/funny-school/乐哉校园8.png",
      "images/projects/funny-school/乐哉校园9.png",
      "images/projects/funny-school/乐哉校园10.png",
      "images/projects/funny-school/乐哉校园11.png",
      "images/projects/funny-school/乐哉校园12.png",
      "images/projects/funny-school/乐哉校园13.png",
      "images/projects/funny-school/乐哉校园14.png",
      "images/projects/funny-school/乐哉校园15.png",
      "images/projects/funny-school/乐哉校园16.png",
      "images/projects/funny-school/乐哉校园17.png",
      "images/projects/funny-school/乐哉校园18.png",
      "images/projects/funny-school/乐哉校园19.png",
    ],
  },
  "random-password": {
    title: "Random Password",
    images: [
      "images/projects/random-password/密码生成器1.png",
      "images/projects/random-password/密码生成器2.png",
      "images/projects/random-password/密码生成器3.png",
      "images/projects/random-password/密码生成器4.png",
    ],
  },
  gfm: {
    title: "Green Finance Monitor",
    images: [
      "images/projects/gfm/GFM1.png",
      "images/projects/gfm/GFM2.png",
      "images/projects/gfm/GFM3.png",
      "images/projects/gfm/GFM4.png",
    ],
  },
  xhub: {
    title: "智枢",
    images: [
      "images/projects/xhub/智枢1.png",
      "images/projects/xhub/智枢2.png",
      "images/projects/xhub/智枢3.png",
      "images/projects/xhub/智枢4.png",
      "images/projects/xhub/智枢5.png",
    ],
  },
  papifeed: {
    title: "PapiFeed",
    images: [
      "images/projects/pet/PapiFeed-1.png",
      "images/projects/pet/PapiFeed-2.png",
      "images/projects/pet/PapiFeed-3.png",
      "images/projects/pet/PapiFeed-4.png",
      "images/projects/pet/PapiFeed-5.png",
      "images/projects/pet/PapiFeed-6.png",
      "images/projects/pet/PapiFeed-7.png",
      "images/projects/pet/PapiFeed-8.png",
      "images/projects/pet/PapiFeed-9.png",
      "images/projects/pet/PapiFeed-10.png",
    ],
  },
  _3CIM: {
    title: "3CIM WATCH",
    images: [
      "images/projects/3cim/国家气候中心1.png",
      "images/projects/3cim/国家气候中心2.png",
      "images/projects/3cim/国家气候中心3.png",
      "images/projects/3cim/国家气候中心4.png",
      "images/projects/3cim/国家气候中心5.png",
    ],
  },
  "smart-park": {
    title: "园区后台管理系统",
    images: [
      "images/projects/smart-park/园区后台管理系统-1.png",
      "images/projects/smart-park/园区后台管理系统-2.png",
      "images/projects/smart-park/园区后台管理系统-3.png",
      "images/projects/smart-park/园区后台管理系统-4.png",
      "images/projects/smart-park/园区后台管理系统-5.png",
      "images/projects/smart-park/园区后台管理系统-6.png",
      "images/projects/smart-park/园区后台管理系统-7.png",
      "images/projects/smart-park/园区后台管理系统-8.png",
      "images/projects/smart-park/园区后台管理系统-9.png",
    ],
  },
};

// 2. 获取 URL 中的参数（比如 id=art-pixel）
const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

// 3. 获取页面上的容器元素
const titleEl = document.getElementById("project-title");
const descEl = document.getElementById("project-description");
const galleryEl = document.getElementById("project-gallery");

// 4. 根据 id 加载对应内容
const project = projectData[projectId];

if (project) {
  titleEl.textContent = project.title;
  descEl.textContent = project.description;

  // 加载图片
  project.images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = project.title;
    img.className = "project-img";
    galleryEl.appendChild(img);
  });
} else {
  titleEl.textContent = "找不到项目 😢";
}
