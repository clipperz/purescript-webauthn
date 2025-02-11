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

export function isUserVerifyingPlatformAuthenticatorAvailableImpl () {
  return PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
}
