<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';

import main_navbar from '../../../components/miannavbar/main_navbar.vue';
import mainfooter from '../../../components/footer/mainfooter/mainfooter.vue';
import membercard from '../../../components/membercard/membercard.vue';
import logofootermembercardatm from '../../../components/footer/logomemberfooter/logofootermembercardatm.vue'

const memberLogos = [
   {
      src: "/logoallmember/circle_scale/BCEL.png",
      alt: "Space AI",
   },
   {
      src: "/logoallmember/circle_scale/LDB.PNG",
      alt: "Partner A",
   },
   {
      src: "/logoallmember/circle_scale/APBB.PNG",
      alt: "Partner B",
   },
   {
      src: "/logoallmember/circle_scale/JDB.png",
      alt: "Client X",
   },
   {
      src: "/logoallmember/circle_scale/Maruhan.png",
      alt: "Client Y",
   },
   {
      src: "/logoallmember/circle_scale/lvb.PNG",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/ICBC.png",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/BOC.png",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/VTB.png",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/IB.png",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/ACLB.png",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/BIC.png",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/SACOM.PNG",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/STB.png",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/Kasikorn.png",
      alt: "Client Z",
   },
   {
      src: "/logoallmember/circle_scale/PUB.png",
      alt: "Client Z",
   },
   // ...continue until you have 16 logos, all with their own paths
];
const itemsPerPage = 6;
const currentPage = ref(1);

// --- Aside state (search + checkboxes) ---
const searchQuery = ref('');
const selectedFilters = ref([]);

const filterOptions = [
  { label: 'Show Lao banks', value: 'lao' },
  { label: 'Show foreign banks', value: 'foreign' },
  { label: 'With Facebook page', value: 'fb' },
  { label: 'With website', value: 'web' },
  { label: 'Special partners', value: 'partner' },
];

