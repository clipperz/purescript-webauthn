"use strict";
export function createImpl (options) {
//   console.log(options);
  return navigator.credentials.create(options);
}

export function getImpl (options) {
  return navigator.credentials.get(options);
}

export function getTransportsImpl (response) {
  return response.getTransports();
}

export function getClientDataImpl (response) {
  const utf8Decoder = new TextDecoder('utf-8');
  const decodedClientData = utf8Decoder.decode(response.clientDataJSON)

  const clientDataObj = JSON.parse(decodedClientData);
  
  // https://chromium.googlesource.com/chromium/src/+/master/content/browser/webauth/client_data_json.md
  delete clientDataObj.other_keys_can_be_added_here

  return clientDataObj
}

export function isPRFEnabledImpl (publicKeyCredentials) {
  return publicKeyCredentials.getClientExtensionResults()?.prf?.enabled;
}

export function getPRFResultImpl (authCredentials) {
  const clientExtentionsResults = authCredentials.getClientExtensionResults();
  return clientExtentionsResults?.prf?.results?.first
}

export function isUserVerifyingPlatformAuthenticatorAvailableImpl () {
  return PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
}
