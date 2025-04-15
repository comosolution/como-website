var _etrackerOnReady =
  typeof _etrackerOnReady === "undefined" ? [] : _etrackerOnReady;
function etrackerSetCookieConsent(e) {
  if (Cookiebot.consent.statistics)
    _etrackerOnReady.push(function () {
      _etracker.enableCookies("como-solution.de");
    });
  else
    _etrackerOnReady.push(function () {
      _etracker.disableCookies("como-solution.de");
    });
}
window.addEventListener(
  "CookiebotOnConsentReady",
  etrackerSetCookieConsent,
  false
);