const members = ref([
    {
        image: "/logoallmember/retangle_scale/BCEL.png",
        title: "ທະນາຄານ ການຄ້າຕ່າງປະເທດລາວ ມະຫາຊົນ",
        subtitle: "Banque Pour Le Commerce Exterieur Lao Public",
        link1: "https://www.facebook.com/BCEL.Bank",
        link2: "https://www.bcel.com.la",
        layer1: "linear-gradient(#cb0202, #a71f33) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/circle_scale/ldb-gold.png",
        title: "ທະນາຄານ ພັດທະນາລາວ ຈຳກັດ",
        subtitle: "Lao Development Bank",
        link1: "https://www.facebook.com/ldblao",
        link2: "https://www.ldblao.la/",
        layer1: "linear-gradient(#233f73, #1c335f) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/APB.png",
        title: "ທະນາຄານ ສົ່ງເສີມກະສິກໍາ ຈຳກັດ ",
        subtitle: "Agricultural Promotion Bank",
        link1: "https://www.facebook.com/APB.Bank/?locale=th_TH",
        link2: "https://www.apb.com.la",
        layer1: "linear-gradient(#379685, #215a50) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/jdbretangle.png",
        title: "ທະນາຄານ ຮ່ວມພັດທະນາ ",
        subtitle: "Joint Development Bank",
        link1: "https://www.facebook.com/jdbbanklaos",
        link2: "https://www.jdbbank.com.la/",
        layer1: "linear-gradient(#2b83df, #0953a0) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/mjbl.jpeg",
        title: "ທະນາຄານ ມາຣູຮານ ເຈແປນ ລາວ ຈຳກັດ  ",
        subtitle: "MARUHAN Japan Bank Lao",
        link1: "https://www.facebook.com/MaruhanJapanBankLao/",
        link2: "https://maruhanjapanbanklao.com",
        layer1: "linear-gradient(#eb1c24, #6d0302) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/LVBnew.png",
        title: "ທະນາຄານ ຮ່ວມທຸລະກິດ ລາວ-ຫວຽດ  ",
        subtitle: "Laos - Vietnam Joint Venture Bank",
        link1: "https://www.facebook.com/LaoVietBank",
        link2: "https://www.laovietbank.com.la/la/",
        layer1: "linear-gradient(#18479e, #232299) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/ICBCB.jpeg",
        title: "ທະນາຄານ ອຸດສະຫະກໍາ ແລະ ການຄ້າຈີນ ຈຳກັດ   ",
        subtitle: "Industrial and Commercial Bank of China Limited",
        link1: "https://www.facebook.com/icbcglobal/",
        link2: "https://vientiane.icbc.com.cn/en/column/1438058341816746015.html",
        layer1: "linear-gradient(#cb0202, #a71f33) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/BOCB.png",
        title: " ທະນາຄານແຫ່ງ ປະເທດຈີນ ຈຳກັດ   ",
        subtitle: "Bank of China",
        link1: "https://www.facebook.com/profile.php?id=100066833677650",
        link2: "https://www.boc.cn/en/",
        layer1: "linear-gradient(#c00b11, #a71f33) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/VTB.jpg",
        title: " ທະນາຄານ ຫວຽດຕິນ ລາວ ຈຳກັດ  ",
        subtitle: "VietinBank",
        link1: "https://www.facebook.com/vtblao",
        link2: "https://laoefast.vietinbank.com.la",
        layer1: "linear-gradient(#0086e7, #0c51d1) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/IBbankk.JPG",
        title: " ທະນາຄານ ອິນໂດຈີນ ຈຳກັດ  ",
        subtitle: "Indochina Bank",
        link1: "https://www.facebook.com/indochina.bank.page",
        link2: "https://iblaos.com",
        layer1: "linear-gradient(#8828d1, #430076) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/ACL-bg.png",
        title: "ທະນາຄານ ເອຊີລີດາລາວ ຈໍາກັດ   ",
        subtitle: "ACLEDA BANK",
        link1: "https://www.facebook.com/acledabanklao",
        link2: "https://www.acledabank.com.la/la/lao/",
        layer1: "linear-gradient(#006DBD, #183A67) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/BICnew.jpeg",
        title: "ທະນາຄານ ບີໄອຊີ ລາວ ຈໍາກັດ    ",
        subtitle: "BIC Bank Lao",
        link1: "https://www.facebook.com/BICBANKLAO",
        link2: "https://www.biclaos.com",
        layer1: "linear-gradient(#344872, #213051) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/sacom.png",
        title: "ທະນາຄານ ໄຊງ່ອນເທືອງຕິ່ນ ລາວ   ",
        subtitle: "Saigon Thuong Tin Commercial Joint Stock Bank",
        link1: "https://www.facebook.com/SacombankLao",
        link2: "https://www.sacombank.com.la",
        layer1: "linear-gradient(#18479e, #232299) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/STB.jpg",
        title: "ທະນາຄານ ເອັສທີ ຈຳກັດ  ",
        subtitle: "ST Bank Limited",
        link1: "https://www.facebook.com/STBankLaos",
        link2: "https://www.stbanklaos.la",
        layer1: "linear-gradient(#0903ff, #010098) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/kbank.jpg",
        title: "ທະນາຄານ ກະສິກອນໄທ ຈຳກັດ ",
        subtitle: "KASIKORNBANK Public Company Limited",
        link1: "https://www.facebook.com/KBankLaos/",
        link2: "https://www.kasikornbank.com.la",
        layer1: "linear-gradient(#00a850, #006530) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
    {
        image: "/logoallmember/retangle_scale/public-bank.svg",
        title: "ທະນາຄານ ພາບລິກ",
        subtitle: "PUBLIC Bank",
        link1: "https://www.facebook.com/p/Public-Bank-Lao-61566020099587/",
        link2: "https://www.publicbank.com.la",
        layer1: "linear-gradient(#f32b24, #c32c2c) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat",
        layer2: "linear-gradient(321deg, transparent 0%, #b88a44 100%)",
        layer3: "linear-gradient(26deg, transparent 0%, #faf398 100%)",
        layer4: "linear-gradient(172deg, transparent 0%, #e0aa4e 100%)",
        layer5: "linear-gradient(270deg, transparent 0%, #f9f295 100%)",
    },
]);

// --- Filtered list (search -> pagination) ---
const filteredMembers = computed(() => {
    const q = searchQuery.value.trim().toLowerCase();

    let result = members.value;

    if (q) {
        result = result.filter((m) => {
            const title = (m.title || '').toLowerCase();
            const subtitle = (m.subtitle || '').toLowerCase();
            return title.includes(q) || subtitle.includes(q);
        });
    }

    // NOTE:
    // You can also apply selectedFilters.value here
    // when you decide real filter rules.
    return result;
});

const totalPages = computed(() =>
    Math.max(1, Math.ceil(filteredMembers.value.length / itemsPerPage))
);

const paginatedMembers = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredMembers.value.slice(start, start + itemsPerPage);
});

// --- GSAP animation setup ---
const cardsGridEl = ref(null);

