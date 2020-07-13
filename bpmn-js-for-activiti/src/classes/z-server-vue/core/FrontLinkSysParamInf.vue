<script>
class FrontLinkSysParamInf {
  constructor(sysFlag, sysMethod, sysParamInUrl, sysParamOutUrl) {
    this.sysFlag = sysFlag;
    this.sysMethod = sysMethod;
    this.sysParamInUrl = sysParamInUrl;
    this.sysParamOutUrl = sysParamOutUrl;
  }
}
function setSysLink(sysLink) {
  localStorage.setItem("sysLink", JSON.stringify(sysLink));
}
function getSysLink() {
  var sysLink;
  try {
    sysLink = JSON.parse(localStorage.getItem("sysLink"));
    return new FrontLinkSysParamInf(
      sysLink.sysFlag,
      sysLink.sysMethod,
      sysLink.sysParamInUrl,
      sysLink.sysParamOutUrl
    );
  } catch (error) {
    return {};
  }
}
function getSysLinkFromVue(vueComponent) {
  let sysFlag = vueComponent.$route.query.sysFlag;
  let sysMethod = vueComponent.$route.query.sysMethod;
  let sysParamInUrl = vueComponent.$route.query.sysParamInUrl;
  let sysParamOutUrl = vueComponent.$route.query.sysParamOutUrl;
  console.log("this sys flag is " + sysFlag);
  var sysLink = new FrontLinkSysParamInf(
    sysFlag,
    sysMethod,
    sysParamInUrl,
    sysParamOutUrl
  );
  setSysLink(sysLink);
  return sysLink;
}
export default {
  // getSysLinkFromVue:     getSysLinkFromVue,
  // FrontLinkSysParamInf: FrontLinkSysParamInf,
  // setSysLink:            setSysLink,
  // getSysLink:           getSysLink
  getSysLinkFromVue,
  FrontLinkSysParamInf,
  setSysLink,
  getSysLink
};
</script>

