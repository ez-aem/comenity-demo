const { config } = require("dotenv");
const fetch = require("node-fetch");
const FormData = require("form-data");
const Styles = require("../styles/index.js");

config();

const mode = process.env.MODE;
// const baseUrl = mode === "dev" ? process.env.DEV_AEM_URL : process.env.PROD_AEM_URL;
const baseUrl = "https://author-p32152-e108202.adobeaemcloud.com"
const creds = "sites30:sites30";
// const creds = mode === "dev" ? process.env.DEV_CREDENTIALS : process.env.PROD_CREDENTIALS;
const site = "testing_country_languagenesting";
// const site = mode === "dev" ? process.env.DEV_AEM_SITE : process.env.PROD_AEM_SITE;
const component = "core/wcm/components/accordion/v1/accordion";
const policy = "content";
const policyUrl = `/conf/${site}/settings/wcm/policies/${component}/${policy}/cq:styleGroups`
const url = baseUrl.replace("://", `://${creds}@`).concat(policyUrl);

const componentStyleGroups = Styles[component]

const form = new FormData();
form.append(":operation", "import");
form.append(":contentType", "json");
form.append(":content", JSON.stringify(componentStyleGroups.format("json")));


fetch(url, { method: "POST", body: form }).then(res => res.text()).then(body => console.log(body));
