import { c as create_ssr_component, e as escape, a as add_attribute } from "./app-28786bd1.js";
import "@fortawesome/free-brands-svg-icons";
const name = "Dzargo - Look Simple, Stay Humble ";
const description = "Selamat Datang :)";
const avatarUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP00i7CDDPv5Wuq-kA4kejsRpEPSz6TWGpnQ&usqp=CAU";
const biolinkUrl = "https://bio.dzargo.id";
const theme = "dark";
const links = [
  {
    text: "Belanja di Shopee",
    url: "https://shopee.co.id/dzargoid"
  },
  {
    text: "Belanja di Tokopedia",
    url: "https://www.tokopedia.com/dzargoofficial"
  },
  {
    text: "Belanja di Lazada",
    url: "https://www.lazada.co.id/shop/dzargoid"
  },
  {
    text: "Belanja di Official Store",
    url: "https://shop.dzargo.id"
  },
  {
    text: "Kunjungi Blog Dzargo",
    url: "https://blog.dzargo.id"
  }
];
const social = [
  {
    icon: "faInstagram",
    url: "https://instagram.com/dzargoid"
  },
  {
    icon: "faLinkedin",
    url: "https://www.linkedin.com/company/dzargoindonesia"
  },
  {
    icon: "faYoutube",
    url: "https://www.youtube.com/watch?v=pUTOnzN7I1s"
  }
];
var userConfig = {
  name,
  description,
  avatarUrl,
  biolinkUrl,
  theme,
  links,
  social
};
function load() {
  return { props: { config: userConfig } };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { config } = $$props;
  if ($$props.config === void 0 && $$bindings.config && config !== void 0)
    $$bindings.config(config);
  return `${$$result.head += `${$$result.title = `<title>${escape(config.name)} | Bio-Link</title>`, ""}<meta name="${"title"}"${add_attribute("content", `${config.name} | Bio-Link`, 0)} data-svelte="svelte-1qk3ipj"><meta name="${"description"}"${add_attribute("content", `${config.description} | Bio-Link`, 0)} data-svelte="svelte-1qk3ipj"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-1qk3ipj"><meta property="${"og:url"}"${add_attribute("content", config.biolinkUrl, 0)} data-svelte="svelte-1qk3ipj"><meta property="${"og:title"}"${add_attribute("content", `${config.name} | Bio-Link`, 0)} data-svelte="svelte-1qk3ipj"><meta property="${"og:description"}"${add_attribute("content", `${config.description} | Bio-Link`, 0)} data-svelte="svelte-1qk3ipj"><meta property="${"og:image"}" content="${"/prev.png"}" data-svelte="svelte-1qk3ipj"><meta property="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1qk3ipj"><meta property="${"twitter:url"}"${add_attribute("content", config.biolinkUrl, 0)} data-svelte="svelte-1qk3ipj"><meta property="${"twitter:title"}"${add_attribute("content", `${config.description} | Bio-Link`, 0)} data-svelte="svelte-1qk3ipj"><meta property="${"twitter:description"}"${add_attribute("content", `${config.description} | Bio-Link`, 0)} data-svelte="svelte-1qk3ipj"><meta property="${"twitter:image"}" content="${"/prev.png"}" data-svelte="svelte-1qk3ipj">`, ""}

${``}`;
});
export { Routes as default, load };
