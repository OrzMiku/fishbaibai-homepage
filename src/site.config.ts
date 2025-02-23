import type { CardProps } from './components/Card.vue';

// Personal Infos
export const personalInfos = {
    name: "鱼摆摆不咕咕",
    description: "页面装修中...",
}

// Projects
export const projects: CardProps[] = [
    {
        title: 'Egretta 高清写实',
        description: '国产最新高清分辨率材质包，以写实的材质风格来描述现实的诗篇。',
        image: 'images/egretta_snapshots/img0.webp',
        tags: ['128x', '256x', '512x'],
        link: {
            link: 'https://minegraph.cn/resourcepacks/59',
            target: '_blank'
        }
    },
    {
        title: "VOXT PBR 创想体素",
        description: "立体像素，优秀的PBR体验。",
        image: "images/covers/voxt_1.webp",
        tags: ["16x"],
        link: {
            link: "https://minegraph.cn/resourcepacks/14",
            target: "_blank"
        }
    }
];

// Snapshots
export const snapshots: string[] = [
    "images/egretta_snapshots/img0.webp",
    "images/egretta_snapshots/img1.webp",
    "images/egretta_snapshots/img2.webp",
    "images/egretta_snapshots/img3.webp",
    "images/egretta_snapshots/img4.webp",
];