const animateCards = () => {
    const grid = cardsGridEl.value;
    if (!grid) return;

    const cards = grid.children;
    if (!cards || !cards.length) return;

    // kill old tweens to avoid conflicts when clicking quickly
    gsap.killTweensOf(cards);

    gsap.fromTo(
        cards,
        {
            autoAlpha: 0,
            y: 24,
            scale: 0.96,
        },
        {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: 'power2.out',
            stagger: 0.06,
        }
    );
};

function goToPage(p) {
    const next = Math.min(Math.max(1, p), totalPages.value);
    if (next === currentPage.value) return; // avoid re-animating same page
    currentPage.value = next;
}

function prevPage() {
    goToPage(currentPage.value - 1);
}

function nextPage() {
    goToPage(currentPage.value + 1);
}

// กันกรณีลบ/เพิ่มสมาชิกแล้ว currentPage > totalPages
watch(totalPages, (tp) => {
    if (currentPage.value > tp) currentPage.value = tp;
});

// reset to first page when searching
watch(searchQuery, () => {
    currentPage.value = 1;
});

// Animate on mount
onMounted(async () => {
    await nextTick();
    animateCards();
});

// Animate whenever page changes
watch(currentPage, async () => {
    await nextTick();
    animateCards();
});

// Animate when filtered list changes (search/filter)
watch(filteredMembers, async () => {
    await nextTick();
    animateCards();
});
</script>

<template>
    <main_navbar
        title="ສະມາຊິກລະບົບບັດທະນາຄານຮ່ວມກັນ"
        :breadcrumb="[
            'ໜ້າຫຼັກ',
            'ສະມາຊິກ',
            'ສະມາຊິກລະບົບບັດທະນາຄານຮ່ວມກັນ'
        ]"
        background-image="/member/membercard/membercrd-2.png"
    />
    <div class="boxmargin" style="width: 100%; height:20vh"></div>
    <div class="membercardcontainer">
        <div class="leftsection">
            <!-- attach ref here so GSAP can target all cards -->
            <div class="cardsgrid" ref="cardsGridEl">
                <membercard
                    v-for="(m, idx) in paginatedMembers"
                    :key="`${m.title}-${idx}`"
                    :image="m.image"
                    :title="m.title"
                    :subtitle="m.subtitle"
                    :link1="m.link1"
                    :link2="m.link2"
                    :layer1="m.layer1"
                    :layer2="m.layer2"
                    :layer3="m.layer3"
                    :layer4="m.layer4"
                    :layer5="m.layer5"
                />
            </div>
        </div>

        <aside class="rightcontainer">
            <div class="filterPanel">
                <div class="filterHeader">
                    <div>
                        <h2 class="filterTitle">ຄົ້ນຫາທະນາຄານສະມາຊິກ</h2>
                        <p class="filterSubtitle">
                            ຄົ້ນຫາທະນາຄານສະມາຊິກລະບົບບັດຮ່ວມກັນ
                        </p>
                    </div>

                    <span class="filterBadge">LAPNet </span>
                </div>

                <!-- Search box -->
                <div class="searchBox">
                    <span class="searchIcon">🔍</span>
                    <input
                        v-model="searchQuery"
                        type="text"
                        class="searchInput"
                        placeholder="Search by bank name or subtitle..."
                    />
                </div>

                <div class="filterDivider"></div>

                <!-- Checkbox filters -->
                <div class="filterGroup">
                    <div class="filterGroupHeader">
                        <span class="filterGroupTitle">Quick filters</span>
                        <span class="filterGroupHint">5 options</span>
                    </div>

                    <div class="filterChecks">
                        <label
                            v-for="opt in filterOptions"
                            :key="opt.value"
                            class="filterCheck"
                        >
                            <input
                                type="checkbox"
                                :value="opt.value"
                                v-model="selectedFilters"
                            />
                            <span class="checkFake">
                                <span class="checkTick">✓</span>
                            </span>
                            <span class="checkLabel">{{ opt.label }}</span>
                        </label>
                    </div>
                </div>

                <div class="filterFooter">
                    <p class="filterFooterText">
                        Showing
                        <span class="filterFooterHighlight">
                            {{ filteredMembers.length }}
                        </span>
                        members
                    </p>
                    <p class="filterFooterSub">
                        Search is applied before pagination.
                    </p>
                </div>
            </div>
        </aside>
    </div>

    <div class="paginationcontainer">
        <div class="pagerWrap" aria-label="Pagination">
            <button
                class="pagerBtn"
                :disabled="currentPage === 1"
                @click="prevPage"
                aria-label="Previous page"
            >
                <span class="chev">‹</span>
                <span class="txt">Prev</span>
            </button>

            <div class="pagerPills" role="navigation" aria-label="Page numbers">
                <button
                    v-for="p in totalPages"
                    :key="p"
                    class="pagePill"
                    :class="{ active: p === currentPage }"
                    @click="goToPage(p)"
                    :aria-current="p === currentPage ? 'page' : undefined"
                    :aria-label="`Go to page ${p}`"
                >
                    {{ p }}
                </button>
            </div>

            <button
                class="pagerBtn"
                :disabled="currentPage === totalPages"
                @click="nextPage"
                aria-label="Next page"
            >
                <span class="txt">Next</span>
                <span class="chev">›</span>
            </button>
        </div>
    </div>

    <div class="boxmargin" style="width: 100%; height: 15vh"></div>
    <logofootermembercardatm :logos="memberLogos"/>
    <mainfooter />
</template>

<style scoped>
.membercardcontainer {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 18px;
    height: auto;
    border: 1px solid red;
}

/* Left section (cards) */
.leftsection {
    width: 55%;
    height: auto;
    /* border: 1px solid blue; */
}

/* Right aside container (42% of parent, full height) */
.rightcontainer {
    width: 42%;
    border: 1px solid red;
   height: 700px;
    /* make aside content stretch full container */
    display: flex;
    align-items: stretch;
}

/* Tech-style panel */
.filterPanel {
    width: 100%;
    height: 100%;
    padding: 18px 20px;
    border-radius: 20px;

    background: linear-gradient(145deg, #ffffff 0%, #e7f0ff 35%, #f6fbff 100%);
    border: 1px solid rgba(58, 123, 255, 0.5);
    box-shadow:
        0 14px 40px rgba(10, 32, 94, 0.28),
        0 0 0 1px rgba(255, 255, 255, 0.7);

    display: flex;
    flex-direction: column;
    gap: 18px;
}

/* Header */
.filterHeader {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
}

.filterTitle {
    font-size: var( --fs-lg);
    font-weight: 700;
    color: #0a1f55;
    margin: 0;
}

.filterSubtitle {
    margin: 3px 0 0;
    font-size: var(--fs-sm);
    color: #5a6f9f;
}

.filterBadge {
    font-size: 11px;
    padding: 6px 10px;
    border-radius: 999px;
    background: linear-gradient(120deg, #1b5cff, #46a9ff);
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 0.3px;
    box-shadow: 0 0 12px rgba(58, 123, 255, 0.75);
    align-self: center;
}

/* Search box */
.searchBox {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border-radius: 999px;

    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(102, 153, 255, 0.7);
    box-shadow:
        0 6px 16px rgba(9, 30, 66, 0.18),
        inset 0 0 0 1px rgba(255, 255, 255, 0.9);

    backdrop-filter: blur(10px);
}

.searchIcon {
    font-size: 16px;
}

.searchInput {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
    color: #10275b;
}

.searchInput::placeholder {
    color: #9aaad9;
}

/* Divider line */
.filterDivider {
    height: 1px;
    width: 100%;
    border-radius: 999px;
    background: linear-gradient(
        90deg,
        rgba(46, 94, 255, 0) 0%,
        rgba(46, 94, 255, 0.7) 35%,
        rgba(46, 94, 255, 0.7) 65%,
        rgba(46, 94, 255, 0) 100%
    );
}

/* Checkbox group */
.filterGroup {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.filterGroupHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.filterGroupTitle {
    font-size: 14px;
    font-weight: 600;
    color: #12306a;
}

.filterGroupHint {
    font-size: 11px;
    color: #7d90c7;
}

.filterChecks {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

/* Checkbox item */
.filterCheck {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 13px;
    color: #21345f;
    user-select: none;
}

/* hide default checkbox */
.filterCheck input {
    display: none;
}

.checkFake {
    width: 18px;
    height: 18px;
    border-radius: 6px;
    border: 1px solid rgba(102, 155, 255, 0.9);
    background: radial-gradient(circle at 30% 0%, #ffffff, #dfe9ff);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
        0 0 0 1px rgba(255, 255, 255, 0.9),
        0 4px 10px rgba(44, 93, 255, 0.35);
    transition:
        background 0.16s ease,
        border-color 0.16s ease,
        box-shadow 0.16s ease,
        transform 0.12s ease;
}

.checkTick {
    font-size: 12px;
    opacity: 0;
    transform: scale(0.3);
    transition:
        opacity 0.12s ease,
        transform 0.12s ease;
}

/* checked state */
.filterCheck input:checked + .checkFake {
    background: linear-gradient(135deg, #1a57ff, #47b3ff);
    border-color: #ffffff;
    box-shadow:
        0 0 0 1px rgba(255, 255, 255, 0.7),
        0 6px 14px rgba(43, 100, 255, 0.5);
    transform: translateY(-1px);
}

.filterCheck input:checked + .checkFake .checkTick {
    opacity: 1;
    transform: scale(1);
    color: #ffffff;
}

.checkLabel {
    font-size: 13px;
}

/* Footer info */
.filterFooter {
    margin-top: auto;
    padding-top: 4px;
    border-top: 1px dashed rgba(148, 179, 255, 0.7);
}

.filterFooterText {
    font-size: 13px;
    color: #1e3567;
    margin: 6px 0 0;
}

.filterFooterHighlight {
    font-weight: 700;
    color: #275eff;
}

.filterFooterSub {
    font-size: 11px;
    color: #8090c2;
    margin: 2px 0 0;
}

/* Grid membercard 6 ใบต่อหน้า (2 คอลัมน์ x 3 แถว) */
.cardsgrid {
    display: grid;
    gap: 18px;
    grid-template-columns: 1fr;
    align-items: stretch;
    /* help hide slide-in y overflow */
    overflow: hidden;
}

/* ---------- Futuristic Blue Gradient Pagination ---------- */
.paginationcontainer {
    width: 40%;
    margin: 0 auto;
    height: auto;
    border: none;
}

/* ------- Blue Gradient Pagination ------- */
.pagerWrap {
    margin-top: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    padding: 10px 14px;
    border-radius: 999px;

    background: #00123d;
    background: linear-gradient(
        95deg,
        rgba(0, 18, 61, 1) 0%,
        rgba(0, 51, 171, 1) 35%,
        rgba(6, 0, 120, 1) 100%
    );
    border: 1px solid rgba(152, 189, 255, 0.8);
    box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.45),
        0 0 0 1px rgba(255, 255, 255, 0.06);
}

/* Prev / Next buttons */
.pagerBtn {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    border-radius: 999px;
    cursor: pointer;
    user-select: none;

    font-size: 13px;
    letter-spacing: 0.2px;

    color: #e9f3ff;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(184, 210, 255, 0.7);

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(6px);
    transition:
        transform 0.16s ease,
        box-shadow 0.16s ease,
        background 0.16s ease,
        opacity 0.16s ease;
}

.pagerBtn:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.16);
    box-shadow: 0 7px 16px rgba(0, 0, 0, 0.35);
}

.pagerBtn:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.chev {
    font-size: 16px;
    line-height: 1;
}

/* Pills container */
.pagerPills {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 6px;
    border-radius: 999px;

    background: rgba(1, 8, 30, 0.55);
    border: 1px solid rgba(167, 199, 255, 0.6);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.35);
}

/* Page pills */
.pagePill {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    cursor: pointer;

    font-size: 13px;
    font-weight: 500;

    color: #dbe8ff;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(179, 204, 255, 0.7);

    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    transition:
        transform 0.16s ease,
        box-shadow 0.16s ease,
        background 0.16s ease,
        color 0.16s ease,
        border-color 0.16s ease;
}

.pagePill:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.18);
    border-color: #c4d6ff;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.45);
}

.pagePill.active {
    background: #ffffff;
    color: #0b2e7e;
    border-color: #ffffff;
    box-shadow:
        0 8px 20px rgba(0, 0, 0, 0.5),
        0 0 0 3px rgba(116, 170, 255, 0.6);
}

/* Responsive tweak */
@media (max-width: 900px) {
   .membercardcontainer {
        flex-direction: column;   /* stack vertically */
        width: 95%;
    }

    /* aside first, cards second */
    .rightcontainer {
        width: 100%;
        height: auto;            /* don’t force 700px on small screens */
        order: 1;                /* show first */
    }

    .leftsection {
        width: 100%;
        order: 2;                /* show after aside */
    }

    .paginationcontainer {
        width: 100%;
    }

    .pagerWrap {
        flex-wrap: wrap;
        padding: 10px 10px;
        gap: 8px;
    }
}
</style>
